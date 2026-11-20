function Club({ m }) {
  const rules = ["Членство — після будівництва першого об'єкта", "Дні проживання в об'єктах мережі щороку", 'Пріоритет на нові перевірені ділянки', 'Рекомендації — лише від власників, винагорода — лише за реальну угоду', 'Один рівень, умови відкриті для всіх'];
  return <section id="club" style={{ position: 'relative', overflow: 'hidden', background: 'var(--forest-ink)' }}>
    <div style={{ position: 'absolute', inset: 0, background: `url(${IMG}) 90% 70%/cover`, filter: 'saturate(1.15) brightness(1.05)' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(9,28,19,.86) 0%,rgba(9,28,19,.55) 55%,rgba(9,28,19,.3) 100%)' }} />
    <Wrap m={m} style={{ position: 'relative', display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,.9fr)', gap: m ? 32 : 80, padding: m ? '80px 20px' : '140px 64px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}><Kicker light>Клуб власників</Kicker><Title m={m} light>Спільнота тих, хто вже збудував.</Title><Body light>Клуб — не маркетингова програма. Це коло власників, які відпочивають в об'єктах одне одного і першими бачать нові проєкти.</Body></div>
      <ul style={{ listStyle: 'none', margin: 0, padding: m ? '8px 22px' : '12px 36px', borderRadius: 28, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', backdropFilter: 'blur(18px)' }}>
        {rules.map((r, i) => <li key={r} style={{ display: 'flex', gap: 14, padding: '18px 0', borderTop: i ? '1px solid rgba(255,255,255,.14)' : 'none', fontSize: 15, lineHeight: 1.5, color: '#fff' }}><span style={{ width: 24, height: 24, flex: '0 0 auto', borderRadius: 99, background: 'var(--sun)', color: 'var(--graphite)', display: 'grid', placeItems: 'center' }}><LP.Icon name="check" size={14} strokeWidth={2.4} /></span>{r}</li>)}
      </ul>
    </Wrap>
  </section>;
}

function Team({ m }) {
  const team = ['Концепція, бренд, IT', 'Юридичний супровід, нотаріус', 'Стратегічний партнер, Київ'];
  return <section id="team" style={{ background: '#fff', padding: m ? '72px 0 32px' : '128px 0 64px' }}><Wrap m={m}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: m ? 32 : 56 }}><Kicker>Команда</Kicker><Title m={m}>Люди, які відповідають за ваш проєкт.</Title></div>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(3,1fr)', gap: m ? 16 : 24 }}>
      {team.map((r, i) => <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 16, gridColumn: m && i === 2 ? '1 / -1' : 'auto' }}>
        <div style={{ aspectRatio: m && i === 2 ? '2/1' : '4/4.6', borderRadius: 28, background: 'repeating-linear-gradient(135deg,#F4EFE4 0 10px,#FAF7F0 10px 20px)', display: 'grid', placeItems: 'center', fontSize: 12, color: 'var(--stone)' }}>фото</div>
        <div><b style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, letterSpacing: '-.03em', color: 'var(--forest)' }}>Ім'я Прізвище</b><p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--stone)' }}>{r}</p></div>
      </div>)}
    </div>
  </Wrap></section>;
}

const FAQS = [
  ['Кому належить земля і будинок?', 'Вам. Ділянка купується у вашу власність, будинок будується на ній для вас. Ми — куратор і управитель.'],
  ['Що буде, якщо кошторис перевищено?', 'До +10% — резерв на непередбачене, його покриває інвестор. Понад +10% — наш ризик у межах нашої комісії. Економію проти кошторису ділимо 50/50.'],
  ['Чи гарантуєте ви дохідність?', 'Ні. Ми показуємо фінмодель у трьох сценаріях як прогноз. Дохід залежить від сезону, заповнюваності й ринку.'],
  ['Як розподіляється прибуток?', 'Ділиться чистий прибуток після операційних витрат. Пропорцію фіксуємо в договорі до старту, звітність — щомісяця, з чеками.'],
  ['Чи можу я відпочивати у своєму будинку?', 'Так, у погоджені дати поза вже проданими бронюваннями.'],
  ['Чи можна вийти з управління?', 'Так, за правилами виходу в договорі: завчасне попередження, обслуговування вже проданих бронювань і розрахунок по резервному фонду.'],
];
function Faq({ m }) {
  const [o, setO] = React.useState(0);
  return <section id="faq" style={{ background: '#fff', padding: m ? '56px 0 72px' : '96px 0 128px' }}><Wrap m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)', gap: m ? 24 : 80 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><Kicker>Питання</Kicker><Title m={m}>Чесні відповіді до першої розмови.</Title></div>
    <div style={{ borderTop: '1px solid var(--line)' }}>{FAQS.map(([q, a], i) => <LP.FaqItem key={q} question={q} answer={a} open={o === i} onToggle={() => setO(o === i ? -1 : i)} />)}</div>
  </Wrap></section>;
}

