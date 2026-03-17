import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle, Puzzle, ShieldCheck } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { FartherIcon } from '@/components/FartherLogo'

export const metadata: Metadata = {
  title: 'About Jay Chang | Personal Wealth Management at Farther — Arizona, California & Nevada',
  description:
    'Meet Jay Chang, VP, Wealth Advisor serving individuals, families, and business owners in Arizona, California, and Nevada. Former VP, Financial Consultant at Charles Schwab. Backed by Farther\'s $15B+ Intelligent Wealth Platform.',
  alternates: { canonical: 'https://www.PWM-Farther.com/about' },
  openGraph: {
    title: 'About Jay Chang | Personal Wealth Management at Farther',
    description:
      'Jay Chang helps individuals, families, and business owners in Arizona, California, and Nevada build, protect, and grow wealth with personalized planning and institutional-grade technology.',
    type: 'profile',
    url: 'https://www.PWM-Farther.com/about',
  },
}

const pillars = [
  {
    icon: MessageCircle,
    title: 'Listen First, Plan Second.',
    body: 'Every family has a different definition of success. Before Jay builds a single recommendation, he needs to understand yours — your goals, your concerns, what keeps you up at night, and what gets you excited about the future.',
  },
  {
    icon: Puzzle,
    title: 'Coordinate Everything.',
    body: 'Your investments, tax strategy, estate plan, insurance, and business interests shouldn\u2019t live in separate silos. Jay works with your CPA, attorney, and other trusted advisors to build a financial picture where every piece reinforces the others.',
  },
  {
    icon: ShieldCheck,
    title: 'Stay Proactive, Not Reactive.',
    body: 'Markets shift. Tax laws change. Life happens. Jay doesn\u2019t wait for you to call with a question — he reaches out when something in your financial world needs attention. Regular reviews, proactive tax-loss harvesting, and strategies that evolve as your life does.',
  },
]

const timeline = [
  {
    year: 'PRESENT',
    title: 'VP, Wealth Advisor, Personal Wealth Management at Farther',
    firm: 'Arizona, California & Nevada',
  },
  {
    year: 'PREVIOUS',
    title: 'VP, Financial Consultant — Charles Schwab',
    firm: '',
  },
  {
    year: '',
    title: 'Vanguard',
    firm: '',
  },
  {
    year: 'EDUCATION',
    title: 'Master\u2019s Degree — Arizona State University',
    firm: '',
  },
  {
    year: '',
    title: 'Bachelor of Applied Science — Arizona State University',
    firm: '',
  },
]

const credentials = [
  'Wealth Management Professional',
  'Retirement Income Planning Specialist',
  'Investment Strategy & Tax Planning',
]

