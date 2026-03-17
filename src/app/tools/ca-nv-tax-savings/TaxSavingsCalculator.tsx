'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// ─────────────────────────── CA TAX BRACKETS 2026 ───────────────────────────

interface Bracket {
  ceiling: number
  rate: number
}

const CA_SINGLE: Bracket[] = [
  { ceiling: 10412, rate: 0.01 },
  { ceiling: 24684, rate: 0.02 },
  { ceiling: 38959, rate: 0.04 },
  { ceiling: 54081, rate: 0.06 },
  { ceiling: 68350, rate: 0.08 },
  { ceiling: 349137, rate: 0.093 },
  { ceiling: 418961, rate: 0.103 },
  { ceiling: 698271, rate: 0.113 },
  { ceiling: 1000000, rate: 0.123 },
  { ceiling: Infinity, rate: 0.133 },
]

const CA_MFJ: Bracket[] = [
  { ceiling: 20824, rate: 0.01 },
  { ceiling: 49368, rate: 0.02 },
  { ceiling: 77918, rate: 0.04 },
  { ceiling: 108162, rate: 0.06 },
  { ceiling: 136700, rate: 0.08 },
  { ceiling: 698274, rate: 0.093 },
  { ceiling: 837922, rate: 0.103 },
  { ceiling: 1396542, rate: 0.113 },
  { ceiling: 2000000, rate: 0.123 },
  { ceiling: Infinity, rate: 0.133 },
]

function getBrackets(filingStatus: string): Bracket[] {
  return filingStatus === 'single' ? CA_SINGLE : CA_MFJ
}

function calcCATax(income: number, filingStatus: string): number {
  if (income <= 0) return 0
  const brackets = getBrackets(filingStatus)
  let tax = 0
  let previousCeiling = 0
  for (const bracket of brackets) {
    if (income <= previousCeiling) break
    const taxableInBracket =
      Math.min(income, bracket.ceiling) - previousCeiling
    tax += taxableInBracket * bracket.rate
    previousCeiling = bracket.ceiling
  }
  return tax
}

interface AnnualBreakdown {
  total: number
  earned: number
  capGains: number
  rsu: number
  realEstate: number
}

function calcAnnualSavings(
  w2: number,
  cg: number,
  rsu: number,
  re: number,
  reYear: number,
  year: number,
  filingStatus: string
): AnnualBreakdown {
  const reThisYear = year === reYear ? re : 0
  const totalIncome = w2 + cg + rsu + reThisYear
  const totalTax = calcCATax(totalIncome, filingStatus)

  // Marginal attribution
  const baseTax = calcCATax(w2, filingStatus)
  const afterCG = calcCATax(w2 + cg, filingStatus)
  const afterRSU = calcCATax(w2 + cg + rsu, filingStatus)

  return {
    total: totalTax,
    earned: baseTax,
    capGains: afterCG - baseTax,
    rsu: afterRSU - afterCG,
    realEstate: totalTax - afterRSU,
  }
}

function calcFiveYearSavings(
  w2: number,
  cg: number,
  rsu: number,
  re: number,
  reYear: number,
  filingStatus: string
) {
  const yearly: AnnualBreakdown[] = []
  const byType = { earned: 0, capGains: 0, rsu: 0, realEstate: 0 }
  let cumulative = 0

  for (let y = 1; y <= 5; y++) {
    const result = calcAnnualSavings(
      w2,
      cg,
      rsu,
      re,
      reYear,
      y,
      filingStatus
    )
    yearly.push(result)
    cumulative += result.total
    byType.earned += result.earned
    byType.capGains += result.capGains
    byType.rsu += result.rsu
    byType.realEstate += result.realEstate
  }

  return { cumulative, yearly, byType }
}

function formatCurrency(num: number): string {
  if (num >= 1000000) {
    const millions = num / 1000000
    return (
      '$' +
      millions.toLocaleString('en-US', {
        minimumFractionDigits: millions % 1 === 0 ? 0 : 1,
        maximumFractionDigits: 1,
      }) +
      'M'
    )
  }
  return '$' + Math.round(num).toLocaleString('en-US')
}

function formatCurrencyFull(num: number): string {
  return '$' + Math.round(num).toLocaleString('en-US')
}

function formatInputCurrency(num: number): string {
  return '$' + num.toLocaleString('en-US')
}

// ─────────────────────────── COMPONENT ───────────────────────────

interface SliderInputProps {
  label: string
  tooltip: string
  value: number
  min: number
  max: number
  step: number
  onChange: (val: number) => void
}

