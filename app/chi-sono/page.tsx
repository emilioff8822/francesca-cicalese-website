import type { Metadata } from "next"
import Image from "next/image"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"

export const metadata: Metadata = {
  title: "Chi Sono | Avv. Francesca Cicalese — Avvocato Roma Prati",
  description:
    "Scopri il percorso professionale dell'Avv. Francesca Cicalese. Laureata in giurisprudenza, iscritta all'Ordine degli Avvocati di Roma. Specializzata in diritto penale, famiglia, civile e lavoro.",
  alternates: { canonical: "https://www.francescacicalese.it/chi-sono" },
  openGraph: {
    title: "Chi Sono | Avv. Francesca Cicalese — Avvocato Roma",
    description: "Avvocato a Roma con esperienza in diritto penale, diritto di famiglia, civile e lavoro. Iscritta all'Ordine degli Avvocati di Roma.",
    url: "https://www.francescacicalese.it/chi-sono",
  },
}

const valori = [
  {
    titolo: "Competenza",
    testo:
      "Una preparazione tecnica rigorosa, aggiornata costantemente, per garantire la migliore difesa in ogni procedimento.",
  },
  {
    titolo: "Dedizione",
    testo:
      "Ogni caso riceve la massima attenzione. Nessun fascicolo viene trattato come routine: ogni storia merita cura.",
  },
  {
    titolo: "Riservatezza",
    testo:
      "Il rapporto con il cliente è fondato sulla fiducia. La discrezione è un dovere professionale e un valore personale.",
  },
]

export default function ChiSono() {
  return (
    <PageTransition>
      <main className="pt-16">

        {/* Hero */}
        <section className="py-24 md:py-32" aria-label="Presentazione">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

              {/* Foto */}
              <FadeIn className="w-full md:w-5/12 shrink-0">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border border-accent opacity-20 rounded-lg" />
                  <Image
                    src="/images/francesca-toga.png"
                    alt="Avv. Francesca Cicalese in toga alla Corte di Cassazione, Roma"
                    width={960}
                    height={1280}
                    quality={90}
                    className="relative rounded-lg object-cover aspect-[3/4] w-full"
                    priority
                  />
                </div>
              </FadeIn>

              {/* Testo */}
              <div className="w-full md:w-7/12">
                <SectionLabel text="Chi Sono" />

                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] mb-8">
                    <TextReveal delay={0.2}>Avv. Francesca Cicalese</TextReveal>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-base text-muted leading-[1.8] mb-6">
                    Sono un avvocato laureata in Giurisprudenza presso l&apos;Università degli Studi
                    di Roma Tre, iscritta all&apos;Ordine degli Avvocati di Roma. Con oltre otto
                    anni di esperienza nel foro capitolino, ho maturato una solida preparazione
                    in diritto penale, diritto di famiglia e diritto civile.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="text-base text-muted leading-[1.8] mb-6">
                    La mia formazione si è arricchita attraverso diverse esperienze presso vari
                    studi legali di Roma, dove ho avuto modo di seguire procedimenti complessi
                    e di costruire un metodo di lavoro rigoroso e orientato al risultato.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="text-base text-muted leading-[1.8] mb-10">
                    Il mio studio è situato nel quartiere Prati, a pochi passi dal Palazzo di
                    Giustizia. Offro assistenza legale personalizzata, privilegiando sempre
                    il dialogo e la trasparenza con ogni cliente.
                  </p>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <CTAButton text="Contattami" href="/contatti" />
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="py-24 md:py-32 bg-surface" aria-label="Valori professionali">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <SectionLabel text="I miei valori" />

            <FadeIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-16">
                <TextReveal>Il modo in cui lavoro.</TextReveal>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {valori.map((valore, index) => (
                <FadeIn key={valore.titolo} delay={index * 0.1}>
                  <div>
                    <div className="w-6 h-px bg-accent mb-6" />
                    <h3 className="font-heading text-xl font-medium text-text mb-4">
                      {valore.titolo}
                    </h3>
                    <p className="text-sm text-muted leading-[1.8]">
                      {valore.testo}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-24 md:py-32" aria-label="Contattami">
          <div className="mx-auto max-w-6xl px-5 md:px-12 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-6">
                <TextReveal>Parliamo del tuo caso.</TextReveal>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base text-muted leading-[1.7] mb-10 max-w-md mx-auto">
                Sono disponibile per una prima consulenza. Contattami per fissare un appuntamento.
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
