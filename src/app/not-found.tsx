import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <section className="bg-[#F7F4EE] min-h-[60vh] flex items-center justify-center px-[20px]">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="font-mono text-[64px] text-[#C9A84C] mb-4">404</p>
        <h1 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#1C2B3A] leading-tight">
          We couldn&apos;t find that page.
        </h1>
        <p className="font-sans text-body text-[#6B7A8D] mt-4 leading-relaxed">
          The page you&apos;re looking for may have been moved or no longer exists.
          Here are some helpful links:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] transition-colors"
          >
            → Homepage
          </Link>
          <Link
            href="/services"
            className="font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] transition-colors"
          >
            → Our Services
          </Link>
          <Link
            href="/insights"
            className="font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] transition-colors"
          >
            → Insights
          </Link>
          <Link
            href="/contact"
            className="font-sans text-[15px] font-semibold text-[#0A1628] hover:text-[#C9A84C] transition-colors"
          >
            → Contact Us
          </Link>
        </div>
        <div className="mt-10">
          <Button href="https://meetings.hubspot.com/robert-davenport" variant="primary">
            Schedule a Conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
