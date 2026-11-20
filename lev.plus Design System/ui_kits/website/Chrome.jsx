const LP = window.LevPlusDesignSystem_732b9c;
const ASSET = '../../assets';

function Shell({ m, children, style }) {
  return <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '0 20px' : '0 80px', boxSizing: 'content-box', ...style }}>{children}</div>;
}
function H2({ m, children, light, style }) {
  return <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', fontSize: m ? 40 : 'var(--fs-display-m)', lineHeight: 1.05, letterSpacing: 'var(--ls-display)', color: light ? 'var(--text-inverse)' : 'var(--text-heading)', textWrap: 'balance', ...style }}>{children}</h2>;
}
function Lead({ children, light, style }) {
  return <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: light ? 'var(--text-inverse-muted)' : 'var(--text-muted)', maxWidth: 560, textWrap: 'pretty', ...style }}>{children}</p>;
}

const NAV = [['steps', 'Як це працює'], ['houses', 'Будинки'], ['why', 'Чому з нами'], ['income', 'Дохід'], ['club', 'Клуб'], ['faq', 'FAQ']];

function Header({ m, theme, go }) {
  const [open, setOpen] = React.useState(false);
  const night = theme === 'night';
  return <header style={{ position: 'sticky', top: 0, zIndex: 40, background: night ? 'rgba(18,36,26,.88)' : 'rgba(242,237,227,.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
    <Shell m={m} style={{ height: m ? 64 : 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
      <a href="#top" style={{ display: 'flex' }}><LP.Logo tone={night ? 'night' : 'forest'} size={m ? 32 : 38} ring={night ? 'var(--night-bg)' : 'var(--linen)'} /></a>
      {!m && <nav style={{ display: 'flex', gap: 30, fontSize: 14, fontWeight: 600 }}>{NAV.map(([id, t]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); go(id); }} style={{ color: 'var(--text-body)' }}>{t}</a>)}</nav>}
      {!m && <LP.Button size="sm" variant="outline" iconLeft="lock" onClick={() => go('access')}>Кабінет інвестора</LP.Button>}
      {m && <button onClick={() => setOpen(!open)} style={{ border: 0, background: 'none', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-heading)', font: 'inherit', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>{open ? 'Закрити' : 'Меню'}<LP.Icon name={open ? 'minus' : 'plus'} size={18} /></button>}
    </Shell>
    {m && open && <nav style={{ position: 'absolute', top: 64, left: 0, right: 0, height: 'calc(100vh - 64px)', background: 'var(--surface-page)', padding: '20px 20px', display: 'flex', flexDirection: 'column' }}>
      {NAV.map(([id, t]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); setOpen(false); go(id); }} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, padding: '14px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-heading)' }}>{t}</a>)}
      <div style={{ marginTop: 24 }}><LP.Button fullWidth icon="arrow" onClick={() => { setOpen(false); go('access'); }}>Отримати доступ до проєктів</LP.Button></div>
    </nav>}
  </header>;
}

function Footer({ m }) {
  return <footer style={{ background: 'var(--surface-inverse-deep)', color: 'var(--text-inverse-muted)', fontSize: 13 }}>
    <Shell m={m} style={{ padding: m ? '40px 20px' : '56px 80px 40px' }}>
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', gap: 28, paddingBottom: 32, borderBottom: '1px solid var(--border-inverse)' }}>
        <LP.Logo tone="linen" size={36} ring="var(--surface-inverse-deep)" />
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 14 : 48 }}>
          <a href="mailto:info@lev.plus" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-inverse)' }}><LP.Icon name="mail" size={18} />info@lev.plus</a>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-inverse)' }}><LP.Icon name="pin" size={18} />Київ · Львів · Карпати</span>
        </div>
      </div>
      <p style={{ margin: '24px 0 0', maxWidth: 820, fontSize: 12, lineHeight: 1.7 }}>Інформація на сайті не є публічною офертою, інвестиційною чи юридичною порадою. Фінансові показники — прогноз, не гарантія дохідності; фактичний результат залежить від ринку, сезонності та інших чинників. Остаточні умови визначаються договором.</p>
      <p style={{ margin: '16px 0 0', fontSize: 12 }}>© 2026 lev.plus</p>
    </Shell>
  </footer>;
}

Object.assign(window, { LP, ASSET, Shell, H2, Lead, Header, Footer });
