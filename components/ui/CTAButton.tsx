import Link from "next/link"

type Props = {
  text: string
  href: string
  fullWidth?: boolean
}

export default function CTAButton({ text, href, fullWidth = false }: Props) {
  return (
    <Link
      href={href}
      className={`group relative inline-block overflow-hidden border border-border px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-medium text-muted transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:text-text hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,141,239,0.15)] active:scale-[0.98] active:transition-transform active:duration-100 ${
        fullWidth ? "w-full text-center py-4" : ""
      }`}
    >
      <span className="absolute inset-0 bg-accent opacity-[0.06] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
      <span className="relative">{text}</span>
    </Link>
  )
}
