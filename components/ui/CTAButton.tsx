import Link from "next/link"

type Props = {
  text: string
  href: string
  fullWidth?: boolean
  inverted?: boolean
  solid?: boolean
}

export default function CTAButton({ text, href, fullWidth = false, inverted = false, solid = false }: Props) {
  const base = "group relative inline-block overflow-hidden px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-0 active:scale-[0.96] active:shadow-none active:transition-[transform] active:duration-100"

  const normal = "border-[1.5px] border-[rgba(17,24,39,0.15)] text-text hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(30,48,80,0.25)] active:bg-[#162640]"

  const inv = "border-[1.5px] border-white/30 text-white hover:bg-white hover:text-accent hover:border-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] active:bg-white/90"

  const solidStyle = "bg-accent border-[1.5px] border-accent text-white hover:bg-[#162640] hover:border-[#162640] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(30,48,80,0.3)] active:bg-[#111e38]"

  const style = solid ? solidStyle : inverted ? inv : normal

  return (
    <Link
      href={href}
      className={`${base} ${style} ${fullWidth ? "w-full text-center py-4" : ""}`}
    >
      <span className="relative">{text}</span>
    </Link>
  )
}
