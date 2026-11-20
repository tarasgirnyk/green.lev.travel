function Site({ m }) {
  const [theme, setTheme] = React.useState(localStorage.getItem('lp-theme') || 'light');
  const [type, setType] = React.useState(localStorage.getItem('lp-type') || 'a');
  React.useEffect(() => { localStorage.setItem('lp-theme', theme); localStorage.setItem('lp-type', type); }, [theme, type]);
  const ref = React.useRef();
  const go = id => { const el = document.getElementById(id); const sc = document.scrollingElement; if (el) sc.scrollTo({ top: el.getBoundingClientRect().top + sc.scrollTop - (m ? 64 : 80), behavior: 'smooth' }); };
  const pill = (on, label, fn) => <button onClick={fn} style={{ border: 0, cursor: 'pointer', padding: '7px 12px', borderRadius: 999, font: '700 12px var(--font-body)', background: on ? 'var(--ochre)' : 'transparent', color: on ? '#1C1E1B' : '#EFE8DA' }}>{label}</button>;
  return <div ref={ref} data-theme={theme === 'night' ? 'night' : undefined} data-type={type === 'b' ? 'b' : undefined} style={{ background: 'var(--surface-page)', color: 'var(--text-body)', fontFamily: 'var(--font-body)', minHeight: '100vh' }}>
    <Header m={m} theme={theme} go={go} />
    <main><Hero m={m} go={go} /><Steps m={m} /><Houses m={m} go={go} /><Why m={m} /><Income m={m} /><Club m={m} /><Team m={m} /><Faq m={m} /><AccessForm m={m} /></main>
    <Footer m={m} />
    <div style={{ position: 'fixed', zIndex: 60, right: 16, bottom: 16, display: 'flex', flexDirection: m ? 'column' : 'row', gap: 6, padding: 6, borderRadius: 16, background: 'rgba(18,36,26,.92)', boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ display: 'flex' }}>{pill(theme === 'light', 'A · Ліс і льон', () => setTheme('light'))}{pill(theme === 'night', 'B · Нічний ліс', () => setTheme('night'))}</div>
      <div style={{ display: 'flex' }}>{pill(type === 'a', 'Geologica', () => setType('a'))}{pill(type === 'b', 'Unbounded', () => setType('b'))}</div>
    </div>
  </div>;
}
window.Site = Site;
