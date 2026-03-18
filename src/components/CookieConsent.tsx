'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'farther_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    // Disable GA by setting opt-out window property
    if (typeof window !== 'undefined') {
      (window as Record<string, unknown>)[
        `ga-disable-${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`
      ] = true
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#333333] border-t border-[rgba(29,118,130,0.2)] px-4 py-4 md:px-8 md:py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 font-sans text-[13px] text-[#b6d0ed] leading-relaxed">
          We use cookies and analytics to understand how visitors interact with
          our site and to improve your experience. By clicking &ldquo;Accept&rdquo;
          you consent to our use of cookies. See our{' '}
          <Link
            href="/disclosures#privacy"
            className="underline text-[#F7F4EE] hover:text-[#1d7682]"
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-[13px] font-semibold text-[#b6d0ed] border border-[#b6d0ed]/30 rounded-full px-5 py-2 hover:bg-white/5 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="font-sans text-[13px] font-semibold text-[#F7F4EE] bg-gradient-to-b from-[#2a9dab] to-[#1d7682] rounded-full px-5 py-2 hover:from-[#238a97] hover:to-[#155f69] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
