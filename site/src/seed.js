// Наповнює базу стартовим контентом з дизайн-системи.
// Запуск: pnpm seed. Безпечно повторювати: заповнює лише порожні колекції та глобали.
import { getPayload } from 'payload'

import config from './payload.config.js'
import {
  faqsDefaults,
  homeDefaults,
  housesDefaults,
  settingsDefaults,
  themesDefaults,
} from './content/defaults.js'

const payload = await getPayload({ config })

async function seedCollection(collection, docs) {
  const { totalDocs } = await payload.count({ collection })
  if (totalDocs > 0) {
    payload.logger.info(`${collection}: вже ${totalDocs} записів — пропускаю`)
    return
  }
  for (const data of docs) await payload.create({ collection, data })
  payload.logger.info(`${collection}: додано ${docs.length}`)
}

async function seedGlobal(slug, data, probe) {
  const current = await payload.findGlobal({ slug, depth: 0 })
  if (probe(current)) {
    payload.logger.info(`${slug}: вже заповнено — пропускаю`)
    return
  }
  await payload.updateGlobal({ slug, data })
  payload.logger.info(`${slug}: заповнено`)
}

// SEED_HOUSES=1 pnpm seed — перезаписати типи будинків і тексти блоку стартовими даними.
if (process.env.SEED_HOUSES) {
  for (const data of housesDefaults) {
    const { docs } = await payload.find({ collection: 'houses', where: { number: { equals: data.number } }, limit: 1 })
    if (docs[0]) await payload.update({ collection: 'houses', id: docs[0].id, data })
    else await payload.create({ collection: 'houses', data })
  }
  await payload.updateGlobal({ slug: 'home', data: { housesSection: homeDefaults.housesSection } })
  payload.logger.info('houses: оновлено типи будинків і блок на головній')
}

await seedCollection('houses', housesDefaults)
await seedCollection('interior-themes', themesDefaults)
await seedCollection('faqs', faqsDefaults)
await seedGlobal('settings', settingsDefaults, (g) => Boolean(g?.email))
await seedGlobal('home', homeDefaults, (g) => Boolean(g?.hero?.titleLead))

payload.logger.info('Готово.')
process.exit(0)
