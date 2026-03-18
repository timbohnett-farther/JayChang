import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Physician Wealth Planning & Tax Strategy | Arizona & Nevada | Banner Health Advisors',
  description:
    'Tax planning, asset protection, and retirement strategies for physicians and surgeons earning $400K–$800K+ across Arizona and Nevada. Wealth advisor for doctors at Banner Health and Mayo Clinic.',
  robots: { index: false, follow: false },
}

export default function HealthcarePhysiciansLP() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/Photos/Medical-2.webp"
          alt="Healthcare professionals"
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
                PHYSICIAN WEALTH & TAX PLANNING
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[48px] font-bold text-[#F7F4EE] mt-6 leading-tight">
                You Protect Lives. Who's Protecting Your Wealth?
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mt-6 leading-relaxed">
                Physicians and surgeons across Arizona and Nevada—including those at Banner Health hospitals, Mayo Clinic Scottsdale, and other major health systems—earning $400K–$800K+ face a paradox: high income, little time, and financial complexity that most advisors can't address. You need someone who understands the unique tax, liability, and wealth-building challenges of medical practice across state lines.
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
              Wealth Planning Built for Physicians
            </h2>
            <p className="font-sans text-[16px] text-[#5b6a71] text-center max-w-[600px] mx-auto mt-4 leading-relaxed">
              Tax optimization, asset protection, and retirement strategies designed for the unique financial realities of medical practice.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimateOnScroll>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Physician Income Tax Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  QBI deductions, charitable remainder trusts, donor-advised funds, estimated tax optimization, and multi-state tax strategy for physicians with high variable income.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Asset Protection Strategies
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Arizona homestead exemptions, retirement account protections, malpractice insurance coordination, and entity structuring to shield personal assets.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Retirement Catch-Up Planning
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Backdoor Roths, cash balance plans, defined-benefit designs, and catch-up contribution strategies to accelerate retirement savings for later-career physicians.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Student Loan Payoff vs. Invest
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Rigorous analysis of PSLF, REPAYE, refinancing, and accelerated payoff strategies. Build a plan that minimizes lifetime interest and tax impact.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="bg-white border border-[#E8E6E1] rounded-[12px] p-[32px]">
                <h3 className="font-serif text-[20px] font-semibold text-[#333333]">
                  Real Estate & Practice Equity
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  Optimize investment real estate tax treatment, coordinate practice equity sales, and plan succession strategies for practice owners.
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
                &ldquo;As a surgeon, the last thing I wanted to do was manage my own finances on top of everything else. Jay understood my situation immediately—showed me how to cut my tax bill by over $80K per year, set up a solid asset protection structure, and built a retirement plan that accounts for my student loans and real estate. Finally, I can actually focus on my practice.&rdquo;
              </p>
              <p className="font-sans text-[15px] text-[#5b6a71] mt-4">
                &mdash; Physician, Banner Health, client since 2023
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
              Jay works with physicians who earned their wealth through disciplined practice and now want sophisticated planning to protect it and pass it on. He understands the income volatility, asset protection requirements, and tax complexity that come with high-earning professional practices.
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
              Schedule a confidential conversation with Jay to discuss your tax exposure, asset protection, and retirement strategy. No sales pitch, no obligation — just a focused discussion about protecting and building your wealth.
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
