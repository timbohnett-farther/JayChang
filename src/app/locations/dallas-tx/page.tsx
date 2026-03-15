import type { Metadata } from "next"
import Link from "next/link"
import AnimateOnScroll from "@/components/AnimateOnScroll"
import SectionEyebrow from "@/components/SectionEyebrow"
import Button from "@/components/Button"
import {
  Shield,
  Building,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Wealth Management Dallas TX | Fiduciary Financial Advisor",
  description:
    "Farther provides personalized wealth management for families and business owners with $2M–$20M in Dallas, TX. Fiduciary advisor, financial planning, tax strategy, business exit planning. Schedule a consultation.",
  alternates: {
    canonical: "https://www.privatewealthatfarther.com/locations/dallas-tx",
  },
  openGraph: {
    title: "Wealth Management Dallas TX | Personal Wealth Management at Farther",
    description:
      "Personalized wealth management for Dallas families and business owners with $2M–$20M in investable assets.",
    url: "https://www.privatewealthatfarther.com/locations/dallas-tx",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Personal Wealth Management at Farther — Dallas, TX",
  url: "https://www.privatewealthatfarther.com/locations/dallas-tx",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    "Dallas",
    "Fort Worth",
    "Plano",
    "Frisco",
    "McKinney",
    "Southlake",
    "Highland Park",
    "University Park",
    "Westlake",
    "Park Cities",
  ],
  serviceType: [
    "Wealth Management",
    "Financial Planning",
    "Investment Management",
    "Business Exit Planning",
    "Estate Planning",
    "Tax Strategy",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Farther",
    url: "https://www.farther.com",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is wealth management and do I need it in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wealth management is a comprehensive approach that combines investment management, financial planning, tax strategy, and estate planning into a single coordinated service. If you have $2 million or more in investable assets, a Dallas wealth manager can help you navigate complex financial decisions, optimize your tax position, and build a plan that accounts for the unique dynamics of the North Texas economy.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a fiduciary financial advisor in Dallas, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for an advisor who is legally obligated to act in your best interest — that is the fiduciary standard. Ask whether they are fee-only, how they are compensated, and whether they hold CFP or CFA designations. Farther advisors operate under a fiduciary duty and combine personal service with institutional-grade technology to deliver transparent, conflict-free wealth management in Dallas.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a financial advisor and a wealth manager in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A financial advisor typically focuses on investment recommendations or insurance products. A wealth manager takes a holistic view — coordinating investments, tax planning, estate strategy, business succession, and cash flow management into one integrated plan. For Dallas families with $2M–$20M, wealth management provides the comprehensive oversight that a single-service advisor cannot.",
      },
    },
    {
      "@type": "Question",
      name: "How much money do I need to work with a Dallas wealth management firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most dedicated wealth management firms in Dallas require a minimum of $1 million to $5 million in investable assets. At Farther, we work with clients who have between $2 million and $20 million. This range allows us to deliver the personalized attention, advanced tax strategies, and custom portfolio construction that our clients expect.",
      },
    },
    {
      "@type": "Question",
      name: "What is a family office and do I qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A family office provides comprehensive financial management — investments, tax, estate, philanthropy, and concierge services — for ultra-high-net-worth families, typically those with $50 million or more. If you have $2M–$20M, you may not need a full family office, but you deserve family-office-quality service. Farther delivers that level of coordination and sophistication through technology and dedicated advisors.",
      },
    },
  ],
}

