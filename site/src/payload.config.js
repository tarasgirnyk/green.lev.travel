import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from '@payloadcms/translations/languages/en'
import { uk } from '@payloadcms/translations/languages/uk'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Designs, Faqs, Houses, InteriorThemes, Leads, Media, TeamMembers, Users } from './collections/index.js'
import { Home, Settings } from './globals/index.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// На продакшн-сервері старий CPU без x86-64-v2, і нативний sharp там не вантажиться.
// Тоді працюємо без нього: сайт і адмінка живі, лише нові фото не стискаються.
let sharp
try {
  sharp = (await import('sharp')).default
} catch (err) {
  console.warn('[lev.plus] sharp недоступний, обробку зображень вимкнено:', err?.message?.split('\n')[0])
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: Users.slug,
    meta: { titleSuffix: ' — lev.plus' },
    importMap: { baseDir: path.resolve(dirname) },
  },
  i18n: { supportedLanguages: { uk, en }, fallbackLanguage: 'uk' },
  collections: [Houses, Designs, InteriorThemes, Faqs, TeamMembers, Leads, Media, Users],
  globals: [Home, Settings],
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  ...(sharp ? { sharp } : {}),
  typescript: { autoGenerate: false },
})
