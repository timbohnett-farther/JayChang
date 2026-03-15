import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  TrendingUp,
  Building2,
  ScrollText,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Landmark,
  Scale,
  FileText,
  Users,
  BadgeCheck,
} from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Financial Planning Las Vegas NV | Wealth Management Advisor',
  description:
    'Personalized wealth management for families and business owners in Las Vegas, NV. California to Nevada relocation planning, Nevada tax advantages, dynasty trusts. $2M\u2013$20M. Schedule a consultation.',
  alternates: {
    canonical: 'https://www.privatewealthatfarther.com/locations/las-vegas-nv',
  },
  openGraph: {
    title: 'Financial Planning Las Vegas NV | Private Wealth Management at Farther',
    description:
      'Wealth management for Las Vegas families \u2014 tax-advantaged planning, relocation strategy, and business owner services.',
    url: 'https://www.privatewealthatfarther.com/locations/las-vegas-nv',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Private Wealth Management at Farther \u2013 Las Vegas',
  description:
    'Personalized wealth management for families and business owners in Las Vegas, NV. Focused on California-to-Nevada relocation planning, Nevada tax advantages, and dynasty trusts.',
  url: 'https://www.privatewealthatfarther.com/locations/las-vegas-nv',
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'City', name: 'Summerlin' },
    { '@type': 'City', name: 'North Las Vegas' },
    { '@type': 'City', name: 'Boulder City' },
    { '@type': 'City', name: 'Paradise' },
  ],
  serviceType: 'Wealth Management',
  provider: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.privatewealthatfarther.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do Nevada\u2019s tax advantages benefit my financial plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nevada has no state income tax, no estate tax, no corporate income tax, and no franchise tax. For high-net-worth families, this means significantly more of your investment returns, business income, and estate transfers stay in your family. We build plans that fully capture these advantages across your entire financial picture.',
      },
    },
    {
      '@type': 'Question',
      name: 'I\u2019m moving from California to Nevada. How should I plan the transition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start planning at least twelve months before your move. Key steps include understanding California\u2019s safe harbor rules for establishing non-residency, restructuring trusts and entities for Nevada domicile, coordinating the sale or rental of California property, and aligning your investment strategy with your new tax environment. Our team manages the full transition alongside your CPA and attorney.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Nevada dynasty trust and should I consider one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Nevada dynasty trust allows you to transfer wealth across multiple generations without incurring estate or gift taxes at each transfer. Nevada has no rule against perpetuities, meaning the trust can last indefinitely. Combined with Nevada\u2019s strong asset protection laws, dynasty trusts are one of the most powerful estate planning tools available for families with significant wealth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a fiduciary financial advisor in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for an advisor who is legally required to act in your best interest, holds recognized credentials, and has experience with Nevada-specific tax and estate planning. At Farther, every advisor operates under a fiduciary standard, and our technology platform provides full transparency into fees, performance, and portfolio decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Farther help with both my Las Vegas and out-of-state accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many of our Las Vegas clients maintain investments, business interests, or property in other states. We provide unified planning across all accounts and jurisdictions, ensuring your overall strategy is coordinated and tax-efficient regardless of where your assets are held.',
      },
    },
  ],
}

const communities = [
  'Summerlin',
  'Henderson',
  'MacDonald Highlands',
  'The Ridges',
  'Southern Highlands',
  'Lake Las Vegas',
  'Anthem',
  'Green Valley',
  'North Las Vegas',
  'Boulder City',
]

const taxAdvantages = [
  {
    icon: DollarSign,
    title: 'No State Income Tax',
    description:
      'Keep more of every dollar you earn. While California\u2019s top marginal rate reaches 13.3%, Nevada imposes zero state income tax on individuals.',
  },
  {
    icon: Landmark,
    title: 'No State Estate Tax',
    description:
      'Transfer wealth to the next generation without a state-level estate tax, preserving more of your legacy for your family.',
  },
  {
    icon: Building2,
    title: 'No Corporate Income Tax',
    description:
      'Nevada does not levy a corporate income tax, making it an attractive domicile for business owners and holding companies.',
  },
  {
    icon: FileText,
    title: 'No Franchise Tax',
    description:
      'Unlike many states, Nevada does not impose a franchise tax on businesses, reducing the ongoing cost of maintaining Nevada entities.',
  },
  {
    icon: Shield,
    title: 'Asset Protection Trusts',
    description:
      'Nevada\u2019s Domestic Asset Protection Trust laws are among the strongest in the nation, offering a two-year statute of limitations for creditor claims.',
  },
  {
    icon: ScrollText,
    title: 'Dynasty Trust Provisions',
    description:
      'With no rule against perpetuities, Nevada allows trusts to last indefinitely\u2014enabling multi-generational wealth transfer with lasting tax efficiency.',
  },
]

