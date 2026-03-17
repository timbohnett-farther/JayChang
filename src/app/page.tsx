import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'
import SectionEyebrow from '@/components/SectionEyebrow'
import CountUp from '@/components/CountUp'
import {
  Shield,
  TrendingUp,
  Zap,
  Award,
  BarChart3,
  Lock,
  Gauge,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wealth Management for Engineers, Physicians & Executives in Arizona | Jay Chang, Farther',
  description: 'Fiduciary wealth management for semiconductor engineers, aerospace professionals, physicians, and executives across Phoenix, Chandler, Scottsdale, and beyond. Turn complex equity, RSUs, and high income into lasting wealth. Powered by Farther&apos;s $15B+ Intelligent Wealth Platform.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Jay Chang | Farther',
  description: 'Fiduciary wealth management for semiconductor engineers, aerospace professionals, physicians, and executives across Arizona.',
  url: 'https://www.PWM-Farther.com',
  telephone: '+1-480-944-0880',
  areaServed: [
    {
      '@type': 'City',
      name: 'Phoenix',
    },
    {
      '@type': 'City',
      name: 'Chandler',
    },
    {
      '@type': 'City',
      name: 'Scottsdale',
    },
    {
      '@type': 'Region',
      name: 'Phoenix Metro',
    },
    {
      '@type': 'State',
      name: 'Arizona',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCity: 'Tempe',
    addressState: 'AZ',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    telephone: '+1-480-944-0880',
  },
  employee: {
    '@type': 'Person',
    name: 'Jay Chang',
    jobTitle: 'VP, Wealth Advisor',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className="bg-[#F7F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimateOnScroll>
            <SectionEyebrow text="FIDUCIARY WEALTH MANAGEMENT" />
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-[#333333] mt-6 mb-8 leading-tight">
              You&apos;ve Built an Exceptional Career in Arizona. Now Build a Financial Plan That Matches It.
            </h1>
            <p className="text-lg text-[#5b6a71] max-w-3xl leading-relaxed mb-10">
              Jay Chang is a fiduciary wealth advisor at Farther — the Intelligent Wealth Platform — specializing in complex compensation for semiconductor engineers, aerospace and defense professionals, physicians, and corporate executives across the Phoenix metro and beyond. If your pay stub includes RSUs, pensions, SERPLUS, deferred comp, or ESPP — you&apos;re exactly who Jay was built for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Strategy Call
              </Button>
              <p className="text-[#5b6a71]">
                or call <a href="tel:+14809440880" className="text-[#1d7682] font-semibold hover:underline">(480) 944-0880</a>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-[#FAFAF8] border-t border-b border-[#e0e0e0] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-[#1d7682] mb-3" />
              <p className="font-serif font-semibold text-[#333333]">SEC-Registered Investment Adviser</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-[#1d7682] mb-3" />
              <p className="font-serif font-semibold text-[#333333]">Fiduciary Standard</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-[#1d7682] mb-3" />
              <p className="font-serif font-semibold text-[#333333]">$15B+ AUM</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-[#1d7682] mb-3" />
              <p className="font-serif font-semibold text-[#333333]">Best RIA to Work For (2025)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM JAY SOLVES */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimateOnScroll>
            <SectionEyebrow text="THE CHALLENGE" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-8 leading-tight">
              High Income Creates Wealth — But Only If You Have a Plan for the Complexity That Comes With It.
            </h2>
            <p className="text-lg text-[#5b6a71] leading-relaxed">
              Most wealth advisors understand traditional portfolios, diversification, and tax-loss harvesting. They don&apos;t understand Intel SERPLUS balances, RSU vesting schedules, withholding shortfalls on supplemental income, 401(k) matches automatically invested in employer stock, or the financial implications of relocating from California to Arizona. Jay does. Every single day. Using Farther&apos;s Intelligent Wealth Platform, he builds plans tailored to engineers, aerospace and defense professionals, physicians, and executives who earn complexity along with their income.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 4: WHO JAY SERVES */}
      <section className="bg-[#FAFAF8] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimateOnScroll>
            <SectionEyebrow text="WHO JAY SERVES" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-16 leading-tight">
              Built for Arizona&apos;s Most Sophisticated Earners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Semiconductor & Tech */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Gauge className="w-6 h-6 text-[#1d7682] mr-3" />
                  <h3 className="font-serif text-2xl font-bold text-[#333333]">
                    Semiconductor &amp; Tech
                  </h3>
                </div>
                <p className="text-[#5b6a71] mb-4">
                  TSMC, Intel, NVIDIA, Apple, Microchip, Amkor. RSUs, ESPPs, relocation packages, and stock concentration.
                </p>
                <Link
                  href="/semiconductor"
                  className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more →
                </Link>
              </div>

              {/* Aerospace & Defense */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-[#1d7682] mr-3" />
                  <h3 className="font-serif text-2xl font-bold text-[#333333]">
                    Aerospace &amp; Defense
                  </h3>
                </div>
                <p className="text-[#5b6a71] mb-4">
                  Honeywell and Raytheon. Pensions, long-tenure equity, deferred compensation, and employer-stock concentration.
                </p>
                <Link
                  href="/aerospace"
                  className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more →
                </Link>
              </div>

              {/* Physicians & Executives */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-[#1d7682] mr-3" />
                  <h3 className="font-serif text-2xl font-bold text-[#333333]">
                    Physicians &amp; Executives
                  </h3>
                </div>
                <p className="text-[#5b6a71] mb-4">
                  Banner Health, Mayo Clinic ($400K–$800K+), Freeport-McMoRan. High income, commodity-linked comp, and pension planning.
                </p>
                <Link
                  href="/physicians"
                  className="text-[#1d7682] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: THE NUMBERS */}
      <section className="bg-[#333333] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimateOnScroll>
            <SectionEyebrow text="THE STAKES" light />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-6 mb-16 leading-tight">
              The Financial Stakes for Arizona&apos;s High Earners Are Real — and Growing.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="3.3B" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  in Intel SERPLUS balances — unsecured, unfunded
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="22%" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  flat supplemental withholding vs 37% actual rate
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="7%" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Honeywell match — deposited as HON stock automatically
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="100%" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  up to 4% Banner Health match — covers &lt;4% of physician income
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="$69,000" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  /year max through mega backdoor Roth — most don&apos;t use it
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
                <p className="text-5xl font-serif font-bold text-[#1d7682] mb-2">
                  <CountUp end="$15B+" />
                </p>
                <p className="text-white text-sm leading-relaxed">
                  AUM at Farther — institutional scale, personal relationships
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 6: FOUR-STEP PROCESS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <AnimateOnScroll>
            <SectionEyebrow text="HOW JAY WORKS" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-16 leading-tight">
              How Jay Works With You — From First Call to Lifelong Partner
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-[#F7F4EE] p-8 rounded-lg min-h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1d7682] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#333333] mt-4 mb-4">
                    Discovery Call
                  </h3>
                  <p className="text-[#5b6a71] text-sm mb-2">30 min · Free</p>
                  <p className="text-[#5b6a71] leading-relaxed">
                    A conversation about your situation, no pitch.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-[#F7F4EE] p-8 rounded-lg min-h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1d7682] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#333333] mt-4 mb-4">
                    Plan Design
                  </h3>
                  <p className="text-[#5b6a71] text-sm mb-2">2–3 weeks</p>
                  <p className="text-[#5b6a71] leading-relaxed">
                    Comprehensive scenario-based plan using Farther&apos;s platform.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-[#F7F4EE] p-8 rounded-lg min-h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1d7682] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#333333] mt-4 mb-4">
                    Implementation
                  </h3>
                  <p className="text-[#5b6a71] text-sm mb-2">2–3 weeks</p>
                  <p className="text-[#5b6a71] leading-relaxed">
                    Farther Concierge Team handles setup and coordination.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-[#F7F4EE] p-8 rounded-lg min-h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1d7682] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#333333] mt-4 mb-4">
                    Ongoing Partnership
                  </h3>
                  <p className="text-[#5b6a71] text-sm mb-2">Ongoing</p>
                  <p className="text-[#5b6a71] leading-relaxed">
                    Quarterly check-ins, proactive outreach, annual review.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 7: WHY FARTHER */}
      <section className="bg-[#FAFAF8] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimateOnScroll>
            <SectionEyebrow text="THE FARTHER ADVANTAGE" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-8 leading-tight">
              Most Advisors Choose Between Great Technology and Great Advice. Farther Gives You Both.
            </h2>
            <p className="text-lg text-[#5b6a71] leading-relaxed mb-12">
              Farther&apos;s Intelligent Wealth Platform combines institutional-grade technology with personal advisory relationships. It&apos;s built for professionals whose compensation defies simple advice — engineers with RSUs, physicians with commodity-linked income, executives with deferred comp. The platform does the heavy lifting. Jay does the thinking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg flex gap-4">
                <div className="flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#1d7682]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#333333] mb-2">Unified Wealth Hub</h3>
                  <p className="text-[#5b6a71] text-sm">All accounts in one dashboard — complete visibility.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg flex gap-4">
                <div className="flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#1d7682]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#333333] mb-2">Automated Tax-Loss Harvesting</h3>
                  <p className="text-[#5b6a71] text-sm">Daily scanning to capture tax benefits automatically.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg flex gap-4">
                <div className="flex-shrink-0">
                  <Gauge className="w-6 h-6 text-[#1d7682]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#333333] mb-2">Asset Location Optimization</h3>
                  <p className="text-[#5b6a71] text-sm">Across taxable, deferred, and Roth accounts.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#1d7682]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#333333] mb-2">Institutional Investment Access</h3>
                  <p className="text-[#5b6a71] text-sm">Farther Asset Management — lower costs, better returns.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg flex gap-4 md:col-span-2">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-[#1d7682]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#333333] mb-2">$15B+ AUM</h3>
                  <p className="text-[#5b6a71] text-sm">Institutional pricing and scale, personal relationships that matter.</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS PLACEHOLDER */}
      <section className="bg-[#F7F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimateOnScroll>
            <SectionEyebrow text="CLIENT PERSPECTIVES" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#333333] mt-6 mb-8 leading-tight">
              Arizona Professionals Trust Jay With Their Most Complex Financial Decisions
            </h2>
            <p className="text-lg text-[#5b6a71] leading-relaxed">
              Client testimonials coming soon — subject to compliance review and client permission.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-[#333333] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Compensation Is Complex. Your Next Step Isn&apos;t.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              One conversation is all it takes to get clarity on whether Jay is the right advisor for your situation. No obligation. No product pitch. Just an honest discussion about what your financial plan needs — and whether Jay is the right person to build it.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule Your Strategy Call
              </Button>
              <p className="text-gray-400 text-sm">
                Free · Confidential · Built for high-income professionals in Arizona, California, and Nevada
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
