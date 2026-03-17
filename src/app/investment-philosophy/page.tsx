import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Shield,
  BarChart3,
  TrendingUp,
  Target,
  Layers,
  Brain,
  LineChart,
  DollarSign,
  Globe,
  Zap,
  CheckCircle,
  Phone,
  Mail,
} from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title:
    'Our Investment Philosophy | Jay Chang | Farther',
  description:
    'A disciplined, tax-intelligent approach to building and preserving wealth for families and business owners with $2M–$20M+ in investable assets. Human judgment, enhanced by technology.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/investment-philosophy',
  },
  openGraph: {
    title:
      'Our Investment Philosophy | Jay Chang | Farther',
    description:
      'A disciplined, tax-intelligent approach to building and preserving wealth for families and business owners with $2M–$20M+ in investable assets.',
    url: 'https://www.PWM-Farther.com/investment-philosophy',
  },
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] h-[7px] w-[7px] min-w-[7px] rounded-full bg-[#1d7682]" />
      <span className="font-sans text-body text-[#5b6a71] leading-relaxed">
        {children}
      </span>
    </li>
  )
}

const principles = [
  {
    icon: Shield,
    title: 'Preservation is the foundation.',
    body: 'Before we pursue growth, we ensure your portfolio is structured to withstand adverse markets. A diversified portfolio is designed to help you weather a storm in the financial markets and avoid panicking during sell-offs.',
  },
  {
    icon: Target,
    title: 'Complexity should serve you, not confuse you.',
    body: 'Sophisticated strategies are only valuable when they solve a real problem in your financial life \u2014 reducing concentrated risk, managing liquidity around a business exit, or structuring assets across generations.',
  },
  {
    icon: DollarSign,
    title: 'Tax efficiency is a return driver, not an afterthought.',
    body: 'In a world of moderated forward returns, the difference between pre-tax and after-tax performance compounds meaningfully over time. If returns over the next decade were 5% pre-tax but tax efficiency could increase that to 7%, the difference in compounded returns would be 34% more of today\u2019s starting portfolio.',
  },
  {
    icon: Layers,
    title: 'Diversification requires conviction.',
    body: 'We do not expect investing to be as simple as \u201Cbuy large-cap U.S. tech stocks\u201D \u2014 the theme that worked the past three years. Instead, we focus on diversification across asset classes, within them, and tactical positioning as opportunities emerge.',
  },
  {
    icon: Brain,
    title: 'Your advisor\u2019s judgment drives every decision.',
    body: 'Technology handles execution and analytics. Your advisor handles the thinking, the listening, and the strategy. Farther\u2019s platform empowers advisors \u2014 it does not replace them.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery and Financial Architecture',
    body: 'Before we invest a single dollar, we map the complete landscape \u2014 income sources, liquidity needs, business interests, real estate holdings, estate structures, existing concentrated positions, and tax profile. For families with $5M\u2013$20M, this context shapes every allocation decision that follows.',
  },
  {
    number: '02',
    title: 'Strategic Allocation Design',
    body: 'We construct a core strategic allocation across multiple asset classes with low or negative correlation to each other \u2014 not just stocks and bonds \u2014 to adequately diversify away excess risk.',
  },
  {
    number: '03',
    title: 'Personalization and Risk Calibration',
    body: 'Portfolios reflect your risk tolerance and time horizon. We calibrate each allocation to your specific withdrawal requirements, time horizons across multiple goals, and your emotional tolerance for drawdowns \u2014 because the best portfolio on paper fails if you cannot maintain conviction during a correction.',
  },
  {
    number: '04',
    title: 'Ongoing Active Oversight',
    body: 'Your portfolio is managed by a dedicated concierge investment team, not just algorithms. We conduct regular rebalancing, evaluate tactical shifts when market conditions warrant, and adjust allocations as your life circumstances evolve.',
  },
]

