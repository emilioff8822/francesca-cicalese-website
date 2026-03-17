import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/*
  next/font scarica e ottimizza i font a build-time, senza richieste esterne a runtime.
  Ogni font espone `.variable`: una CSS class che inietta la variabile --font-* nell'HTML.
  Quelle variabili vengono poi usate da Tailwind (definite in globals.css @theme).
*/
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avv. Francesca Cicalese | Studio Legale Napoli",
    template: "%s | Avv. Francesca Cicalese",
  },
  description:
    "Studio legale a Napoli. Assistenza in diritto civile, diritto di famiglia, diritto del lavoro e consulenza contrattuale.",
  metadataBase: new URL("https://francescacicalese.it"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Avv. Francesca Cicalese",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
