import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/lp/', '/api/'],
    },
    sitemap: 'https://www.PWM-Farther.com/sitemap.xml',
  }
}
