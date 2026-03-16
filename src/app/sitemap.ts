import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.PWM-Farther.com'

  const staticPages = [
    // Core pages
    { url: baseUrl, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/schedule-consultation`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/client-resources`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/wealth-management`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/investment-philosophy`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/disclosures`, changeFrequency: 'monthly' as const, priority: 0.5 },

    // Location pages
    { url: `${baseUrl}/dallas`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/las-vegas`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/locations/dallas-tx`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/locations/las-vegas-nv`, changeFrequency: 'monthly' as const, priority: 0.8 },

    // Services overview + all service pages
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/financial-planning`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/investments`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/tax-optimization`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/retirement-planning`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/trust-estate`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/business-owners`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/401k`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/alternatives`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/institutional`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/generational-wealth`, changeFrequency: 'monthly' as const, priority: 0.7 },

    // Insights / blog
    { url: `${baseUrl}/insights`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/insights/family-office-vs-wealth-advisor`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/how-to-choose-cfp-las-vegas`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/tax-loss-harvesting-guide`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/roth-conversion-strategies`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/estate-planning-essentials`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/dallas-wealth-management-guide`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/las-vegas-financial-planning`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/choosing-financial-advisor`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/selling-business-dallas`, changeFrequency: 'monthly' as const, priority: 0.6 },

    // Tools / calculators
    { url: `${baseUrl}/tools/retirement-readiness`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/estate-complexity`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/ca-nv-tax-savings`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/equity-compensation`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/business-exit-scorecard`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
