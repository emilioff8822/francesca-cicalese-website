import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SmoothScroll from "@/components/providers/SmoothScroll"
import StructuredData from "@/app/structured-data"

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.francescacicalese.it"),
  title: {
    default: "Avv. Francesca Cicalese | Avvocato Penalista Roma — Studio Legale Prati",
    template: "%s | Avv. Francesca Cicalese",
  },
  description:
    "Studio Legale Avv. Francesca Cicalese a Roma, zona Prati. Assistenza in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Via Sabotino 46, Roma.",
  keywords: [
    "avvocato Roma",
    "avvocato penalista Roma",
    "studio legale Roma Prati",
    "avvocato diritto penale Roma",
    "avvocato divorzista Roma",
    "avvocato separazione Roma",
    "avvocato Francesca Cicalese",
    "studio legale Via Sabotino Roma",
    "avvocato civilista Roma",
    "avvocato diritto lavoro Roma",
    "consulenza legale Roma",
  ],
  authors: [{ name: "Avv. Francesca Cicalese" }],
  verification: {
    google: "ZLj_N-8CS_qMkXy",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.francescacicalese.it",
    siteName: "Studio Legale Avv. Francesca Cicalese",
    title: "Avv. Francesca Cicalese | Studio Legale Roma",
    description:
      "Assistenza legale in diritto penale, famiglia, civile e lavoro. Studio in zona Prati, Via Sabotino 46, Roma.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avv. Francesca Cicalese | Studio Legale Roma",
    description: "Avvocato penalista e civilista a Roma, zona Prati.",
  },
  alternates: {
    canonical: "https://www.francescacicalese.it",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" dir="ltr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <StructuredData />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
