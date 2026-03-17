import Hero from "@/components/sections/Hero"
import ChiSono from "@/components/sections/ChiSono"
import Servizi from "@/components/sections/Servizi"
import Testimonianze from "@/components/sections/Testimonianze"
import CTASection from "@/components/sections/CTASection"
import Divider from "@/components/ui/Divider"
import PageTransition from "@/components/PageTransition"

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
