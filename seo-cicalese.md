# SEO COMPLETA — Sito Avv. Francesca Cicalese

> Documento con tutte le informazioni SEO implementate sul sito www.francescacicalese.it
> Scopo: fornire contesto completo a un esperto SEO per analisi e miglioramenti.

---

## 1. INFORMAZIONI GENERALI

| Campo | Valore |
|---|---|
| **Dominio** | `https://www.francescacicalese.it` |
| **Nome** | Avv. Francesca Cicalese |
| **Attività** | Studio Legale |
| **Specializzazioni** | Diritto Penale, Diritto di Famiglia, Diritto Civile, Diritto del Lavoro |
| **Indirizzo** | Via Sabotino 46, 00195 Roma (zona Prati) |
| **Telefono** | +39 349 163 5839 |
| **Email** | francescacicalese1@gmail.com |
| **Stack** | Next.js 16 (App Router) + TypeScript + Tailwind CSS |
| **Hosting** | Vercel |
| **Lingua sito** | Italiano (`<html lang="it">`) |

---

## 2. STRUTTURA PAGINE E URL

Il sito ha 5 pagine:

| Pagina | URL | Priorità sitemap |
|---|---|---|
| Homepage | `/` | 1.0 |
| Servizi (Aree di Pratica) | `/servizi` | 0.9 |
| Chi Sono | `/chi-sono` | 0.8 |
| Contatti | `/contatti` | 0.8 |
| Recensioni | `/recensioni` | 0.7 |

Non esistono pagine Privacy e Cookie (link presenti nel footer ma pagine non ancora create).

---

## 3. METADATA PER PAGINA

### 3.1 Homepage (`/`)

```
title: "Avv. Francesca Cicalese | Avvocato Penalista Roma — Studio Legale Prati"
description: "Studio Legale Avv. Francesca Cicalese a Roma, zona Prati. Assistenza in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Via Sabotino 46, Roma."
canonical: "https://www.francescacicalese.it"
og:title: "Avv. Francesca Cicalese | Studio Legale Roma"
og:description: "Assistenza legale in diritto penale, famiglia, civile e lavoro. Studio in zona Prati, Via Sabotino 46, Roma."
og:url: "https://www.francescacicalese.it"
```

**Contenuto H1**: "Francesca Cicalese"
**Sottotitolo**: "Assistenza legale in diritto penale, diritto di famiglia e diritto civile."

### 3.2 Servizi (`/servizi`)

```
title: "Aree di Pratica | Diritto Penale, Famiglia, Civile e Lavoro — Avv. Cicalese Roma"
description: "Assistenza legale completa: diritto penale (difesa in procedimenti penali), diritto di famiglia (separazioni, divorzi, affidamento), diritto civile (risarcimento danni), diritto del lavoro (licenziamenti, mobbing). Studio legale Roma Prati."
canonical: "https://www.francescacicalese.it/servizi"
og:title: "Servizi | Diritto Penale, Famiglia, Civile e Lavoro — Avv. Cicalese Roma"
og:description: "Diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Studio Legale Cicalese, Roma Prati."
og:url: "https://www.francescacicalese.it/servizi"
```

**H1**: "Assistenza legale su misura."
**H2 per ogni servizio**:
- "Diritto Penale"
- "Famiglia e Minori"
- "Diritto Civile"
- "Diritto del Lavoro"

Ogni servizio ha:
- Un paragrafo descrittivo lungo (~2 frasi)
- Una lista di 5 punti specifici (es. "Difesa in fase di indagini preliminari", "Licenziamento illegittimo e reintegro")
- Un ID anchor (`#diritto-penale`, `#diritto-famiglia`, `#diritto-civile`, `#diritto-lavoro`)

### 3.3 Chi Sono (`/chi-sono`)

