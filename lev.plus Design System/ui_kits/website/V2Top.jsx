function Hero({ m, go }) {
  const facts = [['3', 'типи вілл під ключ'], ['4', "теми інтер'єру на вибір"], ['+10%', 'максимальне перевищення кошторису'], ['100%', 'управління орендою — на нас']];
  return <section id="top" style={{ position: 'relative' }}>
    <div style={{ position: 'relative', height: m ? 980 : 920, overflow: 'hidden', background: 'var(--forest-ink)' }}>
      <div style={{ position: 'absolute', inset: 0, background: `url(${IMG}) 62% center/cover`, filter: 'saturate(1.2) brightness(1.1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: m ? 'linear-gradient(180deg,rgba(9,28,19,.78) 0%,rgba(9,28,19,.45) 60%,rgba(9,28,19,.7) 100%)' : 'linear-gradient(90deg,rgba(9,28,19,.84) 0%,rgba(9,28,19,.52) 40%,rgba(9,28,19,0) 70%),linear-gradient(0deg,rgba(9,28,19,.5),transparent 35%)' }} />
      <img src={MASCOT} alt="Лев — архітектор і управитель lev.plus" style={{ position: 'absolute', right: m ? -40 : '4%', bottom: m ? 96 : -40, height: m ? 270 : 800, filter: 'drop-shadow(0 30px 40px rgba(0,0,0,.45))' }} />
      <Wrap m={m} style={{ position: 'relative', paddingTop: m ? 112 : 184 }}>
        <div style={{ maxWidth: 900, display: 'flex', flexDirection: 'column', gap: m ? 20 : 28 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 34, padding: '0 14px', borderRadius: 999, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.28)', backdropFilter: 'blur(10px)', color: '#fff', fontSize: 13, fontWeight: 500 }}><LP.Icon name="mountain" size={15} />VIP-вілли в Карпатах</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 34, padding: '0 14px', borderRadius: 999, background: 'var(--leaf)', color: '#fff', fontSize: 13, fontWeight: 600 }}><LP.Icon name="leaf" size={15} />Еко-формат</span>
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: m ? 44 : 92, lineHeight: m ? 1.04 : .98, letterSpacing: '-.045em', color: '#fff', textWrap: 'balance' }}>Ваш капітал — у карпатській нерухомості.{!m && <br />} <span style={{ color: 'var(--sun)', fontWeight: 500 }}>Ми робимо все інше.</span></h1>
          <Body light style={{ fontSize: m ? 16 : 19, maxWidth: 560, color: 'rgba(255,255,255,.84)' }}>Преміальні вілли в карпатському лісі — за бюджет, доступний приватному інвестору. Ділянка, будівництво і оренда під ключ.</Body>
          <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12, marginTop: 4, maxWidth: m ? 260 : 'none' }}>
            <Cta icon="arrow" onClick={() => go('access')}>Отримати доступ до проєктів</Cta>
            <Cta kind="glass" onClick={() => go('steps')}>Як це працює</Cta>
          </div>
        </div>
      </Wrap>
    </div>
    <Wrap m={m} style={{ position: 'relative', zIndex: 3, marginTop: m ? -110 : -66 }}>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,1fr)', background: '#fff', borderRadius: m ? 22 : 28, boxShadow: '0 30px 80px rgba(9,28,19,.16)', padding: m ? 6 : 12 }}>
        {facts.map(([v, l], i) => <div key={v} style={{ padding: m ? '18px 16px' : '24px 32px', borderLeft: (m ? i % 2 : i) ? '1px solid var(--line)' : 'none', borderTop: m && i > 1 ? '1px solid var(--line)' : 'none' }}>
          <b style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: m ? 34 : 50, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--forest)' }}>{v}</b>
          <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.45, color: 'var(--stone)' }}>{l}</p>
        </div>)}
      </div>
    </Wrap>
  </section>;
}

function Manifest({ m }) {
  const chip = (pos, w) => <span style={{ display: 'inline-block', width: m ? w * .5 : w, height: m ? 32 : 66, borderRadius: 999, background: `url(${IMG}) ${pos}/cover`, verticalAlign: 'middle', margin: '0 .1em', transform: 'translateY(-.06em)' }} />;
  const eco = [
    ['leaf', 'Еко-формат', 'Дерево, скло і камінь. Будинок вписують у ліс на ділянці, а не розчищають під нього місце.'],
    ['mountain', 'Попит на тишу', 'Гості їдуть у Карпати по ліс, гори і приватність. На цей попит розраховані наші вілли.'],
    ['sun', 'Преміум без переплат', 'Типові проєкти і фіксований кошторис замість індивідуальної архітектури за індивідуальною ціною.'],
  ];
  return <section id="concept" style={{ padding: m ? '72px 0 64px' : '136px 0 120px', background: '#fff' }}><Wrap m={m}>
    <Kicker>Концепція lev.plus</Kicker>
    <p style={{ margin: m ? '22px 0 0' : '30px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: m ? 32 : 66, lineHeight: 1.12, letterSpacing: '-.045em', color: 'var(--forest)', maxWidth: 1180 }}>Преміальна вілла {chip('58% 42%', 150)} у карпатському лісі — за бюджет, <span style={{ color: 'var(--leaf)', fontWeight: 400 }}>доступний</span> {chip('92% 78%', 120)} приватному інвестору. <span style={{ color: '#9AA096' }}>Ви володієте активом, ми робимо решту.</span></p>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 28 : 48, marginTop: m ? 48 : 88, paddingTop: m ? 32 : 40, borderTop: '1px solid var(--line)' }}>
      {eco.map(([i, t, d]) => <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ width: 52, height: 52, borderRadius: 999, background: 'rgba(94,154,75,.12)', color: 'var(--leaf)', display: 'grid', placeItems: 'center' }}><LP.Icon name={i} size={22} /></span>
        <h3 style={{ margin: '6px 0 0', fontSize: 20, fontWeight: 600, color: 'var(--forest)', letterSpacing: '-.01em' }}>{t}</h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--stone)', maxWidth: 360 }}>{d}</p>
      </div>)}
    </div>
  </Wrap></section>;
}

