"use client"

import { useRef, useEffect, useState } from "react"

interface CountUpProps {
  end: string
  duration?: number
}

function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/)
  if (!match) return { prefix: "", number: 0, suffix: value, hasCommas: false }

  const prefix = match[1]
  const numStr = match[2]
  const suffix = match[3]
  const number = parseFloat(numStr.replace(/,/g, ""))
  const hasCommas = numStr.includes(",")

  return { prefix, number, suffix, hasCommas }
}

function formatNumber(n: number, hasCommas: boolean) {
  if (hasCommas) {
    return Math.round(n).toLocaleString("en-US")
  }
  if (Number.isInteger(n)) {
    return Math.round(n).toString()
  }
  return n.toFixed(1)
}

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(end)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      setDisplay(end)
      return
    }

    const { prefix, number: target, suffix, hasCommas } = parseValue(end)

    setDisplay(`${prefix}0${suffix}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          observer.unobserve(el)

          let start: number | null = null

          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * target

            setDisplay(`${prefix}${formatNumber(current, hasCommas ?? false)}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setDisplay(end)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [end, duration])

  return (
    <span
      ref={ref}
      className="font-sans text-stat md:text-stat lg:text-stat text-stat-mobile"
    >
      {display}
    </span>
  )
}
