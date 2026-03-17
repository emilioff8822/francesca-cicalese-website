import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import ContactForm from "@/components/ui/ContactForm"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Contatti | Studio Legale Avv. Francesca Cicalese — Via Sabotino 46, Roma",
  description:
    "Contatta lo Studio Legale dell'Avv. Francesca Cicalese. Via Sabotino 46, Roma zona Prati. Telefono: +39 349 163 5839. Scrivi un messaggio per richiedere una consulenza legale.",
  alternates: { canonical: "https://www.francescacicalese.it/contatti" },
  openGraph: {
    title: "Contatti | Studio Legale Avv. Francesca Cicalese — Roma",
    description: "Via Sabotino 46, 00195 Roma zona Prati. Telefono: +39 349 163 5839. Richiedi una consulenza.",
    url: "https://www.francescacicalese.it/contatti",
  },
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
        <section className="py-24 md:py-32" aria-label="Contatti e modulo di contatto">
          <div className="mx-auto max-w-6xl px-5 md:px-12">

            {/* Intestazione */}
            <SectionLabel text="Contatti" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] mb-16 max-w-xl">
                <TextReveal delay={0.2}>Scrivimi.</TextReveal>
              </h1>
            </FadeIn>

            {/* Grid: form (sinistra larga) + info (destra stretta) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20 items-start">

              {/* Form */}
              <FadeIn delay={0.2}>
                <ContactForm />
              </FadeIn>

              {/* Info */}
              <FadeIn delay={0.3}>
                <div className="space-y-10">

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-4">
                      Telefono
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="link-hover font-sans text-base text-text hover:text-muted transition-colors duration-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-4">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="link-hover font-sans text-sm text-text hover:text-muted transition-colors duration-300 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-4">
                      Studio
                    </p>
                    <p className="text-sm text-muted leading-[1.8]">
                      {siteConfig.address}<br />
                      {siteConfig.cap} {siteConfig.city}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-faint mb-4">
                      Orari
                    </p>
                    <div className="space-y-3">
                      {orari.map((o) => (
                        <div
                          key={o.giorno}
                          className="flex justify-between items-baseline border-b border-border pb-3"
                        >
                          <span className="text-xs text-muted">{o.giorno}</span>
                          <span className="text-xs text-text">{o.ore}</span>
                        </div>
                      ))}
                    </div>
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
