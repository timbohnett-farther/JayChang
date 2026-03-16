import type { Metadata } from 'next'
import ExitScorecard from './ExitScorecard'

export const metadata: Metadata = {
  title:
    'Business Exit Readiness Scorecard | Personal Wealth Management at Farther',
  description:
    'Answer 10 quick questions to assess your readiness for a business exit. Get your personalized score across Financial, Operational, Tax, and Succession dimensions — free and confidential.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/business-exit-scorecard',
  },
  openGraph: {
    title:
      'How Ready Are You to Exit Your Business? | Free 60-Second Assessment',
    description:
      'Take the Business Exit Readiness Scorecard — 10 questions, under 60 seconds. Get actionable insights across Financial, Operational, Tax, and Succession readiness.',
    url: 'https://www.PWM-Farther.com/tools/business-exit-scorecard',
  },
}

export default function BusinessExitScorecardPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-[80px]">
      <ExitScorecard />
    </main>
  )
}
