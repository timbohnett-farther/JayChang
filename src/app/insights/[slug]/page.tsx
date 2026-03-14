import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { ArrowLeft, Clock, Calendar, User, ChevronRight } from 'lucide-react'

// Sample article data — in production, this would come from a CMS or MDX files
const articles: Record<
  string,
  {
    title: string
    category: string
    excerpt: string
    readTime: string
    date: string
    author: string
    authorRole: string
    content: string[]
    relatedSlugs: string[]
  }
> = {
  'tax-loss-harvesting-guide': {
    title: 'Tax-Loss Harvesting: A Year-Round Strategy for High-Net-Worth Investors',
    category: 'Tax Strategy',
    excerpt:
      'Discover why waiting until December to harvest tax losses costs affluent investors thousands each year — and how continuous, automated harvesting captures more value.',
    readTime: '8 min read',
    date: 'March 2025',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'For high-net-worth investors, tax-loss harvesting is one of the most powerful tools available for improving after-tax returns. Yet most traditional advisors only review portfolios for harvesting opportunities once a year — typically in December, when much of the potential value has already been lost.',
      'At Farther, our platform monitors portfolios continuously for tax-loss harvesting opportunities. When a position drops below its cost basis by a meaningful threshold, the system flags it for harvesting — regardless of the time of year. This approach has been shown to capture significantly more value than annual-only strategies.',
      'The mechanics are straightforward: sell a position at a loss, immediately replace it with a similar (but not substantially identical) investment to maintain market exposure, and use the realized loss to offset capital gains elsewhere in your portfolio. The key is doing this systematically and frequently.',
      'For investors with $2M or more in taxable accounts, continuous tax-loss harvesting can add meaningful basis points to after-tax returns annually. Over a decade, this compounds into a substantial difference in wealth accumulation.',
      'Important considerations include wash sale rules, which prevent you from repurchasing a substantially identical security within 30 days. Our platform tracks this automatically across all your accounts — including IRAs and spouse accounts — to ensure compliance.',
      'Tax-loss harvesting works best as part of a comprehensive tax strategy that also considers asset location (which investments go in taxable vs. tax-advantaged accounts), Roth conversion timing, and charitable giving optimization.',
    ],
    relatedSlugs: [
      'roth-conversion-strategies',
      'estate-planning-essentials',
    ],
  },
  'roth-conversion-strategies': {
    title: 'Roth Conversion Strategies: Timing Your Tax-Free Growth',
    category: 'Retirement Planning',
    excerpt:
      'A well-timed Roth conversion can save hundreds of thousands in lifetime taxes. Learn how to identify the optimal conversion windows for your situation.',
    readTime: '7 min read',
    date: 'February 2025',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'Roth conversions represent one of the most impactful planning strategies available to high-net-worth families — yet they require careful timing and coordination to maximize their benefit.',
      'The fundamental concept is simple: convert pre-tax retirement assets (Traditional IRA or 401k) to a Roth IRA, pay income tax on the conversion amount today, and enjoy tax-free growth and withdrawals for the rest of your life.',
      'The art lies in identifying the right conversion windows. Years with lower-than-usual income — perhaps due to a career transition, sabbatical, or gap between selling a business and the next venture — create optimal opportunities for conversion at lower marginal tax rates.',
      'For families in Dallas or Las Vegas, the absence of state income tax makes conversions particularly attractive. You pay only federal tax on the conversion, whereas families in high-tax states like California or New York face a significantly higher conversion cost.',
      'Our planning process models Roth conversions across multiple time horizons and tax scenarios to identify the strategy that minimizes your lifetime tax burden while maintaining flexibility for changing circumstances.',
      'Key factors we analyze include: current vs. projected future tax rates, required minimum distribution projections, estate planning implications, and the impact on Medicare premiums (IRMAA surcharges).',
    ],
    relatedSlugs: [
      'tax-loss-harvesting-guide',
      'estate-planning-essentials',
    ],
  },
  'estate-planning-essentials': {
    title: 'Estate Planning for $5M+ Families: What Your Attorney May Not Tell You',
    category: 'Estate Planning',
    excerpt:
      'Estate planning is about more than documents. Learn the financial strategies that complement your legal framework to protect and transfer wealth efficiently.',
    readTime: '10 min read',
    date: 'January 2025',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'Most high-net-worth families have the basics in place — a will, a revocable living trust, powers of attorney, and healthcare directives. But estate planning as a financial strategy goes far beyond these foundational documents.',
      'The current federal estate tax exemption sits at $13.61 million per individual ($27.22 million per married couple) for 2024. However, this elevated exemption is scheduled to sunset at the end of 2025, potentially dropping by roughly half. For families with estates approaching or exceeding these thresholds, planning today is critical.',
      'Strategies worth considering include irrevocable life insurance trusts (ILITs), grantor retained annuity trusts (GRATs), spousal lifetime access trusts (SLATs), and qualified personal residence trusts (QPRTs). Each serves a different purpose and comes with unique trade-offs.',
      'For business owners, succession planning adds another layer of complexity. Buy-sell agreements, valuation discounts for family limited partnerships, and the timing of ownership transfers all require coordination between your wealth advisor, attorney, and CPA.',
      'In community property states like Texas and Nevada, the step-up in basis at death applies to both halves of community property — a significant advantage that requires careful title management to preserve.',
      'At Farther, we coordinate with your estate attorney and CPA to ensure your investment strategy, tax planning, and estate documents all work together. This integrated approach prevents the gaps that commonly arise when each professional operates in isolation.',
    ],
    relatedSlugs: [
      'tax-loss-harvesting-guide',
      'roth-conversion-strategies',
    ],
  },
  'dallas-wealth-management-guide': {
    title: 'Wealth Management in Dallas: What High-Net-Worth Families Need to Know',
    category: 'Market Insights',
    excerpt:
      'From the state tax advantage to community property planning, Dallas presents unique opportunities and considerations for affluent families.',
    readTime: '9 min read',
    date: 'December 2024',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'Dallas has become one of America\'s premier destinations for high-net-worth families, driven by a combination of no state income tax, a thriving business ecosystem, and an exceptional quality of life.',
      'For families relocating to Dallas from high-tax states, the financial impact extends far beyond the income tax savings. Proper planning around the timing of your move, the sale of assets, and the establishment of domicile can create meaningful additional value.',
      'Texas is a community property state, which has significant implications for investment management, estate planning, and tax strategy. Assets acquired during marriage are generally considered community property, which affects everything from cost basis calculations to estate tax treatment.',
      'The Dallas wealth management landscape includes everything from large wirehouses to independent RIAs. For families with $2M–$20M, the key is finding an advisor who combines institutional-grade capabilities with genuine personal attention — the intersection where Farther operates.',
      'Key planning considerations for Dallas families include: property tax management (Texas property taxes are among the highest in the nation), oil and gas investment opportunities, real estate portfolio optimization, and business succession planning in the dynamic North Texas economy.',
      'Our Dallas-based advisory team understands these local nuances and builds them into every financial plan we create.',
    ],
    relatedSlugs: [
      'las-vegas-financial-planning',
      'estate-planning-essentials',
    ],
  },
  'las-vegas-financial-planning': {
    title: 'Financial Planning in Las Vegas: Beyond the Strip',
    category: 'Market Insights',
    excerpt:
      'Las Vegas\'s growth has attracted a new wave of affluent professionals and retirees. Here\'s how to optimize your financial strategy in Nevada.',
    readTime: '8 min read',
    date: 'November 2024',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'Las Vegas has undergone a remarkable transformation over the past decade, evolving from a tourism-dependent economy into a diversified hub for technology, healthcare, sports, and professional services.',
      'For high-net-worth individuals and families, Nevada offers compelling financial advantages: no state income tax, no inheritance tax, no estate tax, and strong asset protection laws. Combined with a growing cultural scene and year-round climate, it is no surprise that Las Vegas is one of the fastest-growing wealth markets in the country.',
      'Retirees relocating to Las Vegas can benefit from the tax-free environment for retirement distributions, Social Security benefits, and investment income. However, proper planning around the timing of Roth conversions, pension elections, and asset repositioning is essential to maximize these benefits.',
      'For business owners and tech professionals, Nevada\'s favorable business environment — including no corporate income tax and a commerce tax that only applies to businesses with gross revenue exceeding $4 million — creates additional planning opportunities.',
      'Real estate investment in the Las Vegas market requires careful analysis. While the market has shown strong appreciation, diversification beyond local real estate is important for families whose primary residence and business interests are already concentrated in the region.',
      'Our Las Vegas advisory team provides comprehensive wealth management that accounts for Nevada\'s unique legal and tax landscape, helping families make the most of what this dynamic market offers.',
    ],
    relatedSlugs: [
      'dallas-wealth-management-guide',
      'roth-conversion-strategies',
    ],
  },
  'choosing-financial-advisor': {
    title: 'How to Choose a Financial Advisor When You Have $2M or More',
    category: 'Wealth Management',
    excerpt:
      'The questions most people ask when choosing an advisor are the wrong ones. Here\'s what actually matters when your portfolio has seven figures or more.',
    readTime: '6 min read',
    date: 'October 2024',
    author: 'Farther Advisory Team',
    authorRole: 'Wealth Management',
    content: [
      'When families with $2M or more begin searching for a financial advisor, they typically ask about returns, fees, and credentials. While these matter, they are rarely the factors that determine whether a relationship will be successful long-term.',
      'The first question to ask is about the advisor\'s fiduciary obligation. A fiduciary is legally required to act in your best interest — not just recommend "suitable" investments. At Farther, every advisor operates under a fiduciary standard, always.',
      'The second question is about how the advisor is compensated. Fee-only advisors (who charge a percentage of assets under management) have fewer conflicts of interest than commission-based advisors who earn money from product sales. Transparency in fees is non-negotiable.',
      'Third, consider the advisor\'s technology and operational infrastructure. Can you see your portfolio in real time? Does the firm offer automated tax-loss harvesting? Can you message your advisor directly, or do you go through a call center? These operational details directly impact the quality of service you receive.',
      'Fourth, evaluate the advisor\'s capacity. An advisor managing 300+ client relationships cannot provide the same level of attention as one managing 50–75. Ask directly how many clients they serve and how often you can expect proactive outreach.',
      'Finally, assess the team behind the advisor. Even the best individual advisor needs institutional support — research, compliance, trading operations, and technology. The right combination of personal attention and institutional backing is what separates exceptional wealth management from the rest.',
    ],
    relatedSlugs: [
      'tax-loss-harvesting-guide',
      'dallas-wealth-management-guide',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return {
      title: 'Article Not Found | Farther Private Wealth',
    }
  }

  return {
    title: `${article.title} | Farther Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.privatewealthatfarther.com/insights/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://www.privatewealthatfarther.com/insights/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <section className="bg-[#F7F4EE] min-h-[60vh] flex items-center justify-center px-[20px]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-mono text-[64px] text-[#C9A84C] mb-4">404</p>
          <h1 className="font-serif text-[36px] font-semibold text-[#1C2B3A]">
            Article not found.
          </h1>
          <p className="font-sans text-body text-[#6B7A8D] mt-4">
            This article may have been moved or no longer exists.
          </p>
          <div className="mt-8">
            <Button href="/insights" variant="primary">
              Back to Insights
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const relatedArticles = article.relatedSlugs
    .map((s) => (articles[s] ? { slug: s, ...articles[s] } : null))
    .filter(Boolean) as Array<{ slug: string; title: string; category: string; excerpt: string; readTime: string }>

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            author: {
              '@type': 'Organization',
              name: 'Farther Private Wealth',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Farther Private Wealth',
              url: 'https://www.privatewealthatfarther.com',
            },
            datePublished: article.date,
            url: `https://www.privatewealthatfarther.com/insights/${slug}`,
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
              {article.category}
            </span>
          </div>

          <h1 className="font-serif text-[42px] max-md:text-[30px] font-bold text-[#F7F4EE] leading-[1.2]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-[#BFC8D4]">
            <div className="flex items-center gap-2">
              <User size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} strokeWidth={1.5} />
              <span className="font-sans text-sm">{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-[760px] mx-auto">
          <AnimateOnScroll>
            <div className="prose-farther">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-[17px] text-[#1C2B3A] leading-[1.8] mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
            <p className="font-sans text-xs text-[#6B7A8D] leading-relaxed">
              This article is provided for informational purposes only and does
              not constitute investment advice, a recommendation, or an offer to
              buy or sell any securities. Past performance is not indicative of
              future results. Please consult with a qualified financial advisor
              before making investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-[#FAFAF8] section-padding">
          <div className="max-w-container mx-auto">
            <SectionEyebrow text="CONTINUE READING" />
            <h2 className="font-serif text-h3 font-normal text-[#0A1628] mt-4 mb-10">
              Related Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      )}

      {/* CTA */}
      <section className="bg-[#0A1628] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
            Have Questions About Your Strategy?
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            Schedule a private conversation with our advisory team to discuss
            how these strategies apply to your specific situation.
          </p>
          <div className="mt-10">
            <Button href="/schedule-consultation" variant="primary">
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
