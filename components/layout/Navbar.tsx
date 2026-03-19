"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/data/siteConfig"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(17,24,39,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-12">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm font-medium uppercase tracking-wide text-text hover:text-muted transition-colors duration-300"
          >
            Avv. Francesca Cicalese
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigazione principale">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-hover font-sans text-sm transition-colors duration-300 ${
                  pathname === link.href ? "text-accent" : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-5 bg-text transition-all duration-300 origin-center ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-text transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-px bg-accent/40"
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-md lg:hidden"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col px-5 divide-y divide-border" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-sans text-base py-4 transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-accent font-medium"
                        : "text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
