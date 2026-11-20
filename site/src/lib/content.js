import config from '@payload-config'
import { getPayload } from 'payload'

import {
  faqsDefaults,
  homeDefaults,
  housesDefaults,
  settingsDefaults,
  themesDefaults,
} from '../content/defaults.js'

const FALLBACK_IMG = '/img/cabin-forest.png'

// Порожні значення з адмінки заміщуємо стартовим контентом, щоб сайт не «ламався».
function fill(value, fallback) {
  if (Array.isArray(fallback)) return Array.isArray(value) && value.length ? value : fallback
  if (fallback && typeof fallback === 'object') {
    const out = {}
    for (const key of Object.keys(fallback)) out[key] = fill(value?.[key], fallback[key])
    for (const key of Object.keys(value || {})) if (!(key in out)) out[key] = value[key]
    return out
  }
  return value === undefined || value === null || value === '' ? fallback : value
}

export function mediaUrl(media, size) {
  if (!media || typeof media !== 'object') return null
  return media.sizes?.[size]?.url || media.url || null
}

async function safe(fn, fallback) {
  try {
    return await fn()
  } catch (err) {
    console.error('[lev.plus] content load failed:', err?.message || err)
    return fallback
  }
}

export async function getSiteContent() {
  const payload = await safe(() => getPayload({ config }), null)
  if (!payload) {
    return {
      settings: settingsDefaults,
      home: homeDefaults,
      houses: housesDefaults,
      themes: themesDefaults,
      faqs: faqsDefaults,
      team: [],
      designs: [],
      heroImage: FALLBACK_IMG,
      clubImage: FALLBACK_IMG,
    }
  }

  const find = (collection) =>
    safe(async () => (await payload.find({ collection, sort: 'order', limit: 50, depth: 1 })).docs, [])

  const designsQuery = safe(
    async () =>
      (await payload.find({ collection: 'designs', where: { published: { equals: true } }, sort: 'order', limit: 100, depth: 1 })).docs,
    [],
  )

  const [settings, home, houses, themes, faqs, team, designs] = await Promise.all([
    safe(() => payload.findGlobal({ slug: 'settings', depth: 0 }), {}),
    safe(() => payload.findGlobal({ slug: 'home', depth: 1 }), {}),
    find('houses'),
    find('interior-themes'),
    find('faqs'),
    find('team-members'),
    designsQuery,
  ])

  const homeFilled = fill(home, homeDefaults)
  return {
    settings: fill(settings, settingsDefaults),
    home: homeFilled,
    houses: (houses.length ? houses : housesDefaults).map((h) => ({
      ...h,
      imageUrl: mediaUrl(h.image, 'card') || FALLBACK_IMG,
    })),
    themes: themes.length ? themes : themesDefaults,
    faqs: faqs.length ? faqs : faqsDefaults,
    team: team.map((m) => ({ ...m, photoUrl: mediaUrl(m.photo, 'card') })),
    // Лише те, що потрібно клієнтському компоненту вкладок.
    designs: designs.map((d) => ({
      id: d.id,
      name: d.name,
      tagline: d.tagline || '',
      description: d.description || '',
      houseId: typeof d.house === 'object' ? d.house?.id : d.house,
      images: (d.images || [])
        .filter((i) => i.image && typeof i.image === 'object')
        .map((i) => ({
          id: i.id,
          caption: i.caption || '',
          alt: i.image.alt || d.name,
          src: mediaUrl(i.image, 'hero') || i.image.url,
          card: mediaUrl(i.image, 'card'),
          thumb: mediaUrl(i.image, 'thumb'),
          width: i.image.width,
          height: i.image.height,
        })),
    })),
    heroImage: mediaUrl(home?.hero?.image, 'hero') || FALLBACK_IMG,
    clubImage: mediaUrl(home?.club?.image, 'hero') || FALLBACK_IMG,
  }
}
