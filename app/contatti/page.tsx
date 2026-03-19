import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import ContactForm from "@/components/ui/ContactForm"

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

export default function Contatti() {
  return (
    <PageTransition>
      <main className="pt-16">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-surface" aria-label="Intestazione contatti">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <SectionLabel text="Contatti" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] max-w-xl">
                <TextReveal delay={0.2}>Parliamo del tuo caso.</TextReveal>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base text-muted leading-[1.7] max-w-lg mt-6">
                Contattami per una prima consulenza. Valutiamo insieme
                la tua situazione senza impegno.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24" aria-label="Modulo di contatto">
          <div className="mx-auto max-w-2xl px-5 md:px-12">
            <FadeIn delay={0.2}>
              <div className="bg-surface/50 rounded-lg p-6 md:p-10">
                <ContactForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-center text-xs text-faint mt-8">
                Rispondo generalmente entro 24 ore nei giorni lavorativi
                <span className="mx-2">·</span>
                Lun — Ven 9:00 — 18:00
                <span className="mx-2">·</span>
                Sabato su appuntamento
              </p>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
