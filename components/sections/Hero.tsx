"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] flex-col justify-center pt-16 overflow-hidden"
      aria-label="Presentazione studio legale"
    >
      <motion.div
        style={{ y: titleY, opacity: titleOpacity, willChange: "transform, opacity" }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-12 py-20 md:py-28"
      >
        <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 20 }}
            transition={{ duration: 0.5, delay: 0, ease: EASE }}
            className="h-px bg-accent"
          />
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted"
          >
            Studio Legale
          </motion.span>
        </div>

        <h1 className="font-heading font-medium text-5xl md:text-6xl lg:text-7xl text-text leading-[1.1] text-center md:text-left">
          <span className="sr-only">Avvocato Penalista Roma — </span>
          <TextReveal delay={0.2}>Francesca</TextReveal>
          <br />
          <TextReveal delay={0.38}>Cicalese</TextReveal>
        </h1>

        <FadeIn delay={0.55}>
          <p className="font-sans text-base md:text-lg text-muted leading-[1.7] max-w-md mt-6 text-center md:text-left mx-auto md:mx-0">
            Avvocato penalista e civilista a Roma, zona Prati — diritto penale, famiglia, civile e lavoro.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8, ease: EASE }}
          className="mt-8 flex justify-center md:justify-start"
          style={{ willChange: "transform, opacity" }}
        >
          <CTAButton text="Contattami" href="/contatti" solid />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 80, opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-accent"
        aria-hidden="true"
      />
    </section>
  )
}
