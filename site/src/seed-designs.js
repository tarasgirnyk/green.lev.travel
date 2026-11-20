// Завантажує готові інтер'єри з ../business/дизайни у медіатеку і колекцію «Готові інтер'єри».
// Запуск: pnpm seed:designs. Інтер'єри, що вже є (за назвою й типом), пропускає.
import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'

import config from './payload.config.js'
import { designsDefaults } from './content/designs.js'

const SOURCE = path.resolve(process.cwd(), '../business/дизайни')
const payload = await getPayload({ config })

const { docs: houses } = await payload.find({ collection: 'houses', limit: 50, depth: 0 })
const houseId = Object.fromEntries(houses.map((h) => [h.number, h.id]))

for (const d of designsDefaults) {
  const house = houseId[d.house]
  if (!house) {
    payload.logger.warn(`${d.name}: немає типу ${d.house} — пропускаю`)
    continue
  }
  const exists = await payload.count({
    collection: 'designs',
    where: { and: [{ name: { equals: d.name } }, { house: { equals: house } }] },
  })
  if (exists.totalDocs) {
    payload.logger.info(`${d.name}: вже є — пропускаю`)
    continue
  }

  const images = []
  for (const [rel, caption] of d.images) {
    const filePath = path.join(SOURCE, rel)
    if (!fs.existsSync(filePath)) {
      payload.logger.warn(`немає файлу: ${rel}`)
      continue
    }
    const media = await payload.create({
      collection: 'media',
      data: { alt: `${d.name} — ${caption}` },
      filePath,
    })
    images.push({ image: media.id, caption })
  }

  await payload.create({
    collection: 'designs',
    data: { name: d.name, house, tagline: d.tagline, description: d.description, order: d.order, published: true, images },
  })
  payload.logger.info(`${d.name}: додано, зображень ${images.length}`)
}

payload.logger.info('Готово.')
process.exit(0)
