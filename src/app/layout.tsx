import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, DM_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.privatewealthatfarther.com'),
  title: {
    default: 'Personal Wealth Management at Farther | Dallas & Las Vegas Financial Advisor',
    template: '%s | Personal Wealth Management at Farther',
  },
  description:
    'Personalized wealth management for families and business owners with $2M–$20M in investable assets. Serving Dallas, TX and Las Vegas, NV. Powered by Farther\'s Intelligent Wealth Platform.',
  openGraph: {
    type: 'website',
    siteName: 'Personal Wealth Management at Farther',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="font-sans bg-ivory text-slate-text">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
