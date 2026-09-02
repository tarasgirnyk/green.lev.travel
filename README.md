# Green.Lev.Travel

Лендінг і система збору заявок для Green.Lev.Travel.

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Email: SMTP через Nodemailer
- Production: Docker Compose + Nginx + Let's Encrypt

## Швидкий запуск через Docker

Потрібні Docker і Docker Compose.

```bash
cp .env.example .env
```

У `.env` обов'язково змініть `POSTGRES_PASSWORD`. Для надсилання заявок на пошту також заповніть SMTP-змінні.

```bash
docker compose up -d --build
```

Після запуску сайт буде доступний за адресою `http://127.0.0.1:3000`.

Корисні команди:

```bash
# Стан контейнерів
docker compose ps

# Логи застосунку
docker compose logs -f app

# Зупинити застосунок
docker compose down

# Зупинити й видалити локальну базу даних
docker compose down -v
```

Команда з `-v` видаляє всі локальні заявки з контейнерної бази.

## Запуск для розробки

Потрібні Node.js 24+, pnpm 11+ і Docker.

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env
```

У `.env` залиште локальний PostgreSQL на порту `5433`:

```env
DATABASE_URL=postgresql://green_lev:change_me@127.0.0.1:5433/green_lev
POSTGRES_PASSWORD=change_me
POSTGRES_BIND_PORT=5433
```

Запустіть лише базу даних, а потім frontend і API:

```bash
docker compose up -d db
pnpm dev
```

- Frontend: `http://127.0.0.1:5173`
- API: `http://127.0.0.1:3000`
- Health-check: `http://127.0.0.1:3000/api/health`

Таблиця `leads` створюється автоматично під час запуску API. Її SQL-схема також зберігається у `db/schema.sql`.

## Змінні середовища

| Змінна | Призначення |
| --- | --- |
| `PORT` | Внутрішній порт Node.js API |
| `APP_BIND_PORT` | Локальний порт Docker-застосунку |
| `POSTGRES_PASSWORD` | Пароль контейнерної PostgreSQL |
| `POSTGRES_BIND_PORT` | Локальний порт PostgreSQL, стандартно `5433` |
| `DATABASE_URL` | Рядок підключення Node.js до PostgreSQL |
| `DATABASE_SSL` | Використовувати SSL для зовнішньої PostgreSQL |
| `SMTP_HOST` | SMTP-сервер |
| `SMTP_PORT` | SMTP-порт |
| `SMTP_SECURE` | `true` для прямого TLS, зазвичай порт `465` |
| `SMTP_USER` | SMTP-користувач |
| `SMTP_PASSWORD` | SMTP-пароль |
| `MAIL_FROM` | Відправник листа |
| `MAIL_TO` | Адреса, на яку надходять заявки |
| `SHARED_MAIL_ENV_FILE` | Необов'язковий шлях до спільного SMTP env-файлу |

Не додавайте `.env` або поштові паролі в Git.

## Production build без Docker

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm build
NODE_ENV=production pnpm start
```

Перед Node.js потрібно поставити Nginx або Caddy та проксувати домен на порт застосунку.

## Поточний production

- Сайт: [https://green.lev.travel](https://green.lev.travel)
- Сервер: `91.245.76.78`
- Каталог: `/opt/green-lev-travel`
- Внутрішній upstream: `127.0.0.1:3200`
- Контейнери: Node.js application + окремий PostgreSQL
- Nginx-конфіг: `deploy/nginx-green-lev-travel.conf`
- HTTPS: Let's Encrypt з автоматичним поновленням

Оновлення вже завантаженого коду на сервері:

```bash
ssh root@91.245.76.78
cd /opt/green-lev-travel
docker compose up -d --build
curl -fsS https://green.lev.travel/api/health
```

Очікувана відповідь health-check:

```json
{"ok":true,"database":"connected","mail":"configured"}
```
