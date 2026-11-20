import { Header } from '@/components/Header.jsx'
import {
  Access,
  Club,
  Faq,
  Footer,
  Hero,
  Houses,
  Income,
  Manifest,
  Steps,
  Team,
  Why,
} from '@/components/Sections.jsx'
import { getSiteContent } from '@/lib/content.js'

// Контент змінюється в адмінці — рендеримо на кожен запит.
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const c = await getSiteContent()
  const { home } = c
  return (
    <div className="site">
      <a href="#concept" className="skip">Перейти до змісту</a>
      <Header cabinetLabel={c.settings.cabinetLabel} ctaLabel={home.hero.ctaPrimary} />
      <main>
        <Hero hero={home.hero} image={c.heroImage} />
        <Manifest manifest={home.manifest} />
        <Houses section={home.housesSection} houses={c.houses} designs={c.designs} />
        <Steps steps={home.steps} />
        <Why why={home.why} />
        <Income income={home.income} />
        <Club club={home.club} image={c.clubImage} />
        <Team team={home.team} members={c.team} />
        <Faq section={home.faqSection} faqs={c.faqs} />
        <Access access={home.access} />
      </main>
      <Footer settings={c.settings} />
    </div>
  )
}
