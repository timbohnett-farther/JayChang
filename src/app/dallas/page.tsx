import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building,
  Users,
  Shield,
  MapPin,
  ChevronDown,
  ArrowRight,
  Briefcase,
  Home,
} from 'lucide-react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Wealth Management in Arizona | Financial Advisor for Business Owners & Families',
  description:
    'Personalized wealth management for Arizona families and business owners with $2M–$20M. Serving Scottsdale, Phoenix, Paradise Valley, Tempe, and greater Arizona. Personal Wealth Management at Farther.',
  alternates: { canonical: 'https://www.PWM-Farther.com/arizona' },
  openGraph: {
    title: 'Arizona Wealth Management | Personal Wealth Management at Farther',
    description:
      'Financial planning, investment management, and tax strategy for Arizona families and business owners with $2M–$20M in investable assets.',
    url: 'https://www.PWM-Farther.com/arizona',
  },
  other: {
    'geo.region': 'US-AZ',
    'geo.placename': 'Tempe',
  },
}

const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Personal Wealth Management at Farther – Arizona',
  description:
    'Personalized wealth management for Arizona families and business owners with $2M–$20M in investable assets. Financial planning, investment management, tax strategy, and estate planning.',
  url: 'https://www.PWM-Farther.com/arizona',
  telephone: '+1-480-944-0880',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4255,
    longitude: -111.9400,
  },
  areaServed: [
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'City', name: 'Tempe' },
    { '@type': 'City', name: 'Paradise Valley' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'Fountain Hills' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  serviceType: 'Wealth Management',
  provider: {
    '@type': 'Organization',
    name: 'Farther',
    url: 'https://www.PWM-Farther.com',
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
        text: 'We serve families and business owners throughout the greater Phoenix metropolitan area, including Scottsdale, Paradise Valley, Tempe, Phoenix, Chandler, Gilbert, Mesa, and Fountain Hills. Based in Tempe, we also serve clients across Arizona, California, and Nevada through a combination of in-person meetings and our technology platform.',
      },
    },
    {
      '@type': 'Question',
      name: "I'm a business owner in Arizona. When should I start planning for an exit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideally, three to five years before you expect to sell. The most effective exit strategies involve years of preparation, restructuring entities, positioning assets for tax efficiency, and building a post-sale financial plan. The twelve to twenty-four months before a transaction close are especially critical for maximizing after-tax proceeds and ensuring a smooth transition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does being in Arizona affect my wealth management strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. Arizona has a flat 2.5% state income tax rate and no estate or inheritance tax. Arizona is also a community property state, which has meaningful implications for estate planning, including the potential for a full step-up in cost basis for surviving spouses. A good wealth strategy accounts for both advantages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Personal Wealth Management at Farther different from large Arizona firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get a single dedicated advisor who knows your name, your family, and your goals, backed by Farther\'s wealth management platform for institutional-grade investment management, tax optimization, and reporting. Unlike large wirehouses, we operate under a fiduciary standard with transparent fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Personal Wealth Management at Farther a fiduciary financial advisor in Arizona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are a fiduciary, meaning we are held to a legal standard to put your interests first. Our advisory fee is based on a percentage of assets under management. For complete details on fees and compensation, please refer to our Form ADV Part 2A.',
      },
    },
  ],
}

const stats = [
  { value: '#5', description: 'Fastest-growing metro in the US by population' },
  { value: '2.5%', description: 'Arizona flat state income tax rate' },
  { value: '0%', description: 'Arizona estate or inheritance tax' },
  { value: '$1T+', description: 'Semiconductor & tech investment flowing into Arizona' },
]

