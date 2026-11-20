const LP = window.LevPlusDesignSystem_732b9c;
const IMG = '../../assets/imagery/cabin-forest.png';
const PROJECTS = [
  { id: 'LP-014', name: 'Ділянка над Опором', location: 'Сколівщина, Львівська обл.', status: 'free', pos: 'center', plot: { area: '0,25 га', note: "під'їзд цілий рік · світло · вода" }, house: { type: 'Сімейний', note: 'два рівні' }, checks: ['Юридична', 'Технічна', 'Ринкова'], figures: [{ label: 'Кошторис', value: '$96 000', hint: 'ліміт +10%' }, { label: 'Будівництво', value: '7 міс.' }, { label: 'Дохід / рік', value: '$11–14k', hint: 'прогноз' }] },
  { id: 'LP-009', name: 'Схил біля Славського', location: 'Славське, Львівська обл.', status: 'reserved', pos: '75% 60%', plot: { area: '0,12 га', note: 'вид на хребет · світло' }, house: { type: 'Для двох', note: 'одноповерхова студія' }, checks: ['Юридична', 'Технічна', 'Ринкова'], figures: [{ label: 'Кошторис', value: '$58 000', hint: 'ліміт +10%' }, { label: 'Будівництво', value: '5 міс.' }, { label: 'Дохід / рік', value: '$7–9k', hint: 'прогноз' }] },
  { id: 'LP-021', name: 'Галявина у Яремчі', location: 'Яремче, Івано-Франківська обл.', status: 'free', pos: '30% 55%', plot: { area: '0,40 га', note: 'кластер до 5 будинків' }, house: { type: 'Вілла', note: 'дві спальні, на дві сім\'ї' }, checks: ['Юридична', 'Технічна'], figures: [{ label: 'Кошторис', value: '$148 000', hint: 'ліміт +10%' }, { label: 'Будівництво', value: '9 міс.' }, { label: 'Дохід / рік', value: '$16–21k', hint: 'прогноз' }] },
];
const NAVI = [['grid', 'Проєкти'], ['home', 'Мої об\'єкти'], ['receipt', 'Звіти'], ['team', 'Клуб власників'], ['user', 'Профіль']];

