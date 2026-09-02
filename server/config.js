import 'dotenv/config';

const bool = (value) => String(value).toLowerCase() === 'true';

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || '',
  databaseSsl: bool(process.env.DATABASE_SSL),
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT || 587),
    secure: bool(process.env.SMTP_SECURE),
    user: process.env.SMTP_USER || '',
    password: process.env.SMTP_PASSWORD || process.env.SMTP_PASS || '',
    from: process.env.MAIL_FROM || (
      process.env.EMAIL_FROM_ADDRESS
        ? `${process.env.EMAIL_FROM_NAME || 'Green.Lev.Travel'} <${process.env.EMAIL_FROM_ADDRESS}>`
        : 'Green.Lev.Travel <site@green.lev.travel>'
    ),
    to: process.env.MAIL_TO || process.env.EMAIL_FROM_ADDRESS || 'hello@green.lev.travel',
  },
};

export const hasDatabase = Boolean(config.databaseUrl);
export const hasMail = Boolean(config.smtp.host && config.smtp.user && config.smtp.password);
