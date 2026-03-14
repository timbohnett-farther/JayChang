import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import {
  BarChart3,
  Shield,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Farther Platform | Technology-Powered Wealth Management',
  description:
    'Farther\'s Intelligent Wealth Platform combines AI-powered financial planning, real-time portfolio visibility, and institutional-grade investment strategies for families with $2M–$20M.',
  alternates: {
    canonical: 'https://www.privatewealthatfarther.com/technology',
  },
}

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Portfolio Visibility',
    description:
      'Every account, every asset, every liability — visible in one place. See your complete financial picture across custodians, updated in real time.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Financial Planning',
    description:
      'Personalized investment proposals generated in under 10 minutes. Stress-tested across thousands of market scenarios for confidence in every recommendation.',
  },
  {
    icon: Shield,
    title: 'Automated Tax Optimization',
    description:
      'Tax-loss harvesting runs continuously — not just in December. The platform identifies and captures tax-saving opportunities year-round across your entire portfolio.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description:
      'No hidden fees, no opaque reporting. See exactly how your portfolio is performing, what you\'re paying, and how every decision impacts your financial plan.',
  },
  {
    icon: FileText,
    title: 'Secure Document Vault',
    description:
      'Estate plans, tax returns, insurance policies, and financial documents — securely stored and accessible whenever you need them.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Advisor Communication',
    description:
      'Message your advisory team directly through the platform. No call centers, no hold queues. A real person who knows your name and your goals.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'The Farther Platform — Technology-Powered Wealth Management',
            description:
              'Farther\'s Intelligent Wealth Platform combines AI-powered planning with institutional-grade investment strategies.',
            url: 'https://www.privatewealthatfarther.com/technology',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="THE FARTHER PLATFORM" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#1C2B3A] leading-[1.15] mt-4">
            Your Advisor, Powered by
            <br className="max-md:hidden" /> Something More Powerful.
          </h1>
          <p className="font-sans text-body-lg text-[#6B7A8D] max-w-[680px] mx-auto mt-6 leading-relaxed">
            Most wealth management technology was built for advisors. Ours was
            built for you — giving you complete transparency into your wealth
            while freeing your advisor to focus on strategy, not administration.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#0A1628] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center">
              <SectionEyebrow text="THE CHALLENGE" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#F7F4EE] mt-4">
                Until Now, You Had to Choose.
              </h2>
              <p className="font-sans text-[17px] text-[#BFC8D4] leading-relaxed mt-6">
                A boutique advisor who knows your name — but lacks the
                technology to truly optimize your portfolio. Or a mega
                institution with powerful tools — where you&apos;re one of
                hundreds and your advisor spends 70% of their time on paperwork.
              </p>
              <p className="font-sans text-[17px] text-[#BFC8D4] leading-relaxed mt-4">
                Farther eliminates that tradeoff.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-[#F7F4EE] bg-texture-light section-padding">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <SectionEyebrow text="PLATFORM CAPABILITIES" />
            <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#0A1628] mt-4">
              What the Platform Does for You.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 100}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#C9A84C] transition-all duration-300">
                  <div className="w-12 h-12 rounded-[8px] bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                    <feature.icon
                      size={24}
                      className="text-[#C9A84C]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-sans text-h4 font-semibold text-[#1C2B3A] mt-6">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#6B7A8D] leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The 90% Difference */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <SectionEyebrow text="THE RESULT" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#0A1628] mt-4">
                Your Advisor Spends 90% of Their Time on You.
              </h2>
              <p className="font-sans text-[17px] text-[#1C2B3A] leading-relaxed mt-6">
                At a traditional firm, your advisor spends the majority of their
                day on operations — paperwork, compliance reporting, manual
                rebalancing, account administration. The time left for
                you? Maybe 30%.
              </p>
              <p className="font-sans text-[17px] text-[#1C2B3A] leading-relaxed mt-4">
                Farther&apos;s platform handles the operational work, freeing
                your advisor to spend up to 90% of their time on high-impact
                client interactions — nearly triple the industry average. That
                means more strategy sessions, faster responses, and a deeper
                understanding of your evolving needs.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'More proactive outreach and strategy discussions',
                  'Faster response times when life throws a curveball',
                  'Deeper knowledge of your family, goals, and concerns',
                  'Regular plan reviews — not annual check-ins',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#C9A84C] mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[15px] text-[#1C2B3A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Platform Mockup Placeholder */}
          <AnimateOnScroll delay={200}>
            <div className="bg-[#0A1628] rounded-[16px] p-8 border border-[rgba(201,168,76,0.15)]">
              <div className="bg-[#1C2B3A] rounded-[8px] aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3
                    size={48}
                    className="text-[#C9A84C] mx-auto"
                    strokeWidth={1}
                  />
                  <p className="font-sans text-sm text-[#6B7A8D] mt-4">
                    Platform Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AUM Bar */}
      <section className="bg-[#C9A84C] py-6">
        <div className="max-w-container mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 px-[20px]">
          {[
            { number: '$7B+', label: 'ASSETS MANAGED' },
            { number: '90%', label: 'TIME ON CLIENTS' },
            { number: '<10min', label: 'AI PLAN GENERATION' },
            { number: '24/7', label: 'TAX OPTIMIZATION' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-[28px] md:text-[36px] text-[#0A1628]">
                {stat.number}
              </p>
              <p className="font-sans text-xs font-medium text-[#0A1628] tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] section-padding text-center">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-serif text-[44px] max-md:text-[30px] font-semibold text-[#F7F4EE] leading-[1.2]">
            Experience the Difference.
          </h2>
          <p className="font-sans text-[17px] text-[#F7F4EE]/85 leading-relaxed mt-5">
            See how Farther&apos;s Intelligent Wealth Platform transforms the
            wealth management experience. Schedule a conversation and
            we&apos;ll walk you through it.
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
              className="hover:text-[#F7F4EE] transition-colors"
            >
              (555) 000-0000
            </a>{' '}
            · Or email{' '}
            <a
              href="mailto:robert.davenport@farther.com"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              robert.davenport@farther.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
