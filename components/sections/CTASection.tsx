"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import TextReveal from "@/components/ui/TextReveal"

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bilanciaY = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const bilanciaRotate = useTransform(scrollYProgress, [0, 1], [-3, 3])
  const bilanciaOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.02, 0.04, 0.02])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
      aria-label="Contattami"
    >
      {/* Bilancia con parallax + rotazione + opacità variabile */}
      <motion.div
        style={{ y: bilanciaY, rotate: bilanciaRotate, opacity: bilanciaOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image src="/images/bilancia.png" alt="" width={300} height={300} />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] mb-6">
            <TextReveal>Parliamo del tuo caso.</TextReveal>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base text-muted leading-[1.7] mb-10 max-w-md mx-auto">
            Ogni situazione merita attenzione. Contattami per una
            consulenza iniziale senza impegno.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <CTAButton text="Contattami" href="/contatti" />
        </FadeIn>
      </div>
    </section>
  )
}
