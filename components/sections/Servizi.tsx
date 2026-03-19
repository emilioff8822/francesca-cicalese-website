"use client"

import { servizi } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import SpotlightCard from "@/components/ui/SpotlightCard"

const icons: Record<string, React.ReactNode> = {
  "diritto-penale": (
    // Bilancia della giustizia
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <line x1="20" y1="6" x2="20" y2="34" />
      <line x1="10" y1="10" x2="30" y2="10" />
      <path d="M10 10 L6 18 Q10 22 14 18 Z" />
      <path d="M30 10 L26 18 Q30 22 34 18 Z" />
      <line x1="14" y1="34" x2="26" y2="34" />
    </svg>
  ),
  "diritto-famiglia": (
    // Famiglia stilizzata — casa con profilo umano
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="15" cy="14" r="4" />
      <path d="M7 32 C7 26 11 22 15 22 C19 22 23 26 23 32" />
      <circle cx="28" cy="16" r="3" />
      <path d="M22 32 C22 28 24.5 25 28 25 C31.5 25 34 28 34 32" />
    </svg>
  ),
  "diritto-civile": (
    // Contratto / documento con sigillo
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="10" y="6" width="20" height="26" rx="2" />
      <line x1="15" y1="13" x2="25" y2="13" />
      <line x1="15" y1="18" x2="25" y2="18" />
      <line x1="15" y1="23" x2="21" y2="23" />
      <circle cx="26" cy="28" r="4" />
      <line x1="23.8" y1="28" x2="28.2" y2="28" />
      <line x1="26" y1="25.8" x2="26" y2="30.2" />
    </svg>
  ),
  "diritto-lavoro": (
    // Valigetta professionale
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="6" y="16" width="28" height="18" rx="2" />
      <path d="M15 16 L15 12 Q15 10 17 10 L23 10 Q25 10 25 12 L25 16" />
      <line x1="6" y1="24" x2="34" y2="24" />
      <line x1="20" y1="20" x2="20" y2="28" />
    </svg>
  ),
}

export default function Servizi() {
  return (
    <section className="py-24 md:py-32" aria-label="Aree di pratica" id="servizi">
      <div className="mx-auto max-w-6xl px-5 md:px-12">
        <SectionLabel text="Aree di pratica" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servizi.map((servizio, index) => (
            <FadeIn key={servizio.id} delay={index * 0.1}>
              <SpotlightCard className={`border border-border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(30,48,80,0.08)] active:border-accent/30 active:shadow-sm h-full ${index % 2 === 0 ? "bg-white" : "bg-white md:bg-white max-md:bg-surface"}`}>
                <div className="p-6 md:p-8 lg:p-10 text-center flex flex-col items-center">
                  <div className="text-accent opacity-30 mb-5">
                    {icons[servizio.id]}
                  </div>

                  <h3 className="text-lg font-medium text-text mb-3">
                    {servizio.titolo}
                  </h3>

                  <div className="w-8 h-0.5 bg-accent opacity-40 mb-4" />

                  <p className="text-sm text-muted leading-relaxed">
                    {servizio.descrizione}
                  </p>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
