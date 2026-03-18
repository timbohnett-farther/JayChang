import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Wealth Management for Dallas Families with $2M+ | Farther',
  description:
    'Fiduciary wealth management for Dallas families in Highland Park, University Park, Preston Hollow, Southlake, Westlake, and Frisco. Financial planning, tax optimization, estate planning, and investment management.',
  robots: { index: false, follow: false },
}

export default function DallasWealthManagementLP() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="bg-[#F7F4EE] pt-[80px] pb-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-[#1d7682]">
              FIDUCIARY WEALTH MANAGEMENT
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#333333] mt-6 leading-tight">
              Wealth Management for Dallas Families with $2M+
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-[17px] text-[#5b6a71] max-w-[620px] mx-auto mt-6 leading-relaxed">
              Comprehensive financial planning, tax optimization, estate
              planning, and investment management &mdash; built for families in
              Highland Park, University Park, Preston Hollow, Southlake,
              Westlake, and Frisco.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-8">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Confidential Consultation
              </Button>
            </div>
            <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
              or call{' '}
              <a
                href="tel:+14809440880"
                className="text-[#1d7682] hover:text-[#155f69] font-semibold transition-colors"
              >
                (480) 944-0880
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          TRUST BAR
          ================================================================ */}
      <section className="bg-[#FAFAF8] py-[32px] px-[20px] border-y border-[#E8E6E1]">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="text-center">
            <p className="font-sans text-[14px] font-semibold text-[#333333]">
              SEC-Registered
            </p>
            <p className="font-sans text-[13px] text-[#5b6a71]">
              Investment Adviser
            </p>
          </div>
          <span className="hidden sm:inline text-[#E8E6E1]">|</span>
          <div className="text-center">
            <p className="font-sans text-[14px] font-semibold text-[#333333]">
              Fiduciary
            </p>
            <p className="font-sans text-[13px] text-[#5b6a71]">
              Your interests come first
            </p>
          </div>
          <span className="hidden sm:inline text-[#E8E6E1]">|</span>
          <div className="text-center">
            <p className="font-sans text-[14px] font-semibold text-[#333333]">
              $15B+ AUM
            </p>
            <p className="font-sans text-[13px] text-[#5b6a71]">
              Assets under management
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SERVICES / BENEFITS
          ================================================================ */}
      <section className="bg-[#FAFAF8] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[900px] mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] text-center">
              What We Do for Dallas Families
            </h2>
            <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
              A single advisor who coordinates every dimension of your financial
              life &mdash; so nothing falls through the cracks.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Financial Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Scenario-based retirement projections, cash flow modeling,
                  education funding strategies, and insurance analysis &mdash;
                  built around your family&apos;s goals and timeline.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Tax Optimization
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Year-round tax-loss harvesting, Roth conversion laddering,
                  asset location strategy, and proactive CPA coordination to
                  minimize your lifetime tax burden.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Estate Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Trust structuring, beneficiary optimization, gifting programs,
                  and coordination with your estate attorney to protect and
                  transfer wealth across generations.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Investment Management
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Institutional-grade portfolio construction with direct
                  indexing, alternative investments, and risk management &mdash;
                  tailored to your family&apos;s risk tolerance and objectives.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIAL
          ================================================================ */}
      <section className="bg-[#F7F4EE] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[700px] mx-auto text-center">
          <AnimateOnScroll>
            <div className="border-l-4 border-[#1d7682] pl-6 text-left">
              <p className="font-serif text-[20px] md:text-[24px] text-[#333333] leading-relaxed italic">
                &ldquo;Jay brought clarity to our entire financial picture.
                Between the kids&apos; education planning, our investment
                portfolio, and coordinating with our CPA here in Dallas, he made
                it all feel manageable. For the first time, we have a real plan
                &mdash; not just a collection of accounts.&rdquo;
              </p>
              <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
                &mdash; Highland Park family, clients since 2023
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          ABOUT ROB
          ================================================================ */}
      <section className="bg-[#FAFAF8] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[700px] mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-[#1d7682]">
              YOUR ADVISOR
            </p>
            <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#333333] mt-4">
              Jay Chang
            </h2>
            <p className="font-sans text-[15px] text-[#5b6a71] mt-1">
              VP, Wealth Advisor
            </p>
            <p className="font-sans text-[16px] text-[#5b6a71] leading-relaxed mt-6">
              Jay works with a select group of families in Dallas and Fort Worth
              who want a single point of accountability for their entire
              financial life. As a fiduciary, he is legally obligated to act in
              your best interest, and that is exactly how he approaches
              every relationship.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          CTA
          ================================================================ */}
      <section className="bg-[#333333] py-[60px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[700px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[28px] md:text-[40px] font-semibold text-[#F7F4EE] leading-tight">
              Ready to Talk?
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[540px] mx-auto mt-5 leading-relaxed">
              Schedule a confidential conversation with Jay to discuss your
              goals. No sales pitch, no obligation &mdash; just a focused
              discussion about what matters most to your family.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="mt-8">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Confidential Consultation
              </Button>
            </div>
            <p className="font-sans text-[15px] text-[#F7F4EE]/70 mt-4">
              or call{' '}
              <a
                href="tel:+14809440880"
                className="text-[#F7F4EE]/70 hover:text-[#1d7682] font-semibold transition-colors"
              >
                (480) 944-0880
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          COMPLIANCE DISCLAIMER
          ================================================================ */}
      <section className="bg-[#333333] border-t border-[#444444] py-[24px] px-[20px]">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="font-sans text-[12px] text-[#F7F4EE]/40 leading-relaxed">
            Advisory services provided by Farther Finance Advisors LLC, an
            SEC-registered investment adviser. Registration does not imply a
            certain level of skill or training. Past performance is not
            indicative of future results. This page is for informational
            purposes only and does not constitute investment advice.
          </p>
        </div>
      </section>
    </>
  )
}
