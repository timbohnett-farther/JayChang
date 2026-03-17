import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Schedule a Strategy Call With Jay Chang | Farther Wealth Advisor | Phoenix, AZ',
  description: 'Book a free, confidential financial strategy call with Jay Chang, fiduciary advisor at Farther. No obligation. No pitch. Built for engineers, physicians, and executives across Arizona, California, and Nevada.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/schedule-call',
  },
};

export default function ScheduleCall() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-[#F7F4EE] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold text-[#333333] mb-6">
              Schedule Your Strategy Call
            </h1>
            <p className="text-xl text-[#5b6a71] max-w-2xl">
              One conversation. Clarity on your financial plan, your equity, your taxes, and whether Jay is the right advisor for your situation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-[#333333] mb-12">
              What to Expect
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                30-minute, no-obligation conversation:
              </h3>
              <ul className="space-y-4 text-lg text-[#5b6a71]">
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">•</span>
                  <span>Understand current compensation, equity, financial situation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">•</span>
                  <span>Identify top 1-2 financial priorities and concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">•</span>
                  <span>Determine fit with Jay&apos;s expertise and Farther&apos;s platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">•</span>
                  <span>Give you at least one actionable idea immediately</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                What This Is Not:
              </h3>
              <ul className="space-y-3 text-lg text-[#5b6a71]">
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">×</span>
                  <span>Not a sales call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">×</span>
                  <span>Not a product presentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">×</span>
                  <span>Not a commitment of any kind</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                Who This Is For:
              </h3>
              <ul className="space-y-3 text-lg text-[#5b6a71]">
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">✓</span>
                  <span>Significant RSUs, stock options, or ESPP at a major employer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">✓</span>
                  <span>Navigating NQDC (SERPLUS, RTX DCP, or similar)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">✓</span>
                  <span>Physician or executive with high income and limited time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">✓</span>
                  <span>Recently relocated to Arizona from California</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d7682] font-bold mr-4">✓</span>
                  <span>$500K+ investable assets and current plan isn&apos;t keeping pace</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CALENDAR & CONTACT SECTION */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="bg-white rounded-[12px] p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold text-[#333333] mb-8">
                Ready to Get Started?
              </h3>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Open Jay&apos;s Calendar
              </Button>
              <p className="text-lg text-[#5b6a71] mt-6">
                or call <a href="tel:+14809440880" className="font-semibold text-[#1d7682] hover:underline">(480) 944-0880</a>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* TRUST BLOCK SECTION */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-[#333333] mb-12">
              Why Professionals Trust Jay
            </h2>

            <ul className="space-y-6 text-lg text-[#5b6a71]">
              <li className="flex items-start">
                <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
                <span>
                  <strong className="text-[#333333]">Fiduciary, always</strong> — legally required to act in your interest
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
                <span>
                  <strong className="text-[#333333]">Deep compensation expertise</strong> — Intel SERPLUS, NVIDIA ESPP, RTX pension, Apple DCP, Banner Health 401(k)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
                <span>
                  <strong className="text-[#333333]">Farther&apos;s Intelligent Wealth Platform</strong> — $15B+ AUM, automated tax-loss harvesting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
                <span>
                  <strong className="text-[#333333]">Named Best RIA to Work For, 2025</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1d7682] font-bold mr-4 text-xl">•</span>
                <span>
                  <strong className="text-[#333333]">Based in Tempe</strong>, serving AZ, CA, and NV
                </span>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
