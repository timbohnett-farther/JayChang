import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Zap,
  Cpu,
  Plane,
  Stethoscope,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Building,
  DollarSign,
} from 'lucide-react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Wealth Management for Arizona Engineers, Executives & Physicians | Jay Chang | Farther',
  description:
    `Specialized equity compensation and wealth strategies for high-income professionals at TSMC, Intel, Honeywell, Banner Health, and Arizona top employers. $150K–$800K+ compensation. Jay Chang | Farther.`,
  alternates: { canonical: 'https://www.PWM-Farther.com/scottsdale' },
  openGraph: {
    title: `Wealth Management for Arizona Top Earners | Jay Chang | Farther`,
    description:
      `Equity compensation planning, RSU strategies, and wealth management for engineers, executives, and physicians earning $150K–$800K+ at Arizona premier employers.`,
    url: 'https://www.PWM-Farther.com/scottsdale',
  },
  other: {
    'geo.region': 'US-AZ',
    'geo.placename': 'Scottsdale',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Jay Chang | Farther – Scottsdale',
  description:
    `Wealth management and equity compensation planning for high-income professionals earning $150K–$800K+ at Arizona top employers including TSMC, Intel, Honeywell, Raytheon, Banner Health, Mayo Clinic, and Freeport-McMoRan.`,
  url: 'https://www.PWM-Farther.com/scottsdale',
  telephone: '+1-480-944-0880',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4942,
    longitude: -111.9261,
  },
  areaServed: [
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'City', name: 'Paradise Valley' },
    { '@type': 'City', name: 'Tempe' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Carefree' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  serviceType: 'Wealth Management',
  provider: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.PWM-Farther.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is RSU vesting and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Restricted Stock Units (RSUs) are a common form of equity compensation at tech and semiconductor companies. When RSUs vest, they convert to shares and become immediately taxable as ordinary income at fair market value. The critical planning opportunity is understanding your vesting schedule, tax liability timing, and post-vest diversification strategy to avoid concentration risk and manage capital gains taxes effectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I manage concentrated stock from my employer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concentrated equity positions create significant risk if a single stock becomes too large a percentage of your portfolio. We design tax-efficient diversification strategies using systematic selling, exchange funds, 10b5-1 plans for executives, and charitable strategies. The goal is reducing risk without triggering unnecessary capital gains taxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is deferred compensation and how does it fit into my plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deferred compensation plans (common at Honeywell, Raytheon, and other large aerospace/defense contractors) allow executives to defer a portion of salary or bonus to later years. These offer tax deferral and creditor protection, but require careful planning around vesting, distribution timing, and integration with your broader retirement strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'I was relocated to Arizona for my job. How does relocation affect my taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona has no state income tax, which is a significant advantage compared to many other states. If you were relocated from a higher-tax state, this creates wealth planning opportunities. We also coordinate with employer relocation benefits, housing strategies, and any stock options or equity grants tied to your move.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should physicians approach retirement planning with high income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physicians earning $400K–$800K+ face unique challenges: high income, limited tax-sheltering capacity through traditional retirement plans, significant student loan debt, and malpractice risk. We address these through mega backdoor Roth conversions, careful retirement plan selection, asset protection strategies, and coordinated tax and estate planning.',
      },
    },
  ],
}

const stats = [
  { value: '4.2M', description: 'Total population in Greater Phoenix region' },
  { value: '$150K–$800K+', description: 'Typical total compensation for our clients' },
  { value: '15B+', description: 'Assets under management at Farther' },
  { value: '0%', description: 'Arizona state income tax rate' },
]

const employerSectors = [
  {
    category: 'Semiconductor & Microelectronics',
    companies: ['TSMC', 'Intel', 'NVIDIA', 'Microchip Technology', 'Amkor Technology'],
  },
  {
    category: 'Aerospace & Defense',
    companies: ['Honeywell', 'Raytheon Missiles & Defense'],
  },
  {
    category: 'Big Tech',
    companies: ['Apple (Mesa)', 'NVIDIA'],
  },
  {
    category: 'Healthcare & Life Sciences',
    companies: ['Banner Health', 'Mayo Clinic Scottsdale'],
  },
  {
    category: 'Mining & Natural Resources',
    companies: ['Freeport-McMoRan'],
  },
]

