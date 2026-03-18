import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import CountUp from '@/components/CountUp'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { FartherIcon } from '@/components/FartherLogo'
import {
  Shield,
  TrendingUp,
  Compass,
  Building,
  ChevronDown,
  ArrowRight,
  Landmark,
  Layers,
  BarChart3,
  GraduationCap,
  Heart,
  Handshake,
  Rocket,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Personal Wealth Management at Farther | Arizona, California & Nevada Financial Advisor',
  description:
    'Fiduciary advice from an SEC-registered investment adviser for families and business owners with $2M\u2013$20M+ in investable assets. Serving Arizona, California, and Nevada. Jay Chang, Investment Adviser Representative at Farther Finance Advisors, LLC.',
  alternates: { canonical: 'https://www.PWM-Farther.com/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther',
  description:
    'Fiduciary wealth management for families and business owners with $2M\u2013$20M+ in investable assets in Arizona, California, and Nevada. Jay Chang, VP, Wealth Advisor.',
  url: 'https://www.PWM-Farther.com',
  telephone: '+1-480-944-0880',
  areaServed: [
    {
      '@type': 'State',
      name: 'Arizona',
    },
    {
      '@type': 'State',
      name: 'California',
    },
    {
      '@type': 'State',
      name: 'Nevada',
    },
  ],
  serviceType: [
    'Wealth Management',
    'Financial Planning',
    'Investment Management',
    'Retirement Planning',
    'Business Exit Planning',
    'Estate Planning',
    'Tax Strategy',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.farther.com',
  },
}

const serviceCards = [
  {
    icon: Compass,
    title: 'Financial Planning',
    description: 'Retirement projections, education funding, cash flow optimization, and insurance analysis, integrated into a single, dynamic plan. We model multiple scenarios so you can make decisions with confidence and clarity. Financial projections are based on assumptions that may not reflect actual future conditions.',
    href: '/services/financial-planning',
  },
  {
    icon: TrendingUp,
    title: 'Investments & Portfolio Management',
    description: 'Custom portfolios with tax-efficient positioning, direct indexing via SMAs, and advanced analytics, reflecting your goals, time horizon, and risk tolerance. All investment strategies carry risk, including the potential loss of principal.',
    href: '/services/investments',
  },
  {
    icon: Shield,
    title: 'Tax Optimization',
    description: 'Tax-loss harvesting, Roth conversion analysis, asset location strategy, and proactive tax budgeting, going far beyond April 15.',
    href: '/services/tax-optimization',
  },
  {
    icon: GraduationCap,
    title: 'Retirement Planning',
    description: 'Distribution sequencing, Social Security optimization, 401(k) rollovers, and withdrawal strategies designed to make your wealth last.',
    href: '/services/retirement-planning',
  },
  {
    icon: Landmark,
    title: 'Trust & Estate Planning',
    description: 'Access to Farther\'s dedicated Trust & Estate team for trust structures, wealth transfer strategies, and Nevada dynasty trust planning.',
    href: '/services/trust-estate',
  },
  {
    icon: Layers,
    title: '401(k) & Retirement Plans',
    description: 'Plan design, fiduciary risk management, investment oversight, and participant education for business owners with employees.',
    href: '/services/401k',
  },
  {
    icon: BarChart3,
    title: 'Alternative Investments',
    description: 'Private equity, venture capital, private credit, and hedge fund strategies. Access typically reserved for family offices and institutions.',
    href: '/services/alternatives',
  },
  {
    icon: Heart,
    title: 'Institutional Services',
    description: 'OCIO and fiduciary oversight for nonprofits, endowments, and foundations, investment policy, asset allocation, and governance.',
    href: '/services/institutional',
  },
  {
    icon: Building,
    title: 'Generational Wealth Planning',
    description: 'Multi-generational strategies, family governance, succession planning, and legacy conversations that align your family around shared values.',
    href: '/services/generational-wealth',
  },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================================================================
          SECTION 1: HERO
          ================================================================ */}
      <section className="relative min-h-screen w-full bg-[#333333] bg-texture-dark overflow-hidden">
        {/* Background gradient effect on right side */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] hidden lg:block pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(29, 118, 130, 0.06) 0%, transparent 50%), linear-gradient(135deg, rgba(51, 51, 51, 0.8) 0%, rgba(51, 51, 51, 0.95) 100%)',
          }}
        />

        <div className="relative z-10 flex items-center min-h-screen px-[20px] md:px-[80px]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <span className="font-sans text-eyebrow font-medium text-[#1d7682] tracking-[0.15em] uppercase">
                WEALTH MANAGEMENT &middot; TECHNOLOGY &middot; TRUST
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[36px] md:text-[56px] font-bold text-[#F7F4EE] leading-[1.15] mt-6">
                Your Wealth Deserves a Real Strategy.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] md:text-[20px] font-light text-[#b6d0ed] leading-[1.6] max-w-[540px] mt-5">
                Fiduciary advice from an SEC-registered investment adviser,
                held to a legal standard to put your interests first.
                For families, individuals, and business owners with
                $2M&ndash;$20M+ in investable assets across Arizona, California, and Nevada.
              </p>
              <p className="font-sans text-[15px] font-light text-[#b6d0ed]/80 leading-[1.6] max-w-[540px] mt-3">
                Backed by Farther&rsquo;s Intelligent Wealth Platform,
                with $15+ billion in assets under management across the firm&rsquo;s
                national network of 276 advisor partners, Jay Chang
                delivers the personalized attention of a private practice with the
                institutional infrastructure of one of America&rsquo;s
                fastest-growing wealth management firms.*
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Begin a Confidential Conversation{' '}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Button>
                <div className="flex flex-col gap-1 mt-3 sm:mt-0">
                  <span className="font-sans text-sm text-[#F7F4EE]/70 hover:text-[#F7F4EE] transition-colors">
                    Or call directly:{' '}
                    <a
                      href="tel:+14809440880"
                      className="underline underline-offset-2 hover:text-[#F7F4EE]"
                    >
                      (480) 944-0880
                    </a>
                  </span>
                  <span className="font-sans text-sm text-[#F7F4EE]/70">
                    Email:{' '}
                    <a
                      href="mailto:jay.chang@farther.com"
                      className="underline underline-offset-2 hover:text-[#F7F4EE] transition-colors"
                    >
                      jay.chang@farther.com
                    </a>
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#F7F4EE]/50 italic mt-4">
                A consultation does not obligate you to become a client. Advisory services are provided only after execution of an advisory agreement with Farther Finance Advisors, LLC.
              </p>
            </AnimateOnScroll>

            {/* Trust bar */}
            <AnimateOnScroll delay={400}>
              <div className="inline-flex flex-wrap gap-8 items-center mt-12">
                <span className="font-sans text-caption text-[#b6d0ed]">
                  Fiduciary Standard
                </span>
                <span
                  className="hidden sm:block w-[1px] h-[24px] bg-[#1d7682]/30"
                  aria-hidden="true"
                />
                <span className="font-sans text-caption text-[#b6d0ed]">
                  Technology-First Platform
                </span>
                <span
                  className="hidden sm:block w-[1px] h-[24px] bg-[#1d7682]/30"
                  aria-hidden="true"
                />
                <span className="font-sans text-caption text-[#b6d0ed]">
                  Nationwide Reach
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Team photo */}
          <div className="hidden lg:flex justify-center items-center">
            <AnimateOnScroll delay={300}>
              <Image
                src="/IMG_0138-photo.webp"
                alt="Jay Chang and the Personal Wealth Management team at Farther, serving families in Arizona, California, and Nevada"
                title="Personal Wealth Management team at Farther"
                width={600}
                height={750}
                className="w-full max-w-[520px] h-auto rounded-lg shadow-2xl"
                priority
              />
            </AnimateOnScroll>
          </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-6 h-6 text-[#1d7682]/60 animate-bounce-subtle" />
        </div>
      </section>

      {/* ================================================================
          SECTION 2: TRUST BAR
          ================================================================ */}
      <section className="bg-[#1d7682] w-full">
        <div className="py-8 md:py-6 px-[20px] md:px-[80px]">
          <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:gap-[80px]">
            {/* Metric 1 */}
            <div className="text-center">
              <div className="font-sans text-[36px] text-[#F7F4EE]">
                <CountUp end="$15B+" />
              </div>
              <div className="font-sans text-xs font-medium text-[#F7F4EE]/70 tracking-[0.1em] uppercase">
                ASSETS UNDER MANAGEMENT&sup1;
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(247,244,238,0.2)]" />

            {/* Metric 2 */}
            <div className="text-center">
              <div className="font-sans text-[36px] text-[#F7F4EE]">
                <CountUp end="276" />
              </div>
              <div className="font-sans text-xs font-medium text-[#F7F4EE]/70 tracking-[0.1em] uppercase">
                FARTHER ADVISOR PARTNERS
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(247,244,238,0.2)]" />

            {/* Metric 3 */}
            <div className="text-center">
              <div className="font-sans text-[36px] text-[#F7F4EE]">
                <CountUp end="15" />+ Years
              </div>
              <div className="font-sans text-xs font-medium text-[#F7F4EE]/70 tracking-[0.1em] uppercase">
                JAY CHANG&rsquo;S EXPERIENCE&sup2;
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(247,244,238,0.2)]" />

            {/* Metric 4 */}
            <div className="text-center">
              <div className="font-sans text-[36px] text-[#F7F4EE]">
                FIDUCIARY
              </div>
              <div className="font-sans text-xs font-medium text-[#F7F4EE]/70 tracking-[0.1em] uppercase">
                LEGALLY BOUND TO YOU
              </div>
            </div>
          </div>

          {/* Footnotes */}
          <div className="max-w-[800px] mx-auto mt-4 pt-3 border-t border-[rgba(247,244,238,0.15)]">
            <p className="font-sans text-[10px] text-[#F7F4EE]/50 leading-relaxed">
              &sup1; $15B in assets under management reflects total AUM across
              Farther Finance Inc.&rsquo;s platform as of January 2026 and is not
              representative of any individual advisor&rsquo;s practice. See{' '}
              <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="underline">Form ADV</a>{' '}
              for current figures.
            </p>
            <p className="font-sans text-[10px] text-[#F7F4EE]/50 leading-relaxed mt-1">
              &sup2; Reflects the professional experience of Jay Chang,
              VP and Wealth Advisor affiliated with Farther Finance
              Advisors LLC, an SEC-registered investment adviser.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: WHO WE SERVE
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="WHO WE SERVE" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 heading-accent">
                  Built for Families and Business Owners Who&rsquo;ve Outgrown
                  Simple Answers.
                </h2>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[520px] mt-8 space-y-5">
                  <p>
                    You&rsquo;ve spent years building something meaningful:
                    a business, a career, a family&rsquo;s financial
                    foundation. Now the decisions are more complex: tax
                    efficiency, business succession, protecting what you&rsquo;ve
                    built while positioning what comes next.
                  </p>
                  <p>
                    Jay Chang serves clients with $2 million to $20 million or
                    more in investable assets across Arizona, California, and Nevada. As
                    VP, Wealth Advisor at Farther, Jay combines the personal
                    attention of a dedicated advisor with the institutional-grade
                    technology and investment capabilities of Farther&rsquo;s
                    wealth management platform.
                  </p>
                  <p>
                    This is wealth management designed for your stage of success,
                    sophisticated enough to address real complexity,
                    personal enough to understand what matters to you.
                  </p>
                </div>
                <Link
                  href="/wealth-management"
                  className="inline-block font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] mt-8 transition-colors"
                >
                  Learn about our approach &rarr;
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Right: Advisor meeting photo */}
            <AnimateOnScroll delay={200}>
              <div className="hidden lg:block rounded-[12px] overflow-hidden min-h-[480px] relative">
                <Image
                  src="/IMG_0111.webp"
                  alt="Farther wealth advisor reviewing a personalized financial plan with a client"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 0vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: SERVICES OVERVIEW — HOW WE HELP
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionEyebrow text="HOW WE HELP" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 heading-accent-center">
              A Comprehensive Approach to Your Financial Life.
            </h2>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <AnimateOnScroll key={card.title} delay={index * 80}>
                <Link href={card.href} className="group block h-full">
                  <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#1d7682] transition-all duration-300 h-full">
                    <card.icon className="w-10 h-10 text-[#1d7682] mb-5" />
                    <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65] mt-3">
                      {card.description}
                    </p>
                    <span className="inline-block font-sans text-sm font-semibold text-[#333333] group-hover:text-[#1d7682] mt-5 transition-colors">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={800}>
            <p className="font-sans text-[15px] font-semibold text-[#1d7682] text-center mt-10">
              All included within your advisory relationship. No additional fees.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 4.5: HOW WE WORK — Process Timeline
          ================================================================ */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="HOW WE WORK" />
            <h2 className="font-serif text-[32px] md:text-[44px] font-bold text-[#F7F4EE] leading-[1.15] mt-4 text-center">
              From First Conversation to Lasting Confidence
            </h2>
            <p className="font-sans text-[17px] text-[#b6d0ed] leading-[1.6] max-w-[640px] mx-auto mt-4 text-center">
              Every relationship follows the same disciplined process,
              but no two plans look alike.
            </p>
          </AnimateOnScroll>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block mt-16">
            {/* Connecting line */}
            <div className="relative">
              <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-[#1d7682]/30" />
              <div className="grid grid-cols-4 gap-8">
                {/* Step 1 */}
                <AnimateOnScroll delay={0}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mx-auto relative z-10">
                      <Handshake className="w-6 h-6 text-[#F7F4EE]" />
                    </div>
                    <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] mt-4 block">
                      Listen
                    </span>
                    <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-2">
                      A Confidential Conversation
                    </h3>
                    <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-3">
                      We start by listening, not pitching. In a private
                      introductory meeting, Jay and his team learn about your
                      financial life, your family, your business, and what keeps
                      you up at night. You leave with clarity, whether or
                      not we work together.
                    </p>
                    <span className="font-sans text-xs text-[#1d7682]/60 mt-3 block">
                      Week 1
                    </span>
                  </div>
                </AnimateOnScroll>

                {/* Step 2 */}
                <AnimateOnScroll delay={150}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mx-auto relative z-10">
                      <Compass className="w-6 h-6 text-[#F7F4EE]" />
                    </div>
                    <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] mt-4 block">
                      Design
                    </span>
                    <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-2">
                      A Strategy Built Around Your Life
                    </h3>
                    <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-3">
                      Using Farther&rsquo;s Intelligent Wealth Platform, we
                      build a comprehensive financial architecture tailored to
                      your goals, risk tolerance, and tax profile,
                      grounded in Jay&rsquo;s deep experience in financial services.
                    </p>
                    <span className="font-sans text-xs text-[#1d7682]/60 mt-3 block">
                      Weeks 2&ndash;4
                    </span>
                  </div>
                </AnimateOnScroll>

                {/* Step 3 */}
                <AnimateOnScroll delay={300}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mx-auto relative z-10">
                      <Rocket className="w-6 h-6 text-[#F7F4EE]" />
                    </div>
                    <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] mt-4 block">
                      Implement
                    </span>
                    <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-2">
                      Precision Execution, Seamless Transition
                    </h3>
                    <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-3">
                      We handle everything: account transfers,
                      beneficiary updates, tax-lot optimization, and custodian
                      coordination. Farther&rsquo;s platform automates the
                      details so nothing falls through the cracks.
                    </p>
                    <span className="font-sans text-xs text-[#1d7682]/60 mt-3 block">
                      Weeks 3&ndash;6
                    </span>
                  </div>
                </AnimateOnScroll>

                {/* Step 4 */}
                <AnimateOnScroll delay={450}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#1d7682] flex items-center justify-center mx-auto relative z-10">
                      <Activity className="w-6 h-6 text-[#F7F4EE]" />
                    </div>
                    <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] mt-4 block">
                      Evolve
                    </span>
                    <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-2">
                      Ongoing Partnership, Not Set-It-and-Forget-It
                    </h3>
                    <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-3">
                      Structured portfolio reviews, proactive tax-loss
                      harvesting, and real-time monitoring. When life events
                      arise, like a business sale, a relocation, or a market
                      dislocation, we adjust before you have to ask.
                    </p>
                    <span className="font-sans text-xs text-[#1d7682]/60 mt-3 block">
                      Ongoing
                    </span>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden mt-12">
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#1d7682]/30" />

              {/* Step 1 */}
              <AnimateOnScroll>
                <div className="relative pb-10">
                  <div className="absolute left-[-22px] w-10 h-10 rounded-full bg-[#1d7682] flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-[#F7F4EE]" />
                  </div>
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] block">
                    Listen &middot; Week 1
                  </span>
                  <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-1">
                    A Confidential Conversation
                  </h3>
                  <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-2">
                    We start by listening, not pitching. In a private
                    introductory meeting, Jay and his team learn about your
                    financial life, your family, your business, and what keeps
                    you up at night. You leave with clarity, whether or
                    not we work together.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Step 2 */}
              <AnimateOnScroll delay={100}>
                <div className="relative pb-10">
                  <div className="absolute left-[-22px] w-10 h-10 rounded-full bg-[#1d7682] flex items-center justify-center">
                    <Compass className="w-5 h-5 text-[#F7F4EE]" />
                  </div>
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] block">
                    Design &middot; Weeks 2&ndash;4
                  </span>
                  <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-1">
                    A Strategy Built Around Your Life
                  </h3>
                  <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-2">
                    Using Farther&rsquo;s Intelligent Wealth Platform, we build
                    a comprehensive financial architecture tailored to your
                    goals, risk tolerance, and tax profile, grounded in
                    Jay&rsquo;s deep experience in financial services.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Step 3 */}
              <AnimateOnScroll delay={200}>
                <div className="relative pb-10">
                  <div className="absolute left-[-22px] w-10 h-10 rounded-full bg-[#1d7682] flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-[#F7F4EE]" />
                  </div>
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] block">
                    Implement &middot; Weeks 3&ndash;6
                  </span>
                  <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-1">
                    Precision Execution, Seamless Transition
                  </h3>
                  <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-2">
                    We handle everything: account transfers, beneficiary
                    updates, tax-lot optimization, and custodian coordination.
                    Farther&rsquo;s platform automates the details so nothing
                    falls through the cracks.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Step 4 */}
              <AnimateOnScroll delay={300}>
                <div className="relative">
                  <div className="absolute left-[-22px] w-10 h-10 rounded-full bg-[#1d7682] flex items-center justify-center">
                    <Activity className="w-5 h-5 text-[#F7F4EE]" />
                  </div>
                  <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#1d7682] block">
                    Evolve &middot; Ongoing
                  </span>
                  <h3 className="font-serif text-[18px] font-bold text-[#F7F4EE] mt-1">
                    Ongoing Partnership, Not Set-It-and-Forget-It
                  </h3>
                  <p className="font-sans text-[14px] text-[#b6d0ed]/80 leading-[1.6] mt-2">
                    Structured portfolio reviews, proactive tax-loss harvesting,
                    and real-time monitoring. When life events arise, like a
                    business sale, a relocation, or a market dislocation, we
                    adjust before you have to ask.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* CTA */}
          <AnimateOnScroll delay={500}>
            <div className="text-center mt-16">
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-[#F7F4EE]">
                It Starts With a Conversation
              </h3>
              <p className="font-sans text-[16px] text-[#b6d0ed] mt-2">
                No questionnaires. No pressure. Just a genuine exchange to see
                if we can help.
              </p>
              <div className="mt-6">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Begin a Confidential Conversation{' '}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="font-sans text-legal text-[#A0A0A0]/60 mt-6 max-w-[640px] mx-auto">
                The process described above represents a general overview of
                Jay Chang&rsquo;s client engagement approach and may vary
                based on individual circumstances, account complexity, and
                custodian requirements. Timelines are approximate and not
                guaranteed. Jay Chang is a VP and Wealth
                Advisor affiliated with Farther Finance Advisors LLC, an
                SEC-registered investment adviser. See our{' '}
                <a
                  href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#A0A0A0]"
                >
                  Form ADV Part 2A
                </a>{' '}
                and{' '}
                <Link
                  href="/disclosures"
                  className="underline hover:text-[#A0A0A0]"
                >
                  Disclosures
                </Link>{' '}
                for additional information.
              </p>
              <p className="font-sans text-legal text-[#A0A0A0]/60 mt-3 max-w-[640px] mx-auto italic">
                All investing involves risk, including the potential loss of principal. There is no guarantee that any investment strategy will achieve its objectives. Individual financial situations vary. The strategies discussed are not suitable for all investors. Consult with qualified tax and legal professionals regarding your specific circumstances.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: WHERE WE SERVE — City Panels
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionEyebrow text="WHERE WE SERVE" light />
            <h2 className="font-serif text-h2-mobile md:text-h2 text-[#F7F4EE] mt-4 heading-accent-center">
              Deep Expertise Across Three Dynamic Markets.
            </h2>
          </div>

          {/* City panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Arizona */}
            <AnimateOnScroll>
              <div
                className="rounded-[12px] overflow-hidden min-h-[420px] relative flex flex-col justify-end p-[48px]"
                style={{
                  background:
                    'linear-gradient(180deg, #333333 0%, #333333 100%)',
                }}
              >
                {/* Warm radial overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 30%, rgba(29, 118, 130, 0.08) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="font-sans text-xs font-bold uppercase text-[#1d7682] tracking-[0.15em]">
                    ARIZONA
                  </span>
                  <h3 className="font-serif text-[28px] font-semibold text-[#F7F4EE] mt-4 leading-[1.25]">
                    Wealth Management for Arizona&rsquo;s Business Owners and
                    Growing Families.
                  </h3>
                  <p className="font-sans text-[15px] text-[#F7F4EE]/85 mt-3 max-w-[400px] leading-[1.65]">
                    From Scottsdale to Phoenix and beyond, we help Arizona
                    families and entrepreneurs navigate retirement income planning,
                    tax-efficient growth, and multi-generational wealth building
                    in one of America&rsquo;s fastest-growing markets.
                  </p>
                  <Link
                    href="/scottsdale"
                    className="inline-block font-sans text-sm font-semibold text-[#1d7682] hover:text-[#F7F4EE] mt-6 transition-colors"
                  >
                    Explore Arizona Services &rarr;
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* California */}
            <AnimateOnScroll delay={100}>
              <div
                className="rounded-[12px] overflow-hidden min-h-[420px] relative flex flex-col justify-end p-[48px]"
                style={{
                  background:
                    'linear-gradient(180deg, #333333 0%, #333333 100%)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 30%, rgba(29, 118, 130, 0.08) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="font-sans text-xs font-bold uppercase text-[#1d7682] tracking-[0.15em]">
                    CALIFORNIA
                  </span>
                  <h3 className="font-serif text-[28px] font-semibold text-[#F7F4EE] mt-4 leading-[1.25]">
                    Comprehensive Financial Planning for California
                    Families and Professionals.
                  </h3>
                  <p className="font-sans text-[15px] text-[#F7F4EE]/85 mt-3 max-w-[400px] leading-[1.65]">
                    California&rsquo;s high-tax environment demands proactive
                    planning. We help families and business owners with
                    investment strategy, tax optimization, retirement income
                    planning, and wealth preservation tailored to the
                    unique challenges of the Golden State.
                  </p>
                  <Link
                    href="/california"
                    className="inline-block font-sans text-sm font-semibold text-[#1d7682] hover:text-[#F7F4EE] mt-6 transition-colors"
                  >
                    Explore California Services &rarr;
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Nevada */}
            <AnimateOnScroll delay={200}>
              <div
                className="rounded-[12px] overflow-hidden min-h-[420px] relative flex flex-col justify-end p-[48px]"
                style={{
                  background:
                    'linear-gradient(180deg, #333333 0%, #333333 100%)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 30%, rgba(29, 118, 130, 0.08) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="font-sans text-xs font-bold uppercase text-[#1d7682] tracking-[0.15em]">
                    NEVADA
                  </span>
                  <h3 className="font-serif text-[28px] font-semibold text-[#F7F4EE] mt-4 leading-[1.25]">
                    Financial Planning for Nevada&rsquo;s Growing Community of
                    Successful Families.
                  </h3>
                  <p className="font-sans text-[15px] text-[#F7F4EE]/85 mt-3 max-w-[400px] leading-[1.65]">
                    Whether you&rsquo;ve recently relocated to Nevada or
                    you&rsquo;ve called it home for years, we focus on
                    wealth planning strategies that take advantage of
                    Nevada&rsquo;s favorable tax environment, including
                    no state income tax, strong asset protection trusts, and
                    flexible estate planning structures. Tax benefits depend on
                    individual circumstances and residency status.
                  </p>
                  <Link
                    href="/las-vegas"
                    className="inline-block font-sans text-sm font-semibold text-[#1d7682] hover:text-[#F7F4EE] mt-6 transition-colors"
                  >
                    Explore Nevada Services &rarr;
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: WHY FARTHER — The Farther Advantage
          ================================================================ */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
            {/* Left column */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="THE FARTHER ADVANTAGE" />
                <h2 className="font-serif text-h2-mobile md:text-h2 text-[#333333] mt-4 heading-accent">
                  Personal Attention. Institutional Capability.
                </h2>
                <p className="font-sans text-[17px] text-[#333333] leading-[1.7] mt-6">
                  Most advisory firms force a tradeoff: a close personal
                  relationship with limited resources, or a large institution
                  where you&rsquo;re a number. Farther&rsquo;s technology
                  platform is designed to eliminate that compromise.
                </p>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7] mt-5">
                  Through Farther, your dedicated advisor coordinates nine integrated
                  services, including financial planning, investments, tax optimization, retirement
                  planning, trust &amp; estate, 401(k) management, alternative investments,
                  institutional services, and generational wealth planning, all within a
                  single advisory relationship.
                </p>

                {/* Farther recognition badge */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E6E1]">
                  <FartherIcon variant="dark" size={28} />
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#333333]">
                      Technology-First Wealth Management Platform
                    </p>
                    <p className="font-sans text-[11px] text-[#5b6a71]">
                      Farther Finance Advisors, LLC &middot; SEC-Registered RIA (CRD# 302050)
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right column: 3 feature blocks */}
            <div className="flex flex-col gap-12">
              <AnimateOnScroll delay={100}>
                <div className="border-l-[3px] border-[#1d7682] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#1d7682] opacity-20 leading-none block">
                    01
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#333333] mt-2">
                    Advanced Analytics &amp; Scenario Modeling
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65] mt-2">
                    Farther&rsquo;s platform helps generate personalized
                    investment proposals efficiently, using advanced
                    analytical tools to evaluate your financial situation and
                    model strategies across a range of market scenarios. Your
                    advisor reviews and refines every recommendation based on
                    your specific goals, risk tolerance, and circumstances.
                    Technology supports, but does not replace,
                    professional judgment.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="border-l-[3px] border-[#1d7682] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#1d7682] opacity-20 leading-none block">
                    02
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#333333] mt-2">
                    A Fully Integrated Financial Picture
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65] mt-2">
                    Your accounts, assets, and liabilities, all visible in
                    one place. Farther&rsquo;s platform is designed to connect
                    your investments, banking relationships, tax strategy, and
                    estate plan into a unified dashboard, giving you and your
                    advisor a comprehensive view of your financial life.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="border-l-[3px] border-[#1d7682] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#1d7682] opacity-20 leading-none block">
                    03
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#333333] mt-2">
                    More Time Focused on Your Strategy
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65] mt-2">
                    Traditional advisory operations often consume a significant
                    portion of an advisor&rsquo;s day with administrative and
                    operational tasks. Farther&rsquo;s technology is built to
                    streamline back-office operations, allowing your advisor to
                    dedicate substantially more time to your financial strategy,
                    planning conversations, and proactive portfolio management.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: TESTIMONIAL — Social Proof
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-[900px] mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="CLIENT PERSPECTIVES" />
            <TestimonialCarousel />

            {/* SEC compliance disclosure */}
            <p className="font-sans text-legal text-[#A0A0A0] mt-6 max-w-[640px] mx-auto">
              These testimonials reflect individual experiences of current and
              former advisory clients of Jay Chang at Farther Finance Advisors, LLC.
              They were provided voluntarily and without compensation. These
              clients&rsquo; experiences may not be representative of other
              clients&rsquo; experiences, and testimonials do not constitute a
              guarantee of future performance or results. Individual outcomes
              depend on each client&rsquo;s specific financial circumstances,
              goals, and market conditions. Farther Finance Advisors, LLC is an
              SEC-registered investment adviser (CRD# 302050). Please refer to our{' '}
              <Link
                href="/disclosures"
                className="underline hover:text-[#5b6a71]"
              >
                Disclosures
              </Link>{' '}
              and{' '}
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#5b6a71]"
              >
                Form ADV Part 2A
              </a>{' '}
              for additional information.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: INSIGHTS PREVIEW — Latest Thinking
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionEyebrow text="LATEST THINKING" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 heading-accent-center">
              Insights for Families Building and Preserving Wealth.
            </h2>
          </div>

          {/* Article cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <AnimateOnScroll delay={0}>
              <Link href="/insights" className="group block">
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="h-[200px] relative">
                    <Image src="/dallas-business-owner.webp" alt="Business owner planning a financial strategy before selling a company" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
                      BUSINESS OWNERS
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#333333] mt-3 leading-snug">
                      5 Financial Planning Considerations Before Selling Your Business
                    </h3>
                    <p className="font-sans text-caption text-[#5b6a71] mt-4">
                      March 3, 2026 &middot; 7 min read
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Card 2 */}
            <AnimateOnScroll delay={100}>
              <Link href="/insights" className="group block">
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="h-[200px] relative">
                    <Image src="/las-vegas-couple-sunset.webp" alt="Couple planning a California-to-Nevada wealth relocation at sunset" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
                      TAX STRATEGY
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#333333] mt-3 leading-snug">
                      Relocating from California to Nevada: A Wealth Planning
                      Checklist
                    </h3>
                    <p className="font-sans text-caption text-[#5b6a71] mt-4">
                      February 18, 2026 &middot; 9 min read
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Card 3 */}
            <AnimateOnScroll delay={200}>
              <Link href="/insights" className="group block">
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="h-[200px] relative">
                    <Image src="/couple-golf-course.webp" alt="Couple enjoying retirement after comprehensive wealth planning with Farther" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
                      WEALTH PLANNING
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#333333] mt-3 leading-snug">
                      Wealth at $2M vs $10M vs $20M: How Planning Complexity Changes
                    </h3>
                    <p className="font-sans text-caption text-[#5b6a71] mt-4">
                      February 4, 2026 &middot; 6 min read
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* View all link */}
          <div className="text-center mt-10">
            <Link
              href="/insights"
              className="font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] transition-colors"
            >
              View all insights &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 10: MEET YOUR ADVISOR
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="MEET YOUR ADVISOR" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 heading-accent">
                  Jay Chang, VP, Wealth Advisor
                </h2>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[560px] mt-8 space-y-5">
                  <p>
                    Jay Chang leads Personal Wealth Management at Farther,
                    serving families and business owners across Arizona,
                    California, and Nevada. With over 15 years of experience
                    in financial services, Jay previously served as VP,
                    Financial Consultant at Charles Schwab, and before that
                    held roles at Vanguard, where he developed deep expertise
                    in retirement income planning, investment strategy, and
                    tax planning.
                  </p>
                  <p>
                    Jay brings an entrepreneurial perspective to wealth management,
                    drawing on his background in real estate, retail, and e-commerce.
                    He specializes in helping clients build and preserve wealth
                    through comprehensive financial planning. Jay is a member of
                    the Association of Fundraising Professionals (AFP) and chose
                    to join Farther, a technology-forward RIA,
                    to deliver independent, fiduciary advice he believes best
                    serves his clients.
                  </p>
                  <p className="font-sans text-[15px] text-[#5b6a71]">
                    Jay serves clients across Arizona, California, and Nevada.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                    Let&rsquo;s Talk About What Matters to You <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="hidden lg:block rounded-[12px] overflow-hidden min-h-[480px] relative">
                <Image
                  src="/advisor-headshot.webp"
                  alt="Jay Chang, fiduciary wealth advisor at Farther helping families with financial planning in Arizona, California, and Nevada"
                  title="Jay Chang — VP, Wealth Advisor"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 0vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 11: FAQ
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 heading-accent-center">
              Common Questions from Prospective Clients.
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What is a fiduciary, and why does it matter?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  A fiduciary is legally and ethically obligated to act in your
                  best interest when providing investment advice. As a registered
                  investment adviser with the SEC, Farther Finance Advisors, LLC is held
                  to this standard. This means your advisor&rsquo;s
                  recommendations are based on what&rsquo;s appropriate for your
                  situation, not on commissions or product sales.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  How is Jay compensated?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Jay is compensated primarily through advisory fees paid by
                  clients. For complete details on our fee structure and any
                  potential conflicts of interest, please refer to our{' '}
                  <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="text-[#1d7682] hover:text-[#155f69] transition-colors">
                    Form ADV Part 2A
                  </a>.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What&rsquo;s the minimum to work with you?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Jay generally works with clients who have $2 million or more in
                  investable assets. However, we recognize that financial
                  situations are unique. If you&rsquo;re approaching that
                  threshold or have complex planning needs, we&rsquo;re happy to
                  have a conversation.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What makes Farther different from a traditional advisory firm?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Farther combines the personal attention of a dedicated advisor
                  with an institutional-grade technology platform designed to
                  streamline operations, enhance portfolio analysis, and provide
                  a more integrated view of your financial life. The result is an
                  advisory relationship where your advisor can focus on strategy
                  and service rather than administrative tasks.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  How do I get started?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  The first step is a confidential introductory conversation,
                  typically 30 minutes by phone or video, where we
                  learn about your financial situation, goals, and priorities.
                  There&rsquo;s no cost or obligation. From there, we&rsquo;ll
                  determine if there&rsquo;s a good fit and outline next steps.
                </div>
              </details>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={500}>
            <div className="text-center mt-10">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Schedule Your Introductory Conversation <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 12: FINAL CTA
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-[1.2]">
              Your Wealth Has a Story. Let&rsquo;s Write the Next Chapter
              Together.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-[1.7] max-w-[620px] mx-auto mt-5">
              Whether you&rsquo;re navigating a business transition, planning
              for retirement, or ready for a more proactive approach to your
              financial life, we&rsquo;d welcome the conversation.
              There&rsquo;s no cost and no obligation for an introductory
              consultation.
            </p>
            <div className="flex justify-center mt-10">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Explore Whether We&rsquo;re the Right Fit
              </Button>
            </div>
            <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
              Prefer to call?{' '}
              <a
                href="tel:+14809440880"
                className="hover:text-[#F7F4EE] transition-colors"
              >
                (480) 944-0880
              </a>{' '}
              &middot; Email{' '}
              <a
                href="mailto:jay.chang@farther.com"
                className="hover:text-[#F7F4EE] transition-colors"
              >
                jay.chang@farther.com
              </a>
            </p>
            <p className="font-sans text-xs text-[#F7F4EE]/40 mt-8">
              Families and individuals with investable assets above $20M are
              welcome. Jay works with Farther&rsquo;s full institutional
              platform to build customized solutions for complex financial
              situations.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
