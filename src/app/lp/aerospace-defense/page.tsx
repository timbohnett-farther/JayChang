import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Aerospace & Defense Professional Wealth Planning | Arizona & California | Honeywell, Raytheon Advisors',
  description:
    'Deferred compensation, pension, and long-tenure wealth planning for aerospace and defense professionals at Honeywell, Raytheon (Tucson AZ & El Segundo CA). Fiduciary advisor for security clearance-sensitive planning.',
  robots: { index: false, follow: false },
}

export default function AerospaceDefenseLP() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/Photos/Defence-1.webp"
          alt="Aerospace and defense"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
        <div className="relative z-10 w-full px-[20px] md:px-[40px] lg:px-[80px] py-[120px]">
          <div className="max-w-[800px] mx-auto text-center">
            <AnimateOnScroll>
              <p className="font-sans text-[13px] font-semibold tracking-[0.15em] uppercase text-[#1d7682]">
                DEFERRED COMPENSATION & PENSION PLANNING
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
                You Engineer Precision for a Living. Your Financial Plan Should Reflect That.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
                Aerospace and defense professionals across Arizona and California—including those at Honeywell, Raytheon (with locations in Tucson, Arizona and El Segundo, California), and other major contractors—share a common trait: long tenures, disciplined careers, and compensation structures that reward loyalty. Deferred compensation plans, pension benefits, government security clearance considerations, and employer stock accumulation create a financial picture that demands precision planning — not generic advice.
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
        </div>
      </section>

      {/* ================================================================
          TRUST BAR
          ================================================================ */}
      <section className="bg-[#FAFAF8] py-[32px] px-[20px] border-y border-[#E8E6E1]">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="text-center">
            <p className="font-sans text-[14px] font-semibold text-[#333333]">
              SEC-Registered RIA
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
              Planning Built for Aerospace & Defense Careers
            </h2>
            <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
              Your compensation structure is fundamentally different. Your plan needs to be too.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Deferred Compensation Optimization
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Navigate deferral elections, distribution timing, and investment allocation within deferred comp plans to maximize retirement wealth while minimizing tax impact.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Pension & Retirement Integration
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Coordinate pension payouts, lump-sum election analysis, survivor benefits, and integration with Social Security and other retirement income sources.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Long-Tenure Wealth Accumulation
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Strategic planning for 15–30 year veterans. Consistent salary, employer stock plans, and compounded growth require a different investment and tax strategy.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Security Clearance-Sensitive Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Discreet, fiduciary guidance on financial matters that may intersect with your clearance. Your privacy and discretion are paramount.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Executive Compensation Review
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  For directors and VPs earning $300K+. Review total compensation, optimize benefit selections, and build a long-term wealth strategy aligned with tenure.
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
                &ldquo;After 20 years with Honeywell, I had a pension, deferred comp, employer stock, and no clear picture of what it all meant at retirement. Jay's analysis showed me exactly when to elect deferred comp distributions, how to sequence my pension, and how to integrate it all with my investment portfolio. The plan I have now gives me real confidence about retirement.&rdquo;
              </p>
              <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
                &mdash; Aerospace professional, client since 2023
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          ABOUT JAY
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
              Jay works with long-career professionals who need careful coordination of pensions, deferred compensation, and employer equity. He understands the unique financial architecture of aerospace and defense careers — and knows how to build a retirement plan that actually aligns with your reality.
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
              Schedule a confidential conversation with Jay to discuss your deferred compensation, pension, and retirement planning. No sales pitch, no obligation — just a focused discussion about your financial picture.
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