const services = [
  {
    icon: TrendingUp,
    title: 'Investment Management',
    description:
      'Institutional-quality portfolios designed for tax-free growth in Nevada. We build diversified, risk-managed strategies that take full advantage of your new tax environment\u2014maximizing after-tax returns across equities, fixed income, and alternatives.',
  },
  {
    icon: Scale,
    title: 'Financial Planning',
    description:
      'Comprehensive planning for retirement in Nevada, interstate relocation, and life transitions. From cash flow modeling to Social Security optimization, every recommendation reflects the unique advantages of living and investing in a no-income-tax state.',
  },
  {
    icon: Building2,
    title: 'Business Owner Services',
    description:
      'Nevada entity formation, succession planning, and business growth strategies for Las Vegas entrepreneurs. We coordinate with your legal team to structure holdings, optimize owner compensation, and plan for eventual exits or transitions.',
  },
  {
    icon: ScrollText,
    title: 'Estate Planning',
    description:
      'Nevada dynasty trusts, asset protection trusts, and estate strategies that leverage the state\u2019s favorable legal framework. We work alongside your estate attorney to ensure your plan minimizes taxes and protects assets for generations.',
  },
]

const clientTypes = [
  'California transplants optimizing their new tax situation',
  'Business owners establishing Nevada entities',
  'Retirees drawn to Nevada\u2019s tax advantages from across the country',
  'Entertainment and hospitality executives',
  'Real estate investors and developers',
  'Families seeking coordinated planning after a major interstate move',
  'Pre-retirees with concentrated stock portfolios',
]

