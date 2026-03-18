import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Financial Planning Services for High-Income Professionals | Jay Chang, Farther',
  description:
    'Comprehensive wealth management services for engineers, physicians, and executives in Arizona. Investment management, equity planning, tax strategy, retirement income, asset protection, and estate coordination through Farther&apos;s Intelligent Wealth Platform.',
  alternates: { canonical: 'https://www.PWM-Farther.com/services' },
  openGraph: {
    title: 'Financial Planning Services for High-Income Professionals | Jay Chang, Farther',
    description:
      'Comprehensive wealth management services for engineers, physicians, and executives in Arizona. Investment management, equity planning, tax strategy, retirement income, asset protection, and estate coordination through Farther&apos;s Intelligent Wealth Platform.',
    url: 'https://www.PWM-Farther.com/services',
  },
}

const services = [
  {
    title: 'Equity Compensation Planning',
    headline: 'RSU, ESPP, Stock Option, and Deferred Compensation Strategy',
    body: 'Full vesting schedule inventory, after-tax modeling at actual marginal rates, rules-based sell/hold/diversify frameworks, ESPP optimization, stock option exercise/AMT, SERPLUS/NQDC coordination, 10b5-1 plan coordination.',
  },
  {
    title: 'Investment Management',
    headline: 'Globally Diversified, Tax-Efficient Portfolios Built on Your Full Balance Sheet',
    body: 'Evidence-based allocation, automated daily tax-loss harvesting, asset location optimization, institutional strategies through Farther Asset Management, consolidation of old 401(k)s and IRAs.',
  },
  {
    title: 'Income Tax Planning',
    headline: 'Proactive Tax Strategy for Professionals Paying 35–50%+ Effective Rates',
    body: 'Multi-year tax projections, mega backdoor Roth maximization, backdoor Roth IRA, HSA maximization, charitable strategies (DAFs, QCDs, appreciated stock), capital gains management, CPA coordination.',
  },
  {
    title: 'Retirement Income Planning',
    headline: 'A Retirement Income Strategy That Doesn&apos;t Just Survive — It Optimizes Every Dollar',
    body: 'Pension vs lump sum analysis, account sequencing, Social Security optimization, healthcare gap planning, RMD planning, income flooring.',
  },
  {
    title: 'Asset Protection & Advanced Planning',
    headline: 'For Physicians and High-Liability Professionals: Protect What You&apos;ve Built',
    body: 'AZ retirement account exemptions, entity structures for practice income, umbrella insurance, coordination with estate planning, marital property strategies.',
  },
  {
    title: 'Estate & Legacy Planning',
    headline: 'Ensure Your Wealth Transfers to the People and Causes You Care About',
    body: 'Beneficiary designations, wills/trusts/POA, taxable estate management, charitable legacy goals, business interests and illiquid assets.',
  },
  {
    title: 'Financial Planning for Life Events',
    headline: 'Promotions, Relocations, Marriages, Divorces, Liquidity Events',
    body: 'Job change with unvested equity, CA-to-AZ relocation, liquidity event income spikes, divorce financial restructuring. Event-specific, time-sensitive, coordinated planning.',
  },
]

const testimonialsList = [
  {
    quote:
      'I didn&apos;t think I needed a financial advisor at 31, but Jay showed me how to maximize my mega backdoor Roth and coordinate my equity grants. I&apos;ll have $200K more by the time I&apos;m 45 just from these moves.',
    name: 'Intel Early Career Engineer',
    descriptor: 'Equity & tax optimization',
  },
  {
    quote:
      'When I was invited into Apple&apos;s Deferred Compensation Plan, I had no idea what to do. Jay modeled 3 completely different scenarios in 48 hours so I could make an informed decision.',
    name: 'Apple Senior Manager',
    descriptor: 'Executive compensation',
  },
  {
    quote:
      'The pension-vs.-lump-sum decision was keeping me up at night. Jay did a full break-even analysis and helped me understand the real implications of each choice.',
    name: 'RTX Senior Systems Engineer',
    descriptor: 'Pension strategy',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative bg-[#333333] pt-[100px] pb-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <Image
          src="/Photos/Farther-Advisor.avif"
          alt="Farther financial advisor"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
        <div className="relative z-10 max-w-container mx-auto">
          <AnimateOnScroll>
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#1d7682] mb-4">
                OUR SERVICES
              </p>
              <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#F7F4EE] mt-4 mb-6">
                Services
              </h1>
              <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[680px] leading-relaxed">
                One advisor. One platform. A complete financial strategy built around the complexity of your career.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SERVICES SECTIONS ─── */}
      {services.map((service, idx) => {
        const bgColor = idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'
        return (
          <section
            key={service.title}
            className={`${bgColor} py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]`}
          >
            <div className="max-w-container mx-auto">
              <AnimateOnScroll>
                <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mb-6 max-w-[680px]">
                  {service.headline}
                </h2>
                <p className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[680px]">
                  {service.body}
                </p>
              </AnimateOnScroll>
            </div>
          </section>
        )
      })}

      {/* ─── SECTION: TESTIMONIALS ─── */}
      <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333]">
              What Clients Say About Working With Jay
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px]">
            {testimonialsList.map((testimonial, idx) => (
              <AnimateOnScroll key={testimonial.name} delay={idx * 100}>
                <div className="flex flex-col">
                  <p className="font-sans text-[15px] text-[#333333] leading-[1.7] italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-6 border-t border-[#E8E6E1]">
                    <p className="font-sans text-[15px] font-semibold text-[#333333]">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-[13px] text-[#5b6a71]">
                      {testimonial.descriptor}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION: FINAL CTA ─── */}
      <section className="bg-[#333333] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] mb-8">
              Your Financial Life Deserves a Plan That Covers All of It.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mb-10 leading-relaxed">
              Learn exactly which services apply to your situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Services Review Call
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="tel:+14809440880"
                className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                (480) 944-0880
              </a>
              <span className="hidden sm:inline text-[#F7F4EE]/30">|</span>
              <a
                href="mailto:jay.chang@farther.com"
                className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                jay.chang@farther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