const outlookThemes = [
  {
    icon: TrendingUp,
    title: 'Embrace volatility.',
    body: 'The second years of presidential cycles have historically been the most volatile for U.S. stocks, with sell-offs averaging nearly 20%. We view potential corrections as tactical opportunities, not reasons to panic.',
  },
  {
    icon: Zap,
    title: 'AI will reward selectivity.',
    body: 'Not every company investing in AI will be a winner. We expect the market to become more discerning, rewarding companies both creating and productively deploying AI.',
  },
  {
    icon: Globe,
    title: 'International opportunities persist.',
    body: 'Foreign stocks remain cheaper than U.S. counterparts. We see particular opportunity in Japanese and South Korean equities, where governance reforms and buyback activity may provide compounding tailwinds.',
  },
  {
    icon: LineChart,
    title: 'Forward returns may moderate.',
    body: 'After three strong years, current valuations and 4% Treasury yields suggest more measured expectations ahead \u2014 making tax efficiency and diversification even more critical.',
  },
]

export default function InvestmentPhilosophyPage() {
  return (
    <>
      {/* ================================================================
          SECTION 1: HERO
          ================================================================ */}
      <section className="relative bg-[#333333] bg-texture-dark pt-[140px] pb-[96px] md:pt-[180px] md:pb-[120px] overflow-hidden">
        {/* Hero background image — semi-transparent overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/investments-hero.webp"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-[20px] md:px-[80px]">
          <div className="max-w-[680px]">
            <AnimateOnScroll>
              <SectionEyebrow text="INVESTMENT PHILOSOPHY" light />
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-serif text-[36px] md:text-[56px] font-bold text-[#F7F4EE] leading-[1.15] mt-6">
                Disciplined Thinking. Intelligent Execution.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="font-sans text-[17px] md:text-[20px] font-light text-[#b6d0ed] leading-[1.6] max-w-[580px] mt-6">
                Your wealth wasn&rsquo;t built on guesswork &mdash; and it
                shouldn&rsquo;t be managed that way. Our investment philosophy
                combines experienced human judgment with Farther&rsquo;s
                Intelligent Wealth Platform to pursue long-term growth, manage
                risk deliberately, and protect what you&rsquo;ve built from
                unnecessary tax erosion.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8">
                <Button
                  href="https://meetings.hubspot.com/jay-chang1/farthercom"
                  variant="primary"
                >
                  Request a Private Introduction{' '}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: WHAT WE BELIEVE — Principles Before Products
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT WE BELIEVE" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
              Principles Before Products.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
              At the core of every portfolio decision is a set of convictions
              &mdash; not trends, not headlines, not last quarter&rsquo;s
              performance. These are the principles that guide how we invest on
              your behalf:
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {principles.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 100}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                  <p.icon className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
                  <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                    {p.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: HOW WE BUILD PORTFOLIOS — Steps
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="HOW WE BUILD PORTFOLIOS" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
              Asset Allocation Methodology.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
              Every client portfolio starts with your financial reality, not a
              model number. Our allocation process follows a structured framework
              designed to reflect the full picture of your wealth.
            </p>
          </AnimateOnScroll>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 100}>
                <div className="border-l-4 border-[#1d7682] pl-7 py-2">
                  <span className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em]">
                    STEP {step.number}
                  </span>
                  <h3 className="font-serif text-[22px] font-semibold text-[#333333] mt-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Asset Class Detail — under Step 2 */}
          <AnimateOnScroll delay={200}>
            <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[40px_32px] md:p-[48px] mt-12">
              <h3 className="font-serif text-[22px] font-semibold text-[#333333]">
                Core Asset Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
                <div>
                  <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#1d7682]" />
                    Public Equities
                  </h4>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
                    U.S. large-cap, mid-cap, small-cap, and international, with
                    sector diversification informed by macroeconomic analysis
                    &mdash; defensive sectors such as healthcare and consumer
                    staples may be overweighted during periods of elevated
                    volatility.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#1d7682]" />
                    Fixed Income
                  </h4>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
                    Municipal bonds for taxable investors when relative value is
                    attractive; U.S. Treasuries over corporate bonds when the
                    credit premium is historically narrow; and inflation-protected
                    TIPS bonds as a hedge against inflation risk.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#1d7682]" />
                    Alternative Investments
                  </h4>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
                    Private credit, private real estate, infrastructure, and
                    private equity/venture capital accessed through Farther&rsquo;s
                    curated network, with a bias toward selectivity and niche
                    managers over the largest asset gatherers.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-[15px] font-semibold text-[#333333] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1d7682]" />
                    Cash &amp; Liquidity Reserves
                  </h4>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-2">
                    Structured to ensure you are never a forced seller during a
                    market dislocation.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: ALTERNATIVE INVESTMENTS
          ================================================================ */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
            <div>
              <AnimateOnScroll>
                <SectionEyebrow text="ALTERNATIVE INVESTMENTS" light />
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#F7F4EE] mt-4">
                  Beyond Stocks and Bonds &mdash; When It Makes Sense.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-6">
                  For families with $5M or more, alternatives can play a
                  meaningful role in portfolio construction &mdash; but only when
                  selected with discipline. We do not allocate to alternatives to
                  appear sophisticated. We allocate when a specific strategy
                  solves a specific portfolio need: uncorrelated return, inflation
                  protection, income generation, or risk reduction.
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={150}>
              <div className="space-y-6">
                <p className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em] uppercase">
                  OUR APPROACH
                </p>
                {[
                  {
                    label: 'Private Credit',
                    desc: 'We recommend avoiding the largest asset gatherers and favor more niche managers, particularly as cracks have begun to appear among certain issuers after several years of strong returns.',
                  },
                  {
                    label: 'Private Real Estate',
                    desc: 'Similarly selective, using specialized managers rather than generalist mega-funds.',
                  },
                  {
                    label: 'Infrastructure',
                    desc: 'Valued for portfolio exposure to real assets with inflation-linked return characteristics.',
                  },
                  {
                    label: 'Private Equity &amp; Venture Capital',
                    desc: 'We favor managers with proven records of investing via the secondary market, which can offer better entry pricing and shorter duration to liquidity.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-[#1d7682] pl-5"
                  >
                    <p
                      className="font-sans text-[15px] font-semibold text-[#F7F4EE]"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                    <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Alternatives Disclaimer */}
          <AnimateOnScroll delay={300}>
            <div className="mt-12 border-t border-[rgba(182,208,237,0.15)] pt-6">
              <p className="font-sans text-[13px] text-[#b6d0ed]/70 leading-relaxed max-w-[900px]">
                Alternative investments involve additional risks including
                illiquidity, lack of transparency, and limited regulatory
                oversight. They are not appropriate for all investors. We evaluate
                suitability based on your overall financial picture, liquidity
                needs, and investment time horizon before making any allocation
                recommendation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: TAX MANAGEMENT
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="TAX MANAGEMENT" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
              Every Basis Point Matters After Tax.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
              For families in the highest tax brackets, the gap between gross and
              net returns defines whether wealth compounds or stagnates. Our tax
              management approach is woven into every investment decision &mdash;
              not bolted on afterward.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Tax-Loss Harvesting */}
            <AnimateOnScroll>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <TrendingUp className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
                <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
                  Active Tax-Loss Harvesting
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  By systematically realizing losses on securities in taxable
                  accounts and replacing them with very similar securities, we
                  build a reservoir of tax losses that can be used against gains
                  elsewhere in your portfolio or carried forward to offset future
                  gains. Studies have shown that active tax-loss harvesting can
                  improve returns by 1&ndash;2% per annum. Farther&rsquo;s
                  Intelligent Wealth Platform proactively identifies these
                  opportunities, and your advisor validates each action within
                  the context of your broader financial plan.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Asset Location */}
            <AnimateOnScroll delay={100}>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Layers className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
                <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
                  Asset Location Optimization
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3 mb-4">
                  For clients with a mix of taxable and tax-deferred accounts,
                  where you hold each investment matters as much as what you hold:
                </p>
                <ul className="space-y-3">
                  <Bullet>
                    <strong>Taxable accounts:</strong> Tax-efficient assets such
                    as equities and municipal bonds
                  </Bullet>
                  <Bullet>
                    <strong>Tax-deferred accounts (IRAs, 401(k)s):</strong>{' '}
                    Tax-inefficient assets such as high-yield bonds, private
                    credit, and other investments that generate ordinary income
                  </Bullet>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Tax-Intelligent Tech */}
            <AnimateOnScroll delay={200}>
              <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full">
                <Zap className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
                <h3 className="font-sans text-[17px] font-semibold text-[#333333]">
                  Tax-Intelligent Technology
                </h3>
                <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                  All Farther investment strategies benefit from our
                  platform&rsquo;s intuitive tax technology. The system monitors
                  portfolios continuously for harvesting opportunities, wash-sale
                  compliance, and asset location drift &mdash; enabling your
                  advisor to execute tax-aware decisions with speed and precision
                  that manual processes cannot match.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Tax Disclaimer */}
          <AnimateOnScroll delay={300}>
            <p className="font-sans text-[12px] text-[#5b6a71]/80 leading-relaxed mt-8 max-w-[900px] italic">
              Farther&rsquo;s tax alpha methodology is calculated using
              standardized assumptions including specific short-term (40.8%) and
              long-term (23.8%) tax rates. Individual results will vary based on
              your personal tax situation. Farther does not provide tax or legal
              advice; please consult your tax and legal professionals for
              guidance on these matters.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: TECHNOLOGY-ENHANCED ADVICE
          ================================================================ */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="TECHNOLOGY-ENHANCED ADVICE" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#333333] mt-4 heading-accent">
              Your Advisor Thinks. Our Platform Executes.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6 max-w-[720px]">
              Most investors are forced to choose between a human advisor or
              modern technology. At Farther, you get both. Our Intelligent Wealth
              Platform was built from the ground up &mdash; not bolted onto
              legacy infrastructure &mdash; to enhance what your advisor does,
              not to automate them away.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* What the platform does */}
            <AnimateOnScroll>
              <div className="bg-[#333333] rounded-[16px] p-[40px]">
                <p className="font-sans text-[13px] font-bold text-[#1d7682] tracking-[0.15em] uppercase mb-6">
                  WHAT THE PLATFORM DOES
                </p>
                <ul className="space-y-4">
                  {[
                    'Constructs data-driven financial roadmaps from your stated goals and constraints',
                    'Monitors portfolios continuously for tax-loss harvesting opportunities, rebalancing triggers, and operational risk',
                    'Transforms complex portfolio data into actionable insights that enhance the efficiency and effectiveness of market execution',
                    'Enables advanced portfolio customization that would be impractical with manual processes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#1d7682] mt-1 shrink-0" />
                      <span className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* What your advisor does */}
            <AnimateOnScroll delay={150}>
              <div className="bg-[#F7F4EE] border border-[#E8E6E1] rounded-[16px] p-[40px]">
                <p className="font-sans text-[13px] font-bold text-[#333333] tracking-[0.15em] uppercase mb-6">
                  WHAT YOUR ADVISOR DOES
                </p>
                <ul className="space-y-4">
                  {[
                    'Listens to what the data cannot capture \u2014 your family dynamics, your relationship with risk, your definition of \u201Cenough\u201D',
                    'Makes strategic judgment calls about when to act and when to wait',
                    'Coordinates with your CPA, estate attorney, and other professionals',
                    'Serves as your fiduciary advocate across every financial decision',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#333333] mt-1 shrink-0" />
                      <span className="font-sans text-[15px] text-[#333333] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body text-[#5b6a71] leading-relaxed mt-10 max-w-[800px]">
              The result is a model where technology handles the daily
              administration and analytical heavy lifting, freeing your advisor
              to focus on the strategic, relational, and deeply personal work
              that defines exceptional wealth management.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: 2026 MARKET CONTEXT
          ================================================================ */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <SectionEyebrow text="OUR CURRENT THINKING" light />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-h2-mobile md:text-h2 font-bold text-[#F7F4EE] mt-4">
              2026 Market Context.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body text-[#b6d0ed] leading-relaxed mt-6 max-w-[680px]">
              Markets evolve. Your strategy should anticipate &mdash; not react
              to &mdash; those shifts. As of early 2026, our investment outlook
              includes the following themes:
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {outlookThemes.map((theme, i) => (
              <AnimateOnScroll key={theme.title} delay={i * 100}>
                <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(182,208,237,0.1)] rounded-[12px] p-[32px]">
                  <theme.icon className="w-8 h-8 text-[#1d7682] mb-4" strokeWidth={1.5} />
                  <h3 className="font-sans text-[17px] font-semibold text-[#F7F4EE]">
                    {theme.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#b6d0ed] leading-relaxed mt-3">
                    {theme.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={400}>
            <p className="font-sans text-[12px] text-[#b6d0ed]/60 leading-relaxed mt-10 max-w-[900px] italic">
              This commentary reflects our views as of March 2026 and is subject
              to change. It is provided for informational purposes only and does
              not constitute investment advice or a recommendation to buy, sell,
              or hold any security. Past performance is not indicative of future
              results.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: CLOSING CTA
          ================================================================ */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-[800px] mx-auto text-center px-[20px]">
          <AnimateOnScroll>
            <SectionEyebrow text="NEXT STEPS" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-[#333333] mt-4">
              A Strategy That Reflects the Full Picture of Your Wealth.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#5b6a71] leading-relaxed mt-6">
              The best time to design an investment approach is before markets
              force your hand. If you are evaluating whether your current
              portfolio is structured for where you are headed &mdash; not just
              where you have been &mdash; we welcome the conversation.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Begin a Confidential Conversation{' '}
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Button>
              <Button
                href="https://www.farther.com/post/the-farther-2026-outlook-embrace-volatility"
                variant="outline"
              >
                Download Our 2026 Investment Outlook
              </Button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 font-sans text-sm text-[#5b6a71]">
              <a
                href="tel:+14809440880"
                className="hover:text-[#1d7682] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (480) 944-0880
              </a>
              <a
                href="mailto:jay.chang@farther.com"
                className="hover:text-[#1d7682] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                jay.chang@farther.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ================================================================
          COMPLIANCE FOOTER
          ================================================================ */}
      <section className="bg-[#FAFAF8] py-[40px]">
        <div className="max-w-[900px] mx-auto px-[20px] md:px-[80px]">
          <p className="font-sans text-[11px] text-[#5b6a71]/80 leading-[1.8]">
            Advisory services are provided by Farther Finance Advisors LLC, an
            SEC-registered investment adviser. Investing in securities involves
            risk, including the potential loss of principal. Before investing,
            consider your investment objectives, as well as Farther Finance
            Advisors LLC&rsquo;s fees and expenses. Farther Finance Advisors LLC
            does not provide tax or legal advice; please consult your tax and
            legal professionals for guidance on these matters. Alternative
            investments involve additional risks including illiquidity, limited
            transparency, and limited regulatory oversight and are not suitable
            for all investors. For more details, see our disclosures in{' '}
            <Link
              href="/documents/FFA-ADV-Packet-2.6.26.pdf"
              className="underline hover:text-[#1d7682]"
              target="_blank"
            >
              Form ADV Part 2
            </Link>
            . Past performance is not indicative of future results. The
            information presented on this page is for informational purposes only
            and does not constitute a recommendation or solicitation.{' '}
            <Link href="/disclosures" className="underline hover:text-[#1d7682]">
              Terms of Use
            </Link>{' '}
            |{' '}
            <Link href="/disclosures" className="underline hover:text-[#1d7682]">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link
              href="/documents/FFA-ADV-Packet-2.6.26.pdf"
              className="underline hover:text-[#1d7682]"
              target="_blank"
            >
              Form CRS
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
