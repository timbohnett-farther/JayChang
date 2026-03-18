import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SectionEyebrow from '@/components/SectionEyebrow';

export const metadata: Metadata = {
 title: 'About Jay Chang | Fiduciary Wealth Advisor in Tempe, AZ | Farther',
 description: 'Jay Chang is a fiduciary wealth advisor at Farther in Tempe, Arizona. Meet Jay and the remarkable team supporting his clients - from trust law and tax to investment management and financial planning - all under one world-class platform.',
 alternates: {
 canonical: 'https://www.PWM-Farther.com/about',
 },
};

export default function AboutPage() {
 const teamMembers = [
 {
 name: 'Ashton Hayes',
 title: 'JD, LL.M. in Taxation • Trust Services Associate, Farther',
 photo: '/Photos/Ashton_Hayes.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  'JD and Master of Laws in Taxation from University of Alabama. Legal-grade precision for trust and estate questions.',
  'Structuring trusts, complex beneficiary designations, grantor trust strategies.',
 ],
 },
 {
 name: 'Dr. Daniel R. Gilham',
 title: 'CFP®, CEPA® • Managing Director of Advisor Strategy, Farther',
 photo: '/Photos/Daniel-Gilham.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  'CFP, Certified Exit Planning Advisor, completing Doctorate of Finance. Nearly a decade at Wells Fargo as VP, Investment Officer, PIM Portfolio Manager.',
  `Previously at Merrill Lynch. Co-hosts The Horse's Mouth podcast. Advisory Board GrowFL, Jacksonville 40 Under 40.`,
  `Pro bono work with Ho'ola Na Pua in Hawaii.`,
 ],
 },
 {
 name: 'David Sargent',
 title: 'CFP® • Certified Financial Planning Specialist, Farther',
 photo: '/Photos/Dvid-Sarget.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  'Was an engineer before advisor. Texas A&M, Electronics Engineer at Lockheed Martin, Assistant Electrical Engineer at Burns & McDonnell.',
  'Transitioned through Charles Schwab. Technical background resonates with analytically trained professionals.',
 ],
 },
 {
 name: 'Michael Lee',
 title: 'Principal, Wealth Advisor, Farther',
 photo: '/Photos/Michael_Lee.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  'Career ignited translating for his mother retiring from Kaiser Permanente. Expertise spans PG&E, AT&T, Kaiser, Chevron, Northrop Grumman, Boeing, Raytheon.',
  'InvestmentNews Rising Star 2025, AdvisorHub 250 Advisors to Watch 2025, Hot List 2024, Founders Club 2025.',
 ],
 },
 {
 name: 'Sutanto Widjaja',
 title: 'Chief Investment Officer, Farther Institutional',
 photo: '/Photos/Sutanto.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  '20+ years asset management. Co-Portfolio Manager at TIAA-Nuveen for institutional portfolios. Co-founded IndiCo Capital.',
  'MBA Stanford, BS UC Berkeley. Investment Committees of University of Hawaii Foundation and Honolulu Museum of Art.',
  'Asset allocation, alternatives, risk-controlled construction.',
 ],
 },
 {
 name: 'Stacey Kirkpatrick',
 title: 'CFP® • Financial Planning Specialist, Farther',
 photo: '/Photos/Stacy-Kirkpatrick.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  '15+ years experience. CFP with Series 7, 63, 65. Detail-oriented follow-through professional.',
  'Operational backbone ensuring plan architecture is sound, documentation complete, execution precise.',
 ],
 },
 {
 name: 'Alex Paul',
 title: 'Farther Advisory Team',
 photo: '/Photos/Alex_Paul.png',
 photoWidth: 1024,
 photoHeight: 1024,
 bio: [
  `A key member of the Farther advisory team supporting Jay's practice. Alex brings analytical rigor and client-first dedication to every engagement.`,
  'Ensuring the planning process runs seamlessly from onboarding through implementation.',
 ],
 },
 ];

 return (
 <main>
 {/* JSON-LD Person Schema */}
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
  __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jay Chang',
  jobTitle: 'Vice President, Wealth Advisor',
  worksFor: {
   '@type': 'Organization',
   name: 'Farther',
   url: 'https://www.PWM-Farther.com',
  },
  areaServed: [
   'Tempe, Arizona',
   'Phoenix, Arizona',
   'Chandler, Arizona',
   'Scottsdale, Arizona',
   'Mesa, Arizona',
   'Tucson, Arizona',
   'Silicon Valley, California',
  ],
  url: 'https://www.PWM-Farther.com/about',
  telephone: '(480) 944-0880',
  }),
  }}
 />

 {/* 1. HERO */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
  {/* Left Column */}
  <AnimateOnScroll>
   <div>
   <SectionEyebrow text="ABOUT JAY CHANG" />
   <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mt-4 mb-6">
   About Jay Chang
   </h1>
   <p className="text-lg md:text-xl text-[#333333] italic leading-relaxed">
   Fiduciary advisor. Complex compensation specialist. The person who calls you before the vest date - not after.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Right Column - Image */}
  <AnimateOnScroll delay={0.2}>
   <Image
   src="/Photos/Color-Jay-Headshot.png"
   alt="Jay Chang headshot"
   width={1024}
   height={938}
   className="w-full h-auto rounded-lg"
   />
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 2. THE SHORT VERSION */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <div className="space-y-6 text-[#333333]">
   <p className="text-lg leading-relaxed">
   Jay Chang is VP, Wealth Advisor at Farther - #1 fastest-growing financial services firm in America on 2025 Inc. 5000, nearly 12,000% revenue growth over three years. Based in Tempe. Specializes in semiconductor engineers (TSMC, Intel, NVIDIA, Apple, Microchip), aerospace/defense (Honeywell, Raytheon/RTX), physicians (Banner Health, Mayo Clinic), corporate executives (Freeport-McMoRan).
   </p>

   <p className="text-lg leading-relaxed">
   Before Farther: career at Vanguard and Charles Schwab with HNW/UHNW clients. Not generic portfolio - SERPLUS deferral analysis, RSU concentration frameworks, pension-vs-lump-sum models, mega backdoor Roth, multi-state relocation tax planning. Joined Farther for better tools without commission structures.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 3. THE LONGER STORY */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
  {/* Left Column - Text */}
  <AnimateOnScroll>
   <div className="space-y-6 text-[#333333]">
   <p className="text-lg leading-relaxed">
   The conversation Jay has regularly: senior engineer earning $280K, taxes surprising them, RSUs vesting with no strategy, 401(k) in employer stock, heard of mega backdoor Roth but can't explain it, SERPLUS balance they don't understand is unsecured. They're analytically sophisticated but financially underserved. That gap is why Jay does this work.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Right Column - Image */}
  <AnimateOnScroll delay={0.2}>
   <Image
   src="/Photos/Jay-Office.png"
   alt="Jay in office"
   width={2166}
   height={1784}
   className="w-full h-auto rounded-lg"
   />
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 4. WHAT JAY BELIEVES */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6">
  <div className="space-y-12">
  {/* Belief 1 */}
  <AnimateOnScroll>
   <div>
   <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
   On Being a Fiduciary - Always
   </h3>
   <p className="text-lg text-[#333333] leading-relaxed">
   Legally required to act in your interest, no commissions, no quotas. The difference: suitability standard (is this investment suitable?) versus fiduciary best interest standard (is this the best choice for you?). One looks backward. The other looks toward your actual outcomes.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Belief 2 */}
  <AnimateOnScroll delay={0.1}>
   <div>
   <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
   On Complexity as Opportunity
   </h3>
   <p className="text-lg text-[#333333] leading-relaxed">
   Biggest opportunity is managing compensation more intelligently, not finding better investments. Think NVIDIA engineer: mega backdoor Roth, quarterly tax projection, rules-based equity sell schedule coordinated with vesting. That's where real wealth compounds. Index funds won't find an extra $2M over ten years. Intelligent compensation structure can.
   </p>
   </div>
  </AnimateOnScroll>

  {/* Belief 3 */}
  <AnimateOnScroll delay={0.2}>
   <div>
   <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
   On the Long-Term Relationship
   </h3>
   <p className="text-lg text-[#333333] leading-relaxed">
   Most valuable thing is being the person who calls in October about January vest, August ESPP window, December 31 deadline. Proactive, calendar-driven, specific. Not reactive. Not generic. Not waiting for you to figure it out.
   </p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 5. THE FARTHER ADVANTAGE */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <AnimateOnScroll>
  <div className="mb-12">
   <p className="text-lg text-[#333333] leading-relaxed max-w-4xl">
   Jay chose Farther for deep personalized advice plus technology platform. After years at large institutions, saw technology limitations that prevented the kind of coordinated, detailed planning his clients deserved. Farther changed that.
   </p>
  </div>
  </AnimateOnScroll>

  {/* Platform Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  <AnimateOnScroll delay={0.1}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Unified Wealth Hub</h4>
   <p className="text-[#5b6a71]">Every account real-time in one place</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.15}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Automated Daily Tax-Loss Harvesting</h4>
   <p className="text-[#5b6a71]">Systematic tax efficiency year-round</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.2}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Asset Location Optimization</h4>
   <p className="text-[#5b6a71]">Maximize tax-adjusted returns across accounts</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.25}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Direct Indexing and Institutional SMAs</h4>
   <p className="text-[#5b6a71]">Personalized investment construction</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.3}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">Alternative Investments</h4>
   <p className="text-[#5b6a71]">Access to institutional-grade alternatives</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.35}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <h4 className="text-lg font-bold text-[#333333] mb-2">90% Advisor Time on Strategy</h4>
   <p className="text-[#5b6a71]">Technology handles operations, advisors focus on planning</p>
   </div>
  </AnimateOnScroll>
  </div>

  {/* Stats */}
  <AnimateOnScroll>
  <div className="text-center text-[#333333]">
   <p className="text-lg mb-4">
   Farther surpassed <span className="font-bold">$13B in recruited assets</span> in 2025, growing <span className="font-bold">4x the industry rate</span>.
   </p>
   <p className="text-lg font-bold">
   Inc. 5000 #1 fastest-growing financial services firm in America.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 6. THE TEAM */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <AnimateOnScroll>
  <p className="text-lg text-[#333333] leading-relaxed max-w-4xl mb-12">
   One of the most meaningful things Jay can offer is not just his own expertise - it&apos;s access to the entire bench of talent at Farther. From trust law and complex tax to investment management and operational excellence.
  </p>
  </AnimateOnScroll>

  {/* Team Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {teamMembers.map((member, index) => (
   <AnimateOnScroll key={member.name} delay={index * 0.08}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full`}>
   <Image
    src={member.photo}
    alt={member.name}
    width={member.photoWidth}
    height={member.photoHeight}
    className="w-full h-auto rounded-lg mb-6"
   />
   <h4 className="text-lg font-bold text-[#333333] mb-1">
    {member.name}
   </h4>
   <p className="text-sm text-[#1d7682] font-semibold mb-4">
    {member.title}
   </p>
   <div className="space-y-3">
    {member.bio.map((paragraph, idx) => (
    <p key={idx} className="text-[#5b6a71] text-sm leading-relaxed">
    {paragraph}
    </p>
    ))}
   </div>
   </div>
   </AnimateOnScroll>
  ))}
  </div>
  </div>
 </section>

 {/* 7. WHAT THIS TEAM MEANS */}
 <section className="bg-[#FAFAF8] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <div className="space-y-6 text-[#333333]">
   <p className="text-lg leading-relaxed">
   A Honeywell engineer asks about trust structuring before the HONA spinoff &gt; Ashton Hayes has the JD and Master of Laws in Taxation to handle it with precision. An FCX VP navigating business succession and alternative investments &gt; Daniel Gilham's CEPA credential and decade at Wells Fargo. A Kaiser retiree relocating to Scottsdale &gt; Michael Lee has walked that path with PG&E, AT&T, and Kaiser professionals. A TSMC engineer post-RSU diversification managing concentration and taxation &gt; Sutanto Widjaja's 20 years in institutional asset management and alternatives.
   </p>

   <p className="text-lg leading-relaxed">
   Plan needs to be airtight, fully documented, execution-perfect &gt; Stacey Kirkpatrick and David Sargent ensuring every detail lands correctly.
   </p>

   <p className="text-lg leading-relaxed font-semibold">
   This is not a one-person practice with a business card. It is a coordinated, credentialed team with deep expertise in the specific industries, compensation structures, and life stages your situation requires.
   </p>
  </div>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 8. FIVE COMMITMENTS */}
 <section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
  <AnimateOnScroll delay={0}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col justify-between`}>
   <div className="text-4xl font-bold text-[#1d7682] mb-4">1</div>
   <p className="text-lg font-bold text-[#333333]">Never Generic Advice</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.08}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col justify-between`}>
   <div className="text-4xl font-bold text-[#1d7682] mb-4">2</div>
   <p className="text-lg font-bold text-[#333333]">Proactive Not Reactive</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.16}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col justify-between`}>
   <div className="text-4xl font-bold text-[#1d7682] mb-4">3</div>
   <p className="text-lg font-bold text-[#333333]">Coordinate with Other Advisors</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.24}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col justify-between`}>
   <div className="text-4xl font-bold text-[#1d7682] mb-4">4</div>
   <p className="text-lg font-bold text-[#333333]">Plan You Can Understand</p>
   </div>
  </AnimateOnScroll>

  <AnimateOnScroll delay={0.32}>
   <div className={`bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] p-[32px] h-full flex flex-col justify-between`}>
   <div className="text-4xl font-bold text-[#1d7682] mb-4">5</div>
   <p className="text-lg font-bold text-[#333333]">Fiduciary Always</p>
   </div>
  </AnimateOnScroll>
  </div>
  </div>
 </section>

 {/* 9. FINAL WORD FROM JAY */}
 <section className="bg-[#F7F4EE] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6">
  <AnimateOnScroll>
  <blockquote className="text-center">
   <p className="text-2xl md:text-3xl text-[#333333] italic font-serif leading-relaxed mb-6">
   &ldquo;TSMC process engineers working at nanometer tolerances. Raytheon systems designers building missiles. Banner Health surgeons performing complex procedures. These are people who understand systems, precision, risk, and standards of care. That's what I've built at Farther.&rdquo;
   </p>
   <p className="text-xl font-bold text-[#333333]">
   - Jay Chang
   </p>
  </blockquote>
  </AnimateOnScroll>
  </div>
 </section>

 {/* 10. FINAL CTA */}
 <section className="bg-[#333333] py-16 md:py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
  <AnimateOnScroll>
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
   The First Conversation Is Free.
  </h2>
  <p className="text-xl text-gray-200 mb-8">
   The Clarity It Creates Is Lasting.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
   <Button
   href="https://meetings.hubspot.com/jay-chang1/farthercom"
   variant="primary"
   >
   Schedule a Conversation With Jay
   </Button>
   <Button
   href="/process"
   variant="ghost"
   >
   Learn About the Process
   </Button>
  </div>

  <p className="text-gray-300 text-lg">
   Tempe, Arizona. Serving Phoenix, Chandler, Scottsdale, Mesa, Tucson, Silicon Valley, and beyond.
  </p>
  </AnimateOnScroll>
  </div>
 </section>
 </main>
 );
}
