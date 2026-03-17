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

export function trackFormSubmission(formName: string, page: string, additionalData?: Record<string, string>) {
  trackEvent('form_submission', {
    form_name: formName,
    page,
    ...additionalData,
  })
  // Also fire as a GA4 conversion event
  trackEvent('generate_lead', {
    form_name: formName,
    page,
  })
}

export function trackScrollDepth(depth: number, page: string) {
  trackEvent('scroll_depth', { depth_percent: depth, page })
}

export function trackPDFDownload(documentName: string, page: string) {
  trackEvent('pdf_download', { document_name: documentName, page })
}

export function trackToolInteraction(toolName: string, action: string, page: string) {
  trackEvent('tool_interaction', { tool_name: toolName, action, page })
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
