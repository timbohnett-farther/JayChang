import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import {
  MapPin,
  Shield,
  Building,
  Sun,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Home,
  Briefcase,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wealth Management in Scottsdale & Arizona | Financial Advisor for Families & Business Owners',
  description:
    'Personalized wealth management for Arizona families and business owners with $2M–$20M. Based in Tempe, serving Scottsdale, Phoenix, Paradise Valley, and greater Arizona.',
  alternates: { canonical: 'https://www.PWM-Farther.com/arizona' },
  openGraph: {
    title: 'Arizona Wealth Management | Personal Wealth Management at Farther',
    description:
      'Financial planning, investment management, and tax strategy for Arizona families — serving Scottsdale, Phoenix, Tempe, and Paradise Valley.',
    url: 'https://www.PWM-Farther.com/arizona',
  },
  other: {
    'geo.region': 'US-AZ',
    'geo.placename': 'Scottsdale',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther — Scottsdale & Arizona',
  description:
    'Personalized wealth management for Arizona families and business owners. Based in Tempe, AZ, serving Scottsdale, Phoenix, Paradise Valley, and greater Arizona.',
  url: 'https://www.PWM-Farther.com/arizona',
  telephone: '+1-480-944-0880',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tempe',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4255,
    longitude: -111.9400,
  },
  areaServed: [
    'Scottsdale',
    'Phoenix',
    'Tempe',
    'Paradise Valley',
    'Mesa',
    'Chandler',
  ],
  serviceType: [
    'Wealth Management',
    'Financial Planning',
    'Investment Management',
    'Retirement Planning',
    'Estate Planning',
    'Tax Strategy',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.farther.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas of Arizona do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve families and business owners throughout the greater Phoenix metropolitan area, including Scottsdale, Paradise Valley, Tempe, Mesa, Chandler, Gilbert, and Fountain Hills. Based in Tempe, we also serve clients across Arizona, California, and Nevada through a combination of in-person meetings and our technology platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Arizona attractive for wealth management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona offers a favorable tax environment with a flat 2.5% state income tax rate, no estate or inheritance tax, and a growing economy driven by technology, healthcare, and financial services. The Phoenix metro area is one of the fastest-growing wealth centers in the country, attracting families and businesses from higher-tax states like California.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does being in Arizona affect my wealth management strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Arizona is a community property state, which has meaningful implications for estate planning, including the potential for a full step-up in cost basis for surviving spouses. Arizona also has no state estate tax and a flat 2.5% income tax rate. A thoughtful wealth strategy accounts for these advantages and ensures you are not leaving opportunities on the table.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Personal Wealth Management at Farther different from large Arizona firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get a single dedicated advisor who knows your name, your family, and your goals — backed by Farther\'s wealth management platform for institutional-grade investment management, tax optimization, and reporting. Unlike large wirehouses, we operate under a fiduciary standard with transparent fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a fiduciary financial advisor in Arizona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our Form ADV Part 2A.',
      },
    },
  ],
}