function Sidebar() {
  return <aside style={{ width: 248, flex: '0 0 248px', borderRight: '1px solid var(--border)', padding: '28px 18px', display: 'flex', flexDirection: 'column', gap: 36, position: 'sticky', top: 0, height: '100vh', boxSizing: 'border-box' }}>
    <div style={{ paddingLeft: 10 }}><LP.Logo tone="night" size={32} ring="var(--night-bg)" /></div>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{NAVI.map(([i, t], k) => <a key={t} href="#" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 'var(--radius-sm)', fontSize: 14, fontWeight: 600, color: k === 0 ? 'var(--accent)' : 'var(--text-muted)', background: k === 0 ? 'var(--surface-card)' : 'transparent' }}><LP.Icon name={i} size={18} />{t}</a>)}</nav>
    <div style={{ marginTop: 'auto', padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>Ваш менеджер<br /><b style={{ color: 'var(--text-body)' }}>Ім'я Прізвище</b><br />info@lev.plus</div>
  </aside>;
}

function Scenarios() {
  const rows = [['Заповнюваність', '35%', '50%', '62%'], ['Чистий прибуток власника / рік', '$8 400', '$12 100', '$15 800'], ['Окупність будівництва', '11 р.', '8 р.', '6 р.'], ['Вартість землі через 5 р.', '+10%', '+25%', '+40%']];
  const th = { textAlign: 'left', padding: '12px 14px', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, borderBottom: '1px solid var(--border)' };
  return <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}><h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-heading)' }}>Фінмодель · три сценарії</h3><LP.Badge status="accent">Прогноз, не гарантія</LP.Badge></div>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}><thead><tr><th style={th}></th><th style={th}>Обережний</th><th style={{ ...th, color: 'var(--accent)' }}>Базовий</th><th style={th}>Оптимістичний</th></tr></thead>
      <tbody>{rows.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: '14px', borderBottom: '1px solid var(--border)', color: i === 0 ? 'var(--text-muted)' : 'var(--text-heading)', fontFamily: i ? 'var(--font-num)' : 'inherit', fontSize: i ? 20 : 14, fontWeight: i ? 600 : 400, fontVariantNumeric: 'tabular-nums' }}>{c}</td>)}</tr>)}</tbody></table>
    <p style={{ margin: '12px 0 0', fontSize: 12, color: 'var(--text-muted)' }}>Демо-значення для макета. Розрахунок — під управлінням lev.plus, після операційних витрат.</p>
  </div>;
}
function Passport({ p }) {
  const blocks = [['Юридична', 'Власність, обтяження, цільове призначення, кадастр'], ['Технічна', 'Під\'їзд, електрика, вода, рельєф, ризики підтоплення'], ['Ринкова', 'Ціни сусідніх ділянок, конкуренти, заповнюваність'], ['Локація', 'Дороги, туристичні точки, плани громади']];
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>{blocks.map(([t, d]) => { const ok = p.checks.includes(t); return <div key={t} style={{ display: 'flex', gap: 14, padding: 18, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--surface-card)' }}><span style={{ width: 32, height: 32, borderRadius: '50%', flex: '0 0 auto', display: 'grid', placeItems: 'center', background: ok ? 'var(--status-free)' : 'transparent', border: ok ? 'none' : '1px dashed var(--border-strong)', color: '#EFE8DA' }}>{ok ? <LP.Icon name="check" size={16} strokeWidth={2.4} /> : null}</span><div><b style={{ fontSize: 15, color: 'var(--text-heading)' }}>{t}</b><p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{ok ? d : 'Експертиза триває'}</p></div></div>; })}</div>;
}

function Cabinet() {
  const [list, setList] = React.useState(PROJECTS);
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState(null);
  const [note, setNote] = React.useState('');
  const reserve = id => { setList(l => l.map(p => p.id === id ? { ...p, status: 'reserved' } : p)); setNote('Ділянку ' + id + ' заброньовано на 14 днів. Менеджер надішле реквізити для депозиту.'); };
  const cur = list.find(p => p.id === open);
  const shown = list.filter(p => filter === 'all' || p.status === filter);
  const chip = (k, t) => <button key={k} onClick={() => setFilter(k)} style={{ border: '1px solid ' + (filter === k ? 'var(--accent)' : 'var(--border)'), background: filter === k ? 'var(--accent)' : 'transparent', color: filter === k ? 'var(--accent-on)' : 'var(--text-body)', borderRadius: 999, padding: '8px 16px', font: '600 13px var(--font-body)', cursor: 'pointer' }}>{t}</button>;
  return <div data-theme="night" className="lp-dots-night" style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-page)', color: 'var(--text-body)', fontFamily: 'var(--font-body)' }}>
    <Sidebar />
    <main style={{ flex: 1, padding: '32px 48px 64px', display: 'flex', flexDirection: 'column', gap: 28, minWidth: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
        <div>{cur ? <a href="#" onClick={e => { e.preventDefault(); setOpen(null); }} style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}><span style={{ transform: 'rotate(180deg)' }}><LP.Icon name="arrow" size={16} /></span>Усі проєкти</a> : <LP.SectionLabel tone="light">Кабінет інвестора</LP.SectionLabel>}
          <h1 style={{ margin: '10px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, lineHeight: 1.05, color: 'var(--text-heading)' }}>{cur ? cur.name : 'Перевірені проєкти'}</h1></div>
        {!cur && <div style={{ display: 'flex', gap: 8 }}>{chip('all', 'Усі')}{chip('free', 'Вільні')}{chip('reserved', 'Заброньовані')}</div>}
      </div>
      {note && <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderRadius: 'var(--radius-md)', background: 'var(--surface-inverse)', border: '1px solid rgba(201,163,92,.4)', fontSize: 14 }}><span style={{ color: 'var(--accent)' }}><LP.Icon name="key" size={18} /></span>{note}<button onClick={() => setNote('')} style={{ marginLeft: 'auto', border: 0, background: 'none', color: 'var(--text-muted)', cursor: 'pointer', font: 'inherit' }}>Закрити</button></div>}
      {!cur && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 20 }}>{shown.map(p => <LP.ProjectCard key={p.id} code={p.id} {...p} image={IMG} layout="vertical" onOpen={() => setOpen(p.id)} onReserve={() => reserve(p.id)} />)}</div>}
      {cur && <>
        <LP.ProjectCard code={cur.id} {...cur} image={IMG} onOpen={() => {}} onReserve={() => reserve(cur.id)} />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 20, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-heading)' }}>Паспорт ділянки</h3><Passport p={cur} /></div>
          <Scenarios />
        </div>
      </>}
    </main>
  </div>;
}
window.Cabinet = Cabinet;
