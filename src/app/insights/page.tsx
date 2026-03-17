import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import InsightsCategoryFilter from '@/components/InsightsCategoryFilter'

export const metadata: Metadata = {
  title: 'Insights | Wealth Planning, Tax Strategy & Market Commentary',
  description:
    'Expert insights on wealth management, tax strategy, business exit planning, and market commentary for families with $2M–$20M in Arizona, California, and Nevada.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/insights',
  },
}

const articles = [
  {
    slug: '5-financial-planning-steps-before-selling-your-business-in-scottsdale',
    category: 'Business Owners',
    title: '5 Financial Planning Considerations Before Selling Your Business in Scottsdale',
    excerpt:
      'The 12–24 months before a business sale are the most critical window for tax positioning, trust funding, and charitable giving strategies.',
    date: 'March 3, 2026',
    readTime: '7 min read',
    image: '/dallas-business-owner.webp',
    tags: ['Scottsdale', 'Business Exit', 'Tax Planning'],
  },
  {
    slug: 'moving-from-california-to-nevada-wealth-planning-checklist',
    category: 'Tax Strategy',
    title: 'Relocating from California to Nevada: A Wealth Planning Checklist',
    excerpt:
      'Interstate wealth transitions involve careful planning around state tax obligations, trust restructuring, and entity domicile changes.',
    date: 'February 18, 2026',
    readTime: '9 min read',
    image: '/las-vegas-couple-sunset.webp',
    tags: ['Nevada', 'California', 'Relocation', 'Tax Savings'],
  },
  {
    slug: 'retirement-at-2m-vs-10m-vs-20m-what-changes',
    category: 'Wealth Planning',
    title: 'Wealth at $2M vs $10M vs $20M: How Planning Complexity Changes',
    excerpt:
      'The financial strategies at each wealth tier differ significantly. Understanding where you fall changes how you plan.',
    date: 'February 4, 2026',
    readTime: '6 min read',
    image: '/couple-golf-course.webp',
    tags: ['Financial Planning', 'High Net Worth'],
  },
  {
    slug: 'what-is-a-fiduciary-advisor-and-why-it-matters',
    category: 'Wealth Planning',
    title: 'What Is a Fiduciary Advisor — And Why It Matters for Your Family',
    excerpt:
      'Not all financial advisors are held to the same legal standard. Understanding fiduciary duty can protect your family.',
    date: 'January 21, 2026',
    readTime: '5 min read',
    image: '/advisor-couple-meeting.webp',
    tags: ['Fiduciary', 'Choosing an Advisor'],
  },
  {
    slug: 'how-arizona-business-owners-can-reduce-tax-exposure',
    category: 'Tax Strategy',
    title: 'How Arizona Business Owners Can Reduce Tax Exposure Before Retirement',
    excerpt:
      'Proactive tax planning can save Scottsdale business owners six figures in the years leading up to retirement or a business sale.',
    date: 'January 7, 2026',
    readTime: '8 min read',
    image: '/couple-reviewing-strategy.webp',
    tags: ['Scottsdale', 'Tax Optimization', 'Retirement'],
  },
  {
    slug: 'nevada-dynasty-trusts-what-families-should-know',
    category: 'Estate Planning',
    title: 'Nevada Dynasty Trusts: What $5M+ Families Should Know',
    excerpt:
      'Nevada has no rule against perpetuities, making dynasty trusts one of the most powerful wealth preservation tools available.',
    date: 'December 17, 2025',
    readTime: '7 min read',
    image: '/las-vegas-family-dinner.webp',
    tags: ['Nevada', 'Dynasty Trust', 'Estate Planning'],
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
      <BreadcrumbSchema items={[{ name: 'Insights', href: '/insights' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Insights — Personal Wealth Management at Farther',
            description:
              'Expert insights on wealth management, tax strategy, and financial planning for high-net-worth families.',
            url: 'https://www.PWM-Farther.com/insights',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px] max-md:pb-[40px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="INSIGHTS" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
            Insights for Families Building and Preserving Wealth.
          </h1>
          <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
            Perspectives on wealth management, tax strategy, business exit
            planning, and the financial decisions that matter most for families
            with $2M–$20M in Arizona, California, and Nevada.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter + Articles Grid */}
      <InsightsCategoryFilter articles={articles} categories={categories} />

      {/* CTA */}
      <section className="bg-[#333333] section-padding text-center">
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
            <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
              Wondering If This Applies to You? Let&rsquo;s Find Out Together.
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