const specializedSections = [
  {
    icon: Cpu,
    title: 'Semiconductor & Tech',
    headline: 'Your Equity Is Growing Faster Than Your Plan. Let\'s Fix That.',
    body: 'Arizona is now ground zero for America\'s semiconductor renaissance. If you work at TSMC, Intel, Microchip, or Amkor, your compensation likely includes substantial RSU grants, stock options, and performance-based equity that can create life-changing wealth—or significant tax exposure if mismanaged.',
    services: [
      'RSU & Equity Vesting Strategies',
      'Concentrated Stock Risk Management',
      'Relocation Wealth Planning',
      'Mega Backdoor Roth Conversions',
      'IPO & Liquidity Event Planning',
    ],
  },
  {
    icon: Plane,
    title: 'Aerospace & Defense',
    headline: 'You Engineer Precision for a Living. Your Financial Plan Should Reflect That.',
    body: 'Honeywell and Raytheon professionals share a common trait: long tenures, disciplined careers, and compensation structures that reward loyalty. Your path to wealth is methodical and predictable—which means we can build a plan that\'s equally rigorous and strategic.',
    services: [
      'Deferred Compensation Optimization',
      'Pension & Retirement Integration',
      'Long-Tenure Wealth Accumulation',
      'Security Clearance-Sensitive Planning',
      'Executive Compensation Review',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Physicians',
    headline: 'You Protect Lives. Who\'s Protecting Your Wealth?',
    body: 'Banner Health and Mayo Clinic physicians earning $400K–$800K+ face a paradox: high income, limited time, and the pressure of managing complex tax situations, student loan debt, and malpractice risk. Your wealth strategy must be as precise as your medical practice.',
    services: [
      'Physician Income Tax Planning',
      'Asset Protection Strategies',
      'Retirement Catch-Up Planning',
      'Student Loan Payoff vs. Invest Analysis',
      'Real Estate & Practice Equity',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Large Tech Employers',
    headline: 'Your Total Comp Isn\'t Just a Number. It\'s a Wealth-Building Engine.',
    body: 'Apple\'s Mesa operations and NVIDIA\'s Phoenix engineering presence bring Silicon Valley-level compensation structures to Arizona. ESPP programs, multi-year equity projections, and tax bracket management are critical to turning stock compensation into lasting wealth.',
    services: [
      'ESPP Optimization',
      'Multi-Year Equity Projection',
      'AMT & Tax Bracket Management',
      'Post-Vest Diversification',
      'Bonus and Incentive Planning',
    ],
  },
  {
    icon: DollarSign,
    title: 'Mining & Commodities',
    headline: 'Commodity Markets Are Volatile. Your Financial Plan Shouldn\'t Be.',
    body: 'Freeport-McMoRan executives and senior engineers hold compensation deeply tied to commodity cycles. When copper prices spike or fall, your income swings dramatically. We build financial plans that absorb volatility and create stability.',
    services: [
      'Cyclical Industry Equity Strategy',
      'Executive Benefits Audit',
      '10b5-1 Plan Guidance',
      'Estate & Succession Planning',
      'Hedging & Risk Management',
    ],
  },
]

const communities = [
  { name: 'Scottsdale', descriptor: 'Premium desert living, high-net-worth hub' },
  { name: 'Phoenix', descriptor: 'Urban center, corporate headquarters' },
  { name: 'Paradise Valley', descriptor: 'Luxury estates, ultra-high-net-worth enclave' },
  { name: 'Tempe', descriptor: 'ASU area, young professionals, growing tech' },
  { name: 'Mesa', descriptor: 'East Valley hub, Intel & Apple operations' },
  { name: 'Chandler', descriptor: 'Tech corridor, semiconductor industry center' },
  { name: 'Gilbert', descriptor: 'Fastest-growing city, young affluent families' },
  { name: 'Carefree', descriptor: 'North Scottsdale luxury, private golf communities' },
]

export default function ScottsdalePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Scottsdale', href: '/scottsdale' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/Photos/scottsdale-professional.png"
          alt="Scottsdale skyline — wealth management for Arizona top engineers, executives, and physicians"
          title="Scottsdale, AZ — Jay Chang | Farther"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
        <div className="relative z-10 w-full px-[20px] md:px-[80px] py-[120px]">
          <div className="max-w-[620px]">
            <AnimateOnScroll>
              <SectionEyebrow text="SCOTTSDALE, ARIZONA" light />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#F7F4EE] mt-5 leading-[1.15]">
                Wealth Management Built for Arizona\'s Top Engineers, Executives & Physicians
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[19px] text-[#F7F4EE]/90 mt-5 max-w-[540px] leading-relaxed">
                You\'ve built a career at one of Arizona\'s most innovative companies. Now build a financial strategy that matches your ambition. Jay Chang partners with high-income professionals across the Valley to turn complex compensation into lasting generational wealth—powered by Farther\'s Intelligent Wealth Platform.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Schedule a Confidential Consultation
                </Button>
              </div>
              <p className="font-sans text-sm text-[#F7F4EE]/70 mt-5">
                Or call directly:{' '}
                <a
                  href="tel:+14809440880"
                  className="underline hover:text-[#1d7682] transition-colors"
                >
                  (480) 944-0880
                </a>
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHO I SERVE ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-[48px]">
            <AnimateOnScroll>
              <SectionEyebrow text="WHO I SERVE" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
                Specialized Wealth Strategies for Arizona\'s Highest-Earning Professionals
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="max-w-[720px] mx-auto mb-12">
            <AnimateOnScroll delay={200}>
              <div className="font-sans text-base text-[#333333] leading-[1.7] space-y-5">
                <p>
                  Arizona\'s economy is being reshaped by semiconductor manufacturing, aerospace innovation, and world-class healthcare. If you\'re a senior engineer at TSMC or Intel, a program director at Honeywell or Raytheon, or a physician at Banner Health—your compensation is anything but simple. Stock grants, RSU vesting schedules, deferred compensation, and multi-state tax exposure all demand a wealth advisor who understands the nuances.
                </p>
                <p>
                  Jay Chang works exclusively with high-income professionals earning $150K–$800K+ in total compensation across Arizona\'s premier employers.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {employerSectors.map((sector) => (
                <div key={sector.category} className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-6">
                  <h3 className="font-serif text-[18px] font-semibold text-[#1d7682] mb-4">
                    {sector.category}
                  </h3>
                  <ul className="space-y-2">
                    {sector.companies.map((company) => (
                      <li key={company} className="font-sans text-sm text-[#333333]">
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 3: EMPLOYER-SPECIFIC STRATEGIES ─── */}
      {specializedSections.map((section, idx) => (
        <section
          key={section.title}
          className={idx % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-[#F7F4EE]'}
        >
          <div className="max-w-container mx-auto section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">
              {/* Left: Icon + Text */}
              <AnimateOnScroll>
                <div>
                  <section.icon className="w-[48px] h-[48px] text-[#1d7682] mb-6" />
                  <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#333333] leading-[1.2] mb-6">
                    {section.headline}
                  </h2>
                  <p className="font-sans text-base text-[#333333] leading-[1.7] mb-6">
                    {section.body}
                  </p>
                  <div>
                    <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-4">
                      Key Services
                    </p>
                    <ul className="space-y-3">
                      {section.services.map((service) => (
                        <li key={service} className="font-sans text-[15px] text-[#333333] flex items-start">
                          <ArrowRight className="w-4 h-4 text-[#1d7682] mr-3 flex-shrink-0 mt-1" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right: Stats Box */}
              <AnimateOnScroll delay={200}>
                <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-12 shadow-[0_8px_32px_rgba(27,42,74,0.06)]">
                  <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
                    {section.title} Overview
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-2">
                        Specialization
                      </p>
                      <p className="font-sans text-base text-[#333333]">
                        Equity compensation, concentrated stock, and tax-efficient wealth building for {section.title.toLowerCase()} professionals.
                      </p>
                    </div>
                    <div className="border-t border-[#E8E6E1] pt-6">
                      <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-2">
                        Why This Matters
                      </p>
                      <p className="font-sans text-base text-[#333333]">
                        Compensation structures in this sector are complex. Without a coordinated strategy, you\'ll leave significant wealth on the table in taxes and missed planning opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* ─── SECTION 4: WHY JAY CHANG AT FARTHER ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-[48px]">
            <AnimateOnScroll>
              <SectionEyebrow text="WHY JAY CHANG AT FARTHER" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
                The Advisor + The Platform. A Combination That Doesn\'t Exist Anywhere Else.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="max-w-[720px] mx-auto mb-12">
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-base text-[#333333] leading-[1.7]">
                Most wealth management firms make you choose: a great advisor or great technology. At Farther, you get both. Jay Chang brings deep expertise in the financial challenges facing Arizona\'s highest earners, backed by Farther\'s Intelligent Wealth Platform—the same engine that has powered the firm past $15 billion in assets under management.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Fiduciary, Always', desc: 'We\'re held to a legal standard to put your interests first.' },
                { title: 'Tax-Loss Harvesting, Automated', desc: 'Systematic tax optimization built into your investment strategy.' },
                { title: 'Sophisticated Asset Location', desc: 'Strategic placement of investments across accounts for tax efficiency.' },
                { title: 'Modular Investment Architecture', desc: 'Flexible, customizable portfolios that evolve with your life.' },
                { title: 'Intelligent Wealth Platform', desc: '$15B+ in assets managed on a single integrated platform.' },
                { title: '90% Client Time', desc: 'You work with an advisor who knows your name and your goals.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8">
                  <h3 className="font-serif text-[20px] font-semibold text-[#333333] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 5: MARKET CONTEXT ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="ARIZONA'S WEALTH LANDSCAPE" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-12">
              A Regional Economy Shaped by High-Earning Professionals.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={stat.value} delay={200 + index * 75}>
                <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-8 text-center">
                  <div className="font-serif text-[40px] font-bold text-[#1d7682] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm text-[#333333]">
                    {stat.description}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={500}>
            <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-12">
              <p className="font-sans text-base text-[#333333] leading-[1.7]">
                Arizona has become one of the most concentrated wealth corridors in the United States. The semiconductor boom in Chandler and Mesa, aerospace manufacturing in the Phoenix corridor, world-class medical institutions, and natural resource wealth have created an environment where high-income professionals can build extraordinary wealth—if they have the right financial strategy in place.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 6: COMMUNITIES ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-[48px]">
            <AnimateOnScroll>
              <SectionEyebrow text="COMMUNITIES WE SERVE" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
                From Paradise Valley to the East Valley.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {communities.map((community, index) => (
              <AnimateOnScroll key={community.name} delay={200 + index * 75}>
                <div className="bg-[#F7F4EE] rounded-[12px] p-7 border border-[#E8E6E1]">
                  <div className="font-serif text-[20px] font-semibold text-[#333333]">
                    {community.name}
                  </div>
                  <div className="font-sans text-caption text-[#5b6a71] mt-1">
                    {community.descriptor}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FAQ ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] text-center mb-12">
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll delay={100}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What is RSU vesting and why does it matter?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Restricted Stock Units (RSUs) are a common form of equity compensation at tech and semiconductor companies. When RSUs vest, they convert to shares and become immediately taxable as ordinary income at fair market value. The critical planning opportunity is understanding your vesting schedule, tax liability timing, and post-vest diversification strategy to avoid concentration risk and manage capital gains taxes effectively.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  How do I manage concentrated stock from my employer?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Concentrated equity positions create significant risk if a single stock becomes too large a percentage of your portfolio. We design tax-efficient diversification strategies using systematic selling, exchange funds, 10b5-1 plans for executives, and charitable strategies. The goal is reducing risk without triggering unnecessary capital gains taxes.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What is deferred compensation and how does it fit into my plan?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Deferred compensation plans (common at Honeywell, Raytheon, and other large aerospace/defense contractors) allow executives to defer a portion of salary or bonus to later years. These offer tax deferral and creditor protection, but require careful planning around vesting, distribution timing, and integration with your broader retirement strategy.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  I was relocated to Arizona for my job. How does relocation affect my taxes?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Arizona has no state income tax, which is a significant advantage compared to many other states. If you were relocated from a higher-tax state, this creates wealth planning opportunities. We also coordinate with employer relocation benefits, housing strategies, and any stock options or equity grants tied to your move.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  How should physicians approach retirement planning with high income?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Physicians earning $400K–$800K+ face unique challenges: high income, limited tax-sheltering capacity through traditional retirement plans, significant student loan debt, and malpractice risk. We address these through mega backdoor Roth conversions, careful retirement plan selection, asset protection strategies, and coordinated tax and estate planning.
                </div>
              </details>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={600}>
            <p className="font-sans text-base text-[#5b6a71] text-center mt-12">
              We also serve families and business owners in{' '}
              <Link
                href="/california"
                className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
              >
                California <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
              {' '}and{' '}
              <Link
                href="/las-vegas"
                className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
              >
                Nevada <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 8: OFFICE & MAP ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR SCOTTSDALE OFFICE" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
              Serving the Greater Phoenix and Scottsdale Area
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Map */}
            <AnimateOnScroll delay={100}>
              <div className="rounded-[8px] overflow-hidden border border-[#E8E6E1] shadow-sm h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60619505965!2d-111.92608254453783!3d33.49419344500508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6de0c7f1c9f1%3A0x5c6b359e2b5e5a5e!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jay Chang | Farther — Scottsdale, AZ office location"
                />
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll delay={200}>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
                  Scottsdale, Arizona
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Phone</p>
                    <a href="tel:+14809440880" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      (480) 944-0880
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Email</p>
                    <a href="mailto:jay.chang@farther.com" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      jay.chang@farther.com
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Hours</p>
                    <p className="font-sans text-[17px] text-[#333333]">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="font-sans text-[15px] text-[#5b6a71]">Evenings &amp; weekends by appointment</p>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Service Areas</p>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
                      Scottsdale &middot; Paradise Valley &middot; Phoenix &middot; Tempe &middot; Mesa &middot; Chandler &middot; Gilbert &middot; Carefree &middot; Cave Creek
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="primary" href="https://meetings.hubspot.com/jay-chang1/farthercom">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CTA ─── */}
      <section className="bg-[#333333] section-padding text-center">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] max-w-[800px] mx-auto leading-[1.2]">
              Your Compensation Is Complex. Your Next Step Is Simple.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
              Schedule a confidential, no-obligation conversation with Jay Chang to review your equity compensation, tax exposure, and long-term wealth strategy.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-8">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Book Your Strategy Session
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-[24px] sm:gap-[40px] mt-8">
              <a
                href="tel:+14809440880"
                className="font-sans text-body-sm text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                (480) 944-0880
              </a>
              <a
                href="mailto:jay.chang@farther.com"
                className="font-sans text-body-sm text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                jay.chang@farther.com
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="mt-8">
              <p className="font-sans text-sm text-[#F7F4EE]/60 mb-6">
                Advisor at Farther | SEC-Registered RIA (CRD# 302050) · Fiduciary Standard · $15B+ AUM · Named one of the 2025 Best RIAs to Work For by Financial Planning magazine*
              </p>
              <p className="text-xs text-[#F7F4EE]/40 font-sans mb-6 max-w-4xl mx-auto text-center">
                *Named one of the 2025 Best RIAs to Work For by <em>Financial Planning</em> magazine (published 2025), based on an independent employee survey. Farther did not pay a fee for this recognition. This does not constitute an endorsement of advisory services or indicate any client&apos;s experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/services"
                  className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/about"
                  className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
                >
                  About Jay Chang
                </Link>
                <Link
                  href="/insights"
                  className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
                >
                  Insights
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
