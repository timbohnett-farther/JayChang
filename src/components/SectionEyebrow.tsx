interface SectionEyebrowProps {
  text: string
  light?: boolean
}

export default function SectionEyebrow({
  text,
  light = false,
}: SectionEyebrowProps) {
  return (
    <span
      className={`font-sans text-eyebrow-sm font-bold uppercase tracking-[0.15em] text-[#C9A84C]`}
    >
      {text}
    </span>
  )
}
