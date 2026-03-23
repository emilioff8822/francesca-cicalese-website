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

  const bilanciaY = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const bilanciaRotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e3050, #182842)" }}
      aria-label="Contattami"
    >
      {/* Punto luce centrale per profondità */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05), transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: bilanciaY, rotate: bilanciaRotate }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.05]"
        aria-hidden="true"
      >
        <Image src="/images/bilancia.png" alt="" width={300} height={300} className="invert" />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-white leading-[1.1] mb-6">
            <TextReveal>Parliamo del tuo caso.</TextReveal>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base text-white/70 leading-[1.7] mb-10 max-w-md mx-auto">
            Ogni situazione merita attenzione. Contattami per una
            consulenza iniziale senza impegno.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <CTAButton text="Contattami" href="/contatti" inverted />
        </FadeIn>
      </div>
    </section>
  )
}
