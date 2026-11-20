const STEPS = [
  ['Вибір проєкту', 'У закритому кабінеті: ділянка після експертизи, модель будинку, фінмодель.'],
  ['Бронювання ділянки', 'Невеликий депозит закріплює ділянку за вами на 2–4 тижні.'],
  ['Купівля землі', 'Ділянка оформлюється у вашу власність з нотаріальним супроводом.'],
  ['Комісія 10%', 'Від кошторису будівництва, частинами 30 / 40 / 30. Без прихованих платежів.'],
  ['Будівництво', 'Типовий проєкт, фіксований кошторис, гарантовані строки, технагляд.'],
  ['Запуск', 'Фото, оголошення на нашому сайті, Booking та Airbnb.'],
  ['Управління', 'Бронювання, персонал на місці, обслуговування, щомісячний звіт.'],
  ['Розподіл прибутку', 'Чистий прибуток ділиться за договором. Кожна витрата — з чеком.'],
];
function Steps({ m }) {
  const [a, setA] = React.useState(3);
  return <section id="steps" style={{ background: 'var(--forest)', color: '#fff', padding: m ? '72px 0' : '128px 0' }}><Wrap m={m}>
    <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'flex-end', gap: 28, marginBottom: m ? 40 : 72 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 720 }}><Kicker light>Як це працює</Kicker><Title m={m} light>Вісім кроків — від ділянки до розподілу прибутку.</Title></div>
      <Body light style={{ maxWidth: 380 }}>Ви ухвалюєте рішення на кроках 1–4. Далі — наша робота, а ви бачите кожен етап у кабінеті.</Body>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(4,1fr)', columnGap: 28, rowGap: m ? 0 : 56 }}>
      {STEPS.map(([t, d], i) => { const on = i <= a; return <div key={t} onMouseEnter={() => setA(i)} onClick={() => setA(i)} style={{ cursor: 'default', display: 'flex', flexDirection: m ? 'row' : 'column', gap: m ? 18 : 14, padding: m ? '22px 0' : 0, borderTop: m ? '1px solid rgba(255,255,255,.14)' : 'none' }}>
        {!m && <span style={{ height: 2, borderRadius: 2, background: on ? 'var(--sun)' : 'rgba(255,255,255,.16)', transition: 'background .3s' }} />}
        <b style={{ fontFamily: 'var(--font-display)', fontWeight: 200, fontSize: m ? 40 : 60, letterSpacing: '-.05em', lineHeight: 1, color: on ? 'var(--sun)' : 'rgba(255,255,255,.38)', transition: 'color .3s', minWidth: m ? 56 : 0, marginTop: m ? 0 : 10 }}>{String(i + 1).padStart(2, '0')}</b>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-.01em' }}>{t}{i === 3 && <span style={{ marginLeft: 10, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--sun)' }}>ваші рішення</span>}</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.68)' }}>{d}</p>
        </div>
      </div>; })}
    </div>
  </Wrap></section>;
}

const WHY = [
  ['3', 'експертизи', 'Перевірені ділянки', 'Юридична, технічна і ринкова експертиза до того, як ділянка потрапить у кабінет. На кожну — паспорт проєкту.'],
  ['+10%', 'ліміт перевищення', 'Фіксований кошторис', 'Усе понад +10% — наш ризик. Економію проти кошторису ділимо 50/50.'],
  ['100%', 'витрат з чеками', 'Прозора звітність', 'Щомісячний звіт у кабінеті власника: бронювання, витрати, розподіл.'],
  ['1', 'договір', 'Повне управління', 'Персонал на місці, бронювання, обслуговування, ціни. Ви нічим не займаєтесь.'],
];
function Why({ m }) {
  return <section id="why" style={{ background: '#fff', padding: m ? '72px 0' : '128px 0' }}><Wrap m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)', gap: m ? 32 : 80 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignSelf: 'start', position: m ? 'static' : 'sticky', top: 120 }}>
      <Kicker>Чому з нами</Kicker><Title m={m}>Ризики, які зазвичай лягають на інвестора, ми беремо на себе.</Title>
    </div>
    <div>{WHY.map(([v, l, t, d]) => <div key={t} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '210px 1fr', gap: m ? 12 : 32, padding: m ? '26px 0' : '38px 0', borderTop: '1px solid var(--line)' }}>
      <div><b style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: m ? 48 : 68, letterSpacing: '-.05em', lineHeight: .95, color: 'var(--forest)' }}>{v}</b><span style={{ fontSize: 13, color: 'var(--stone)' }}>{l}</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: m ? 0 : 6 }}><h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-.015em', color: 'var(--forest)' }}>{t}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--stone)', maxWidth: 480 }}>{d}</p></div>
    </div>)}</div>
  </Wrap></section>;
}