const services = [
  {
    number: "01",
    title: "Investment Management",
    icon: TrendingUp,
    description:
      "Your portfolio should reflect your goals, risk tolerance, and tax situation — not a model allocation pulled off a shelf. We build customized investment portfolios for Dallas clients that incorporate direct indexing, tax-loss harvesting, alternative investments, and opportunistic rebalancing. Whether you hold concentrated positions in energy stocks, tech equity from a recent IPO, or a mix of real estate and liquid securities, we design a strategy that works across your entire balance sheet. Our technology monitors your portfolio continuously, identifying tax-saving opportunities and rebalancing triggers that human-only advisory teams often miss.",
  },
  {
    number: "02",
    title: "Financial Planning",
    icon: Shield,
    description:
      "Comprehensive financial planning for Dallas families goes beyond a retirement projection. We model multiple scenarios — early retirement, business sale, real estate downsizing, education funding for children and grandchildren, and charitable giving — to give you clarity on what is possible and what trade-offs exist. Our planning process integrates cash flow analysis, insurance review, Social Security optimization, and legacy goals into a living plan that evolves as your life changes. Every plan is stress-tested against market downturns, inflation, and unexpected life events so you can make decisions with confidence.",
  },
  {
    number: "03",
    title: "Business Owner Services",
    icon: Building,
    description:
      "Dallas is home to one of the densest concentrations of privately held businesses in the United States — from manufacturing and logistics companies to medical practices, law firms, and technology startups. We help business owners prepare for liquidity events with exit planning, succession strategy, entity structuring, and pre-sale tax optimization. Whether you are five years from a sale or fielding offers today, we coordinate with your CPA, attorney, and investment banker to ensure every dollar is positioned for maximum after-tax value. Post-sale, we help you transition from business owner to investor with a disciplined wealth management plan.",
  },
  {
    number: "04",
    title: "Tax & Estate Strategy",
    icon: Users,
    description:
      "Texas has no state income tax, but that does not mean tax planning is simple. Federal income tax, capital gains, estate tax, and gift tax still demand proactive strategy — especially for Dallas families with $2 million or more. We coordinate with your CPA and estate attorney to implement strategies like Roth conversions, charitable remainder trusts, grantor retained annuity trusts, and generation-skipping transfers. Our planning accounts for Texas community property rules, blended family dynamics, and the unique trust structures available under Texas law. The goal is straightforward: keep more of what you have earned and transfer it efficiently to the people and causes you care about.",
  },
]

const communities = [
  "Highland Park & University Park (Park Cities)",
  "Southlake & Westlake",
  "Frisco & Prosper",
  "Plano & McKinney",
  "Preston Hollow",
  "Uptown Dallas & Turtle Creek",
  "Fort Worth & Aledo",
  "Rockwall & Heath",
]

const clientProfiles = [
  "Business owners planning an exit or succession — whether selling to a private equity firm, transitioning to family members, or pursuing an ESOP",
  "Corporate executives with concentrated stock positions in technology, energy, healthcare, and financial services companies headquartered in DFW",
  "Medical and legal professionals with complex partnership structures, deferred compensation, and practice valuations",
  "Families navigating generational wealth transfer, including parents funding education, establishing trusts, and coordinating gifting strategies",
  "Retirees optimizing portfolio income and tax efficiency across IRAs, brokerage accounts, real estate, and Social Security",
  "Entrepreneurs post-liquidity event seeking coordinated wealth management after selling a business, exercising options, or completing an IPO",
]

const faqs = [
  {
    question: "What is wealth management and do I need it in Dallas?",
    answer:
      "Wealth management combines investment management, financial planning, tax strategy, and estate planning into one coordinated service. If you have $2 million or more in investable assets, a Dallas wealth manager helps you navigate complex decisions, optimize your tax position, and build a plan that accounts for North Texas economic dynamics — from real estate appreciation to business succession.",
  },
  {
    question: "How do I find a fiduciary financial advisor in Dallas, TX?",
    answer:
      "Look for an advisor legally obligated to act in your best interest — that is the fiduciary standard. Ask whether they are fee-only, how they are compensated, and whether they hold CFP or CFA designations. Farther advisors operate under a fiduciary duty and combine personal service with institutional-grade technology for transparent, conflict-free wealth management.",
  },
  {
    question:
      "What is the difference between a financial advisor and a wealth manager in Dallas?",
    answer:
      "A financial advisor typically focuses on investment recommendations or insurance products. A wealth manager takes a holistic view — coordinating investments, tax planning, estate strategy, business succession, and cash flow into one integrated plan. For Dallas families with $2M–$20M, wealth management provides comprehensive oversight that a single-service advisor cannot.",
  },
  {
    question:
      "How much money do I need to work with a Dallas wealth management firm?",
    answer:
      "Most dedicated wealth management firms in Dallas require $1 million to $5 million in investable assets. At Farther, we work with clients who have between $2 million and $20 million — a range that allows us to deliver personalized attention, advanced tax strategies, and custom portfolio construction that our clients expect and deserve.",
  },
  {
    question: "What is a family office and do I qualify?",
    answer:
      "A family office provides comprehensive financial management — investments, tax, estate, philanthropy, and concierge services — for ultra-high-net-worth families, typically $50 million or more. If you have $2M–$20M, you may not need a full family office, but you deserve that level of service. Farther delivers family-office-quality coordination through technology and dedicated advisors.",
  },
]

