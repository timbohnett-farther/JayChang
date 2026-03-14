import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Insights | Wealth Planning, Tax Strategy & Market Commentary',
  description:
    'Expert insights on wealth management, tax strategy, business exit planning, and market commentary for families with $2M–$20M in Dallas and Las Vegas.',
  alternates: {
    canonical: 'https://www.privatewealthatfarther.com/insights',
  },
}

const articles = [
  {
    slug: '5-financial-planning-steps-before-selling-your-business-in-dallas',
    category: 'BUSINESS OWNERS',
    title: '5 Financial Planning Steps Before Selling Your Business in Dallas',
    excerpt:
      'The 12–24 months before a business sale are the most critical window for tax positioning, trust funding, and charitable giving strategies.',
    date: 'March 3, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'moving-from-california-to-nevada-wealth-planning-checklist',
    category: 'TAX STRATEGY',
    title: 'Moving from California to Nevada: A Wealth Planning Checklist',
    excerpt:
      'Interstate wealth transitions involve careful planning around state tax obligations, trust restructuring, and entity domicile changes.',
    date: 'February 18, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'retirement-at-2m-vs-10m-vs-20m-what-changes',
    category: 'WEALTH PLANNING',
    title: 'Retirement at $2M vs $10M vs $20M: What Actually Changes?',
    excerpt:
      'The financial strategies at each wealth tier differ significantly. Understanding where you fall changes how you plan.',
    date: 'February 4, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'what-is-a-fiduciary-advisor-and-why-it-matters',
    category: 'WEALTH PLANNING',
    title: 'What Is a Fiduciary Advisor — And Why It Matters for Your Family',
    excerpt:
      'Not all financial advisors are held to the same legal standard. Understanding fiduciary duty can protect your family.',
    date: 'January 21, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'how-texas-business-owners-can-reduce-tax-exposure',
    category: 'TAX STRATEGY',
    title: 'How Texas Business Owners Can Reduce Tax Exposure Before Retirement',
    excerpt:
      'Proactive tax planning can save Dallas business owners six figures in the years leading up to retirement or a business sale.',
    date: 'January 7, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'nevada-dynasty-trusts-what-families-should-know',
    category: 'ESTATE PLANNING',
    title: 'Nevada Dynasty Trusts: What $5M+ Families Should Know',
    excerpt:
      'Nevada has no rule against perpetuities, making dynasty trusts one of the most powerful wealth preservation tools available.',
    date: 'December 17, 2025',
    readTime: '7 min read',
  },
]

const categories = [
  'All',
  'Wealth Planning',
  'Tax Strategy',
  'Business Owners',
  'Estate Planning',
  'Market Commentary',
]

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Insights — Private Wealth Management at Farther',
            description:
              'Expert insights on wealth management, tax strategy, and financial planning for high-net-worth families.',
            url: 'https://www.privatewealthatfarther.com/insights',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px] max-md:pb-[40px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="INSIGHTS" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#1C2B3A] leading-[1.15] mt-4">
            Insights for Families Building Lasting Wealth.
          </h1>
          <p className="font-sans text-body-lg text-[#6B7A8D] max-w-[680px] mx-auto mt-6 leading-relaxed">
            Perspectives on wealth management, tax strategy, business exit
            planning, and the financial decisions that matter most for families
            with $2M–$20M in Dallas and Las Vegas.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#F7F4EE] pb-[40px] px-[80px] max-md:px-[20px]">
        <div className="max-w-container mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-[#0A1628] text-[#F7F4EE]'
                  : 'bg-[#FAFAF8] border border-[#E8E6E1] text-[#1C2B3A] hover:border-[#C9A84C] hover:text-[#C9A84C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <AnimateOnScroll key={article.slug} delay={i * 100}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className="h-[200px] max-md:h-[180px] bg-[#E8F0F7] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-sans text-sm text-[#6B7A8D]">
                        Article Image
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-3 leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6B7A8D] mt-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <p className="font-sans text-caption text-[#6B7A8D] mt-4">
                      {article.date} · {article.readTime}
                    </p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[40px] max-md:text-[28px] font-semibold text-[#F7F4EE] leading-[1.2]">
            Have a Question About Your Financial Plan?
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            We welcome conversations about the topics we write about. If
            something resonated — or raised a question specific to your
            situation — let&apos;s talk.
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
