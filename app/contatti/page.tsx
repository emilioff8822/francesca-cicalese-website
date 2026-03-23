import type { Metadata } from "next"
import { Suspense } from "react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import ContactForm from "@/components/ui/ContactForm"
import Link from "next/link"
import { Mail } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

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
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.francescacicalese.it" },
        { name: "Contatti", url: "https://www.francescacicalese.it/contatti" },
      ]} />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-surface" aria-label="Intestazione contatti">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <div className="flex flex-row items-center justify-between gap-8">
              <div className="flex-1">
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
              <FadeIn delay={0.4} className="shrink-0">
                <div
                  className="w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #1e3050, #263d5e)",
                    boxShadow: "0 6px 24px rgba(30, 48, 80, 0.25), 0 2px 6px rgba(30, 48, 80, 0.12)",
                  }}
                >
                  <Mail className="w-7 h-7 md:w-10 md:h-10" strokeWidth={1.2} />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24" aria-label="Modulo di contatto">
          <div className="mx-auto max-w-2xl px-5 md:px-12">
            <FadeIn delay={0.2}>
              <div className="bg-surface/50 rounded-lg p-6 md:p-10">
                <Suspense><ContactForm /></Suspense>
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

            <FadeIn delay={0.4}>
              <p className="text-center text-sm text-muted mt-6">
                Non sai quale area riguarda il tuo caso?{" "}
                <Link href="/servizi" className="text-accent hover:underline">Scopri le aree di pratica</Link>
                {" "}o{" "}
                <Link href="/recensioni" className="text-accent hover:underline">leggi le testimonianze dei clienti</Link>.
              </p>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
