import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: '401(k) & Retirement Plans | Farther — Arizona, California & Nevada',
  description:
    'Fiduciary 401(k) and qualified retirement plan services for business owners in Arizona, California, and Nevada. Plan design, compliance, and investment oversight.',
  alternates: { canonical: 'https://www.PWM-Farther.com/services/401k' },
  openGraph: {
    title: '401(k) & Retirement Plans | Farther — Arizona, California & Nevada',
    description:
      'Fiduciary 401(k) and qualified retirement plan services for business owners. Plan design, compliance, investment oversight, and participant education.',
    url: 'https://www.PWM-Farther.com/services/401k',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther — 401(k) & Qualified Retirement Plans',
  description:
    'Institutional-quality 401(k) and qualified retirement plan services for business owners in Scottsdale, AZ and across Arizona, California, and Nevada. Plan design, fiduciary risk management, investment oversight, and participant education.',
  url: 'https://www.PWM-Farther.com/services/401k',
  telephone: '+1-480-944-0880',
  areaServed: [
    {
      '@type': 'City',
      name: 'Scottsdale',
      containedInPlace: { '@type': 'State', name: 'Arizona' },
    },
    {
      '@type': 'City',
      name: 'Tempe',
      containedInPlace: { '@type': 'State', name: 'Arizona' },
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
      name: 'What is the difference between a 401(k) and a qualified retirement plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 401(k) is one type of qualified retirement plan. Qualified plans also include profit-sharing plans, cash balance plans, and defined benefit pensions. Each structure offers different contribution limits, tax advantages, and design flexibility. The right choice depends on your business size, cash flow, and personal retirement goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is fiduciary responsibility and why does it matter for my 401(k)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a plan sponsor, you have a legal obligation to act in the best interest of plan participants. This includes selecting and monitoring investments, managing plan fees, and ensuring compliance with ERISA regulations. Failure to meet these duties can result in personal liability. Working with a fiduciary advisor helps you share and manage that responsibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help coordinate my company 401(k) with my personal wealth strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is one of the most valuable things we do. Most business owners manage their company retirement plan and personal investments in separate silos. We integrate both into a single, coordinated strategy that optimizes contributions, tax positioning, asset allocation, and eventual rollover and distribution planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my 401(k) when I sell my business or retire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you exit your business, your 401(k) assets can be rolled into an IRA, converted to a Roth IRA, or distributed — each with different tax consequences. We help you plan the transition well in advance, ensuring the rollover is timed and structured to minimize taxes and align with your broader retirement income strategy.',
      },
    },
  ],
}

function GoldBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
      <span className="font-sans text-body text-[#5b6a71] leading-relaxed">{children}</span>
    </li>
  )
}

