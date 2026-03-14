import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SectionEyebrow from '@/components/SectionEyebrow'
import Button from '@/components/Button'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
  title: 'Contact Us | Private Wealth Management at Farther — Dallas & Las Vegas',
  description:
    'Schedule a conversation with your wealth advisor at Private Wealth Management at Farther. Serving families and business owners with $2M–$20M in Dallas, TX and Las Vegas, NV.',
  alternates: { canonical: 'https://www.privatewealthatfarther.com/contact' },
}

const steps = [
  {
    number: '1',
    title: 'We\u2019ll Respond Within One Business Day',
    body: 'We\u2019ll reach out by phone or email \u2014 whichever you prefer. No automated sequences, no bots. A real person who read your message.',
  },
  {
    number: '2',
    title: 'A 30-Minute Discovery Call',
    body: 'A relaxed, focused conversation about your goals, concerns, and financial situation. No sales pitch \u2014 just a genuine exploration of how we might help.',
  },
  {
    number: '3',
    title: 'If We\u2019re a Good Fit',
    body: 'We\u2019ll outline next steps and begin gathering the information needed to build your comprehensive financial strategy.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#F7F4EE] pt-[100px] pb-[40px] text-center">
        <div className="max-w-container mx-auto px-[80px] max-md:px-[20px]">
          <AnimateOnScroll>
            <SectionEyebrow text="GET IN TOUCH" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-serif text-[48px] max-md:text-[32px] font-bold text-[#1C2B3A] mt-5">
              Let&rsquo;s Start a Conversation.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="font-sans text-body-lg text-[#6B7A8D] max-w-[600px] mx-auto mt-5">
              Whether you have a specific question or you&rsquo;d like to explore whether
              we&rsquo;re the right fit &mdash; we&rsquo;d welcome the chance to learn about
              your goals. No pressure, no commitment.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SECTION 2: FORM + DIRECT CONTACT ── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-[1100px] mx-auto px-[80px] max-md:px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12">
            {/* Left Column — Form */}
            <AnimateOnScroll>
              <div>
                <h3 className="font-sans text-[20px] font-semibold text-[#1C2B3A] mb-8">
                  Send a Message
                </h3>
                <ConsultationForm />
              </div>
            </AnimateOnScroll>

            {/* Right Column — Contact Info */}
            <AnimateOnScroll delay={150}>
              <div className="bg-[#F7F4EE] rounded-[16px] p-10">
                {/* Advisor Photo Placeholder */}
                <div className="w-[120px] h-[120px] rounded-full bg-[#E8F0F7] border-[3px] border-[#C9A84C] mx-auto flex items-center justify-center">
                  <span className="text-[#6B7A8D] font-sans text-sm">[Photo]</span>
                </div>

                {/* Advisor Name & Title */}
                <p className="font-sans text-[20px] font-semibold text-[#1C2B3A] mt-5 text-center">
                  [Advisor Name], CFP&reg;
                </p>
                <p className="font-sans text-sm text-[#6B7A8D] text-center whitespace-pre-line">
                  {'Wealth Advisor\nPrivate Wealth Management at Farther'}
                </p>

                {/* Block 1 — Call Directly */}
                <div className="border-b border-[#E8E6E1] py-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-[#C9A84C]" />
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      Call Directly
                    </span>
                  </div>
                  <a
                    href="tel:+15550000000"
                    className="font-sans text-base text-[#1C2B3A] font-medium hover:text-[#C9A84C] transition-colors"
                  >
                    (555) 000-0000
                  </a>
                  <p className="font-sans text-caption text-[#6B7A8D] mt-1">
                    Monday&ndash;Friday, 8am&ndash;5pm CT/PT
                  </p>
                </div>

                {/* Block 2 — Email */}
                <div className="border-b border-[#E8E6E1] py-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:advisor@privatewealthatfarther.com"
                    className="font-sans text-base text-[#1C2B3A] font-medium hover:text-[#C9A84C] transition-colors break-all"
                  >
                    advisor@privatewealthatfarther.com
                  </a>
                </div>

                {/* Block 3 — Schedule a Specific Time */}
                <div className="border-b border-[#E8E6E1] py-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#C9A84C]" />
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      Schedule a Specific Time
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#6B7A8D] mb-4">
                    Book a 30-minute introductory call directly on my calendar.
                  </p>
                  <Button href="/schedule-consultation" variant="outline">
                    Open Calendar
                  </Button>
                </div>

                {/* Block 4 — Offices */}
                <div className="py-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                    <span className="font-sans text-[11px] font-bold uppercase text-[#C9A84C] tracking-[1.5px]">
                      Offices
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="font-sans text-sm font-medium text-[#1C2B3A]">
                      Dallas, Texas
                    </p>
                    <p className="font-sans text-sm text-[#6B7A8D]">
                      [Address Placeholder], Dallas, TX
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-sm font-medium text-[#1C2B3A]">
                      Las Vegas, Nevada
                    </p>
                    <p className="font-sans text-sm text-[#6B7A8D]">
                      [Address Placeholder], Las Vegas, NV
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT TO EXPECT ── */}
      <section className="bg-[#FAFAF8] section-padding">
        <div className="max-w-[900px] mx-auto px-[80px] max-md:px-[20px] text-center">
          <AnimateOnScroll>
            <SectionEyebrow text="WHAT TO EXPECT" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-serif text-[36px] text-[#1C2B3A] font-bold mt-4">
              After You Reach Out.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 150}>
                <div className="text-center">
                  <span className="font-serif text-[48px] font-bold text-[#C9A84C]/20">
                    {step.number}
                  </span>
                  <p className="font-sans text-base font-semibold text-[#1C2B3A] mt-4">
                    {step.title}
                  </p>
                  <p className="font-sans text-sm text-[#6B7A8D] leading-relaxed mt-2 max-w-[260px] mx-auto">
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MAP PLACEHOLDER ── */}
      <section className="bg-[#F7F4EE] py-[60px]">
        <div className="max-w-container mx-auto px-[80px] max-md:px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dallas */}
            <AnimateOnScroll>
              <div>
                <div className="bg-[#E8F0F7] rounded-[12px] h-[240px] flex items-center justify-center">
                  <span className="font-sans text-[#6B7A8D] text-sm">
                    [Google Maps Embed — Dallas]
                  </span>
                </div>
                <p className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-4">
                  Dallas, Texas
                </p>
                <p className="font-sans text-sm text-[#6B7A8D]">
                  [Address Placeholder], Dallas, TX
                </p>
              </div>
            </AnimateOnScroll>

            {/* Las Vegas */}
            <AnimateOnScroll delay={150}>
              <div>
                <div className="bg-[#E8F0F7] rounded-[12px] h-[240px] flex items-center justify-center">
                  <span className="font-sans text-[#6B7A8D] text-sm">
                    [Google Maps Embed — Las Vegas]
                  </span>
                </div>
                <p className="font-serif text-[20px] font-semibold text-[#1C2B3A] mt-4">
                  Las Vegas, Nevada
                </p>
                <p className="font-sans text-sm text-[#6B7A8D]">
                  [Address Placeholder], Las Vegas, NV
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
