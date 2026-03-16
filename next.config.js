/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // Normalize duplicate location routes to primary location pages
      {
        source: '/locations/dallas-tx',
        destination: '/dallas',
        permanent: true,
      },
      {
        source: '/locations/las-vegas-nv',
        destination: '/las-vegas',
        permanent: true,
      },
      // Common misspellings & alternative slugs
      {
        source: '/services/estate-planning',
        destination: '/services/trust-estate',
        permanent: true,
      },
      {
        source: '/services/alternative-investments',
        destination: '/services/alternatives',
        permanent: true,
      },
      {
        source: '/services/401k-rollover',
        destination: '/services/401k',
        permanent: true,
      },
      {
        source: '/schedule',
        destination: '/schedule-consultation',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/insights/:slug',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        source: '/:all*(webp|png|jpg|jpeg|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
