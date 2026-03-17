"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonianze } from "@/data/testimonianze"
import SectionLabel from "@/components/ui/SectionLabel"

export default function Testimonianze() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % testimonianze.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, current])

  return (
    <section className="py-24 md:py-32" aria-label="Testimonianze" id="recensioni">
      <div className="max-w-3xl mx-auto px-5 md:px-12 text-center">
        <SectionLabel text="Testimonianze" />

        {/* Virgoletta decorativa — respira durante la transizione */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`quote-${current}`}
            initial={{ scale: 0.95, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 0.2 }}
            exit={{ scale: 0.95, opacity: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-accent text-6xl font-heading leading-none mb-8 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </motion.div>
        </AnimatePresence>

        {/* Testo con blur in/out */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-xl md:text-2xl italic text-text leading-[1.6]"
            >
              {testimonianze[current].testo}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={`author-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-muted mt-6"
          >
            — {testimonianze[current].nome}, {testimonianze[current].citta}
          </motion.p>
        </AnimatePresence>

        {/* Dot — il dot attivo si allunga in pillola */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonianze.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonianza ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent w-6"
                  : "bg-faint w-1.5 hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