export default function LasVegasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ─── SECTION 1: HERO ─── */}
      <section className="bg-[#333333] bg-texture-dark py-[96px] px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="LAS VEGAS, NEVADA" light />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-serif text-h1-mobile md:text-h1 font-normal text-[#F7F4EE] mt-[16px] mb-[24px] max-w-[800px]">
              Financial Planning for Las Vegas&rsquo;s Growing Community of Successful Families
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-[640px] mb-[40px]">
              Every year, thousands of families relocate to the Las Vegas valley in search of
              a better quality of life, meaningful tax savings, and new professional opportunities.
              Whether you&rsquo;ve recently settled in Summerlin, Henderson, or one of the valley&rsquo;s
              other thriving communities, the financial decisions you make during and after this
              transition will shape your family&rsquo;s future for decades. We help you get them right.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-[16px] mb-[48px]">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Consultation
              </Button>
              <Button href="/wealth-management" variant="ghost">
                Explore Our Approach <ArrowRight className="inline ml-[8px] w-[16px] h-[16px]" />
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[48px]">
              <div className="flex items-center gap-[8px]">
                <CheckCircle2 className="w-[16px] h-[16px] text-[#1d7682]" />
                <span className="font-sans text-body-sm text-[#b6d0ed]">Fiduciary Standard</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <CheckCircle2 className="w-[16px] h-[16px] text-[#1d7682]" />
                <span className="font-sans text-body-sm text-[#b6d0ed]">$2M\u2013$20M Clients</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <CheckCircle2 className="w-[16px] h-[16px] text-[#1d7682]" />
                <span className="font-sans text-body-sm text-[#b6d0ed]">Nevada Tax Focus</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 2: WHY LAS VEGAS ─── */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="WHY LAS VEGAS" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-[16px] mb-[24px] heading-accent max-w-[680px]">
              Why Successful Families Are Choosing Las Vegas
            </h2>
          </AnimateOnScroll>

          <div className="max-w-content">
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71] mb-[24px]">
                The story of Las Vegas has changed dramatically. What was once known primarily as an
                entertainment destination has become one of the fastest-growing wealth centers in the
                American West. A powerful California-to-Nevada migration wave is driving billions of
                dollars in personal and business wealth into the valley, drawn by Nevada&rsquo;s
                position as one of the most tax-advantaged states in the country.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71] mb-[24px]">
                Beyond tax savings, families are discovering a quality of life that rivals anywhere
                in the West: world-class dining, championship golf, proximity to Los Angeles and the
                mountains, top-tier private schools, and a growing business ecosystem that extends
                well beyond gaming and hospitality. Technology firms, financial services companies,
                and professional sports franchises have all planted roots in the valley.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71]">
                But relocating your life is one thing. Relocating your financial plan is another.
                The families who capture the full benefit of Nevada&rsquo;s advantages are those who
                pair the move with a comprehensive wealth strategy\u2014one that addresses interstate
                tax obligations, trust restructuring, entity planning, and investment optimization
                from day one. That&rsquo;s where we come in.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: NEVADA TAX ADVANTAGES ─── */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="TAX ADVANTAGES" light />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#F7F4EE] mt-[16px] mb-[16px] max-w-[680px]">
              Nevada&rsquo;s Tax Advantages for Wealth Planning
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-content mb-[48px]">
              Nevada offers one of the most favorable tax environments in the United States for
              high-net-worth individuals and families. Understanding each advantage\u2014and how it
              interacts with your broader financial plan\u2014is the key to unlocking their full value.
              Here is what makes Nevada stand apart for wealth planning.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {taxAdvantages.map((advantage, index) => (
              <AnimateOnScroll key={advantage.title} delay={200 + index * 100}>
                <div className="bg-[#333333] rounded-card p-[32px] h-full">
                  <advantage.icon className="w-[32px] h-[32px] text-[#1d7682] mb-[16px]" />
                  <h3 className="font-serif text-h4 font-normal text-[#F7F4EE] mb-[12px]">
                    {advantage.title}
                  </h3>
                  <p className="font-sans text-body font-light text-[#b6d0ed]">
                    {advantage.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CALIFORNIA TO NEVADA RELOCATION ─── */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="RELOCATION PLANNING" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-[16px] mb-[24px] heading-accent max-w-[720px]">
              California to Nevada: A Wealth Planning Transition Guide
            </h2>
          </AnimateOnScroll>

          <div className="max-w-content">
            <AnimateOnScroll delay={200}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71] mb-[24px]">
                Moving from California to Nevada is one of the most impactful financial decisions a
                high-net-worth family can make\u2014but only if the transition is handled correctly.
                California&rsquo;s Franchise Tax Board is known for aggressively auditing departing
                residents, and the difference between a clean break and years of disputed tax
                obligations often comes down to planning.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71] mb-[32px]">
                We work with relocating families to address every dimension of the move: understanding
                California&rsquo;s &ldquo;safe harbor&rdquo; rules for establishing non-residency,
                reinvesting California home equity into Nevada real estate, restructuring trusts and
                business entities for Nevada domicile, and establishing residency in a way that
                withstands scrutiny. Coordination with your CPA and attorney is essential, and we
                serve as the quarterback for the entire process.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <h3 className="font-serif text-h3-mobile md:text-h3 font-normal text-[#333333] mb-[24px]">
                Your Relocation Timeline
              </h3>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[32px]">
              {[
                {
                  timeframe: '12 Months Before',
                  items: 'Begin residency documentation. Review all California-source income. Evaluate trust and entity restructuring. Engage Nevada-based legal counsel.',
                },
                {
                  timeframe: '6 Months Before',
                  items: 'File change-of-address notifications. Transfer banking and brokerage accounts. Update estate documents. Begin Nevada voter registration.',
                },
                {
                  timeframe: 'At the Move',
                  items: 'Obtain Nevada driver\u2019s license. Register vehicles in Nevada. Update insurance policies. Establish local professional relationships.',
                },
                {
                  timeframe: '12 Months After',
                  items: 'File final California return as non-resident. Confirm all entities reflect Nevada domicile. Review investment strategy for tax-free growth. Audit trail documentation.',
                },
              ].map((phase, index) => (
                <AnimateOnScroll key={phase.timeframe} delay={400 + index * 100}>
                  <div className="bg-[#FAFAF8] rounded-card p-[24px] border border-[rgba(10,22,40,0.06)]">
                    <span className="font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#1d7682] block mb-[8px]">
                      {phase.timeframe}
                    </span>
                    <p className="font-sans text-body font-light text-[#5b6a71]">{phase.items}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={500}>
              <p className="font-sans text-body-lg font-light text-[#5b6a71]">
                Every relocation is different. Whether you&rsquo;re moving from San Francisco,
                Los Angeles, or San Diego, we tailor the plan to your specific situation\u2014your
                income sources, your business structures, your family&rsquo;s needs, and your
                long-term goals. Explore how our{' '}
                <Link href="/wealth-management" className="text-[#1d7682] hover:text-[#155f69] transition-colors">
                  wealth management approach
                </Link>{' '}
                supports families through major transitions.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SERVICES ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR SERVICES" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-[16px] mb-[16px] heading-accent max-w-[680px]">
              Wealth Management Services for Las Vegas Clients
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="font-sans text-body-lg font-light text-[#5b6a71] max-w-content mb-[48px]">
              Our Las Vegas clients benefit from the same institutional-quality planning and
              investment management we deliver nationwide\u2014enhanced by deep expertise in
              Nevada&rsquo;s unique tax and legal landscape. Every strategy is personalized,
              every recommendation is fiduciary, and every decision is powered by our{' '}
              <Link href="/technology" className="text-[#1d7682] hover:text-[#155f69] transition-colors">
                technology platform
              </Link>{' '}
              for full transparency.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={200 + index * 100}>
                <div className="bg-[#F7F4EE] rounded-card p-[32px] h-full border border-[rgba(10,22,40,0.06)] hover:shadow-card-hover transition-shadow duration-200">
                  <service.icon className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                  <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                    {service.title}
                  </h3>
                  <p className="font-sans text-body font-light text-[#5b6a71]">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: COMMUNITIES WE SERVE ─── */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="LOCAL EXPERTISE" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-[16px] mb-[16px] heading-accent max-w-[680px]">
              Las Vegas Communities We Serve
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg font-light text-[#5b6a71] max-w-content mb-[40px]">
              From the master-planned neighborhoods of Summerlin to the luxury estates of MacDonald
              Highlands, we serve families across the greater Las Vegas valley. Each community has
              its own character, and we understand the financial considerations that come with
              living in each\u2014from property tax nuances to homeowner association structures
              and local business networks. Wherever you call home in the valley, we bring
              planning that fits.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-wrap gap-[12px]">
              {communities.map((community) => (
                <span
                  key={community}
                  className="inline-block bg-[#FAFAF8] border border-[rgba(10,22,40,0.08)] rounded-full px-[20px] py-[10px] font-sans text-body-sm text-[#333333]"
                >
                  <MapPin className="inline w-[14px] h-[14px] text-[#1d7682] mr-[6px] -translate-y-[1px]" />
                  {community}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 7: WHO WE WORK WITH ─── */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="WHO WE SERVE" light />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#F7F4EE] mt-[16px] mb-[16px] max-w-[680px]">
              Las Vegas Clients We Serve
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-content mb-[40px]">
              Our Las Vegas practice is built around the families and professionals who are shaping
              the valley&rsquo;s future. Whether you arrived last month or you&rsquo;ve been here
              for years, we bring planning that meets you exactly where you are. We also work closely
              with families in{' '}
              <Link href="/locations/dallas-tx" className="text-[#1d7682] hover:text-[#155f69] transition-colors">
                Dallas, TX
              </Link>{' '}
              and other growing wealth centers nationwide.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] max-w-content">
            {clientTypes.map((type, index) => (
              <AnimateOnScroll key={type} delay={300 + index * 75}>
                <div className="flex items-start gap-[12px]">
                  <Users className="w-[18px] h-[18px] text-[#1d7682] mt-[3px] shrink-0" />
                  <span className="font-sans text-body font-light text-[#b6d0ed]">{type}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: FAQ ─── */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="FAQ" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-[16px] mb-[48px] heading-accent max-w-[780px]">
              Frequently Asked Questions About Wealth Management in Las Vegas
            </h2>
          </AnimateOnScroll>

          <div className="max-w-content space-y-[32px]">
            <AnimateOnScroll delay={200}>
              <div className="navy-divider pt-[32px]">
                <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                  How do Nevada&rsquo;s tax advantages benefit my financial plan?
                </h3>
                <p className="font-sans text-body font-light text-[#5b6a71]">
                  Nevada&rsquo;s zero state income tax, zero estate tax, and favorable trust laws
                  mean significantly more of your wealth compounds and transfers intact. We integrate
                  every Nevada advantage into a comprehensive plan that covers investments, retirement
                  income, business income, and estate transfers\u2014so nothing is left on the table.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <div className="navy-divider pt-[32px]">
                <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                  I&rsquo;m moving from California to Nevada. How should I plan the transition?
                </h3>
                <p className="font-sans text-body font-light text-[#5b6a71]">
                  Start at least twelve months ahead. We coordinate with your CPA and attorney to
                  navigate California&rsquo;s safe harbor rules, restructure trusts and entities for
                  Nevada domicile, plan the reinvestment of California home equity, and establish
                  residency documentation that holds up under audit. The goal is a clean, complete break.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="navy-divider pt-[32px]">
                <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                  What is a Nevada dynasty trust and should I consider one?
                </h3>
                <p className="font-sans text-body font-light text-[#5b6a71]">
                  A dynasty trust allows wealth to pass across multiple generations without triggering
                  estate or gift taxes at each transfer. Nevada&rsquo;s absence of a rule against
                  perpetuities means the trust can last indefinitely. If you have significant assets
                  you want to protect and grow for future generations, a dynasty trust is worth serious
                  consideration.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <div className="navy-divider pt-[32px]">
                <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                  How do I find a fiduciary financial advisor in Las Vegas?
                </h3>
                <p className="font-sans text-body font-light text-[#5b6a71]">
                  Seek an advisor who is legally bound to act in your best interest, not one who
                  merely follows a suitability standard. At Farther, every advisor operates as a
                  fiduciary, and our{' '}
                  <Link href="/technology" className="text-[#1d7682] hover:text-[#155f69] transition-colors">
                    technology platform
                  </Link>{' '}
                  provides complete transparency into fees, performance, and portfolio decisions.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="navy-divider pt-[32px]">
                <h3 className="font-serif text-h4 font-normal text-[#333333] mb-[12px]">
                  Can Farther help with both my Las Vegas and out-of-state accounts?
                </h3>
                <p className="font-sans text-body font-light text-[#5b6a71]">
                  Yes. Many of our Las Vegas clients maintain investments, businesses, or property in
                  California and other states. We provide unified planning and portfolio management
                  across all accounts and jurisdictions, ensuring your overall strategy is coordinated
                  and tax-efficient no matter where your assets are held.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CTA ─── */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#F7F4EE] mb-[24px] max-w-[720px] mx-auto">
              Whether You&rsquo;ve Just Arrived in Nevada or You&rsquo;ve Been Here for Years
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-[600px] mx-auto mb-[40px]">
              Let&rsquo;s build a plan that captures every advantage of living in one of
              America&rsquo;s most tax-friendly states.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-[16px] mb-[40px]">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Consultation
              </Button>
              <Button href="/wealth-management" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-[24px] sm:gap-[40px]">
              <a
                href="tel:+1-725-238-4291"
                className="flex items-center justify-center gap-[8px] font-sans text-body-sm text-[#b6d0ed] hover:text-[#1d7682] transition-colors"
              >
                <Phone className="w-[16px] h-[16px]" />
                (725) 238-4291
              </a>
              <a
                href="mailto:lasvegas@privatewealthatfarther.com"
                className="flex items-center justify-center gap-[8px] font-sans text-body-sm text-[#b6d0ed] hover:text-[#1d7682] transition-colors"
              >
                <Mail className="w-[16px] h-[16px]" />
                lasvegas@privatewealthatfarther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
