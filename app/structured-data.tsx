const legalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.francescacicalese.it/#organization",
  name: "Studio Legale Avv. Francesca Cicalese",
  alternateName: "Avv. Francesca Cicalese",
  description:
    "Studio legale a Roma specializzato in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Assistenza legale personalizzata in zona Prati.",
  url: "https://www.francescacicalese.it",
  telephone: "+393491635839",
  email: "francescacicalese1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Sabotino 46",
    addressLocality: "Roma",
    addressRegion: "RM",
    postalCode: "00195",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9109,
    longitude: 12.456,
  },
  areaServed: [
    { "@type": "City", name: "Roma" },
    { "@type": "AdministrativeArea", name: "Provincia di Roma" },
  ],
  serviceType: ["Diritto Penale", "Diritto di Famiglia", "Diritto Civile", "Diritto del Lavoro"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Legali",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Difesa Penale",
          description: "Assistenza e difesa in procedimenti penali, udienze e indagini preliminari.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diritto di Famiglia",
          description: "Separazioni, divorzi, affidamento minori, tutela dei diritti familiari e successioni.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diritto Civile",
          description: "Risarcimento danni, controversie contrattuali, responsabilità civile e recupero crediti.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diritto del Lavoro",
          description: "Licenziamenti, mobbing, contratti di lavoro e vertenze giuslavoristiche.",
        },
      },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Contanti, Bonifico Bancario",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
}

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.francescacicalese.it/#person",
  name: "Francesca Cicalese",
  givenName: "Francesca",
  familyName: "Cicalese",
  honorificPrefix: "Avv.",
  jobTitle: "Avvocato",
  description:
    "Avvocato penalista e civilista a Roma. Iscritta all'Ordine degli Avvocati di Roma. Specializzata in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro.",
  url: "https://www.francescacicalese.it/chi-sono",
  telephone: "+393491635839",
  email: "francescacicalese1@gmail.com",
  worksFor: {
    "@id": "https://www.francescacicalese.it/#organization",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Università degli Studi di Roma",
  },
  knowsAbout: [
    "Diritto Penale",
    "Diritto di Famiglia",
    "Diritto Civile",
    "Diritto del Lavoro",
    "Procedura Penale",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Sabotino 46",
    addressLocality: "Roma",
    addressRegion: "RM",
    postalCode: "00195",
    addressCountry: "IT",
  },
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Studio Legale Avv. Francesca Cicalese",
  url: "https://www.francescacicalese.it",
  description: "Sito ufficiale dello Studio Legale dell'Avv. Francesca Cicalese a Roma.",
  inLanguage: "it-IT",
  publisher: {
    "@id": "https://www.francescacicalese.it/#organization",
  },
}

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
