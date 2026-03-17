import type { Metadata } from 'next'
import TaxSavingsCalculator from './TaxSavingsCalculator'

export const metadata: Metadata = {
  title:
    'California to Nevada Tax Savings Estimator | Jay Chang | Farther',
  description:
    'Estimate your 5-year state tax savings by relocating from California to Nevada. See how much you could save on income, capital gains, RSU vesting, and real estate gains.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
  },
  openGraph: {
    title:
      'California → Nevada Tax Savings Estimator | How Much Could You Save?',
    description:
      'See how much you could save by relocating from California to Nevada. Instant estimates for earned income, capital gains, RSUs, and real estate gains.',
    url: 'https://www.PWM-Farther.com/tools/ca-nv-tax-savings',
  },
}

export default function CANVTaxSavingsPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-[80px]">
      <TaxSavingsCalculator />
    </main>
  )
}
