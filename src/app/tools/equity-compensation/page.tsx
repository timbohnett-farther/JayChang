import type { Metadata } from 'next'
import EquityCompensationTool from './EquityCompensationTool'

export const metadata: Metadata = {
  title:
    'Equity Compensation Decision Tool | Jay Chang | Farther',
  description:
    'Visualize your equity compensation timeline — vesting events, tax triggers, and optimization windows for RSUs, ISOs, NQSOs, and ESPPs. Free instant analysis.',
  alternates: {
    canonical: 'https://www.PWM-Farther.com/tools/equity-compensation',
  },
  openGraph: {
    title: 'Equity Compensation Decision Tool | Farther',
    description:
      'See your equity decision timeline. Understand when to act on RSUs, ISOs, NQSOs, and ESPPs — tax triggers, vesting milestones, and optimization windows.',
    url: 'https://www.PWM-Farther.com/tools/equity-compensation',
  },
}

export default function EquityCompensationPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-[80px]">
      <EquityCompensationTool />
    </main>
  )
}
