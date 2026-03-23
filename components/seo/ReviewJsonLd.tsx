import { testimonianze } from "@/data/testimonianze"

export function ReviewJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.francescacicalese.it/#organization",
    name: "Studio Legale Avv. Francesca Cicalese",
    review: testimonianze.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.nome },
      reviewBody: t.testo,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
