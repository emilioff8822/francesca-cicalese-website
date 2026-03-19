"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonianze } from "@/data/testimonianze"

const cardBg = [
  "bg-white border-border/50",
  "bg-[#EEF2FF] border-[#DDE3F0]",
  "bg-[#F5F7FC] border-border/40",
  "bg-[#E8EEFF] border-[#D4DCEF]",
]

export default function RecensioniCarousel() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % testimonianze.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + testimonianze.length) % testimonianze.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5500)
  }, [next])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goTo = (i: number) => {
    setCurrent(i)
    resetTimer()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev()
      resetTimer()
    }
    touchStartX.current = null
  }

  const t = testimonianze[current]
  const style = cardBg[current % cardBg.length]

  return (
    <div
      className="select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative min-h-[300px] md:min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -60, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div
              className={`${style} border rounded-xl p-8 md:p-12 h-full flex flex-col justify-between gap-6 shadow-[0_2px_20px_rgba(30,48,80,0.04)] transition-shadow duration-500`}
            >
              <div>
                <div className="text-accent/20 text-6xl font-heading leading-none mb-4 select-none" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="font-heading text-xl md:text-2xl italic text-text leading-[1.6]">
                  {t.testo}
                </blockquote>
              </div>

              <div>
                <div className="w-8 h-px bg-accent/25 mb-3" />
                <p className="text-sm font-medium text-text">
                  {t.nome}
                  {t.citta && <span className="text-muted font-normal"> · {t.citta}</span>}
                </p>
                {t.servizio && (
                  <p className="text-xs text-accent/60 mt-1 uppercase tracking-[0.1em]">
                    {t.servizio}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 mt-10">
        {testimonianze.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Testimonianza ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === current
                ? "bg-accent w-7"
                : "bg-accent/15 w-1.5 hover:bg-accent/30"
            }`}
          />
        ))}
      </div>

      <p className="text-center text-xs text-faint mt-4 md:hidden">
        Scorri per leggere le altre testimonianze
      </p>
    </div>
  )
}
