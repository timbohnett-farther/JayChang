import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle, Puzzle, ShieldCheck } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { FartherIcon } from '@/components/FartherLogo'

export const metadata: Metadata = {
  title: 'About Tim Bohnett | Private Wealth Management at Farther — Dallas & Las Vegas',
  description:
    'Meet Tim Bohnett, Managing Director serving families and business owners with $2M–$20M in Dallas, TX and Las Vegas, NV. Former Regional Branch Executive — UHNW at Charles Schwab & Co.',
  alternates: { canonical: 'https://www.privatewealthatfarther.com/about' },
  openGraph: {
    title: 'About Tim Bohnett | Private Wealth Management at Farther',
    description:
      'Tim Bohnett helps families and business owners in Dallas and Las Vegas build, protect, and transition wealth with personalized planning and institutional-grade technology.',
    type: 'profile',
    url: 'https://www.privatewealthatfarther.com/about',
  },
}

const pillars = [
  {
    icon: MessageCircle,
    title: 'Listen First, Plan Second.',
    body: 'Every family has a different definition of success. Before Tim builds a single recommendation, he needs to understand yours — your goals, your concerns, what keeps you up at night, and what gets you excited about the future.',
  },
  {
    icon: Puzzle,
    title: 'Coordinate Everything.',
    body: 'Your investments, tax strategy, estate plan, insurance, and business interests shouldn\u2019t live in separate silos. Tim works with your CPA, attorney, and other trusted advisors to build a financial picture where every piece reinforces the others.',
  },
  {
    icon: ShieldCheck,
    title: 'Stay Proactive, Not Reactive.',
    body: 'Markets shift. Tax laws change. Life happens. Tim doesn\u2019t wait for you to call with a question — he reaches out when something in your financial world needs attention. Regular reviews, proactive tax-loss harvesting, and strategies that evolve as your life does.',
  },
]

const timeline = [
  {
    year: 'PRESENT',
    title: 'Managing Director, Private Wealth Management at Farther',
    firm: 'Dallas, TX & Las Vegas, NV',
  },
  {
    year: 'PREVIOUS',
    title: 'Regional Branch Executive — UHNW, Charles Schwab & Co.',
    firm: '',
  },
  {
    year: 'EDUCATION',
    title: 'M.S. Finance — American College of Financial Services',
    firm: '',
  },
  {
    year: '',
    title: 'B.S. Finance — University of Nevada, Las Vegas',
    firm: '',
  },
]

const credentials = [
  'AIF\u00AE — Accredited Investment Fiduciary',
]

