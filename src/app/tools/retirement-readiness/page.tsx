import type { Metadata } from 'next'
import RetirementAssessment from './RetirementAssessment'

export const metadata: Metadata = {
  title:
    'Am I On Track? Retirement Readiness Assessment | Personal Wealth Management at Farther',
  description:
    'Take our free 60-second retirement readiness assessment. Get a personalized score across savings rate, asset benchmarks, and funding projections — instant results.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/retirement-readiness',
  },
  openGraph: {
    title: 'Am I On Track? | Free 60-Second Retirement Assessment',
    description:
      'Discover if you\'re on track for the retirement you want. 10 questions, under 60 seconds, personalized insights.',
    url: 'https://www.PWM-Farther.com/tools/retirement-readiness',
  },
}

export default function RetirementReadinessPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-[80px]">
      <RetirementAssessment />
    </main>
  )
}
