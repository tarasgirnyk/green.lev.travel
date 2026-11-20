const STEPS = [
  ['01', 'grid', 'Вибір проєкту', 'У закритому кабінеті: ділянка після експертизи, модель будинку, фінмодель.'],
  ['02', 'key', 'Бронювання ділянки', 'Невеликий депозит закріплює ділянку за вами на 2–4 тижні.'],
  ['03', 'file', 'Купівля землі', 'Ділянка оформлюється у вашу власність з нотаріальним супроводом.'],
  ['04', 'briefcase', 'Комісія 10%', 'Від кошторису будівництва, частинами 30 / 40 / 30. Без прихованих платежів.'],
  ['05', 'home', 'Будівництво', 'Типовий проєкт, фіксований кошторис, гарантовані строки, технагляд.'],
  ['06', 'flag', 'Запуск', 'Фото, оголошення на нашому сайті, Booking та Airbnb.'],
  ['07', 'cycle', 'Управління', 'Бронювання, персонал на місці, обслуговування, щомісячний звіт.'],
  ['08', 'trend', 'Розподіл прибутку', 'Чистий прибуток ділиться за договором. Кожна витрата — з чеком.'],
];
function Steps({ m }) {
  const cols = m ? 1 : 4;
  return <section id="steps" style={{ padding: m ? '64px 0' : '120px 0' }}><Shell m={m}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: m ? 36 : 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 720 }}><LP.SectionLabel index="01">Як це працює</LP.SectionLabel><H2 m={m}>Вісім кроків — від ділянки до розподілу прибутку.</H2></div>
      {!m && <Lead style={{ maxWidth: 360 }}>Ви ухвалюєте рішення на кроках 1–4. Далі — наша робота, а ви бачите кожен етап у кабінеті.</Lead>}
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, borderTop: '1px solid var(--border)' }}>
      {STEPS.map(([n, i, t, d], k) => <div key={n} style={{ padding: m ? '22px 0' : '32px 28px 36px', paddingLeft: m || k % 4 === 0 ? 0 : 28, borderRight: !m && k % 4 !== 3 ? '1px solid var(--border)' : 'none', borderBottom: '1px solid var(--border)' }}><LP.StepItem n={n} icon={i} title={t} text={d} active={k === 4} /></div>)}
    </div>
  </Shell></section>;
}

const THEMES = ['Адам і Єва', 'Пікассо', 'Max Royal', 'Ромео і Джульєтта'];
const HOUSES = [
  { name: 'Для двох', kind: 'Одноповерхова студія', specs: ['1 рівень', 'для пари', 'панорамне скління'], pos: '78% 60%' },
  { name: 'Сімейний', kind: 'Два рівні', specs: ['2 рівні', 'для сім\'ї з дітьми', 'тераса'], pos: '62% center', featured: true },
  { name: 'Вілла', kind: 'Дві спальні, на дві сім\'ї', specs: ['2 спальні', 'для двох сімей', 'спільна вітальня'], pos: '30% 55%' },
];
function Houses({ m, go }) {
  return <section id="houses" style={{ padding: m ? '64px 0' : '40px 0 120px' }}><Shell m={m}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: m ? 32 : 56 }}><LP.SectionLabel index="02">Лінійка будинків</LP.SectionLabel><H2 m={m}>Три типові будинки. Чотири теми інтер'єру.</H2><Lead>Кожен тип — перевірений проєкт з відомим кошторисом. Тему інтер'єру ви обираєте під свою аудиторію гостей.</Lead></div>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 16 : 24 }}>
      {HOUSES.map(h => <LP.HouseCard key={h.name} {...h} themes={THEMES} image={`${ASSET}/imagery/cabin-forest.png`} imagePosition={h.pos} onRequest={() => go('access')} />)}
    </div>
    <p style={{ margin: '16px 0 0', fontSize: 12, color: 'var(--text-muted)' }}>Візуалізації — приклад. Фінальні рендери кожного типу будуть додані.</p>
  </Shell></section>;
}

