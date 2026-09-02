import { useEffect, useState } from 'react';

const A = '/assets';
const faqs = [
  ['З якими ділянками ви працюєте?', 'Оцінюємо локацію, під’їзд, комунікації, ландшафт і туристичний потенціал. Площа та статус землі розглядаються індивідуально.'],
  ['Хто фінансує будівництво?', 'Модель залежить від проєкту: інвестиції власника, залученого партнера або спільне фінансування.'],
  ['Скільки часу займає запуск?', 'Після аналізу ділянки формуємо поетапний план із реалістичними строками проєктування, будівництва й запуску.'],
  ['Хто управляє об’єктом після відкриття?', 'Ми допомагаємо підключити операційне управління, бронювання, сервіс і маркетинг.'],
  ['Як формується дохід партнерів?', 'Фінансова модель узгоджується до старту та враховує вклад кожної сторони, витрати й операційний результат.'],
  ['Чи можна почати лише з консультації?', 'Так. Перша розмова допоможе оцінити ідею та зрозуміти, який наступний крок має сенс.'],
];
const steps = [
  ['01', '⌁', 'Аналізуємо', 'Оцінюємо ділянку, її потенціал та ринкові можливості.'],
  ['02', '▦', 'Проєктуємо', 'Створюємо концепцію, що поєднує функціональність і природне середовище.'],
  ['03', '⌁', 'Будуємо', 'Реалізуємо якісно, у строк і з контролем кожного етапу.'],
  ['04', '↗', 'Запускаємо', 'Підключаємо до управління, бронювання та просування.'],
];

