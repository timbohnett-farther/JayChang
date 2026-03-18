import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Aerospace & Defense Financial Advisor in Arizona | Pension, 401(k) & Deferred Comp Planning | Jay Chang',
  description: 'Wealth management for Honeywell and Raytheon professionals in Phoenix and Tucson. Pension analysis, age-based 401(k) strategy, deferred compensation, and long-tenure retirement planning from a fiduciary advisor.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/aerospace-defense-wealth-management',
  },
};

export default function AerospacDefensePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#F7F4EE] py-16 md:py-24">
        <Image
          src="/Photos/Aerospace.png"
          alt="Aerospace and defense industry"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="text-sm font-semibold text-[#1d7682] tracking-wide uppercase">
                Aerospace & Defense Wealth Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
                Aerospace & Defense Professionals: Your Retirement Benefits Are Among the Best in America. Are You Maximizing All of Them?
              </h1>
              <p className="text-lg text-[#5b6a71] max-w-3xl">
                Between pensions, age-based 401(k) contributions, deferred compensation, and employer-stock match concentration, Honeywell and Raytheon professionals have retirement tools that most Americans will never access—and complexity that most advisors never see. Jay Chang specializes in turning that complexity into a clear retirement strategy.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 1: WHAT MAKES A&D COMPENSATION UNIQUE */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                  What Makes A&D Compensation Unique
                </h2>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-8">
                  Longevity is the defining feature of aerospace and defense compensation. These companies reward tenure because it builds expertise, institutional knowledge, and security clearance value. That translates to an extraordinarily rich benefits package that compounds over decades.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      Honeywell
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed">
                      87.5% match on the first 8% of salary, with the match delivered as HON stock. Three-year vesting schedule. RSU grants at manager levels. The concentration in employer stock is substantial and intentional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      Raytheon/RTX
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed mb-4">
                      4% match plus age-based contributions up to 7% for those 55 and older. A legacy pension for eligible employees. 15% ESPP discount with a two-year lookback. Mega backdoor Roth opportunity. Lifetime Income Strategy (deferred annuity option). Executive Deferred Compensation Plan for M7 and above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 2: LONG-TENURE RETIREMENT ORCHESTRATION */}
      <section className="w-full bg-[#FAFAF8] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                  Long-Tenure Retirement Orchestration
                </h2>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                  After 20+ years at Honeywell or Raytheon, you don&apos;t have one retirement account. You have many: a 401(k) with $800,000 to $1.5 million or more, possibly a legacy pension, deferred compensation, ESPP shares, a taxable brokerage account, and future Social Security income. All of these must work together.
                </p>
                <p className="text-lg text-[#5b6a71] leading-relaxed">
                  Sequencing determines lifetime wealth by hundreds of thousands of dollars. Which account do you spend from first? When do you claim Social Security? How do you manage the tax consequences of massive deferred compensation payouts? How much do you leave in equities vs. bonds? Jay builds a comprehensive sequencing strategy that integrates every piece.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 3: THE PENSION DECISION */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                  The Pension Decision
                </h2>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                  If you have a Raytheon pension or another legacy pension, you face the biggest decision in your retirement: take the monthly check or take the lump sum. It&apos;s irreversible, and it determines your financial security for the next 30+ years.
                </p>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                  The right choice depends on your health, your spouse&apos;s health, how much other income you&apos;ll have, your comfort with investment management, the interest rate environment, and your estate goals. It&apos;s not a formula. It&apos;s a comprehensive scenario analysis.
                </p>
                <p className="text-lg text-[#5b6a71] leading-relaxed">
                  Jay builds detailed projections: monthly income scenarios, lump-sum investment scenarios, breakeven analysis, tax implications, and survivor benefit comparisons. You see the long-term consequences of each choice before you make it.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-[#F7F4EE] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimateOnScroll>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
                Your Career in Aerospace Earned You Exceptional Benefits. Make Sure Your Plan Captures All of Them.
              </h2>
              <p className="text-lg text-[#5b6a71] max-w-2xl mx-auto">
                Jay Chang specializes in comprehensive wealth planning for Honeywell, Raytheon, and other aerospace and defense professionals in Arizona.
              </p>
              <div className="flex justify-center pt-4">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Schedule an Aerospace & Defense Planning Call
                </Button>
              </div>
              <p className="text-sm text-[#5b6a71] pt-4">
                Phone: (480) 944-0880
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
