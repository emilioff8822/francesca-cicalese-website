# Avv. Francesca Cicalese — Vademecum del Progetto

> Questo file è il riferimento centrale del progetto. Va aggiornato ad ogni step completato.
> Ultima modifica: Step 1 — Setup base completato ✅

---

## 🎯 Obiettivo

Sito vetrina professionale per **Avv. Francesca Cicalese**, avvocatessa con studio a Napoli.
Sito **interamente statico** (no backend, no database). Tutti i contenuti sono hardcoded in file TypeScript dentro `/data`.

- Dominio target: **francescacicalese.it** *(da acquistare — istruzioni in fondo)*
- Deploy: **Vercel** *(collegato al repo GitHub)*
- Lingua: **100% italiano** — testi, meta tag, aria-label, placeholder, tutto

---

## 📋 Piano degli Step — Stato Avanzamento

| # | Step | Stato | Note |
|---|---|---|---|
| **1** | Setup base: font, colori, file data, layout root | ✅ Completato | — |
| **2** | Navbar + Footer | ⬜ Da fare | Presenti su tutte le pagine |
| **3** | Homepage — Hero section | ⬜ Da fare | Prima impressione, massimo impatto |
| **4** | Homepage — Chi Sono preview + Servizi | ⬜ Da fare | Sezioni centrali homepage |
| **5** | Homepage — Testimonianze + CTA finale | ⬜ Da fare | Completa la homepage |
| **6** | Pagina `/chi-sono` | ⬜ Da fare | Bio completa |
| **7** | Pagina `/servizi` | ⬜ Da fare | 4 aree di pratica dettagliate |
| **8** | Pagina `/recensioni` | ⬜ Da fare | Tutte le testimonianze |
| **9** | Pagina `/contatti` + form funzionante | ⬜ Da fare | Form + info studio |
| **10** | SEO completo + animazioni Framer Motion + Deploy | ⬜ Da fare | Sito online! |

**Legenda:** ⬜ Da fare · 🔄 In corso · ✅ Completato

---

## 🎨 Visione Estetica — Guida Completa

### Sito di riferimento: premingerlaw.com

