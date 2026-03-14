import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#1C2B3A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          hover: '#B8962F',
          muted: 'rgba(201, 168, 76, 0.1)',
        },
        ivory: '#F7F4EE',
        slate: {
          text: '#1C2B3A',
          muted: '#6B7A8D',
          light: '#BFC8D4',
        },
        glacial: '#E8F0F7',
        crimson: '#8B2E2E',
        forest: '#2E5D4B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'hero-mobile': ['40px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h1': ['56px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h1-mobile': ['34px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h2': ['42px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h3': ['28px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h3-mobile': ['22px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'body-sm': ['14px', { lineHeight: '1.65' }],
        'stat': ['48px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'stat-mobile': ['32px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'nav': ['15px', { lineHeight: '1', letterSpacing: '0.01em' }],
        'btn': ['15px', { lineHeight: '1', letterSpacing: '0.01em' }],
        'caption': ['13px', { lineHeight: '1.5' }],
        'legal': ['11px', { lineHeight: '1.5' }],
        'eyebrow': ['13px', { lineHeight: '1', letterSpacing: '0.15em' }],
        'eyebrow-sm': ['12px', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '40px',
        'xl': '64px',
        '2xl': '96px',
        '3xl': '128px',
      },
      maxWidth: {
        'container': '1280px',
        'content': '680px',
        'narrow': '520px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(10, 22, 40, 0.04)',
        'card-hover': '0 12px 48px rgba(10, 22, 40, 0.08)',
        'nav': '0 2px 8px rgba(10, 22, 40, 0.06)',
        'form': '0 24px 80px rgba(10, 22, 40, 0.08)',
        'mega': '0 40px 80px rgba(10, 22, 40, 0.6)',
      },
      borderRadius: {
        'minimal': '2px',
        'card': '4px',
        'form': '8px',
        'panel': '12px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'slide-in-right': 'slide-in-right 0.3s ease forwards',
        'ken-burns': 'ken-burns 15s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
export default config
