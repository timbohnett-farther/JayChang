import type { Metadata } from 'next'
import { MessageCircle, Puzzle, ShieldCheck } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Robert Davenport | Private Wealth Management at Farther — Las Vegas & Dallas',
  description:
    'Meet Robert Davenport, wealth advisor serving families and business owners with $2M–$20M in Las Vegas, NV and Dallas, TX. Former Goldman Sachs Nevada Head of Office. Backed by Farther\'s $7B+ Intelligent Wealth Platform.',
  alternates: { canonical: 'https://www.privatewealthatfarther.com/about' },
  openGraph: {
    title: 'About Robert Davenport | Private Wealth Management at Farther',
    description:
      'Rob Davenport helps families and business owners in Las Vegas and Dallas build, protect, and transition wealth with personalized planning and institutional-grade technology.',
    type: 'profile',
    url: 'https://www.privatewealthatfarther.com/about',
  },
}

const pillars = [
  {
    icon: MessageCircle,
    title: 'Listen First, Plan Second.',
    body: 'Every family has a different definition of success. Before Rob builds a single recommendation, he needs to understand yours — your goals, your concerns, what keeps you up at night, and what gets you excited about the future.',
  },
  {
    icon: Puzzle,
    title: 'Coordinate Everything.',
    body: 'Your investments, tax strategy, estate plan, insurance, and business interests shouldn\u2019t live in separate silos. Rob works with your CPA, attorney, and other trusted advisors to build a financial picture where every piece reinforces the others.',
  },
  {
    icon: ShieldCheck,
    title: 'Stay Proactive, Not Reactive.',
    body: 'Markets shift. Tax laws change. Life happens. Rob doesn\u2019t wait for you to call with a question — he reaches out when something in your financial world needs attention. Regular reviews, proactive tax-loss harvesting, and strategies that evolve as your life does.',
  },
]

