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
    "bg-[#C9A84C] text-[#0A1628] font-sans text-btn font-semibold py-[18px] px-[36px] rounded-[2px] hover:bg-[#B8962F] hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] transition-all duration-200",
  ghost:
    "bg-transparent text-[#F7F4EE] font-sans text-btn font-normal hover:text-[#C9A84C] hover:pl-1 transition-all duration-200",
  outline:
    "bg-transparent border-[1.5px] border-[#C9A84C] text-[#C9A84C] font-sans text-btn font-semibold py-[14px] px-[28px] rounded-[2px] hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200",
}

export default function Button({
  children,
  href,
  variant,
  className,
  size = "default",
}: ButtonProps) {
  const sizeStyles = size === "full" ? "w-full text-center" : ""

  return (
    <Link
      href={href}
      className={`${variantStyles[variant]} ${sizeStyles} ${className ?? ""}`.trim()}
    >
      {children}
    </Link>
  )
}
