import type { Metadata } from 'next'
import EstateComplexityAssessment from './EstateComplexityAssessment'

export const metadata: Metadata = {
  title:
    'Estate Complexity Assessment | Jay Chang | Farther',
  description:
    'Discover the hidden complexity of your estate in under 2 minutes. Get a personalized complexity score across 9 risk factors — multi-state property, business succession, blended families, and more.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/estate-complexity',
  },
  openGraph: {
    title: 'Estate Complexity Assessment | Farther',
    description:
      'How complex is your estate really? 9 questions, under 2 minutes. Uncover hidden risk factors and get a personalized estate readiness report.',
    url: 'https://www.PWM-Farther.com/tools/estate-complexity',
  },
}

export default function EstateComplexityPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-[80px]">
      <EstateComplexityAssessment />
    </main>
  )
}
