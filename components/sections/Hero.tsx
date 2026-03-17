"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] flex-col justify-center pt-16 overflow-hidden"
      aria-label="Presentazione studio legale"
    >
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-12 py-20 md:py-28"
      >
        <div className="flex items-center gap-4 mb-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-accent"
          />
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted"
          >
            Studio Legale
          </motion.span>
        </div>

        <h1 className="font-heading font-medium text-5xl md:text-6xl lg:text-7xl text-text leading-[1.1]">
          <TextReveal delay={0.6}>Francesca</TextReveal>
          <br />
          <TextReveal delay={1.0}>Cicalese</TextReveal>
        </h1>

        <FadeIn delay={2.0}>
          <p className="font-sans text-base md:text-lg text-muted leading-[1.7] max-w-md mt-6">
            Assistenza legale in diritto penale,
            diritto di famiglia e diritto civile.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <CTAButton text="Contattami" href="/contatti" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 80, opacity: 0.1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-accent"
        aria-hidden="true"
      />
    </section>
  )
}
