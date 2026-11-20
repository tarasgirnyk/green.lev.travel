'use server'

import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

// Простий ліміт: не більше 5 заявок з однієї IP за 10 хвилин (у пам'яті процесу).
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > LIMIT
}

const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max)

export async function submitLead(_prev, formData) {
  const values = {
    name: clean(formData.get('name'), 120),
    phone: clean(formData.get('phone'), 40),
    budget: clean(formData.get('budget'), 80),
  }

  // Бот заповнив приховане поле — удаємо успіх, нічого не зберігаємо.
  if (clean(formData.get('company'), 200)) return { ok: true }

  const fields = {}
  if (values.name.length < 2) fields.name = "Вкажіть ім'я"
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 9 || digits.length > 15) fields.phone = 'Вкажіть номер телефону'
  if (Object.keys(fields).length) return { ok: false, fields, values }

  const h = await headers()
  const ip = (h.get('x-forwarded-for') || '').split(',')[0].trim() || h.get('x-real-ip') || 'local'
  if (rateLimited(ip)) {
    return { ok: false, values, error: 'Забагато спроб. Спробуйте трохи пізніше або напишіть на info@lev.plus.' }
  }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'leads',
      data: { ...values, status: 'new', source: 'Головна — форма доступу' },
    })
    return { ok: true }
  } catch (err) {
    console.error('[lev.plus] lead save failed:', err?.message || err)
    return { ok: false, values, error: 'Не вдалося надіслати заявку. Спробуйте ще раз або напишіть на info@lev.plus.' }
  }
}
