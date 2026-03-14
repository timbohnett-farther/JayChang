import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ArrowLeft, Clock, Calendar, User, ChevronRight, ShieldCheck, Search, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'How to Choose a Certified Financial Planner (CFP\u00AE) in Las Vegas | Private Wealth Management at Farther',
  description:
    'Learn how to evaluate and choose a Certified Financial Planner (CFP\u00AE) in Las Vegas. Understand fiduciary standards, fee structures, Nevada-specific planning, and what questions to ask before hiring a CFP.',
  alternates: {
    canonical:
      'https://www.privatewealthatfarther.com/insights/how-to-choose-cfp-las-vegas',
  },
  openGraph: {
    title:
      'How to Choose a Certified Financial Planner (CFP\u00AE) in Las Vegas',
    description:
      'Learn how to evaluate and choose a Certified Financial Planner (CFP\u00AE) in Las Vegas. Understand fiduciary standards, fee structures, Nevada-specific planning, and what questions to ask before hiring a CFP.',
    type: 'article',
    url: 'https://www.privatewealthatfarther.com/insights/how-to-choose-cfp-las-vegas',
  },
}

const relatedArticles = [
  {
    slug: 'las-vegas-financial-planning',
    category: 'MARKET INSIGHTS',
    title: 'Financial Planning in Las Vegas: Beyond the Strip',
    excerpt:
      "Las Vegas's growth has attracted a new wave of affluent professionals and retirees. Here's how to optimize your financial strategy in Nevada.",
    readTime: '8 min read',
  },
  {
    slug: 'choosing-financial-advisor',
    category: 'WEALTH MANAGEMENT',
    title: 'How to Choose a Financial Advisor When You Have $2M or More',
    excerpt:
      'The questions most people ask when choosing an advisor are the wrong ones. Here\u2019s what actually matters when your portfolio has seven figures or more.',
    readTime: '6 min read',
  },
  {
    slug: 'estate-planning-essentials',
    category: 'ESTATE PLANNING',
    title: 'Estate Planning for $5M+ Families: What Your Attorney May Not Tell You',
    excerpt:
      'Estate planning is about more than documents. Learn the financial strategies that complement your legal framework to protect and transfer wealth efficiently.',
    readTime: '10 min read',
  },
]

