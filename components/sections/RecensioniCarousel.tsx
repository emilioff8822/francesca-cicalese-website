"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonianze } from "@/data/testimonianze"

const cardBg = [
  "bg-[#EBF2FB] border-[#C8D9EE]",
  "bg-[#E4EFF8] border-[#BAD0E8]",
  "bg-[#EEF6FC] border-[#C4DCF0]",
  "bg-[#DDE8F4] border-[#AECAE3]",
  "bg-[#EAF1F9] border-[#C2D5EB]",
  "bg-[#E0EBF6] border-[#B4CCDF]",
  "bg-[#F0F7FD] border-[#C6DDF2]",
  "bg-[#D9E6F2] border-[#A8C4DC]",
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
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`${style} border rounded-xl p-6 md:p-12 flex flex-col justify-between gap-6 shadow-[0_2px_20px_rgba(30,48,80,0.04)]`}
            >
              <div>
                <div className="text-accent/20 text-5xl md:text-6xl font-heading leading-none mb-2 select-none" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="font-heading text-lg md:text-2xl italic text-text leading-[1.6]">
                  {t.testo}
                  <span className="text-accent/20 not-italic">&rdquo;</span>
                </blockquote>
              </div>

              <div>
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
      <div className="flex justify-center gap-2.5 mt-8">
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
