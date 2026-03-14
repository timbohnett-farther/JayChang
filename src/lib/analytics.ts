export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackCTAClick(ctaText: string, ctaLocation: string, page: string) {
  trackEvent('cta_click', { cta_text: ctaText, cta_location: ctaLocation, page })
}

export function trackSectionView(section: string, page: string) {
  trackEvent('section_view', { section, page })
}

export function trackPhoneClick(ctaLocation: string, page: string) {
  trackEvent('phone_click', { cta_location: ctaLocation, page })
}

export function trackEmailClick(ctaLocation: string, page: string) {
  trackEvent('email_click', { cta_location: ctaLocation, page })
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