export default function DallasTXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className="bg-[#333333] py-[96px]">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="DALLAS, TEXAS" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="mt-md font-serif text-h1-mobile md:text-h1 text-[#F7F4EE]">
              Wealth Management for Dallas Families and Business Owners
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-lg font-sans text-body-lg text-[#b6d0ed] max-w-[620px]">
              From Highland Park to Southlake, we deliver personalized financial
              planning and investment management for families and entrepreneurs
              with $2 million to $20 million in investable assets. Backed by
              Farther&apos;s $18B+ Intelligent Wealth Platform.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-lg">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Conversation
              </Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="mt-xl flex flex-wrap gap-lg font-sans text-caption text-[#b6d0ed]">
              <span className="flex items-center gap-xs">
                <TrendingUp className="h-4 w-4 text-[#1d7682]" />
                $18B+ AUM
              </span>
              <span className="flex items-center gap-xs">
                <Shield className="h-4 w-4 text-[#1d7682]" />
                Fiduciary Standard
              </span>
              <span className="flex items-center gap-xs">
                <Building className="h-4 w-4 text-[#1d7682]" />
                Technology-First
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 2: WHY DALLAS FAMILIES CHOOSE FARTHER */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="THE FARTHER DIFFERENCE" />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Why Dallas Families and Business Owners Choose Farther
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="mt-lg max-w-content font-sans text-body text-[#333333] space-y-md">
              <p>
                Dallas-Fort Worth is one of America&apos;s fastest-growing wealth
                centers. Fueled by corporate relocations, a thriving energy sector,
                booming real estate values, and a technology corridor stretching
                from Plano and Richardson to Frisco and beyond, North Texas has
                become home to a rapidly expanding population of families and
                entrepreneurs with significant investable assets.
              </p>
              <p>
                That growth comes with complexity. Business owners navigating exit
                strategies need coordinated tax and succession planning. Executives
                holding concentrated stock from newly relocated companies need
                diversification strategies that minimize capital gains. Families
                who have benefited from decades of real estate appreciation need
                portfolio optimization that accounts for illiquid holdings. And
                retirees in Park Cities, Preston Hollow, or Southlake need income
                strategies that preserve purchasing power across a 30-year horizon.
              </p>
              <p>
                Most national firms offer cookie-cutter solutions that do not
                account for the unique tax, business, and estate planning dynamics
                of North Texas families. Farther is different. We pair each client
                with a dedicated fiduciary advisor who understands the Dallas
                market — and back that advisor with our{" "}
                <Link
                  href="/technology"
                  className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
                >
                  Intelligent Wealth Platform
                </Link>
                , a proprietary technology stack that automates tax-loss
                harvesting, portfolio rebalancing, and scenario modeling. The
                result is personal attention with institutional precision — exactly
                what Dallas families with $2 million to $20 million deserve.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 3: SERVICES IN DALLAS */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR SERVICES" light />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
              Wealth Management Services for Dallas Clients
            </h2>
            <p className="mt-md font-sans text-body-lg text-[#b6d0ed] max-w-content">
              Every engagement begins with a deep understanding of your financial
              life — your assets, liabilities, goals, family dynamics, and risk
              tolerance. From there, we build a coordinated{" "}
              <Link
                href="/wealth-management"
                className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
              >
                wealth management
              </Link>{" "}
              plan that spans four core disciplines.
            </p>
          </AnimateOnScroll>
          <div className="mt-xl grid grid-cols-1 md:grid-cols-2 gap-md">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.number} delay={index * 100}>
                <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.15)] rounded-[4px] p-10 h-full">
                  <span className="font-mono text-[#1d7682] text-body-lg font-bold">
                    {service.number}
                  </span>
                  <h3 className="mt-sm font-serif text-h3-mobile md:text-h3 text-[#F7F4EE]">
                    {service.title}
                  </h3>
                  <p className="mt-md font-sans text-body text-[#b6d0ed]">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNITIES WE SERVE */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="COMMUNITIES" />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Dallas Communities We Serve
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-lg font-sans text-body text-[#333333] max-w-content">
              Our Dallas clients live and work across the most affluent
              communities in the DFW metroplex. Whether you are in the Park
              Cities, the western suburbs, or the rapidly growing northern
              corridor, we understand the real estate dynamics, local business
              landscape, and community-specific planning considerations that
              affect your wealth. We serve families and business owners with
              $2 million to $20 million throughout the greater Dallas-Fort Worth
              area, including clients in these communities and their surrounding
              neighborhoods.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-lg flex flex-wrap gap-sm">
              {communities.map((community) => (
                <span
                  key={community}
                  className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-full px-6 py-3 font-sans text-sm font-medium text-[#333333] flex items-center gap-xs"
                >
                  <MapPin className="h-4 w-4 text-[#1d7682]" />
                  {community}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: WHO WE WORK WITH */}
      <section className="bg-[#FAFAF8] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR CLIENTS" />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Dallas Clients We Serve
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-lg font-sans text-body text-[#333333] max-w-content">
              We work with a specific type of client: accomplished individuals
              and families who have built meaningful wealth and need a
              sophisticated, coordinated approach to managing it. Our Dallas
              clients typically share a few characteristics — they value
              transparency, they expect proactive communication, and they want an
              advisor who operates as a fiduciary. Here are the profiles we serve
              most often in the DFW area.
            </p>
          </AnimateOnScroll>
          <div className="mt-lg max-w-content space-y-sm">
            {clientProfiles.map((profile, index) => (
              <AnimateOnScroll key={index} delay={index * 80}>
                <div className="flex items-start gap-md">
                  <CheckCircle className="h-5 w-5 text-[#1d7682] mt-[2px] shrink-0" />
                  <p className="font-sans text-body text-[#333333]">
                    {profile}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LOCAL MARKET INSIGHT */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="MARKET INSIGHTS" light />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
              Dallas Wealth Management in 2026
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="mt-lg max-w-content font-sans text-body text-[#b6d0ed] space-y-md">
              <p>
                The Dallas-Fort Worth metroplex continues to be one of the
                fastest-growing economic regions in the United States. Population
                growth, corporate headquarters relocations from Oracle,
                Caterpillar, Goldman Sachs, and others, and a diversifying economy
                have created a new wave of wealth across North Texas. For families
                and business owners with significant assets, this growth brings
                both opportunity and complexity.
              </p>
              <p>
                The technology sector is reshaping the northern suburbs. Plano,
                Frisco, and Richardson have become magnets for tech companies and
                their executives, creating a population of clients with
                concentrated stock positions, complex equity compensation
                packages, and sudden-wealth planning needs. Meanwhile, longtime
                Dallas homeowners are sitting on significant real estate
                appreciation that complicates their overall portfolio balance and
                tax exposure.
              </p>
              <p>
                A generational business succession wave is also underway. Many of
                the privately held companies that fueled Dallas&apos;s growth in the
                1980s and 1990s are now owned by founders in their 60s and 70s who
                are evaluating exit strategies. Whether selling to private equity,
                transitioning to the next generation, or exploring employee
                ownership, these business owners need coordinated planning that
                spans investment management, tax optimization, and estate
                strategy. And while Texas&apos;s absence of a state income tax is a
                meaningful advantage, federal tax obligations — income, capital
                gains, estate, and gift tax — still demand proactive,
                year-round planning. A fiduciary advisor with deep knowledge of
                the Dallas market can help you navigate all of these dynamics. See
                how our approach compares in other markets like{" "}
                <Link
                  href="/locations/las-vegas-nv"
                  className="text-[#1d7682] underline underline-offset-2 hover:text-[#155f69] transition-colors"
                >
                  Las Vegas, NV
                </Link>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="bg-[#F7F4EE] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg">
          <AnimateOnScroll>
            <SectionEyebrow text="FAQ" />
            <h2 className="mt-md font-serif text-h2-mobile md:text-h2 text-[#333333]">
              Frequently Asked Questions About Wealth Management in Dallas
            </h2>
          </AnimateOnScroll>
          <div className="mt-xl max-w-content space-y-sm">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} delay={index * 80}>
                <details className="group border border-[#E8E6E1] rounded-[4px] bg-[#FAFAF8]">
                  <summary className="flex items-center justify-between cursor-pointer p-md font-sans text-body font-semibold text-[#333333] list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-body font-semibold text-[#333333] pr-md">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-[#5b6a71] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-md pb-md">
                    <p className="font-sans text-body text-[#5b6a71]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="bg-[#333333] py-xl md:py-2xl">
        <div className="mx-auto max-w-container px-sm md:px-lg text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-h2-mobile md:text-h2 text-[#F7F4EE]">
              Let&apos;s Discuss Your Goals
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-md font-sans text-body-lg text-[#b6d0ed] max-w-[620px] mx-auto">
              Schedule a conversation with a fiduciary wealth advisor who
              understands the Dallas market — and has the technology to deliver
              institutional-quality planning.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-lg flex flex-col sm:flex-row items-center justify-center gap-md">
              <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
                Schedule a Conversation
              </Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-lg flex flex-col sm:flex-row items-center justify-center gap-lg font-sans text-body-sm text-[#b6d0ed]">
              <a
                href="tel:+18005551234"
                className="hover:text-[#1d7682] transition-colors"
              >
                (800) 555-1234
              </a>
              <a
                href="mailto:dallas@privatewealthatfarther.com"
                className="hover:text-[#1d7682] transition-colors"
              >
                dallas@privatewealthatfarther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
