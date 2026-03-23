import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Cookie Policy | Studio Legale Avv. Francesca Cicalese",
  description:
    "Informativa sull'utilizzo dei cookie sul sito dello Studio Legale Cicalese, Roma.",
  alternates: { canonical: "https://www.francescacicalese.it/cookie" },
  robots: { index: false, follow: true },
}

export default function Cookie() {
  return (
    <PageTransition>
      <main className="pt-16">
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <SectionLabel text="Cookie Policy" />
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-3xl md:text-4xl font-medium text-text leading-[1.1] mb-12">
                Informativa sui Cookie
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="prose prose-sm max-w-none text-muted leading-[1.8] space-y-6">
                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web memorizzano sul dispositivo dell&apos;utente
                  durante la navigazione. Vengono utilizzati per diverse finalità tecniche, di analisi e,
                  in alcuni casi, di profilazione.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">Cookie utilizzati da questo sito</h2>
                <p>
                  Questo sito utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento
                  della piattaforma. Non vengono utilizzati cookie di profilazione né cookie pubblicitari.
                </p>
                <p>
                  In particolare, il sito potrebbe utilizzare cookie tecnici relativi a:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gestione della sessione di navigazione</li>
                  <li>Funzionamento della piattaforma di hosting (Vercel)</li>
                </ul>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">Cookie di terze parti</h2>
                <p>
                  Il sito non integra servizi di terze parti che installano cookie di profilazione
                  (es. Google Analytics, Facebook Pixel). Non vengono raccolti dati di navigazione
                  per finalità di marketing o profilazione.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">Come gestire i cookie</h2>
                <p>
                  L&apos;utente può gestire le preferenze sui cookie direttamente dalle impostazioni del
                  proprio browser. La disabilitazione dei cookie tecnici potrebbe compromettere
                  alcune funzionalità del sito.
                </p>

                <h2 className="font-heading text-xl font-medium text-text mt-8 mb-3">Riferimenti normativi</h2>
                <p>
                  Per ulteriori informazioni sui cookie e sulla tutela della privacy online,
                  è possibile consultare il sito del Garante per la Protezione dei Dati Personali:
                  {" "}
                  <a
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    www.garanteprivacy.it
                  </a>
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
