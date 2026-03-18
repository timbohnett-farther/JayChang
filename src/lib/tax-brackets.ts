/**
 * Federal income tax brackets.
 *
 * To update for a new tax year:
 *   1. Change TAX_YEAR below.
 *   2. Replace the bracket arrays with the new IRS thresholds.
 *   3. That's it — every calculator that imports from here picks up the change.
 */

export const TAX_YEAR = 2025

export interface Bracket {
  floor: number
  ceiling: number
  rate: number
}

export const BRACKETS_SINGLE: Bracket[] = [
  { floor: 0, ceiling: 11925, rate: 0.10 },
  { floor: 11925, ceiling: 48475, rate: 0.12 },
  { floor: 48475, ceiling: 103350, rate: 0.22 },
  { floor: 103350, ceiling: 197300, rate: 0.24 },
  { floor: 197300, ceiling: 250525, rate: 0.32 },
  { floor: 250525, ceiling: 626350, rate: 0.35 },
  { floor: 626350, ceiling: Infinity, rate: 0.37 },
]

export const BRACKETS_MFJ: Bracket[] = [
  { floor: 0, ceiling: 23850, rate: 0.10 },
  { floor: 23850, ceiling: 96950, rate: 0.12 },
  { floor: 96950, ceiling: 206700, rate: 0.22 },
  { floor: 206700, ceiling: 394600, rate: 0.24 },
  { floor: 394600, ceiling: 501050, rate: 0.32 },
  { floor: 501050, ceiling: 751600, rate: 0.35 },
  { floor: 751600, ceiling: Infinity, rate: 0.37 },
]

export function getBrackets(filing: string): Bracket[] {
  return filing === 'single' ? BRACKETS_SINGLE : BRACKETS_MFJ
}

export function computeTax(income: number, filing: string): number {
  if (income <= 0) return 0
  const brackets = getBrackets(filing)
  let tax = 0
  for (const b of brackets) {
    if (income <= b.floor) break
    const taxable = Math.min(income, b.ceiling) - b.floor
    tax += taxable * b.rate
  }
  return tax
}

export function getMarginalBracket(income: number, filing: string): number {
  if (income <= 0) return 10
  const brackets = getBrackets(filing)
  for (let i = brackets.length - 1; i >= 0; i--) {
    if (income > brackets[i].floor) return brackets[i].rate * 100
  }
  return 10
}
