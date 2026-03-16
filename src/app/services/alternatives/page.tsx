import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alternative Investments | Farther — Dallas & Las Vegas',
  description:
    'Access private equity, venture capital, private credit, and hedge fund strategies through institutional-quality vehicles. Personal Wealth Management at Farther.',
  alternates: { canonical: 'https://www.PWM-Farther.com/services/alternatives' },
  openGraph: {
    title: 'Alternative Investments | Personal Wealth Management at Farther',
    description:
      'Private equity, venture capital, private credit, and real asset access for families with $5M+ — without prohibitive minimums. Dallas & Las Vegas.',
    url: 'https://www.PWM-Farther.com/services/alternatives',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Alternative Investments — Personal Wealth Management at Farther',
  description:
    'Access to private equity, venture capital, private credit, and hedge fund strategies via institutional-quality vehicles for families with $5M+ in investable assets.',
  url: 'https://www.PWM-Farther.com/services/alternatives',
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
      name: 'What are alternative investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alternative investments are asset classes outside of traditional stocks and bonds. They include private equity, venture capital, private credit, hedge funds, real estate, and infrastructure. These strategies have historically been used by endowments, pension funds, and family offices to enhance portfolio diversification and risk-adjusted returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum investment to access alternative investments through Farther?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically recommend alternative investments for families with $5 million or more in investable assets, as these strategies work best when they complement a well-diversified traditional portfolio. Through Farther\'s platform, many institutional-quality vehicles are accessible at lower minimums than direct fund investments — often starting at $25,000 to $50,000 per position.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are alternative investments liquid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most alternative investments are illiquid by design, with lockup periods ranging from one to ten years depending on the strategy. Interval funds and certain private BDCs offer periodic liquidity windows, typically quarterly. We carefully size alternative allocations to ensure you maintain adequate liquidity for near-term needs and opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you select alternative investment vehicles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every alternative vehicle undergoes rigorous due diligence by Farther\'s investment committee, evaluating fund manager track record, fee structure, strategy consistency, operational infrastructure, and alignment of interests. We analyze net-of-fee performance relative to public-market equivalents to ensure clients receive genuine diversification benefit — not just complexity.',
      },
    },
  ],
}

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

