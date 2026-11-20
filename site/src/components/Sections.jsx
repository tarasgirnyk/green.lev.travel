import { Icon } from './Icon.jsx'
import { HouseTabs } from './HouseTabs.jsx'
import { AccessForm, FaqList, StepsGrid } from './Interactive.jsx'
import { Body, Cta, Kicker, Logo, NAV, Title, Wrap } from './ui.jsx'

export function Hero({ hero, image }) {
  return (
    <section id="top" className="hero">
      <div className="hero__stage">
        <div className="hero__bg" style={{ backgroundImage: `url(${image})` }} />
        <div className="hero__shade" />
        <img src="/img/mascot-cutout.png" alt="Лев — архітектор і управитель lev.plus" className="hero__mascot" />
        <Wrap className="hero__content">
          <div className="hero__badges">
            <span className="badge badge--glass"><Icon name="mountain" size={15} />{hero.badge}</span>
            <span className="badge badge--leaf"><Icon name="leaf" size={15} />{hero.badgeEco}</span>
          </div>
          <h1 className="hero__title">
            {hero.titleLead} <span>{hero.titleAccent}</span>
          </h1>
          <Body light className="hero__lead">{hero.lead}</Body>
          <div className="hero__ctas">
            <Cta icon="arrow" href="#access">{hero.ctaPrimary}</Cta>
            <Cta kind="glass" href="#steps">{hero.ctaSecondary}</Cta>
          </div>
        </Wrap>
      </div>
      <Wrap className="facts-wrap">
        <dl className="facts">
          {hero.facts.map((f) => (
            <div key={f.id || f.value + f.label} className="facts__item">
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </Wrap>
    </section>
  )
}

export function Manifest({ manifest }) {
  return (
    <section id="concept" className="manifest">
      <Wrap>
        <Kicker>{manifest.kicker}</Kicker>
        <p className="manifest__text">
          {manifest.part1} {manifest.part2}{' '}
          <span className="manifest__accent">{manifest.accent}</span> {manifest.part3}{' '}
          <span className="manifest__muted">{manifest.muted}</span>
        </p>
        <div className="pillars">
          {manifest.pillars.map((p) => (
            <div key={p.id || p.title} className="pillar">
              <span className="pillar__icon"><Icon name={p.icon} size={22} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Houses({ section, houses, designs }) {
  return (
    <section id="houses" className="houses">
      <Wrap>
        <div className="section-head">
          <div className="stack stack--720">
            <Kicker>{section.kicker}</Kicker>
            <Title>{section.title}</Title>
          </div>
          {section.lead && <Body className="section-head__aside">{section.lead}</Body>}
        </div>
        <HouseTabs houses={houses} designs={designs} />
        <p className="houses__note">{section.note}</p>
      </Wrap>
    </section>
  )
}

export function Steps({ steps }) {
  return (
    <section id="steps" className="steps">
      <Wrap>
        <div className="section-head">
          <div className="stack stack--720">
            <Kicker light>{steps.kicker}</Kicker>
            <Title light>{steps.title}</Title>
          </div>
          <Body light className="section-head__aside">{steps.lead}</Body>
        </div>
        <StepsGrid items={steps.items} />
      </Wrap>
    </section>
  )
}

export function Why({ why }) {
  return (
    <section id="why" className="why">
      <Wrap className="split">
        <div className="stack split__sticky">
          <Kicker>{why.kicker}</Kicker>
          <Title>{why.title}</Title>
        </div>
        <div>
          {why.items.map((w) => (
            <div key={w.id || w.title} className="why__row">
              <div>
                <b className="why__value">{w.value}</b>
                <span className="why__value-label">{w.valueLabel}</span>
              </div>
              <div className="why__text">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

function IncomeChart() {
  const W = 600, H = 320, n = 8, bw = 34
  const x = (i) => 44 + i * ((W - 80) / (n - 1))
  const land = Array.from({ length: n }, (_, i) => H - 80 - i * 24 - i * i * 1.3)
  const path = land.map((y, i) => `${i ? 'L' : 'M'}${x(i)} ${y}`).join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="income__chart" role="img" aria-label="Ілюстративна схема: щорічний дохід від оренди та зростання вартості активу">
      {[0, 1, 2, 3].map((i) => <line key={i} x1="20" x2={W - 10} y1={H - 32 - i * 68} y2={H - 32 - i * 68} stroke="#ECE6D9" />)}
      {Array.from({ length: n }, (_, i) => {
        const h = i === 0 ? 0 : i === 1 ? 30 : 50 + Math.min(i, 4) * 5
        return <rect key={i} x={x(i) - bw / 2} y={H - 32 - h} width={bw} height={h} rx="8" fill="var(--leaf)" />
      })}
      <path d={path} fill="none" stroke="var(--sun)" strokeWidth="3" strokeLinecap="round" />
      {land.map((y, i) => <circle key={i} cx={x(i)} cy={y} r="5" fill="#fff" stroke="var(--sun)" strokeWidth="2.5" />)}
      {Array.from({ length: n }, (_, i) => (
        <text key={i} x={x(i)} y={H - 10} textAnchor="middle" fontSize="12" fill="#5C6158">{i === 0 ? 'старт' : `рік ${i}`}</text>
      ))}
    </svg>
  )
}

export function Income({ income }) {
  const legend = [
    ['var(--leaf)', income.rentTitle, income.rentText],
    ['var(--sun)', income.assetTitle, income.assetText],
  ]
  return (
    <section id="income" className="income">
      <Wrap className="split split--center">
        <div className="stack">
          <Kicker>{income.kicker}</Kicker>
          <Title>{income.title}</Title>
          <div className="legend">
            {legend.map(([color, title, text]) => (
              <div key={title} className="legend__item">
                <span className="legend__dot" style={{ background: color }} />
                <div><b>{title}</b><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <figure className="income__card">
          <IncomeChart />
          <figcaption><span className="pill-label">{income.chartBadge}</span>{income.chartNote}</figcaption>
        </figure>
      </Wrap>
    </section>
  )
}

export function Club({ club, image }) {
  return (
    <section id="club" className="club">
      <div className="club__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="club__shade" />
      <Wrap className="club__inner">
        <div className="stack">
          <Kicker light>{club.kicker}</Kicker>
          <Title light>{club.title}</Title>
          <Body light>{club.lead}</Body>
        </div>
        <ul className="club__rules">
          {club.rules.map((r) => (
            <li key={r.id || r.text}>
              <span className="club__check"><Icon name="check" size={14} strokeWidth={2.4} /></span>
              {r.text}
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  )
}

export function Team({ team, members }) {
  if (!members.length) return null
  return (
    <section id="team" className="team">
      <Wrap>
        <div className="stack team__head">
          <Kicker>{team.kicker}</Kicker>
          <Title>{team.title}</Title>
        </div>
        <div className="team__grid">
          {members.map((p) => (
            <div key={p.id} className="person">
              <div className="person__photo" style={p.photoUrl ? { backgroundImage: `url(${p.photoUrl})` } : undefined}>
                {!p.photoUrl && 'фото'}
              </div>
              <div><b>{p.name}</b><p>{p.role}</p></div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Faq({ section, faqs }) {
  return (
    <section id="faq" className="faq">
      <Wrap className="split">
        <div className="stack">
          <Kicker>{section.kicker}</Kicker>
          <Title>{section.title}</Title>
        </div>
        <FaqList faqs={faqs} />
      </Wrap>
    </section>
  )
}

export function Access({ access }) {
  return (
    <section id="access" className="access">
      <Wrap className="access__inner">
        <div className="stack">
          <Kicker dot="var(--forest)"><span className="access__kicker">{access.kicker}</span></Kicker>
          <Title className="access__title">{access.title}</Title>
          <Body className="access__lead">{access.lead}</Body>
        </div>
        <div className="access__mascot-slot" aria-hidden="true">
          <img src="/img/mascot-cutout.png" alt="" className="access__mascot" />
        </div>
        <div className="access__card">
          <AccessForm access={access} />
        </div>
      </Wrap>
    </section>
  )
}

export function Footer({ settings }) {
  return (
    <footer className="ftr">
      <Wrap className="ftr__inner">
        <div className="ftr__cols">
          <div className="ftr__about">
            <Logo light height={48} />
            <p>{settings.footerAbout}</p>
          </div>
          <div className="ftr__col">
            <p className="ftr__h">Контакти</p>
            <a href={`mailto:${settings.email}`}><Icon name="mail" size={18} />{settings.email}</a>
            <span><Icon name="pin" size={18} />{settings.location}</span>
          </div>
          <div className="ftr__col">
            <p className="ftr__h">Розділи</p>
            {NAV.slice(0, 5).map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
        </div>
        <p className="ftr__legal">{settings.disclaimer}</p>
        <p className="ftr__copy">© {new Date().getFullYear()} lev.plus</p>
      </Wrap>
    </footer>
  )
}
