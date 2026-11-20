import { Icon } from './Icon.jsx'

export const NAV = [
  ['concept', 'Концепція'],
  ['houses', 'Будинки'],
  ['steps', 'Як це працює'],
  ['why', 'Чому ми'],
  ['income', 'Дохід'],
  ['club', 'Клуб'],
  ['faq', 'FAQ'],
]

export function Wrap({ className = '', children, ...rest }) {
  return <div className={`wrap ${className}`} {...rest}>{children}</div>
}

export function Kicker({ children, light, dot }) {
  return (
    <p className={`kicker${light ? ' kicker--light' : ''}`}>
      <span className="kicker__dot" style={dot ? { background: dot } : undefined} />
      {children}
    </p>
  )
}

export function Title({ children, light, as: Tag = 'h2', className = '' }) {
  return <Tag className={`title${light ? ' title--light' : ''} ${className}`}>{children}</Tag>
}

export function Body({ children, light, className = '' }) {
  return <p className={`body${light ? ' body--light' : ''} ${className}`}>{children}</p>
}

// Кнопка-«пігулка»: sun | glass | forest | line
export function Cta({ kind = 'sun', href, icon, iconLeft, small, full, className = '', children, ...rest }) {
  const cls = `cta cta--${kind}${small ? ' cta--sm' : ''}${full ? ' cta--full' : ''} ${className}`
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={small ? 16 : 18} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={small ? 16 : 18} />}
    </>
  )
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} type="button" {...rest}>{inner}</button>
}

export function Logo({ light, height = 42, className = '' }) {
  return (
    <span
      role="img"
      aria-label="lev.plus"
      className={`logo ${className}`}
      style={{
        height,
        width: (height * 506.625) / 130,
        backgroundImage: `url(/brand/${light ? 'lev-plus-primary-light' : 'lev-plus-primary'}.svg)`,
      }}
    />
  )
}