function Access({ m }) {
  const [sent, setSent] = React.useState(false);
  return <section id="access" style={{ background: 'var(--sun)', position: 'relative', overflow: 'hidden' }}>
    <Wrap m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 280px minmax(0,.9fr)', gap: m ? 32 : 40, padding: m ? '72px 20px 340px' : '120px 64px', position: 'relative', zIndex: 2, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker dot="var(--forest)"><span style={{ color: 'var(--graphite)' }}>Закритий кабінет інвестора</span></Kicker>
        <Title m={m} style={{ color: 'var(--graphite)' }}>Заявка на доступ до проєктів.</Title>
        <Body style={{ color: '#3A3626' }}>Після схвалення заявки ви побачите паспорти ділянок, моделі будинків і фінмоделі в трьох сценаріях.</Body>
      </div>
      {!m && <div style={{ position: 'relative', alignSelf: 'stretch' }}><img src={MASCOT} alt="" style={{ position: 'absolute', height: 600, left: '50%', transform: 'translateX(-50%)', bottom: -190, filter: 'drop-shadow(0 24px 30px rgba(60,40,0,.3))' }} /></div>}
      <div style={{ background: '#fff', borderRadius: 28, padding: m ? 24 : 40, boxShadow: '0 30px 70px rgba(90,60,0,.18)' }}>
        {sent ? <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0' }}><span style={{ width: 56, height: 56, borderRadius: 99, background: 'var(--leaf)', color: '#fff', display: 'grid', placeItems: 'center' }}><LP.Icon name="check" size={26} strokeWidth={2.2} /></span><b style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, letterSpacing: '-.04em', color: 'var(--forest)' }}>Дякуємо. Заявку отримано.</b><p style={{ margin: 0, color: 'var(--stone)' }}>Ми зв'яжемося з вами протягом робочого дня.</p></div> :
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 16 }}>
            <LP.Input label="Ім'я" placeholder="Як до вас звертатися?" />
            <LP.Input label="Телефон" type="tel" placeholder="+380" />
            <LP.Select label="Бажаний бюджет" placeholder="Оберіть діапазон" options={['до $80 000', '$80 000 – $150 000', '$150 000 – $250 000', 'понад $250 000']} />
            <Cta kind="forest" type="submit" icon="arrow" fullWidth style={{ marginTop: 6 }}>Надіслати заявку</Cta>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--stone)' }}>Дані використовуються лише для зв'язку щодо доступу до кабінету.</p>
          </form>}
      </div>
    </Wrap>
    {m && <img src={MASCOT} alt="" style={{ position: 'absolute', zIndex: 1, height: 360, left: '50%', transform: 'translateX(-50%)', bottom: -40, filter: 'drop-shadow(0 20px 25px rgba(60,40,0,.3))' }} />}
  </section>;
}

function SiteV2({ m }) {
  const go = id => { const el = document.getElementById(id); const sc = document.scrollingElement; if (el) sc.scrollTo({ top: el.getBoundingClientRect().top + sc.scrollTop - (id === 'top' ? 9999 : (m ? 60 : 80)), behavior: 'smooth' }); };
  return <div style={{ background: '#fff', color: 'var(--graphite)', fontFamily: 'var(--font-body)', minHeight: '100vh' }}>
    <Header m={m} go={go} />
    <main><Hero m={m} go={go} /><Manifest m={m} /><Houses m={m} go={go} /><Steps m={m} /><Why m={m} /><Income m={m} /><Club m={m} /><Faq m={m} /><Access m={m} /></main>
    <Footer m={m} go={go} />
  </div>;
}
Object.assign(window, { Club, Team, Faq, Access, SiteV2 });