export default function HowToChooseCFPLasVegasPage() {
  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'How to Choose a Certified Financial Planner (CFP\u00AE) in Las Vegas',
            description:
              'Learn how to evaluate and choose a Certified Financial Planner (CFP\u00AE) in Las Vegas. Understand fiduciary standards, fee structures, Nevada-specific planning, and what questions to ask before hiring a CFP.',
            author: {
              '@type': 'Organization',
              name: 'Farther Private Wealth',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Farther Private Wealth',
              url: 'https://www.privatewealthatfarther.com',
            },
            datePublished: '2026-03',
            url: 'https://www.privatewealthatfarther.com/insights/how-to-choose-cfp-las-vegas',
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How many CFPs are in Las Vegas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There are approximately 100 Certified Financial Planners (CFP\u00AE professionals) practicing in the Las Vegas metropolitan area. However, only a subset of those operate as fee-only fiduciaries, which is the standard we recommend for high-net-worth families.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I look for in a CFP in Las Vegas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'When evaluating a CFP in Las Vegas, focus on five key factors: fiduciary status (are they legally required to act in your best interest at all times?), fee structure (fee-only vs. fee-based or commission), experience with Nevada-specific planning, client minimums and capacity, and the technology platform they use for portfolio management and reporting.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is a CFP the same as a fiduciary financial advisor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not necessarily. While CFP\u00AE professionals are required to act as fiduciaries when providing financial planning, some may also hold broker-dealer registrations that allow them to sell commissioned products under a lower suitability standard. The ideal combination is a CFP\u00AE who also operates as a fee-only fiduciary within a Registered Investment Adviser (RIA) firm.',
                },
              },
            ],
          }),
        }}
      />

      {/* Article Header */}
      <section className="bg-[#0A1628] pt-[120px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[80px]">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#C9A84C] hover:text-[#D4B65A] transition-colors mb-8"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#C9A84C] bg-[rgba(201,168,76,0.1)] px-3 py-1 rounded-full">
              WEALTH PLANNING
            </span>
          </div>

          <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
            How to Choose a Certified Financial Planner (CFP&reg;) in Las Vegas
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-[#BFC8D4]">
            <div className="flex items-center gap-2">
              <User size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">Farther Advisory Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-[760px] mx-auto">
          <AnimateOnScroll>
            <div className="prose-farther">
              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Las Vegas has grown into one of the most dynamic wealth markets in the country. Between the influx of tech professionals, retirees relocating from California, and a thriving local business community, demand for qualified financial guidance has never been higher. But finding the right advisor requires more than a Google search. The Certified Financial Planner (CFP&reg;) designation is a meaningful credential &mdash; and understanding what it represents, what it does not guarantee, and how to evaluate a CFP in the Las Vegas market can save you years of frustration and significant money.
              </p>

              {/* Section 1 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#0A1628] leading-[1.3] mt-12 mb-6">
                What the CFP&reg; Designation Actually Means
              </h2>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                The CFP&reg; mark is awarded by the Certified Financial Planner Board of Standards and is widely considered the most rigorous credential in personal financial planning. Earning the designation requires meeting four requirements that, taken together, filter out the majority of aspiring candidates.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                <strong className="text-[#0A1628]">Education.</strong> Candidates must complete a CFP Board-registered education program covering retirement planning, tax planning, estate planning, investment management, insurance, and behavioral finance. Most programs require nine to twelve months of coursework.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                <strong className="text-[#0A1628]">Examination.</strong> The CFP exam is a 170-question, six-hour test administered over two days. The historical pass rate hovers between 60 and 67 percent, meaning roughly one in three candidates fails on their first attempt. The exam tests the ability to integrate planning concepts across disciplines, not simply recall isolated facts.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                <strong className="text-[#0A1628]">Experience.</strong> Candidates must complete 6,000 hours of professional financial planning experience (or 4,000 hours in an apprenticeship pathway) before they can use the CFP&reg; marks. This typically translates to three to five years of full-time work.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                <strong className="text-[#0A1628]">Ethics and fiduciary obligation.</strong> Since 2019, all CFP&reg; professionals have been required to act as fiduciaries when providing financial advice. They must also adhere to the CFP Board&apos;s Code of Ethics and Standards of Conduct and submit to ongoing continuing-education requirements. This fiduciary obligation is a significant differentiator from advisors who operate under the lesser suitability standard.
              </p>

              {/* Section 2 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#0A1628] leading-[1.3] mt-12 mb-6">
                Five Questions to Ask Any CFP&reg; in Las Vegas
              </h2>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                There are approximately 100 CFP&reg; professionals in the Las Vegas metro area. That sounds like a reasonable number until you start filtering for the qualities that actually matter. These five questions will help you separate the exceptional from the adequate.
              </p>

              <h3 className="font-sans text-[17px] font-bold text-[#0A1628] leading-[1.8] mt-8 mb-3">
                1. &ldquo;Are you a fiduciary at all times &mdash; and are you fee-only?&rdquo;
              </h3>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                This is the single most important question. While all CFP&reg; professionals must act as fiduciaries during financial planning engagements, some also hold broker-dealer licenses that allow them to sell commissioned products under a lower suitability standard. The distinction between{' '}
                <Link href="/disclosures" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
                  fee-only
                </Link>{' '}
                and fee-based is critical. A fee-only advisor earns compensation solely from the advisory fees their clients pay &mdash; no commissions, no revenue sharing, no incentive trips. A fee-based advisor may charge advisory fees <em>and</em> earn commissions on insurance or annuity products. The conflicts created by dual registration are real and pervasive.
              </p>

              <h3 className="font-sans text-[17px] font-bold text-[#0A1628] leading-[1.8] mt-8 mb-3">
                2. &ldquo;How many clients do you serve &mdash; and at what wealth level?&rdquo;
              </h3>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Capacity matters. An advisor managing 300 client relationships simply cannot offer the same depth of attention as one serving 80 families. Ask how many households the advisor works with, what the typical account size looks like, and how often you can expect proactive outreach. If you have a $5 million portfolio and the advisor&apos;s median client has $200,000, your planning needs may exceed their expertise. Conversely, if the minimum is $25 million, you may not receive priority attention at $3 million.
              </p>

              <h3 className="font-sans text-[17px] font-bold text-[#0A1628] leading-[1.8] mt-8 mb-3">
                3. &ldquo;What is your experience with Nevada-specific planning?&rdquo;
              </h3>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Las Vegas is not a generic market, and the planning considerations here differ meaningfully from other cities. A qualified CFP in Las Vegas should be able to speak fluently about Nevada&apos;s zero state income tax and how it affects Roth conversion strategies, the state&apos;s exceptionally favorable dynasty trust laws (Nevada has no rule against perpetuities), its robust asset protection statutes, community property rules and how they interact with estate planning, and the California closer connection test &mdash; which is essential for families managing{' '}
                <Link href="/las-vegas" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
                  California-to-Nevada relocations
                </Link>
                . If a CFP cannot discuss these topics in detail, they may not have the Nevada-specific depth your situation requires.
              </p>

              <h3 className="font-sans text-[17px] font-bold text-[#0A1628] leading-[1.8] mt-8 mb-3">
                4. &ldquo;What technology platform do you use?&rdquo;
              </h3>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                In 2026, technology is no longer a nice-to-have &mdash; it is a core component of the advisory experience. Ask whether the advisor&apos;s platform offers real-time portfolio visibility across all your accounts, automated tax-loss harvesting that runs continuously rather than once per quarter, and scenario modeling tools that let you see how a Roth conversion, real estate sale, or business exit would affect your long-term plan. The advisor who relies on spreadsheets and quarterly PDF statements is operating with yesterday&apos;s tools. You deserve better.
              </p>

              <h3 className="font-sans text-[17px] font-bold text-[#0A1628] leading-[1.8] mt-8 mb-3">
                5. &ldquo;What does your planning process look like?&rdquo;
              </h3>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                A credible CFP should be able to describe a structured onboarding process. Ask what happens in the first 90 days, how often you will meet (quarterly is typical for high-net-worth clients; annually is insufficient), who else on the team you will interact with, and how the advisor coordinates with your CPA, estate attorney, and insurance professionals. A well-defined process is a signal of professionalism. A vague or improvised answer is a red flag.
              </p>

              {/* Section 3 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#0A1628] leading-[1.3] mt-12 mb-6">
                How to Verify a CFP&reg; in Las Vegas
              </h2>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Before engaging any advisor, take fifteen minutes to verify their credentials independently. Four resources should be part of your due diligence:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8]">
                  <strong className="text-[#0A1628]">LetsMakeAPlan.org</strong> &mdash; the CFP Board&apos;s official directory. Confirm the advisor holds an active CFP&reg; certification and check for any disciplinary history.
                </li>
                <li className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8]">
                  <strong className="text-[#0A1628]">adviserinfo.sec.gov</strong> &mdash; the SEC&apos;s Investment Adviser Public Disclosure site. Review the firm&apos;s Form ADV for fee schedules, conflicts of interest, and assets under management.
                </li>
                <li className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8]">
                  <strong className="text-[#0A1628]">BrokerCheck.finra.org</strong> &mdash; FINRA&apos;s tool for checking whether the advisor also holds a broker-dealer registration, which may indicate a fee-based (not fee-only) model.
                </li>
                <li className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8]">
                  <strong className="text-[#0A1628]">Form CRS</strong> &mdash; a standardized, two-page relationship summary that every advisory firm must provide. It outlines services, fees, conflicts, and disciplinary history in plain language.
                </li>
              </ul>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Cross-referencing these sources takes minimal effort and can reveal issues &mdash; dual registrations, regulatory actions, or fee structures &mdash; that an advisor may not volunteer during a sales conversation.
              </p>

              {/* In-Article CTA */}
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-8 my-12 text-center">
                <MessageSquare size={28} strokeWidth={1.5} className="text-[#C9A84C] mx-auto mb-4" />
                <h3 className="font-serif text-[22px] font-semibold text-[#0A1628] leading-tight">
                  Evaluating advisors in Las Vegas?
                </h3>
                <p className="font-sans text-[15px] text-[#6B7A8D] leading-relaxed mt-3 max-w-[480px] mx-auto">
                  We are happy to discuss what to look for &mdash; even if Farther is not the right fit for your family.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary">
                    Schedule a Conversation
                  </Button>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="font-serif text-[28px] max-md:text-[24px] font-semibold text-[#0A1628] leading-[1.3] mt-12 mb-6">
                Our Approach
              </h2>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                At Farther, our Las Vegas advisory team meets every standard described above. Each advisor holds the CFP&reg; designation and operates as a fiduciary at all times. We are{' '}
                <Link href="/disclosures" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
                  fee-only
                </Link>
                , meaning we never earn commissions, revenue-sharing payments, or product-based incentives of any kind. Our firm is registered with the SEC as a Registered Investment Adviser (RIA), providing an additional layer of regulatory oversight and transparency.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                We specialize in serving{' '}
                <Link href="/las-vegas" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
                  Las Vegas families with $2M&ndash;$20M
                </Link>{' '}
                in investable assets &mdash; a segment that is too complex for robo-advisors and too small for the largest private banks, yet perfectly suited for sophisticated, personalized planning. Our advisors maintain intentionally small client rosters so that every family receives the attention and depth of analysis their wealth deserves.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Every engagement is powered by{' '}
                <Link href="/services" className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4B65A] transition-colors">
                  Farther&apos;s Intelligent Wealth Platform
                </Link>
                , which provides real-time portfolio visibility, continuous tax-loss harvesting, and comprehensive scenario modeling. Our technology does not replace the advisor &mdash; it amplifies their ability to make better, faster decisions on your behalf.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                Our structured planning process begins with a 90-day deep dive into your complete financial picture &mdash; investments, tax situation, estate plan, insurance, liabilities, and goals &mdash; followed by quarterly strategy reviews and ongoing access to your advisory team. We coordinate directly with your CPA, estate attorney, and other professionals to ensure every element of your plan works together.
              </p>

              <p className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6">
                If you are evaluating CFP&reg; professionals in Las Vegas, we welcome the opportunity to demonstrate how our approach compares. There is no cost and no obligation &mdash; just a straightforward conversation about your goals and whether we are the right fit.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#C9A84C] hover:text-[#D4B65A] transition-colors"
                >
                  <span>Schedule a Conversation</span>
                  <ChevronRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
            <p className="font-sans text-xs text-[#6B7A8D] leading-relaxed">
              This article is provided for informational purposes only and does
              not constitute investment advice, a recommendation, or an offer to
              buy or sell any securities. The CFP&reg; mark is a certification
              mark owned by the Certified Financial Planner Board of Standards,
              Inc. Farther Finance Advisors, LLC is a registered investment
              adviser with the SEC. Registration does not imply a certain level
              of skill or training. Past performance is not indicative of future
              results. Please consult with a qualified financial advisor before
              making investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <SectionEyebrow text="CONTINUE READING" />
          <h2 className="font-serif text-h3 font-normal text-[#0A1628] mt-4 mb-10">
            Related Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="group block"
              >
                <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[12px] p-8 hover:shadow-card-hover hover:border-[#C9A84C] transition-all duration-300">
                  <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#C9A84C]">
                    {related.category}
                  </span>
                  <h3 className="font-serif text-[22px] font-semibold text-[#1C2B3A] mt-3 leading-tight group-hover:text-[#C9A84C] transition-colors">
                    {related.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#6B7A8D] leading-relaxed mt-3 line-clamp-2">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-[#C9A84C] font-sans text-sm font-semibold">
                    Read Article
                    <ChevronRight
                      size={14}
                      strokeWidth={1.5}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A1628] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
            Ready to Work With a CFP&reg; Who Puts You First?
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            Schedule a private conversation with our Las Vegas advisory team to
            discuss your goals and explore whether Farther is the right fit for
            your family.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