const clientCards = [
  {
    icon: Building,
    title: 'Arizona Business Owners',
    body: 'If you\'ve spent years building a business in the Phoenix metro, whether in technology, healthcare, real estate, construction, or professional services, you need a wealth strategy that goes well beyond a brokerage account. We help Arizona business owners with exit planning, succession strategy, entity structuring, pre-sale tax positioning, and 401(k) plan management for your employees. When the time comes to transition, you keep as much of what you've built as possible.',
    link: { text: 'Learn about our business owner services', href: '/services/business-owners' },
  },
  {
    icon: Briefcase,
    title: 'Arizona Executives & Professionals',
    body: 'The Phoenix metro is home to a rapidly growing number of major corporate campuses and technology firms, from TSMC and Intel to financial services companies like Charles Schwab. If you're navigating stock options, RSUs, deferred compensation, or concentrated equity positions, you need a plan that addresses diversification timing, tax-efficient exercise strategies, and the critical transition from peak earning years into retirement.',
    link: { text: 'Learn about our financial planning', href: '/services/financial-planning' },
  },
  {
    icon: Home,
    title: 'Arizona Families Building Lasting Wealth',
    body: 'From Scottsdale to Paradise Valley, Arizona families with $2M\u2013$20M in investable assets face a unique set of planning challenges. How do you generate reliable retirement income in a low-tax state? How do you structure an estate plan that takes advantage of Arizona community property rules? How do you build multi-generational wealth without creating complexity your children can't manage? We answer these questions with strategies tailored to your family's actual life.',
    link: { text: 'Learn about our tax & estate strategy', href: '/services/tax-optimization' },
  },
]

const services = [
  {
    title: 'Business Exit & Succession Planning',
    body: 'Arizona is home to a thriving ecosystem of privately held businesses across technology, healthcare, construction, and professional services. Whether you're preparing for a full sale, a management buyout, or a generational transfer, the twelve to twenty-four months before a transaction are the most critical window for tax positioning. We work alongside your CPA and attorney to structure the exit in a way that minimizes capital gains exposure and maximizes after-tax proceeds, so the wealth you've built actually stays with your family.',
  },
  {
    title: 'Arizona Community Property Planning',
    body: 'Arizona is one of only nine community property states in the US, and most Arizona families don't realize how profoundly this affects their estate plan. In a community property state, a surviving spouse may receive a full step-up in cost basis on all community property assets, not just half. This single provision can save families hundreds of thousands of dollars in capital gains taxes. We build estate strategies that leverage this advantage alongside trusts, gifting, and charitable planning.',
  },
  {
    title: 'Concentrated Stock & Equity Compensation',
    body: 'With major technology employers like TSMC, Intel, and a growing corridor of tech and financial services firms in the Phoenix metro, concentrated stock positions are one of the most common, and most mismanaged, wealth planning challenges in Arizona. We design systematic diversification strategies that balance tax efficiency with risk reduction, using tools like 10b5-1 plans, exchange funds, hedging strategies, and charitable remainder trusts to help executives and employees reduce exposure without triggering unnecessary tax events.',
  },
  {
    title: 'Real Estate Wealth Strategy',
    body: 'Real estate is woven into the fabric of Arizona wealth. Whether you hold commercial properties, development land, or a portfolio of rental homes, the planning considerations are significant: 1031 exchanges to defer gains, property tax management, liquidity planning for illiquid holdings, and integration of real estate income into your broader retirement and estate strategy. We bring structure and strategy to this critical asset class.',
  },
  {
    title: '401(k) & Retirement Plan Management',
    body: 'Arizona business owners with employees face a dual challenge: building a retirement plan that attracts and retains talent while managing the fiduciary obligations that come with it. Through Farther's platform, we provide institutional-quality 401(k) plan design, investment menu selection, compliance oversight, and participant education, all coordinated alongside your personal wealth strategy. For many Arizona business owners, this is the natural entry point to a comprehensive advisory relationship.',
  },
  {
    title: 'Multi-Generational Wealth Planning',
    body: 'Arizona is a state where first-generation wealth is rapidly becoming second and third-generation wealth. The challenge is ensuring that the transition preserves not just assets but also values and financial literacy. We help families design trust structures, implement gifting strategies within annual and lifetime exemptions, and facilitate the family wealth conversations that make the difference between legacy and liability. Your wealth plan should outlast any single generation.',
  },
]

const communities = [
  { name: 'Scottsdale', descriptor: 'Luxury resort living, top-rated schools' },
  { name: 'Paradise Valley', descriptor: 'Exclusive estates, mountain views' },
  { name: 'Tempe', descriptor: 'Innovation hub, ASU corridor' },
  { name: 'Phoenix (Arcadia/Biltmore)', descriptor: 'Historic neighborhoods, central location' },
  { name: 'Chandler', descriptor: 'Tech corridor, Intel campus area' },
  { name: 'Gilbert', descriptor: 'Growing families, master-planned communities' },
  { name: 'Mesa', descriptor: 'Established neighborhoods, diverse economy' },
  { name: 'Fountain Hills', descriptor: 'Mountain views, privacy and serenity' },
]