function IncomeChart() {
  const W = 600, H = 320, n = 8, bw = 34;
  const x = i => 44 + i * ((W - 80) / (n - 1));
  const land = Array.from({ length: n }, (_, i) => H - 80 - i * 24 - i * i * 1.3);
  const path = land.map((y, i) => (i ? 'L' : 'M') + x(i) + ' ' + y).join(' ');
  return <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
    {[0, 1, 2, 3].map(i => <line key={i} x1="20" x2={W - 10} y1={H - 32 - i * 68} y2={H - 32 - i * 68} stroke="#ECE6D9" />)}
    {Array.from({ length: n }, (_, i) => { const h = i === 0 ? 0 : i === 1 ? 30 : 50 + Math.min(i, 4) * 5; return <rect key={i} x={x(i) - bw / 2} y={H - 32 - h} width={bw} height={h} rx="8" fill="var(--leaf)" />; })}
    <path d={path} fill="none" stroke="var(--sun)" strokeWidth="3" strokeLinecap="round" />
    {land.map((y, i) => <circle key={i} cx={x(i)} cy={y} r="5" fill="#fff" stroke="var(--sun)" strokeWidth="2.5" />)}
    {Array.from({ length: n }, (_, i) => <text key={i} x={x(i)} y={H - 10} textAnchor="middle" fontSize="12" fill="#5C6158" fontFamily="var(--font-body)">{i === 0 ? 'старт' : 'рік ' + i}</text>)}
  </svg>;
}
function Income({ m }) {
  const legend = [['var(--leaf)', 'Дохід від оренди', 'Чистий прибуток після операційних витрат, щорічно.'], ['var(--sun)', 'Вартість землі і будинку', 'Актив, що лишається вашим і може зростати в ціні.']];
  return <section id="income" style={{ background: 'var(--linen)', padding: m ? '72px 0' : '128px 0' }}><Wrap m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)', gap: m ? 32 : 80, alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <Kicker>Як заробляє інвестор</Kicker><Title m={m}>Два джерела вигоди: оренда і зростання вартості землі.</Title>
      <div style={{ display: 'grid', gap: 18, marginTop: 12 }}>{legend.map(([c, t, d]) => <div key={t} style={{ display: 'flex', gap: 16 }}><span style={{ width: 16, height: 16, borderRadius: 99, background: c, marginTop: 3, flex: '0 0 auto' }} /><div><b style={{ fontSize: 16, fontWeight: 600, color: 'var(--forest)' }}>{t}</b><p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--stone)', lineHeight: 1.6 }}>{d}</p></div></div>)}</div>
    </div>
    <figure style={{ margin: 0, background: '#fff', borderRadius: 28, padding: m ? 18 : 36, boxShadow: '0 24px 60px rgba(9,28,19,.08)' }}>
      <IncomeChart />
      <figcaption style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginTop: 16, fontSize: 13, color: 'var(--stone)' }}><span style={{ height: 26, display: 'inline-flex', alignItems: 'center', padding: '0 10px', borderRadius: 999, background: 'var(--linen)', color: 'var(--forest)', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>Ілюстративна схема</span>Прогноз, не гарантія. Без числових значень.</figcaption>
    </figure>
  </Wrap></section>;
}
Object.assign(window, { Steps, Why, Income });
