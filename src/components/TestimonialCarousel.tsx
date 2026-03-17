"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  location: string
  detail: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jay helped me see that selling my business wasn\u2019t just a transaction \u2014 it was a complete financial restructuring. We started planning two years before the sale, and it made all the difference.",
    name: "James L.",
    location: "Henderson, NV",
    detail: "Business Owner, Client Since 2009",
  },
  {
    quote:
      "After losing my husband, I was overwhelmed by accounts I didn\u2019t even know existed. Jay brought calm to the chaos and never rushed a single decision.",
    name: "Patricia M.",
    location: "Scottsdale, AZ",
    detail: "Client Since 2017",
  },
  {
    quote:
      "We thought the move to Nevada was straightforward until Jay showed us the California source income traps we would have walked into. His planning saved us more in year one than we expected.",
    name: "Kevin and Laura T.",
    location: "Summerlin, NV",
    detail: "Client Since 2021",
  },
  {
    quote:
      "I spent fifteen years focused on medicine and almost no time on my money. Jay built a strategy around my deferred comp, practice income, and real estate goals that finally made everything work together.",
    name: "Dr. Anish R.",
    location: "Scottsdale, AZ",
    detail: "Client Since 2019",
  },
  {
    quote:
      "Three generations, four trusts, and a family foundation \u2014 Jay unified it all into one coordinated plan. For the first time, every family member can see how their piece fits.",
    name: "The Caldwell Family",
    location: "Paradise Valley, AZ",
    detail: "Clients Since 2006",
  },
  {
    quote:
      "I had RSUs vesting across multiple schedules and no strategy for any of it. Jay built an exercise and diversification timeline that aligned every decision with my tax bracket and retirement goals.",
    name: "Sarah K.",
    location: "Tempe, AZ",
    detail: "Client Since 2022",
  },
  {
    quote:
      "Thirty years of stock options, deferred comp, and trusts had created a financial puzzle no one could untangle. Jay\u2019s team modeled twelve different scenarios before we made a single move.",
    name: "William H.",
    location: "Mesa, AZ",
    detail: "Client Since 2011",
  },
  {
    quote:
      "Passing my company to my daughter was the most important decision of my career. Jay structured the transition so it worked financially for both of us \u2014 and kept the family intact.",
    name: "Richard D.",
    location: "Chandler, AZ",
    detail: "Client Since 2014",
  },
  {
    quote:
      "The day my wire hit after the acquisition, I had a plan waiting. Jay had spent six months preparing for that moment. I never felt lost.",
    name: "Michael S.",
    location: "Green Valley, NV",
    detail: "Client Since 2020",
  },
  {
    quote:
      "We weren\u2019t sure if we had enough to retire the way we wanted. Jay showed us we did \u2014 and that the real opportunity was in how we drew it down, not just how much we had.",
    name: "Thomas and Diana W.",
    location: "Henderson, NV",
    detail: "Clients Since 2008",
  },
  {
    quote:
      "I had seven properties across two states and no coordination between my real estate holdings and my investment portfolio. Jay built an integrated strategy that treated all of it as one picture.",
    name: "Carlos V.",
    location: "Gilbert, AZ",
    detail: "Client Since 2012",
  },
  {
    quote:
      "Selling a medical practice is nothing like selling a normal business. Jay understood the regulatory nuances, the receivables timeline, and the tax complexity from day one.",
    name: "Dr. Michelle F.",
    location: "Phoenix, AZ",
    detail: "Client Since 2016",
  },
  {
    quote:
      "We wanted our giving to be strategic, not just generous. Jay helped us structure a donor-advised fund and charitable remainder trust that aligned our philanthropy with our estate plan.",
    name: "The Harrington Family",
    location: "Summerlin, NV",
    detail: "Clients Since 2004",
  },
  {
    quote:
      "After my divorce, I needed someone who would help me rebuild without judgment. Jay treated my financial plan like a fresh start, not a setback. That meant everything.",
    name: "Nicole A.",
    location: "Peoria, AZ",
    detail: "Client Since 2018",
  },
  {
    quote:
      "My company grew faster than my financial plan. Jay caught me up \u2014 entity structure, tax strategy, retirement vehicles, and an investment portfolio that finally matched where I was headed.",
    name: "Jason M.",
    location: "Clark County, NV",
    detail: "Client Since 2023",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setIsTransitioning(false)
      }, 300)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, goTo])

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <div className="relative">
      {/* Quote content */}
      <div className="relative mt-8">
        <span
          className="font-serif text-[120px] text-[#1d7682]/20 leading-none select-none block"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote
          className="font-serif text-[20px] md:text-[24px] font-normal italic text-[#333333] leading-[1.6] max-w-[760px] mx-auto -mt-10 transition-opacity duration-300"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {t.quote}
        </blockquote>
      </div>

      <div
        className="transition-opacity duration-300"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <p className="font-sans text-sm font-medium text-[#5b6a71] mt-8">
          &mdash; {t.name}, {t.location}
        </p>
        <p className="font-sans text-caption text-[#5b6a71]">{t.detail}</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-[#1d7682]/20 text-[#1d7682] hover:bg-[#1d7682]/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#1d7682] w-6"
                  : "bg-[#1d7682]/20 hover:bg-[#1d7682]/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full border border-[#1d7682]/20 text-[#1d7682] hover:bg-[#1d7682]/10 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Counter */}
      <p className="font-sans text-xs text-[#5b6a71]/60 mt-3">
        {current + 1} of {testimonials.length}
      </p>
    </div>
  )
}
