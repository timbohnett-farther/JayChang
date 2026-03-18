import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'How Jay Chang Works With Clients | The Farther Wealth Management Process',
  description: 'Discover how Jay Chang builds financial plans for high-income professionals — from the first discovery call through long-term partnership. Powered by Farther&apos;s Intelligent Wealth Platform.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/process',
  },
};

const steps = [
  {
    number: 1,
    headline: 'A Conversation, Not a Presentation',
    title: 'Discovery Call',
    body: '30-45 minutes. Understand your situation. Cover: compensation structure, existing accounts, top concerns, fit assessment. No obligation, no pitch deck, no pressure. If Jay can give you one useful idea regardless of becoming a client, that&apos;s a successful conversation.',
    cta: 'Schedule Your Discovery Call',
  },
  {
    number: 2,
    headline: 'We Handle the Setup So You Don&apos;t Have to Think About It',
    title: 'Onboarding & Data Gathering',
    body: 'Farther Concierge Team takes over. Clients provide: recent pay stubs and equity plan statements, 2 years tax returns, 401(k) and deferred comp details, current investment statements, benefits enrollment summary. Secure digital portal for uploads.',
  },
  {
    number: 3,
    headline: 'A Financial Plan That Actually Reflects How You&apos;re Paid',
    title: 'Plan Design',
    body: 'Dynamic, scenario-based analysis covering: multi-year tax projections, equity vesting calendar with after-tax modeling, retirement income projections under multiple scenarios, investment portfolio design, prioritized action items ranked by financial impact. Review together in dedicated meeting.',
  },
  {
    number: 4,
    headline: 'From Decision to Done: Without the Paperwork Burden',
    title: 'Implementation',
    body: 'Farther Concierge Team executes: account transfers, investment purchases, beneficiary updates, employer benefits coordination. Most clients fully onboarded in days, not weeks.',
  },
  {
    number: 5,
    headline: 'Your Plan Doesn&apos;t Sit Still. Neither Do We.',
    title: 'Ongoing Optimization',
    body: 'Quarterly check-ins on equity vesting, tax positioning, portfolio performance. Proactive outreach before major events (open enrollment, RSU vests, year-end deadlines). Annual plan review. On-demand access when life happens. Jay&apos;s goal: be the first call when a financial question arises.',
  },
];

export default function ProcessPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#333333] px-6 py-20 md:py-32">
        <Image
          src="/Photos/Jay-Office.webp"
          alt="Jay Chang office"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] via-[#333333]/90 to-[#333333]/40" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="text-sm font-semibold text-[#1d7682] uppercase tracking-wide mb-4">
                THE PROCESS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F4EE] mb-6 leading-tight">
                How Working With Jay Actually Works
              </h1>
              <p className="text-xl text-[#F7F4EE]/90 mb-8 max-w-2xl mx-auto">
                Simple from your side. Sophisticated on ours.
              </p>
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Schedule Your Discovery Call
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Steps Section */}
      <section>
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}
          >
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
              <AnimateOnScroll>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#1d7682] flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                      {step.headline}
                    </h2>
                    <p className="text-lg text-[#5b6a71] leading-relaxed mb-6">
                      {step.body}
                    </p>
                    {step.cta && (
                      <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="outline">
                        {step.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#333333] px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Hardest Part Is the First Call. Everything After That Is Handled.
            </h2>
            <div className="mb-6">
              <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">
                Schedule Your Discovery Call
              </Button>
            </div>
            <p className="text-white text-lg mb-2">
              Free &middot; Confidential &middot; No obligation
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Footer Bar */}
      <footer className="bg-[#FAFAF8] px-6 py-8 text-center text-[#5b6a71]">
        <p className="text-sm">
          Jay Chang | Farther Wealth Management | (480) 944-0880
        </p>
        <p className="text-sm mt-2">
          Questions? Schedule a call:{' '}
          <a href="https://meetings.hubspot.com/jay-chang1/farthercom" className="text-[#1d7682] hover:underline">
            https://meetings.hubspot.com/jay-chang1/farthercom
          </a>
        </p>
      </footer>
    </main>
  );
}
