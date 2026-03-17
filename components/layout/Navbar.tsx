"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface-high/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl italic text-text transition-colors duration-300 hover:text-accent"
          onClick={() => setMenuOpen(false)}
        >
          Avv. Francesca Cicalese
        </Link>

        {/* Link desktop */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-text"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop — bordo sottile, nessun riempimento colorato di default */}
        <Link
          href="/contatti"
          className="hidden md:inline-flex items-center font-sans text-xs uppercase tracking-widest text-text border border-border px-5 py-2.5 transition-all duration-300 hover:border-accent hover:text-accent"
        >
          Contattami
        </Link>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 bg-text transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-text transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px w-6 bg-text transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-surface-high border-b border-border`}
      >
        <ul className="flex flex-col px-6 py-10 gap-8" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm uppercase tracking-widest text-muted transition-colors duration-300 hover:text-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-border">
            <Link
              href="/contatti"
              className="inline-flex font-sans text-xs uppercase tracking-widest text-text border border-border px-6 py-3 transition-all duration-300 hover:border-accent hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Contattami
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
