import { ICONS } from '../content/defaults.js'

const isAdmin = ({ req }) => Boolean(req.user)
const access = { read: () => true, update: isAdmin }

const t = (name, label, extra = {}) => ({ name, label, type: 'text', ...extra })
const ta = (name, label, extra = {}) => ({ name, label, type: 'textarea', ...extra })
const heading = (prefix = '') => [t('kicker', `${prefix}Надзаголовок`), ta('title', `${prefix}Заголовок`)]
const group = (name, label, fields) => ({ name, label, type: 'group', fields })
const list = (name, label, fields, labels) => ({ name, label, type: 'array', labels, fields })
const iconSelect = { name: 'icon', label: 'Іконка', type: 'select', options: ICONS, defaultValue: 'leaf' }

export const Settings = {
  slug: 'settings',
  label: 'Налаштування сайту',
  admin: { group: 'Сайт' },
  access,
  fields: [
    t('siteTitle', 'Заголовок сторінки (SEO)'),
    ta('siteDescription', 'Опис (SEO)'),
    { type: 'row', fields: [t('email', 'Email'), t('location', 'Локація')] },
    t('cabinetLabel', 'Кнопка кабінету в шапці'),
    ta('footerAbout', 'Опис у футері'),
    ta('disclaimer', 'Юридичне застереження'),
  ],
}

export const Home = {
  slug: 'home',
  label: 'Головна сторінка',
  admin: { group: 'Сайт' },
  access,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Перший екран',
          fields: [group('hero', 'Перший екран', [
            { type: 'row', fields: [t('badge', 'Бейдж'), t('badgeEco', 'Бейдж «еко»')] },
            t('titleLead', 'Заголовок'),
            t('titleAccent', 'Акцент заголовка'),
            ta('lead', 'Підзаголовок'),
            { type: 'row', fields: [t('ctaPrimary', 'Головна кнопка'), t('ctaSecondary', 'Друга кнопка')] },
            { name: 'image', label: 'Фонове фото', type: 'upload', relationTo: 'media' },
            list('facts', 'Факти під першим екраном', [
              { type: 'row', fields: [t('value', 'Число'), t('label', 'Підпис')] },
            ], { singular: 'Факт', plural: 'Факти' }),
          ])],
        },
        {
          label: 'Концепція',
          fields: [group('manifest', 'Концепція', [
            t('kicker', 'Надзаголовок'),
            { type: 'row', fields: [t('part1', 'Текст, частина 1'), t('part2', 'Текст, частина 2')] },
            { type: 'row', fields: [t('accent', 'Акцентне слово (зелений курсив)'), t('part3', 'Текст після акценту')] },
            t('muted', 'Приглушене речення (сірий курсив)'),
            list('pillars', 'Переваги', [iconSelect, t('title', 'Заголовок'), ta('text', 'Текст')], { singular: 'Перевага', plural: 'Переваги' }),
          ])],
        },
        {
          label: 'Вілли',
          fields: [group('housesSection', 'Блок «Лінійка вілл»', [
            ...heading(), ta('lead', 'Пояснення біля заголовка'),
            t('themesLabel', 'Підпис над темами (для майбутньої галереї)'), t('note', 'Примітка під картками'),
          ])],
        },
        {
          label: 'Кроки',
          fields: [group('steps', 'Як це працює', [
            ...heading(), ta('lead', 'Пояснення'),
            list('items', 'Кроки', [
              t('title', 'Назва'), ta('text', 'Опис'),
              { name: 'decisionPoint', label: 'Позначка «ваші рішення»', type: 'checkbox' },
            ], { singular: 'Крок', plural: 'Кроки' }),
          ])],
        },
        {
          label: 'Чому ми',
          fields: [group('why', 'Чому з нами', [
            ...heading(),
            list('items', 'Аргументи', [
              { type: 'row', fields: [t('value', 'Число'), t('valueLabel', 'Підпис числа')] },
              t('title', 'Заголовок'), ta('text', 'Текст'),
            ], { singular: 'Аргумент', plural: 'Аргументи' }),
          ])],
        },
        {
          label: 'Дохід',
          fields: [group('income', 'Як заробляє інвестор', [
            ...heading(),
            { type: 'row', fields: [t('rentTitle', 'Оренда — заголовок'), t('rentText', 'Оренда — текст')] },
            { type: 'row', fields: [t('assetTitle', 'Актив — заголовок'), t('assetText', 'Актив — текст')] },
            { type: 'row', fields: [t('chartBadge', 'Бейдж графіка'), t('chartNote', 'Примітка графіка')] },
          ])],
        },
        {
          label: 'Клуб',
          fields: [group('club', 'Клуб власників', [
            ...heading(), ta('lead', 'Текст'),
            { name: 'image', label: 'Фонове фото', type: 'upload', relationTo: 'media' },
            list('rules', 'Правила', [t('text', 'Текст')], { singular: 'Правило', plural: 'Правила' }),
          ])],
        },
        {
          label: 'Команда і FAQ',
          fields: [group('team', 'Команда', heading()), group('faqSection', 'FAQ', heading())],
        },
        {
          label: 'Заявка',
          fields: [group('access', 'Форма заявки', [
            ...heading(), ta('lead', 'Текст'),
            list('budgetOptions', 'Варіанти бюджету', [t('label', 'Варіант')], { singular: 'Варіант', plural: 'Варіанти' }),
            t('submitLabel', 'Кнопка'), t('privacyNote', 'Примітка про дані'),
            t('successTitle', 'Після відправки — заголовок'), t('successText', 'Після відправки — текст'),
          ])],
        },
      ],
    },
  ],
}
