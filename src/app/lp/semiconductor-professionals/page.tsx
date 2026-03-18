import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Semiconductor Engineer Wealth Management | Arizona & California | Jay Chang, Farther',
  description:
    'RSU vesting, concentrated stock, and equity management for semiconductor engineers at Intel, NVIDIA, Apple, and Microchip across Arizona and California. Fiduciary wealth advisor Jay Chang.',
  robots: { index: false, follow: false },
}

export default function SemiconductorProfessionalsLP() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/Photos/Semiconductor.png"
          alt="Semiconductor industry"
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
                EQUITY & COMPENSATION PLANNING
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
                Your Equity Is Growing Faster Than Your Plan. Let's Fix That.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
                Semiconductor professionals across Arizona and California are driving America's tech renaissance. Whether you're at Intel (Chandler, Arizona or Santa Clara and Folsom, California), NVIDIA (Phoenix headquarters and Santa Clara campuses), Apple (Mesa, Arizona and Cupertino, California), or Microchip (Chandler, Arizona and Roseville, San Jose, Orange County, San Diego, and Irvine, California), your compensation likely includes substantial RSU grants, stock options, and performance-based equity that can create life-changing wealth — or significant tax exposure if mismanaged.
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
              Equity Planning for Semiconductor Professionals
            </h2>
            <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
              RSU vesting schedules, concentrated stock positions, and multi-state tax exposure demand expertise most advisors simply don't have.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  RSU & Equity Vesting Strategies
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Coordinate sell-to-cover decisions, manage supplemental tax withholding gaps, and optimize the timing of equity recognition to minimize tax drag on your wealth.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Concentrated Stock Risk Management
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Systematic diversification strategies for employees with 40%+ of net worth in a single stock. Avoid the catastrophic concentration risk.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Relocation Wealth Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Multi-state tax optimization for engineers relocating from California, Oregon, or Taiwan. Capture the tax savings your move creates.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Mega Backdoor Roth Conversions
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Maximize after-tax 401(k) contributions through Intel's and TSMC's plans. Build seven-figure tax-free retirement accounts.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  IPO & Liquidity Event Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  For pre-IPO equity holders at companies like NVIDIA and other high-growth firms. Plan the wealth event before it happens.
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
                &ldquo;I was vesting equity every quarter and had no idea what my actual tax liability would be. Jay mapped it all out—showed me exactly when I'd hit each tax bracket, coordinated the RSU sales, and set up a mega backdoor Roth strategy that saved me over $50K in taxes in the first year alone. Now I actually understand my compensation.&rdquo;
              </p>
              <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
                &mdash; Semiconductor engineer, client since 2023
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
              Jay specializes in working with high-earning professionals—engineers, executives, and equity holders—who need sophisticated planning around concentrated wealth, deferred compensation, and tax-efficient investment strategies. As a fiduciary, he is legally obligated to act in your best interest.
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
              Schedule a confidential conversation with Jay to discuss your equity strategy and tax exposure. No sales pitch, no obligation — just a focused discussion about maximizing your wealth.
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
