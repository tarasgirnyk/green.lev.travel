import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from '@payloadcms/translations/languages/en'
import { uk } from '@payloadcms/translations/languages/uk'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Designs, Faqs, Houses, InteriorThemes, Leads, Media, TeamMembers, Users } from './collections/index.js'
import { Home, Settings } from './globals/index.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))

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
  sharp,
  typescript: { autoGenerate: false },
})