const THEMES = ['Адам і Єва', 'Пікассо', 'Max Royal', 'Ромео і Джульєтта'];
const HOUSES = [
  { n: '01', name: 'Для двох', kind: 'Одноповерхова студія', specs: ['1 рівень', 'для пари', 'панорамне скління'], pos: '88% 60%' },
  { n: '02', name: 'Сімейний', kind: 'Два рівні', specs: ['2 рівні', "для сім'ї з дітьми", 'тераса'], pos: '58% 40%' },
  { n: '03', name: 'Вілла', kind: "Дві спальні, на дві сім'ї", specs: ['2 спальні', 'для двох сімей', 'спільна вітальня'], pos: '22% 55%' },
];
function Houses({ m, go }) {
  const [t, setT] = React.useState(0);
  const glass = { display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 14px', borderRadius: 999, background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.3)', backdropFilter: 'blur(10px)', color: '#fff', fontSize: 12, fontWeight: 600 };
  return <section id="houses" style={{ background: 'var(--linen)', padding: m ? '72px 0' : '120px 0 140px' }}><Wrap m={m}>
    <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'flex-end', gap: 32, marginBottom: m ? 32 : 56 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 680 }}><Kicker>Лінійка вілл</Kicker><Title m={m}>Три формати вілл. Чотири характери інтер'єру.</Title></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 520 }}>
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--stone)' }}>Тема інтер'єру</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{THEMES.map((x, i) => <button key={x} onClick={() => setT(i)} style={{ height: 40, padding: '0 16px', borderRadius: 999, cursor: 'pointer', font: '500 14px var(--font-body)', border: '1px solid ' + (t === i ? 'var(--forest)' : 'rgba(31,58,43,.2)'), background: t === i ? 'var(--forest)' : 'transparent', color: t === i ? '#fff' : 'var(--forest)', transition: 'all .2s' }}>{x}</button>)}</div>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 36 : 24, alignItems: 'start' }}>
      {HOUSES.map((h, i) => <article key={h.n} style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: !m && i === 1 ? 64 : 0 }}>
        <div style={{ position: 'relative', height: m ? 420 : 540, borderRadius: 28, overflow: 'hidden', background: `url(${IMG}) ${h.pos}/cover` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(9,28,19,.78) 0%,rgba(9,28,19,0) 50%)' }} />
          <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'space-between' }}><span style={glass}>{h.n}</span><span style={glass}>{THEMES[t]}</span></div>
          <div style={{ position: 'absolute', left: 26, right: 26, bottom: 24, color: '#fff' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 42, letterSpacing: '-.04em', lineHeight: 1 }}>{h.name}</h3>
            <p style={{ margin: '8px 0 0', fontSize: 15, color: 'rgba(255,255,255,.82)' }}>{h.kind}</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{h.specs.map(s => <span key={s} style={{ height: 30, display: 'inline-flex', alignItems: 'center', padding: '0 12px', borderRadius: 999, border: '1px solid rgba(31,58,43,.18)', fontSize: 13, color: 'var(--forest)' }}>{s}</span>)}</div>
        <button onClick={() => go('access')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '14px 0 0', border: 0, borderTop: '1px solid rgba(31,58,43,.18)', background: 'none', cursor: 'pointer', font: 'inherit', textAlign: 'left' }}>
          <span><span style={{ display: 'block', fontSize: 12, color: 'var(--stone)' }}>Ціна</span><span style={{ fontSize: 17, fontWeight: 600, color: 'var(--forest)' }}>за запитом</span></span>
          <span style={{ width: 48, height: 48, borderRadius: 999, background: 'var(--sun)', color: 'var(--graphite)', display: 'grid', placeItems: 'center' }}><LP.Icon name="arrow" size={20} /></span>
        </button>
      </article>)}
    </div>
    <p style={{ margin: '28px 0 0', fontSize: 12, color: 'var(--stone)' }}>Візуалізації — приклад. Фінальні рендери кожного типу будуть додані.</p>
  </Wrap></section>;
}
Object.assign(window, { Hero, Manifest, Houses });
