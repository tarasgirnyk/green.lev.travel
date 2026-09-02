import compression from 'compression';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config, hasDatabase, hasMail } from './config.js';
import { createLead, databaseHealth, ensureSchema, markEmailSent, pool } from './db.js';
import { sendLeadNotification } from './email.js';
import { leadSchema } from './validation.js';

const app = express();
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', async (_request, response) => {
  let database = false;
  try { database = await databaseHealth(); } catch { database = false; }
  response.status(database || !hasDatabase ? 200 : 503).json({
    ok: database || !hasDatabase,
    database: database ? 'connected' : hasDatabase ? 'error' : 'not_configured',
    mail: hasMail ? 'configured' : 'not_configured',
  });
});

const leadLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 8, standardHeaders: 'draft-8', legacyHeaders: false });
app.post('/api/leads', leadLimiter, async (request, response) => {
  const parsed = leadSchema.safeParse(request.body);
  if (!parsed.success) return response.status(400).json({ message: 'Перевірте правильність заповнених полів.' });
  if (parsed.data.website) return response.status(202).json({ ok: true });
  try {
    const lead = await createLead(parsed.data);
    try {
      if (await sendLeadNotification(lead)) await markEmailSent(lead.id);
    } catch (error) {
      console.error('Mail notification failed:', error.message);
    }
    return response.status(201).json({ ok: true, id: lead.id });
  } catch (error) {
    console.error('Lead creation failed:', error.message);
    const message = error.message === 'DATABASE_NOT_CONFIGURED'
      ? 'Сервіс заявок ще налаштовується. Будь ласка, напишіть нам на hello@green.lev.travel.'
      : 'Не вдалося зберегти заявку. Спробуйте ще раз пізніше.';
    return response.status(503).json({ message });
  }
});

app.use(express.static(dist, { maxAge: config.env === 'production' ? '7d' : 0 }));
app.use((request, response, next) => {
  if (request.method === 'GET' && !request.path.startsWith('/api/')) {
    return response.sendFile(path.join(dist, 'index.html'));
  }
  return next();
});

await ensureSchema();
const server = app.listen(config.port, '0.0.0.0', () => {
  console.log(`Green.Lev.Travel listening on :${config.port}`);
  console.log(`PostgreSQL: ${hasDatabase ? 'configured' : 'not configured'}; email: ${hasMail ? 'configured' : 'not configured'}`);
});

const shutdown = async () => {
  server.close();
  if (pool) await pool.end();
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
