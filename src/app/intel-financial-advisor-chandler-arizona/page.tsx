import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
 title: 'Intel Employee Financial Planning in Chandler | RSU, SERPLUS & 401(k) Strategy | Jay Chang',
 description: 'Specialized financial planning for Intel engineers and leaders in Chandler. SERPLUS guidance, mega backdoor Roth, RSU diversification, and tax strategy from a fiduciary advisor who knows Intel&apos;s benefits inside and out.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/intel-financial-advisor-chandler-arizona',
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function IntelFinancialAdvisor() {
 return (
 <>
 {/* FAQPage JSON-LD Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
   {
   '@type': 'Question',
   name: 'What happens to my SERPLUS if I&apos;m laid off from Intel?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Under most NQDC plan structures, an involuntary termination qualifies as a separation from service, triggering distributions per your elected schedule under IRC 409A rules. Jay can help you understand your specific distribution timing and tax planning options before your separation date.',
   },
   },
   {
   '@type': 'Question',
   name: 'Should I always sell Intel RSUs when they vest?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Not necessarily. The right answer depends on your total exposure to Intel stock, your financial goals, your tax situation, and your views on Intel&apos;s recovery. Jay builds a written, rules-based framework so the decision is made proactively - not emotionally on the day of vesting.',
   },
   },
   {
   '@type': 'Question',
   name: 'Can Jay help with Intel employees relocating from California?',
   acceptedAnswer: {
   '@type': 'Answer',
   text: 'Yes. Multi-state tax planning for CA to AZ relocations is a core part of Jay&apos;s work with semiconductor professionals. The timing of RSU sales, residency establishment, and income attribution across states can meaningfully impact your tax bill.',
   },
   },
  ],
  }),
  }}
 />

 {/* HERO SECTION */}
 <section className="relative bg-[#F7F4EE] py-20 px-6">
  <Image
  src="/Photos/Jay-Intel.png"
  alt="Jay Chang Intel financial advisor"
  fill
  className="object-cover opacity-20"
  priority
  />
  <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EE] via-[#F7F4EE]/90 to-[#F7F4EE]/40" />
  <div className="relative z-10 max-w-4xl mx-auto text-center">
  <div className="text-sm font-sans text-[#5b6a71] tracking-wide uppercase mb-6">
  Intel Employee Financial Planning
  </div>
  <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#333333] mb-6 leading-tight">
  Intel Employees: Your Benefits Are Sophisticated. Your Financial Plan Should Be Too.
  </h1>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
  From SERPLUS and mega backdoor Roth to RSU vesting and concentrated stock risk - Jay Chang helps Intel engineers and leaders in Chandler and beyond transform complex compensation into a clear, confident path to lasting wealth.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">Schedule a Free Intel Benefits Strategy Call</Button>
  </div>
  <div className="text-[#5b6a71] font-sans">
  or call <span className="font-semibold text-[#333333]">(480) 944-0880</span>
  </div>
  </div>
 </section>

 {/* TRUST BAR */}
 <section className="bg-white border-y border-gray-200 py-6 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-[#5b6a71]">
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Advisor at Farther | SEC-Registered RIA</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Fiduciary - Your interests come first</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>$15B+ AUM</span>
  </div>
  <div className="flex items-center gap-2">
   <span className="font-semibold text-[#1d7682]">✓</span>
   <span>Best RIA to Work For 2025</span>
  </div>
  </div>
  </div>
 </section>

 {/* SECTION 1: THE INTEL OPPORTUNITY */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Intel Has Given You Powerful Tools. Most Employees Don&apos;t Use Them Fully.
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-12 leading-relaxed">
   Intel&apos;s compensation and benefits package is one of the most sophisticated in the semiconductor industry - but also one of the most complex to manage. If you&apos;re not actively coordinating your RSUs, SERPLUS deferral, mega backdoor Roth, 401(k) match, and ESPP, you&apos;re almost certainly leaving money on the table and potentially walking into significant tax surprises.
  </p>

  {/* BENEFIT CARDS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {/* Card 1: 401(k) Match */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">401(k) Match</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   5% of eligible compensation, with immediate 100% vesting and full Roth and mega backdoor Roth support - enabling contributions up to $72,000 per year for employees under 50 (2026 limit).
   </p>
   </div>

   {/* Card 2: ESPP */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">ESPP</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   15% discount off the lower of enrollment or purchase date price - a lookback feature that makes Intel&apos;s ESPP among the most valuable in the sector.
   </p>
   </div>

   {/* Card 3: RSU Vesting */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">RSU Vesting</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Quarterly over 4 years (12 substantially equal tranches), creating up to 4 taxable events annually on top of your salary and bonus.
   </p>
   </div>

   {/* Card 4: SERPLUS */}
   <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition">
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">SERPLUS (NQDC)</h3>
   <p className="text-[#5b6a71] font-sans leading-relaxed">
   Available to Grade Level 10+, allowing deferral of up to 60% of base salary and 75% of bonus - with dollar-for-dollar employer match on excess pay up to 5%, but as an unsecured, unfunded obligation of Intel.
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 2: THE SERPLUS PROBLEM */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   $3.3 Billion in Unsecured Employee Deferrals. Is Yours Protected?
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Intel&apos;s SERPLUS balance stands at $3.3 billion - money owed to employees but held as an unsecured general liability on Intel&apos;s balance sheet. That means if Intel were ever to face severe financial distress, SERPLUS participants would stand in line as general creditors, not beneficiaries of a protected plan.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   With Intel navigating a $16.1 billion net loss in fiscal 2024, ongoing mass layoffs, and a suspended dividend, this is not a theoretical risk. As your fiduciary advisor, Jay will help you:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Evaluate how much of your compensation to defer into SERPLUS versus maximize protected 401(k) savings</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Model the break-even on SERPLUS deferral given Intel&apos;s current credit and financial profile</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Design a distribution strategy that aligns with your income needs, tax brackets, and retirement timeline</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span>Weigh the risk of unsecured deferral against the tax benefits of the program</span>
   </li>
  </ul>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 3: RSU & EQUITY PLANNING */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Quarterly Vesting + Declining Stock = A Strategy Question You Can&apos;t Ignore
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Intel&apos;s stock price has declined significantly from its recent highs, which means employees who received 3-4 year RSU grants at higher prices have watched their expected compensation erode. This creates a critical set of decisions:
  </p>
  <ul className="space-y-4 text-lg text-[#5b6a71] font-sans mb-8">
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Hold or diversify?</strong> If you&apos;re holding unvested Intel stock beyond your vesting schedule, you&apos;re making an active bet on Intel&apos;s recovery.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Tax timing:</strong> With RSUs vesting quarterly, your effective tax rate and withholding gaps must be managed throughout the year.</span>
   </li>
   <li className="flex gap-4">
   <span className="font-bold text-[#1d7682]">•</span>
   <span><strong>Concentration risk:</strong> If Intel represents more than 20-30% of your liquid net worth, you have a concentration problem.</span>
   </li>
  </ul>
  <p className="text-lg text-[#5b6a71] font-sans">
   Jay builds individualized sell/hold frameworks for Intel employees based on your total financial picture, not just the stock&apos;s performance.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* MID-PAGE CTA INTERRUPTION */}
 <section className="bg-[#1d7682] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <p className="text-xl text-white font-sans mb-8">
  Sound familiar? You don&apos;t have to figure this out alone. Jay works with Intel employees every week. Schedule a free, confidential call today.
  </p>
  <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">Schedule Your Free Strategy Call</Button>
  </div>
 </section>

 {/* SECTION 4: MEGA BACKDOOR ROTH */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Most Intel Employees Don&apos;t Know They Can Save $72,000 Per Year Tax-Free
  </h2>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   Intel&apos;s 401(k) supports after-tax contributions and in-plan Roth conversions - the &ldquo;mega backdoor Roth&rdquo; strategy. For 2026, that means employees under 50 could contribute up to $72,000 total to their 401(k), converting the after-tax portion to Roth for tax-free lifetime growth.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans mb-8 leading-relaxed">
   For a senior Intel engineer in their 40s earning $250,000, this strategy can generate hundreds of thousands of dollars in additional tax-free retirement savings over a career - savings that compound entirely outside the reach of future tax rates.
  </p>
  <p className="text-lg text-[#5b6a71] font-sans">
   Jay will show you exactly how to implement this strategy, coordinate it with your SERPLUS deferrals, and maximize your tax-advantaged savings in every plan Intel offers.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* SECTION 5: KEY CONVERSATIONS */}
 <AnimateOnScroll>
  <section className="bg-[#FAFAF8] py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Key Conversations Jay Has With Intel Employees
  </h2>
  <div className="space-y-6">
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I have RSUs vesting next month - should I sell immediately or hold some?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m in the SERPLUS plan. How much is too much given what&apos;s happening with Intel?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I moved from California to Arizona. Am I handling my residency and taxes correctly?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;My 401(k) and SERPLUS are both at Intel. Is that too much concentration in one company?&rdquo;
   </p>
   </div>
   <div className="bg-white border-l-4 border-[#1d7682] p-8 rounded">
   <p className="text-lg text-[#333333] font-sans italic">
   &ldquo;I&apos;m being laid off. What happens to my unvested RSUs, SERPLUS balance, and benefits?&rdquo;
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* FAQ SECTION */}
 <AnimateOnScroll>
  <section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-12 text-center">
   Frequently Asked Questions
  </h2>

  <div className="space-y-8">
   {/* FAQ 1 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   What happens to my SERPLUS if I&apos;m laid off from Intel?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Under most NQDC plan structures, an involuntary termination qualifies as a separation from service, triggering distributions per your elected schedule under IRC 409A rules. Jay can help you understand your specific distribution timing and tax planning options before your separation date.
   </p>
   </div>

   {/* FAQ 2 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Should I always sell Intel RSUs when they vest?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Not necessarily. The right answer depends on your total exposure to Intel stock, your financial goals, your tax situation, and your views on Intel&apos;s recovery. Jay builds a written, rules-based framework so the decision is made proactively - not emotionally on the day of vesting.
   </p>
   </div>

   {/* FAQ 3 */}
   <div>
   <h3 className="text-2xl font-serif font-bold text-[#333333] mb-4">
   Can Jay help with Intel employees relocating from California?
   </h3>
   <p className="text-lg text-[#5b6a71] font-sans leading-relaxed">
   Yes. Multi-state tax planning for CA to AZ relocations is a core part of Jay&apos;s work with semiconductor professionals. The timing of RSU sales, residency establishment, and income attribution across states can meaningfully impact your tax bill.
   </p>
   </div>
  </div>
  </div>
  </section>
 </AnimateOnScroll>

 {/* FINAL CTA SECTION */}
 <AnimateOnScroll>
  <section className="bg-[#F7F4EE] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-serif font-bold text-[#333333] mb-6">
   Your Intel Compensation Is Built for Engineers Who Plan Ahead. So Is Jay&apos;s Approach.
  </h2>
  <p className="text-xl text-[#5b6a71] font-sans mb-10 leading-relaxed">
   At Intel, the best outcomes go to employees who plan - not react. The same is true for your finances. Whether you&apos;re managing a SERPLUS balance, a concentrated stock position, or a complex relocation, Jay has the expertise and the tools to help you build a plan you can execute with confidence.
  </p>
  <div className="mb-6">
   <Button href="https://meetings.hubspot.com/jay-chang1/farthercom" variant="primary">Schedule Your Intel Strategy Call</Button>
  </div>
  <p className="text-lg text-[#5b6a71] font-sans">
   No cost. No pressure. Just clarity.
  </p>
  </div>
  </section>
 </AnimateOnScroll>

 {/* TRUST FOOTER */}
 <section className="bg-[#333333] py-12 px-6">
  <div className="max-w-6xl mx-auto">
  <div className="space-y-4 text-center text-sm font-sans text-gray-300">
  <p>
   <strong className="text-white">Fiduciary advisor</strong> - Jay is legally required to act in your interest, not earn commissions
  </p>
  <p>
   <strong className="text-white">Farther:</strong> $15B+ in assets under management, named Best RIA to Work For 2025
  </p>
  <p>
   <strong className="text-white">Serving professionals</strong> in Phoenix, Chandler, Tempe, Mesa, Scottsdale, Tucson, Santa Clara, and beyond
  </p>
  </div>
  </div>
 </section>
 </>
 );
}