```
title: "Chi Sono | Avv. Francesca Cicalese — Avvocato Roma Prati"
description: "Scopri il percorso professionale dell'Avv. Francesca Cicalese. Laureata in giurisprudenza, iscritta all'Ordine degli Avvocati di Roma. Specializzata in diritto penale, famiglia, civile e lavoro."
canonical: "https://www.francescacicalese.it/chi-sono"
og:title: "Chi Sono | Avv. Francesca Cicalese — Avvocato Roma"
og:description: "Avvocato a Roma con esperienza in diritto penale, diritto di famiglia, civile e lavoro. Iscritta all'Ordine degli Avvocati di Roma."
og:url: "https://www.francescacicalese.it/chi-sono"
```

**H1**: "Avv. Francesca Cicalese"
**Contenuto bio** (3 paragrafi):
1. "Sono un avvocato laureata in Giurisprudenza presso l'Università degli Studi di Roma Tre, iscritta all'Ordine degli Avvocati di Roma. Con oltre otto anni di esperienza nel foro capitolino, ho maturato una solida preparazione in diritto penale, diritto di famiglia e diritto civile."
2. "La mia formazione si è arricchita attraverso diverse esperienze presso vari studi legali di Roma, dove ho avuto modo di seguire procedimenti complessi e di costruire un metodo di lavoro rigoroso ed orientato al risultato."
3. "Il mio studio è situato nel quartiere Prati, a pochi passi dal Palazzo di Giustizia. Offro assistenza legale personalizzata, privilegiando sempre il dialogo e la trasparenza con ogni cliente."

**H2**: "Il modo in cui lavoro."
3 card valori: Competenza, Dedizione, Riservatezza (con testi descrittivi)

### 3.4 Contatti (`/contatti`)

```
title: "Contatti | Studio Legale Avv. Francesca Cicalese — Via Sabotino 46, Roma"
description: "Contatta lo Studio Legale dell'Avv. Francesca Cicalese. Via Sabotino 46, Roma zona Prati. Telefono: +39 349 163 5839. Scrivi un messaggio per richiedere una consulenza legale."
canonical: "https://www.francescacicalese.it/contatti"
og:title: "Contatti | Studio Legale Avv. Francesca Cicalese — Roma"
og:description: "Via Sabotino 46, 00195 Roma zona Prati. Telefono: +39 349 163 5839. Richiedi una consulenza."
og:url: "https://www.francescacicalese.it/contatti"
```

**H1**: "Parliamo del tuo caso."
**Form**: Nome, Email, Area di interesse (dropdown: Penale/Famiglia/Civile/Lavoro/Altro), Messaggio

### 3.5 Recensioni (`/recensioni`)

```
title: "Recensioni Clienti | Avv. Francesca Cicalese — Studio Legale Roma"
description: "Leggi le testimonianze dei clienti dell'Avv. Francesca Cicalese, avvocato a Roma zona Prati. Opinioni e recensioni sullo studio legale per diritto penale, famiglia, civile e lavoro."
canonical: "https://www.francescacicalese.it/recensioni"
og:title: "Recensioni | Avv. Francesca Cicalese — Studio Legale Roma"
og:description: "Le testimonianze dei clienti dello Studio Legale Cicalese, Roma Prati."
og:url: "https://www.francescacicalese.it/recensioni"
```

**H1**: "La fiducia dei clienti."
**Contenuto**: 8 testimonianze in carousel con nome, città e tipo di servizio

---

## 4. METADATA GLOBALE (layout.tsx)

Definita nel root layout, ereditata da tutte le pagine:

```typescript
metadataBase: new URL("https://www.francescacicalese.it")

title: {
  default: "Avv. Francesca Cicalese | Avvocato Penalista Roma — Studio Legale Prati",
  template: "%s | Avv. Francesca Cicalese"
}

description: "Studio Legale Avv. Francesca Cicalese a Roma, zona Prati. Assistenza in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Via Sabotino 46, Roma."

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
  "consulenza legale Roma"
]

authors: [{ name: "Avv. Francesca Cicalese" }]

verification: {
  google: "ZLj_N-8CS_qMkXyHP0FLwJkd_OGkfG_l77rHH98gO0s"
}

openGraph: {
  type: "website",
  locale: "it_IT",
  url: "https://www.francescacicalese.it",
  siteName: "Studio Legale Avv. Francesca Cicalese"
}

twitter: {
  card: "summary_large_image"
}

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
}
```

