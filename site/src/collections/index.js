import path from 'path'

const isAdmin = ({ req }) => Boolean(req.user)
const publicRead = { read: () => true, create: isAdmin, update: isAdmin, delete: isAdmin }
const orderField = {
  name: 'order',
  label: 'Порядок',
  type: 'number',
  defaultValue: 0,
  admin: { position: 'sidebar', description: 'Менше число — вище на сторінці' },
}

export const Users = {
  slug: 'users',
  labels: { singular: 'Користувач', plural: 'Користувачі' },
  admin: { useAsTitle: 'email', group: 'Система' },
  auth: true,
  fields: [{ name: 'name', label: "Ім'я", type: 'text' }],
}

export const Media = {
  slug: 'media',
  labels: { singular: 'Файл', plural: 'Медіа' },
  admin: { group: 'Система' },
  access: publicRead,
  upload: {
    staticDir: path.resolve(process.cwd(), 'media'),
    mimeTypes: ['image/*'],
    // Оригінали зменшуємо й зберігаємо у WebP — рендери з ChatGPT важать по 2–3 МБ.
    resizeOptions: { width: 2400, withoutEnlargement: true },
    formatOptions: { format: 'webp', options: { quality: 84 } },
    imageSizes: [
      { name: 'thumb', width: 360, formatOptions: { format: 'webp', options: { quality: 78 } } },
      { name: 'card', width: 900, formatOptions: { format: 'webp', options: { quality: 82 } } },
      { name: 'hero', width: 2000, formatOptions: { format: 'webp', options: { quality: 84 } } },
    ],
  },
  fields: [{ name: 'alt', label: 'Опис (alt)', type: 'text', required: true }],
}

export const Houses = {
  slug: 'houses',
  labels: { singular: 'Тип будинку', plural: 'Лінійка вілл' },
  admin: { useAsTitle: 'name', defaultColumns: ['number', 'name', 'kind', 'order'], group: 'Контент' },
  defaultSort: 'order',
  access: publicRead,
  fields: [
    { type: 'row', fields: [
      { name: 'number', label: 'Номер', type: 'text', required: true, admin: { width: '20%' } },
      { name: 'name', label: 'Назва', type: 'text', required: true },
    ] },
    { name: 'kind', label: 'Формат', type: 'text', required: true },
    { name: 'audience', label: 'Для кого', type: 'text' },
    { name: 'purpose', label: 'Для чого цей тип (1–2 речення)', type: 'textarea' },
    { type: 'row', fields: [
      { name: 'guests', label: 'Гостей', type: 'text' },
      { name: 'area', label: 'Площа', type: 'text', admin: { description: 'Напр. «≈ 32 м²»' } },
      { name: 'bedrooms', label: 'Спальні', type: 'text' },
    ] },
    { name: 'specs', label: 'Склад будинку', type: 'array', labels: { singular: 'Пункт', plural: 'Склад' }, fields: [{ name: 'text', label: 'Текст', type: 'text', required: true }] },
    { name: 'image', label: 'Зображення', type: 'upload', relationTo: 'media', admin: { description: 'Якщо порожньо — показуємо загальний рендер' } },
    { name: 'imagePosition', label: 'Фокус зображення (CSS background-position)', type: 'text', defaultValue: 'center' },
    { name: 'priceLabel', label: 'Ціна', type: 'text', defaultValue: 'за запитом' },
    orderField,
  ],
}

export const Designs = {
  slug: 'designs',
  labels: { singular: "Інтер'єр", plural: "Готові інтер'єри" },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'house', 'published', 'order'],
    group: 'Контент',
    description: 'Варіанти оформлення будинків, які показуємо у вкладках типів на головній',
  },
  defaultSort: 'order',
  access: publicRead,
  fields: [
    { name: 'name', label: 'Назва', type: 'text', required: true },
    { name: 'house', label: 'Тип будинку', type: 'relationship', relationTo: 'houses', required: true },
    { name: 'tagline', label: 'Настрій (кілька слів)', type: 'text' },
    { name: 'description', label: 'Опис', type: 'textarea' },
    {
      name: 'images', label: 'Зображення', type: 'array', minRows: 1,
      labels: { singular: 'Зображення', plural: 'Зображення' },
      admin: { description: 'Перше зображення — обкладинка' },
      fields: [
        { name: 'image', label: 'Файл', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', label: 'Підпис (напр. «Студія», «Тераса»)', type: 'text' },
      ],
    },
    { name: 'published', label: 'Показувати на сайті', type: 'checkbox', defaultValue: true, admin: { position: 'sidebar' } },
    orderField,
  ],
}

export const InteriorThemes = {
  slug: 'interior-themes',
  labels: { singular: "Тема інтер'єру", plural: "Теми інтер'єру" },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'order'], group: 'Контент' },
  defaultSort: 'order',
  access: publicRead,
  fields: [
    { name: 'name', label: 'Назва', type: 'text', required: true },
    { name: 'description', label: 'Короткий опис', type: 'textarea' },
    orderField,
  ],
}

export const Faqs = {
  slug: 'faqs',
  labels: { singular: 'Питання', plural: 'FAQ' },
  admin: { useAsTitle: 'question', defaultColumns: ['question', 'order'], group: 'Контент' },
  defaultSort: 'order',
  access: publicRead,
  fields: [
    { name: 'question', label: 'Питання', type: 'text', required: true },
    { name: 'answer', label: 'Відповідь', type: 'textarea', required: true },
    orderField,
  ],
}

export const TeamMembers = {
  slug: 'team-members',
  labels: { singular: 'Учасник команди', plural: 'Команда' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'role', 'order'], group: 'Контент', description: 'Розділ «Команда» з’являється на сайті, коли тут є хоча б один запис' },
  defaultSort: 'order',
  access: publicRead,
  fields: [
    { name: 'name', label: "Ім'я та прізвище", type: 'text', required: true },
    { name: 'role', label: 'Роль', type: 'text', required: true },
    { name: 'photo', label: 'Фото', type: 'upload', relationTo: 'media' },
    orderField,
  ],
}

export const Leads = {
  slug: 'leads',
  labels: { singular: 'Заявка', plural: 'Заявки' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'phone', 'budget', 'status', 'createdAt'], group: 'Заявки' },
  defaultSort: '-createdAt',
  // Публічно заявки створює лише серверна дія форми (local API).
  access: { read: isAdmin, create: () => false, update: isAdmin, delete: isAdmin },
  fields: [
    { name: 'name', label: "Ім'я", type: 'text', required: true },
    { name: 'phone', label: 'Телефон', type: 'text', required: true },
    { name: 'budget', label: 'Бажаний бюджет', type: 'text' },
    {
      name: 'status', label: 'Статус', type: 'select', defaultValue: 'new',
      options: [
        { label: 'Нова', value: 'new' },
        { label: 'У роботі', value: 'in-progress' },
        { label: 'Доступ надано', value: 'approved' },
        { label: 'Відхилено', value: 'rejected' },
      ],
      admin: { position: 'sidebar' },
    },
    { name: 'note', label: 'Нотатка менеджера', type: 'textarea' },
    { name: 'source', label: 'Джерело', type: 'text', admin: { readOnly: true, position: 'sidebar' } },
  ],
}
