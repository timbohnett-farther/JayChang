'use client'

import { useState, useEffect, FormEvent } from 'react'
import { Lock, AlertCircle } from 'lucide-react'
import { getUTMData, type UTMData } from '@/lib/utm'
import { trackFormSubmission } from '@/lib/analytics'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  assets: string
  location: string
  message: string
  referralSource: string
  company: string // honeypot field — hidden from real users
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
}

const ASSET_RANGES = [
  'I prefer not to say',
  '$500,000 – $1,000,000',
  '$1,000,000 – $5,000,000',
  '$5,000,000 – $10,000,000',
  '$10,000,000 – $25,000,000',
  '$25,000,000+',
  'Pending liquidity event (business sale, etc.)',
]

const LOCATIONS = ['Scottsdale, AZ', 'Tempe, AZ', 'Phoenix, AZ', 'California', 'Nevada', 'Other']

const REFERRAL_SOURCES = [
  'Google Search',
  'Referral',
  'LinkedIn',
  'Event',
  'Other',
]

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235b6a71' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`

const inputBase =
  'border border-[#b6d0ed] bg-[#F7F4EE] rounded-[3px] py-[14px] px-[20px] font-sans text-body text-[#333333] w-full transition-all duration-200 focus:border-[#1d7682] focus:bg-[#FAFAF8] focus:outline-none focus:shadow-[0_0_0_3px_rgba(29,118,130,0.1)]'

const inputError =
  'border-[#8B2E2E] bg-[#FFFAF8]'

const selectBase = `${inputBase} appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_20px_center]`

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    assets: '',
    location: '',
    message: '',
    referralSource: '',
    company: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [utmData, setUtmData] = useState<UTMData>({})

  useEffect(() => {
    setUtmData(getUTMData())
  }, [])

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // Honeypot: if the hidden field was filled, silently discard
    if (formData.company) {
      setIsSubmitted(true)
      return
    }

    setIsSubmitting(true)

    // Merge form data with UTM attribution for lead tracking
    const submissionPayload = {
      ...formData,
      ...utmData,
      submitted_at: new Date().toISOString(),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    }

    // TODO: Replace with actual form submission endpoint (e.g., HubSpot API)
    console.log('Form submission payload:', submissionPayload)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Fire GA4 conversion event
    trackFormSubmission('consultation_request', window.location.pathname, {
      utm_source: utmData.utm_source || 'direct',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-[680px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[64px] shadow-form text-center">
        <div className="mb-[24px]">
          <svg
            className="mx-auto text-[#2E5D4B]"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="font-serif text-h3 md:text-h2 text-[#333333] mb-[16px]">
          Thank you.
        </h2>
        <p className="font-sans text-body-lg font-light text-[#5b6a71]">
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-[680px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[32px] md:p-[64px] shadow-form">
      <form onSubmit={handleSubmit} noValidate>
        {/* First Name / Last Name — side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px]">
          {/* First Name */}
          <div className="mb-[24px]">
            <label
              htmlFor="firstName"
              className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
            >
              First Name <span className="text-[#8B2E2E]">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              aria-invalid={errors.firstName ? 'true' : undefined}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              value={formData.firstName}
              onChange={handleChange}
              className={`${inputBase} ${errors.firstName ? inputError : ''}`}
            />
            {errors.firstName && (
              <p id="firstName-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
                <AlertCircle size={12} className="shrink-0" />
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-[24px]">
            <label
              htmlFor="lastName"
              className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
            >
              Last Name <span className="text-[#8B2E2E]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              aria-invalid={errors.lastName ? 'true' : undefined}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              value={formData.lastName}
              onChange={handleChange}
              className={`${inputBase} ${errors.lastName ? inputError : ''}`}
            />
            {errors.lastName && (
              <p id="lastName-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
                <AlertCircle size={12} className="shrink-0" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-[24px]">
          <label
            htmlFor="email"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Email Address <span className="text-[#8B2E2E]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? inputError : ''}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
              <AlertCircle size={12} className="shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-[24px]">
          <label
            htmlFor="phone"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(480) 944-0880"
            value={formData.phone}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Investable Assets */}
        <div className="mb-[24px]">
          <label
            htmlFor="assets"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Approximate Investable Assets{' '}
            <span className="font-normal text-[#5b6a71]">(excluding business value)</span>
          </label>
          <select
            id="assets"
            name="assets"
            value={formData.assets}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select a range</option>
            {ASSET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="mb-[24px]">
          <label
            htmlFor="location"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select your market</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="mb-[24px]">
          <label
            htmlFor="message"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${inputBase} min-h-[120px] resize-y`}
          />
        </div>

        {/* Referral Source */}
        <div className="mb-[24px]">
          <label
            htmlFor="referralSource"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            How did you hear about us?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select one</option>
            {REFERRAL_SOURCES.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>

        {/* Honeypot — hidden from real users, catches bots */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-base font-semibold py-[18px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting
            ? 'Sending...'
            : 'Send a Private Message'}
        </button>
      </form>

      {/* Compliance disclaimer */}
      <p className="font-sans text-xs font-light text-[#5b6a71] text-center mt-[32px] flex items-start justify-center gap-[8px]">
        <Lock size={14} className="shrink-0 mt-[2px]" />
        <span>
          Your information is strictly confidential. Farther Finance, Inc. is a
          registered investment adviser. This form does not constitute a
          solicitation or offer.
        </span>
      </p>
    </div>
  )
}