function Logo({ footer = false }) {
  return <a className={`logo ${footer ? 'footer-logo' : ''}`} href="#top"><img src={`${A}/brand/lev-travel-lion-green.svg`} alt="" /><strong>green<span>.</span>lev<span>.</span>travel</strong></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [interest, setInterest] = useState('land');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  useEffect(() => {
    const onScroll = () => document.querySelector('[data-header]')?.classList.toggle('scrolled', window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const request = (kind) => {
    setInterest(kind);
    setMenuOpen(false);
    requestAnimationFrame(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }));
  };

  const submitLead = async (event) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Надсилаємо…' });
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Не вдалося надіслати заявку');
      event.currentTarget.reset();
      setStatus({ state: 'success', message: 'Дякуємо! Менеджер зв’яжеться з вами найближчим часом.' });
    } catch (error) {
      setStatus({ state: 'error', message: error.message });
    }
  };

  return <>
    <header className="site-header" data-header><div className="shell header-inner"><Logo /><nav className="desktop-nav"><a href="#concept">Концепція</a><a href="#landowners">Для власників землі</a><a href="#investors">Для інвесторів</a><a href="#faq">Питання</a></nav><button className="button button-outline header-button" onClick={() => request('consultation')}>Обговорити проєкт <span>↗</span></button><button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/><i>Меню</i></button></div><nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}><a href="#concept" onClick={() => setMenuOpen(false)}>Концепція</a><a href="#landowners" onClick={() => setMenuOpen(false)}>Для власників землі</a><a href="#investors" onClick={() => setMenuOpen(false)}>Для інвесторів</a><a href="#faq" onClick={() => setMenuOpen(false)}>Питання та відповіді</a><button className="button button-primary" onClick={() => request('consultation')}>Обговорити проєкт</button></nav></header>
    <main id="top">
      <section className="hero section-dots"><div className="shell hero-grid"><div className="hero-copy reveal"><p className="overline"><i/> Девелопмент відпочинку</p><h1>Ваша земля<br/>може стати<br/><span>місцем сили.</span></h1><p className="hero-lead">Створюємо сучасні заміські проєкти — від потенціалу ділянки до працюючого бізнесу.</p><div className="hero-actions"><button className="button button-primary" onClick={() => request('land')}>Розкрити потенціал землі <span>→</span></button><button className="button button-ghost" onClick={() => request('investment')}>Стати інвестором <span>→</span></button></div></div><div className="hero-visual reveal"><div className="hero-arch"><div className="hero-cabin"/></div><img className="hero-lion" src={`${A}/green-lev-mascot-cutout.png`} alt="Зелений лев Green.Lev.Travel"/><div className="feature-chip chip-one"><i>⌁</i><span>Аналіз ділянки</span></div><div className="feature-chip chip-two"><i>▥</i><span>Власна концепція</span></div><div className="feature-chip chip-three"><i>↗</i><span>Запуск і управління</span></div></div><div className="audience-panel reveal"><p className="panel-title">Партнерство, що створює цінність</p><button className="audience-card" id="landowners" onClick={() => request('land')}><span className="audience-icon">⌁</span><span><strong>Власникам землі</strong><small>Допоможемо розкрити потенціал ділянки та побудуємо прибутковий проєкт під ключ.</small></span><i>→</i></button><span className="panel-or">або</span><button className="audience-card" id="investors" onClick={() => request('investment')}><span className="audience-icon">↗</span><span><strong>Інвесторам</strong><small>Добираємо перспективні локації та створюємо дохідні проєкти з прозорою моделлю співпраці.</small></span><i>→</i></button></div></div></section>
      <section className="process section-contours" id="concept"><div className="shell"><div className="process-heading reveal"><div><p className="section-label">01 / Як це працює</p><h2>Від землі —<br/>до місця, куди <span>повертаються.</span></h2></div><img src={`${A}/green-lev-mascot-cutout.png`} alt="Маскот Green.Lev.Travel"/></div><div className="steps">{steps.map(([n,icon,title,text]) => <article className="step reveal" key={n}><div className="step-top"><b>{n}</b><i>{icon}</i></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="product-section"><div className="shell"><div className="product-card reveal"><div className="product-image"/><div className="product-copy"><p className="section-label light">02 / Наш продукт</p><h2>Архітектура,<br/>що працює разом<br/><span>із природою.</span></h2><p>Готова концепція заміських будинків для відпочинку, яка поєднує естетику, комфорт і прибутковість.</p><div className="metrics"><span><i>⌂</i> 35–60 м²</span><span><i>◌</i> 4 сезони</span><span><i>▣</i> готовий бізнес</span></div><div className="product-actions"><button className="button button-lime" onClick={() => request('presentation')}>Отримати презентацію <span>→</span></button><button className="button button-dark-outline" onClick={() => request('consultation')}>Отримати консультацію <span>→</span></button></div></div></div></div></section>
      <section className="partnership section-contours"><div className="shell"><p className="section-label">03 / Партнерство</p><h2 className="partnership-title reveal">Одна сильна ідея.<br/><span>Два способи стати її частиною.</span></h2><div className="partner-grid"><article className="partner-card land-card reveal"><div className="partner-card-top"><span className="round-icon">⌁</span><div><h3>Власникам землі</h3><p>Розкриємо потенціал ділянки та створимо проєкт під ключ.</p><button className="button button-primary small" onClick={() => request('land')}>Запропонувати землю <span>→</span></button></div></div><div className="landscape-lines"/></article><span className="plus">+</span><article className="partner-card invest-card reveal"><div className="partner-card-top"><span className="round-icon">↗</span><div><h3>Інвесторам</h3><p>Знайдемо перспективну локацію та створимо дохідний актив.</p><button className="button button-primary small" onClick={() => request('investment')}>Стати партнером <span>→</span></button></div></div><div className="growth-chart"><svg viewBox="0 0 500 110" preserveAspectRatio="none"><path d="M0 104 C80 94,110 75,175 77 S280 54,340 42 S425 22,500 3"/></svg></div></article></div><div className="proof-strip reveal"><span><i>◎</i><strong>1 команда</strong></span><span><i>▣</i><strong>4 етапи під ключ</strong></span><span><i>⚑</i><strong>1 спільний результат</strong></span></div></div></section>
      <section className="faq-section section-contours" id="faq"><div className="shell faq-grid"><div className="faq-intro reveal"><p className="section-label">04 / Питання та відповіді</p><h2>Відповідаємо<br/>до того, <span>як ви запитаєте.</span></h2><p>Зібрали найчастіші запитання власників та інвесторів, щоб ви швидко отримали чіткі відповіді.</p><div className="faq-actions"><button className="button button-ghost" onClick={() => request('presentation')}>Отримати презентацію <span>→</span></button><button className="button button-primary" onClick={() => request('consultation')}>Отримати консультацію <span>→</span></button></div></div><div className="accordion">{faqs.map(([q,a],i) => <article className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q}><button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><i>{openFaq === i ? '−' : '+'}</i></button><div className="faq-answer"><p>{a}</p></div></article>)}</div></div></section>
      <section className="manager-section"><div className="shell"><div className="manager-card reveal"><div className="manager-copy"><p className="section-label light">Потрібна жива розмова?</p><h2>Розкажіть про вашу ідею.<br/>Ми підкажемо <span>наступний крок.</span></h2><p>Без складних форм і довгих очікувань — залиште контакт, і менеджер зв’яжеться з вами.</p><div className="manager-actions"><button className="button button-lime" onClick={() => request('consultation')}>Поговорити з менеджером <span>→</span></button></div><small>⌁ Перша консультація — безкоштовна</small></div><img src={`${A}/green-lev-mascot-cutout.png`} alt="Менеджер Green.Lev.Travel"/></div></div></section>
      <section className="contact-section" id="contact"><div className="shell contact-card"><div className="contact-copy"><p className="section-label light">Почнімо з розмови</p><h2>Наступне місце сили<br/><span>починається тут.</span></h2></div><form className="lead-form" onSubmit={submitLead}><input name="website" className="honeypot" tabIndex="-1" autoComplete="off"/><label><span>Ваше ім’я</span><input name="name" type="text" placeholder="Як до вас звертатися?" minLength="2" required/></label><label><span>Телефон або email</span><input name="contact" type="text" placeholder="Ваш контакт" minLength="5" required/></label><label className="wide"><span>Що вас цікавить?</span><select name="interest" value={interest} onChange={(e) => setInterest(e.target.value)}><option value="land">У мене є земля</option><option value="investment">Хочу інвестувати</option><option value="presentation">Хочу отримати презентацію</option><option value="consultation">Хочу отримати консультацію</option><option value="partnership">Хочу обговорити партнерство</option></select></label><button className="button button-lime wide" type="submit" disabled={status.state === 'loading'}>{status.state === 'loading' ? 'Надсилаємо…' : 'Обговорити проєкт'} <span>→</span></button><p className={`form-status wide ${status.state}`}>{status.message}</p></form><img src={`${A}/green-lev-mascot-cutout.png`} alt="Зелений лев Green.Lev.Travel"/></div></section>
    </main>
    <footer className="site-footer"><div className="shell footer-inner"><Logo footer/><a href="mailto:hello@green.lev.travel">hello@green.lev.travel</a><a href="#top">На початок</a><span>© 2026</span></div></footer>
  </>;
}

export default App;
