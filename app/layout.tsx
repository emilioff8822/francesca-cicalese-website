import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

/*
  next/font scarica i font a build-time e li serve localmente.
  .variable inietta una CSS custom property (--font-cormorant, --font-inter)
  sull'elemento <html>, poi usata da Tailwind in globals.css @theme.
*/
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

/*
  In Next.js il SEO si gestisce con export const metadata — niente <head> manuale.
  Il template "%s | ..." genera titoli come "Chi Sono | Avv. Francesca Cicalese"
  su ogni pagina che definisce il proprio titolo.
*/
export const metadata: Metadata = {
  title: {
    default: "Avv. Francesca Cicalese | Studio Legale Roma",
    template: "%s | Avv. Francesca Cicalese",
  },
  description:
    "Studio legale a Roma. Assistenza in diritto civile, diritto di famiglia, diritto del lavoro e consulenza contrattuale.",
  metadataBase: new URL("https://francescacicalese.it"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Avv. Francesca Cicalese",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
