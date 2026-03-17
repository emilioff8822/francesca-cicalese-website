import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Legale Avv. Francesca Cicalese",
    short_name: "Avv. Cicalese",
    description: "Studio Legale a Roma — Diritto Penale, Famiglia, Civile e Lavoro",
    start_url: "/",
    display: "standalone",
    background_color: "#08090D",
    theme_color: "#08090D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
