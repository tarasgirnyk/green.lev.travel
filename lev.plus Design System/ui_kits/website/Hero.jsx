function Hero({ m, go }) {
  const facts = [['shield', 'Ділянка у вашій власності'], ['wallet', 'Кошторис з лімітом +10%'], ['receipt', 'Звітність з чеками']];
  const visual = <div style={{ position: 'relative', height: m ? 460 : 640 }}>
    <div style={{ position: 'absolute', inset: m ? '0 0 0 0' : '0 0 0 40px', borderRadius: 'var(--radius-arch)', background: `linear-gradient(0deg,rgba(18,36,26,.35),transparent 50%),url(${ASSET}/imagery/cabin-forest.png) 62% center/cover`, border: '1px solid rgba(200,162,90,.55)' }} />
    <img src={`${ASSET}/mascot/mascot-cutout.png`} alt="Лев — архітектор і управитель lev.plus" style={{ position: 'absolute', height: m ? '96%' : '100%', left: m ? '50%' : '6%', transform: m ? 'translateX(-58%)' : 'none', bottom: m ? '-4%' : '-6%', filter: 'drop-shadow(0 24px 24px rgba(0,0,0,.3))' }} />
    <LP.FeatureChip icon="terrain" style={{ position: 'absolute', right: m ? 8 : -12, top: m ? '12%' : '16%', fontSize: m ? 12 : 13 }}>Експертиза ділянки</LP.FeatureChip>
    <LP.FeatureChip icon="blueprint" style={{ position: 'absolute', right: m ? 8 : 24, bottom: m ? '10%' : '14%', fontSize: m ? 12 : 13 }}>Типовий проєкт</LP.FeatureChip>
  </div>;
  return <section id="top" className="lp-dots" style={{ overflow: 'hidden' }}>
    <Shell m={m} style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.08fr) minmax(0,.92fr)', gap: m ? 36 : 40, alignItems: 'center', padding: m ? '36px 20px 48px' : '56px 80px 72px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 22 : 30 }}>
        <LP.SectionLabel>Карпати · заміські будинки під оренду</LP.SectionLabel>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', fontSize: m ? 48 : 'var(--fs-display-xl)', lineHeight: m ? 1.02 : .96, letterSpacing: 'var(--ls-display)', color: 'var(--text-heading)', textWrap: 'balance' }}>Ваш капітал — у карпатській нерухомості. <span style={{ color: 'var(--accent-ink)', fontStyle: 'italic', fontWeight: 500 }}>Ми робимо все інше.</span></h1>
        <Lead style={{ fontSize: m ? 16 : 19 }}>Перевірена ділянка, типовий брендований будинок, будівництво з фіксованим кошторисом і повне управління орендою. Ви — власник активу, який нікуди не дінеться.</Lead>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12 }}>
          <LP.Button icon="arrow" fullWidth={m} onClick={() => go('access')}>Отримати доступ до проєктів</LP.Button>
          <LP.Button variant="outline" fullWidth={m} onClick={() => go('steps')}>Як це працює</LP.Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,auto)', gap: m ? 12 : 28, paddingTop: m ? 8 : 18, borderTop: '1px solid var(--border)', justifyContent: 'start' }}>
          {facts.map(([i, t]) => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: 'var(--text-heading)', paddingTop: m ? 0 : 0 }}><span style={{ color: 'var(--accent-ink)' }}><LP.Icon name={i} size={18} /></span>{t}</span>)}
        </div>
      </div>
      {visual}
    </Shell>
  </section>;
}
window.Hero = Hero;