function SliderInput({
  label,
  tooltip,
  value,
  min,
  max,
  step,
  onChange,
}: SliderInputProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <label className="font-sans text-[14px] font-semibold text-[#333333]">
            {label}
          </label>
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            onBlur={() =>
              setTimeout(() => setShowTooltip(false), 200)
            }
            className="w-4 h-4 rounded-full bg-[#E2E8F0] text-[#64748B] text-[10px] font-bold flex items-center justify-center hover:bg-[#CBD5E1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d7682]"
            aria-label={`Info: ${tooltip}`}
          >
            i
          </button>
        </div>
        <span className="font-sans text-[14px] font-semibold text-[#1d7682]">
          {formatInputCurrency(value)}
        </span>
      </div>
      {showTooltip && (
        <p className="font-sans text-[12px] text-[#64748B] mb-2 leading-relaxed">
          {tooltip}
        </p>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1d7682 0%, #1d7682 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        }}
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      />
      <div className="flex justify-between mt-1">
        <span className="font-sans text-[11px] text-[#94A3B8]">
          {formatInputCurrency(min)}
        </span>
        <span className="font-sans text-[11px] text-[#94A3B8]">
          {formatInputCurrency(max)}
        </span>
      </div>
    </div>
  )
}

export default function TaxSavingsCalculator() {
  const [filingStatus, setFilingStatus] = useState('mfj')
  const [w2, setW2] = useState(750000)
  const [cg, setCG] = useState(250000)
  const [rsu, setRSU] = useState(200000)
  const [re, setRE] = useState(1000000)
  const [reYear, setREYear] = useState(1)
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [contactErrors, setContactErrors] = useState<
    Record<string, string>
  >({})
  const animationRef = useRef<number | null>(null)

  const results = calcFiveYearSavings(w2, cg, rsu, re, reYear, filingStatus)

  // Animate hero number
  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current)
    const target = results.cumulative
    const start = animatedTotal
    const duration = 800
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setAnimatedTotal(Math.round(start + (target - start) * eased))
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results.cumulative])

  const maxYearly = Math.max(...results.yearly.map((y) => y.total), 1)
  const allZero = results.cumulative === 0

  const getDynamicText = () => {
    const c = results.cumulative
    if (allZero)
      return 'Enter your income details above to see your potential savings.'
    if (c > 1000000)
      return `Over five years, relocating to Nevada could save you over ${formatCurrency(c)} in California state taxes alone. This doesn't include potential savings on future investment gains or estate planning benefits.`
    if (c >= 500000)
      return `You could redirect nearly ${formatCurrencyFull(c)} from California's tax coffers into your family's wealth over just five years.`
    if (c >= 100000)
      return `Even at your current income levels, the tax differential adds up to ${formatCurrencyFull(c)} — meaningful capital you could reinvest or use to accelerate your financial goals.`
    return 'While the tax savings may be modest at this income level, other factors like cost of living and estate planning should be considered.'
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors: Record<string, string> = {}
    if (contactInfo.firstName.trim().length < 2)
      errors.firstName = 'Required'
    if (contactInfo.lastName.trim().length < 2)
      errors.lastName = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email))
      errors.email = 'Please enter a valid email'
    setContactErrors(errors)
    if (Object.keys(errors).length > 0) return

    // POST to webhook
    try {
      const WEBHOOK_URL =
        process.env.NEXT_PUBLIC_TAX_CALC_WEBHOOK_URL || ''
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...contactInfo,
            filingStatus,
            w2,
            cg,
            rsu,
            re,
            reYear,
            cumulativeSavings: results.cumulative,
            timestamp: new Date().toISOString(),
            source: 'ca-nv-tax-savings',
          }),
        }).catch(() => {})
      }
    } catch {
      // silently fail
    }
    setFormSubmitted(true)
  }

  const typeBreakdown = [
    {
      label: 'Earned Income',
      value: results.byType.earned,
      color: '#1d7682',
    },
    {
      label: 'Capital Gains',
      value: results.byType.capGains,
      color: '#2d9aa8',
    },
    {
      label: 'RSU / Equity',
      value: results.byType.rsu,
      color: '#4db8c4',
    },
    {
      label: 'Real Estate',
      value: results.byType.realEstate,
      color: '#333333',
    },
  ].filter((t) => t.value > 0)

  const totalTypeValue = typeBreakdown.reduce(
    (sum, t) => sum + t.value,
    0
  )

  return (
    <div className="px-5 py-10 max-w-[960px] mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1d7682] mb-3">
          Tax Savings Estimator
        </p>
        <h1 className="font-serif text-[30px] md:text-[40px] font-bold text-[#333333] leading-tight">
          California &rarr; Nevada Tax Savings
        </h1>
        <p className="font-sans text-[16px] text-[#5b6a71] mt-3 max-w-[560px] mx-auto">
          See how much you could save by relocating from California
          to Nevada
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-start">
        {/* Input panel */}
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 lg:sticky lg:top-[100px]">
          {/* Filing status */}
          <div className="mb-6">
            <label className="block font-sans text-[14px] font-semibold text-[#333333] mb-2">
              Filing Status
            </label>
            <select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
              aria-label="Filing Status"
            >
              <option value="mfj">Married Filing Jointly</option>
              <option value="single">Single</option>
            </select>
          </div>

          <SliderInput
            label="Annual Income (W-2 & Bonuses)"
            tooltip="Your total annual earned income before deductions"
            value={w2}
            min={0}
            max={10000000}
            step={25000}
            onChange={setW2}
          />
          <SliderInput
            label="Annual Capital Gains"
            tooltip="Expected annual investment gains you plan to realize"
            value={cg}
            min={0}
            max={10000000}
            step={25000}
            onChange={setCG}
          />
          <SliderInput
            label="Annual RSU / Equity Vesting"
            tooltip="Annual value of restricted stock units or options vesting"
            value={rsu}
            min={0}
            max={10000000}
            step={25000}
            onChange={setRSU}
          />
          <SliderInput
            label="One-Time Real Estate Gain"
            tooltip="Net taxable gain after primary residence exclusion ($250K single / $500K married). Actual exclusion eligibility depends on ownership and use tests."
            value={re}
            min={0}
            max={20000000}
            step={50000}
            onChange={setRE}
          />

          {/* RE sale year */}
          <div className="mb-2">
            <label className="block font-sans text-[14px] font-semibold text-[#333333] mb-2">
              Real Estate Sale Year
            </label>
            <select
              value={reYear}
              onChange={(e) => setREYear(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#1d7682] transition-colors"
              aria-label="Real Estate Sale Year"
            >
              {[1, 2, 3, 4, 5].map((y) => (
                <option key={y} value={y}>
                  Year {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results panel */}
        <div>
          {/* Hero number */}
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 text-center mb-6">
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5b6a71] mb-2">
              Estimated 5-Year State Tax Savings
            </p>
            <p className="font-sans text-[48px] md:text-[60px] font-extrabold text-[#1d7682] leading-none">
              {formatCurrencyFull(animatedTotal)}
            </p>
            <p className="font-sans text-[14px] text-[#5b6a71] mt-2">
              by relocating from California to Nevada
            </p>
          </div>

          {/* Year-by-year bars */}
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
            <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-5">
              Year-by-Year Savings
            </h3>
            <div className="space-y-4" aria-label="Bar chart showing year by year California state tax savings">
              {results.yearly.map((year, i) => {
                const pct = maxYearly > 0 ? (year.total / maxYearly) * 100 : 0
                const isREYear = i + 1 === reYear && re > 0
                return (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-sans text-[13px] font-semibold text-[#333333]">
                        Year {i + 1}
                        {isREYear && (
                          <span className="text-[11px] font-normal text-[#5b6a71] ml-1.5">
                            (includes real estate sale)
                          </span>
                        )}
                      </span>
                      <span className="font-sans text-[13px] font-semibold text-[#5b6a71]">
                        {formatCurrencyFull(year.total)}
                      </span>
                    </div>
                    <div className="h-6 bg-[#E2E8F0] rounded-[6px] overflow-hidden">
                      <div
                        className="h-full rounded-[6px] transition-all duration-500 ease-out"
                        style={{
                          width: `${Math.max(pct, allZero ? 0 : 2)}%`,
                          background:
                            isREYear
                              ? 'linear-gradient(to right, #1d7682, #333333)'
                              : '#1d7682',
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Income type breakdown */}
          {!allZero && typeBreakdown.length > 0 && (
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 mb-6">
              <h3 className="font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-[#333333] mb-5">
                Savings by Income Type
              </h3>
              <div className="space-y-3">
                {typeBreakdown.map((type) => {
                  const pct =
                    totalTypeValue > 0
                      ? (type.value / totalTypeValue) * 100
                      : 0
                  return (
                    <div key={type.label}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: type.color }}
                          />
                          <span className="font-sans text-[13px] font-medium text-[#333333]">
                            {type.label}
                          </span>
                        </div>
                        <span className="font-sans text-[13px] font-semibold text-[#5b6a71]">
                          {formatCurrencyFull(type.value)}
                        </span>
                      </div>
                      <div className="h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: type.color,
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Dynamic text */}
          <div className="bg-[#F7F4EE] rounded-[12px] p-6 mb-6">
            <p className="font-sans text-[15px] text-[#333333] leading-relaxed">
              {getDynamicText()}
            </p>
          </div>

          {/* CTA gate */}
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-8 mb-6">
            {!formSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-[#333333]">
                    Ready to plan your move?
                  </h3>
                  <p className="font-sans text-[15px] text-[#5b6a71] mt-2">
                    Download your{' '}
                    <strong>
                      Complete California-to-Nevada Relocation Tax
                      Planning Checklist
                    </strong>{' '}
                    — covering residency rules, safe harbor
                    timelines, clawback risks, entity restructuring,
                    and more.
                  </p>
                </div>

                {!showForm ? (
                  <div className="text-center">
                    <button
                      onClick={() => setShowForm(true)}
                      className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] px-8 py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
                    >
                      Download My Checklist
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleFormSubmit}
                    noValidate
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={contactInfo.firstName}
                          onChange={(e) =>
                            setContactInfo((p) => ({
                              ...p,
                              firstName: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
                          aria-label="First Name"
                        />
                        {contactErrors.firstName && (
                          <p className="text-[12px] text-[#EF4444] mt-1">
                            {contactErrors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={contactInfo.lastName}
                          onChange={(e) =>
                            setContactInfo((p) => ({
                              ...p,
                              lastName: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
                          aria-label="Last Name"
                        />
                        {contactErrors.lastName && (
                          <p className="text-[12px] text-[#EF4444] mt-1">
                            {contactErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={contactInfo.email}
                        onChange={(e) =>
                          setContactInfo((p) => ({
                            ...p,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
                        aria-label="Email Address"
                      />
                      {contactErrors.email && (
                        <p className="text-[12px] text-[#EF4444] mt-1">
                          {contactErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={contactInfo.phone}
                        onChange={(e) =>
                          setContactInfo((p) => ({
                            ...p,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-[8px] font-sans text-[15px] text-[#333333] placeholder-[#94A3B8] focus:outline-none focus:border-[#1d7682] transition-colors"
                        aria-label="Phone Number"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[16px] py-3.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1d7682] focus:ring-offset-2"
                    >
                      Download My Checklist &rarr;
                    </button>
                    <p className="font-sans text-[12px] text-[#64748B] text-center">
                      By submitting this form, you consent to being
                      contacted by a Farther advisor. Your
                      information will be handled per our{' '}
                      <Link
                        href="/disclosures"
                        className="underline hover:text-[#1d7682]"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-serif text-[22px] font-bold text-[#333333]">
                  Thank You!
                </h4>
                <p className="font-sans text-[15px] text-[#5b6a71] mt-2 max-w-[400px] mx-auto">
                  Your checklist is on the way. A Farther advisor
                  will reach out within 24 hours to discuss your
                  personalized relocation strategy.
                </p>
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] hover:from-[#238a97] hover:to-[#155f69] text-white font-sans font-semibold text-[15px] px-6 py-3 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 mt-5"
                >
                  Schedule a Consultation
                </Link>
              </div>
            )}
          </div>

          {/* High income note */}
          {w2 + cg + rsu + re > 50000000 && (
            <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-[12px] p-4 mb-6">
              <p className="font-sans text-[13px] text-[#92400E]">
                For portfolios of this size, a personalized analysis
                is essential. These estimates provide directional
                guidance only.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 max-w-[800px] mx-auto">
        <p className="font-sans text-[11px] text-[#6B7280] leading-relaxed">
          This calculator provides estimates for illustrative
          purposes only and does not constitute tax, legal, or
          financial advice. Calculations are based on 2026
          California tax brackets and assume Nevada&apos;s zero
          state income tax. Actual tax liability depends on
          individual circumstances including but not limited to:
          deductions, credits, AMT, filing status nuances,
          source-of-income rules, and California Franchise Tax Board
          residency determinations. California may continue to tax
          certain income (e.g., CA-sourced RSU vesting, deferred
          compensation, CA rental income) even after you establish
          Nevada residency. Consult a qualified tax professional
          before making relocation decisions. Farther Finance, Inc.
          and its advisors do not provide tax or legal advice.
        </p>
      </div>
    </div>
  )
}