const affiliations = [
  'Association of Fundraising Professionals (AFP), Greater Arizona Chapter',
  'Financial Planning Association',
]

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Jay Chang',
      jobTitle: 'VP, Wealth Advisor',
      description:
        'VP, Wealth Advisor at Personal Wealth Management at Farther, serving individuals, families, and business owners in Arizona, California, and Nevada. Former VP, Financial Consultant at Charles Schwab.',
      image: 'https://www.PWM-Farther.com/IMG_0138.png',
      hasCredential: [],
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'Charles Schwab',
          description: 'VP, Financial Consultant',
        },
        {
          '@type': 'Organization',
          name: 'Vanguard',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Arizona State University',
          department: 'Bachelor of Applied Science / Master\u2019s Degree',
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Farther Finance Advisors LLC',
        url: 'https://www.farther.com',
        alternateName: 'Personal Wealth Management at Farther',
      },
      workLocation: [
        {
          '@type': 'Place',
          name: 'Arizona',
        },
        {
          '@type': 'Place',
          name: 'California',
        },
        {
          '@type': 'Place',
          name: 'Nevada',
        },
      ],
      knowsAbout: [
        'Wealth Management',
        'Financial Planning',
        'Tax Optimization',
        'Estate Planning',
        'Retirement Planning',
        'Business Succession Planning',
        'Investment Management',
        'Alternative Investments',
        'Retirement Income Planning',
        'Wealth Building',
        'Equity Compensation Strategies',
        'Multi-Generational Wealth Transfer',
      ],
      sameAs: [
        'https://www.linkedin.com/in/jaychang480',
        'https://brokercheck.finra.org/individual/summary/6244488',
        'https://adviserinfo.sec.gov/firm/summary/302050',
        'https://www.farther.com',
      ],
      url: 'https://www.PWM-Farther.com/about',
    },
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'About', href: '/about' }]} />
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
                  Jay Chang
                </h1>
                <p className="font-sans text-base font-medium text-[#5b6a71] mt-2 mb-8 whitespace-pre-line">
                  {'VP, Wealth Advisor — Personal Wealth Management at Farther\nArizona, California & Nevada'}
                </p>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Jay Chang is a VP, Wealth Advisor at Farther,
                    where he brings clarity and thoughtful guidance to help individuals and families
                    navigate their financial lives with confidence across Arizona, California, and Nevada.
                  </p>
                  <p>
                    Jay specializes in simplifying retirement income planning, investment strategy,
                    tax planning, and wealth building &mdash; working with professionals, business owners,
                    and families across all wealth stages.
                  </p>
                  <p>
                    Before joining Farther, Jay served as VP, Financial Consultant at Charles Schwab
                    and held positions at Vanguard. His entrepreneurial background in real estate,
                    retail, and e-commerce rounds out his perspective on building and protecting wealth.
                  </p>
                  <p>
                    Jay holds a Bachelor of Applied Science and a Master&rsquo;s degree from
                    Arizona State University. He is a member of the Association of Fundraising
                    Professionals (AFP), Greater Arizona Chapter.
                  </p>
                  <p className="font-sans text-[15px] text-[#5b6a71] italic">
                    He believes a legacy is defined by how you empower your family and business
                    today &mdash; not just what you leave behind.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="rounded-[16px] aspect-[4/5] shadow-[0_12px_40px_rgba(27,42,74,0.12)] overflow-hidden relative">
                <Image
                  src="/advisor-headshot.webp"
                  alt="Jay Chang, VP, Wealth Advisor at Farther, serving families in Arizona, California, and Nevada"
                  title="Jay Chang — Senior Wealth Advisor, Personal Wealth Management at Farther"
                  fill
                  className="object-cover object-top"
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
              Jay leads a dedicated team backed by Farther&rsquo;s full institutional platform &mdash;
              ensuring every client benefits from coordinated expertise across investments, planning,
              tax strategy, and estate design.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Jay Chang', role: 'VP, Wealth Advisor', credentials: '', email: 'jay.chang@farther.com', phone: '(480) 944-0880', photo: '/advisor-headshot.webp' },
              { name: 'Todd Kitzens', role: 'Wealth Advisor', credentials: '', email: 'todd.kitzens@farther.com', phone: '(949) 241-7280', photo: '/todd-kitzens-headshot.webp' },
              { name: 'Andrew Plax', role: 'Senior Client Experience Associate', credentials: '', email: 'andrew.plax@farther.com', phone: '(314) 677-9920', photo: '/andrew-plax-headshot.webp' },
              { name: 'Jordan Phillips', role: 'Wealth Planner', credentials: '', email: 'jordan.phillips@farther.com', phone: '', photo: '/jordan-phillips-headshot.webp' },
              { name: 'Matthew Jobe', role: 'Client Experience Associate', credentials: '', email: 'matthew.jobe@farther.com', phone: '', photo: '/matthew-jobe-headshot.webp' },
            ].map((member) => (
              <AnimateOnScroll key={member.name}>
                <div className="bg-[#F7F4EE] rounded-[12px] p-[32px] text-center border border-[#E8E6E1]">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 relative">
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Farther wealth management`}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="font-serif text-[18px] font-semibold text-[#333333]">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm text-[#5b6a71] mt-1">{member.role}</p>
                  {member.credentials && (
                    <p className="font-sans text-xs text-[#1d7682] mt-2">{member.credentials}</p>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/[^+\d]/g, '')}`}
                      className="font-sans text-xs text-[#5b6a71] hover:text-[#1d7682] transition-colors mt-2 block"
                    >
                      {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="font-sans text-xs text-[#5b6a71] hover:text-[#1d7682] transition-colors mt-1 block break-all"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={300}>
            <p className="font-sans text-[15px] text-[#5b6a71] text-center mt-8 max-w-[560px] mx-auto">
              Jay&rsquo;s team includes Certified Financial Planner&reg; (CFP&reg;) professionals,
              ensuring every client benefits from credentialed financial planning expertise alongside
              Jay&rsquo;s specialized focus in retirement income planning, investment strategy, and
              wealth building.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── SECTION 1.75: TODD KITZENS BIO ─── */}
      <section className="bg-[#F7F4EE] py-[64px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">
            <AnimateOnScroll>
              <div className="rounded-[16px] aspect-[4/5] shadow-[0_12px_40px_rgba(27,42,74,0.12)] overflow-hidden relative bg-[#E8E6E1]">
                <Image
                  src="/todd-kitzens-headshot.webp"
                  alt="Todd Kitzens, Wealth Advisor at Farther serving families and business owners"
                  title="Todd Kitzens — Wealth Advisor, Personal Wealth Management at Farther"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div>
                <SectionEyebrow text="ABOUT TODD" />
                <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#333333] mt-4">
                  Todd Kitzens
                </h2>
                <p className="font-sans text-base font-medium text-[#5b6a71] mt-2 mb-8">
                  Wealth Advisor &mdash; Dallas, TX
                </p>
                <div className="font-sans text-[17px] text-[#333333] leading-[1.7] max-w-[560px] space-y-5">
                  <p>
                    Todd brings a relationship-first mindset to wealth advising, helping clients
                    navigate their financial lives with clarity, purpose, and personalized strategy.
                    He combines deep listening with thoughtful planning to support individuals and
                    families in making financial decisions that align with their goals and values.
                  </p>
                  <p>
                    Before transitioning to financial advising, Todd spent nearly a decade in the
                    Automotive and Powersports industries, where he built a foundation in brand strategy,
                    storytelling, and client engagement. He earned his degree from the University of
                    Arizona&rsquo;s Eller College of Management and made the shift to wealth management
                    to pursue more meaningful, lasting impact through one-on-one relationships.
                  </p>
                  <p>
                    Originally from Newport Beach, California, Todd now lives in Dallas, Texas. Outside
                    of work, he enjoys time on the lake, playing golf, and making the most of the
                    outdoors with friends and family.
                  </p>
                </div>
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
                      <Icon className="w-6 h-6 text-[#F7F4EE]" />
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
              As a fiduciary advisor, Jay doesn&rsquo;t earn commissions or
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
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[#333333] mt-4">
              Experience That Translates to Better Outcomes.
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
                Jay chose to build his practice at Farther because it lets him do what he does
                best &mdash; work with clients &mdash; without the limitations of a traditional firm.
              </p>
              <p>
                Farther is the #1 fastest-growing financial services firm in America, ranked #8
                overall on the 2025 Inc. 5000 with 11,968% revenue growth over three years.
                Named the #1 fastest-growing fintech by Deloitte and WealthTech of the Year at the
                2024 U.S. FinTech Awards, Farther has surpassed $15&nbsp;billion in recruited assets
                and serves clients through 276 advisor partners nationwide.
              </p>
              <p>
                Farther&rsquo;s Intelligent Wealth Platform gives his clients access to
                institutional-grade investment strategies, technology-powered financial planning, and a
                fully integrated view of their financial lives. Clients gain a clear, unified view
                of their entire financial picture through a single login, while advisors like Jay
                are equipped with advanced tools to build personalized, tax-optimized portfolios.
              </p>
              <p>
                That combination &mdash; personal relationship plus platform power &mdash; is
                why his clients stay. And it&rsquo;s why Jay can spend the vast majority of his
                time on what actually matters: you.
              </p>
            </div>

            {/* Accolades grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-[600px] mx-auto">
              {[
                { stat: '#1', label: 'Inc. 5000 Financial Services' },
                { stat: '#8', label: 'Inc. 5000 Overall' },
                { stat: '$15B+', label: 'Assets Under Management' },
                { stat: '276', label: 'Advisor Partners' },
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
              href="https://www.linkedin.com/in/jaychang480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-sans text-[15px] text-[#1d7682] hover:text-[#F7F4EE] transition-colors"
            >
              Connect with Jay on LinkedIn &rarr;
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
                    Outside the office, Jay enjoys time with his family traveling, woodworking,
                    and exploring the unpaved roads of Arizona. He&rsquo;s deeply rooted in
                    the communities he serves across Arizona, California, and Nevada.
                  </p>
                  <p>
                    Jay believes the best advisor-client relationships go beyond spreadsheets and
                    statements. When he understands what matters to you outside of your portfolio, he
                    can build a plan that actually reflects the life you want to live.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="rounded-[16px] aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/advisor-portrait.webp"
                  alt="Jay Chang in his office, wealth advisor for individuals and families in Arizona, California, and Nevada"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5.5: CLIENT TESTIMONIALS ─── */}
      <section className="bg-[#F7F4EE] py-[80px] px-[80px] lg:px-[80px] md:px-[40px] max-md:px-[20px]">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="PERSPECTIVES FROM THE FAMILIES WE SERVE" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
              What Our Clients Say.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                quote:
                  'I spent twenty years building my business, and selling it was the most financially complex decision of my life. I needed someone who understood what it meant to go from a single illiquid asset to a diversified portfolio \u2014 and the tax implications of getting that wrong. Jay and his team coordinated with my CPA and attorney before the transaction even closed, and by the time proceeds hit, we already had a strategy in place. The tax-loss harvesting and asset location work they\u2019ve done since has been exceptional. I didn\u2019t just need an investment manager \u2014 I needed a quarterback. That\u2019s exactly what I got.',
                name: 'David R.',
                location: 'Phoenix, AZ',
                profile: 'Business Owner, Post-Exit',
                disclosure:
                  'David R. is a current client of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects David R.\u2019s individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the person providing this testimonial. Investing involves risk, including the potential loss of principal. Past performance and individual client experiences are not indicative of future results.',
              },
              {
                quote:
                  'When my husband passed away, I inherited a financial life I hadn\u2019t been involved in \u2014 insurance policies, retirement accounts across three custodians, a rental property, and trusts I didn\u2019t fully understand. I was overwhelmed, and I was terrified of making a mistake. Jay didn\u2019t rush me. He spent our first several meetings just listening and helping me understand what I had before suggesting we change anything. That patience meant everything. Now I can see my entire financial picture in one place through Farther\u2019s platform, and I actually understand it. For the first time in two years, I feel in control of my future.',
                name: 'Linda K.',
                location: 'Scottsdale, AZ',
                profile: 'Surviving Spouse',
                disclosure:
                  'Linda K. is a current client of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects Linda K.\u2019s individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the person providing this testimonial. Farther Finance Advisors LLC does not provide legal or tax advice; clients are encouraged to consult their own legal and tax professionals.',
              },
              {
                quote:
                  'Moving from the Bay Area to Las Vegas wasn\u2019t just a lifestyle decision \u2014 it was a financial strategy. But the execution was far more complicated than we expected. We had RSUs vesting on a schedule, California-source income that doesn\u2019t just disappear when you cross the border, and a trust that needed to be restructured for Nevada\u2019s favorable laws. Jay mapped out a timeline that coordinated our move date with vesting schedules, property transactions, and domicile documentation. The difference in how much tax we saved in the first year alone justified the move.',
                name: 'Michael & Jennifer P.',
                location: 'Las Vegas, NV',
                profile: 'CA-to-NV Relocation',
                disclosure:
                  'Michael and Jennifer P. are current clients of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects their individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the persons providing this testimonial. Tax savings referenced reflect this client\u2019s specific circumstances; individual results vary based on personal tax situations. Farther Finance Advisors LLC does not provide tax or legal advice.',
              },
              {
                quote:
                  'I\u2019m a surgeon. I\u2019ve been earning well for nearly a decade, but honestly, most of my savings were sitting in cash and a few index funds I picked myself in residency. I knew I was leaving money on the table \u2014 especially on taxes \u2014 but every advisor I talked to either treated me like I was too small to matter or gave me a cookie-cutter 60/40 pitch. Jay took the time to understand where I am and where I\u2019m headed. We built a strategy that accounts for my practice income, my deferred comp plan, a backdoor Roth ladder, and real estate I want to acquire. For the first time, I feel like my money is actually working as hard as I am.',
                name: 'Dr. Priya S.',
                location: 'Tempe, AZ',
                profile: 'High-Earning Professional',
                disclosure:
                  'Dr. Priya S. is a current client of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects Dr. Priya S.\u2019s individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the person providing this testimonial. References to specific investment strategies reflect this client\u2019s personal financial situation and should not be construed as investment advice or a recommendation.',
              },
              {
                quote:
                  'Our family\u2019s wealth spans three generations, two businesses, a charitable foundation, and more opinions than I can count. Before Jay, we had different advisors for different accounts, no coordination between them, and holiday dinners that turned into arguments about money. Jay helped us build something we\u2019d never had \u2014 a unified family wealth plan. The trust structures are now aligned with our philanthropic goals, the investment strategy is consistent across entities, and every family member has access to Farther\u2019s dashboard so they can see how their piece fits into the whole. We\u2019ve gone from financial chaos to clarity.',
                name: 'The Harrington Family',
                location: 'Southlake, TX',
                profile: 'Multi-Generational Wealth',
                disclosure:
                  'The Harrington Family are current clients of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects the Harrington Family\u2019s individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the persons providing this testimonial. References to trust structures and charitable planning reflect this client\u2019s personal circumstances. Farther Finance Advisors LLC does not provide legal or tax advice.',
              },
              {
                quote:
                  'After thirty-two years as a public company executive, my financial life had become a tangled web \u2014 deferred comp, NQSOs, ISOs, three irrevocable trusts, a donor-advised fund, and a concentrated stock position that kept me up at night. My previous advisor was competent but reactive. Jay is proactive. Before I even retired, his team modeled twelve different liquidation scenarios for my concentrated position, each with different tax outcomes and risk profiles. The level of coordination between Jay, my estate attorney, and our family\u2019s CPA has been unlike anything I\u2019ve experienced.',
                name: 'Robert W.',
                location: 'Paradise Valley, AZ',
                profile: 'Retired Executive',
                disclosure:
                  'Robert W. is a current client of Farther Finance Advisors LLC. This testimonial was provided voluntarily and without cash or non-cash compensation. This testimonial reflects Robert W.\u2019s individual experience and is not representative of all client experiences. No material conflicts of interest exist between Farther Finance Advisors LLC and the person providing this testimonial. The investment strategies referenced reflect this client\u2019s specific circumstances and should not be construed as recommendations or guarantees of any particular outcome. Investing involves risk, including the potential loss of principal. Farther Finance Advisors LLC does not provide tax or legal advice.',
              },
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 80}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[16px] p-[32px] md:p-[40px] h-full flex flex-col">
                  <p className="font-sans text-[11px] font-bold text-[#1d7682] tracking-[0.15em] uppercase mb-4">
                    {t.profile}
                  </p>
                  <blockquote className="font-sans text-[15px] text-[#333333] leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-[#E8E6E1]">
                    <p className="font-sans text-[15px] font-semibold text-[#333333]">
                      {t.name}
                    </p>
                    <p className="font-sans text-[13px] text-[#5b6a71]">
                      {t.location}
                    </p>
                  </div>
                  <details className="mt-4">
                    <summary className="font-sans text-[11px] text-[#5b6a71]/70 cursor-pointer hover:text-[#1d7682] transition-colors">
                      View disclosure
                    </summary>
                    <p className="font-sans text-[10px] text-[#5b6a71]/60 leading-[1.6] mt-2">
                      {t.disclosure}{' '}
                      Please refer to our{' '}
                      <a href="/documents/FFA-ADV-Packet-2.6.26.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                        Form ADV Part 2A
                      </a>{' '}
                      and{' '}
                      <a href="/disclosures" className="underline">
                        Disclosures
                      </a>{' '}
                      for additional information.
                    </p>
                  </details>
                </div>
              </AnimateOnScroll>
            ))}
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
              Jay works with a select number of individuals, families, and business owners across{' '}
              Arizona, California, and Nevada.
              If you&rsquo;re looking for a more proactive, coordinated approach to your
              financial life &mdash; he&rsquo;d welcome the chance to learn about your goals.
            </p>
            <div className="mt-10">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                See If Farther Is Right for Your Family
              </Button>
            </div>
            <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
              Prefer to call?{' '}
              <a
                href="tel:+14809440880"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                (480) 944-0880
              </a>{' '}
              &middot; Or email{' '}
              <a
                href="mailto:jay.chang@farther.com"
                className="underline underline-offset-2 hover:text-[#F7F4EE]/80 transition-colors"
              >
                jay.chang@farther.com
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
