import Link from "next/link"

interface ServiceCardProps {
  number: string
  title: string
  description: string
  href: string
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.15)] rounded-[4px] p-[40px] hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] transition-all duration-300">
        <span className="font-mono text-caption text-[#C9A84C] tracking-[0.1em]">
          {number}
        </span>
        <h3 className="font-sans text-h4 font-semibold text-[#F7F4EE] mt-4">
          {title}
        </h3>
        <p className="font-sans text-[15px] text-[#BFC8D4] leading-relaxed mt-2">
          {description}
        </p>
        <span
          className="inline-block mt-4 text-[#C9A84C] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </div>
    </Link>
  )
}
