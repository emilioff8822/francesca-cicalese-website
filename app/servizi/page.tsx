import type { Metadata } from "next"
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
  "diritto-penale": (
    <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="80" y1="20" x2="80" y2="140" />
      <line x1="36" y1="38" x2="124" y2="38" />
      <path d="M36 38 L16 80 Q36 100 56 80 Z" />
      <path d="M124 38 L104 80 Q124 100 144 80 Z" />
      <line x1="54" y1="140" x2="106" y2="140" />
    </svg>
  ),
  "diritto-famiglia": (
    <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="58" cy="52" r="18" />
      <path d="M22 140 C22 112 38 96 58 96 C78 96 94 112 94 140" />
      <circle cx="112" cy="60" r="13" />
      <path d="M86 140 C86 118 97 104 112 104 C127 104 138 118 138 140" />
    </svg>
  ),
  "diritto-civile": (
    <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="36" y="20" width="88" height="116" rx="4" />
      <line x1="56" y1="52" x2="104" y2="52" />
      <line x1="56" y1="72" x2="104" y2="72" />
      <line x1="56" y1="92" x2="84" y2="92" />
      <circle cx="104" cy="116" r="16" />
      <line x1="96" y1="116" x2="112" y2="116" />
      <line x1="104" y1="108" x2="104" y2="124" />
    </svg>
  ),
  "diritto-lavoro": (
    <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="20" y="64" width="120" height="76" rx="6" />
      <path d="M60 64 L60 44 Q60 36 68 36 L92 36 Q100 36 100 44 L100 64" />
      <line x1="20" y1="96" x2="140" y2="96" />
      <line x1="80" y1="80" x2="80" y2="112" />
    </svg>
  ),
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
                    <h2 className="font-heading text-3xl font-medium text-text leading-[1.1] mb-6">
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
                    <CTAButton text="Richiedi consulenza" href="/contatti" solid />
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
                      <CTAButton text="Richiedi consulenza" href="/contatti" solid />
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
              <CTAButton text="Contattami" href="/contatti" solid />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
