import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Tech Executive Wealth Management | NVIDIA & Apple Equity Planning | Jay Chang, Farther',
  description: 'Wealth management for NVIDIA and Apple employees and executives. Seven-figure RSU concentration, ESPP optimization, quarterly vesting tax management, and Deferred Compensation Planning for tech professionals in Arizona and California.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tech-executive-wealth-management',
  },
};

export default function TechExecutivePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#F7F4EE] py-16 md:py-24">
        <Image
          src="/Photos/Semiconductor-1.png"
          alt="Technology executives"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="text-sm font-semibold text-[#1d7682] tracking-wide uppercase">
                Tech Executive Wealth Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
                Tech Executives: Your Equity Has Created Extraordinary Wealth. Protect It With the Same Sophistication.
              </h1>
              <p className="text-lg text-[#5b6a71] max-w-3xl">
                NVIDIA and Apple compensate their people extraordinarily well—and create extraordinarily complex financial situations. RSU concentration at seven-figure levels, quarterly and biannual vesting events, a 2-year ESPP lookback, and tax withholding gaps that show up as five-figure April surprises. Jay Chang builds the plan that matches the complexity.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 1: THE TECH COMPENSATION REALITY */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                  The Tech Compensation Reality
                </h2>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                  You know your compensation structure: $300,000 base, plus $200,000 to $500,000 (or more) in equity. But equity isn&apos;t a single number. It&apos;s a recurring stream of taxable events.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      Vesting Events
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed">
                      NVIDIA RSUs vest quarterly. Apple RSUs vest biannually. That&apos;s 4 to 8 or more taxable events every year—not one. Each creates a tax liability at vesting based on the FMV that day. You&apos;re responsible for managing the tax consequences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      ESPP Programs
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed">
                      15% discount, 2-year lookback pricing. That creates built-in gains the moment your shares settle. Decisions about when to sell, how much to hold, and how to tax-lot them require precision.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      Concentration Risk
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed">
                      Concentration in employer stock accumulates silently. After three years, you may have $1.2 million of NVIDIA or Apple stock in your net worth. You didn&apos;t decide to make a 40% bet on a single company. The vesting schedule did it for you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      Deferred Compensation (Apple)
                    </h3>
                    <p className="text-lg text-[#5b6a71] leading-relaxed">
                      Apple&apos;s DCP allows eligible executives to defer significant income. Brilliant for tax management. Requires advance planning and precise execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 2: COMBINING ACCOUNTS INTO ONE STRATEGY */}
      <section className="w-full bg-[#FAFAF8] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                  Combining Accounts Into One Strategy
                </h2>
                <p className="text-lg text-[#5b6a71] leading-relaxed mb-8">
                  Most financial planning software treats accounts as isolated silos: 401(k) over here, brokerage over there, ESPP somewhere else. That&apos;s how you end up with:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    A 401(k) that&apos;s 60% bonds and a brokerage that&apos;s 80% equities—no actual allocation.
                  </li>
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    High-fee funds in tax-advantaged accounts and growth stocks in taxable accounts—the tax location is backwards.
                  </li>
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    A total net worth that&apos;s 45% NVIDIA—and you didn&apos;t realize it.
                  </li>
                </ul>

                <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                  Jay builds an integrated plan. Every account serves the larger strategy. That enables:
                </p>

                <ul className="space-y-4">
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    <strong>True asset allocation</strong> across all accounts—you know your actual investment mix.
                  </li>
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    <strong>Tax location optimization</strong>—bonds in the 401(k), growth in taxable, tax-loss harvesting where it matters.
                  </li>
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    <strong>Concentration tracking</strong>—NVIDIA as a percentage of total net worth, with a rebalancing plan.
                  </li>
                  <li className="text-lg text-[#5b6a71] leading-relaxed">
                    <strong>Scenario planning</strong>—What happens if NVIDIA drops 30%? What if you change jobs? What if you sell $500,000 of ESPP shares this year?
                  </li>
                </ul>
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
                NVIDIA and Apple Built Your Wealth. Jay&apos;s Job Is to Make Sure You Keep It.
              </h2>
              <p className="text-lg text-[#5b6a71] max-w-2xl mx-auto">
                Jay Chang specializes in comprehensive wealth management for tech executives and high-earners in Arizona and California.
              </p>
              <div className="flex justify-center pt-4">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Schedule Your Tech Executive Strategy Call
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
