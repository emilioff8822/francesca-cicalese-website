"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/data/siteConfig"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      {/* ── Strip navbar ── sottile, non invasiva ─────────────────────── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-bg/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:py-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-heading text-lg italic text-text/90 hover:text-text transition-colors duration-500"
          >
            Avv. Francesca Cicalese
          </Link>

          {/* Destra: CTA + bottone menu */}
          <div className="flex items-center gap-6">
            <Link
              href="/contatti"
              className="hidden sm:block font-sans text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300"
            >
              Contattami
            </Link>

            {/* Bottone Menu — apre l'overlay */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 group"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
            >
              <span className="font-sans text-xs uppercase tracking-widest text-muted group-hover:text-text transition-colors duration-300">
                {menuOpen ? "Chiudi" : "Menu"}
              </span>
              {/* Icona hamburger → X */}
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`block h-px bg-text transition-all duration-400 origin-center ${menuOpen ? "translate-y-[5px] rotate-45 w-full" : "w-full"}`} />
                <span className={`block h-px bg-text transition-all duration-400 ${menuOpen ? "opacity-0 w-0" : "w-3/4"}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Overlay menu full-screen ───────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col justify-between px-8 md:px-16 py-28 overflow-hidden"
          >
            {/* Watermark decorativo */}
            <span
              className="absolute right-0 bottom-0 font-heading italic text-text/[0.03] pointer-events-none select-none leading-none"
              style={{ fontSize: "clamp(120px, 25vw, 320px)" }}
              aria-hidden="true"
            >
              Legge
            </span>

            {/* Link di navigazione — grandi, con counter */}
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              aria-label="Menu principale"
            >
              <ul className="space-y-1" role="list">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-5 py-3 border-b border-border/40 hover:border-accent/40 transition-colors duration-300"
                    >
                      <span className="font-sans text-xs text-muted/50 tabular-nums w-5">
                        0{i + 1}
                      </span>
                      <span className="font-heading italic text-5xl md:text-7xl text-text/80 group-hover:text-text transition-colors duration-300 leading-tight">
                        {link.label}
                      </span>
                      <span className="ml-auto font-sans text-xs text-muted/40 group-hover:text-accent transition-colors duration-300 hidden sm:block">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Info contatto in basso */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-center"
            >
              <a href={`tel:${siteConfig.phone}`} className="font-sans text-sm text-muted hover:text-text transition-colors duration-300">
                {siteConfig.phone}
              </a>
              <span className="hidden sm:block w-px h-3 bg-border" />
              <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-muted hover:text-text transition-colors duration-300">
                {siteConfig.email}
              </a>
              <span className="hidden sm:block w-px h-3 bg-border" />
              <span className="font-sans text-sm text-muted/60">
                {siteConfig.address}, {siteConfig.city}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
