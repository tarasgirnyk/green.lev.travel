function Club({ m }) {
  const rules = ['Членство — після будівництва першого об\'єкта', 'Дні проживання в об\'єктах мережі щороку', 'Пріоритет на нові перевірені ділянки', 'Рекомендації — лише від власників, винагорода — лише за реальну угоду', 'Один рівень, умови відкриті для всіх'];
  return <section id="club" style={{ padding: m ? '64px 0' : '0 0 120px' }}><Shell m={m}>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)', gap: m ? 28 : 72, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-xl)', padding: m ? '36px 22px' : '64px 72px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><LP.SectionLabel index="05">Клуб власників</LP.SectionLabel><H2 m={m}>Спільнота тих, хто вже збудував.</H2><Lead>Клуб — не маркетингова програма. Це коло власників, які відпочивають в об'єктах одне одного і першими бачать нові проєкти.</Lead></div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, alignSelf: 'center' }}>{rules.map(r => <li key={r} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--border)', fontSize: 15, color: 'var(--text-body)' }}><span style={{ color: 'var(--accent-ink)', marginTop: 2 }}><LP.Icon name="check" size={18} /></span>{r}</li>)}</ul>
    </div>
  </Shell></section>;
}
function Team({ m }) {
  const team = [['Концепція, бренд, IT'], ['Юридичний супровід, нотаріус'], ['Стратегічний партнер, Київ']];
  return <section id="team" style={{ padding: m ? '0 0 64px' : '0 0 120px' }}><Shell m={m}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: m ? 28 : 48 }}><LP.SectionLabel index="06">Команда</LP.SectionLabel><H2 m={m}>Люди, які відповідають за ваш проєкт.</H2></div>
    <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(3,1fr)', gap: m ? 16 : 24 }}>
      {team.map(([r], i) => <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 14, gridColumn: m && i === 2 ? '1 / -1' : 'auto' }}>
        <div style={{ aspectRatio: m && i === 2 ? '2/1' : '4/4.6', borderRadius: 'var(--radius-arch)', background: 'repeating-linear-gradient(135deg,var(--surface-sunken) 0 10px,var(--surface-card) 10px 20px)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', fontSize: 12, color: 'var(--text-muted)' }}>фото</div>
        <div><b style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-heading)' }}>Ім'я Прізвище</b><p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-muted)' }}>{r}</p></div>
      </div>)}
    </div>
  </Shell></section>;
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
  return <section id="faq" style={{ padding: m ? '0 0 64px' : '0 0 120px' }}><Shell m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.8fr) minmax(0,1.2fr)', gap: m ? 24 : 80 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><LP.SectionLabel index="07">Питання</LP.SectionLabel><H2 m={m}>Чесні відповіді до першої розмови.</H2></div>
    <div style={{ borderTop: '1px solid var(--border)' }}>{FAQS.map(([q, a], i) => <LP.FaqItem key={q} question={q} answer={a} open={o === i} onToggle={() => setO(o === i ? -1 : i)} />)}</div>
  </Shell></section>;
}
function AccessForm({ m }) {
  const [sent, setSent] = React.useState(false);
  return <section id="access" style={{ background: 'var(--surface-inverse)', position: 'relative', overflow: 'hidden' }}>
    <Shell m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 300px minmax(0,.85fr)', gap: m ? 32 : 40, padding: m ? '56px 20px 380px' : '96px 80px', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><LP.SectionLabel tone="light">Закритий кабінет інвестора</LP.SectionLabel><H2 m={m} light>Заявка на доступ до проєктів.</H2><Lead light>Після схвалення заявки ви побачите паспорти ділянок, моделі будинків і фінмоделі в трьох сценаріях.</Lead></div>
      {!m && <div style={{ position: 'relative' }}><img src={`${ASSET}/mascot/mascot-cutout.png`} alt="" style={{ position: 'absolute', height: 560, left: '50%', transform: 'translateX(-50%)', bottom: -150, filter: 'drop-shadow(0 20px 25px rgba(0,0,0,.3))' }} /></div>}
      {sent ? <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--text-inverse)' }}><LP.RoundIcon name="check" tone="dark" size={56} /><b style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600 }}>Дякуємо. Заявку отримано.</b><p style={{ margin: 0, color: 'var(--text-inverse-muted)' }}>Ми зв'яжемося з вами протягом робочого дня.</p></div> :
      <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 16, alignSelf: 'center' }}>
        <LP.Input tone="dark" label="Ім'я" placeholder="Як до вас звертатися?" />
        <LP.Input tone="dark" label="Телефон" type="tel" placeholder="+380" />
        <LP.Select tone="dark" label="Бажаний бюджет" placeholder="Оберіть діапазон" options={['до $80 000', '$80 000 – $150 000', '$150 000 – $250 000', 'понад $250 000']} />
        <LP.Button variant="accent" type="submit" icon="arrow" fullWidth>Надіслати заявку</LP.Button>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--text-inverse-muted)' }}>Дані використовуються лише для зв'язку щодо доступу до кабінету.</p>
      </form>}
    </Shell>
    {m && <img src={`${ASSET}/mascot/mascot-cutout.png`} alt="" style={{ position: 'absolute', zIndex: 1, height: 400, left: '50%', transform: 'translateX(-50%)', bottom: -40, filter: 'drop-shadow(0 20px 25px rgba(0,0,0,.3))' }} />}
  </section>;
}
Object.assign(window, { Club, Team, Faq, AccessForm });
