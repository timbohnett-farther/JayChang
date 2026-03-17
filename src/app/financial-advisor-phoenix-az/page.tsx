import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Financial Advisor in Phoenix, AZ | Fiduciary Wealth Management | Jay Chang, Farther',
  description: 'Fiduciary financial advisor in Phoenix, Arizona. Jay Chang at Farther specializes in wealth management for semiconductor engineers, aerospace professionals, physicians, and executives across the Phoenix metro.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Financial Advisor in Phoenix, AZ | Fiduciary Wealth Management | Jay Chang, Farther',
    description: 'Fiduciary financial advisor in Phoenix, Arizona. Jay Chang at Farther specializes in wealth management for semiconductor engineers, aerospace professionals, physicians, and executives.',
    type: 'website',
    url: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
  },
};

export default function PhoenixFinancialAdvisor() {
  const trustLogos = [
    { name: 'CFP Board', description: 'Certified Financial Planner' },
    { name: 'SEC', description: 'Registered Investment Advisor' },
    { name: 'FINRA', description: 'Member Firm' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Jay Chang, Farther',
    description: 'Fiduciary financial advisor serving professionals in Phoenix, Arizona',
    url: 'https://www.PWM-Farther.com/financial-advisor-phoenix-az',
    areaServed: [
      { '@type': 'City', name: 'Phoenix' },
      { '@type': 'State', name: 'Arizona' },
    ],
    telephone: '+14809440880',
    priceRange: '$',
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+14809440880',
    },
  };

  const services = [
    'RSU/ESPP/equity planning for TSMC/Honeywell/Freeport/Banner',
    'Multi-year tax planning',
    'Retirement income planning',
    'Asset protection',
    'Relocation planning from CA',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-[#F7F4EE] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="text-sm md:text-base font-sans font-semibold text-[#1d7682] mb-4 tracking-wide uppercase">
                Phoenix Financial Advisor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
                Fiduciary Financial Advisor in Phoenix, Arizona
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
                Phoenix is one of America&apos;s most dynamic economic centers—home to TSMC&apos;s Fab 21, Honeywell&apos;s aerospace operations, and Banner Health&apos;s flagship systems. Professionals earning $150K–$800K+ need financial guidance built for their specific situations.
              </p>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Phoenix Financial Planning Call
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Body Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
                Wealth Management for Phoenix&apos;s Leading Professionals
              </h2>
              <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
                <p>
                  Phoenix has become a haven for high-earning professionals. TSMC&apos;s massive semiconductor fab brings engineers and operations leaders. Honeywell&apos;s aerospace division employs aerospace engineers and program managers. Freeport-McMoRan&apos;s corporate headquarters attracts executives and operations specialists. Banner Health and Honor Health create demand for physician specialists earning $400K–$800K+.
                </p>
                <p>
                  These professionals share a common challenge: equity compensation, multi-state tax complexity, relocation planning from California, and the need for a comprehensive wealth strategy that goes beyond generic financial advice.
                </p>
                <p>
                  Jay Chang works with Phoenix professionals to build integrated financial plans. Whether you&apos;re managing RSU concentration, optimizing ESPP elections, planning tax-efficient relocations from high-tax states, or building a retirement income strategy for $150K–$800K+ earnings, Farther brings specialized expertise to your situation.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#FAFAF8] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-8">
                Financial Planning Services for Phoenix Professionals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="font-sans text-[#333333] font-semibold">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-[#F7F4EE] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <h3 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
              Ready to Build Your Phoenix Strategy?
            </h3>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              A free strategy call gives us 30 minutes to understand your situation, goals, and the financial opportunities you might be missing.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Phoenix Financial Planning Call
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
              Let&apos;s Build Your Comprehensive Wealth Plan
            </h2>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              Working with Jay Chang at Farther means accessing a fiduciary advisor who specializes in the specific challenges Phoenix professionals face.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Phoenix Financial Planning Call
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Bar Footer */}
      <section className="bg-[#F7F4EE] py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustLogos.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-sans font-semibold text-[#333333] text-lg mb-2">
                    {item.name}
                  </p>
                  <p className="font-sans text-sm text-[#5b6a71]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300 text-center">
              <p className="font-sans text-sm text-[#5b6a71] mb-2">
                Questions? Call us at <a href="tel:+14809440880" className="font-semibold text-[#1d7682] hover:underline">(480) 944-0880</a>
              </p>
              <p className="font-sans text-xs text-[#5b6a71]">
                Jay Chang is a Certified Financial Planner™ and registered investment advisor fiduciary. This content is educational and not investment advice.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
