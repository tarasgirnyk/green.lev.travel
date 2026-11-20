import { Cormorant_Garamond, Geologica, Golos_Text } from 'next/font/google'

import { getSiteContent } from '@/lib/content.js'
import './site.css'

const display = Geologica({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-geologica',
  display: 'swap',
})
const body = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-golos',
  display: 'swap',
})

const serif = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export async function generateMetadata() {
  const { settings } = await getSiteContent()
  return {
    title: settings.siteTitle,
    description: settings.siteDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3500'),
    openGraph: {
      title: settings.siteTitle,
      description: settings.siteDescription,
      images: ['/img/cabin-forest.png'],
      locale: 'uk_UA',
      type: 'website',
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
