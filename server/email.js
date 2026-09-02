import nodemailer from 'nodemailer';
import { config, hasMail } from './config.js';

const labels = {
  land: 'Є земля', investment: 'Інвестиція', presentation: 'Презентація',
  consultation: 'Консультація', partnership: 'Партнерство',
};

const transporter = hasMail ? nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: { user: config.smtp.user, pass: config.smtp.password },
}) : null;

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

export async function sendLeadNotification(lead) {
  if (!transporter) return false;
  const interest = labels[lead.interest] || lead.interest;
  await transporter.sendMail({
    from: config.smtp.from,
    to: config.smtp.to,
    subject: `Нова заявка Green.Lev.Travel — ${interest}`,
    text: `Ім’я: ${lead.name}\nКонтакт: ${lead.contact}\nІнтерес: ${interest}\nID: ${lead.id}`,
    html: `<h2>Нова заявка Green.Lev.Travel</h2><p><b>Ім’я:</b> ${escapeHtml(lead.name)}</p><p><b>Контакт:</b> ${escapeHtml(lead.contact)}</p><p><b>Інтерес:</b> ${escapeHtml(interest)}</p><p><b>ID:</b> ${lead.id}</p>`,
  });
  return true;
}
