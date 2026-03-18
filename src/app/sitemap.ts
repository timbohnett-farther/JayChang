import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.PWM-Farther.com'

  const staticPages = [
    // Core pages
    { url: baseUrl, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/schedule-consultation`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/client-resources`, lastModified: '2026-02-15', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/wealth-management`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/investment-philosophy`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/disclosures`, lastModified: '2026-01-15', changeFrequency: 'monthly' as const, priority: 0.5 },

    // Location pages (primary — /locations/* redirects here via next.config)
    { url: `${baseUrl}/las-vegas`, lastModified: '2026-03-16', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Services overview + all service pages
    { url: `${baseUrl}/services`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/financial-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/investments`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/tax-optimization`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/retirement-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/trust-estate`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/business-owners`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/401k`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/alternatives`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/institutional`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/generational-wealth`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Insights / blog
    { url: `${baseUrl}/insights`, lastModified: '2026-03-16', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/insights/family-office-vs-wealth-advisor`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/how-to-choose-cfp-las-vegas`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insights/tax-loss-harvesting-guide`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/roth-conversion-strategies`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/estate-planning-essentials`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/las-vegas-financial-planning`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/insights/choosing-financial-advisor`, lastModified: '2026-03-10', changeFrequency: 'monthly' as const, priority: 0.6 },

    // Tools / calculators
    { url: `${baseUrl}/tools/retirement-readiness`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/estate-complexity`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/ca-nv-tax-savings`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/equity-compensation`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/tools/business-exit-scorecard`, lastModified: '2026-02-15', changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