export default function RetirementPlansPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: '401(k) & Qualified Plans', href: '/services/401k' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="bg-[#F7F4EE] pt-[120px] pb-[80px] px-[80px] max-md:px-[20px] max-md:pt-[80px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="401(K) & QUALIFIED RETIREMENT PLANS" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
            Your Retirement Plan Should Work
            <br className="max-md:hidden" /> as Hard as Your Business.
          </h1>
          <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
            For business owners in{' '}
            <Link href="/scottsdale" className="text-[#1d7682] hover:underline">
              Scottsdale
            </Link>{' '}
            and{' '}
            <Link href="/scottsdale" className="text-[#1d7682] hover:underline">
              Arizona
            </Link>
            , a well-designed 401(k) or qualified retirement plan is more than an
            employee benefit &mdash; it&apos;s a strategic tool for tax
            optimization, talent retention, and personal wealth accumulation.
          </p>
          <div className="mt-10">
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Discuss Your Retirement Plan Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================
          MAIN CONTENT
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
            {/* Left: Photo */}
            <AnimateOnScroll>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/IMG_0145.webp"
                  alt="Business owners discussing 401(k) plan design and fiduciary retirement plan management with Farther"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </AnimateOnScroll>

            {/* Right: Text */}
            <AnimateOnScroll delay={150}>
              <div>
                <SectionEyebrow text="FIDUCIARY PLAN MANAGEMENT" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  A Retirement Plan That Serves You &mdash; Not Just Your
                  Employees.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  As a business owner, sponsoring a 401(k) or qualified
                  retirement plan carries a fiduciary obligation that many
                  underestimate. You are personally responsible for selecting
                  appropriate investments, monitoring plan fees, and ensuring
                  ERISA compliance. The regulatory landscape is complex, the
                  liability is real, and the consequences of getting it wrong can
                  be significant.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  We help business owners design, implement, and oversee
                  retirement plans that accomplish three things simultaneously:
                  attract and retain key talent, maximize tax-advantaged savings
                  for the owner, and minimize fiduciary risk. Every plan we
                  manage is built around your specific business structure,
                  employee demographics, and personal financial goals.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  From plan design and compliance monitoring to participant
                  education and investment menu curation, we handle the full
                  lifecycle &mdash; so you can focus on running your business
                  while knowing your plan is being managed with institutional
                  rigor.
                </p>

                <p className="font-sans text-[15px] font-semibold text-[#333333] mt-8 mb-4">
                  What we manage for you:
                </p>
                <ul className="list-none space-y-3">
                  <GoldBullet>
                    Plan design optimization &mdash; 401(k), profit-sharing,
                    cash balance, and defined benefit structures tailored to your
                    goals
                  </GoldBullet>
                  <GoldBullet>
                    Fiduciary risk management &mdash; ongoing compliance
                    monitoring, documentation, and ERISA oversight
                  </GoldBullet>
                  <GoldBullet>
                    Investment menu selection &mdash; institutional-quality fund
                    lineup with regular benchmarking and review
                  </GoldBullet>
                  <GoldBullet>
                    Participant education &mdash; enrollment support,
                    contribution guidance, and financial wellness resources for
                    your team
                  </GoldBullet>
                  <GoldBullet>
                    Coordination between your business plan and personal wealth
                    strategy &mdash; ensuring both work together, not in silos
                  </GoldBullet>
                  <GoldBullet>
                    Transition planning for rollovers &mdash; IRA rollovers, Roth
                    conversions, and distribution sequencing at retirement or
                    business exit
                  </GoldBullet>
                </ul>
                <p className="font-sans text-caption text-[#5b6a71] italic mt-6">
                  All retirement plan services are subject to applicable
                  regulations. Past performance does not guarantee future
                  results.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY INTEGRATED PLAN MANAGEMENT
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll className="text-center mb-12">
              <SectionEyebrow text="THE BIGGER PICTURE" />
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
                Why Business Owners Need Integrated Plan Management.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
                Most business owners manage their company retirement plan and
                personal investments as two separate worlds. The 401(k) is
                handled by a plan provider. Personal wealth is managed by a
                financial advisor &mdash; or not managed at all. The result is a
                fragmented strategy where contribution levels, asset allocation,
                tax positioning, and retirement timing are never fully
                coordinated.
              </p>
              <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                We take a different approach. By linking your 401(k) or
                qualified plan directly to your personal wealth strategy, we can
                optimize how much you contribute, where those contributions are
                invested, and how they interact with your taxable portfolio,
                real estate holdings, and future liquidity events. For business
                owners approaching a sale or transition, this coordination
                becomes even more critical &mdash; the rollover decisions you
                make at exit can have six- or seven-figure tax consequences.
              </p>
              <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                Whether you are establishing a new plan for a growing company,
                restructuring an existing plan to maximize owner contributions,
                or preparing for a business exit that involves rolling over
                significant retirement assets, we provide the integrated
                oversight that ensures every piece works together. Business
                owners in{' '}
                <Link
                  href="/scottsdale"
                  className="text-[#1d7682] hover:underline"
                >
                  Scottsdale
                </Link>{' '}
                and{' '}
                <Link
                  href="/scottsdale"
                  className="text-[#1d7682] hover:underline"
                >
                  Arizona
                </Link>{' '}
                trust us to manage this complexity because we understand both
                sides of the equation &mdash; the business and the personal.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="COMMON QUESTIONS" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
              401(k) &amp; Retirement Plan FAQs.
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll>
              {/* FAQ 1 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What is the difference between a 401(k) and a qualified
                    retirement plan?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  A 401(k) is one type of qualified retirement plan. Qualified
                  plans also include profit-sharing plans, cash balance plans,
                  and defined benefit pensions. Each structure offers different
                  contribution limits, tax advantages, and design flexibility.
                  The right choice depends on your business size, cash flow, and
                  personal retirement goals.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What is fiduciary responsibility and why does it matter for
                    my 401(k)?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  As a plan sponsor, you have a legal obligation to act in the
                  best interest of plan participants. This includes selecting and
                  monitoring investments, managing plan fees, and ensuring
                  compliance with ERISA regulations. Failure to meet these duties
                  can result in personal liability. Working with a fiduciary
                  advisor helps you share and manage that responsibility.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    Can you help coordinate my company 401(k) with my personal
                    wealth strategy?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Yes &mdash; this is one of the most valuable things we do.
                  Most business owners manage their company retirement plan and
                  personal investments in separate silos. We integrate both into
                  a single, coordinated strategy that optimizes contributions,
                  tax positioning, asset allocation, and eventual rollover and
                  distribution planning.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What happens to my 401(k) when I sell my business or retire?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  When you exit your business, your 401(k) assets can be rolled
                  into an IRA, converted to a Roth IRA, or distributed &mdash;
                  each with different tax consequences. We help you plan the
                  transition well in advance, ensuring the rollover is timed and
                  structured to minimize taxes and align with your broader
                  retirement income strategy.
                </p>
              </details>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          RELATED SERVICES
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="RELATED SERVICES" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
              Services That Work Together.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
            <AnimateOnScroll>
              <Link
                href="/services/business-owners"
                className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-serif text-[20px] font-bold text-[#333333]">
                  Business Owner Services
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Exit planning, succession strategy, and entity optimization
                  for owners building toward a transition.
                </p>
                <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <Link
                href="/services/retirement-planning"
                className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-serif text-[20px] font-bold text-[#333333]">
                  Retirement Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Distribution sequencing, Social Security optimization, Roth
                  conversion laddering, and income planning.
                </p>
                <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <Link
                href="/services/investments"
                className="block bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-serif text-[20px] font-bold text-[#333333]">
                  Investment Management
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Institutional-grade portfolio construction, tax-loss
                  harvesting, and access to alternatives.
                </p>
                <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="NEXT STEP" light />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-semibold text-[#F7F4EE] mt-4">
              Let&rsquo;s Make Sure Your Plan Is Working for You.
            </h2>
            <p className="font-sans text-body text-[#F7F4EE]/80 leading-relaxed mt-6 max-w-[600px] mx-auto">
              Whether you need to establish a new retirement plan, restructure
              an existing one, or coordinate your 401(k) with your personal
              wealth strategy, we are here to help. Schedule a confidential
              conversation with our team in{' '}
              <Link
                href="/scottsdale"
                className="text-[#1d7682] hover:underline"
              >
                Scottsdale
              </Link>{' '}
              or{' '}
              <Link
                href="/scottsdale"
                className="text-[#1d7682] hover:underline"
              >
                Tempe
              </Link>
              .
            </p>
            <div className="mt-10">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule Your Consultation
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