const affiliations = [
  'Financial Planning Association',
]

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Tim Bohnett',
      jobTitle: 'Managing Director',
      description:
        'Managing Director at Private Wealth Management at Farther, serving families and business owners with $2M–$20M in Dallas, TX and Las Vegas, NV. Former Regional Branch Executive — UHNW at Charles Schwab & Co.',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'AIF\u00AE — Accredited Investment Fiduciary',
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Private Wealth Management at Farther',
        url: 'https://www.privatewealthatfarther.com',
      },
      workLocation: [
        {
          '@type': 'Place',
          name: 'Dallas, TX',
        },
        {
          '@type': 'Place',
          name: 'Las Vegas, NV',
        },
      ],
      url: 'https://www.privatewealthatfarther.com/about',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── SECTION 1: HERO — ADVISOR INTRODUCTION ─── */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="MEET YOUR ADVISOR" />
                <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#333333] mt-4">
                  Tim Bohnett
                </h1>
                <p className="font-sans text-base font-medium text-[#5b6a71] mt-2 mb-8 whitespace-pre-line">
                  {'Managing Director — Private Wealth Management at Farther\nDallas, TX & Las Vegas, NV'}
                </p>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Tim Bohnett is a Managing Director at Farther, a leading technology-forward
                    wealth management firm. With more than 15 years of financial services experience,
                    Tim focuses on helping high-net-worth families, business owners, and successful
                    individuals build and preserve generational wealth through personalized strategies.
                  </p>
                  <p>
                    Before joining Farther, Tim served as Regional Branch Executive &mdash; UHNW at
                    Charles Schwab &amp; Co., where he led multi-state operations and built deep
                    expertise in complex wealth management for high-net-worth and ultra-high-net-worth
                    client relationships.
                  </p>
                  <p>
                    Tim serves clients in{' '}
                    <a href="/las-vegas" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
                      Las Vegas
                    </a>{' '}
                    and{' '}
                    <a href="/dallas" className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors">
                      Dallas
                    </a>{' '}
                    with $2&nbsp;million to $20&nbsp;million+ in investable assets. Whether
                    you&rsquo;re a business owner planning your next chapter, a professional
                    building toward retirement, or a family navigating a significant transition &mdash;
                    Tim builds strategies that reflect where you are and where you want to go.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="rounded-[16px] aspect-[4/5] shadow-[0_12px_40px_rgba(27,42,74,0.12)] overflow-hidden relative">
                <Image
                  src="/advisor-headshot.jpeg"
                  alt="Tim Bohnett, Managing Director"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1.5: THE TEAM ─── */}
      <section className="bg-[#FAFAF8] py-[64px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <SectionEyebrow text="THE TEAM" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4">
              A Team-Based Practice, Not a Solo Advisor.
            </h2>
            <p className="font-sans text-[17px] text-[#5b6a71] leading-relaxed max-w-[620px] mx-auto mt-5">
              Tim leads a dedicated team backed by Farther&rsquo;s full institutional platform &mdash;
              ensuring every client benefits from coordinated expertise across investments, planning,
              tax strategy, and estate design.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tim Bohnett', role: 'Managing Director', credentials: 'AIF\u00AE' },
              { name: 'Todd Kitzens', role: 'Team Member', credentials: '' },
              { name: 'Andrew Plax', role: 'Team Member', credentials: '' },
              { name: 'Matthew Jobe', role: 'Team Member', credentials: '' },
            ].map((member) => (
              <AnimateOnScroll key={member.name}>
                <div className="bg-[#F7F4EE] rounded-[12px] p-[32px] text-center border border-[#E8E6E1]">
                  <div className="w-16 h-16 rounded-full bg-[#1d7682]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-[24px] text-[#1d7682]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-serif text-[18px] font-semibold text-[#333333]">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm text-[#5b6a71] mt-1">{member.role}</p>
                  {member.credentials && (
                    <p className="font-sans text-xs text-[#1d7682] mt-2">{member.credentials}</p>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={300}>
            <p className="font-sans text-[15px] text-[#5b6a71] text-center mt-8 max-w-[560px] mx-auto">
              Tim&rsquo;s team includes Certified Financial Planner&reg; (CFP&reg;) professionals,
              ensuring every client benefits from credentialed financial planning expertise alongside
              Tim&rsquo;s specialized focus in fiduciary investment management, estate planning, and
              business succession.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 2: PHILOSOPHY — MY APPROACH ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <SectionEyebrow text="THE APPROACH" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4">
              Three Principles That Guide Every Relationship.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <AnimateOnScroll key={pillar.title} delay={index * 150}>
                  <div className="bg-[#F7F4EE] rounded-[12px] p-[40px_32px] text-center hover:shadow-card-hover transition">
                    <div className="w-12 h-12 rounded-full bg-[#1d7682] flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-[#333333]" />
                    </div>
                    <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#5b6a71] leading-[1.65] mt-3">
                      {pillar.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>

          <AnimateOnScroll delay={500}>
            <p className="font-sans text-[17px] text-[#5b6a71] leading-relaxed text-center max-w-[680px] mx-auto mt-14">
              As a fiduciary advisor at an SEC-registered investment adviser, Tim is held to a
              legal standard to put your interests first. His only financial incentive is the growth
              and preservation of your wealth &mdash; which is exactly how it should be.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 3: CREDENTIALS — BACKGROUND ─── */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="mb-14">
            <SectionEyebrow text="BACKGROUND" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4">
              Experience That Informs Better Planning.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16">
            {/* Timeline */}
            <AnimateOnScroll>
              <div className="border-l-2 border-[#1d7682]/30 pl-8 space-y-10">
                {timeline.map((entry) => (
                  <div key={entry.year} className="relative">
                    <span className="absolute -left-[41px] top-[6px] w-3 h-3 rounded-full bg-[#1d7682]" />
                    <p className="font-sans text-xs font-bold uppercase text-[#1d7682] tracking-wider">
                      {entry.year}
                    </p>
                    <p className="font-sans text-base font-semibold text-[#333333] mt-1">
                      {entry.title}
                    </p>
                    {entry.firm && (
                      <p className="font-sans text-sm text-[#5b6a71]">{entry.firm}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Credentials */}
            <AnimateOnScroll delay={200}>
              <div>
                <h3 className="font-serif text-[22px] font-semibold text-[#333333] mb-5">
                  Professional Credentials
                </h3>
                <div className="flex flex-wrap gap-3">
                  {credentials.map((cred) => (
                    <span
                      key={cred}
                      className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-full px-5 py-2.5 font-sans text-sm font-medium text-[#333333]"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="font-serif text-[22px] font-semibold text-[#333333] mb-4">
                    Professional Affiliations
                  </h3>
                  <ul className="space-y-2">
                    {affiliations.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[15px] text-[#333333] leading-[2] flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#1d7682] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE FARTHER RELATIONSHIP ─── */}
      <section className="bg-[#333333] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-[680px] mx-auto text-center">
          <AnimateOnScroll>
            <FartherIcon variant="cream" size={48} className="mx-auto" />
            <h2 className="font-serif text-[36px] font-semibold text-[#F7F4EE] mt-6">
              Why Farther?
            </h2>
            <div className="font-sans text-[17px] text-[#F7F4EE]/90 leading-[1.7] text-center mt-8 space-y-5">
              <p>
                Tim chose to build his practice at Farther because it lets him do what he does
                best &mdash; work with clients &mdash; without the limitations of a traditional firm.
              </p>
              <p>
                Farther is a technology-forward wealth management firm serving clients through
                more than 500 advisor partners nationwide.
              </p>
              <p>
                Farther&rsquo;s wealth management platform gives his clients access to
                institutional-grade investment strategies, technology-powered financial planning, and a
                fully integrated view of their financial lives. Clients gain a clear, unified view
                of their entire financial picture through a single login, while advisors like Tim
                are equipped with advanced tools to build personalized, tax-optimized portfolios.
              </p>
              <p>
                That combination &mdash; personal relationship plus platform power &mdash; is
                why his clients stay. And it&rsquo;s why Tim can spend the vast majority of his
                time on what actually matters: you.
              </p>
            </div>

            {/* Accolades grid */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-[400px] mx-auto">
              {[
                { stat: '$7B+', label: 'Firm-Wide AUM' },
                { stat: '500+', label: 'Advisors on Platform' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-sans text-[28px] text-[#1d7682]">{item.stat}</p>
                  <p className="font-sans text-[10px] font-medium text-[#F7F4EE]/60 tracking-[0.1em] uppercase mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-left max-w-[540px] mx-auto">
              {[
                'Financial Planning',
                'Investments & Portfolio Management',
                'Tax Optimization',
                'Retirement Planning',
                'Trust & Estate Planning',
                '401(k) & Retirement Plans',
                'Alternative Investments',
                'Institutional Services',
                'Generational Wealth Planning',
              ].map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#1d7682] shrink-0" />
                  <span className="font-sans text-[13px] text-[#F7F4EE]/80">{service}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-[14px] font-semibold text-[#1d7682] mt-6">
              All included within your advisory relationship.
            </p>
            <a
              href="https://www.farther.com"
              target="_blank"
              rel="noopener"
              className="inline-block mt-8 font-sans text-[15px] text-[#1d7682] hover:text-[#F7F4EE] transition-colors"
            >
              Learn more about Farther &rarr;
            </a>
            <span className="mx-3 text-[#F7F4EE]/30">|</span>
            <a
              href="https://www.linkedin.com/in/timbohnett"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-sans text-[15px] text-[#1d7682] hover:text-[#F7F4EE] transition-colors"
            >
              Connect with Tim on LinkedIn &rarr;
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 5: PERSONAL SIDE ─── */}
      <section className="bg-[#FAFAF8] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <SectionEyebrow text="BEYOND THE OFFICE" />
                <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4 mb-8">
                  A Few Things About Me.
                </h2>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Tim believes the best advisor-client relationships go beyond spreadsheets and
                    statements. When he understands what matters to you outside of your portfolio, he
                    can build a plan that actually reflects the life you want to live.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/advisor-portrait.jpeg"
                  alt="Tim Bohnett in office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CTA ─── */}
      <section className="bg-[#333333] section-padding text-center">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE]">
              The Best Financial Plans Start with a Conversation.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5">
              Tim works with a select number of families and business owners in{' '}
              <a href="/las-vegas" className="underline underline-offset-2 hover:text-[#1d7682] transition-colors">
                Las Vegas
              </a>{' '}
              and{' '}
              <a href="/dallas" className="underline underline-offset-2 hover:text-[#1d7682] transition-colors">
                Dallas
              </a>
              . If you&rsquo;re looking for a more proactive, coordinated approach to your
              financial life &mdash; he&rsquo;d welcome the chance to learn about your goals.
            </p>
            <div className="mt-10">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Conversation
              </Button>
            </div>
            <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
              Prefer to call?{' '}
              <a
                href="tel:+17252384291"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                (725) 238-4291
              </a>{' '}
              &middot; Or email{' '}
              <a
                href="mailto:advisor@privatewealthatfarther.com"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                advisor@privatewealthatfarther.com
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
