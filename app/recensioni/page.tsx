import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import { testimonianze } from "@/data/testimonianze"

export const metadata: Metadata = {
  title: "Recensioni Clienti | Avv. Francesca Cicalese — Studio Legale Roma",
  description:
    "Leggi le testimonianze dei clienti dell'Avv. Francesca Cicalese, avvocato a Roma zona Prati. Opinioni e recensioni sullo studio legale per diritto penale, famiglia, civile e lavoro.",
  alternates: { canonical: "https://www.francescacicalese.it/recensioni" },
  openGraph: {
    title: "Recensioni | Avv. Francesca Cicalese — Studio Legale Roma",
    description: "Le testimonianze dei clienti dello Studio Legale Cicalese, Roma Prati.",
    url: "https://www.francescacicalese.it/recensioni",
  },
}

export default function Recensioni() {
  return (
    <PageTransition>
      <main className="pt-16">

        {/* Hero */}
        <section className="py-24 md:py-32" aria-label="Testimonianze clienti">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <SectionLabel text="Testimonianze" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] max-w-2xl">
                <TextReveal delay={0.2}>La fiducia dei clienti.</TextReveal>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base text-muted leading-[1.7] max-w-lg mt-6">
                Il miglior riscontro del lavoro svolto è la soddisfazione
                di chi si è affidato alla mia assistenza nei momenti più difficili.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Griglia testimonianze */}
        <section className="pb-24 md:pb-32" aria-label="Tutte le testimonianze">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonianze.map((t, index) => (
                <FadeIn key={t.id} delay={index * 0.1}>
                  <div className="bg-surface border border-border rounded-lg p-8 md:p-10 flex flex-col gap-6">
                    <div className="text-accent text-4xl font-heading leading-none opacity-20 select-none" aria-hidden="true">
                      &ldquo;
                    </div>
                    <blockquote className="font-heading text-lg md:text-xl italic text-text leading-[1.6] flex-1">
                      {t.testo}
                    </blockquote>
                    <div>
                      <div className="w-6 h-px bg-accent opacity-40 mb-3" />
                      <p className="text-sm text-muted">
                        {t.nome}
                        {t.citta && <span className="text-faint"> · {t.citta}</span>}
                      </p>
                      {t.servizio && (
                        <p className="text-xs text-faint mt-1 uppercase tracking-[0.1em]">
                          {t.servizio}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-24 md:py-32 bg-surface" aria-label="Contattami">
          <div className="mx-auto max-w-6xl px-5 md:px-12 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-6">
                <TextReveal>Inizia anche tu il tuo percorso.</TextReveal>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base text-muted leading-[1.7] mb-10 max-w-md mx-auto">
                Contattami per una prima consulenza. Valutiamo insieme
                la tua situazione senza impegno.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <CTAButton text="Contattami" href="/contatti" />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
