import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Privacy Policy | Studio Legale Avv. Francesca Cicalese",
  description:
    "Informativa sulla privacy ai sensi del GDPR (Reg. UE 2016/679). Trattamento dei dati personali dello Studio Legale Cicalese, Roma.",
  alternates: { canonical: "https://www.francescacicalese.it/privacy" },
  robots: { index: false, follow: true },
}

export default function Privacy() {
  return (
    <PageTransition>
      <main className="pt-16">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <SectionLabel text="Privacy Policy" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-12">
                Informativa sulla Privacy
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose prose-sm max-w-none text-muted leading-[1.8] space-y-6">
                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">1. Titolare del trattamento</h2>
                <p>
                  Il titolare del trattamento dei dati personali è l&apos;Avv. Francesca Cicalese,
                  con studio in Via Sabotino 46, 00195 Roma (RM).
                  Email: francescacicalese1@gmail.com — Tel: +39 349 163 5839.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">2. Dati raccolti</h2>
                <p>
                  Attraverso il modulo di contatto presente sul sito vengono raccolti: nome, indirizzo email,
                  area di interesse e testo del messaggio. Questi dati sono forniti volontariamente dall&apos;utente
                  e utilizzati esclusivamente per rispondere alla richiesta di contatto.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">3. Finalità del trattamento</h2>
                <p>
                  I dati personali sono trattati per le seguenti finalità: rispondere alle richieste inviate
                  tramite il modulo di contatto; gestire la corrispondenza professionale; adempiere a obblighi
                  di legge, ove applicabili.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">4. Base giuridica</h2>
                <p>
                  Il trattamento si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a del GDPR),
                  espresso mediante l&apos;invio volontario del modulo di contatto, e sull&apos;interesse legittimo del
                  titolare a rispondere alle richieste ricevute (art. 6, par. 1, lett. f del GDPR).
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">5. Conservazione dei dati</h2>
                <p>
                  I dati personali sono conservati per il tempo strettamente necessario a soddisfare le finalità
                  per le quali sono stati raccolti e comunque non oltre 24 mesi dall&apos;ultima comunicazione,
                  salvo obblighi di legge.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">6. Diritti dell&apos;interessato</h2>
                <p>
                  Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha diritto di: accedere ai propri dati personali;
                  richiederne la rettifica o la cancellazione; limitare il trattamento; opporsi al trattamento;
                  richiedere la portabilità dei dati. Per esercitare tali diritti è possibile scrivere a
                  francescacicalese1@gmail.com.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">7. Servizi di terze parti</h2>
                <p>
                  Il sito utilizza il servizio Resend per l&apos;invio delle email dal modulo di contatto.
                  I dati sono trasmessi ai server di Resend esclusivamente per l&apos;invio del messaggio.
                  Il sito è ospitato su Vercel Inc. Per ulteriori informazioni consultare le rispettive
                  privacy policy.
                </p>

                <p className="text-xs text-faint mt-12">
                  Ultimo aggiornamento: Marzo 2026
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
