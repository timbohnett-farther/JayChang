import Link from "next/link"
import { type ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href: string
  variant: "primary" | "ghost" | "outline"
  className?: string
  size?: "default" | "full"
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary:
    "bg-[#1d7682] text-[#F7F4EE] font-sans text-btn font-semibold py-[18px] px-[36px] rounded-[2px] hover:bg-[#155f69] hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(29,118,130,0.3)] transition-all duration-200",
  ghost:
    "bg-transparent text-[#F7F4EE] font-sans text-btn font-normal hover:text-[#1d7682] hover:pl-1 transition-all duration-200",
  outline:
    "bg-transparent border-[1.5px] border-[#1d7682] text-[#1d7682] font-sans text-btn font-semibold py-[14px] px-[28px] rounded-[2px] hover:bg-[#1d7682] hover:text-[#F7F4EE] transition-all duration-200",
}

export default function Button({
  children,
  href,
  variant,
  className,
  size = "default",
}: ButtonProps) {
  const sizeStyles = size === "full" ? "w-full text-center" : ""
  const classes = `${variantStyles[variant]} ${sizeStyles} ${className ?? ""}`.trim()
  const isExternal = href.startsWith("http")

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
