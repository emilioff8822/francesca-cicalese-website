import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border" aria-label="Footer">
      {/* Linea decorativa in cima — gradiente zaffiro */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #4D8EF0 40%, #4D8EF0 60%, transparent)" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Branding */}
          <div>
            <Link href="/" className="font-heading text-2xl italic text-text hover:text-accent transition-colors duration-300">
              {siteConfig.name}
            </Link>
            <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted">
              {siteConfig.role} · {siteConfig.city}
            </p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-muted">
              Assistenza legale professionale a Roma.<br />
              Diritto civile, famiglia, lavoro e contratti.
            </p>
          </div>

          {/* Navigazione */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6 border-b border-border pb-3">
              Navigazione
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted mb-6 border-b border-border pb-3">
              Contatti
            </p>
            <address className="not-italic flex flex-col gap-3">
              <span className="font-sans text-sm text-muted">{siteConfig.address}, {siteConfig.cap}</span>
              <span className="font-sans text-sm text-muted">{siteConfig.city}</span>
              <a href={`tel:${siteConfig.phone}`} className="font-sans text-sm text-muted hover:text-text transition-colors duration-300">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-muted hover:text-text transition-colors duration-300">
                {siteConfig.email}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <p className="font-sans text-xs text-muted">
            © {year} {siteConfig.name} · P.IVA {siteConfig.piva}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-sans text-xs text-muted hover:text-text transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="font-sans text-xs text-muted hover:text-text transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