Il sito di riferimento principale è [premingerlaw.com](https://premingerlaw.com). Analizziamolo:
- **Struttura**: Sezioni full-width che scorrono verticalmente. Ogni sezione ha un unico focus.
- **Tipografia**: Titoli enormi e coraggiosi. Molto testo grande che occupa spazio.
- **Colori**: Prevalenza di bianco/grigio chiarissimo, sezioni scure con testo bianco, tocchi di colore minimi.
- **Immagini**: Fotografie architetturali (colonne di tribunali, biblioteche legali) — evocative, non didascaliche.
- **Navigazione**: Semplicissima. Pochi link, nessuna mega-menu, CTA sempre visibile.
- **Respiro**: Tantissimo whitespace. Gli elementi non si toccano mai.

### Come adattiamo questo stile per Francesca Cicalese

Partiamo dallo stesso DNA visivo di premingerlaw.com ma aggiungiamo:
- **Oro/Champagne** come accento — trasmette autorevolezza italiana, lusso sobrio
- **Cormorant Garamond** per i titoli — più elegante e raffinato di qualsiasi font sans
- **Simboli della giustizia** trattati con eleganza: NON clipart o icone stock. Useremo:
  - Linee sottili geometriche ispirate alla bilancia (forma astratta, non letterale)
  - Fotografie di colonne architetturali, marmo, dettagli di tribunali italiani
  - Icone vettoriali custom minimaliste per le aree di pratica (linee sottili, 1-2px, stile outline)
- **Animazioni Framer Motion**: Il sito "prende vita" mentre scorri — elementi che appaiono dal basso, titoli che si rivelano carattere per carattere, hover che rispondono con eleganza

### Palette Colori

| Nome | Hex | Uso specifico |
|---|---|---|
| Bianco | `#FFFFFF` | Sfondo principale, testo su sfondi scuri |
| Nero elegante | `#1A1A1A` | Testi corpo, sezioni scure (CTA, footer) |
| Oro / Champagne | `#C9A96E` | Accento principale: bottoni CTA, linee decorative, hover, dettagli |
| Oro chiaro | `#D4B97A` | Hover state del colore oro |
| Oro scuro | `#B8944F` | Active state del colore oro |
| Grigio chiaro | `#F5F5F5` | Sfondi sezioni alternate |
| Bianco caldo | `#FAF9F6` | Sfondo hero, sezioni di benvenuto |
| Grigio testo | `#6B6B6B` | Testi secondari, sottotitoli |

### Tipografia

| Font | Tipo | Pesi | Uso |
|---|---|---|---|
| **Cormorant Garamond** | Serif | 400, 500, 600, 700 | Tutti i titoli H1–H3, quote decorative, nome nelle hero |
| **Inter** | Sans-serif | 300, 400, 500, 600 | Body text, bottoni, navigazione, label form |

**Scala tipografica:**
- H1 hero: `text-6xl` / `text-8xl` su desktop — grandissimo, coraggioso
- H2 sezioni: `text-4xl` / `text-5xl` — ancora imponente
- Body: `text-base` / `text-lg` — leggibile, mai minuscolo
- Sottotitoli: `text-sm uppercase tracking-widest` — distanziato, elegante

### Spaziatura

- Padding verticale sezioni: `py-24` minimo, `py-32` per le sezioni principali
- Tra elementi: `gap-8`, `gap-12`, `gap-16` — mai `gap-2` o `gap-4` per elementi visivi
- Container: `max-w-6xl mx-auto px-6` o `px-8`
- **Regola d'oro**: se sembra troppo stretto, aggiungi spazio. Il sito deve respirare.

### Animazioni (Framer Motion)

| Animazione | Dove | Come |
|---|---|---|
| Fade-in dal basso | Ogni sezione al primo scroll | `opacity: 0→1`, `y: 40→0`, durata 0.6s |
| Rivelazione titolo | H1 hero | Parola per parola, con stagger 0.1s |
| Hover bottoni | Tutti i bottoni CTA | `scale: 1.03`, cambio colore sfondo |
| Hover cards servizi | Cards nella sezione servizi | `y: -4`, leggera ombra |
| Parallax leggero | Immagine hero | Scorrimento leggermente più lento del testo |
| Linea sottostante nav | Link di navigazione | Linea oro che appare/scorre da sx a dx |

---

## 🏗️ Struttura delle Pagine — Dettaglio Visivo

### `/` — Homepage

```
┌─────────────────────────────────────┐
│  NAVBAR                             │
│  Logo (sx) | Nav links (centro) | CTA (dx, oro) │
├─────────────────────────────────────┤
│  HERO — sfondo bianco caldo         │
│  [testo sx]      [foto placeholder dx] │
│  "Avv. Francesca Cicalese"          │
│  "Avvocato - Studio Legale Napoli"  │
│  [CTA bottone oro]                  │
│  Decorazione: linea sottile oro a sx │
├─────────────────────────────────────┤
│  CHI SONO preview — sfondo bianco   │
│  Colonna sx: testo intro 4 righe    │
│  Colonna dx: numero/stats (es. "10+ anni di esperienza") │
│  Link "Scopri di più →" in oro      │
├─────────────────────────────────────┤
│  SERVIZI — sfondo grigio #F5F5F5    │
│  Titolo centrato                    │
│  4 cards in griglia 2x2 (mobile 1 col) │
│  Ogni card: icona outline, titolo, testo │
├─────────────────────────────────────┤
│  TESTIMONIANZE — sfondo bianco      │
│  Virgolette decorative grandi (oro) │
│  3 testimonianze in carosello/griglia │
├─────────────────────────────────────┤
│  CTA FINALE — sfondo #1A1A1A scuro  │
│  Testo bianco + oro                 │
│  Bottone grande con bordo oro       │
├─────────────────────────────────────┤
│  FOOTER — sfondo #1A1A1A            │
│  Logo | Link | Contatti | Credits   │
└─────────────────────────────────────┘
```

### `/chi-sono`
- Hero con foto grande a sinistra e testo a destra
- Timeline formazione (Università, abilitazione, esperienze)
- Sezione valori (3 punti: Professionalità, Empatia, Risultati)
- CTA finale per contattarla

### `/servizi`
- Hero titolo centrato
- 4 sezioni alternate (immagine sx/dx) per ogni area di pratica
- Ogni area: titolo, descrizione lunga, lista punti, CTA

### `/recensioni`
- Hero titolo centrato
- Griglia testimonianze (2 colonne desktop, 1 mobile)
- Ogni card: citazione, nome cliente, città
- CTA finale

### `/contatti`
- Split layout: form a sinistra, info a destra
- Form: Nome, Email, Telefono (opzionale), Messaggio, Invia
- Info: indirizzo, telefono, email, orari
- Nota GDPR sotto il form

---

## 🛠️ Stack Tecnico

| Tecnologia | Versione | Note |
|---|---|---|
| Next.js | 15 — App Router | Già installato |
| TypeScript | ^5 | Già installato |
| Tailwind CSS | ^4 | Già installato |
| Framer Motion | da installare allo Step 1 | Animazioni |
| next/font/google | incluso in Next.js | Font ottimizzati |
| Form | Resend (Server Actions) | Installare allo Step 9 |

**Dipendenze da installare:**
```bash
npm install framer-motion        # Step 1
npm install resend               # Step 9
```

---

## 📁 Struttura Cartelle Target

```
/
├── app/
│   ├── layout.tsx              # Layout root: font, lang="it", metadata, Navbar, Footer
│   ├── page.tsx                # Homepage (assembla le sezioni)
│   ├── globals.css             # Stili globali, variabili CSS
│   ├── chi-sono/
│   │   └── page.tsx
│   ├── servizi/
│   │   └── page.tsx
│   ├── recensioni/
│   │   └── page.tsx
│   ├── contatti/
│   │   └── page.tsx
│   ├── sitemap.ts              # Sitemap XML automatica (Step 10)
│   └── robots.ts               # robots.txt (Step 10)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # "use client" (menu mobile)
│   │   └── Footer.tsx          # Server Component
│   ├── ui/                     # Componenti riutilizzabili
│   │   ├── Button.tsx
│   │   ├── SectionTitle.tsx
│   │   └── AnimatedSection.tsx # Wrapper Framer Motion per fade-in
│   └── sections/               # Sezioni della homepage
│       ├── Hero.tsx
│       ├── ChiSonoPreview.tsx
│       ├── Servizi.tsx
│       ├── Testimonianze.tsx
│       └── CtaFinale.tsx
│
├── data/                       # Contenuti hardcoded
│   ├── siteConfig.ts           # Nome, contatti, P.IVA, descrizione SEO
│   ├── servizi.ts              # Array 4 servizi
│   └── testimonianze.ts        # Array testimonianze
│
├── lib/
│   └── utils.ts                # Helper functions
│
└── public/
    └── images/                 # Foto e immagini (da aggiungere)
```

---

## 🧠 Next.js vs React — Concetti Chiave

Conosci React, quindi partiamo da lì. Ecco le differenze pratiche che incontrerai:

### Routing
- **React (Vite/CRA)**: usi React Router, definisci le route in un file centrale
- **Next.js App Router**: ogni **cartella** dentro `/app` è una route. Metti un file `page.tsx` dentro e quella cartella diventa una pagina. Zero configurazione.
  ```
  /app/page.tsx          → francescacicalese.it/
  /app/chi-sono/page.tsx → francescacicalese.it/chi-sono
  ```

### Server vs Client Components
- **React**: tutti i componenti girano nel browser
- **Next.js**: di default i componenti girano sul **server** (più veloci, migliori per SEO). Scrivi `"use client"` in cima al file solo quando hai bisogno di:
  - `useState`, `useEffect`, `useRef` (stato e ciclo di vita)
  - Animazioni Framer Motion
  - Event listener (`onClick` interattivo, form)
  - Menu mobile che si apre/chiude

### `layout.tsx`
- È il tuo `App.tsx`, ma più potente
- Wrappa tutte le pagine automaticamente
- Lì metti Navbar, Footer, font, metadati base

### Metadata SEO
- Niente `<head>` manuale
- Esporti un oggetto `metadata` da ogni `page.tsx`:
  ```typescript
  export const metadata = {
    title: "Chi Sono | Avv. Francesca Cicalese",
    description: "..."
  }
  ```
  Next.js gestisce tutto automaticamente.

### `next/image`
- Usa sempre `<Image>` di Next.js invece di `<img>`
- Ottimizza automaticamente le immagini (WebP, lazy loading, dimensioni)
- Richiede `width` e `height` oppure `fill`

---

## 🚀 Guida al Deploy — Quando Saremo Pronti

### Fase 1 — Deploy su Vercel (senza dominio)
1. Vai su [vercel.com](https://vercel.com) e accedi con GitHub
2. Clicca "New Project" → seleziona `francesca-cicalese-website`
3. Vercel rileva automaticamente Next.js — clicca "Deploy"
4. In 2 minuti il sito è online su un URL tipo `francesca-cicalese-website.vercel.app`
5. Da lì in poi, ogni push su GitHub aggiorna automaticamente il sito

### Fase 2 — Acquisto dominio
**Dove comprare:** [Namecheap](https://namecheap.com) o [Aruba](https://aruba.it) (italiano, più semplice per p.iva italiana)
- Cerca `francescacicalese.it`
- Costo: ~10-15€/anno per un `.it`
- Aruba permette anche di gestire la PEC se necessaria

### Fase 3 — Collegare dominio a Vercel
1. In Vercel → progetto → Settings → Domains
2. Aggiungi `francescacicalese.it`
3. Vercel ti dà dei record DNS da copiare
4. Vai sul pannello del tuo registrar (Namecheap/Aruba) → DNS
5. Incolla i record che ti ha dato Vercel
6. Aspetta 5-30 minuti — il dominio è attivo
7. HTTPS automatico incluso (Vercel gestisce il certificato SSL)

### Fase 4 — Variabili d'ambiente (per il form)
Quando aggiungeremo Resend per il form contatti:
1. In Vercel → progetto → Settings → Environment Variables
2. Aggiungi `RESEND_API_KEY` con la tua chiave API
3. Non mettere MAI le chiavi API nel codice

---

## 📊 SEO — Checklist

- [ ] `export const metadata` con title + description su ogni pagina
- [ ] `/app/sitemap.ts` — sitemap XML automatica
- [ ] `/app/robots.ts` — robots.txt
- [ ] JSON-LD Schema.org (`Attorney` / `LegalService`) in homepage
- [ ] Tag HTML semantici (`header`, `main`, `section`, `article`, `nav`, `footer`)
- [ ] Tutte le immagini con `next/Image` + `alt` descrittivi in italiano
- [ ] Open Graph meta per condivisione social (Facebook, WhatsApp)
- [ ] `<html lang="it">` nel layout root
- [ ] Target: **Lighthouse 95+** su tutte le metriche

---

## 📝 Dati del Progetto

```
Nome:      Avv. Francesca Cicalese
Studio:    Napoli
Telefono:  [DA INSERIRE]
Email:     [DA INSERIRE]
Indirizzo: [DA INSERIRE]
P.IVA:     [DA INSERIRE]
Dominio:   francescacicalese.it (da acquistare)
```

---

## ✅ Log delle sessioni di lavoro

| Data | Step | Cosa è stato fatto |
|---|---|---|
| 17/03/2026 | Step 0 | Creato PROJECT.md, pianificazione completa |
| 17/03/2026 | Step 1 | Installato framer-motion, configurati font e colori Tailwind v4, creati file /data, aggiornato layout.tsx (lang=it, metadata), pulito page.tsx |

---

## 🔑 Regole di Lavoro

- Un step alla volta — si testa con `npm run dev` prima di andare avanti
- Se qualcosa non piace (grafica, testo, colore) si corregge subito, nello stesso step
- Nessuna dipendenza installata senza conferma
- Codice pulito, zero commenti inutili
- Componenti piccoli e riutilizzabili — mai file enormi