---

## 5. STRUCTURED DATA (JSON-LD)

Tre blocchi JSON-LD iniettati in ogni pagina tramite `<script type="application/ld+json">`:

### 5.1 LegalService

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.francescacicalese.it/#organization",
  "name": "Studio Legale Avv. Francesca Cicalese",
  "alternateName": "Avv. Francesca Cicalese",
  "description": "Studio legale a Roma specializzato in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro. Assistenza legale personalizzata in zona Prati.",
  "url": "https://www.francescacicalese.it",
  "telephone": "+393491635839",
  "email": "francescacicalese1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Sabotino 46",
    "addressLocality": "Roma",
    "addressRegion": "RM",
    "postalCode": "00195",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.9109,
    "longitude": 12.456
  },
  "areaServed": [
    { "@type": "City", "name": "Roma" },
    { "@type": "AdministrativeArea", "name": "Provincia di Roma" }
  ],
  "serviceType": ["Diritto Penale", "Diritto di Famiglia", "Diritto Civile", "Diritto del Lavoro"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Legali",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Difesa Penale",
          "description": "Assistenza e difesa in procedimenti penali, udienze e indagini preliminari."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diritto di Famiglia",
          "description": "Separazioni, divorzi, affidamento minori, tutela dei diritti familiari e successioni."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diritto Civile",
          "description": "Risarcimento danni, controversie contrattuali, responsabilità civile e recupero crediti."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diritto del Lavoro",
          "description": "Licenziamenti, mobbing, contratti di lavoro e vertenze giuslavoristiche."
        }
      }
    ]
  },
  "priceRange": "$$",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Contanti, Bonifico Bancario",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

### 5.2 Person

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.francescacicalese.it/#person",
  "name": "Francesca Cicalese",
  "givenName": "Francesca",
  "familyName": "Cicalese",
  "honorificPrefix": "Avv.",
  "jobTitle": "Avvocato",
  "description": "Avvocato penalista e civilista a Roma. Iscritta all'Ordine degli Avvocati di Roma. Specializzata in diritto penale, diritto di famiglia, diritto civile e diritto del lavoro.",
  "url": "https://www.francescacicalese.it/chi-sono",
  "telephone": "+393491635839",
  "email": "francescacicalese1@gmail.com",
  "worksFor": { "@id": "https://www.francescacicalese.it/#organization" },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Università degli Studi di Roma"
  },
  "knowsAbout": [
    "Diritto Penale",
    "Diritto di Famiglia",
    "Diritto Civile",
    "Diritto del Lavoro",
    "Procedura Penale"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Sabotino 46",
    "addressLocality": "Roma",
    "addressRegion": "RM",
    "postalCode": "00195",
    "addressCountry": "IT"
  }
}
```

### 5.3 WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Studio Legale Avv. Francesca Cicalese",
  "url": "https://www.francescacicalese.it",
  "description": "Sito ufficiale dello Studio Legale dell'Avv. Francesca Cicalese a Roma.",
  "inLanguage": "it-IT",
  "publisher": { "@id": "https://www.francescacicalese.it/#organization" }
}
```

---

## 6. SITEMAP (sitemap.xml)

Generata dinamicamente da `app/sitemap.ts`:

```xml
<urlset>
  <url>
    <loc>https://www.francescacicalese.it</loc>
    <lastmod>[data corrente]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.francescacicalese.it/servizi</loc>
    <lastmod>[data corrente]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.francescacicalese.it/chi-sono</loc>
    <lastmod>[data corrente]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.francescacicalese.it/contatti</loc>
    <lastmod>[data corrente]</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.francescacicalese.it/recensioni</loc>
    <lastmod>[data corrente]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 7. ROBOTS.TXT

Generato dinamicamente da `app/robots.ts`:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://www.francescacicalese.it/sitemap.xml
```

