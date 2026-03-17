'use client'

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

const UTM_STORAGE_KEY = 'farther_utm_params'
const LANDING_PAGE_KEY = 'farther_landing_page'
const REFERRER_KEY = 'farther_referrer'

export interface UTMData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  landing_page?: string
  referrer?: string
}

/**
 * Capture UTM parameters from the URL and persist them in sessionStorage.
 * Call this on page load (e.g., in a client component mounted in the layout).
 */
export function captureUTMParams(): void {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const utmData: Record<string, string> = {}

  for (const key of UTM_PARAMS) {
    const value = params.get(key)
    if (value) {
      utmData[key] = value
    }
  }

  // Only store if we found UTM params (first touch)
  if (Object.keys(utmData).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData))
  }

  // Always capture landing page and referrer on first visit
  if (!sessionStorage.getItem(LANDING_PAGE_KEY)) {
    sessionStorage.setItem(LANDING_PAGE_KEY, window.location.pathname)
  }
  if (!sessionStorage.getItem(REFERRER_KEY) && document.referrer) {
    sessionStorage.setItem(REFERRER_KEY, document.referrer)
  }
}

/**
 * Retrieve stored UTM data for form submission or analytics.
 */
export function getUTMData(): UTMData {
  if (typeof window === 'undefined') return {}

  const stored = sessionStorage.getItem(UTM_STORAGE_KEY)
  const utmData: UTMData = stored ? JSON.parse(stored) : {}

  utmData.landing_page = sessionStorage.getItem(LANDING_PAGE_KEY) || undefined
  utmData.referrer = sessionStorage.getItem(REFERRER_KEY) || undefined

  return utmData
}

/**
 * Get UTM data as hidden form field entries (for HubSpot or other forms).
 */
export function getUTMHiddenFields(): Array<{ name: string; value: string }> {
  const data = getUTMData()
  return Object.entries(data)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => ({ name, value: value as string }))
}
