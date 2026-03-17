import type { Metadata } from 'next';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Financial Advisor in Mesa, AZ | Apple Employee Specialist | Jay Chang, Farther',
  description: 'Fiduciary financial advisor in Mesa, Arizona specializing in Apple employees at the Mesa operations center. RSU planning, ESPP optimization, and tenure-based 401(k) strategy for Apple professionals.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/financial-advisor-mesa-az',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Financial Advisor in Mesa, AZ | Apple Employee Specialist | Jay Chang, Farther',
    description: 'Fiduciary financial advisor in Mesa, Arizona specializing in Apple employees at the Mesa operations center. RSU planning, ESPP optimization, and tenure-based 401(k) strategy.',
    type: 'website',
    url: 'https://www.PWM-Farther.com/financial-advisor-mesa-az',
  },
};

export default function MesaFinancialAdvisor() {
  const trustLogos = [
    { name: 'CFP Board', description: 'Certified Financial Planner' },
    { name: 'SEC', description: 'Registered Investment Advisor' },
    { name: 'FINRA', description: 'Member Firm' },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Jay Chang, Farther',
    description: 'Fiduciary financial advisor serving Apple employees in Mesa, Arizona',
    url: 'https://www.PWM-Farther.com/financial-advisor-mesa-az',
    areaServed: [
      { '@type': 'City', name: 'Mesa' },
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
    'Biannual RSU vesting and withholding gap strategy',
    'Tenure-based 401(k) match optimization',
    'ESPP qualifying vs. disqualifying disposition planning',
    'Apple Deferred Compensation Plan (DCP) election guidance',
    'Retirement income planning for Apple professionals',
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
                Mesa Financial Advisor
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#333333] mb-6 leading-tight">
                Financial Advisor in Mesa, Arizona — Specializing in Apple Employees and East Valley Professionals
              </h1>
              <p className="font-sans text-lg md:text-xl text-[#5b6a71] mb-8 max-w-3xl mx-auto leading-relaxed">
                Mesa is home to Apple&apos;s major Arizona operations center. Apple employees navigate biannual RSU vesting, tenure-based 401(k) match, ESPP, and DCP. This unique compensation structure requires specialized financial planning expertise.
              </p>
              <Button
                href="https://meetings.hubspot.com/jay-chang1/farthercom"
                variant="primary"
              >
                Schedule a Mesa Strategy Call
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
                Specialized Planning for Apple Employees in Mesa
              </h2>
              <div className="prose prose-lg max-w-none text-[#5b6a71] font-sans space-y-4">
                <p>
                  Apple&apos;s Mesa operations center employs thousands of highly skilled professionals across engineering, operations, logistics, and management. Apple&apos;s compensation structure is distinct from most tech companies—featuring biannual RSU vesting (not quarterly), a tenure-based 401(k) match that accelerates with years of service, a generous ESPP program, and an optional Deferred Compensation Plan (DCP) for senior professionals.
                </p>
                <p>
                  This compensation design creates unique planning challenges. Biannual RSU vesting means larger, less frequent taxable events—but also creates specific withholding and estimated tax payment strategies. The tenure-based 401(k) match incentivizes long-term retention but requires understanding the optimal deferral and contribution strategy. ESPP elections have specific tax rules depending on holding periods. The DCP provides deferred compensation opportunities for senior managers.
                </p>
                <p>
                  Jay Chang specializes in Apple employee financial planning. Whether you&apos;re navigating RSU withholding gaps, maximizing your 401(k) and ESPP strategy, evaluating DCP elections, or planning your long-term retirement income, Farther brings specialized expertise to your situation.
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
                Financial Planning Services for Apple Professionals
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
              Ready to Optimize Your Apple Compensation Strategy?
            </h3>
            <p className="font-sans text-lg text-[#5b6a71] mb-8">
              A free strategy call gives us 30 minutes to understand your Apple compensation structure, equity position, and the tax opportunities you might be missing.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Mesa Strategy Call
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
              Jay Chang at Farther specializes in Apple employee compensation and comprehensive wealth planning. Let&apos;s work together to maximize your wealth and minimize taxes.
            </p>
            <Button
              href="https://meetings.hubspot.com/jay-chang1/farthercom"
              variant="primary"
            >
              Schedule a Mesa Strategy Call
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
