import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Jay Chang | Fiduciary Financial Advisor in Tempe, AZ | Farther',
  description:
    'Jay Chang is a fiduciary wealth advisor at Farther in Tempe, Arizona, specializing in equity compensation, tax planning, and wealth management for semiconductor engineers, physicians, and executives across the Phoenix metro.',
  alternates: { canonical: 'https://www.PWM-Farther.com/about' },
  openGraph: {
    title: 'About Jay Chang | Fiduciary Financial Advisor in Tempe, AZ | Farther',
    description:
      'Jay Chang is a fiduciary wealth advisor at Farther in Tempe, Arizona, specializing in equity compensation, tax planning, and wealth management for semiconductor engineers, physicians, and executives across the Phoenix metro.',
    type: 'profile',
    url: 'https://www.PWM-Farther.com/about',
  },
}

const clientProfiles = [
  {
    title: 'Semiconductor/Tech',
    description:
      'Engineers at TSMC, Intel, NVIDIA, Apple, Microchip, Amkor — RSUs, ESPPs, mega backdoor Roth, SERPLUS, relocation',
  },
  {
    title: 'Aerospace/Defense',
    description:
      'Honeywell and Raytheon — pensions, long-tenure equity, age-based 401(k), pension vs. lump sum',
  },
  {
    title: 'Physicians',
    description:
      'Banner Health and Mayo Clinic — high income, late savings start, malpractice liability, 401(k) ceiling',
  },
  {
    title: 'Corporate Executives',
    description:
      'Freeport-McMoRan — commodity-linked equity, 10b5-1 plans, executive benefits',
  },
]

