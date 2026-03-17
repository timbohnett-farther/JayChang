import Image from 'next/image'

interface FartherLogoProps {
  variant?: 'cream' | 'dark'
  className?: string
  size?: number
}

export function FartherIcon({ variant = 'cream', className, size = 32 }: FartherLogoProps) {
  const src = variant === 'cream' ? '/farther-icon-cream.png' : '/farther-icon-navy.png'

  return (
    <Image
      src={src}
      alt="Farther wealth management icon"
      width={size}
      height={size}
      className={className}
      priority
    />
  )
}

export function FartherWordmark({ variant = 'cream', className, size = 100 }: FartherLogoProps) {
  const src = variant === 'cream' ? '/farther-wordmark-cream.png' : '/farther-wordmark-navy.png'

  return (
    <Image
      src={src}
      alt="Farther wealth management wordmark"
      width={size}
      height={Math.round(size * 0.28)}
      className={className}
      priority
    />
  )
}
