import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import {
  TrendingUp,
  Compass,
  Building,
  Shield,
  ChevronDown,
  Landmark,
  Layers,
  BarChart3,
  GraduationCap,
  Heart,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Wealth Management Services | Personal Wealth Management at Farther — Dallas & Las Vegas',
  description:
    'Investment management, financial planning, tax strategy, and business owner services for families with $2M–$20M in Dallas, TX and Las Vegas, NV. Personal Wealth Management at Farther.',
  alternates: { canonical: 'https://www.privatewealthatfarther.com/services' },
  openGraph: {
    title: 'Our Services | Personal Wealth Management at Farther',
    description:
      'Comprehensive wealth management services for families and business owners — investment management, financial planning, tax strategy, estate planning, and business exit planning.',
    url: 'https://www.privatewealthatfarther.com/services',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther',
  description:
    'Comprehensive wealth management services for families and business owners with $2M–$20M in investable assets in Dallas, TX and Las Vegas, NV.',
  url: 'https://www.privatewealthatfarther.com/services',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wealth Management Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Investment Management',
        description:
          'Customized investment strategies with tax-efficient positioning, alternative investments, and consolidated reporting.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Financial Planning',
        description:
          'Comprehensive financial planning including retirement projections, cash flow analysis, education funding, and insurance audits.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Business Owner Services',
        description:
          'Exit planning, succession strategy, entity structuring, equity compensation planning, and post-exit wealth management.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Tax & Estate Strategy',
        description:
          'Proactive tax planning, Roth conversion laddering, charitable giving strategies, estate planning, and generational wealth transfer.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Retirement Planning',
        description:
          'Distribution sequencing across IRAs, Roth accounts, and taxable portfolios, Social Security optimization, Roth conversion laddering, and Medicare planning.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Trust & Estate Planning',
        description:
          'Dedicated trust and estate planning specialists providing revocable and irrevocable trust design, Nevada dynasty trust strategy, and wealth transfer planning.',
      },
      {
        '@type': 'OfferCatalog',
        name: '401(k) & Qualified Retirement Plans',
        description:
          'Institutional-quality 401(k) and qualified retirement plan services including plan design, fiduciary risk management, and investment oversight for business owners.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Alternative Investments',
        description:
          'Access to private equity, venture capital, private credit, and hedge fund strategies via institutional-quality vehicles typically reserved for family offices and institutions.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Institutional Services',
        description:
          'Outsourced chief investment officer (OCIO) services for nonprofits, endowments, and foundations including investment policy development, asset allocation, and fiduciary oversight.',
      },
    ],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.farther.com',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum investment to work with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically work with families and business owners who have $2 million or more in investable assets. That said, every situation is unique. If you are building toward that threshold or have complex planning needs, we are happy to have a conversation to see if we can help.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are you compensated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We charge a transparent, fee-only advisory fee based on a percentage of assets under management. We do not earn commissions, sell proprietary products, or receive kickbacks from fund companies. Our incentives are aligned with yours — when your portfolio grows, we both benefit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Farther different from a traditional wealth management firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Farther combines dedicated, experienced advisors with an institutional-grade technology platform. You get the personal relationship of a boutique firm with the research capabilities, portfolio analytics, and operational efficiency of a much larger organization — without the bureaucracy or conflicts of interest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to move all my accounts to work with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Farther's platform can aggregate and monitor accounts across multiple custodians, including those you prefer to keep elsewhere. We will provide consolidated reporting and coordinated strategy across your entire financial picture, regardless of where the accounts are held.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with my CPA and estate attorney?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely — we encourage it. The best outcomes happen when your financial advisor, CPA, and estate attorney are working from the same playbook. We proactively coordinate with your existing professionals to ensure every decision is aligned across tax, legal, and investment strategy.',
      },
    },
    {
      '@type': 'Question',
      name: "I'm thinking about moving from California to Nevada. Can you help?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is something we help clients with regularly. Relocating from a high-tax state to Nevada involves careful planning around the timing of asset sales, residency documentation, trust restructuring, and estate plan updates. We coordinate with your tax and legal team to ensure the transition is done correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it cost to work with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We charge a transparent advisory fee based on a percentage of assets under management, typically ranging from 0.50% to 1.00% depending on portfolio size and complexity. There are no commissions, no hidden charges, and no product fees. For a family with $5 million, the annual fee would be approximately $25,000\u2013$50,000. You can review the complete fee schedule in our Form ADV Part 2A brochure on the Disclosures page.',
      },
    },
    {
      '@type': 'Question',
      name: "I've never worked with a financial advisor. Is it too late to start?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely not. Many of our most successful relationships start with clients who feel \u201Cbehind\u201D on planning \u2014 high-income professionals, business owners, and families who have been too busy building wealth to organize it. There is no judgment and no prerequisite. Our discovery conversation is designed to meet you exactly where you are and build from there.',
      },
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery Conversation',
    description:
      'A focused 30-minute introductory call to understand your situation, your concerns, and what you are looking for in an advisory relationship. No sales pitch — just a candid conversation.',
  },
  {
    number: '02',
    title: 'Deep-Dive Analysis',
    description:
      'We gather the complete picture — investments, tax returns, insurance, estate documents, business interests — and run a thorough analysis of where you stand and where the opportunities are.',
  },
  {
    number: '03',
    title: 'Strategy Presentation',
    description:
      'We present a comprehensive, written plan covering investment strategy, tax positioning, risk management, and estate coordination — all tailored to your specific goals and timeline.',
  },
  {
    number: '04',
    title: 'Ongoing Partnership',
    description:
      'Regular reviews, proactive adjustments, and direct access to your advisor. Your plan evolves as your life does — we stay ahead of changes so you never fall behind.',
  },
]

function GoldBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
      <span className="font-sans text-body text-[#5b6a71] leading-relaxed">
        {children}
      </span>
    </li>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================================================================
          SECTION 1: HERO
          ================================================================ */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR SERVICES" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
              A Comprehensive Approach to Your Financial Life.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6">
              We don&apos;t offer products — we build strategies. Every service
              below works together as part of a coordinated plan designed around
              your family&apos;s goals, your business interests, and the wealth
              you&apos;ve spent a lifetime building. As a fee-only fiduciary,
              our only obligation is to you.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <p className="font-sans text-[15px] text-[#5b6a71] max-w-[680px] mx-auto mt-4">
              When you work with Rob, you gain access to the full depth of
              Farther&rsquo;s institutional platform &mdash; $18 billion in
              assets under management, a dedicated investment committee, curated
              alternative investment access, and proprietary technology built from
              the ground up to serve complex wealth.* Your experience feels
              private and personal. Your infrastructure is institutional.
            </p>
            <p className="font-sans text-[10px] text-[#5b6a71]/60 max-w-[680px] mx-auto mt-2 italic">
              *$15B AUM reflects total assets across Farther Finance Inc.&rsquo;s
              platform as of January 2026. Individual advisor practices vary in size.
              See{' '}
              <a href="/documents/FFA ADV Packet (2.6.26).pdf" target="_blank" rel="noopener noreferrer" className="underline">
                Form ADV Part 1
              </a>{' '}
              for details.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: INVESTMENT MANAGEMENT
          ================================================================ */}
      <section
        id="investment-management"
        className="bg-[#FAFAF8] section-padding"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="INVESTMENT MANAGEMENT" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Growing &amp; Protecting Your Wealth.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  Your portfolio should reflect your life — not a model number.
                  We build customized investment strategies that balance growth
                  potential with risk management, tax efficiency, and the
                  liquidity you need for life&apos;s opportunities and
                  obligations.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Farther&apos;s wealth management platform gives us access to
                  institutional-grade research, advanced portfolio analysis, and
                  real-time monitoring across every account you hold — including
                  those at other custodians.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Customized asset allocation built around your specific goals,
                    timeline, and risk tolerance
                  </GoldBullet>
                  <GoldBullet>
                    Tax-efficient positioning across taxable, tax-deferred, and
                    tax-free accounts
                  </GoldBullet>
                  <GoldBullet>
                    Access to alternative investments, private credit, and
                    institutional share classes
                  </GoldBullet>
                  <GoldBullet>
                    Ongoing rebalancing and tax-loss harvesting — automated
                    through Farther&apos;s platform
                  </GoldBullet>
                  <GoldBullet>
                    Consolidated reporting across all accounts and custodians
                  </GoldBullet>
                  <GoldBullet>
                    Regular investment reviews with clear, jargon-free
                    explanations
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  All investment strategies carry risk, including the potential loss of principal.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right: Photo */}
            <AnimateOnScroll delay={150}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image src="/advisor-client-meeting.jpeg" alt="Advisor reviewing portfolio with client" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: FINANCIAL PLANNING
          ================================================================ */}
      <section id="financial-planning" className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* Left: Photo */}
            <AnimateOnScroll>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative order-2 lg:order-1">
                <Image src="/advisor-couple-meeting.jpeg" alt="Advisor meeting with couple for financial planning" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
            </AnimateOnScroll>

            {/* Right: Text */}
            <AnimateOnScroll delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow text="FINANCIAL PLANNING" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Planning for What Matters Most.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  Financial planning isn&apos;t a document that sits in a drawer
                  — it&apos;s a living strategy that evolves with your life. We
                  build comprehensive plans that answer the questions keeping you
                  up at night: Can I retire when I want to? Will my family be
                  protected? Am I making the right decisions with what I&apos;ve
                  built?
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Our planning process is powered by Farther&apos;s advanced
                  analysis engine, which models your plan across a wide
                  range of market scenarios &mdash; so you don&apos;t just hope
                  your plan works, you see the evidence.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What we plan for:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Retirement projections with scenario-based outcomes
                  </GoldBullet>
                  <GoldBullet>
                    Cash flow analysis and goal acceleration
                  </GoldBullet>
                  <GoldBullet>
                    Education funding strategies (529, gifting, trust-based)
                  </GoldBullet>
                  <GoldBullet>
                    Insurance audit — life, disability, long-term care, umbrella
                  </GoldBullet>
                  <GoldBullet>
                    Social Security optimization and timing analysis
                  </GoldBullet>
                  <GoldBullet>
                    Pension integration and distribution sequencing
                  </GoldBullet>
                  <GoldBullet>
                    Integration with your CPA and attorney
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  Financial projections are based on assumptions that may not reflect actual future conditions; results may vary.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: BUSINESS OWNER SERVICES
          ================================================================ */}
      <section id="business-owners" className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="BUSINESS OWNER SERVICES" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Your Business Is Your Biggest Asset. Plan Accordingly.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  If you&apos;ve built a business worth $2 million or $20
                  million, you&apos;ve probably spent more time building it than
                  planning what happens next. That&apos;s not a criticism —
                  it&apos;s how entrepreneurship works. But the financial
                  decisions surrounding your business are too significant to
                  navigate without a strategy.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  We specialize in helping business owners in{' '}
                  <Link
                    href="/dallas"
                    className="text-[#1d7682] hover:underline"
                  >
                    Dallas
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/las-vegas"
                    className="text-[#1d7682] hover:underline"
                  >
                    Las Vegas
                  </Link>{' '}
                  plan for the full lifecycle of business ownership — from
                  optimizing your current structure to executing a successful
                  exit.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  How we help business owners:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Exit planning — timing, valuation, tax structuring, and
                    buyer negotiation strategy
                  </GoldBullet>
                  <GoldBullet>
                    Succession planning for family transitions or management
                    buyouts
                  </GoldBullet>
                  <GoldBullet>
                    Entity structuring and optimization (S-Corp, C-Corp, LLC
                    conversions)
                  </GoldBullet>
                  <GoldBullet>
                    Equity compensation planning — stock options, RSUs, phantom
                    equity
                  </GoldBullet>
                  <GoldBullet>
                    Key-person risk mitigation and buy-sell agreement review
                  </GoldBullet>
                  <GoldBullet>
                    Pre-liquidity planning to minimize taxes before a sale or
                    recapitalization
                  </GoldBullet>
                  <GoldBullet>
                    Post-exit wealth management — investing, estate planning, and
                    lifestyle design after the sale
                  </GoldBullet>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Right: Photo */}
            <AnimateOnScroll delay={150}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image src="/advisor-developer-meeting.jpeg" alt="Wealth advisor meeting with construction business owner to review exit strategy" fill className="object-cover object-[60%_50%]" sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: TAX & ESTATE STRATEGY
          ================================================================ */}
      <section id="tax-estate" className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* Left: Photo */}
            <AnimateOnScroll>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative order-2 lg:order-1">
                <Image src="/legacy-portfolio.jpeg" alt="Legacy wealth planning materials" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
            </AnimateOnScroll>

            {/* Right: Text */}
            <AnimateOnScroll delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow text="TAX & ESTATE STRATEGY" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Preserving Wealth Across Generations.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  Most advisors think about taxes once a year. We think about
                  them every time we make a decision — because for families with
                  significant wealth, proactive tax strategy is one of the
                  highest-value services we provide. Combined with thoughtful
                  estate planning, we help you keep more of what you&apos;ve
                  built and pass it on with intention.
                </p>

                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  Tax planning that goes beyond April 15:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Roth conversion laddering to reduce future tax liability
                  </GoldBullet>
                  <GoldBullet>
                    Tax-loss harvesting across all taxable accounts
                  </GoldBullet>
                  <GoldBullet>
                    Charitable giving strategies — donor-advised funds, QCDs, and
                    CRTs
                  </GoldBullet>
                  <GoldBullet>
                    Capital gains timing and asset location optimization
                  </GoldBullet>
                  <GoldBullet>
                    State tax planning for clients relocating to Nevada or Texas
                  </GoldBullet>
                </ul>

                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  Estate planning that protects your legacy:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Revocable and irrevocable trust strategies (SLATs, GRATs,
                    ILITs)
                  </GoldBullet>
                  <GoldBullet>
                    Dynasty trust structures for multi-generational wealth
                    transfer
                  </GoldBullet>
                  <GoldBullet>
                    Beneficiary designation audit across all accounts and
                    policies
                  </GoldBullet>
                  <GoldBullet>
                    Wealth transfer strategies that leverage current estate tax
                    exemptions
                  </GoldBullet>
                  <GoldBullet>
                    Business succession integration with personal estate plan
                  </GoldBullet>
                  <GoldBullet>
                    Legacy conversations — helping families talk about money with
                    clarity and purpose
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  Tax outcomes depend on individual circumstances and are subject to changes in tax law.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5B: RETIREMENT PLANNING
          ================================================================ */}
      <section id="retirement-planning" className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="RETIREMENT PLANNING" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Your Next Chapter, Fully Funded.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  Retirement is not a single event &mdash; it is a multi-decade
                  financial strategy that requires careful orchestration. When to
                  take Social Security. How to sequence withdrawals across IRAs,
                  Roth accounts, and taxable portfolios. Whether a Roth
                  conversion ladder makes sense in Nevada&apos;s zero-income-tax
                  environment. These decisions interact with each other, and
                  getting the sequencing wrong can cost hundreds of thousands of
                  dollars over a 25 to 35-year retirement.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  We build retirement income plans that optimize every lever
                  available &mdash; distribution sequencing, tax bracket
                  management, required minimum distribution strategies, and
                  pension integration &mdash; so your wealth lasts as long as
                  you need it to.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Distribution sequencing across IRAs, Roth accounts, and
                    taxable portfolios
                  </GoldBullet>
                  <GoldBullet>
                    Social Security optimization and timing analysis
                  </GoldBullet>
                  <GoldBullet>
                    Roth conversion laddering in tax-advantaged states like
                    Nevada and Texas
                  </GoldBullet>
                  <GoldBullet>
                    Required minimum distribution planning and strategies
                  </GoldBullet>
                  <GoldBullet>
                    Pension integration and annuity evaluation
                  </GoldBullet>
                  <GoldBullet>
                    Medicare planning and healthcare cost projections
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  Financial projections are based on assumptions that may not reflect actual future conditions; results may vary.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right: Visual Placeholder */}
            <AnimateOnScroll delay={150}>
              <div className="bg-glacial rounded-[16px] aspect-[4/3] flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-[#1d7682]/40" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5C: TRUST & ESTATE PLANNING
          ================================================================ */}
      <section id="trust-estate-planning" className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* Left: Visual Placeholder */}
            <AnimateOnScroll>
              <div className="bg-glacial rounded-[16px] aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
                <Landmark className="h-16 w-16 text-[#1d7682]/40" />
              </div>
            </AnimateOnScroll>

            {/* Right: Text */}
            <AnimateOnScroll delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow text="TRUST & ESTATE PLANNING" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Dedicated Specialists Protecting Your Legacy.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  Estate planning at most advisory firms means a referral to an
                  outside attorney and a hope that the pieces connect. At
                  Farther, clients have direct access to a dedicated Trust and
                  Estate Planning team &mdash; specialists who work alongside
                  your advisor to design, implement, and maintain trust
                  structures, wealth transfer strategies, and estate plans that
                  actually integrate with your broader financial picture.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  For families in Nevada, this means leveraging one of the
                  premier trust jurisdictions in the country &mdash; dynasty
                  trusts that last indefinitely, asset protection trusts with a
                  two-year statute of limitations, and zero state income tax on
                  trust income. For families in Texas, it means taking full
                  advantage of community property rules that can provide a
                  complete step-up in cost basis for surviving spouses.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Revocable and irrevocable trust design (SLATs, GRATs, ILITs,
                    dynasty trusts)
                  </GoldBullet>
                  <GoldBullet>
                    Nevada dynasty trust strategy &mdash; wealth transfer across
                    unlimited generations
                  </GoldBullet>
                  <GoldBullet>
                    Wealth transfer strategies leveraging current estate tax
                    exemptions
                  </GoldBullet>
                  <GoldBullet>
                    Beneficiary designation audit across all accounts and
                    policies
                  </GoldBullet>
                  <GoldBullet>
                    Coordination with your estate attorney and CPA
                  </GoldBullet>
                  <GoldBullet>
                    Legacy planning conversations to align family around shared
                    values
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  Tax outcomes depend on individual circumstances and are subject to changes in tax law.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5D: 401(K) & QUALIFIED RETIREMENT PLANS
          ================================================================ */}
      <section id="retirement-plans" className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="401(K) & QUALIFIED RETIREMENT PLANS" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Retirement Plans That Work as Hard as Your Business.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  If you own a business with employees, your retirement plan is
                  both a benefit and a fiduciary obligation. Plan design,
                  investment selection, compliance testing, and participant
                  education all require ongoing attention &mdash; and the
                  consequences of getting it wrong range from regulatory
                  penalties to personal liability.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Through Farther&apos;s platform, our clients have
                  access to institutional-quality 401(k) and qualified
                  retirement plan services &mdash; including plan design,
                  fiduciary risk management, investment oversight, and
                  participant education &mdash; all coordinated as part of the
                  broader advisory relationship. For business owners in Dallas
                  and Las Vegas, this is often the entry point to comprehensive
                  wealth management.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Plan design and optimization for business owners and key
                    employees
                  </GoldBullet>
                  <GoldBullet>
                    Fiduciary risk management and compliance oversight
                  </GoldBullet>
                  <GoldBullet>
                    Investment menu selection and ongoing monitoring
                  </GoldBullet>
                  <GoldBullet>
                    Participant education and enrollment support
                  </GoldBullet>
                  <GoldBullet>
                    Coordination between business retirement plan and personal
                    wealth strategy
                  </GoldBullet>
                  <GoldBullet>
                    Transition planning for 401(k) rollovers at retirement or
                    business sale
                  </GoldBullet>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Right: Visual Placeholder */}
            <AnimateOnScroll delay={150}>
              <div className="bg-glacial rounded-[16px] aspect-[4/3] flex items-center justify-center">
                <Layers className="h-16 w-16 text-[#1d7682]/40" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5E: ALTERNATIVE INVESTMENTS
          ================================================================ */}
      <section id="alternative-investments" className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* Left: Visual Placeholder */}
            <AnimateOnScroll>
              <div className="bg-glacial rounded-[16px] aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
                <BarChart3 className="h-16 w-16 text-[#1d7682]/40" />
              </div>
            </AnimateOnScroll>

            {/* Right: Text */}
            <AnimateOnScroll delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow text="ALTERNATIVE INVESTMENTS" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  Access Typically Reserved for Family Offices and Institutions.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  For families with $5 million or more, a portfolio built
                  entirely on public equities and bonds may leave meaningful
                  diversification &mdash; and return potential &mdash; on the
                  table. Alternative investments, including private equity,
                  venture capital, private credit, and hedge fund strategies,
                  have long been a cornerstone of endowment and family office
                  portfolios. The Yale Model, pioneered by David Swensen,
                  demonstrated that a meaningful allocation to alternatives can
                  enhance risk-adjusted returns over long time horizons.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Through Farther&apos;s institutional platform, our
                  clients can access these strategies via interval funds, private
                  business development companies (BDCs), and select fund
                  partnerships &mdash; without the prohibitive minimums and
                  lockup structures that typically restrict access to
                  ultra-high-net-worth investors.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Private equity and venture capital exposure via
                    institutional-quality vehicles
                  </GoldBullet>
                  <GoldBullet>
                    Private credit and direct lending strategies for income
                    generation
                  </GoldBullet>
                  <GoldBullet>
                    Hedge fund strategies for portfolio diversification and
                    downside protection
                  </GoldBullet>
                  <GoldBullet>
                    Real asset investments including real estate and
                    infrastructure
                  </GoldBullet>
                  <GoldBullet>
                    Portfolio integration ensuring alternatives complement your
                    overall allocation
                  </GoldBullet>
                  <GoldBullet>
                    Transparent fee analysis and due diligence on all
                    alternative vehicles
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  All investment strategies carry risk, including the potential loss of principal. Alternative investments are illiquid and may not be suitable for all investors.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5F: INSTITUTIONAL SERVICES
          ================================================================ */}
      <section id="institutional-services" className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="INSTITUTIONAL SERVICES" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  OCIO and Fiduciary Oversight for Foundations and Endowments.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  If you serve on the board of a nonprofit, foundation, or
                  endowment, you understand the weight of fiduciary
                  responsibility. Investment decisions must balance growth with
                  mission alignment, spending policies must be sustainable, and
                  governance structures must withstand regulatory scrutiny. Most
                  board members are volunteers &mdash; they need a partner who
                  can carry the day-to-day investment and compliance burden.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Farther&apos;s Institutional Services team provides outsourced
                  chief investment officer (OCIO) services for nonprofits,
                  endowments, and foundations. This includes investment policy
                  development, asset allocation, manager selection, performance
                  reporting, and ongoing fiduciary oversight &mdash; freeing
                  board members to focus on mission rather than markets.
                </p>
                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What this looks like in practice:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Outsourced CIO (OCIO) services for foundations and
                    endowments
                  </GoldBullet>
                  <GoldBullet>
                    Investment policy statement development and governance
                    framework
                  </GoldBullet>
                  <GoldBullet>
                    Asset allocation and manager selection aligned with
                    organizational mission
                  </GoldBullet>
                  <GoldBullet>
                    Quarterly performance reporting and fiduciary documentation
                  </GoldBullet>
                  <GoldBullet>
                    Spending policy analysis to ensure long-term sustainability
                  </GoldBullet>
                  <GoldBullet>
                    Mission-aligned and ESG investment options where appropriate
                  </GoldBullet>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Right: Photo */}
            <AnimateOnScroll delay={150}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image src="/advisor-estate-planning.jpeg" alt="Advisor presenting generational wealth plan to family" fill className="object-cover object-top" sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: THE PROCESS
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <SectionEyebrow text="HOW WE WORK TOGETHER" light />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-semibold text-[#F7F4EE] mt-4 max-w-[800px] mx-auto">
              A Clear Process from First Conversation to Ongoing Partnership.
            </h2>
          </AnimateOnScroll>

          <div className="relative">
            {/* Connecting dashed line — desktop only */}
            <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#1d7682]/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <AnimateOnScroll key={step.number} delay={i * 120}>
                  <div className="relative text-center lg:text-left">
                    <span className="font-serif text-[56px] font-bold text-[#1d7682] leading-none">
                      {step.number}
                    </span>
                    <h3 className="font-sans text-h4 font-semibold text-[#F7F4EE] mt-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-[#F7F4EE]/80 leading-relaxed mt-3">
                      {step.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: FAQ
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="COMMON QUESTIONS" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
              Questions We Hear Most.
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll>
              {/* FAQ 1 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What is the minimum investment to work with you?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  We typically work with families and business owners who have $2
                  million or more in investable assets. That said, every
                  situation is unique. If you are building toward that threshold
                  or have complex planning needs — such as a business exit on the
                  horizon — we are happy to have a conversation to see if
                  we&apos;re the right fit.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    How are you compensated?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  We charge a transparent, fee-only advisory fee based on a
                  percentage of assets under management. We do not earn
                  commissions, sell proprietary products, or receive kickbacks
                  from fund companies. Our incentives are aligned with yours —
                  when your portfolio grows, we both benefit. Full fee details
                  are shared before you become a client.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What makes Farther different from a traditional wealth
                    management firm?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Farther combines dedicated, experienced advisors with an
                  institutional-grade technology platform. You get the personal
                  relationship of a boutique firm with the research capabilities,
                  portfolio analytics, and operational efficiency of a much
                  larger organization — without the bureaucracy or conflicts of
                  interest that come with legacy wirehouses.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    Do I need to move all my accounts to work with you?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  No. Farther&apos;s platform can aggregate and monitor accounts
                  across multiple custodians, including those you prefer to keep
                  elsewhere. We provide consolidated reporting and coordinated
                  strategy across your entire financial picture, regardless of
                  where the accounts are held. You maintain full control over
                  custody decisions.
                </p>
              </details>

              {/* FAQ 5 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    Do you work with my CPA and estate attorney?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Absolutely — we encourage it. The best outcomes happen when
                  your financial advisor, CPA, and estate attorney are working
                  from the same playbook. We proactively coordinate with your
                  existing professionals to ensure every decision is aligned
                  across tax, legal, and investment strategy. If you need
                  referrals, we can connect you with trusted specialists.
                </p>
              </details>

              {/* FAQ 6 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    I&apos;m thinking about moving from California to Nevada. Can
                    you help?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Yes, this is something we help clients with regularly.
                  Relocating from a high-tax state to Nevada involves careful
                  planning around the timing of asset sales, residency
                  documentation, trust restructuring, and estate plan updates. We
                  coordinate with your tax and legal team to ensure the
                  transition is executed correctly and you capture the full tax
                  benefit.
                </p>
              </details>

              {/* FAQ 7 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What does it cost to work with you?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  We charge a transparent advisory fee based on a percentage of
                  assets under management, typically ranging from 0.50% to 1.00%
                  depending on portfolio size and complexity. There are no
                  commissions, no hidden charges, and no product fees. For a
                  family with $5 million, the annual fee would be approximately
                  $25,000&ndash;$50,000. You can review the complete fee schedule
                  in our{' '}
                  <a
                    href="/disclosures#fees"
                    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
                  >
                    Form ADV Part 2A brochure
                  </a>
                  .
                </p>
              </details>

              {/* FAQ 8 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    I&apos;ve never worked with a financial advisor. Is it too
                    late to start?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Absolutely not. Many of our most successful relationships start
                  with clients who feel &ldquo;behind&rdquo; on planning &mdash;
                  high-income professionals, business owners, and families who
                  have been too busy building wealth to organize it. There is no
                  judgment and no prerequisite. Our discovery conversation is
                  designed to meet you exactly where you are and build from
                  there.
                </p>
              </details>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: CTA
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-tight">
              Your Wealth Is Complex. Your Plan Shouldn&apos;t Be Complicated.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
              A 30-minute introductory call is all it takes to see if we&apos;re
              the right fit. No sales pitch, no obligation — just a focused
              conversation about your goals.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-10">
              <Button
                href="https://meetings.hubspot.com/robert-davenport"
                variant="primary"
              >
                Let&rsquo;s Talk About What Matters to You
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="tel:+17252384291"
                className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors duration-200"
              >
                (725) 238-4291
              </a>
              <span className="hidden sm:inline text-[#F7F4EE]/30">|</span>
              <a
                href="mailto:robert.davenport@farther.com"
                className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors duration-200"
              >
                robert.davenport@farther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
