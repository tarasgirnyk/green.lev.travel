const LP = window.LevPlusDesignSystem_732b9c;
const ASSET = '../../assets';
const IMG = ASSET + '/imagery/cabin-forest.png';
const MASCOT = ASSET + '/mascot/mascot-cutout.png';

function Wrap({ m, children, style }) {
  return <div style={{ maxWidth: 1312, margin: '0 auto', padding: m ? '0 20px' : '0 64px', ...style }}>{children}</div>;
}
function Kicker({ children, light, dot = 'var(--sun)' }) {
  return <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: light ? 'rgba(255,255,255,.82)' : 'var(--stone)' }}><span style={{ width: 8, height: 8, borderRadius: 99, background: dot }} />{children}</p>;
}
function Title({ m, children, light, style }) {
  return <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: m ? 38 : 64, lineHeight: 1.02, letterSpacing: '-.04em', color: light ? '#fff' : 'var(--forest)', textWrap: 'balance', ...style }}>{children}</h2>;
}
function Body({ children, light, style }) {
  return <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: light ? 'rgba(255,255,255,.74)' : 'var(--stone)', maxWidth: 520, textWrap: 'pretty', ...style }}>{children}</p>;
}
const CTA_KINDS = {
  sun: { background: 'var(--sun)', color: 'var(--graphite)', boxShadow: '0 14px 34px rgba(230,178,76,.38)' },
  glass: { background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.42)', backdropFilter: 'blur(10px)', boxShadow: 'none' },
  forest: { background: 'var(--forest)', color: '#fff', boxShadow: '0 14px 30px rgba(18,53,42,.22)' },
  line: { background: 'transparent', color: 'var(--forest)', border: '1px solid rgba(31,58,43,.3)', boxShadow: 'none' },
};
function Cta({ kind = 'sun', style, children, ...p }) {
  return <LP.Button {...p} style={{ borderRadius: 999, padding: p.size === 'sm' ? '0 20px' : '0 30px', whiteSpace: 'nowrap', ...CTA_KINDS[kind], ...style }}>{children}</LP.Button>;
}

const NAV = [['concept', 'Концепція'], ['houses', 'Вілли'], ['steps', 'Як це працює'], ['why', 'Чому ми'], ['income', 'Дохід'], ['club', 'Клуб'], ['faq', 'FAQ']];

function Header({ m, go }) {
  const [sc, setSc] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { const f = () => setSc(window.scrollY > 40); f(); addEventListener('scroll', f); return () => removeEventListener('scroll', f); }, []);
  const solid = sc || open;
  const H = m ? 68 : 88;
  return <header style={{ position: 'sticky', top: 0, zIndex: 50, marginBottom: -H, transition: 'background .3s, box-shadow .3s', background: solid ? 'rgba(255,255,255,.94)' : 'transparent', backdropFilter: solid ? 'blur(16px)' : 'none', boxShadow: solid ? '0 1px 0 var(--line)' : 'none' }}>
    <Wrap m={m} style={{ height: H, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
      <a href="#top" onClick={e => { e.preventDefault(); setOpen(false); go('top'); }} style={{ display: 'flex' }}><LP.Logo tone={solid ? 'forest' : 'linen'} size={m ? 34 : 42} /></a>
      {!m && <nav className="v2nav" style={{ display: 'flex', gap: 2, padding: 5, borderRadius: 999, background: solid ? 'transparent' : 'rgba(255,255,255,.1)', border: '1px solid ' + (solid ? 'transparent' : 'rgba(255,255,255,.22)'), backdropFilter: solid ? 'none' : 'blur(10px)' }}>
        {NAV.map(([id, t]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); go(id); }} style={{ padding: '9px 15px', borderRadius: 999, fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', color: solid ? 'var(--graphite)' : '#fff' }}>{t}</a>)}
      </nav>}
      {!m && <Cta size="sm" kind={solid ? 'forest' : 'sun'} iconLeft="lock" onClick={() => go('access')}>Кабінет інвестора</Cta>}
      {m && <button onClick={() => setOpen(!open)} style={{ border: 0, background: solid ? 'var(--linen)' : 'rgba(255,255,255,.14)', borderRadius: 999, height: 40, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8, color: solid ? 'var(--forest)' : '#fff', font: '600 13px var(--font-body)', cursor: 'pointer' }}>{open ? 'Закрити' : 'Меню'}<LP.Icon name={open ? 'minus' : 'plus'} size={16} /></button>}
    </Wrap>
    {m && open && <nav style={{ position: 'absolute', top: H, left: 0, right: 0, height: 'calc(100vh - 68px)', background: '#fff', padding: 20, display: 'flex', flexDirection: 'column' }}>
      {NAV.map(([id, t]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); setOpen(false); go(id); }} style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '-.03em', fontSize: 30, padding: '12px 0', borderBottom: '1px solid var(--line)', color: 'var(--forest)' }}>{t}</a>)}
      <div style={{ marginTop: 24 }}><Cta fullWidth icon="arrow" onClick={() => { setOpen(false); go('access'); }}>Отримати доступ до проєктів</Cta></div>
    </nav>}
  </header>;
}

function Footer({ m, go }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 12 };
  const h = { margin: '0 0 4px', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' };
  return <footer style={{ background: 'var(--forest-ink)', color: 'rgba(255,255,255,.7)', fontSize: 14 }}>
    <Wrap m={m} style={{ padding: m ? '56px 20px 32px' : '80px 64px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.5fr 1fr 1fr', gap: m ? 36 : 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
        <div style={{ ...col, gap: 20 }}><LP.Logo tone="linen" size={48} /><p style={{ margin: 0, maxWidth: 340, lineHeight: 1.6 }}>Кураторська і управляюча компанія для інвесторів у заміські вілли під оренду в Карпатах.</p></div>
        <div style={col}><p style={h}>Контакти</p>
          <a href="mailto:info@lev.plus" style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#fff' }}><LP.Icon name="mail" size={18} />info@lev.plus</a>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#fff' }}><LP.Icon name="pin" size={18} />Київ · Львів · Карпати</span></div>
        <div style={col}><p style={h}>Розділи</p>{NAV.slice(0, 5).map(([id, t]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); go(id); }} style={{ color: '#fff' }}>{t}</a>)}</div>
      </div>
      <p style={{ margin: '24px 0 0', maxWidth: 860, fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,.55)' }}>Інформація на сайті не є публічною офертою, інвестиційною чи юридичною порадою. Фінансові показники — прогноз, не гарантія дохідності; фактичний результат залежить від ринку, сезонності та інших чинників. Остаточні умови визначаються договором.</p>
      <p style={{ margin: '16px 0 0', fontSize: 12, color: 'rgba(255,255,255,.55)' }}>© 2026 lev.plus</p>
    </Wrap>
  </footer>;
}

Object.assign(window, { LP, ASSET, IMG, MASCOT, Wrap, Kicker, Title, Body, Cta, Header, Footer });
