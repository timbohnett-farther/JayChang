import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import { FartherIcon } from '@/components/FartherLogo'
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
    'Farther\'s Intelligent Wealth Platform combines technology-powered financial planning, real-time portfolio visibility, and institutional-grade investment strategies for families with $2M–$20M.',
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
    title: 'Technology-Powered Financial Planning',
    description:
      'Personalized investment proposals generated efficiently. Stress-tested across a wide range of market scenarios for confidence in every recommendation.',
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
              'Farther\'s Intelligent Wealth Platform combines technology-powered planning with institutional-grade investment strategies.',
            url: 'https://www.privatewealthatfarther.com/technology',
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[60px] px-[80px] max-md:px-[20px] max-md:pt-[64px]">
        <div className="max-w-[900px] mx-auto text-center">
          <SectionEyebrow text="THE FARTHER PLATFORM" />
          <h1 className="font-serif text-[52px] max-md:text-[34px] font-bold text-[#333333] leading-[1.15] mt-4">
            Your Advisor, Powered by
            <br className="max-md:hidden" /> Something More Powerful.
          </h1>
          <p className="font-sans text-body-lg text-[#5b6a71] max-w-[680px] mx-auto mt-6 leading-relaxed">
            Most wealth management technology was built for advisors. Ours was
            built for you — giving you complete transparency into your wealth
            while freeing your advisor to focus on strategy, not administration.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#333333] bg-texture-dark section-padding">
        <div className="max-w-container mx-auto">
          <AnimateOnScroll>
            <div className="max-w-[680px] mx-auto text-center">
              <SectionEyebrow text="THE CHALLENGE" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#F7F4EE] mt-4">
                Until Now, You Had to Choose.
              </h2>
              <p className="font-sans text-[17px] text-[#b6d0ed] leading-relaxed mt-6">
                A boutique advisor who knows your name — but lacks the
                technology to truly optimize your portfolio. Or a mega
                institution with powerful tools — where you&apos;re one of
                hundreds and your advisor spends the majority of their time on paperwork.
              </p>
              <p className="font-sans text-[17px] text-[#b6d0ed] leading-relaxed mt-4">
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
            <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#333333] mt-4">
              What the Platform Does for You.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 100}>
                <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[40px_32px] hover:shadow-card-hover hover:border-[#1d7682] transition-all duration-300">
                  <div className="w-12 h-12 rounded-[8px] bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                    <feature.icon
                      size={24}
                      className="text-[#1d7682]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-sans text-h4 font-semibold text-[#333333] mt-6">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* More Time on You */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <SectionEyebrow text="THE RESULT" />
              <h2 className="font-serif text-h2 max-md:text-h2-mobile font-normal text-[#333333] mt-4">
                Significantly More Advisor Time Focused on You.
              </h2>
              <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-6">
                At a traditional firm, your advisor spends the majority of their
                day on operations &mdash; paperwork, compliance reporting, manual
                rebalancing, account administration. The time left for
                you is often a fraction of their workday.
              </p>
              <p className="font-sans text-[17px] text-[#333333] leading-relaxed mt-4">
                Farther&apos;s platform handles the operational work, freeing
                your advisor to devote significantly more of their time to
                high-impact client interactions. That means more strategy
                sessions, faster responses, and a deeper understanding of your
                evolving needs.
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
                      className="text-[#1d7682] mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[15px] text-[#333333]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Platform Mockup Placeholder */}
          <AnimateOnScroll delay={200}>
            <div className="bg-[#333333] rounded-[16px] p-8 border border-[rgba(201,168,76,0.15)]">
              <div className="rounded-[8px] aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/advisor-couple-meeting.jpeg"
                  alt="Advisor meeting with clients, powered by Farther platform"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Recognition badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-[rgba(201,168,76,0.1)]">
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">#1</p>
                  <p className="font-sans text-[10px] text-[#5b6a71] tracking-wider uppercase">Inc. 5000 FinServ</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">#1</p>
                  <p className="font-sans text-[10px] text-[#5b6a71] tracking-wider uppercase">Deloitte Fintech</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[20px] text-[#1d7682]">2024</p>
                  <p className="font-sans text-[10px] text-[#5b6a71] tracking-wider uppercase">WealthTech of Year</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AUM Bar */}
      <section className="bg-[#1d7682] py-6">
        <div className="max-w-container mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 px-[20px]">
          {[
            { number: '$18B+', label: 'RECRUITED ASSETS' },
            { number: '500+', label: 'ADVISOR PARTNERS' },
            { number: '9', label: 'INTEGRATED SERVICES' },
            { number: '24/7', label: 'TAX OPTIMIZATION' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-sans text-[28px] md:text-[36px] text-[#333333]">
                {stat.number}
              </p>
              <p className="font-sans text-xs font-medium text-[#333333] tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#333333] section-padding text-center">
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
            <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
              Schedule a Conversation
            </Button>
          </div>
          <p className="font-sans text-sm text-[#F7F4EE]/60 mt-5">
            Prefer to call?{' '}
            <a
              href="tel:+17252384291"
              className="hover:text-[#F7F4EE] transition-colors"
            >
              (725) 238-4291
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
