import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import {
  TrendingUp,
  Compass,
  Building,
  Shield,
  ChevronDown,
  Heart,
  Clock,
  Landmark,
  BarChart3,
  Building2,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Wealth Management Services | Personal Wealth Management at Farther — Dallas & Las Vegas',
  description:
    'Investment management, financial planning, tax strategy, and business owner services for families with $2M–$20M in Dallas, TX and Las Vegas, NV. Personal Wealth Management at Farther.',
  alternates: { canonical: 'https://www.PWM-Farther.com/services' },
  openGraph: {
    title: 'Our Services | Personal Wealth Management at Farther',
    description:
      'Comprehensive wealth management services for families and business owners — investment management, financial planning, tax strategy, estate planning, and business exit planning.',
    url: 'https://www.PWM-Farther.com/services',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther',
  description:
    'Comprehensive wealth management services for families and business owners with $2M–$20M in investable assets in Dallas, TX and Las Vegas, NV.',
  url: 'https://www.PWM-Farther.com/services',
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

const services = [
  {
    icon: TrendingUp,
    eyebrow: 'INVESTMENT MANAGEMENT',
    title: 'Growing & Protecting Your Wealth',
    description:
      'Customized investment strategies that balance growth potential with risk management, tax efficiency, and the liquidity you need for life\u2019s opportunities.',
    href: '/services/investments',
    highlights: [
      'Custom asset allocation',
      'Tax-efficient positioning',
      'Alternative investments access',
      'Consolidated reporting',
    ],
  },
  {
    icon: Compass,
    eyebrow: 'FINANCIAL PLANNING',
    title: 'Planning for What Matters Most',
    description:
      'Comprehensive plans that answer the questions keeping you up at night \u2014 retirement readiness, family protection, and smart decisions with what you\u2019ve built.',
    href: '/services/financial-planning',
    highlights: [
      'Retirement projections',
      'Cash flow analysis',
      'Education funding',
      'Insurance audit',
    ],
  },
  {
    icon: Building,
    eyebrow: 'BUSINESS OWNER SERVICES',
    title: 'Your Business Is Your Biggest Asset',
    description:
      'Exit planning, succession strategy, entity structuring, and equity compensation planning for business owners in Dallas and Las Vegas.',
    href: '/services/business-owners',
    highlights: [
      'Exit planning & valuation',
      'Succession strategy',
      'Equity compensation',
      'Post-exit wealth management',
    ],
  },
  {
    icon: Shield,
    eyebrow: 'TAX & ESTATE STRATEGY',
    title: 'Preserving Wealth Across Generations',
    description:
      'Proactive tax strategy and thoughtful estate planning to help you keep more of what you\u2019ve built and pass it on with intention.',
    href: '/services/tax-optimization',
    highlights: [
      'Roth conversion laddering',
      'Charitable giving strategies',
      'Trust design',
      'State tax planning',
    ],
  },
  {
    icon: Clock,
    eyebrow: 'RETIREMENT PLANNING',
    title: 'Your Next Chapter, Fully Funded',
    description:
      'Retirement income plans that optimize distribution sequencing, tax bracket management, and Social Security timing over a 25 to 35-year horizon.',
    href: '/services/retirement-planning',
    highlights: [
      'Distribution sequencing',
      'Social Security optimization',
      'Roth conversion ladders',
      'Medicare planning',
    ],
  },
  {
    icon: Heart,
    eyebrow: 'TRUST & ESTATE PLANNING',
    title: 'Dedicated Specialists Protecting Your Legacy',
    description:
      'Direct access to Farther\u2019s Trust and Estate Planning team \u2014 specialists who design, implement, and maintain trust structures alongside your advisor.',
    href: '/services/trust-estate',
    highlights: [
      'Nevada dynasty trusts',
      'Revocable & irrevocable trusts',
      'Wealth transfer strategies',
      'Legacy planning',
    ],
  },
  {
    icon: Landmark,
    eyebrow: '401(K) & RETIREMENT PLANS',
    title: 'Retirement Plans That Work as Hard as Your Business',
    description:
      'Institutional-quality 401(k) and qualified retirement plan services including plan design, fiduciary risk management, and investment oversight.',
    href: '/services/401k',
    highlights: [
      'Plan design & optimization',
      'Fiduciary risk management',
      'Investment menu selection',
      'Participant education',
    ],
  },
  {
    icon: BarChart3,
    eyebrow: 'ALTERNATIVE INVESTMENTS',
    title: 'Access Typically Reserved for Family Offices',
    description:
      'Private equity, venture capital, private credit, and hedge fund strategies via institutional-quality vehicles \u2014 without the prohibitive minimums.',
    href: '/services/alternatives',
    highlights: [
      'Private equity & VC',
      'Private credit',
      'Hedge fund strategies',
      'Real asset investments',
    ],
  },
  {
    icon: Building2,
    eyebrow: 'INSTITUTIONAL SERVICES',
    title: 'OCIO for Foundations & Endowments',
    description:
      'Outsourced chief investment officer services for nonprofits, endowments, and foundations \u2014 investment policy, asset allocation, and fiduciary oversight.',
    href: '/services/institutional',
    highlights: [
      'OCIO services',
      'Investment policy development',
      'Performance reporting',
      'Mission-aligned investing',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery Conversation',
    description:
      'A focused 30-minute introductory call to understand your situation, your concerns, and what you are looking for in an advisory relationship. No sales pitch \u2014 just a candid conversation.',
  },
  {
    number: '02',
    title: 'Deep-Dive Analysis',
    description:
      'We gather the complete picture \u2014 investments, tax returns, insurance, estate documents, business interests \u2014 and run a thorough analysis of where you stand and where the opportunities are.',
  },
  {
    number: '03',
    title: 'Strategy Presentation',
    description:
      'We present a comprehensive, written plan covering investment strategy, tax positioning, risk management, and estate coordination \u2014 all tailored to your specific goals and timeline.',
  },
  {
    number: '04',
    title: 'Ongoing Partnership',
    description:
      'Regular reviews, proactive adjustments, and direct access to your advisor. Your plan evolves as your life does \u2014 we stay ahead of changes so you never fall behind.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }]} />
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
              We don&apos;t offer products &mdash; we build strategies. Every service
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
          <AnimateOnScroll delay={400}>
            <div className="mt-12 max-w-[700px] mx-auto">
              <Image src="/IMG_0134.webp" alt="Farther complete financial operation system — banking, investments, insurance, documents, properties, wealth team, financial goals, and performance dashboards" width={700} height={700} className="w-full h-auto" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: SERVICE CARDS GRID
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <AnimateOnScroll key={service.href} delay={i * 80}>
                  <Link
                    href={service.href}
                    className="group block bg-white border border-[#E8E6E1] rounded-[16px] p-[32px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#1d7682] transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#1d7682]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1d7682]" />
                      </div>
                      <span className="font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#1d7682]">
                        {service.eyebrow}
                      </span>
                    </div>
                    <h2 className="font-serif text-[22px] font-bold text-[#333333] leading-tight mb-3">
                      {service.title}
                    </h2>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-[6px] w-[6px] min-w-[6px] rounded-full bg-[#1d7682]" />
                          <span className="font-sans text-[13px] text-[#5b6a71]">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <span className="font-sans text-[14px] font-semibold text-[#1d7682] group-hover:text-[#155f69] transition-colors inline-flex items-center gap-1">
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: THE PROCESS
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
                    <span className="font-serif text-[56px] font-bold text-[#F7F4EE] leading-none">
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
          SECTION 4: FAQ
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
                  or have complex planning needs &mdash; such as a business exit on the
                  horizon &mdash; we are happy to have a conversation to see if
                  we&apos;re the right fit.
                </p>
              </details>

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
                  from fund companies. Our incentives are aligned with yours &mdash;
                  when your portfolio grows, we both benefit. Full fee details
                  are shared before you become a client.
                </p>
              </details>

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
                  larger organization &mdash; without the bureaucracy or conflicts of
                  interest that come with legacy wirehouses.
                </p>
              </details>

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

              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    Do you work with my CPA and estate attorney?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Absolutely &mdash; we encourage it. The best outcomes happen when
                  your financial advisor, CPA, and estate attorney are working
                  from the same playbook. We proactively coordinate with your
                  existing professionals to ensure every decision is aligned
                  across tax, legal, and investment strategy. If you need
                  referrals, we can connect you with trusted specialists.
                </p>
              </details>

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
          SECTION 5: CTA
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
              the right fit. No sales pitch, no obligation &mdash; just a focused
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
