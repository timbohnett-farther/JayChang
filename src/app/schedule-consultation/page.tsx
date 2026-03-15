import type { Metadata } from 'next'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
  title: 'Schedule a Consultation',
  description:
    'Request a private consultation with a Farther wealth advisor serving Dallas, TX and Las Vegas, NV. Personalized financial planning for families and business owners with $2M–$20M.',
  openGraph: {
    title: 'Schedule a Consultation | Personal Wealth Management at Farther',
    description:
      'Request a private consultation with a Farther wealth advisor serving Dallas, TX and Las Vegas, NV.',
  },
}

export default function ScheduleConsultationPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#333333] py-[64px] md:py-[96px] px-[20px]">
        <div className="max-w-container mx-auto text-center">
          <span className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-[#1d7682] block mb-[16px]">
            SCHEDULE A CONSULTATION
          </span>
          <h1 className="font-serif text-h1-mobile md:text-h1 font-normal text-[#F7F4EE] mb-[24px]">
            Let&rsquo;s Start a Conversation
          </h1>
          <p className="font-sans text-body-lg font-light text-[#b6d0ed] max-w-[540px] mx-auto">
            Whether you&rsquo;re navigating a business transition, planning for
            retirement, or ready for a more proactive approach — we&rsquo;d
            welcome the opportunity to learn about your goals.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F7F4EE] py-[64px] md:py-[96px] px-[20px]">
        <ConsultationForm />
      </section>
    </>
  )
}
