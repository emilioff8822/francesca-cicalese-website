"use client"

import { Scale, Users, FileText, Briefcase } from "lucide-react"
import { servizi } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import SpotlightCard from "@/components/ui/SpotlightCard"

const icons: Record<string, React.ReactNode> = {
  "diritto-penale": <Scale strokeWidth={1.4} />,
  "diritto-famiglia": <Users strokeWidth={1.4} />,
  "diritto-civile": <FileText strokeWidth={1.4} />,
  "diritto-lavoro": <Briefcase strokeWidth={1.4} />,
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

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white"
                    style={{
                      background: "linear-gradient(135deg, #1e3050, #263d5e)",
                      boxShadow: "0 4px 16px rgba(30, 48, 80, 0.25), 0 1px 3px rgba(30, 48, 80, 0.15)",
                    }}
                  >
                    <div className="w-6 h-6">
                      {icons[servizio.id]}
                    </div>
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
