import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import ChiSono from "@/components/sections/ChiSono"
import Servizi from "@/components/sections/Servizi"
import Testimonianze from "@/components/sections/Testimonianze"
import CTASection from "@/components/sections/CTASection"
import Divider from "@/components/ui/Divider"
import PageTransition from "@/components/providers/PageTransition"

export const metadata: Metadata = {
  title: "Avv. Francesca Cicalese | Avvocato Penalista Roma — Studio Legale Prati",
  description:
    "Studio Legale Avv. Francesca Cicalese a Roma, zona Prati. Assistenza in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Via Sabotino 46, Roma.",
  alternates: { canonical: "https://www.francescacicalese.it" },
  openGraph: {
    title: "Avv. Francesca Cicalese | Studio Legale Roma",
    description:
      "Assistenza legale in diritto penale, famiglia, civile e lavoro. Studio in zona Prati, Via Sabotino 46, Roma.",
    url: "https://www.francescacicalese.it",
  },
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Divider />
        <ChiSono />
        <Divider />
        <Servizi />
        <Divider />
        <Testimonianze />
        <CTASection />
      </main>
    </PageTransition>
  )
}
