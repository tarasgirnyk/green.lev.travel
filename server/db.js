import pg from 'pg';
import { config, hasDatabase } from './config.js';

const { Pool } = pg;
export const pool = hasDatabase ? new Pool({
  connectionString: config.databaseUrl,
  ssl: config.databaseSsl ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30_000,
}) : null;

export async function ensureSchema() {
  if (!pool) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      contact VARCHAR(255) NOT NULL,
      interest VARCHAR(40) NOT NULL,
      email_sent BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
    CREATE INDEX IF NOT EXISTS leads_interest_idx ON leads (interest);
  `);
}

export async function createLead({ name, contact, interest }) {
  if (!pool) throw new Error('DATABASE_NOT_CONFIGURED');
  const result = await pool.query(
    `INSERT INTO leads (name, contact, interest) VALUES ($1, $2, $3)
     RETURNING id, name, contact, interest, created_at`,
    [name, contact, interest],
  );
  return result.rows[0];
}

export async function markEmailSent(id) {
  if (pool) await pool.query('UPDATE leads SET email_sent = TRUE WHERE id = $1', [id]);
}

export async function databaseHealth() {
  if (!pool) return false;
  await pool.query('SELECT 1');
  return true;
}
