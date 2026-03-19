import type { Metadata } from "next"
import Image from "next/image"
import { GraduationCap, Clock, ShieldCheck } from "lucide-react"
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
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
  },
  {
    titolo: "Dedizione",
    testo:
      "Ogni caso riceve la massima attenzione. Nessun fascicolo viene trattato come routine: ogni storia merita cura.",
    icon: <Clock size={20} strokeWidth={1.5} />,
  },
  {
    titolo: "Riservatezza",
    testo:
      "Il rapporto con il cliente è fondato sulla fiducia. La discrezione è un dovere professionale e un valore personale.",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
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
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/20" />
                  <Image
                    src="/images/francesca-toga.png"
                    alt="Avv. Francesca Cicalese in toga alla Corte di Cassazione, Roma"
                    width={960}
                    height={1280}
                    quality={90}
                    className="relative object-cover aspect-[3/4] w-full"
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
                    e di costruire un metodo di lavoro rigoroso ed orientato al risultato.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="text-base text-muted leading-[1.8] mb-10">
                    Il mio studio è situato nel quartiere Prati, a pochi passi dal Palazzo di
                    Giustizia. Offro assistenza legale personalizzata, privilegiando sempre
                    il dialogo e la trasparenza con ogni cliente.
                  </p>
                </FadeIn>

                <FadeIn delay={0.5} className="flex justify-center md:justify-start">
                  <CTAButton text="Contattami" href="/contatti" solid />
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {valori.map((valore, index) => (
                <FadeIn key={valore.titolo} delay={index * 0.1}>
                  <div className="bg-white border border-border p-8 group transition-all duration-500 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(30,48,80,0.06)] active:border-accent/30 active:shadow-sm h-full text-center flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white"
                      style={{
                        background: "linear-gradient(135deg, #1e3050, #263d5e)",
                        boxShadow: "0 4px 16px rgba(30, 48, 80, 0.25), 0 1px 3px rgba(30, 48, 80, 0.15)",
                      }}
                    >
                      <div className="w-6 h-6">
                        {valore.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-medium text-text mb-3">
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
        <section
          className="py-24 md:py-32 bg-[#E8EDF5]"
          aria-label="Contattami"
        >
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
              <CTAButton text="Contattami" href="/contatti" solid />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
