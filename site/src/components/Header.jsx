'use client'

import { useEffect, useState } from 'react'

import { Icon } from './Icon.jsx'
import { Cta, Logo, NAV, Wrap } from './ui.jsx'

export function Header({ cabinetLabel, ctaLabel }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const solid = scrolled || open
  const close = () => setOpen(false)

  return (
    <header className={`hdr${solid ? ' hdr--solid' : ''}`}>
      <Wrap className="hdr__bar">
        <a href="#top" onClick={close} className="hdr__logo" aria-label="lev.plus — на початок">
          <Logo light={!solid} className="hdr__logo-img" />
        </a>
        <nav className="hdr__nav" aria-label="Розділи">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <Cta small kind={solid ? 'forest' : 'sun'} iconLeft="lock" href="#access" className="hdr__cta">
          {cabinetLabel}
        </Cta>
        <button
          type="button"
          className="hdr__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Закрити' : 'Меню'}
          <Icon name={open ? 'minus' : 'plus'} size={16} />
        </button>
      </Wrap>
      {open && (
        <nav id="mobile-menu" className="hdr__menu" aria-label="Меню">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
          <Cta full icon="arrow" href="#access" onClick={close} className="hdr__menu-cta">{ctaLabel}</Cta>
        </nav>
      )}
    </header>
  )
}
