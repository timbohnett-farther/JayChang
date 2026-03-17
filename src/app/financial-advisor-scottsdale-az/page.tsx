import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Financial Advisor in Scottsdale, AZ | Physician & Executive Wealth Management | Jay Chang',
  description: 'Fiduciary financial advisor in Scottsdale, Arizona specializing in physicians at Mayo Clinic, Banner Health, and executives. High-income tax planning, asset protection, and retirement strategy.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Financial Advisor in Scottsdale, AZ | Physician & Executive Wealth Management | Jay Chang',
    description: 'Fiduciary financial advisor in Scottsdale, Arizona specializing in physicians at Mayo Clinic, Banner Health, and executives.',
    type: 'website',
    url: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
  },
};

export default function ScottsdaleFinancialAdvisor() {
  const trustLogos = [
    { name: 'CFP Board', description: 'Certified Financial Planner' },
    { name: 'SEC', description: 'Registered Investment Advisor' },
    { name: 'FINRA', description: 'Member Firm' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Jay Chang, Farther',
    description: 'Fiduciary financial advisor serving physicians and executives in Scottsdale, Arizona',
    url: 'https://www.PWM-Farther.com/financial-advisor-scottsdale-az',
    areaServed: [
      { '@type': 'City', name: 'Scottsdale' },
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
    'Physician high-income tax planning',
    'Mayo Clinic specialist retirement planning',
    'Banner Health executive strategy',
    'Asset protection and liability planning',
    'Estate and wealth transfer planning',
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
                Scottsdale Financial Advisor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
                Financial Advisor in Scottsdale, Arizona — Wealth Management for Physicians and Executives
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
                Home to Mayo Clinic Arizona campus, Banner Health/Honor Health facilities, and senior executives. Physicians earning $400K–$800K+ and corporate leaders need a specialist who understands their specific financial challenges.
              </p>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Scottsdale Financial Planning Call
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
                Financial Planning for Scottsdale&apos;s Highest-Income Professionals
              </h2>
              <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
                <p>
                  Scottsdale attracts some of Arizona&apos;s most accomplished physicians and executives. Mayo Clinic Arizona brings world-class specialists earning $400K–$800K+. Banner Health and Honor Health create demand for physician leaders and operational executives. The city also hosts senior executives from regional and national corporations.
                </p>
                <p>
                  These professionals face distinct challenges: managing extraordinary earned income, understanding liability and asset protection strategies, optimizing retirement savings when standard 401(k) contributions become inadequate, and planning for wealth transfer and estate succession.
                </p>
                <p>
                  Jay Chang works with Scottsdale physicians and executives to build comprehensive wealth strategies. From tax-efficient retirement planning and asset protection to estate planning and multi-generational wealth transfer, Farther brings specialized expertise to your situation.
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
                Financial Planning Services for Scottsdale Professionals
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
              Ready to Optimize Your Wealth Strategy?
            </h3>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              A free strategy call gives us 30 minutes to understand your practice, your wealth goals, and the tax and asset protection opportunities you might be missing.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Scottsdale Financial Planning Call
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
              Build Your Comprehensive Wealth Plan Today
            </h2>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              Jay Chang at Farther specializes in high-income physician and executive planning. Let&apos;s work together to protect, grow, and transfer your wealth.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Scottsdale Financial Planning Call
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
