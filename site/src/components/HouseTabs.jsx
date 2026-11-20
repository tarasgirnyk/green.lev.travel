'use client'

import { useMemo, useRef, useState } from 'react'

import { Icon } from './Icon.jsx'

function Gallery({ design }) {
  const [index, setIndex] = useState(0)
  const images = design.images
  const current = images[Math.min(index, images.length - 1)]
  if (!current) return null
  const go = (step) => setIndex((i) => (i + step + images.length) % images.length)

  return (
    <div className="gallery">
      <figure className="gallery__main">
        <img
          key={current.id}
          src={current.src}
          srcSet={current.card ? `${current.card} 900w, ${current.src} 2000w` : undefined}
          sizes="(max-width: 900px) 100vw, 60vw"
          alt={current.alt}
          className="gallery__img"
        />
        {current.caption && <figcaption className="glass-tag gallery__caption">{current.caption}</figcaption>}
        {images.length > 1 && (
          <>
            <button type="button" className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label="Попереднє фото">
              <Icon name="arrow" size={20} />
            </button>
            <button type="button" className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label="Наступне фото">
              <Icon name="arrow" size={20} />
            </button>
            <span className="gallery__count">{index + 1} / {images.length}</span>
          </>
        )}
      </figure>
      {images.length > 1 && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              className={`gallery__thumb${i === index ? ' gallery__thumb--on' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={img.caption || `Фото ${i + 1}`}
              aria-current={i === index}
            >
              <img src={img.thumb || img.card || img.src} alt="" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function HouseInfo({ house }) {
  const metrics = [['Гостей', house.guests], ['Площа', house.area], ['Спальні', house.bedrooms]].filter(([, v]) => v)
  return (
    <div className="hinfo">
      <span className="type__kind">{house.kind}</span>
      <h3 className="hinfo__name">{house.name}</h3>
      {house.audience && <p className="type__audience"><Icon name="team" size={18} />{house.audience}</p>}
      {house.purpose && <p className="type__purpose">{house.purpose}</p>}
      {metrics.length > 0 && (
        <dl className="type__metrics">
          {metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      )}
      {house.specs?.length > 0 && (
        <ul className="type__specs">
          {house.specs.map((s) => (
            <li key={s.id || s.text}><span className="type__check"><Icon name="check" size={13} strokeWidth={2.4} /></span>{s.text}</li>
          ))}
        </ul>
      )}
      <a href="#access" className="type__price">
        <span><small>Ціна</small><b>{house.priceLabel || 'за запитом'}</b></span>
        <span className="type__go"><Icon name="arrow" size={20} /></span>
      </a>
    </div>
  )
}

export function HouseTabs({ houses, designs }) {
  const [active, setActive] = useState(0)
  const [designIdx, setDesignIdx] = useState(0)
  const tabRefs = useRef([])

  const house = houses[active]
  const houseDesigns = useMemo(
    () => designs.filter((d) => d.houseId === house?.id && d.images.length),
    [designs, house],
  )
  const design = houseDesigns[Math.min(designIdx, houseDesigns.length - 1)]

  const select = (i) => {
    setActive(i)
    setDesignIdx(0)
  }
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + houses.length) % houses.length
    select(next)
    tabRefs.current[next]?.focus()
  }

  if (!house) return null

  return (
    <div className="htabs">
      <div className="htabs__list" role="tablist" aria-label="Типи будинків" onKeyDown={onKey}>
        {houses.map((h, i) => (
          <button
            key={h.id || h.number}
            ref={(el) => (tabRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`house-tab-${i}`}
            aria-selected={i === active}
            aria-controls="house-panel"
            tabIndex={i === active ? 0 : -1}
            className={`htab${i === active ? ' htab--on' : ''}`}
            onClick={() => select(i)}
          >
            <span className="htab__num">{h.number}</span>
            <span className="htab__text">
              <b>{h.name}</b>
              <small>{h.audience}{h.guests ? ` · ${h.guests} гост.` : ''}</small>
            </span>
          </button>
        ))}
      </div>

      <div className="htabs__panel" role="tabpanel" id="house-panel" aria-labelledby={`house-tab-${active}`}>
        <HouseInfo house={house} />

        <div className="hdesigns">
          {houseDesigns.length > 0 ? (
            <>
              <div className="hdesigns__head">
                <span className="hdesigns__label">Готові інтер'єри · {houseDesigns.length}</span>
                <div className="hdesigns__chips">
                  {houseDesigns.map((d, i) => (
                    <button
                      key={d.id}
                      type="button"
                      aria-pressed={d === design}
                      className={`chip${d === design ? ' chip--on' : ''}`}
                      onClick={() => setDesignIdx(i)}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
              <Gallery key={design.id} design={design} />
              <div className="hdesigns__about">
                <h4>{design.name}{design.tagline && <span> — {design.tagline}</span>}</h4>
                {design.description && <p>{design.description}</p>}
              </div>
            </>
          ) : (
            <p className="hdesigns__empty">Інтер'єри для цього типу готуємо.</p>
          )}
        </div>
      </div>
    </div>
  )
}
