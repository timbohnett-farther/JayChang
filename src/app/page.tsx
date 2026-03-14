import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import CountUp from '@/components/CountUp'
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
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Personal Wealth Management at Farther | Dallas & Las Vegas Financial Advisor',
  description:
    "Personalized wealth management for families and business owners with $2M\u2013$20M in investable assets. Serving Dallas, TX and Las Vegas, NV. Powered by Farther's $13B+ Intelligent Wealth Platform \u2014 #1 fastest-growing financial services firm in America (Inc. 5000).",
  alternates: { canonical: 'https://www.privatewealthatfarther.com/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther',
  description:
    'Personalized wealth management for families and business owners with $2M\u2013$20M in investable assets in Dallas, TX and Las Vegas, NV.',
  url: 'https://www.privatewealthatfarther.com',
  telephone: '+1-725-238-4291',
  areaServed: [
    {
      '@type': 'City',
      name: 'Dallas',
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
    {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: { '@type': 'State', name: 'Nevada' },
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
    description: 'Retirement projections, education funding, cash flow optimization, and insurance analysis \u2014 integrated into a single, dynamic plan powered by Farther\u2019s AI-driven analytics.',
    href: '/services#financial-planning',
  },
  {
    icon: TrendingUp,
    title: 'Investments & Portfolio Management',
    description: 'Custom portfolios with tax-efficient positioning, direct indexing via SMAs, and Farther\u2019s AI-driven analytics \u2014 reflecting your goals, not a model number.',
    href: '/services#investment-management',
  },
  {
    icon: Shield,
    title: 'Tax Optimization',
    description: 'Tax-loss harvesting, Roth conversion analysis, asset location strategy, and proactive tax budgeting \u2014 going far beyond April 15.',
    href: '/services#tax-estate',
  },
  {
    icon: GraduationCap,
    title: 'Retirement Planning',
    description: 'Distribution sequencing, Social Security optimization, 401(k) rollovers, and withdrawal strategies designed to make your wealth last.',
    href: '/services#retirement-planning',
  },
  {
    icon: Landmark,
    title: 'Trust & Estate Planning',
    description: 'Access to Farther\u2019s dedicated Trust & Estate team for trust structures, wealth transfer strategies, and Nevada dynasty trust planning.',
    href: '/services#trust-estate-planning',
  },
  {
    icon: Layers,
    title: '401(k) & Retirement Plans',
    description: 'Plan design, fiduciary risk management, investment oversight, and participant education for business owners with employees.',
    href: '/services#retirement-plans',
  },
  {
    icon: BarChart3,
    title: 'Alternative Investments',
    description: 'Private equity, venture capital, private credit, and hedge fund strategies \u2014 access typically reserved for family offices and institutions.',
    href: '/services#alternative-investments',
  },
  {
    icon: Heart,
    title: 'Institutional Services',
    description: 'OCIO and fiduciary oversight for nonprofits, endowments, and foundations \u2014 investment policy, asset allocation, and governance.',
    href: '/services#institutional-services',
  },
  {
    icon: Building,
    title: 'Generational Wealth Planning',
    description: 'Multi-generational strategies, family governance, succession planning, and legacy conversations that align your family around shared values.',
    href: '/wealth-management',
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
      <section className="relative min-h-screen w-full bg-[#0A1628] bg-texture-dark overflow-hidden">
        {/* Background gradient effect on right side */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] hidden lg:block pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 50%), linear-gradient(135deg, rgba(27, 42, 74, 0.8) 0%, rgba(10, 22, 40, 0.95) 100%)',
          }}
        />

        <div className="relative z-10 flex items-center min-h-screen px-[20px] md:px-[80px]">
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <span className="font-sans text-eyebrow font-medium text-[#C9A84C] tracking-[0.15em] uppercase">
                WEALTH MANAGEMENT &middot; TECHNOLOGY &middot; TRUST
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[36px] md:text-[56px] font-bold text-[#F7F4EE] leading-[1.15] mt-6">
                Your Wealth Deserves a Real Strategy.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] md:text-[20px] font-light text-[#BFC8D4] leading-[1.6] max-w-[540px] mt-5">
                Fee-only fiduciary advice &mdash; legally required to act in
                your best interest &mdash; for families, individuals, and
                business owners with $2M&ndash;$20M+ in Dallas and Las Vegas.
                A dedicated advisor, backed by Farther&rsquo;s $13B+ Intelligent
                Wealth Platform.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                  Schedule a Conversation{' '}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Button>
                <span className="font-sans text-sm text-[#F7F4EE]/70 hover:text-[#F7F4EE] mt-3 sm:mt-0 transition-colors">
                  Or call directly:{' '}
                  <a
                    href="tel:+17252384291"
                    className="underline underline-offset-2 hover:text-[#F7F4EE]"
                  >
                    (725) 238-4291
                  </a>
                </span>
              </div>
            </AnimateOnScroll>

            {/* Trust bar */}
            <AnimateOnScroll delay={400}>
              <div className="inline-flex flex-wrap gap-8 items-center mt-12">
                <span className="font-sans text-caption text-[#BFC8D4]">
                  $13B+ in Recruited Assets
                </span>
                <span
                  className="hidden sm:block w-[1px] h-[24px] bg-[#C9A84C]/30"
                  aria-hidden="true"
                />
                <span className="font-sans text-caption text-[#BFC8D4]">
                  Technology-First Platform
                </span>
                <span
                  className="hidden sm:block w-[1px] h-[24px] bg-[#C9A84C]/30"
                  aria-hidden="true"
                />
                <span className="font-sans text-caption text-[#BFC8D4]">
                  Fiduciary Standard
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-6 h-6 text-[#C9A84C]/60 animate-bounce-subtle" />
        </div>
      </section>

      {/* ================================================================
          SECTION 2: TRUST BAR
          ================================================================ */}
      <section className="bg-[#C9A84C] w-full">
        <div className="py-8 md:py-6 px-[20px] md:px-[80px]">
          <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:gap-[80px]">
            {/* Metric 1 */}
            <div className="text-center">
              <div className="font-mono text-[36px] text-[#0A1628]">
                <CountUp end="$13B+" />
              </div>
              <div className="font-sans text-xs font-medium text-[#0A1628] tracking-[0.1em] uppercase">
                RECRUITED ASSETS
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(10,22,40,0.2)]" />

            {/* Metric 2 */}
            <div className="text-center">
              <div className="font-mono text-[36px] text-[#0A1628]">
                <CountUp end="500+" />
              </div>
              <div className="font-sans text-xs font-medium text-[#0A1628] tracking-[0.1em] uppercase">
                ADVISOR PARTNERS
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(10,22,40,0.2)]" />

            {/* Metric 3 */}
            <div className="text-center">
              <div className="font-mono text-[36px] text-[#0A1628]">
                <CountUp end="15+" />
              </div>
              <div className="font-sans text-xs font-medium text-[#0A1628] tracking-[0.1em] uppercase">
                YEARS OF EXCELLENCE
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[rgba(10,22,40,0.2)]" />

            {/* Metric 4 */}
            <div className="text-center">
              <div className="font-mono text-[36px] text-[#0A1628]">
                <CountUp end="#1" />
              </div>
              <div className="font-sans text-xs font-medium text-[#0A1628] tracking-[0.1em] uppercase">
                FASTEST-GROWING IN FINANCIAL SERVICES
              </div>
              <div className="font-sans text-[10px] text-[#0A1628]/60 mt-0.5">
                Inc. 5000, 2025
              </div>
            </div>
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
                <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#0A1628] mt-4 heading-accent">
                  Built for Families and Business Owners Who&rsquo;ve Outgrown
                  Simple Answers.
                </h2>
                <div className="font-sans text-[17px] text-[#1C2B3A] leading-[1.7] max-w-[520px] mt-8 space-y-5">
                  <p>
                    You&rsquo;ve spent years building something meaningful
                    &mdash; a business, a career, a family&rsquo;s financial
                    foundation. Now the decisions are more complex. Tax
                    efficiency. Business succession. Protecting what you&rsquo;ve
                    built while positioning what comes next.
                  </p>
                  <p>
                    Personal Wealth Management at Farther serves clients with $2
                    million to $20 million in investable assets across Dallas and
                    Las Vegas. We combine the personal attention of a dedicated
                    advisor with the institutional-grade technology and
                    investment capabilities of Farther&rsquo;s Intelligent Wealth
                    Platform.
                  </p>
                  <p>
                    This is wealth management designed for your stage of success
                    &mdash; sophisticated enough to matter, personal enough to
                    feel right.
                  </p>
                </div>
                <Link
                  href="/wealth-management"
                  className="inline-block font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] mt-8 transition-colors"
                >
                  Learn about our approach &rarr;
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Right: Image placeholder with Farther branding */}
            <AnimateOnScroll delay={200}>
              <div className="hidden lg:flex rounded-[12px] bg-glacial min-h-[480px] items-center justify-center">
                <FartherIcon variant="dark" size={80} className="opacity-10" />
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
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#0A1628] mt-4 heading-accent-center">
              A Comprehensive Approach to Your Financial Life.
            </h2>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <AnimateOnScroll key={card.title} delay={index * 80}>
                <Link href={card.href} className="group block h-full">
                  <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#C9A84C] transition-all duration-300 h-full">
                    <card.icon className="w-10 h-10 text-[#C9A84C] mb-5" />
                    <h3 className="font-serif text-[20px] font-semibold text-[#1C2B3A]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.65] mt-3">
                      {card.description}
                    </p>
                    <span className="inline-block font-sans text-sm font-semibold text-[#0A1628] group-hover:text-[#C9A84C] mt-5 transition-colors">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={800}>
            <p className="font-sans text-[15px] font-semibold text-[#C9A84C] text-center mt-10">
              All included within your advisory relationship &mdash; no additional fees.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: WHERE WE SERVE — City Panels
          ================================================================ */}
      <section className="bg-[#1B2A4A] section-padding">
        <div className="max-w-container mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionEyebrow text="WHERE WE SERVE" light />
            <h2 className="font-serif text-h2-mobile md:text-h2 text-[#F7F4EE] mt-4 heading-accent-center">
              Deep Roots in Two Dynamic Markets.
            </h2>
          </div>

          {/* City panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dallas */}
            <AnimateOnScroll>
              <div
                className="rounded-[12px] overflow-hidden min-h-[420px] relative flex flex-col justify-end p-[48px]"
                style={{
                  background:
                    'linear-gradient(180deg, #1B2A4A 0%, #0A1628 100%)',
                }}
              >
                {/* Warm radial overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 30%, rgba(201, 168, 76, 0.08) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="font-sans text-xs font-bold uppercase text-[#C9A84C] tracking-[0.15em]">
                    DALLAS, TEXAS
                  </span>
                  <h3 className="font-serif text-[28px] font-semibold text-[#F7F4EE] mt-4 leading-[1.25]">
                    Wealth Management for DFW&rsquo;s Business Owners and
                    Growing Families.
                  </h3>
                  <p className="font-sans text-[15px] text-[#F7F4EE]/85 mt-3 max-w-[400px] leading-[1.65]">
                    From Highland Park to Southlake, we help Dallas-area
                    families and entrepreneurs navigate business transitions,
                    tax-efficient growth, and multi-generational wealth planning
                    in one of America&rsquo;s most dynamic economies.
                  </p>
                  <Link
                    href="/dallas"
                    className="inline-block font-sans text-sm font-semibold text-[#C9A84C] hover:text-[#F7F4EE] mt-6 transition-colors"
                  >
                    Explore Dallas Services &rarr;
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Las Vegas */}
            <AnimateOnScroll delay={150}>
              <div
                className="rounded-[12px] overflow-hidden min-h-[420px] relative flex flex-col justify-end p-[48px]"
                style={{
                  background:
                    'linear-gradient(180deg, #1B2A4A 0%, #0A1628 100%)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 30%, rgba(201, 168, 76, 0.08) 0%, transparent 60%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="font-sans text-xs font-bold uppercase text-[#C9A84C] tracking-[0.15em]">
                    LAS VEGAS, NEVADA
                  </span>
                  <h3 className="font-serif text-[28px] font-semibold text-[#F7F4EE] mt-4 leading-[1.25]">
                    Financial Planning for Nevada&rsquo;s Growing Community of
                    Successful Families.
                  </h3>
                  <p className="font-sans text-[15px] text-[#F7F4EE]/85 mt-3 max-w-[400px] leading-[1.65]">
                    Whether you&rsquo;ve recently relocated to Nevada or
                    you&rsquo;ve called Las Vegas home for years, we specialize
                    in the wealth planning opportunities that make Nevada one of
                    the most tax-advantaged states in the country.
                  </p>
                  <Link
                    href="/las-vegas"
                    className="inline-block font-sans text-sm font-semibold text-[#C9A84C] hover:text-[#F7F4EE] mt-6 transition-colors"
                  >
                    Explore Las Vegas Services &rarr;
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
                <h2 className="font-serif text-h2-mobile md:text-h2 text-[#0A1628] mt-4 heading-accent">
                  Personal Attention. Institutional Power.
                </h2>
                <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.7] mt-6">
                  Most advisors make you choose &mdash; a personal relationship
                  with limited resources, or a large institution where
                  you&rsquo;re one of hundreds. Farther&rsquo;s Intelligent
                  Wealth Platform eliminates that tradeoff.
                </p>
                <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.7] mt-5">
                  Through Farther, your dedicated advisor coordinates nine integrated
                  services &mdash; financial planning, investments, tax optimization, retirement
                  planning, trust &amp; estate, 401(k) management, alternative investments,
                  institutional services, and generational wealth planning &mdash; all within a
                  single advisory relationship.
                </p>

                {/* Farther recognition badge */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E6E1]">
                  <FartherIcon variant="dark" size={28} />
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#1C2B3A]">
                      #1 Fastest-Growing Financial Services Firm
                    </p>
                    <p className="font-sans text-[11px] text-[#6B7A8D]">
                      Inc. 5000 &middot; #8 Overall &middot; 11,968% Revenue Growth
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right column: 3 feature blocks */}
            <div className="flex flex-col gap-12">
              <AnimateOnScroll delay={100}>
                <div className="border-l-[3px] border-[#C9A84C] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#C9A84C] opacity-20 leading-none block">
                    01
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#1C2B3A] mt-2">
                    AI-Powered Financial Planning
                  </h3>
                  <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.65] mt-2">
                    Farther&rsquo;s platform generates personalized investment
                    proposals in under 10 minutes &mdash; using AI to analyze
                    your complete financial picture and stress-test strategies
                    across thousands of scenarios.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="border-l-[3px] border-[#C9A84C] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#C9A84C] opacity-20 leading-none block">
                    02
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#1C2B3A] mt-2">
                    A Fully Integrated Financial Picture
                  </h3>
                  <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.65] mt-2">
                    Every account, every asset, every liability &mdash; visible
                    in one place. Farther&rsquo;s platform connects your
                    investments, banking, tax strategy, and estate plan into a
                    single dashboard.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="border-l-[3px] border-[#C9A84C] pl-8">
                  <span className="font-serif text-[48px] font-bold text-[#C9A84C] opacity-20 leading-none block">
                    03
                  </span>
                  <h3 className="font-sans text-[18px] font-semibold text-[#1C2B3A] mt-2">
                    Your Advisor Spends 90% of Time on You
                  </h3>
                  <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.65] mt-2">
                    Most advisors spend 70% of their day on operations and
                    paperwork. Farther&rsquo;s technology handles the back
                    office, freeing your advisor to focus on what actually
                    matters.
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
            <SectionEyebrow text="CLIENT PERSPECTIVE" />

            {/* Decorative quote mark */}
            <div className="relative mt-8">
              <span
                className="font-serif text-[120px] text-[#C9A84C]/20 leading-none select-none block"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-[20px] md:text-[24px] font-normal italic text-[#1C2B3A] leading-[1.6] max-w-[760px] mx-auto -mt-10">
                Rob Davenport brought clarity to a situation that felt
                overwhelming. After selling my business, I had more questions
                than answers &mdash; about taxes, about investing the proceeds,
                about what retirement actually looks like when you&rsquo;ve been
                a business owner your entire life. They built a plan that
                addressed all of it.
              </blockquote>
            </div>

            <p className="font-sans text-sm font-medium text-[#6B7A8D] mt-8">
              &mdash; Sarah M., Dallas, TX
            </p>
            <p className="font-sans text-caption text-[#6B7A8D]">
              Business owner, client since 2024
            </p>

            {/* SEC compliance disclosure */}
            <p className="font-sans text-legal text-[#A0A0A0] mt-4 max-w-[600px] mx-auto">
              Client testimonials may not be representative of the experience of
              other clients and are not a guarantee of future performance or
              success. This testimonial was provided voluntarily and without
              compensation. Please see our{' '}
              <Link
                href="/disclosures"
                className="underline hover:text-[#6B7A8D]"
              >
                Disclosures
              </Link>{' '}
              page for additional information.
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
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#0A1628] mt-4 heading-accent-center">
              Insights for Families Building Lasting Wealth.
            </h2>
          </div>

          {/* Article cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <AnimateOnScroll delay={0}>
              <Link href="/insights" className="group block">
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="h-[200px] bg-glacial" />
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      BUSINESS OWNERS
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-3 leading-snug">
                      5 Financial Planning Steps Before Selling Your Business in
                      Dallas
                    </h3>
                    <p className="font-sans text-caption text-[#6B7A8D] mt-4">
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
                  <div className="h-[200px] bg-glacial" />
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      TAX STRATEGY
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-3 leading-snug">
                      Moving from California to Nevada: A Wealth Planning
                      Checklist
                    </h3>
                    <p className="font-sans text-caption text-[#6B7A8D] mt-4">
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
                  <div className="h-[200px] bg-glacial" />
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      WEALTH PLANNING
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-3 leading-snug">
                      Retirement at $2M vs $10M vs $20M: What Actually Changes?
                    </h3>
                    <p className="font-sans text-caption text-[#6B7A8D] mt-4">
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
              className="font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] transition-colors"
            >
              View all insights &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9: FINAL CTA
          ================================================================ */}
      <section className="bg-[#1B2A4A] section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-[1.2]">
              Your Wealth Has a Story. Let&rsquo;s Write the Next Chapter
              Together.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-[1.7] max-w-[620px] mx-auto mt-5">
              Whether you&rsquo;re navigating a business transition, planning
              for retirement, or simply ready for a more proactive approach to
              your financial life &mdash; we&rsquo;d welcome the conversation.
            </p>
            <div className="flex justify-center mt-10">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Conversation
              </Button>
            </div>
            <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
              Prefer to call?{' '}
              <a
                href="tel:+17252384291"
                className="hover:text-[#F7F4EE] transition-colors"
              >
                (725) 238-4291
              </a>{' '}
              &middot; Or email{' '}
              <a
                href="mailto:robert.davenport@farther.com"
                className="hover:text-[#F7F4EE] transition-colors"
              >
                robert.davenport@farther.com
              </a>
            </p>
            <p className="font-sans text-xs text-[#F7F4EE]/40 mt-8">
              Families with assets above $20M are welcome &mdash; we build
              customized solutions leveraging Farther&rsquo;s full institutional
              platform.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
