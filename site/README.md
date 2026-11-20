# lev.plus — сайт

Next.js 16 + Payload CMS 3 + PostgreSQL, усе на JavaScript. Дизайн — v2 головної з `../lev.plus Design System/ui_kits/website`.

## Запуск локально

Потрібні Node 24.22+ (або 22.23.5+), pnpm і Docker Desktop.

```powershell
cd site
pnpm install
copy .env.example .env   # вписати PAYLOAD_SECRET
pnpm db:up               # Postgres у Docker, порт 5440
pnpm dev                 # http://localhost:3500
pnpm seed                # один раз: стартовий контент у базу
pnpm seed:designs        # один раз: готові інтерʼєри з ../business/дизайни
```

Адмінка: http://localhost:3500/admin. При першому вході Payload попросить створити адміністратора.

## Що де

| Що | Де |
|---|---|
| Колекції: вілли, готові інтер'єри, теми інтер'єру, FAQ, команда, заявки, медіа, користувачі | `src/collections/index.js` |
| Глобали: «Головна сторінка» (усі тексти секцій), «Налаштування сайту» | `src/globals/index.js` |
| Стартовий контент (і запасний, якщо поле порожнє) | `src/content/defaults.js` |
| Сторінка й секції | `src/app/(frontend)/page.jsx`, `src/components/` |
| Стилі й токени бренду | `src/app/(frontend)/site.css` |
| Форма заявки → колекція «Заявки» | `src/app/(frontend)/actions.js` |

- Розділ «Команда» з'являється, коли в адмінці додано хоча б одну людину.
- Фото вілл, першого екрана й клубу завантажуються в адмінці; без них показуємо загальний рендер `public/img/cabin-forest.png`.
- У розробці схема БД оновлюється автоматично. Перед продакшном: `pnpm migrate:create`, на сервері `pnpm migrate`.

## Продакшн

```powershell
docker compose --profile app up -d --build
```

Потрібні змінні `PAYLOAD_SECRET` і `NEXT_PUBLIC_SERVER_URL`. Завантажені файли зберігаються у volume `media`.
