"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
    // La navbar entra dall'alto con fade-in al caricamento della pagina
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
        {/* Logo — corsivo elegante, leggero glow al hover */}
        <Link
          href="/"
          className="font-heading text-xl italic text-text transition-all duration-300 hover:text-accent"
          style={{ textShadow: "0 0 0px transparent" }}
          onMouseEnter={(e) => (e.currentTarget.style.textShadow = "0 0 20px rgba(77,142,240,0.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.textShadow = "0 0 0px transparent")}
          onClick={() => setMenuOpen(false)}
        >
          Avv. Francesca Cicalese
        </Link>

        {/* Link desktop — con stagger di ingresso */}
        <motion.ul
          className="hidden md:flex items-center gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
          role="list"
        >
          {siteConfig.navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={{
                hidden:  { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <Link
                href={link.href}
                className="group relative font-sans text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-text"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:block"
        >
          <Link
            href="/contatti"
            className="font-sans text-xs uppercase tracking-widest text-text border border-border px-5 py-2.5 transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Contattami
          </Link>
        </motion.div>

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

      {/* Menu mobile con AnimatePresence per ingresso/uscita fluida */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-surface-high border-b border-border"
          >
            <motion.ul
              className="flex flex-col px-6 py-10 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              role="list"
            >
              {siteConfig.navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden:  { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-sm uppercase tracking-widest text-muted hover:text-text transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="pt-4 border-t border-border"
                variants={{
                  hidden:  { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
              >
                <Link
                  href="/contatti"
                  className="inline-flex font-sans text-xs uppercase tracking-widest text-text border border-border px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Contattami
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
