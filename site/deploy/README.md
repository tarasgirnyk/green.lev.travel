# Деплой lev.plus

- Сервер: `91.245.76.78`, каталог `/opt/lev-plus`
- Домен: https://lev.plus (www → редирект), сертифікат Let's Encrypt (`certbot --webroot -w /var/www/certbot`)
- Застосунок: `127.0.0.1:3500` → nginx `/etc/nginx/sites-enabled/lev-plus` (копія — `nginx-lev-plus.conf`)
- Сайт тимчасово закритий basic auth (`/etc/nginx/.htpasswd-lev-plus`). Щоб відкрити — прибрати рядки `auth_basic*` і `nginx -s reload`.
- Секрети — у `/opt/lev-plus/.env` на сервері (`POSTGRES_PASSWORD`, `PAYLOAD_SECRET`), у git їх немає.

## Оновлення

На сервері мало пам'яті для `next build`, тому образ збираємо локально:

```powershell
cd site
docker build --platform linux/amd64 -t lev-plus-site:latest .
docker save lev-plus-site:latest | ssh root@91.245.76.78 docker load
ssh root@91.245.76.78 "cd /opt/lev-plus && docker compose up -d"
```

## Схема бази

У продакшні Payload не змінює схему сам. Після зміни колекцій чи полів: локально `pnpm migrate:create`, закомітити міграцію, а після деплою виконати міграції. Перший запуск зроблено перенесенням локальної бази (`pg_dump`) і папки `media`.
