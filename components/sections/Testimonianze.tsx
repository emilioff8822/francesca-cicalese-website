"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonianze } from "@/data/testimonianze"
import SectionLabel from "@/components/ui/SectionLabel"

export default function Testimonianze() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % testimonianze.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + testimonianze.length) % testimonianze.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, current])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <section
      className="py-24 md:py-32"
      aria-label="Testimonianze"
      id="recensioni"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
        <div className="min-h-[140px] flex items-center justify-center relative">
          <AnimatePresence>
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)", position: "absolute" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-xl md:text-2xl italic text-text leading-[1.6]"
            >
              {testimonianze[current].testo}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          <motion.p
            key={`author-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, position: "absolute" }}
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
