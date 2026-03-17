import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-border py-12 px-5 md:px-12"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-2">

        <p className="font-sans text-sm font-medium text-text">
          {siteConfig.name}
        </p>

        <p className="font-sans text-sm text-muted">
          <a href={`tel:${siteConfig.phone}`} className="footer-link hover:text-text transition-colors duration-300">
            {siteConfig.phone}
          </a>
          {" · "}
          <a href={`mailto:${siteConfig.email}`} className="footer-link hover:text-text transition-colors duration-300">
            {siteConfig.email}
          </a>
        </p>

        <p className="font-sans text-sm text-muted">
          {siteConfig.address}, {siteConfig.cap} {siteConfig.city}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <p className="font-sans text-xs text-faint">
            © {year} · P.IVA {siteConfig.piva}
          </p>
          <span className="text-faint text-xs">·</span>
          <Link href="/privacy" className="footer-link font-sans text-xs text-faint hover:text-muted transition-colors duration-300">
            Privacy
          </Link>
          <Link href="/cookie" className="footer-link font-sans text-xs text-faint hover:text-muted transition-colors duration-300">
            Cookie
          </Link>
        </div>

      </div>
    </footer>
  )
}
