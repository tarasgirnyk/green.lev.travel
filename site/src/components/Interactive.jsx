'use client'

import { useActionState, useState } from 'react'

import { submitLead } from '../app/(frontend)/actions.js'
import { Icon } from './Icon.jsx'
import { Cta } from './ui.jsx'

export function StepsGrid({ items }) {
  const [active, setActive] = useState(3)
  return (
    <ol className="steps__grid">
      {items.map((s, i) => (
        <li
          key={s.id || s.title}
          className={`step${i <= active ? ' step--on' : ''}`}
          onMouseEnter={() => setActive(i)}
          onClick={() => setActive(i)}
        >
          <span className="step__bar" />
          <b className="step__num">{String(i + 1).padStart(2, '0')}</b>
          <div className="step__text">
            <h3>
              {s.title}
              {s.decisionPoint && <span className="step__flag">ваші рішення</span>}
            </h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FaqList({ faqs }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq__list">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <article key={f.id || f.question} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              className="faq-item__q"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{f.question}</span>
              <span className="faq-item__toggle"><Icon name={isOpen ? 'minus' : 'plus'} size={16} /></span>
            </button>
            <div className="faq-item__a">
              <p>{f.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const initial = { ok: false, error: null, fields: {} }

export function AccessForm({ access }) {
  const [state, action, pending] = useActionState(submitLead, initial)

  if (state.ok) {
    return (
      <div className="form-done" role="status">
        <span className="form-done__icon"><Icon name="check" size={26} strokeWidth={2.2} /></span>
        <b>{access.successTitle}</b>
        <p>{access.successText}</p>
      </div>
    )
  }

  const err = state.fields || {}
  return (
    <form action={action} className="form" noValidate>
      <label className="field">
        <span className="field__label">Ім'я</span>
        <input name="name" autoComplete="name" placeholder="Як до вас звертатися?" required aria-invalid={!!err.name} defaultValue={state.values?.name} />
        {err.name && <span className="field__error">{err.name}</span>}
      </label>
      <label className="field">
        <span className="field__label">Телефон</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+380" required aria-invalid={!!err.phone} defaultValue={state.values?.phone} />
        {err.phone && <span className="field__error">{err.phone}</span>}
      </label>
      <label className="field">
        <span className="field__label">Бажаний бюджет</span>
        <span className="field__select">
          <select name="budget" defaultValue={state.values?.budget || ''}>
            <option value="" disabled>Оберіть діапазон</option>
            {access.budgetOptions.map((o) => <option key={o.id || o.label} value={o.label}>{o.label}</option>)}
          </select>
          <Icon name="chevron" size={18} />
        </span>
      </label>
      {/* Пастка для ботів */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {state.error && <p className="form__error" role="alert">{state.error}</p>}
      <Cta kind="forest" type="submit" icon="arrow" full disabled={pending} className="form__submit">
        {pending ? 'Надсилаємо…' : access.submitLabel}
      </Cta>
      <p className="form__note">{access.privacyNote}</p>
    </form>
  )
}