const WHY = [
  ['shield', 'Перевірені ділянки', 'Юридична, технічна і ринкова експертиза до того, як ділянка потрапить у кабінет. На кожну — паспорт проєкту.'],
  ['wallet', 'Фіксований кошторис', 'Ліміт перевищення +10%. Усе понад це — наш ризик. Економію ділимо 50/50.'],
  ['receipt', 'Прозора звітність', 'Щомісячний звіт у кабінеті власника: бронювання, витрати, розподіл — з чеками.'],
  ['team', 'Повне управління', 'Персонал на місці, бронювання, обслуговування, ціни. Ви нічим не займаєтесь.'],
];
function Why({ m }) {
  return <section id="why" style={{ padding: m ? '0' : '0 0 120px' }}><Shell m={m} style={m ? { padding: 0 } : {}}>
    <div style={{ background: 'var(--surface-inverse)', borderRadius: m ? 0 : 'var(--radius-xl)', padding: m ? '56px 20px' : '80px 72px', display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.8fr) minmax(0,1.2fr)', gap: m ? 36 : 72 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><LP.SectionLabel index="03" tone="light">Чому з нами</LP.SectionLabel><H2 m={m} light>Ризики, які зазвичай лягають на інвестора, ми беремо на себе.</H2></div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 28 : '40px 48px' }}>
        {WHY.map(([i, t, d]) => <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><LP.RoundIcon name={i} tone="dark" /><h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: 'var(--text-inverse)' }}>{t}</h3><p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--text-inverse-muted)' }}>{d}</p></div>)}
      </div>
    </div>
  </Shell></section>;
}

function IncomeChart({ m }) {
  const W = 560, H = 300, years = 8, bw = 30;
  const x = i => 40 + i * ((W - 70) / (years - 1));
  const land = Array.from({ length: years }, (_, i) => H - 70 - i * 22 - i * i * 1.2);
  const path = land.map((y, i) => (i ? 'L' : 'M') + x(i) + ' ' + y).join(' ');
  return <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
    {[0, 1, 2, 3].map(i => <line key={i} x1="20" x2={W - 10} y1={H - 30 - i * 64} y2={H - 30 - i * 64} stroke="var(--border)" />)}
    {Array.from({ length: years }, (_, i) => { const h = i === 0 ? 0 : i === 1 ? 26 : 44 + Math.min(i, 4) * 4; return <rect key={i} x={x(i) - bw / 2} y={H - 30 - h} width={bw} height={h} rx="4" fill="var(--moss)" opacity=".85" />; })}
    <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="6 5" />
    {land.map((y, i) => <circle key={i} cx={x(i)} cy={y} r="4" fill="var(--surface-card)" stroke="var(--accent)" strokeWidth="2" />)}
    {Array.from({ length: years }, (_, i) => <text key={i} x={x(i)} y={H - 10} textAnchor="middle" fontSize="11" fill="var(--text-muted)" fontFamily="var(--font-body)">{i === 0 ? 'старт' : 'рік ' + i}</text>)}
  </svg>;
}
function Income({ m }) {
  const legend = [['var(--moss)', 'Дохід від оренди', 'Чистий прибуток після операційних витрат, щорічно.'], ['var(--accent)', 'Вартість землі і будинку', 'Актив, що лишається вашим і може зростати в ціні.']];
  return <section id="income" style={{ padding: m ? '64px 0' : '0 0 120px' }}><Shell m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)', gap: m ? 32 : 80, alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <LP.SectionLabel index="04">Як заробляє інвестор</LP.SectionLabel><H2 m={m}>Два джерела вигоди: оренда і зростання вартості землі.</H2>
      <div style={{ display: 'grid', gap: 16, marginTop: 8 }}>{legend.map(([c, t, d]) => <div key={t} style={{ display: 'flex', gap: 14 }}><span style={{ width: 14, height: 14, borderRadius: 4, background: c, marginTop: 4, flex: '0 0 auto' }} /><div><b style={{ fontSize: 15, color: 'var(--text-heading)' }}>{t}</b><p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{d}</p></div></div>)}</div>
    </div>
    <figure style={{ margin: 0, background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: m ? 16 : 28 }}>
      <IncomeChart m={m} />
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, fontSize: 12, color: 'var(--text-muted)' }}><span style={{ color: 'var(--accent-ink)', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', fontSize: 10 }}>Ілюстративна схема</span>Прогноз, не гарантія. Без числових значень.</figcaption>
    </figure>
  </Shell></section>;
}
Object.assign(window, { Steps, Houses, Why, Income });
