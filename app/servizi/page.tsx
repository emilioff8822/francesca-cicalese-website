import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import { servizi } from "@/data/servizi"

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Aree di pratica dello Studio Legale Cicalese a Roma: diritto penale, diritto di famiglia e minori, diritto civile. Assistenza legale professionale e personalizzata.",
}

export default function Servizi() {
  return (
    <PageTransition>
      <main className="pt-16">

        {/* Hero */}
        <section className="py-24 md:py-32" aria-label="Aree di pratica">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <SectionLabel text="Aree di pratica" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] max-w-2xl">
                <TextReveal delay={0.2}>Assistenza legale su misura.</TextReveal>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base text-muted leading-[1.7] max-w-lg mt-6">
                Ogni caso è unico. Offro consulenza specializzata nelle aree in cui
                l&apos;esperienza professionale è più profonda e consolidata.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* Servizi — alternati sinistra/destra */}
        {servizi.map((servizio, index) => (
          <div key={servizio.id}>
            <section
              className="py-24 md:py-32"
              aria-label={servizio.titolo}
              id={servizio.id}
            >
              <div className="mx-auto max-w-6xl px-5 md:px-12">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 md:gap-20 items-start`}
                >

                  {/* Numero decorativo + titolo */}
                  <div className="w-full md:w-5/12 shrink-0">
                    <FadeIn>
                      <span className="font-heading text-[120px] md:text-[160px] leading-none text-surface select-none font-medium">
                        0{index + 1}
                      </span>
                    </FadeIn>
                  </div>

                  {/* Contenuto */}
                  <div className="w-full md:w-7/12">
                    <SectionLabel text={servizio.titolo} />

                    <FadeIn delay={0.1}>
                      <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-6">
                        <TextReveal delay={0.2}>{servizio.titolo}</TextReveal>
                      </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                      <p className="text-base text-muted leading-[1.8] mb-8">
                        {servizio.descrizioneEstesa}
                      </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                      <ul className="space-y-3 mb-10">
                        {servizio.punti.map((punto) => (
                          <li key={punto} className="flex items-start gap-3">
                            <span className="mt-2 block w-4 h-px bg-accent shrink-0" />
                            <span className="text-sm text-muted leading-[1.7]">{punto}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                      <CTAButton text="Richiedi consulenza" href="/contatti" />
                    </FadeIn>
                  </div>

                </div>
              </div>
            </section>
            {index < servizi.length - 1 && <Divider />}
          </div>
        ))}

        {/* CTA finale */}
        <section className="py-24 md:py-32 bg-surface" aria-label="Contattami">
          <div className="mx-auto max-w-6xl px-5 md:px-12 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-6">
                <TextReveal>Non hai trovato quello che cerchi?</TextReveal>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base text-muted leading-[1.7] mb-10 max-w-md mx-auto">
                Contattami direttamente — valutiamo insieme la tua situazione e
                troviamo il percorso migliore.
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