const timeline = [
  {
    year: 'PRESENT',
    title: 'Wealth Advisor, Private Wealth Management at Farther',
    firm: 'Las Vegas, NV & Dallas, TX',
  },
  {
    year: 'PREVIOUS',
    title: 'Nevada Head of Office, Goldman Sachs Personal Financial Management',
    firm: 'Las Vegas, NV',
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
  'AEP\u00AE — Accredited Estate Planner',
  'Certified Family Business Specialist',
  'Certificate in Business Succession Planning',
]

const affiliations = [
  'Las Vegas Metro Chamber',
  'Financial Planning Association',
  'Estate Planning Council',
]

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Robert Davenport',
      jobTitle: 'Wealth Advisor',
      description:
        'Wealth Advisor at Private Wealth Management at Farther, serving families and business owners with $2M–$20M in Las Vegas, NV and Dallas, TX. Former Nevada Head of Office for Goldman Sachs Personal Financial Management.',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'AIF\u00AE — Accredited Investment Fiduciary',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'AEP\u00AE — Accredited Estate Planner',
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
                <h1 className="font-serif text-[32px] md:text-[48px] font-bold text-[#1C2B3A] mt-4">
                  Robert Davenport
                </h1>
                <p className="font-sans text-base font-medium text-[#6B7A8D] mt-2 mb-8 whitespace-pre-line">
                  {'Wealth Advisor — Private Wealth Management at Farther\nLas Vegas, NV & Dallas, TX'}
                </p>
                <div className="font-sans text-[17px] text-[#1C2B3A] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Rob leads his Las Vegas-based team and oversees the strategy and execution
                    of his clients&rsquo; financial plans and portfolios. He brings together
                    fiduciary solutions to complex problems, carefully implements them, and
                    diligently monitors the strategy &mdash; enabling his clients to achieve
                    their goals and attain peace of mind.
                  </p>
                  <p>
                    Rob believes a legacy is defined by how you empower your family and business
                    today. Formerly the Nevada Head of Office for Goldman Sachs Personal Financial
                    Management, he holds a B.S. in Finance from the University of Nevada at Las Vegas
                    and an M.S. in Finance from the American College of Financial Services. As an
                    Accredited Investment Fiduciary&reg;, Accredited Estate Planner&reg;, and
                    Certified Family Business Specialist with a Certificate in Business Succession
                    Planning, he is dedicated to protecting the local community that raised him.
                  </p>
                  <p>
                    Today, Rob serves clients in{' '}
                    <a href="/las-vegas" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#B8962F] transition-colors">
                      Las Vegas
                    </a>{' '}
                    and{' '}
                    <a href="/dallas" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#B8962F] transition-colors">
                      Dallas
                    </a>{' '}
                    with $2&nbsp;million to $20&nbsp;million+ in investable assets. Whether
                    you&rsquo;re a business owner planning your next chapter, a professional
                    building toward retirement, or a family navigating a significant transition &mdash;
                    Rob builds strategies that reflect where you are and where you want to go.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-glacial rounded-[16px] aspect-[4/5] shadow-[0_12px_40px_rgba(27,42,74,0.12)] flex items-center justify-center">
                <span className="font-sans text-[17px] text-[#6B7A8D]">
                  Advisor Photo
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PHILOSOPHY — MY APPROACH ─── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <SectionEyebrow text="THE APPROACH" />
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#1C2B3A] mt-4">
              Three Principles That Guide Every Relationship.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <AnimateOnScroll key={pillar.title} delay={index * 150}>
                  <div className="bg-[#F7F4EE] rounded-[12px] p-[40px_32px] text-center hover:shadow-card-hover transition">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <h3 className="font-serif text-[22px] font-semibold text-[#1C2B3A]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#6B7A8D] leading-[1.65] mt-3">
                      {pillar.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>

          <AnimateOnScroll delay={500}>
            <p className="font-sans text-[17px] text-[#6B7A8D] leading-relaxed text-center max-w-[680px] mx-auto mt-14">
              As a fee-only fiduciary advisor, Rob doesn&rsquo;t earn commissions or
              third-party compensation. His only financial incentive is the growth
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
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#1C2B3A] mt-4">
              Experience That Translates to Better Outcomes.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16">
            {/* Timeline */}
            <AnimateOnScroll>
              <div className="border-l-2 border-[#C9A84C]/30 pl-8 space-y-10">
                {timeline.map((entry) => (
                  <div key={entry.year} className="relative">
                    <span className="absolute -left-[41px] top-[6px] w-3 h-3 rounded-full bg-[#C9A84C]" />
                    <p className="font-sans text-xs font-bold uppercase text-[#C9A84C] tracking-wider">
                      {entry.year}
                    </p>
                    <p className="font-sans text-base font-semibold text-[#1C2B3A] mt-1">
                      {entry.title}
                    </p>
                    {entry.firm && (
                      <p className="font-sans text-sm text-[#6B7A8D]">{entry.firm}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Credentials */}
            <AnimateOnScroll delay={200}>
              <div>
                <h3 className="font-serif text-[22px] font-semibold text-[#1C2B3A] mb-5">
                  Professional Credentials
                </h3>
                <div className="flex flex-wrap gap-3">
                  {credentials.map((cred) => (
                    <span
                      key={cred}
                      className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-full px-5 py-2.5 font-sans text-sm font-medium text-[#1C2B3A]"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="font-serif text-[22px] font-semibold text-[#1C2B3A] mb-4">
                    Professional Affiliations
                  </h3>
                  <ul className="space-y-2">
                    {affiliations.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[15px] text-[#1C2B3A] leading-[2] flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
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
      <section className="bg-[#0A1628] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-[680px] mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-serif text-[24px] font-semibold text-[#C9A84C] tracking-wider">
              FARTHER
            </p>
            <h2 className="font-serif text-[36px] font-semibold text-[#F7F4EE] mt-6">
              Why Farther?
            </h2>
            <div className="font-sans text-[17px] text-[#F7F4EE]/90 leading-[1.7] text-center mt-8 space-y-5">
              <p>
                Rob chose to build his practice at Farther because it lets him do what he does
                best &mdash; work with clients &mdash; without the limitations of a traditional firm.
              </p>
              <p>
                Farther&rsquo;s Intelligent Wealth Platform gives his clients access to
                institutional-grade investment strategies, AI-powered financial planning, and a
                fully integrated view of their financial lives. It&rsquo;s the infrastructure of
                a $7&nbsp;billion firm with the personal attention of a dedicated advisor.
              </p>
              <p>
                That combination &mdash; personal relationship plus platform power &mdash; is
                why his clients stay. And it&rsquo;s why Rob can spend the vast majority of his
                time on what actually matters: you.
              </p>
            </div>
            <a
              href="https://www.farther.com"
              target="_blank"
              rel="noopener"
              className="inline-block mt-8 font-sans text-[15px] text-[#C9A84C] hover:text-[#F7F4EE] transition-colors"
            >
              Learn more about Farther &rarr;
            </a>
            <span className="mx-3 text-[#F7F4EE]/30">|</span>
            <a
              href="https://www.linkedin.com/in/robertdavenport7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-sans text-[15px] text-[#C9A84C] hover:text-[#F7F4EE] transition-colors"
            >
              Connect with Rob on LinkedIn &rarr;
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
                <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#1C2B3A] mt-4 mb-8">
                  A Few Things About Me.
                </h2>
                <div className="font-sans text-[17px] text-[#1C2B3A] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Born and raised in Las Vegas, Rob is a sports enthusiast who enjoys traveling
                    and spending time with his young family. Whether it&rsquo;s exploring the trails
                    around Red Rock Canyon or cheering on the Knights, he&rsquo;s deeply rooted in
                    the community he serves.
                  </p>
                  <p>
                    Rob believes the best advisor-client relationships go beyond spreadsheets and
                    statements. When he understands what matters to you outside of your portfolio, he
                    can build a plan that actually reflects the life you want to live.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-glacial rounded-[16px] aspect-[4/3] flex items-center justify-center">
                <span className="font-sans text-[17px] text-[#6B7A8D]">
                  Personal Photo
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CTA ─── */}
      <section className="bg-[#0A1628] section-padding text-center">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <h2 className="font-serif text-[30px] md:text-[44px] font-semibold text-[#F7F4EE]">
              The Best Financial Plans Start with a Conversation.
            </h2>
            <p className="font-sans text-[17px] text-[#F7F4EE]/85 max-w-[620px] mx-auto mt-5">
              Rob works with a select number of families and business owners in{' '}
              <a href="/las-vegas" className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
                Las Vegas
              </a>{' '}
              and{' '}
              <a href="/dallas" className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
                Dallas
              </a>
              . If you&rsquo;re looking for a more proactive, coordinated approach to your
              financial life &mdash; he&rsquo;d welcome the chance to learn about your goals.
            </p>
            <div className="mt-10">
              <Button href="/schedule-consultation" variant="primary">
                Schedule a Conversation
              </Button>
            </div>
            <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
              Prefer to call?{' '}
              <a
                href="tel:+15550000000"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                (555) 000-0000
              </a>{' '}
              &middot; Or email{' '}
              <a
                href="mailto:robert.davenport@farther.com"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                robert.davenport@farther.com
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
