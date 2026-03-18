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
        src: "/icon",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
