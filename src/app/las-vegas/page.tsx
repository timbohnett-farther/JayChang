import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
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
  title: 'Wealth Management in Las Vegas, NV | Financial Advisor for Families & Business Owners',
  description:
    'Personalized wealth management for Las Vegas families and business owners with $2M–$20M. Specialists in California-to-Nevada relocation planning. Serving Summerlin, Henderson, and greater Las Vegas.',
  alternates: { canonical: 'https://www.PWM-Farther.com/las-vegas' },
  openGraph: {
    title: 'Las Vegas Wealth Management | Personal Wealth Management at Farther',
    description:
      'Financial planning, investment management, and Nevada tax strategy for Las Vegas families — including California relocation planning.',
    url: 'https://www.PWM-Farther.com/las-vegas',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther — Las Vegas, NV',
  description:
    'Personalized wealth management for Las Vegas families and business owners. Specialists in California-to-Nevada relocation planning, Nevada dynasty trusts, and tax-advantaged financial strategy.',
  url: 'https://www.PWM-Farther.com/las-vegas',
  telephone: '+1-725-238-4291',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1699,
    longitude: -115.1398,
  },
  areaServed: [
    'Las Vegas',
    'Henderson',
    'Summerlin',
    'MacDonald Highlands',
    'The Ridges',
    'Boulder City',
  ],
  serviceType: [
    'Wealth Management',
    'Financial Planning',
    'Investment Management',
    'California to Nevada Relocation Planning',
    'Nevada Dynasty Trust Strategy',
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
      name: "I'm moving from California to Las Vegas. How do I establish Nevada residency?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Establishing Nevada residency requires more than simply buying a home. You need a Nevada driver's license, voter registration, vehicle registration, and updated mailing addresses. Critically, you must pass California's 'closer connection' test — demonstrating that your strongest personal and economic ties are now in Nevada, not California. The Franchise Tax Board audits departing high-income residents aggressively, so documentation matters. We coordinate the entire process with your CPA and attorney.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Nevada dynasty trust and is it right for my family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Nevada dynasty trust allows wealth to pass across multiple generations without incurring estate or gift taxes at each generational transfer. Because Nevada has no rule against perpetuities, the trust can last indefinitely. Trust income is not subject to state income tax in Nevada. For families with $5 million or more who want to build lasting multi-generational wealth, a dynasty trust is one of the most powerful estate planning tools available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will California still tax me after I move to Nevada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your income sources. California taxes sourced income regardless of where you live — including rental income from California properties, deferred compensation earned while a California resident, and capital gains from the sale of California-based businesses. Timing matters enormously. Moving before exercising stock options or closing a business sale can save hundreds of thousands of dollars in California taxes. We help you sequence these decisions correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Las Vegas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve families and business owners across the entire Las Vegas valley, including Summerlin, Henderson, MacDonald Highlands, The Ridges, Southern Highlands, Inspirada, Cadence, Downtown Summerlin, Boulder City, and surrounding communities. Our services are delivered through a combination of in-person meetings and our technology platform, giving you access to institutional-quality wealth management regardless of where you live in the valley.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a fiduciary financial advisor in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our Form ADV Part 2A.',
      },
    },
  ],
}

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
      <section className="relative min-h-screen bg-[#333333] flex items-center">
        <Image
          src="/las-vegas-couple-sunset.jpeg"
          alt="Couple overlooking Las Vegas valley at sunset"
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/85 to-transparent" />
        <div className="relative z-10 mx-auto max-w-container px-sm md:px-lg py-[96px] w-full">
          <AnimateOnScroll>
            <SectionEyebrow text="LAS VEGAS, NEVADA" light />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="mt-md font-serif text-[34px] md:text-[52px] leading-[1.15] text-[#F7F4EE] max-w-[640px]">
              Wealth Management for Las Vegas&rsquo;s Growing Community of Successful Families.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-lg font-sans text-body-lg text-[#b6d0ed] max-w-[620px]">
              Whether you&rsquo;ve recently made Nevada home or you&rsquo;ve been here for years
              — we build financial strategies that leverage everything this state has to offer.
              Serving Summerlin, Henderson, and greater Las Vegas with $2M–$20M in investable
              assets.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-lg flex flex-col sm:flex-row gap-[16px]">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Begin a Confidential Conversation
              </Button>
              <a
                href="tel:+17252384291"
                className="font-sans text-btn text-[#b6d0ed] hover:text-[#1d7682] transition-colors flex items-center gap-[8px]"
              >
                (725) 238-4291
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
                Nevada Tax Specialists
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 2: THE NEVADA ADVANTAGE ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Left column: text */}
            <div>
              <AnimateOnScroll>
                <SectionEyebrow text="THE NEVADA ADVANTAGE" />
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
                  One of America&rsquo;s Most Tax-Advantaged States — and Smart Money Is Taking
                  Notice.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-lg font-sans text-body text-[#5b6a71] space-y-md">
                  <p>
                    More than 40,000 people moved to the Las Vegas valley in 2025, and nearly
                    half of them came from California. That migration is not slowing down — it
                    is accelerating. Proposed California wealth tax legislation and continued
                    increases to the state&rsquo;s already nation-leading marginal income tax
                    rates are pushing high-net-worth families to seriously evaluate their
                    options. Nevada, sitting just across the border, has become the most
                    natural destination for families seeking financial relief without sacrificing
                    quality of life.
                  </p>
                  <p>
                    But Nevada&rsquo;s advantages extend well beyond the absence of a state
                    income tax. There is no state estate tax, no corporate income tax, no
                    franchise tax, and some of the strongest asset protection trust laws in
                    the country. Nevada&rsquo;s abolition of the rule against perpetuities
                    allows dynasty trusts to last indefinitely — a feature that makes the
                    state one of the premier trust jurisdictions in the nation. For business
                    owners, Nevada offers privacy protections and a streamlined regulatory
                    environment that rivals Delaware without the geographic inconvenience.
                  </p>
                  <p>
                    The question isn&rsquo;t whether Nevada is tax-advantaged. It&rsquo;s
                    whether your financial plan is structured to capture every advantage
                    Nevada offers.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right column: stats panel */}
            <AnimateOnScroll delay={300}>
              <div className="bg-[#333333] rounded-[16px] p-[40px] md:p-[48px] space-y-[32px] h-fit lg:mt-[60px]">
                <div>
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    0%
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    State income tax — saving high-income families $20K–$60K+ annually vs
                    California
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    0%
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    State estate tax — paired with 2026 federal exemption of $15M per
                    individual
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    ∞
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    No rule against perpetuities — dynasty trusts last indefinitely
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.08)] pt-[32px]">
                  <span className="font-serif text-[48px] text-[#1d7682] leading-none">
                    40,000+
                  </span>
                  <p className="mt-[8px] font-sans text-body-sm text-[#b6d0ed]">
                    People moved to Las Vegas in 2025, nearly half from California
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CALIFORNIA-TO-NEVADA RELOCATION ─── */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
            {/* Left column: lifestyle photo */}
            <AnimateOnScroll>
              <div className="rounded-[16px] overflow-hidden relative aspect-[4/3] w-full">
                <Image
                  src="/couple-golf-course.jpeg"
                  alt="Couple enjoying Las Vegas lifestyle on golf course"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>

            {/* Right column: text */}
            <div>
              <AnimateOnScroll delay={100}>
                <SectionEyebrow text="CALIFORNIA TO NEVADA" light />
              </AnimateOnScroll>

              <AnimateOnScroll delay={150}>
                <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
                  Making the Move? We Help You Capture Every Advantage.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-lg font-sans text-body text-[#b6d0ed] space-y-md">
                  <p>
                    The California-to-Nevada relocation is one of the most financially
                    significant moves a family can make. The tax savings are real — a family
                    earning $1 million annually can save over $130,000 per year in state
                    income taxes alone. But the complexities are real, too. California&rsquo;s
                    Franchise Tax Board aggressively audits departing residents, and a poorly
                    planned move can result in years of disputed tax obligations, penalties,
                    and interest. The difference between capturing Nevada&rsquo;s full
                    advantage and leaving hundreds of thousands of dollars on the table comes
                    down to planning — and we focus on exactly this transition.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={250}>
                <ul className="mt-lg space-y-[16px]">
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">State income tax transition</span>{' '}
                      — establishing residency, &ldquo;closer connection&rdquo; test, California
                      sourced income rules
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Trust and estate restructuring</span>{' '}
                      — moving trusts to Nevada jurisdiction for dynasty trust provisions, asset
                      protection, zero state income tax on trust income
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <span className="mt-[7px] h-[8px] w-[8px] rounded-full bg-[#1d7682] shrink-0" />
                    <p className="font-sans text-body text-[rgba(247,244,238,0.8)]">
                      <span className="font-semibold text-[#F7F4EE]">Entity domicile changes</span>{' '}
                      — re-domiciling LLCs, S-Corps to Nevada
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
                      — new wills, powers of attorney under Nevada law
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
              <SectionEyebrow text="WHO WE SERVE IN LAS VEGAS" />
              <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
                Financial Strategies for How Las Vegas Families Build and Protect Wealth.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* Card 1: Relocating Families */}
            <AnimateOnScroll delay={100}>
              <div className="bg-[#F7F4EE] border border-[rgba(10,22,40,0.06)] rounded-[4px] p-[32px] h-full flex flex-col">
                <MapPin className="w-[28px] h-[28px] text-[#1d7682] mb-[16px]" />
                <h3 className="font-serif text-h4 text-[#333333] mb-[12px]">
                  Families Relocating to Nevada
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Every year, thousands of California transplants arrive in the Las Vegas
                  valley — and every one of them faces a critical window to restructure their
                  financial lives. From trust repositioning under Nevada&rsquo;s favorable
                  jurisdiction to tax-efficient portfolio redesign that captures the state&rsquo;s
                  zero income tax from day one, we help relocating families in Summerlin,
                  Henderson, and Southern Highlands build a financial foundation that matches
                  their new home. The decisions you make in the first twelve months define your
                  tax savings for decades.
                </p>
                <Link
                  href="/services#tax-estate"
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
                  Nevada Business Owners
                </h3>
                <p className="font-sans text-body text-[#5b6a71] flex-1">
                  Las Vegas&rsquo;s economy has diversified far beyond the Strip. Construction
                  and development firms like Martin-Harris Construction and Penta Building Group
                  have helped build the modern Las Vegas valley &mdash; and their owners face
                  complex financial needs around entity structuring, succession planning, and
                  wealth preservation. Whether you are building toward an exit, scaling
                  operations, or navigating partnership dynamics, we provide coordinated exit
                  planning, entity structuring, and owner compensation optimization. Nevada&rsquo;s
                  zero corporate income tax and strong privacy protections make it an ideal state
                  for business owners who plan proactively.
                </p>
                <Link
                  href="/services#business-owners"
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
                  Nevada&rsquo;s zero income tax on retirement distributions, Social Security
                  benefits, pension income, and investment income makes it one of the most
                  attractive states in the country for retirees with significant assets. We
                  build distribution strategies that optimize withdrawal sequencing across
                  IRAs, pensions, Roth conversions, and Social Security timing to maximize
                  portfolio longevity across a 25 to 35-year retirement horizon. Whether
                  you&rsquo;re starting from an established plan or building one for the
                  first time, your next chapter deserves strategic planning.
                </p>
                <Link
                  href="/services#financial-planning"
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
                  in Las Vegas&rsquo;s growing healthcare and professional services sector?
                  You need more than target-date funds. We build tax optimization strategies
                  for the highest brackets, coordinate retirement catch-up plans, structure
                  529 education savings for multiple children, and ensure your practice or
                  career compensation is working as hard as you are. Whether you&rsquo;re
                  starting from scratch or refining an existing plan, we meet you where you
                  are.
                </p>
                <Link
                  href="/services#financial-planning"
                  className="mt-[16px] font-sans text-body-sm font-semibold text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[6px]"
                >
                  Financial Planning <ArrowRight className="w-[14px] h-[14px]" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: LAS VEGAS-SPECIFIC SERVICES ─── */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT WE DO IN LAS VEGAS" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Wealth Management Built for Nevada&rsquo;s Unique Advantages.
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
                  relocating to Nevada are only real if they hold up under audit.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="border-l-4 border-[#1d7682] pl-7">
                <h3 className="font-serif text-h4 text-[#333333] mb-[8px]">
                  Nevada Trust Strategy
                </h3>
                <p className="font-sans text-body text-[#5b6a71]">
                  Nevada is one of the top trust jurisdictions in the United States, and for
                  good reason. Dynasty trusts can last indefinitely, shielding wealth from
                  estate taxes across unlimited generations. Asset protection trusts offer a
                  two-year statute of limitations for creditor claims. Directed trusts allow
                  you to separate investment management from trustee administration.
                  Robert Davenport&rsquo;s clients have direct access to Farther&rsquo;s dedicated
                  Trust &amp; Estate Planning team &mdash; ensuring your Nevada trust
                  strategy is built and maintained by specialists who work alongside your
                  estate attorney to design structures that take full advantage of
                  Nevada&rsquo;s unique legal framework &mdash; and integrate them into
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
                  Nevada&rsquo;s zero state income tax on retirement distributions creates a
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
                  Many of our Las Vegas clients arrive with significant proceeds from a
                  California home sale — often $1.5 million to $5 million or more. Deploying
                  that capital strategically is critical. We evaluate 1031 exchange
                  opportunities, analyze Nevada property tax implications (approximately
                  0.9% effective rate), and integrate real estate holdings into your
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
                  Nevada&rsquo;s zero corporate income tax, strong privacy protections for
                  business owners, and favorable regulatory environment make it an
                  increasingly popular domicile for LLCs, S-Corps, and holding companies.
                  Whether you&rsquo;re running a construction firm, re-domiciling an existing entity
                  from California, or structuring a holding company for investment assets, we
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
              Serving Families Across the Las Vegas Valley.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
              {[
                {
                  name: 'Summerlin',
                  descriptor: 'Master-planned luxury',
                },
                {
                  name: 'Henderson',
                  descriptor: 'Key migration hub',
                },
                {
                  name: 'MacDonald Highlands',
                  descriptor: 'Exclusive hilltop estates',
                },
                {
                  name: 'The Ridges',
                  descriptor: 'Guard-gated privacy',
                },
                {
                  name: 'Southern Highlands',
                  descriptor: 'Premier golf community',
                },
                {
                  name: 'Inspirada',
                  descriptor: 'Growing family community',
                },
                {
                  name: 'Cadence',
                  descriptor: 'Modern desert living',
                },
                {
                  name: 'Downtown Summerlin Area',
                  descriptor: 'Urban-suburban blend',
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
                &ldquo;We moved from Orange County to Henderson last year, and the financial
                complexity was honestly overwhelming — selling a home we&rsquo;d owned for 20
                years, figuring out what California could still tax us on, setting up new
                trusts under Nevada law, and reinvesting everything without making an
                emotional decision. They built a transition plan that addressed all of it.
                Six months in, our financial life is more organized than it&rsquo;s ever
                been.&rdquo;
              </p>
              <p className="mt-lg font-sans text-body font-semibold text-[#333333]">
                — Michael &amp; Lisa R., Henderson, NV
              </p>
              <p className="mt-[4px] font-sans text-body-sm text-[#5b6a71]">
                Recently relocated from California, clients since 2025
              </p>
              <p className="mt-lg font-sans text-[11px] text-[#5b6a71] max-w-[600px] mx-auto">
                This testimonial reflects the individual experience of a current advisory client of
                Robert Davenport at Farther Finance, Inc. It was provided voluntarily and without
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
              Frequently Asked Questions About Wealth Management in Las Vegas
            </h2>
          </AnimateOnScroll>

          <div className="mt-xl max-w-content space-y-sm">
            <AnimateOnScroll delay={100}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    I&rsquo;m moving from California to Las Vegas. How do I establish Nevada
                    residency?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    Establishing Nevada residency requires more than simply purchasing a home
                    in Las Vegas. You need to obtain a Nevada driver&rsquo;s license, register
                    to vote, transfer vehicle registrations, and update all financial accounts
                    to your new Nevada address. The critical element is passing California&rsquo;s
                    &ldquo;closer connection&rdquo; test, which evaluates where your strongest
                    personal and economic ties exist. The Franchise Tax Board audits high-income
                    departing residents aggressively, so thorough documentation from day one is
                    essential for a clean break.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    What is a Nevada dynasty trust and is it right for my family?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    A Nevada dynasty trust is a multi-generational trust designed to hold and
                    grow wealth indefinitely. Because Nevada has abolished the rule against
                    perpetuities, the trust never has to terminate — unlike trusts in most
                    other states. Trust income is not subject to Nevada state income tax. For
                    families with $5 million or more in assets who are focused on building
                    lasting wealth across generations, dynasty trusts are among the most
                    powerful estate planning tools available. We coordinate with your estate
                    attorney to determine if this structure fits your family&rsquo;s goals.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    Will California still tax me after I move to Nevada?
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
                    establishing Nevada residency can cost hundreds of thousands in
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
                    What areas of Las Vegas do you serve?
                  </h3>
                  <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-md pb-md">
                  <p className="font-sans text-body text-[#5b6a71]">
                    We serve families and business owners across the entire Las Vegas valley,
                    including Summerlin, Henderson, MacDonald Highlands, The Ridges, Southern
                    Highlands, Inspirada, Cadence, the Downtown Summerlin area, and Boulder
                    City. Our wealth management services combine in-person meetings with our
                    technology platform, giving you institutional-quality planning and
                    portfolio management regardless of where you live in the greater Las Vegas
                    area.
                  </p>
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                    Are you a fiduciary financial advisor in Las Vegas?
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
                href="/dallas"
                className="font-sans text-body text-[#1d7682] hover:text-[#155f69] transition-colors flex items-center gap-[8px]"
              >
                We also serve families and business owners in Dallas, Texas{' '}
                <ArrowRight className="w-[16px] h-[16px]" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 9: CTA ─── */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.15] text-[#F7F4EE] max-w-[720px] mx-auto">
              Nevada Gives You the Advantage. We Help You Use It.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-md font-sans text-body-lg text-[#b6d0ed] max-w-[600px] mx-auto">
              Whether you just arrived in the Las Vegas valley, you&rsquo;re planning a move
              from California, or you&rsquo;ve been a Nevada resident for years — a
              conversation with our team can reveal opportunities your current plan may
              be missing.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-lg">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Begin a Confidential Conversation
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-lg flex flex-col sm:flex-row items-center justify-center gap-lg font-sans text-body-sm text-[#b6d0ed]">
              <a
                href="tel:+17252384291"
                className="hover:text-[#1d7682] transition-colors"
              >
                (725) 238-4291
              </a>
              <a
                href="mailto:robert.davenport@farther.com"
                className="hover:text-[#1d7682] transition-colors"
              >
                robert.davenport@farther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
