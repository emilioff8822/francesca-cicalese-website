import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-bg overflow-hidden">

      {/* Bilancia decorativa — sfondo semitrasparente, elemento evocativo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/images/bilancia.png"
          alt=""
          width={500}
          height={500}
          className="opacity-[0.04] scale-150"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Linea verticale decorativa sinistra */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="h-24 w-px bg-border" />
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted rotate-90 my-6">Roma</span>
        <div className="h-24 w-px bg-border" />
      </div>

      {/* Contenuto centrale */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <FadeIn delay={0.1}>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-accent mb-6">
            Studio Legale
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="font-heading text-7xl md:text-9xl italic text-text leading-none">
            Francesca<br />
            <span className="not-italic font-light">Cicalese</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8 mx-auto w-12 h-px bg-accent opacity-60" />
          <p className="mt-8 font-sans text-sm text-muted tracking-wide max-w-md mx-auto">
            Avvocato · Diritto Civile · Famiglia · Lavoro · Contratti
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contatti"
              className="font-sans text-xs uppercase tracking-widest text-text border border-border px-8 py-3.5 transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Contattami
            </a>
            <a
              href="/servizi"
              className="font-sans text-xs uppercase tracking-widest text-muted hover:text-text transition-colors duration-300"
            >
              Scopri i servizi →
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Numero decorativo in basso — stile editoriale */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-border" />
          <span className="font-sans text-xs text-muted tracking-widest">Scorri</span>
        </div>
      </div>
    </main>
  )
}
