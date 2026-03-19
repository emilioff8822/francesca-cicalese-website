import type { Metadata } from "next"
import { Scale, Users, FileText, Briefcase } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import { servizi } from "@/data/servizi"

export const metadata: Metadata = {
  title: "Aree di Pratica | Diritto Penale, Famiglia, Civile e Lavoro — Avv. Cicalese Roma",
  description:
    "Assistenza legale completa: diritto penale (difesa in procedimenti penali), diritto di famiglia (separazioni, divorzi, affidamento), diritto civile (risarcimento danni), diritto del lavoro (licenziamenti, mobbing). Studio legale Roma Prati.",
  alternates: { canonical: "https://www.francescacicalese.it/servizi" },
  openGraph: {
    title: "Servizi | Diritto Penale, Famiglia, Civile e Lavoro — Avv. Cicalese Roma",
    description: "Diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Studio Legale Cicalese, Roma Prati.",
    url: "https://www.francescacicalese.it/servizi",
  },
}

const watermarks: Record<string, React.ReactNode> = {
  "diritto-penale": <Scale size={200} strokeWidth={0.8} />,
  "diritto-famiglia": <Users size={200} strokeWidth={0.8} />,
  "diritto-civile": <FileText size={200} strokeWidth={0.8} />,
  "diritto-lavoro": <Briefcase size={200} strokeWidth={0.8} />,
}

const mobileIcons: Record<string, React.ReactNode> = {
  "diritto-penale": <Scale size={18} strokeWidth={1.5} />,
  "diritto-famiglia": <Users size={18} strokeWidth={1.5} />,
  "diritto-civile": <FileText size={18} strokeWidth={1.5} />,
  "diritto-lavoro": <Briefcase size={18} strokeWidth={1.5} />,
}

export default function Servizi() {
  return (
    <PageTransition>
      <main className="pt-16">

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

        {servizi.map((servizio, index) => (
          <div key={servizio.id}>
            <section
              className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-surface" : ""}`}
              aria-label={servizio.titolo}
              id={servizio.id}
            >
              <div className="mx-auto max-w-6xl px-5 md:px-12">
                {/* Mobile: card con accent laterale */}
                <div className="md:hidden">
                  <SectionLabel text={servizio.titolo} />

                  <FadeIn delay={0.1}>
                    <h2 className="font-heading text-3xl font-medium text-text leading-[1.1] mb-6 flex items-center gap-3">
                      <span className="text-accent/40">{mobileIcons[servizio.id]}</span>
                      {servizio.titolo}
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
                    <CTAButton text="Richiedi consulenza" href={`/contatti?area=${servizio.id.replace("diritto-", "")}`} solid />
                  </FadeIn>
                </div>

                {/* Desktop: layout a due colonne con watermark */}
                <div
                  className={`hidden md:flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } gap-20 items-center`}
                >
                  <div className="w-5/12 shrink-0 flex items-center justify-center">
                    <FadeIn>
                      <div
                        className="text-accent select-none"
                        style={{ width: 200, height: 200, opacity: 0.04 }}
                        aria-hidden="true"
                      >
                        {watermarks[servizio.id]}
                      </div>
                    </FadeIn>
                  </div>

                  <div className="w-7/12">
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
                      <CTAButton text="Richiedi consulenza" href={`/contatti?area=${servizio.id.replace("diritto-", "")}`} solid />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>
            {index < servizi.length - 1 && <Divider />}
          </div>
        ))}

        <section
          className="py-24 md:py-32 bg-[#E8EDF5]"
          aria-label="Contattami"
        >
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
              <CTAButton text="Contattami" href="/contatti?area=altro" solid />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
