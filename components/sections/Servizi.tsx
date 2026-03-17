import { servizi } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import SpotlightCard from "@/components/ui/SpotlightCard"

export default function Servizi() {
  return (
    <section className="py-24 md:py-32" aria-label="Aree di pratica" id="servizi">
      <div className="mx-auto max-w-6xl px-5 md:px-12">
        <SectionLabel text="Aree di pratica" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {servizi.map((servizio, index) => (
            <FadeIn key={servizio.id} delay={index * 0.1}>
              <SpotlightCard className="bg-surface border border-border rounded-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-hover hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <h3 className="text-lg font-medium text-text mb-3">
                    {servizio.titolo}
                  </h3>

                  <div className="w-6 h-px bg-accent opacity-40 mb-4" />

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
