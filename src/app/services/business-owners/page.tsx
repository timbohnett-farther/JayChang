import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Business Owner Services | PWM at Farther — Arizona, California & Nevada',
  description:
    'Exit planning, succession strategy, entity structuring, and post-sale wealth management for business owners with $2M–$20M in Scottsdale, AZ and across Arizona, California, and Nevada.',
  alternates: { canonical: 'https://www.PWM-Farther.com/services/business-owners' },
  openGraph: {
    title: 'Business Owner Services | Personal Wealth Management at Farther',
    description:
      'Comprehensive exit planning, succession strategy, and post-liquidity wealth management for business owners in Arizona, California, and Nevada.',
    url: 'https://www.PWM-Farther.com/services/business-owners',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Business Owner Services — Personal Wealth Management at Farther',
  description:
    'Exit planning, succession strategy, entity structuring, equity compensation planning, and post-exit wealth management for business owners with $2M–$20M in investable assets.',
  url: 'https://www.PWM-Farther.com/services/business-owners',
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
      name: 'When should I start planning for a business exit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideally, three to five years before you plan to sell or transition. Early planning gives you time to optimize the business valuation, structure the deal tax-efficiently, and ensure your personal finances are positioned to support the next chapter. That said, if a transaction is already in motion, there are still meaningful steps we can take to protect your outcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you help with equity compensation planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We analyze your stock options, RSUs, or carried interest in the context of your entire financial picture — tax brackets, AMT exposure, capital gains timing, and diversification needs. We build exercise and sale strategies that minimize taxes and concentration risk while aligning with your liquidity goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my wealth after I sell my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-exit is where many business owners feel most exposed. Suddenly you have a large, liquid sum that needs to replace the income, purpose, and structure your business provided. We build a comprehensive post-exit plan covering investment strategy, tax positioning, estate planning, and cash flow management — so the wealth you built continues to work for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you coordinate with my CPA and attorney during a transaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Business exits involve legal, tax, and financial decisions that must be coordinated in lockstep. We work directly with your CPA, M&A attorney, and any other advisors to ensure every aspect of the transaction — from deal structure to post-closing wealth transfer — is aligned and optimized.',
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

export default function BusinessOwnerServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Services', href: '/services' }, { name: 'Business Owner Services', href: '/services/business-owners' }]} />
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
          HERO
      ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="BUSINESS OWNER SERVICES" />
            <h1 className="font-serif text-display text-[#333333] mt-4 max-w-3xl mx-auto">
              Your Business Built Your Wealth.{' '}
              <span className="text-[#1d7682]">Now Protect It.</span>
            </h1>
            <p className="font-sans text-body-lg text-[#5b6a71] mt-6 max-w-2xl mx-auto leading-relaxed">
              Exit planning, succession strategy, and post-liquidity wealth management
              for business owners who have spent years building something valuable — and
              want to make sure the next chapter is just as intentional.
            </p>
            <div className="mt-10">
              <Button variant="primary" href="/schedule-consultation">
                Schedule a Consultation
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          MAIN CONTENT — TWO-COLUMN GRID
      ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/IMG_0111.webp"
                  alt="Farther wealth advisor meeting with an Arizona business owner to discuss exit planning and succession strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            {/* Content Column */}
            <AnimateOnScroll>
              <h2 className="font-serif text-headline text-[#333333]">
                Comprehensive Planning for Every Stage of Ownership
              </h2>
              <p className="font-sans text-body text-[#5b6a71] mt-4 leading-relaxed">
                Whether you are five years from a sale, navigating a transition today, or
                managing newly liquid wealth after an exit, we bring structure, strategy,
                and clarity to the decisions that matter most.
              </p>
              <ul className="mt-8 space-y-4">
                <GoldBullet>
                  <strong className="text-[#333333]">Exit Planning</strong> — Valuation
                  analysis, deal structure review, and pre-sale positioning to maximize
                  your after-tax proceeds.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Succession Planning</strong> — Family
                  transitions, management buyouts, and partnership restructuring designed
                  to preserve the business and your legacy.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Entity Structuring</strong> — S-corp,
                  C-corp, LLC, and holding company optimization for tax efficiency and
                  liability protection.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Equity Compensation</strong> — ISO
                  and NSO exercise strategies, RSU planning, and concentration risk
                  management for founders and key executives.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Key-Person Risk</strong> — Insurance
                  and contingency planning to protect the business, your family, and your
                  partners if the unexpected happens.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Pre-Liquidity Planning</strong> — Tax
                  positioning, trust funding, and charitable strategies that must be
                  executed before a transaction closes.
                </GoldBullet>
                <GoldBullet>
                  <strong className="text-[#333333]">Post-Exit Wealth Management</strong>{' '}
                  — Investment strategy, cash flow planning, and estate coordination for
                  the concentrated wealth that follows a successful sale.
                </GoldBullet>
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          INTERACTIVE TOOLS
      ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="INTERACTIVE TOOLS" />
            <h2 className="font-serif text-headline text-[#333333] mt-4">
              See Where You Stand Before We Talk
            </h2>
            <p className="font-sans text-body text-[#5b6a71] mt-4 max-w-2xl mx-auto leading-relaxed">
              These complimentary tools give you a head start on the planning process.
              Answer a few questions and get an instant, personalized assessment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/business-exit-scorecard"
                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans text-[14px] font-semibold px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
              >
                Business Exit Scorecard
              </Link>
              <Link
                href="/tools/equity-compensation"
                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans text-[14px] font-semibold px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200"
              >
                Equity Compensation Planner
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          WHY BUSINESS OWNERS CHOOSE US
      ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="text-center">
              <SectionEyebrow text="WHY BUSINESS OWNERS CHOOSE US" />
              <h2 className="font-serif text-headline text-[#333333] mt-4 max-w-3xl mx-auto">
                Built for Owners Who Think in Decades, Not Quarters
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <AnimateOnScroll delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc]">
                <h3 className="font-serif text-subheadline text-[#333333]">
                  We Speak Your Language
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  EBITDA multiples, working capital adjustments, earnout structures — we
                  understand the mechanics of business transactions because we work with
                  owners and founders every day. You will not need to translate.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc]">
                <h3 className="font-serif text-subheadline text-[#333333]">
                  Coordinated, Not Siloed
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  Your CPA sees the tax picture. Your attorney sees the legal picture. We
                  see the entire picture — and we make sure every advisor on your team is
                  working from the same strategy, not in isolation.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc]">
                <h3 className="font-serif text-subheadline text-[#333333]">
                  Technology That Scales With You
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  Farther&apos;s institutional-grade platform gives you real-time
                  visibility across every account, entity, and trust — consolidated
                  reporting, scenario modeling, and tax-lot analysis in one place.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center">
              <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" />
              <h2 className="font-serif text-headline text-[#333333] mt-4">
                Common Questions From Business Owners
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 space-y-4">
            {faqJsonLd.mainEntity.map((faq, index) => (
              <AnimateOnScroll key={index} delay={index * 80}>
                <details className="group bg-white rounded-xl border border-[#e8e4dc] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-serif text-[18px] text-[#333333] pr-4">
                      {faq.name}
                    </span>
                    <ChevronDown className="h-5 w-5 text-[#1d7682] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RELATED SERVICES
      ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="text-center">
              <SectionEyebrow text="RELATED SERVICES" />
              <h2 className="font-serif text-headline text-[#333333] mt-4">
                Services That Work Alongside Your Exit Plan
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimateOnScroll delay={0}>
              <Link
                href="/services/tax-optimization"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc] hover:shadow-md hover:border-[#1d7682]/30 transition-all duration-200 group"
              >
                <h3 className="font-serif text-subheadline text-[#333333] group-hover:text-[#1d7682] transition-colors">
                  Tax Optimization
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  Proactive tax strategy including Roth conversions, capital gains
                  harvesting, and charitable giving — critical before and after a
                  business sale.
                </p>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <Link
                href="/services/investments"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc] hover:shadow-md hover:border-[#1d7682]/30 transition-all duration-200 group"
              >
                <h3 className="font-serif text-subheadline text-[#333333] group-hover:text-[#1d7682] transition-colors">
                  Investment Management
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  Diversified, tax-efficient portfolios built to manage concentrated
                  wealth and generate sustainable income after a liquidity event.
                </p>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <Link
                href="/services/trust-estate"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4dc] hover:shadow-md hover:border-[#1d7682]/30 transition-all duration-200 group"
              >
                <h3 className="font-serif text-subheadline text-[#333333] group-hover:text-[#1d7682] transition-colors">
                  Trust & Estate Planning
                </h3>
                <p className="font-sans text-body text-[#5b6a71] mt-3 leading-relaxed">
                  Revocable and irrevocable trust design, dynasty trust strategy, and
                  generational wealth transfer — essential for preserving exit proceeds.
                </p>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================ */}
      <section className="bg-[#333333] section-padding">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-headline text-white max-w-2xl mx-auto">
              Ready to Plan Your Next Chapter?
            </h2>
            <p className="font-sans text-body-lg text-[#a3b0b6] mt-4 max-w-xl mx-auto leading-relaxed">
              Whether you are five years out or five months out, the right time to start
              planning is now. Let&apos;s talk about what your exit — and everything after
              it — could look like.
            </p>
            <div className="mt-10">
              <Button variant="primary" href="/schedule-consultation">
                Schedule a Consultation
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          INTERNAL LINKS
      ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-sans text-body text-[#5b6a71] leading-relaxed">
              We serve business owners and their families across{' '}
              <Link
                href="/scottsdale"
                className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
              >
                Arizona, California, and Nevada
              </Link>
              . If you are a business owner considering a sale, succession, or simply want
              a second opinion on your current plan, we would welcome the conversation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