const testimonials = [
  {
    quote:
      'When I moved from Oregon to Chandler, the tax implications were staggering. Jay coordinated a relocation strategy that saved over $30K in year one alone.',
    name: 'Intel Director',
    descriptor: 'Portland → Chandler',
  },
  {
    quote:
      'I had over $2 million in NVDA stock concentrated in my portfolio. Jay built a rules-based diversification plan that freed up $600K to invest strategically.',
    name: 'NVIDIA Principal Engineer',
    descriptor: 'Stock diversification',
  },
  {
    quote:
      'Jay helped me set up a cash balance plan that reduced my effective tax rate by 8 percentage points. Game-changing strategy.',
    name: 'Banner Health Cardiologist',
    descriptor: 'Tax optimization',
  },
  {
    quote:
      'We had five old 401(k)s scattered across our careers. Jay consolidated them, modeled a Roth conversion ladder, and gave us clarity on retirement.',
    name: 'Married Couple',
    descriptor: 'Gilbert, AZ',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── SECTION 1: HERO ─── */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#1d7682] mb-4">
                  ABOUT JAY CHANG
                </p>
                <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#333333] mt-4 mb-6">
                  About Jay Chang
                </h1>
                <p className="font-sans text-[17px] text-[#5b6a71] max-w-[680px] leading-relaxed">
                  Fiduciary advisor. Complex compensation specialist. Tempe-based, serving high-income professionals across Arizona, California, and Nevada — with the backing of Farther&apos;s $15B+ Intelligent Wealth Platform.
                </p>
              </div>
              <div className="relative rounded-[16px] overflow-hidden shadow-lg">
                <Image
                  src="/Photos/Color-Jay-Headshot.png"
                  alt="Jay Chang"
                  width={1024}
                  height={938}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 2: JAY&apos;S STORY ─── */}
      <section className="bg-white py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mb-8 max-w-[600px]">
              Built for Complexity. Committed to Clarity.
            </h2>
            <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[680px] space-y-5">
              <p>
                Jay brings clarity and thoughtful guidance to help individuals and families navigate their financial lives with confidence. He specializes in simplifying retirement income planning, investment strategy, tax planning, and wealth building &mdash; working with professionals, business owners, and families across all wealth stages.
              </p>
              <p>
                With deep experience in financial advisory, Jay spent formative years at Vanguard and Charles Schwab overseeing substantial client relationships, many spanning over a decade. This long-term approach allows Jay to deeply understand each family&apos;s evolving situation, values, and goals &mdash; and to help them prepare proactively rather than react to life&apos;s changes. He works with entire families, not just one decision-maker, coordinating comprehensive wealth strategies that include trust and estate planning. Often, Jay is brought in by one spouse to ensure the entire family is prepared, protected, and financially confident &mdash; eliminating surprises and fear when major life transitions occur.
              </p>
              <p>
                His entrepreneurial background in real estate, retail, and e-commerce rounds out his perspective on building and protecting wealth. Jay is also passionate about strategic philanthropy and community impact. As a member of the Association of Fundraising Professionals (AFP), Greater Arizona Chapter, he partners with local nonprofits and charitable organizations as both an advisor and fundraising strategist, helping mission-driven leaders maximize their impact while building sustainable financial foundations.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 3: WHO JAY WORKS WITH ─── */}
      <section className="bg-[#FAFAF8] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333]">
              The Clients Jay Serves Best
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px]">
            {clientProfiles.map((profile, idx) => (
              <AnimateOnScroll key={profile.title} delay={idx * 80}>
                <div className="bg-white rounded-[12px] p-[32px] border border-[#E8E6E1]">
                  <h3 className="font-serif text-[20px] font-semibold text-[#333333] mb-3">
                    {profile.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65]">
                    {profile.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: JAY&apos;S PHILOSOPHY ─── */}
      <section className="bg-white py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mb-8 max-w-[600px]">
                  Trust and Alignment Matter More Than Net Worth Alone.
                </h2>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[680px] space-y-5">
                  <p>
                    At the core of Jay&apos;s work is a belief that trust and alignment matter more than net worth alone. He is committed to transparent, fiduciary guidance that aligns money with values and long-term goals, whether clients are preparing for retirement, managing significant wealth, or leading mission-driven organizations. He listens carefully, asks thoughtful questions, and serves as a trusted strategic partner within his clients&apos; inner circle.
                  </p>
                  <p>
                    When he&apos;s not advising clients, Jay enjoys time with his family traveling, woodworking, and exploring the unpaved roads of Arizona in his 4Runner. He&apos;s passionate about food &mdash; he lives to eat, not eats to live &mdash; loves spending time with his two dogs, and constantly seeks out new experiences that enrich his life.
                  </p>
                </div>
              </div>
              <div className="relative rounded-[16px] overflow-hidden shadow-lg">
                <Image
                  src="/Photos/Jay-Office.png"
                  alt="Jay Chang office"
                  width={2166}
                  height={1784}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 5: WHY FARTHER ─── */}
      <section className="bg-[#FAFAF8] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-[16px] overflow-hidden shadow-lg">
                <Image
                  src="/Photos/Jay-B&W-Team.png"
                  alt="Jay Chang and team"
                  width={1044}
                  height={946}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mb-8 max-w-[600px]">
                  Why Jay Chose Farther Over Every Other Option
                </h2>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[680px] space-y-5">
                  <p>
                    At traditional firms, running tax projections, modeling SERPLUS, rebalancing around RSU vests took hours of manual work. Farther platform: automated tax-loss harvesting, unified aggregation, institutional asset location, digital onboarding. $15B+ AUM, Best RIA to Work For 2025.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 6: TESTIMONIALS ─── */}
      <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333]">
              What Clients Say About Working With Jay
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, idx) => (
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

      {/* ─── SECTION 7: CTA ─── */}
      <section className="bg-[#333333] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] mb-6">
              The First Step Is Simple. The Results Are Not.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/90 max-w-[620px] mx-auto mb-8 leading-relaxed">
              Free, confidential, focused on your situation. No product to sell, no obligation. Jay gives you 1-2 ideas you can act on immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Call
              </Button>
              <a
                href="/process"
                className="font-sans text-[15px] text-[#F7F4EE]/70 hover:text-[#F7F4EE] transition-colors underline underline-offset-2"
              >
                Learn About the Process
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
