import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Financial Advisor in Chandler, AZ | Intel & Microchip Employee Specialist | Jay Chang, Farther',
  description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona. RSU planning, SERPLUS guidance, mega backdoor Roth, and ESPP strategy for semiconductor professionals.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Financial Advisor in Chandler, AZ | Intel & Microchip Employee Specialist | Jay Chang, Farther',
    description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona. RSU planning, SERPLUS guidance, mega backdoor Roth, and ESPP strategy.',
    type: 'website',
    url: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
  },
};

export default function ChandlerFinancialAdvisor() {
  const trustLogos = [
    { name: 'CFP Board', description: 'Certified Financial Planner' },
    { name: 'SEC', description: 'Registered Investment Advisor' },
    { name: 'FINRA', description: 'Member Firm' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Jay Chang, Farther',
    description: 'Fiduciary financial advisor serving Intel and Microchip Technology employees in Chandler, Arizona',
    url: 'https://www.PWM-Farther.com/financial-advisor-chandler-az',
    areaServed: [
      { '@type': 'City', name: 'Chandler' },
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
    'Deep Intel SERPLUS knowledge',
    'Microchip equity strategy',
    'Multi-state tax planning for CA relocations',
    'Retirement income planning',
    'Mega backdoor Roth strategy',
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
                Chandler Financial Advisor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
                Financial Advisor in Chandler, Arizona — Specializing in Intel and Microchip Technology Employees
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
                Chandler is the semiconductor capital of the American Southwest. Home to Intel&apos;s massive campus and Microchip Technology&apos;s headquarters, this city has created extraordinary wealth for engineers, operations leaders, and program managers.
              </p>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Chandler Strategy Call
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
                Specialized Planning for Intel and Microchip Technology Professionals
              </h2>
              <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
                <p>
                  Chandler professionals face unique equity compensation challenges. Intel&apos;s SERPLUS (Stock Equity Recognition Plan for Long-Term US Professionals) creates multi-year vesting schedules and specific tax planning opportunities. Microchip Technology&apos;s equity plans require understanding of their specific grant structures and market conditions.
                </p>
                <p>
                  Many Chandler professionals are relocating from California, bringing capital gains complexity and state tax savings opportunities. Others are in the critical mid-career phase where strategic retirement planning decisions compound over decades.
                </p>
                <p>
                  Jay Chang works with Intel and Microchip employees to navigate RSU vesting, optimize ESPP elections, understand SERPLUS mechanics, plan tax-efficient relocations, and build comprehensive retirement income strategies. Whether you&apos;re managing equity concentration or optimizing your 401(k) and mega backdoor Roth contributions, Farther brings specialized expertise to your situation.
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
                Financial Planning Services for Chandler Professionals
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
              Ready to Optimize Your Chandler Financial Plan?
            </h3>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              A free strategy call gives us 30 minutes to understand your equity situation, relocation goals, and the tax opportunities you might be missing.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Chandler Strategy Call
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-[#333333] mb-6">
              Build Your Comprehensive Wealth Strategy Today
            </h2>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              Jay Chang at Farther specializes in Intel and Microchip Technology compensation structures. Let&apos;s work together to maximize your wealth and minimize taxes.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Chandler Strategy Call
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
