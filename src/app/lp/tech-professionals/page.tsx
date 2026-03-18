import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Tech Professional Wealth Planning - RSU & ESPP Strategy | Apple, NVIDIA Advisors',
  description:
    'ESPP optimization, RSU vesting, and equity management for tech professionals earning $200K–$500K+. Wealth advisor for tech engineers and executives.',
  robots: { index: false, follow: false },
}

export default function TechProfessionalsLP() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/Photos/Semiconductor-1.png"
          alt="Technology professionals"
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
                EQUITY COMPENSATION & WEALTH STRATEGY
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
                Your Total Comp Isn't Just a Number. It's a Wealth-Building Engine.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
                Apple's Mesa operations center and NVIDIA's Phoenix engineering presence bring Silicon Valley-level compensation to the Arizona desert — $200K–$500K+ packages heavy with RSUs, ESPPs, and performance bonuses. The challenge: that requires specialized expertise to optimize.
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
              Equity Optimization for Tech Professionals
            </h2>
            <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
              Turn your comp package into a clear wealth-building strategy with tax-efficient equity management and diversification.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  ESPP Optimization
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Understand qualified vs. disqualifying dispositions. Maximize the payoff from Apple's or NVIDIA's ESPP programs with tax-efficient sale strategies.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Multi-Year Equity Projection
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Map your 3–5 year vesting schedule alongside your life goals and major purchases. Build a plan that coordinates equity with your bigger financial picture.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  AMT & Tax Bracket Management
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Coordinate RSU vesting, stock option exercises, bonuses, and ESPP activity to manage AMT exposure and control your tax bracket.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Post-Vest Diversification
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Tax-efficient portfolio rebalancing after RSU vesting. Build a diversified investment strategy that aligns with your risk tolerance and goals.
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
                &ldquo;I had no idea what to do with my ESPP or my vesting RSUs. Every quarter I was just getting stock deposited into my account, and I had no plan. Jay showed me exactly when to sell my ESPP shares based on tax efficiency, mapped out my next three years of vesting, and helped me coordinate it all with my overall investment plan. Now I understand my comp and I'm actually using it to build wealth.&rdquo;
              </p>
              <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
                &mdash; Tech professional, NVIDIA, client since 2023
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
              Jay specializes in tech professionals who want to convert their equity compensation into deliberate wealth-building strategies. He understands RSU taxation, ESPP optimization, and how to build an investment plan that starts with your comp package and grows from there.
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
              Schedule a confidential conversation with Jay to discuss your equity package and build a tax-efficient strategy. No sales pitch, no obligation — just a focused discussion about maximizing your comp.
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