---

## 8. GOOGLE SEARCH CONSOLE

- **Verifica**: implementata tramite meta tag nel layout:
  ```
  google: "ZLj_N-8CS_qMkXyHP0FLwJkd_OGkfG_l77rHH98gO0s"
  ```
- Il sito è verificato su Google Search Console

---

## 9. ASPETTI TECNICI RILEVANTI PER LA SEO

### 9.1 Performance
- **Framework**: Next.js con SSR/SSG — le pagine sono pre-renderizzate lato server
- **Font**: Google Fonts con `display: "swap"` (nessun blocco del rendering)
- **Immagini**: `next/image` con ottimizzazione automatica, quality 75/90, lazy loading
- **Smooth scroll**: Lenis (non impatta il rendering SEO)
- **CSS**: Tailwind CSS (purged, bundle minimale)
- **Hosting**: Vercel Edge Network (CDN globale, HTTPS automatico)

### 9.2 Accessibilità
- `<html lang="it" dir="ltr">`
- `aria-label` su tutte le sezioni principali
- `aria-expanded` sull'hamburger menu
- `alt` text sulle immagini
- Semantica HTML: `<main>`, `<section>`, `<nav>`, `<footer>`, `<h1>`-`<h3>`, `<blockquote>`

### 9.3 Struttura heading
Ogni pagina ha un solo `<h1>`, seguito da `<h2>` per le sotto-sezioni. Non ci sono salti di livello.

### 9.4 Canonical
Ogni pagina ha un canonical URL esplicito tramite `alternates.canonical` nella metadata.

### 9.5 Open Graph e Twitter
Ogni pagina ha tag OG (title, description, url) e Twitter card configurati.

---

## 10. CONTENUTO TESTUALE COMPLETO PER PAGINA

### Homepage
- H1: "Francesca Cicalese"
- Sottotitolo: "Assistenza legale in diritto penale, diritto di famiglia e diritto civile."
- Sezione "Aree di pratica" con 4 card: Diritto Penale, Famiglia e Minori, Diritto Civile, Diritto del Lavoro — ognuna con breve descrizione
- CTA: "Parliamo del tuo caso."

### Servizi
Per ogni area:
- **Diritto Penale**: "Garantisco una difesa rigorosa e tempestiva in ogni fase del procedimento penale. Dall'iscrizione nel registro degli indagati fino all'eventuale giudizio di appello, seguo ogni cliente con attenzione costante, tutelando i suoi diritti fondamentali con competenza tecnica e determinazione."
  - Punti: Difesa in fase di indagini preliminari / Assistenza durante interrogatori e fermi / Udienza preliminare e dibattimento / Reati contro la persona e il patrimonio / Procedimenti in Corte d'Appello

- **Famiglia e Minori**: "Accompagno i miei clienti nei momenti più delicati della vita familiare con professionalità e profonda umanità. La tutela dei minori è al centro di ogni procedimento. Mi occupo di separazioni consensuali e giudiziali, affidamento e mantenimento dei figli, successioni ereditarie e protezione dei soggetti vulnerabili."
  - Punti: Separazione e divorzio consensuale o giudiziale / Affidamento, mantenimento e diritto di visita / Tutela legale dei minori / Successioni, eredità e testamenti / Modifica delle condizioni di separazione

- **Diritto Civile**: "Offro assistenza completa nelle controversie di diritto civile: dalla tutela dei diritti soggettivi al risarcimento del danno, dalla responsabilità contrattuale ed extracontrattuale alle controversie condominiali e alla consulenza contrattuale. Ogni caso è trattato con rigore tecnico e attenzione alle esigenze reali del cliente."
  - Punti: Risarcimento danni da sinistri e infortuni / Controversie contrattuali e recupero crediti / Responsabilità contrattuale ed extracontrattuale / Redazione e revisione di contratti / Controversie condominiali e diritti reali

