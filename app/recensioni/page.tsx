import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import RecensioniCarousel from "@/components/sections/RecensioniCarousel"
import { MessageSquareQuote } from "lucide-react"

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
            <div className="flex flex-row items-center justify-between gap-8">
              <div className="flex-1">
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
              <FadeIn delay={0.4} className="shrink-0">
                <div
                  className="w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #1e3050, #263d5e)",
                    boxShadow: "0 6px 24px rgba(30, 48, 80, 0.25), 0 2px 6px rgba(30, 48, 80, 0.12)",
                  }}
                >
                  <MessageSquareQuote className="w-7 h-7 md:w-10 md:h-10" strokeWidth={1.2} />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Carousel testimonianze */}
        <section className="pb-24 md:pb-32" aria-label="Tutte le testimonianze">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <FadeIn delay={0.1}>
              <RecensioniCarousel />
            </FadeIn>
          </div>
        </section>

        {/* CTA finale */}
        <section
          className="py-24 md:py-32 bg-[#E8EDF5]"
          aria-label="Contattami"
        >
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
              <CTAButton text="Contattami" href="/contatti" solid />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
