import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-bg overflow-hidden" aria-label="Footer">

      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading italic text-text leading-none translate-y-8"
          style={{ fontSize: "clamp(100px, 22vw, 280px)", opacity: 0.03 }}
        >
          FC
        </span>
      </div>

      {/* Contenuto — il footer è la chiusura del viaggio, non un menu ripetuto */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 pt-24 pb-12">

        {/* Messaggio principale */}
        <div className="mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent mb-6">
            Inizia da qui
          </p>
          <h2 className="font-heading italic text-5xl md:text-7xl text-text leading-tight max-w-2xl">
            Parliamo del<br />tuo caso.
          </h2>
          <p className="mt-6 font-sans text-sm text-muted leading-relaxed max-w-md">
            Una consulenza non è un impegno. È il primo passo per capire
            insieme quale tutela hai diritto di ricevere.
          </p>
          <Link
            href="/contatti"
            className="mt-10 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-text border border-border px-8 py-4 hover:border-accent hover:text-accent transition-all duration-500 group"
          >
            Scrivimi
            <span className="w-0 group-hover:w-6 h-px bg-accent transition-all duration-300" />
          </Link>
        </div>

        {/* Contatti diretti */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 sm:items-center mb-20">
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-heading italic text-2xl text-text/80 hover:text-accent transition-colors duration-300"
          >
            {siteConfig.phone}
          </a>
          <span className="hidden sm:block w-px h-6 bg-border" />
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-sans text-sm text-muted hover:text-text transition-colors duration-300"
          >
            {siteConfig.email}
          </a>
          <span className="hidden sm:block w-px h-6 bg-border" />
          <span className="font-sans text-sm text-muted/60">
            {siteConfig.address}, {siteConfig.cap} {siteConfig.city}
          </span>
        </div>

        {/* Bottom — minimalissimo */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center pt-8 border-t border-border/30">
          <p className="font-sans text-xs text-muted/40">
            © {year} {siteConfig.name} · P.IVA {siteConfig.piva}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="font-sans text-xs text-muted/40 hover:text-muted transition-colors duration-300">Privacy</Link>
            <Link href="/cookie" className="font-sans text-xs text-muted/40 hover:text-muted transition-colors duration-300">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
