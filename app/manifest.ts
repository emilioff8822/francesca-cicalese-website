import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Legale Avv. Francesca Cicalese",
    short_name: "Avv. Cicalese",
    description: "Avvocato penalista e civilista a Roma, zona Prati",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1e3050",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
