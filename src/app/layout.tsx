import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const arizonaText = localFont({
  src: [
    {
      path: '../../public/fonts/ABCArizonaText-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ABCArizonaText-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const fakt = localFont({
  src: [
    {
      path: '../../public/fonts/Fakt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fakt-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fakt-Blond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fakt-BlondItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fakt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fakt-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fakt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fakt-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.privatewealthatfarther.com'),
  title: {
    default: 'Private Wealth Management at Farther | Dallas & Las Vegas Financial Advisor',
    template: '%s | Private Wealth Management at Farther',
  },
  description:
    'Personalized wealth management for families and business owners with $2M–$20M in investable assets. Serving Dallas, TX and Las Vegas, NV. Powered by Farther\'s Intelligent Wealth Platform.',
  openGraph: {
    type: 'website',
    siteName: 'Private Wealth Management at Farther',
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
      className={`${arizonaText.variable} ${fakt.variable}`}
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
