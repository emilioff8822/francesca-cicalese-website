"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"

export default function ChiSono() {
  const imgRef = useRef<HTMLDivElement>(null)
  const imgInView = useInView(imgRef, { once: true, margin: "-15%" })

  return (
    <section className="py-24 md:py-32 bg-surface" aria-label="Chi Sono" id="chi-sono">
      <div className="mx-auto max-w-6xl px-5 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

          {/* Foto con clip-path reveal + scale */}
          <div ref={imgRef} className="w-full md:w-5/12 shrink-0 relative">
            {/* Cornice sfalsata — appare 0.3s dopo l'immagine */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={imgInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/20"
            />

            {/* Immagine con clip-path reveal + zoom out */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
              animate={
                imgInView
                  ? { clipPath: "inset(0% 0 0 0)", scale: 1 }
                  : { clipPath: "inset(100% 0 0 0)", scale: 1.15 }
              }
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative overflow-hidden"
            >
              <Image
                src="/images/francesca-esterno.png"
                alt="Avv. Francesca Cicalese fuori dal Palazzo di Giustizia, Roma"
                width={960}
                height={1280}
                quality={90}
                className="w-full aspect-[3/4] object-cover"
              />
            </motion.div>
          </div>

          {/* Testo */}
          <div className="w-full md:w-7/12">
            <SectionLabel text="Chi Sono" />

            <FadeIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-6">
                <TextReveal delay={0.2}>Difendere i tuoi diritti con competenza e dedizione.</TextReveal>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-muted leading-[1.8] mb-8 max-w-lg">
                Con oltre otto anni di esperienza nel foro di Roma, offro assistenza
                legale personalizzata in diritto penale, diritto di famiglia e diritto
                civile. Ogni caso è unico e merita un approccio su misura.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                href="/chi-sono"
                className="link-hover text-sm text-accent font-medium inline-flex items-center gap-2 group"
              >
                Scopri di più
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