- **Diritto del Lavoro**: "Assisto lavoratori e aziende in tutte le controversie di natura giuslavoristica. Dalla verifica della legittimità di un licenziamento alla gestione di una vertenza sindacale, garantisco una tutela efficace e tempestiva dei diritti di entrambe le parti, sempre nel rispetto della normativa vigente."
  - Punti: Licenziamento illegittimo e reintegro / Mobbing e molestie sul luogo di lavoro / Contratti di lavoro e mansioni / Vertenze per retribuzioni non corrisposte / Accordi sindacali e conciliazioni

### Recensioni
8 testimonianze con nome (cognome puntato), città, tipo di servizio:
1. Marco R. — Roma — DIRITTO CIVILE
2. Laura S. — Velletri — DIRITTO DI FAMIGLIA
3. Giuseppe M. — Roma — DIRITTO PENALE
4. Elena V. — Roma — DIRITTO DI FAMIGLIA
5. Riccardo F. — Reggio Emilia — DIRITTO CIVILE
6. Davide C. — Forlì — DIRITTO DEL LAVORO
7. Matteo B. — Roma — DIRITTO PENALE
8. Alessia T. — Roma — DIRITTO DI FAMIGLIA

---

## 11. COSA MANCA / POSSIBILI MIGLIORAMENTI

1. **Pagine Privacy e Cookie**: i link esistono nel footer ma le pagine non sono ancora create
2. **Immagine OG**: non c'è un'immagine Open Graph specifica (manca `og:image`)
3. **Blog / Contenuti**: non c'è una sezione blog per contenuti editoriali e keyword long-tail
4. **Google My Business**: non verificato se il profilo GMB è collegato/ottimizzato
5. **Recensioni Google**: le testimonianze sul sito sono statiche, non collegate a Google Reviews
6. **Schema Review**: non è stato implementato un markup `@type: Review` per le testimonianze
7. **Breadcrumb**: non c'è un markup `BreadcrumbList` né breadcrumb visibili
8. **FAQ Schema**: non ci sono FAQ strutturate (possibile per la pagina servizi)
9. **Hreflang**: non necessario al momento (sito solo in italiano), ma da considerare per il futuro
10. **Speed**: le animazioni Framer Motion e Lenis smooth scroll potrebbero impattare Core Web Vitals — da verificare con Lighthouse
11. **Keyword locali**: il sito è fortemente geo-targettizzato su "Roma" e "Prati" — potrebbe essere utile espandere su quartieri limitrofi o ricerche più specifiche
12. **Internal linking**: i link interni tra pagine sono minimi (principalmente via navbar e CTA)

---

## 12. FILE COINVOLTI

| File | Ruolo SEO |
|---|---|
| `app/layout.tsx` | Metadata globale, keywords, robots, OG, Twitter, Google verification |
| `app/page.tsx` | Metadata homepage |
| `app/servizi/page.tsx` | Metadata servizi |
| `app/chi-sono/page.tsx` | Metadata chi sono |
| `app/contatti/page.tsx` | Metadata contatti |
| `app/recensioni/page.tsx` | Metadata recensioni |
| `app/structured-data.tsx` | JSON-LD (LegalService, Person, WebSite) |
| `app/sitemap.ts` | Generazione sitemap.xml |
| `app/robots.ts` | Generazione robots.txt |
| `app/icon.tsx` | Favicon dinamico |
| `app/apple-icon.tsx` | Apple touch icon |
| `data/siteConfig.ts` | Dati centralizzati (nome, tel, email, URL) |
| `data/servizi.ts` | Contenuti servizi (usati sia on-page che per structured data) |
| `data/testimonianze.ts` | Contenuti recensioni |
