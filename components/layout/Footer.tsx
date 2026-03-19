import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-5 md:px-12"
      style={{ background: "linear-gradient(135deg, #1e3050, #182842)" }}
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">

          {/* Colonna 1: info principali */}
          <div className="text-center md:text-left">
            <p className="font-sans text-sm font-medium text-white mb-3">
              {siteConfig.name}
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Colonna 2: studio */}
          <div className="text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
              Studio
            </p>
            <a
              href="https://maps.google.com/?q=Via+Sabotino+46+Roma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              {siteConfig.address}<br />
              {siteConfig.cap} {siteConfig.city}
            </a>
          </div>

          {/* Colonna 3: orari */}
          <div className="text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
              Orari
            </p>
            <div className="space-y-1.5">
              <div className="flex justify-center md:justify-between text-sm gap-4">
                <span className="text-white/50">Lun — Ven</span>
                <span className="text-white/70">9:00 — 18:00</span>
              </div>
              <div className="flex justify-center md:justify-between text-sm gap-4">
                <span className="text-white/50">Sabato</span>
                <span className="text-white/70">Su appuntamento</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separatore */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-white/25">
            © {year} · P.IVA {siteConfig.piva}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="font-sans text-xs text-white/25 hover:text-white/60 transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/cookie" className="font-sans text-xs text-white/25 hover:text-white/60 transition-colors duration-300">
              Cookie
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
