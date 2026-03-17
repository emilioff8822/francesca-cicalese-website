import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-surface overflow-hidden" aria-label="Footer">

      {/* Sfumatura in cima — il footer emerge dal bg, nessuna linea netta */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #070B14, transparent)" }}
      />

      {/* Ghost watermark — nome enorme semitrasparente come elemento grafico */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading italic text-text whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 18vw, 220px)",
            opacity: 0.025,
            letterSpacing: "-0.03em",
            userSelect: "none",
          }}
        >
          Cicalese
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-10">

        {/* Layout principale — asimmetrico: branding occupa più spazio */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_1fr_1fr]">

          {/* Branding — colonna larga */}
          <div className="space-y-6">
            <Link
              href="/"
              className="block font-heading text-3xl italic text-text hover:text-accent transition-colors duration-500"
            >
              {siteConfig.name}
            </Link>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
              {siteConfig.role} · {siteConfig.city}
            </p>
            <p className="font-sans text-sm leading-loose text-muted max-w-xs">
              Diritto penale, famiglia e minori, civile.<br />
              Assistenza legale con attenzione alla persona.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-sans text-sm text-text hover:text-accent transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
              <span className="w-px h-3 bg-border" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigazione — colonna stretta */}
          <div className="space-y-5">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">
              Pagine
            </p>
            <ul className="space-y-4" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted hover:text-text transition-colors duration-300 group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio — colonna stretta */}
          <div className="space-y-5">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">
              Studio
            </p>
            <address className="not-italic space-y-4">
              <p className="font-sans text-sm text-muted leading-relaxed">
                {siteConfig.address}<br />
                {siteConfig.cap} {siteConfig.city}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom — minimalista, nessuna linea */}
        <div className="mt-20 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <p className="font-sans text-xs text-muted/60">
            © {year} {siteConfig.name}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="font-sans text-xs text-muted/60 hover:text-muted transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/cookie" className="font-sans text-xs text-muted/60 hover:text-muted transition-colors duration-300">
              Cookie
            </Link>
            <span className="font-sans text-xs text-muted/40">
              P.IVA {siteConfig.piva}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