export default function AlternativesPage() {
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
            <SectionEyebrow text="ALTERNATIVE INVESTMENTS" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#333333] max-w-[900px] mx-auto mt-6 leading-tight">
              Access Typically Reserved for Family Offices — Now Available to
              You.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6">
              For decades, the most sophisticated investors in the world have
              allocated meaningfully to private equity, venture capital, private
              credit, and real assets. Through Farther&apos;s institutional
              platform, these strategies are no longer gated behind $10 million
              minimums and exclusive networks.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: MAIN CONTENT — THE CASE FOR ALTERNATIVES
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="THE INSTITUTIONAL PLAYBOOK" />
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 border-l-4 border-[#1d7682] pl-7">
                  The Yale Model — and Why It Matters for Your Portfolio.
                </h2>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                  David Swensen, the legendary chief investment officer of the
                  Yale University endowment, fundamentally changed how
                  institutions invest. His approach &mdash; now widely known as
                  the Yale Model &mdash; demonstrated that a meaningful
                  allocation to alternative investments can significantly
                  enhance risk-adjusted returns over long time horizons. Under
                  his leadership, Yale&apos;s endowment grew from $1 billion to
                  over $31 billion, consistently outperforming peers who relied
                  on traditional stock-and-bond allocations.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  The lesson is clear: diversification beyond public markets
                  matters. Private equity captures value through operational
                  improvement and longer holding periods. Private credit
                  provides income uncorrelated to equity markets. Real assets
                  offer inflation protection. And venture capital provides
                  exposure to innovation before companies reach the public
                  markets. Together, these strategies complement traditional
                  holdings and can reduce overall portfolio volatility.
                </p>
                <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-4">
                  Through Farther&apos;s institutional platform, our clients can
                  access these strategies via interval funds, private business
                  development companies (BDCs), and select fund partnerships
                  &mdash; without the prohibitive minimums and lockup structures
                  that typically restrict access to ultra-high-net-worth
                  investors and endowments.
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
              </div>
            </AnimateOnScroll>

            {/* Right: Photo */}
            <AnimateOnScroll delay={150}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/IMG_0147.webp"
                  alt="Alternative investments including private equity and real assets"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: WHO SHOULD CONSIDER ALTERNATIVES
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll className="text-center mb-12">
              <SectionEyebrow text="IS THIS RIGHT FOR YOU?" />
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
                Who Should Consider Alternative Investments?
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
                Alternative investments are not for every portfolio. They involve
                longer time horizons, limited liquidity, and a higher degree of
                complexity than public market securities. We generally recommend
                alternatives for families and individuals who meet the following
                criteria:
              </p>
              <ul className="list-none space-y-3 mt-6">
                <GoldBullet>
                  <strong className="text-[#333333]">$5 million or more</strong>{' '}
                  in investable assets, providing sufficient scale to allocate
                  meaningfully without overconcentration
                </GoldBullet>
                <GoldBullet>
                  A well-diversified traditional portfolio already in place
                  &mdash; alternatives should complement, not replace, core
                  equity and fixed income holdings
                </GoldBullet>
                <GoldBullet>
                  A long-term investment horizon with liquidity needs already
                  addressed through cash reserves and traditional positions
                </GoldBullet>
                <GoldBullet>
                  An understanding that these strategies involve lockup periods,
                  capital calls, and limited daily pricing transparency
                </GoldBullet>
                <GoldBullet>
                  A desire to build a truly institutional-quality portfolio that
                  mirrors how the best endowments and family offices invest
                </GoldBullet>
              </ul>
              <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-6">
                If you are unsure whether alternatives belong in your portfolio,
                that is exactly the kind of question our discovery conversation
                is designed to answer. We will review your current allocation,
                liquidity profile, and long-term objectives before recommending
                any specific strategy.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: FAQ
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="COMMON QUESTIONS" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
              Questions About Alternative Investments.
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll>
              {/* FAQ 1 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What are alternative investments?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Alternative investments are asset classes outside of
                  traditional stocks and bonds. They include private equity,
                  venture capital, private credit, hedge funds, real estate, and
                  infrastructure. These strategies have historically been used by
                  endowments, pension funds, and family offices to enhance
                  portfolio diversification and risk-adjusted returns.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    What is the minimum investment to access alternatives
                    through Farther?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  We typically recommend alternative investments for families
                  with $5 million or more in investable assets, as these
                  strategies work best when they complement a well-diversified
                  traditional portfolio. Through Farther&apos;s platform, many
                  institutional-quality vehicles are accessible at lower minimums
                  than direct fund investments &mdash; often starting at $25,000
                  to $50,000 per position.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    Are alternative investments liquid?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Most alternative investments are illiquid by design, with
                  lockup periods ranging from one to ten years depending on the
                  strategy. Interval funds and certain private BDCs offer
                  periodic liquidity windows, typically quarterly. We carefully
                  size alternative allocations to ensure you maintain adequate
                  liquidity for near-term needs and opportunities.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group border-b border-[#E8E6E1]">
                <summary className="py-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-[17px] font-semibold text-[#333333] pr-4">
                    How do you select alternative investment vehicles?
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed pb-6">
                  Every alternative vehicle undergoes rigorous due diligence by
                  Farther&apos;s investment committee, evaluating fund manager
                  track record, fee structure, strategy consistency, operational
                  infrastructure, and alignment of interests. We analyze
                  net-of-fee performance relative to public-market equivalents to
                  ensure clients receive genuine diversification benefit &mdash;
                  not just complexity.
                </p>
              </details>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: RELATED SERVICES
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="RELATED SERVICES" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
              Alternatives Work Best as Part of a Complete Strategy.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
            <AnimateOnScroll>
              <Link
                href="/services/investments"
                className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
              >
                <h3 className="font-sans text-h4 font-semibold text-[#333333]">
                  Investment Management
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Customized portfolio strategy, tax-efficient positioning, and
                  consolidated reporting across all accounts.
                </p>
                <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <Link
                href="/services/institutional"
                className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
              >
                <h3 className="font-sans text-h4 font-semibold text-[#333333]">
                  Institutional Services
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  OCIO and fiduciary oversight for nonprofits, endowments, and
                  foundations with complex investment mandates.
                </p>
                <span className="inline-block font-sans text-[14px] font-semibold text-[#1d7682] mt-4">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <Link
                href="/services/financial-planning"
                className="block bg-white rounded-[16px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-200"
              >
                <h3 className="font-sans text-h4 font-semibold text-[#333333]">
                  Financial Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Comprehensive planning including retirement projections, cash
                  flow analysis, and insurance audits.
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
          SECTION 6: CTA
          ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] leading-tight">
              Ready to Invest Like the Institutions Do?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
              A 30-minute discovery call will help us understand your portfolio,
              your goals, and whether alternative investments belong in your
              allocation. No commitment, no sales pitch.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-10">
              <Button
                href="https://meetings.hubspot.com/robert-davenport"
                variant="primary"
              >
                Schedule a Discovery Call
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
            <div className="mt-8 flex items-center justify-center gap-6">
              <Link
                href="/dallas"
                className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors duration-200"
              >
                Dallas, TX
              </Link>
              <span className="text-[#F7F4EE]/30">|</span>
              <Link
                href="/las-vegas"
                className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors duration-200"
              >
                Las Vegas, NV
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          DISCLAIMER
          ================================================================ */}
      <section className="bg-[#F7F4EE] px-[20px] md:px-[40px] lg:px-[80px] py-8">
        <div className="max-w-container mx-auto">
          <p className="font-sans text-caption text-[#5b6a71] italic leading-relaxed">
            All investment strategies carry risk, including the potential loss of
            principal. Alternative investments are illiquid and may not be
            suitable for all investors. Past performance is not indicative of
            future results. The information on this page is for informational
            purposes only and does not constitute an offer to sell or a
            solicitation of an offer to buy any security.
          </p>
        </div>
      </section>
    </>
  )
}