export default function ScottsdaleArizonaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Arizona', href: '/arizona' }]} />
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
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/arizona-desert-sunset.webp"
          alt="Arizona desert sunset — wealth management for Scottsdale, Phoenix, and Paradise Valley families"
          title="Scottsdale & Arizona — Personal Wealth Management at Farther"
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/85 to-transparent" />
        <div className="relative z-10 mx-auto max-w-container px-sm md:px-lg py-[96px] w-full">
          <AnimateOnScroll>
            <SectionEyebrow text="SCOTTSDALE & ARIZONA" light />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="mt-md font-serif text-[34px] md:text-[52px] leading-[1.15] text-[#F7F4EE] max-w-[640px]">
              Wealth Management for Arizona&rsquo;s Growing Community of Successful Families.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-lg font-sans text-body-lg text-[#b6d0ed] max-w-[620px]">
              Based in Tempe and deeply rooted in the Arizona financial community
              — we build financial strategies tailored to your goals and your life here.
              Serving Scottsdale, Phoenix, Paradise Valley, and greater Arizona with $2M–$20M in investable
              assets.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-lg flex flex-col sm:flex-row gap-[16px]">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Begin a Confidential Conversation
              </Button>
              <a
                href="tel:+14809440880"
                className="font-sans text-btn text-[#b6d0ed] hover:text-[#1d7682] transition-colors flex items-center gap-[8px]"
              >
                (480) 944-0880
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="mt-xl flex flex-wrap gap-lg font-sans text-caption text-[#b6d0ed]">
              <span className="flex items-center gap-xs">
                <Shield className="h-4 w-4 text-[#1d7682]" />
                Fiduciary Standard
              </span>
              <span className="flex items-center gap-xs">
                <TrendingUp className="h-4 w-4 text-[#1d7682]" />
                $2M–$20M Clients
              </span>
              <span className="flex items-center gap-xs">
                <MapPin className="h-4 w-4 text-[#1d7682]" />
                Based in Tempe, AZ
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 2: THE ARIZONA ADVANTAGE ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Left column: text */}
            <div>
              <AnimateOnScroll>
                <SectionEyebrow text="THE ARIZONA ADVANTAGE" />
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
                  One of America&rsquo;s Fastest-Growing Wealth Centers — and Smart Money Is
                  Taking Notice.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-lg font-sans text-body text-[#5b6a71] space-y-md">
                  <p>
                    The Phoenix metropolitan area added more than 80,000 residents in 2025,
                    making it one of the fastest-growing metros in the nation. A significant
                    share of that growth is coming from California, where proposed wealth tax
                    legislation and the nation&rsquo;s highest marginal income tax rates are
                    pushing high-net-worth families to seriously evaluate their options.
                    Arizona, with its flat 2.5% state income tax rate, no estate or inheritance
                    tax, and exceptional quality of life, has become a top destination for
                    families seeking financial relief without sacrificing lifestyle.
                  </p>
                  <p>
                    But Arizona&rsquo;s advantages go beyond tax savings. The state&rsquo;s
                    booming economy, driven by technology, healthcare, financial
                    services, and advanced manufacturing, is creating wealth at an
                    extraordinary pace. Companies like TSMC, Intel, and a growing corridor
                    of fintech and biotech firms are drawing executives and entrepreneurs
                    to the Valley. Arizona is also a community property state, which creates
                    meaningful estate planning advantages, including the potential for a full
                    step-up in cost basis for surviving spouses.
                  </p>
                  <p>
                    The question isn&rsquo;t whether Arizona is a great place to build wealth.
                    It&rsquo;s whether your financial plan is structured to capture every
                    advantage Arizona offers.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right column: stats panel */}
            <AnimateOnScroll delay={300}>
              <div className="bg-[#333333] rounded-[16px] p-[40px] md:p-[48px] space-y-[32px] h-fit lg:mt-[60px]">
                <div>
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    2.5%
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    Flat state income tax rate — saving high-income families significantly vs
                    California&rsquo;s 13.3%
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    0%
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    State estate or inheritance tax — preserving more wealth for your family
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    #5
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    Fastest-growing metro in the US — Phoenix metro area by population growth
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    80,000+
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    New residents in the Phoenix metro in 2025, many from California
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CALIFORNIA-TO-ARIZONA RELOCATION ─── */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
            {/* Left column: lifestyle photo */}
            <AnimateOnScroll>
              <div className="rounded-[16px] overflow-hidden relative aspect-[4/3] w-full">
                <Image
                  src="/couple-golf-course.webp"
                  alt="Couple enjoying retirement in Scottsdale after relocating from California with a tax-optimized wealth plan"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>

            {/* Right column: text */}
            <div>
              <AnimateOnScroll delay={100}>
                <SectionEyebrow text="CALIFORNIA TO ARIZONA" light />
              </AnimateOnScroll>

              <AnimateOnScroll delay={150}>
                <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
                  Making the Move? We Help You Capture Every Advantage.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-lg font-sans text-body text-[#b6d0ed] space-y-md">
                  <p>
                    The California-to-Arizona relocation is one of the most financially
                    significant moves a family can make. The tax savings are real — a family
                    earning $1 million annually can save over $100,000 per year in state
                    income taxes alone by moving from California&rsquo;s 13.3% top rate to
                    Arizona&rsquo;s flat 2.5%. But the complexities are real, too.
                    California&rsquo;s Franchise Tax Board aggressively audits departing
                    residents, and a poorly planned move can result in years of disputed tax
                    obligations, penalties, and interest. The difference between capturing
                    Arizona&rsquo;s full advantage and leaving hundreds of thousands of
                    dollars on the table comes down to planning — and we focus on exactly
                    this transition.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={250}>
                <ul className="mt-lg space-y-[16px]">
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">State income tax transition</span>{' '}
                      — establishing Arizona residency, &ldquo;closer connection&rdquo; test,
                      California sourced income rules
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Trust and estate restructuring</span>{' '}
                      — updating trusts for Arizona jurisdiction, leveraging community property
                      rules for step-up in basis advantages
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Entity domicile changes</span>{' '}
                      — re-domiciling LLCs, S-Corps to Arizona
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Home equity reinvestment</span>{' '}
                      — strategic deployment of California home sale proceeds ($1.5M–$5M+)
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Estate plan updates</span>{' '}
                      — new wills, powers of attorney under Arizona law
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Insurance audit</span>{' '}
                      — reviewing coverage in new state, homeowner&rsquo;s, auto, umbrella
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Community integration</span>{' '}
                      — connecting with local CPAs, estate attorneys, and professional networks
                    </p>
                  </li>
                </ul>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHO WE SERVE ─── */}
      <section className="bg-[#FAFAF8] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <div className="text-center max-w-[720px] mx-auto">
              <SectionEyebrow text="WHO WE SERVE IN ARIZONA" />
              <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
                Financial Strategies for How Arizona Families Build and Protect Wealth.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* Card 1: Relocating Families */}
            <AnimateOnScroll delay={100}>
              <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
                <MapPin className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
                  Families Relocating to Arizona
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Every year, thousands of California transplants arrive in the Phoenix metro
                  area — and every one of them faces a critical window to restructure their
                  financial lives. From trust repositioning under Arizona&rsquo;s community
                  property rules to tax-efficient portfolio redesign that captures the state&rsquo;s
                  flat 2.5% income tax from day one, we help relocating families in Scottsdale,
                  Paradise Valley, and Tempe build a financial foundation that matches
                  their new home. The decisions you make in the first twelve months define your
                  tax savings for decades.
                </p>
                <Link
                  href="/services/tax-optimization"
                  className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
                >
                  Tax &amp; Estate Strategy <ArrowRight className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card 2: Business Owners */}
            <AnimateOnScroll delay={200}>
              <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
                <Building className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
                  Arizona Business Owners
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Arizona&rsquo;s economy is booming, driven by technology, healthcare,
                  construction, and financial services. From established firms in Scottsdale
                  and Tempe to fast-growing startups across the Valley, business owners
                  face complex financial needs around entity structuring, succession planning,
                  and wealth preservation. Whether you are building toward an exit, scaling
                  operations, or navigating partnership dynamics, we provide coordinated exit
                  planning, entity structuring, and owner compensation optimization. Arizona&rsquo;s
                  flat 2.5% income tax rate and no estate tax make it an ideal state
                  for business owners who plan proactively.
                </p>
                <Link
                  href="/services/business-owners"
                  className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
                >
                  Business Owner Services <ArrowRight className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card 3: Retirees */}
            <AnimateOnScroll delay={300}>
              <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
                <Sun className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
                  Retirees Building Their Next Chapter
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Arizona&rsquo;s low flat income tax on retirement distributions, Social Security
                  benefits, pension income, and investment income makes it one of the most
                  attractive states in the country for retirees with significant assets. We
                  build distribution strategies that optimize withdrawal sequencing across
                  IRAs, pensions, Roth conversions, and Social Security timing to maximize
                  portfolio longevity across a 25 to 35-year retirement horizon. Whether
                  you&rsquo;re starting from an established plan or building one for the
                  first time, your next chapter deserves strategic planning.
                </p>
                <Link
                  href="/services/financial-planning"
                  className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
                >
                  Financial Planning <ArrowRight className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card 4: High-Income Professionals */}
            <AnimateOnScroll delay={400}>
              <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
                <Briefcase className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
                  High-Income Professionals &amp; Physicians
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Earning $500K to $2M+ annually as a physician, executive, or specialist
                  in Arizona&rsquo;s growing healthcare and professional services sector?
                  You need more than target-date funds. We build tax optimization strategies
                  for the highest brackets, coordinate retirement catch-up plans, structure
                  529 education savings for multiple children, and ensure your practice or
                  career compensation is working as hard as you are. Whether you&rsquo;re
                  starting from scratch or refining an existing plan, we meet you where you
                  are.
                </p>
                <Link
                  href="/services/financial-planning"
                  className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
                >
                  Financial Planning <ArrowRight className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: ARIZONA-SPECIFIC SERVICES ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT WE DO IN ARIZONA" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Wealth Management Built for Arizona&rsquo;s Unique Advantages.
            </h2>
          </AnimateOnScroll>

          <div className="mt-xl space-y-[32px] max-w-[720px]">
            <AnimateOnScroll delay={150}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Interstate Tax Transition Planning
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  California&rsquo;s &ldquo;closer connection&rdquo; test and sourced income
                  rules make a clean residency break far more complicated than most families
                  expect. We coordinate the timing of asset sales, stock option exercises,
                  and deferred compensation distributions around your move date to minimize
                  California exposure. Every aspect of the transition is documented to
                  withstand Franchise Tax Board scrutiny — because the tax savings from
                  relocating to Arizona are only real if they hold up under audit.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Arizona Community Property &amp; Trust Strategy
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  Arizona is one of only nine community property states in the US, and this
                  creates powerful estate planning advantages. A surviving spouse may receive
                  a full step-up in cost basis on all community property assets, not
                  just half. This single provision can save families hundreds of thousands of
                  dollars in capital gains taxes.
                  Jay Chang&rsquo;s clients have direct access to Farther&rsquo;s dedicated
                  Trust &amp; Estate Planning team, ensuring your Arizona trust
                  strategy is built and maintained by specialists who work alongside your
                  estate attorney to design structures that take full advantage of
                  Arizona&rsquo;s community property rules and integrate them into
                  your broader{' '}
                  <Link
                    href="/services"
                    className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
                  >
                    wealth management plan
                  </Link>
                  .
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Retirement Income Optimization
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  Arizona&rsquo;s flat 2.5% state income tax on retirement distributions creates a
                  powerful opportunity for retirees who plan strategically. We design withdrawal
                  sequencing strategies that coordinate IRA distributions, Roth conversions,
                  and Social Security timing to minimize federal taxes and extend portfolio
                  longevity. For families planning a 25 to 35-year retirement, the difference
                  between an optimized and unoptimized distribution plan can exceed $500,000
                  in cumulative tax savings.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Real Estate Portfolio Integration
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  Many of our Arizona clients arrive with significant proceeds from a
                  California home sale — often $1.5 million to $5 million or more. Deploying
                  that capital strategically is critical. We evaluate 1031 exchange
                  opportunities, analyze Arizona property tax implications, and integrate
                  real estate holdings into your
                  overall investment portfolio. The goal is ensuring your real estate
                  allocation complements, rather than dominates, your financial plan.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Business Formation &amp; Entity Strategy
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  Arizona&rsquo;s flat 2.5% income tax, no estate tax, and favorable regulatory
                  environment make it an increasingly popular domicile for LLCs, S-Corps, and
                  holding companies. Whether you&rsquo;re running a technology firm, re-domiciling
                  an existing entity from California, or structuring a holding company for
                  investment assets, we
                  coordinate with your legal counsel to ensure your entity structure is
                  optimized for both tax efficiency and asset protection. Learn more about
                  our approach on the{' '}
                  <Link
                    href="/about"
                    className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
                  >
                    About page
                  </Link>
                  .
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: COMMUNITIES ─── */}
      <section className="bg-[#FAFAF8] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="COMMUNITIES WE SERVE" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Serving Families Across the Phoenix Metropolitan Area.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              {[
                {
                  name: 'Scottsdale',
                  descriptor: 'Luxury resort living',
                },
                {
                  name: 'Paradise Valley',
                  descriptor: 'Exclusive estates',
                },
                {
                  name: 'Tempe',
                  descriptor: 'Innovation & education hub',
                },
                {
                  name: 'Phoenix',
                  descriptor: 'Metro center of commerce',
                },
                {
                  name: 'Chandler',
                  descriptor: 'Tech corridor families',
                },
                {
                  name: 'Gilbert',
                  descriptor: 'Growing family community',
                },
                {
                  name: 'Mesa',
                  descriptor: 'Established neighborhoods',
                },
                {
                  name: 'Fountain Hills',
                  descriptor: 'Mountain views, privacy',
                },
              ].map((community) => (
                <div
                  key={community.name}
                  className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[24px]"
                >
                  <div className="flex items-center gap-[8px] mb-[6px]">
                    <MapPin className="w-[16px] h-[16px] text-[#1d7682]" />
                    <span className="font-sans text-body font-semibold text-[#333333]">
                      {community.name}
                    </span>
                  </div>
                  <p className="font-sans text-body-sm text-[#5b6a71]">
                    {community.descriptor}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 7: TESTIMONIAL ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg text-center">
          <AnimateOnScroll>
            <div className="max-w-[800px] mx-auto">
              <p className="font-serif text-[22px] md:text-[28px] leading-[1.5] text-[#333333] italic">
                &ldquo;We moved from Orange County to Scottsdale last year, and the financial
                complexity was honestly overwhelming — selling a home we&rsquo;d owned for 20
                years, figuring out what California could still tax us on, setting up new
                trusts under Arizona law, and reinvesting everything without making an
                emotional decision. They built a transition plan that addressed all of it.
                Six months in, our financial life is more organized than it&rsquo;s ever
                been.&rdquo;
              </p>
              <p className="mt-lg font-sans text-body font-semibold text-[#333333]">
                — Michael &amp; Lisa R., Scottsdale, AZ
              </p>
              <p className="mt-[4px] font-sans text-body-sm text-[#5b6a71]">
                Recently relocated from California, clients since 2025
              </p>
              <p className="mt-lg font-sans text-[11px] text-[#5b6a71] max-w-[600px] mx-auto">
                This testimonial reflects the individual experience of a current advisory client of
                Jay Chang at Farther Finance, Inc. It was provided voluntarily and without
                compensation. This client&rsquo;s experience may not be representative of other
                clients&rsquo; experiences, and the testimonial does not constitute a guarantee of
                future performance or results. Individual outcomes depend on each client&rsquo;s
                specific financial circumstances, goals, and market conditions.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 8: FAQ ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="FAQ" />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Frequently Asked Questions About Wealth Management in Arizona
            </h2>
          </AnimateOnScroll>

          <div className="mt-xl max-w-content space-y-sm">
            <AnimateOnScroll delay={100}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    I&rsquo;m moving from California to Arizona. How do I establish Arizona
                    residency?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    Establishing Arizona residency requires more than simply purchasing a home
                    in Scottsdale or Phoenix. You need to obtain an Arizona driver&rsquo;s license,
                    register to vote, transfer vehicle registrations, and update all financial
                    accounts to your new Arizona address. The critical element is passing
                    California&rsquo;s &ldquo;closer connection&rdquo; test, which evaluates
                    where your strongest personal and economic ties exist. The Franchise Tax
                    Board audits high-income departing residents aggressively, so thorough
                    documentation from day one is essential for a clean break.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    What makes Arizona a community property state and why does it matter?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    Arizona is one of only nine community property states in the US. This means
                    that a surviving spouse may receive a full step-up in cost basis on all
                    community property assets, not just half. For families with significant
                    appreciated assets, this single provision can save hundreds of thousands of
                    dollars in capital gains taxes. We coordinate with your estate attorney to
                    ensure your plan takes full advantage of Arizona&rsquo;s community property rules.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    Will California still tax me after I move to Arizona?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    Potentially, yes. California taxes &ldquo;sourced&rdquo; income regardless
                    of where you live. This includes rental income from California properties,
                    deferred compensation earned during your California residency, and capital
                    gains from the sale of California-based businesses. Timing matters
                    enormously — exercising stock options or selling a business before
                    establishing Arizona residency can cost hundreds of thousands in
                    unnecessary California taxes. We help you sequence these decisions to
                    minimize exposure and protect your savings.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    What areas of Arizona do you serve?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    We serve families and business owners across the greater Phoenix
                    metropolitan area, including Scottsdale, Paradise Valley, Tempe, Phoenix,
                    Chandler, Gilbert, Mesa, and Fountain Hills. Based in Tempe, we also serve
                    clients across Arizona, California, and Nevada through a combination of
                    in-person meetings and our technology platform.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    Are you a fiduciary financial advisor in Arizona?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    We are a fiduciary, meaning we are held to a legal standard to put your
                    interests first. Our advisory fee is based on a percentage of assets under
                    management. For complete details on fees and compensation, please refer to
                    our{' '}
                    <Link
                      href="/disclosures#fees"
                      className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
                    >
                      Form ADV Part 2A
                    </Link>
                    .
                  </p>
                </div>
              </details>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={350}>
            <div className="mt-xl">
              <Link
                href="/services"
                className="font-sans text-body text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[8px]"
              >
                We also serve families and business owners across California and Nevada{' '}
                <ArrowRight className="w-[16px] h-[16px]" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 9: OFFICE & MAP ─── */}
      <section className="bg-[#FAFAF8] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR ARIZONA OFFICE" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
              Serving the Phoenix Metropolitan Area &amp; Beyond
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] mt-[48px]">
            {/* Map */}
            <AnimateOnScroll delay={100}>
              <div className="rounded-[8px] overflow-hidden border border-[#E8E6E1] shadow-sm h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212699.36210872996!2d-112.07019384453783!3d33.44838344500508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08009b5d7b47%3A0x5765de39ec84e31c!2sTempe%2C%20AZ!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farther Wealth Management — Tempe, AZ office location"
                />
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll delay={200}>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-[24px]">
                  Tempe, Arizona
                </h3>

                <div className="space-y-[16px]">
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Phone</p>
                    <a href="tel:+14809440880" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      (480) 944-0880
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Email</p>
                    <a href="mailto:jay.chang@farther.com" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      jay.chang@farther.com
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Hours</p>
                    <p className="font-sans text-[17px] text-[#333333]">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="font-sans text-[15px] text-[#5b6a71]">Evenings &amp; weekends by appointment</p>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-[4px]">Service Areas</p>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
                      Scottsdale &middot; Paradise Valley &middot; Tempe &middot; Phoenix &middot; Chandler &middot; Gilbert &middot; Mesa &middot; Fountain Hills
                    </p>
                  </div>
                </div>

                <div className="mt-[32px]">
                  <Button variant="primary" href="https://meetings.hubspot.com/jay-chang1/farthercom">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: CTA ─── */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] text-[#F7F4EE] max-w-[720px] mx-auto">
              Arizona Is Where You and Your Wealth Live. We Help You Make the Most of It.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-md font-sans text-body-lg text-[#b6d0ed] max-w-[600px] mx-auto">
              Whether you just arrived in the Phoenix metro, you&rsquo;re planning a move
              from California, or you&rsquo;ve been an Arizona resident for years — a
              conversation with our team can reveal opportunities your current plan may
              be missing.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-lg">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Begin a Confidential Conversation
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-lg flex flex-col sm:flex-row items-center justify-center gap-lg font-sans text-body-sm text-[#b6d0ed]">
              <a
                href="tel:+14809440880"
                className="hover:text-[#1d7682] transition-colors"
              >
                (480) 944-0880
              </a>
              <a
                href="mailto:jay.chang@farther.com"
                className="hover:text-[#1d7682] transition-colors"
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
