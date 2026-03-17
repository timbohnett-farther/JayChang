import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Financial Advisor in Tempe, AZ | Jay Chang, Farther | Fiduciary Wealth Management',
  description: 'Jay Chang is a fiduciary financial advisor based in Tempe, Arizona at Farther. Serving engineers, physicians, and executives across the East Valley with comprehensive, technology-powered wealth management.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/financial-advisor-tempe-az',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Financial Advisor in Tempe, AZ | Jay Chang, Farther | Fiduciary Wealth Management',
    description: 'Jay Chang is a fiduciary financial advisor based in Tempe, Arizona at Farther. Serving engineers, physicians, and executives across the East Valley.',
    type: 'website',
    url: 'https://www.PWM-Farther.com/financial-advisor-tempe-az',
  },
};

export default function TempeFinancialAdvisor() {
  const trustLogos = [
    { name: 'CFP Board', description: 'Certified Financial Planner' },
    { name: 'SEC', description: 'Registered Investment Advisor' },
    { name: 'FINRA', description: 'Member Firm' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Jay Chang, Farther',
    description: 'Fiduciary financial advisor based in Tempe, Arizona serving engineers, physicians, and executives',
    url: 'https://www.PWM-Farther.com/financial-advisor-tempe-az',
    areaServed: [
      { '@type': 'City', name: 'Tempe' },
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
    'Equity compensation and RSU planning',
    'Amkor Technology employee strategy',
    'Tech and engineering sector specialization',
    'Multi-year tax planning',
    'Comprehensive retirement income planning',
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
                Tempe Financial Advisor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
                Fiduciary Financial Advisor in Tempe, Arizona
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
                Jay is based in Tempe, home to the ASU tech ecosystem and Amkor Technology headquarters. As VP, Wealth Advisor at Farther, he serves clients from Chandler to Scottsdale to North Phoenix with a $15B+ technology-enabled platform.
              </p>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Tempe Strategy Call
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
                Wealth Management for Tempe and East Valley Professionals
              </h2>
              <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
                <p>
                  Tempe is the heart of Arizona&apos;s technology and innovation ecosystem. Home to Arizona State University&apos;s engineering and computer science programs, the city has become a hub for tech talent. Amkor Technology, one of the world&apos;s leading semiconductor assembly and test companies, is headquartered here—creating demand for engineers, operations professionals, and leaders across all income levels.
                </p>
                <p>
                  Jay Chang is based in Tempe and serves professionals throughout the East Valley, Phoenix, Chandler, and Scottsdale. Whether you&apos;re managing RSU concentration, optimizing equity compensation, planning multi-state tax strategy, or building a comprehensive retirement income plan, Jay brings specialized expertise and a technology-powered platform to your situation.
                </p>
                <p>
                  At Farther, we combine human expertise with technology to deliver comprehensive, scalable wealth management. Our $15B+ platform provides access to sophisticated investment strategies, tax optimization tools, and retirement planning models that scale to your needs.
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
                Financial Planning Services for Tempe Professionals
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
              Ready to Build Your Tempe Wealth Strategy?
            </h3>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              A free strategy call gives us 30 minutes to understand your situation, goals, and the financial opportunities you might be missing.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Tempe Strategy Call
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
              Working with Jay Chang at Farther means accessing a fiduciary advisor who specializes in the specific challenges Tempe and East Valley professionals face.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Tempe Strategy Call
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