export default function ArizonaPage() {
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
          alt="Arizona desert at sunset — wealth management for Scottsdale, Phoenix, and Paradise Valley families"
          title="Arizona — Personal Wealth Management at Farther"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
        <div className="relative z-10 w-full px-[20px] md:px-[80px] py-[120px]">
          <div className="max-w-[620px]">
            <AnimateOnScroll>
              <SectionEyebrow text="ARIZONA" light />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[34px] md:text-[52px] font-bold text-[#F7F4EE] mt-5 leading-[1.15]">
                Wealth Management for Arizona Families and Business Owners.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[19px] text-[#F7F4EE]/90 mt-5 max-w-[540px] leading-relaxed">
                Personalized financial planning for those who&rsquo;ve built something meaningful
                in one of America&rsquo;s fastest-growing economies. Serving Scottsdale, Phoenix,
                Paradise Valley, Tempe, and greater Arizona with $2M&ndash;$20M in investable assets.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8">
                <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                  Begin a Confidential Conversation
                </Button>
              </div>
              <p className="font-sans text-sm text-[#F7F4EE]/70 mt-5">
                Or call directly:{' '}
                <a
                  href="tel:+14809440880"
                  className="underline hover:text-[#1d7682] transition-colors"
                >
                  (480) 944-0880
                </a>
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ARIZONA MARKET CONTEXT ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">
            <div>
              <AnimateOnScroll>
                <SectionEyebrow text="THE ARIZONA OPPORTUNITY" />
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-6">
                  A Wealth Creation Engine That Demands Real Planning.
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="font-sans text-base text-[#333333] leading-[1.7] space-y-5">
                  <p>
                    The Phoenix metropolitan area isn&rsquo;t just growing. It is compounding.
                    With a flat 2.5% state income tax rate, no estate or inheritance tax, and a
                    booming economy driven by technology, healthcare, financial services, and
                    advanced manufacturing, Arizona has become one of the most attractive
                    wealth-building states in the country.
                  </p>
                  <p>
                    The tech corridor stretching from Tempe through Chandler and Gilbert is
                    drawing major employers and their executives, creating a population of clients
                    with concentrated stock positions, complex equity compensation packages, and
                    sudden-wealth planning needs. Meanwhile, communities like Scottsdale and
                    Paradise Valley continue to attract high-net-worth families from California
                    and other high-tax states.
                  </p>
                  <p>
                    But wealth creation without wealth management is just accumulation without
                    direction. The estate planning implications of Arizona community property law,
                    the complexity of business exits in a booming market. These are the
                    challenges that separate families who build lasting wealth from those who simply
                    earn a high income. That&rsquo;s where we come in.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="space-y-6">
              <AnimateOnScroll delay={200}>
                <div className="rounded-[16px] overflow-hidden relative aspect-[16/9]">
                  <Image
                    src="/couple-reviewing-strategy.webp"
                    alt="Arizona couple reviewing a personalized wealth management strategy with their financial advisor"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[16px] p-12 shadow-[0_8px_32px_rgba(27,42,74,0.06)]">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.value}
                      className={`py-6 ${index < stats.length - 1 ? 'border-b border-[#E8E6E1]' : ''}`}
                    >
                      <div className="font-serif text-[44px] font-bold text-[#1d7682]">
                        {stat.value}
                      </div>
                      <div className="font-sans text-sm text-[#333333]">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHO WE SERVE ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-[48px]">
            <AnimateOnScroll>
              <SectionEyebrow text="WHO WE SERVE IN ARIZONA" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 max-w-[720px] mx-auto">
                Financial Strategies Built for How Arizona Builds Wealth.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {clientCards.map((card, index) => (
              <AnimateOnScroll key={card.title} delay={200 + index * 100}>
                <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[48px_36px] h-full hover:shadow-card-hover hover:border-[#1d7682] hover:border-t-[3px] transition-all duration-200">
                  <card.icon className="w-[48px] h-[48px] text-[#1d7682] mb-6" />
                  <h3 className="font-serif text-[24px] font-semibold text-[#333333]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                    {card.body}
                  </p>
                  <Link
                    href={card.link.href}
                    className="inline-block font-sans text-sm font-semibold text-[#333333] hover:text-[#1d7682] transition-colors mt-5"
                  >
                    {card.link.text} <ArrowRight className="inline w-4 h-4 ml-1" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: ARIZONA-SPECIFIC SERVICES ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT WE DO IN ARIZONA" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 mb-12">
              Wealth Management Tailored to the Arizona Landscape.
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[720px]">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={200 + index * 80}>
                <div className="border-l-4 border-[#1d7682] pl-7 mb-12">
                  <h3 className="font-serif text-[24px] font-semibold text-[#333333]">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base text-[#333333] leading-[1.7] mt-3">
                    {service.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={700}>
            <p className="font-sans text-base text-[#5b6a71] mt-4 max-w-[720px]">
              Explore our full{' '}
              <Link
                href="/services"
                className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
              >
                service offerings
              </Link>{' '}
              or{' '}
              <Link
                href="/about"
                className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
              >
                learn about our team
              </Link>
              .
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 5: COMMUNITIES ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-[48px]">
            <AnimateOnScroll>
              <SectionEyebrow text="COMMUNITIES WE SERVE" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4">
                From Scottsdale to Chandler.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {communities.map((community, index) => (
              <AnimateOnScroll key={community.name} delay={200 + index * 75}>
                <div className="bg-[#F7F4EE] rounded-[12px] p-7">
                  <div className="font-serif text-[20px] font-semibold text-[#333333]">
                    {community.name}
                  </div>
                  <div className="font-sans text-caption text-[#5b6a71] mt-1">
                    {community.descriptor}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: TESTIMONIAL ─── */}
      <section className="bg-[#FAFAF8] section-padding text-center">
        <div className="max-w-[900px] mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="CLIENT PERSPECTIVE" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="font-serif text-[120px] text-[#1d7682]/15 leading-none mt-4">
              &ldquo;
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <blockquote className="font-serif text-[24px] font-normal italic text-[#333333] leading-relaxed max-w-[760px] mx-auto -mt-12">
              After 25 years building my medical practice in Scottsdale, I finally had a buyer, and
              absolutely no plan for what came next. They didn&rsquo;t just help me invest the proceeds.
              They helped me restructure my entire financial life: trusts for my kids, a tax
              strategy that saved us significantly on the sale, and an investment portfolio that
              actually lets me sleep at night.
            </blockquote>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p className="font-sans text-sm font-medium text-[#5b6a71] mt-8">
              &mdash; Sarah M., Scottsdale, AZ
            </p>
            <p className="font-sans text-caption text-[#5b6a71] mt-1">
              Business owner, client since 2024
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <p className="font-sans text-legal text-[#5b6a71]/60 mt-4 max-w-[600px] mx-auto">
              This testimonial reflects the individual experience of a current advisory client of
              Jay Chang at Farther Finance Advisors, LLC. It was provided voluntarily and without
              compensation. This client&rsquo;s experience may not be representative of other
              clients&rsquo; experiences, and the testimonial does not constitute a guarantee of
              future performance or results. Individual outcomes depend on each client&rsquo;s
              specific financial circumstances, goals, and market conditions.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 7: FAQ ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] text-center mb-12">
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>

          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll delay={100}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  What areas of Arizona do you serve?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  We serve families and business owners throughout the greater Phoenix
                  metropolitan area, including Scottsdale, Paradise Valley, Tempe, Phoenix,
                  Chandler, Gilbert, Mesa, and Fountain Hills. Based in Tempe, we also serve
                  clients across Arizona, California, and Nevada through a combination of
                  in-person meetings and our technology platform.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  I&rsquo;m a business owner in Arizona. When should I start planning for an exit?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Ideally, three to five years before you expect to sell or transition. The most
                  effective exit strategies require years of preparation: restructuring entities,
                  positioning assets for tax efficiency, and building a comprehensive post-sale
                  financial plan. The twelve to twenty-four months before a transaction close are
                  especially critical for maximizing after-tax proceeds.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  Does being in Arizona affect my wealth management strategy?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  Significantly. Arizona has a flat 2.5% state income tax rate and no estate or
                  inheritance tax. Arizona is also a community property state, which creates
                  meaningful estate planning implications, including the potential for a full
                  step-up in cost basis for surviving spouses. A thoughtful wealth strategy
                  accounts for both of these advantages.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  How is Personal Wealth Management at Farther different from large Arizona firms?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  You get a single dedicated advisor who knows your name, your family, and your
                  financial goals, backed by Farther&rsquo;s wealth management platform
                  for institutional-grade investment management, tax optimization, and reporting.
                  Unlike large wirehouses, we operate under a fiduciary standard with transparent
                  fees.
                </div>
              </details>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500}>
              <details className="border-b border-[#E8E6E1] group">
                <summary className="py-6 font-sans text-[17px] font-semibold text-[#333333] cursor-pointer list-none flex items-center justify-between">
                  Is Personal Wealth Management at Farther a fiduciary financial advisor in Arizona?
                  <ChevronDown className="w-5 h-5 text-[#1d7682] transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 font-sans text-base text-[#5b6a71] leading-[1.7]">
                  We are a fiduciary, meaning we are held to a legal standard to put your
                  interests first. Our advisory fee is based on a percentage of assets under
                  management. For complete details on fees and compensation, please refer to
                  our{' '}
                  <Link
                    href="/disclosures#fees"
                    className="text-[#1d7682] hover:text-[#155f69] transition-colors"
                  >
                    Form ADV Part 2A
                  </Link>
                  .
                </div>
              </details>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={500}>
            <p className="font-sans text-base text-[#5b6a71] text-center mt-12">
              We also serve families and business owners across{' '}
              <Link
                href="/services"
                className="text-[#1d7682] hover:text-[#155f69] transition-colors font-semibold"
              >
                California and Nevada <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 8: OFFICE & MAP ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR ARIZONA OFFICE" />
            <h2 className="font-serif text-h2-mobile md:text-h2 font-normal text-[#333333] mt-4 text-center heading-accent-center">
              Serving the Phoenix Metropolitan Area
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
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

            <AnimateOnScroll delay={200}>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-[24px] font-semibold text-[#333333] mb-6">
                  Tempe, Arizona
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Phone</p>
                    <a href="tel:+14809440880" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      (480) 944-0880
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Email</p>
                    <a href="mailto:jay.chang@farther.com" className="font-sans text-[17px] text-[#333333] hover:text-[#1d7682] transition-colors">
                      jay.chang@farther.com
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Hours</p>
                    <p className="font-sans text-[17px] text-[#333333]">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="font-sans text-[15px] text-[#5b6a71]">Evenings &amp; weekends by appointment</p>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1d7682] mb-1">Service Areas</p>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.7]">
                      Scottsdale &middot; Paradise Valley &middot; Tempe &middot; Phoenix &middot; Chandler &middot; Gilbert &middot; Mesa &middot; Fountain Hills
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="primary" href="https://meetings.hubspot.com/jay-chang1/farthercom">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CTA ─── */}
      <section className="bg-[#333333] section-padding text-center">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE] max-w-[800px] mx-auto leading-[1.2]">
              Arizona Is Where You and Your Wealth Live. Let&rsquo;s Build the Plan It Deserves.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5 leading-relaxed">
              Whether you&rsquo;re a business owner preparing for a transition, an executive
              managing equity compensation, or a family building wealth for the next generation,
              we&rsquo;d welcome the conversation. No obligation, no sales pitch. Just a
              thoughtful discussion about what your financial life could look like with the right
              plan behind it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-8">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Begin a Confidential Conversation
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-[24px] sm:gap-[40px] mt-8">
              <a
                href="tel:+14809440880"
                className="font-sans text-body-sm text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                (480) 944-0880
              </a>
              <a
                href="mailto:jay.chang@farther.com"
                className="font-sans text-body-sm text-[#F7F4EE]/70 hover:text-[#1d7682] transition-colors"
              >
                jay.chang@farther.com
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <Link
                href="/services"
                className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
              >
                About Your Advisor
              </Link>
              <Link
                href="/insights"
                className="font-sans text-sm text-[#F7F4EE]/60 hover:text-[#1d7682] transition-colors"
              >
                Insights
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
