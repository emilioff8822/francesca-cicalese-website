import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Legale Cicalese a Roma. Telefono, email e indirizzo per richiedere una consulenza con l'Avv. Francesca Cicalese.",
}

const orari = [
  { giorno: "Lunedì — Venerdì", ore: "9:00 — 18:00" },
  { giorno: "Sabato", ore: "Su appuntamento" },
  { giorno: "Domenica", ore: "Chiuso" },
]

export default function Contatti() {
  return (
    <PageTransition>
      <main className="pt-16">

        <section className="py-24 md:py-32" aria-label="Informazioni di contatto">
          <div className="mx-auto max-w-6xl px-5 md:px-12">

            <SectionLabel text="Contatti" />

            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] mb-16 max-w-xl">
                <TextReveal delay={0.2}>Parliamo.</TextReveal>
              </h1>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

              {/* Info contatto */}
              <div className="space-y-10">

                <FadeIn delay={0.2}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-3">Telefono</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-heading text-2xl md:text-3xl text-text hover:text-muted transition-colors duration-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-3">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-heading text-xl md:text-2xl text-text hover:text-muted transition-colors duration-300 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-3">Studio</p>
                    <p className="text-base text-muted leading-[1.8]">
                      {siteConfig.address}<br />
                      {siteConfig.cap} {siteConfig.city}
                    </p>
                  </div>
                </FadeIn>

              </div>

              {/* Orari */}
              <FadeIn delay={0.35}>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-faint mb-6">Orari</p>
                  <div className="space-y-4">
                    {orari.map((o) => (
                      <div key={o.giorno} className="flex justify-between items-baseline border-b border-border pb-4">
                        <span className="text-sm text-muted">{o.giorno}</span>
                        <span className="text-sm text-text">{o.ore}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 bg-surface border border-border rounded-lg">
                    <p className="text-sm text-muted leading-[1.7]">
                      Per una prima consulenza scrivetemi una email o chiamate direttamente.
                      Rispondo entro 24 ore nei giorni lavorativi.
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
