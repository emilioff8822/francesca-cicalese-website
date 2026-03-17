"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import FadeIn from "@/components/ui/FadeIn"

/*
  Il titolo si rivela parola per parola — ogni parola "sale" dal basso
  con un leggero skew che si raddrizza. Tecnica usata dai siti editoriali
  di lusso (Bottega Veneta, agency come Work & Co).
*/
const titleWords = ["Francesca", "Cicalese"]

const wordVariants = {
  hidden:  { opacity: 0, y: 60, skewY: 4 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      aria-label="Presentazione studio legale"
    >
      {/* ── Foto di Francesca — destra, con dissolvenze ai bordi ─────── */}
      <div className="absolute inset-0 lg:left-[48%] lg:inset-y-0 lg:right-0">
        <Image
          src="/images/francesca-toga.png"
          alt="Avv. Francesca Cicalese in toga presso la Corte di Cassazione, Roma"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        {/* Dissolvenza sinistra — la foto sparisce nel bg */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #070B14 0%, #070B14 5%, rgba(7,11,20,0.7) 40%, rgba(7,11,20,0.1) 100%)" }}
        />
        {/* Dissolvenza bassa */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #070B14 0%, transparent 35%)" }}
        />
        {/* Velo scuro per far risaltare il testo su mobile */}
        <div className="absolute inset-0 bg-bg/70 lg:bg-transparent" />
      </div>

      {/* ── Contenuto testo — sinistra ───────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 pt-28 pb-20 lg:pt-0">
        <div className="max-w-xl">

          {/* Etichetta */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-xs uppercase tracking-[0.4em] text-accent mb-8"
          >
            Studio Legale · Roma
          </motion.p>

          {/* Nome — animazione parola per parola */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-sans text-base text-muted mb-1 tracking-widest"
            >
              Avv.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.6 } } }}
              className="overflow-visible"
            >
              {titleWords.map((word) => (
                <div key={word} className="overflow-hidden">
                  <motion.h1
                    variants={wordVariants}
                    className="font-heading italic text-[clamp(4rem,10vw,8rem)] text-text leading-[0.92] block"
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Separatore */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left mt-8 mb-8 h-px w-16 bg-accent/50"
          />

          {/* Sottotitolo */}
          <FadeIn delay={1.1} direction="up">
            <p className="font-sans text-sm text-muted leading-loose max-w-sm">
              Difesa penale, tutela della famiglia e dei minori,
              diritto civile. Con attenzione alla persona,
              in ogni fase del procedimento.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={1.3} direction="up">
            <div className="mt-10 flex items-center gap-8 flex-wrap">
              <Link
                href="/contatti"
                className="font-sans text-xs uppercase tracking-widest text-bg bg-text px-7 py-3.5 hover:bg-accent transition-colors duration-400"
              >
                Contattami
              </Link>
              <Link
                href="/servizi"
                className="font-sans text-xs uppercase tracking-widest text-muted hover:text-text transition-colors duration-300 flex items-center gap-2 group"
              >
                I miei servizi
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Stats — cifre evocative */}
          <FadeIn delay={1.5} direction="up">
            <div className="mt-16 flex items-center gap-10">
              <div>
                <p className="font-heading italic text-4xl text-text">10+</p>
                <p className="font-sans text-xs text-muted/60 mt-1 tracking-wide">Anni di esperienza</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-heading italic text-4xl text-text">3</p>
                <p className="font-sans text-xs text-muted/60 mt-1 tracking-wide">Aree di pratica</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-heading italic text-4xl text-text">Roma</p>
                <p className="font-sans text-xs text-muted/60 mt-1 tracking-wide">Foro di appartenenza</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Indicatore di scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-muted/40 to-transparent"
        />
        <span className="font-sans text-xs text-muted/40 uppercase tracking-[0.3em]">Scorri</span>
      </motion.div>
    </section>
  )
}
