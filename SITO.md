# SITO.md — Template completo per siti vetrina professionali con Next.js

Documento operativo. Contiene tutto il necessario per replicare la struttura, l'estetica, il deploy e le integrazioni di un sito vetrina premium con Next.js.

**Come usare questo documento**

Consegna questo file a un'AI con questo prompt:

> *"Leggi attentamente SITO.md. Devo realizzare un nuovo sito professionale per [nome cliente], [professione], a [città]. Il dominio sarà [dominio.it]. I servizi offerti sono: [lista]. L'email del cliente è [email]. Guida passo per passo partendo dal Blocco 0, aspetta la mia conferma ad ogni fase prima di procedere."*

L'AI avrà tutto il contesto per:
- Raccogliere le informazioni mancanti prima di iniziare
- Creare GitHub + Vercel + Resend nell'ordine corretto
- Scrivere il codice con la stessa struttura e qualità
- Fare il deploy senza errori
- Configurare i DNS su Aruba senza perdere giorni

Ogni blocco è eseguibile in sequenza: "fai blocco 0", "fai blocco 1", ecc.

---

## Indice

0. [Checklist di avvio — LEGGI PRIMA DI TUTTO](#blocco-0--checklist-di-avvio--leggi-prima-di-tutto)
1. [Stack tecnologico e dipendenze](#blocco-1--stack-tecnologico-e-dipendenze)
2. [Struttura del progetto](#blocco-2--struttura-del-progetto)
3. [Fondamenta: layout, font, colori](#blocco-3--fondamenta-layout-font-colori)
4. [Dati centralizzati](#blocco-4--dati-centralizzati)
5. [Componenti UI riutilizzabili](#blocco-5--componenti-ui-riutilizzabili)
6. [Sezioni della homepage](#blocco-6--sezioni-della-homepage)
7. [Pagine interne](#blocco-7--pagine-interne)
8. [Form contatti + Resend](#blocco-8--form-contatti--resend)
9. [SEO completo](#blocco-9--seo-completo)
10. [Deploy: GitHub + Vercel](#blocco-10--deploy-github--vercel)
11. [Dominio: acquisto e collegamento](#blocco-11--dominio-acquisto-e-collegamento)
12. [Google Search Console](#blocco-12--google-search-console)
13. [Concetti chiave Next.js](#blocco-13--concetti-chiave-nextjs)
14. [Lezioni apprese e errori da evitare](#blocco-14--lezioni-apprese-e-errori-da-evitare)

---

## BLOCCO 0 — Checklist di avvio — LEGGI PRIMA DI TUTTO

Prima di scrivere una riga di codice, devi raccogliere le informazioni del cliente e configurare tutti i servizi esterni. Farlo nell'ordine sbagliato causa ritardi di giorni.

### 0.1 Informazioni da raccogliere dal cliente

Prima di iniziare chiedi al cliente questi dati. Senza di essi non puoi procedere:

| Dato | Esempio |
|---|---|
| Nome completo e titolo | Avv. Francesca Cicalese |
| Professione/settore | Avvocato |
| Email professionale (riceverà i messaggi dal form) | francescacicalese1@gmail.com |
| Telefono | +39 349 163 5839 |
| Indirizzo studio | Via Sabotino 46, Roma (zona Prati) |
| Dominio desiderato | francescacicalese.it |
| Servizi offerti (3-4 max) | Diritto Penale, Famiglia, Civile, Lavoro |
| Colori preferiti / brand | Nero + blu (#5B8DEF) — ispirazione luxury |
| Foto professionali | Alta risoluzione, minimo 1000px lato corto |
| Breve bio | 2-3 paragrafi scritti dal cliente o da scrivere insieme |
| Testimonianze clienti | 3-4 recensioni con nome e città |

### 0.2 Account necessari — verifica cosa hai già

Questi account devono essere già attivi. Se non lo sono, creali prima di continuare:

| Servizio | URL | Note |
|---|---|---|
| **GitHub** | github.com | Uno per tutti i progetti — crea una repo per ogni sito |
| **Vercel** | vercel.com | Connesso al tuo account GitHub — un progetto per sito |
| **Resend** | resend.com | Un account, più domini (uno per cliente) |
| **Aruba** (o altro registrar) | admin.aruba.it | Accesso del cliente, non tuo — fatti dare le credenziali |

### 0.3 Ordine di setup — NON cambiarlo

Questo è l'ordine corretto. Se lo cambi, perdi ore:

```
FASE A — Setup servizi (prima del codice)
  1. Crea la repository GitHub
  2. Crea il progetto Next.js e collegalo alla repo
  3. Crea il progetto su Vercel collegandolo alla repo GitHub
  4. Su Resend: aggiungi il dominio del cliente
  5. Su Aruba: aggiungi i 4 record DNS di Resend
  6. Aspetta 2-4 ore (propagazione DNS) — in questo tempo scrivi il codice

FASE B — Sviluppo
  7. Scrivi il codice (Blocchi 1-9 di questo documento)
  8. Testa tutto in locale

FASE C — Go live
  9. Aggiungi RESEND_API_KEY nelle variabili d'ambiente di Vercel
  10. Commit + Push → Vercel deploya automaticamente
  11. Aggiungi il dominio del cliente su Vercel
  12. Su Aruba: modifica il record A del dominio per puntare a Vercel
  13. Aspetta propagazione DNS (5 min - 1 ora)
  14. Verifica il dominio su Resend → avvia la verifica
  15. Testa il form contatti sul sito live
  16. Google Search Console: verifica dominio + invia sitemap
```

**Perché questo ordine?** I record DNS di Resend e Vercel hanno bisogno di ore per propagarsi. Se li aggiungi subito (Fase A), quando arrivi al go live (Fase C) sono già propagati e la verifica è istantanea. Se li aggiungi alla fine, aspetti ore bloccato.

### 0.4 Creazione repository GitHub (nuovo sito)

Hai già un account GitHub. Per ogni nuovo cliente crei una nuova repository:

1. Vai su [github.com](https://github.com) e accedi
2. Clicca il **`+`** in alto a destra → **New repository**
3. Compila:
   - **Repository name**: `nome-cognome-website` (es. `mario-rossi-website`)
   - **Description**: `Sito professionale — [Nome Cliente]`
   - **Visibility**: Private (il codice non è pubblico)
   - **NON spuntare** "Add a README file" — lo farà Next.js
4. Clicca **Create repository**
5. GitHub mostra una pagina con i comandi. Copiati l'URL della repo (es. `https://github.com/emilioff8822/mario-rossi-website.git`)

Poi in PowerShell, nella cartella dove vuoi creare il progetto:

```bash
npx create-next-app@latest mario-rossi-website --typescript --tailwind --app --src-dir=no
cd mario-rossi-website
npm install framer-motion lenis resend
git remote add origin https://github.com/emilioff8822/mario-rossi-website.git
git push -u origin main
```

### 0.5 Collegare Vercel al nuovo progetto (stesso account)

Hai già un account Vercel. Per ogni nuovo sito crei un nuovo progetto:

1. Vai su [vercel.com](https://vercel.com) e accedi
2. Clicca **Add New…** → **Project**
3. Cerca la nuova repository GitHub nella lista → clicca **Import**
4. Vercel riconosce automaticamente che è Next.js
5. **PRIMA di cliccare Deploy**, aggiungi la variabile d'ambiente:
   - Vai in **Environment Variables**
   - Key: `RESEND_API_KEY`
   - Value: la chiave Resend (la trovi su resend.com → API Keys)
   - Seleziona tutti gli ambienti (Production, Preview, Development)
6. Clicca **Deploy**

Il sito sarà subito online su un URL temporaneo tipo `mario-rossi-website.vercel.app`. Questo è il tuo URL di test finché non colleghi il dominio del cliente.

### 0.6 Aggiungere il dominio su Resend (stesso account)

Hai già un account Resend con un dominio verificato (es. `francescacicalese.it`). Per ogni nuovo cliente aggiungi un nuovo dominio:

1. Vai su [resend.com](https://resend.com) → accedi
2. **Domains** → **Add Domain**
3. Inserisci il dominio del nuovo cliente (es. `mariorossi.it`)
4. Seleziona **Ireland (eu-west-1)**
5. Resend mostra i 4 record DNS da aggiungere
6. **Non chiudere questa pagina** — vai su Aruba e aggiungi i record (vedi Blocco 8)
7. Poi torna su Resend e avvia la verifica

⚠️ **Non creare un nuovo account Resend**. Usa sempre lo stesso. Il piano gratuito supporta più domini.

### 0.7 API Key Resend — una per progetto o condivisa?

Puoi riutilizzare la stessa API key per più domini, oppure crearne una per ogni cliente (consigliato per sicurezza):

1. Resend → **API Keys** → **Create API Key**
2. Name: `mario-rossi-website`
3. Permission: `Sending access`
4. Copia la chiave e mettila nella variabile d'ambiente di Vercel del nuovo progetto

### 0.8 Cosa cambiare per ogni nuovo sito

| File | Cosa modificare |
|---|---|
| `data/siteConfig.ts` | TUTTO (nome, contatti, indirizzo, URL, navigazione) |
| `data/servizi.ts` | Servizi del cliente |
| `data/testimonianze.ts` | Testimonianze |
| `app/globals.css` | `--color-accent` e palette colori |
| `app/layout.tsx` | Metadata globali, verifica Google Search Console |
| `app/structured-data.tsx` | Dati Schema.org del cliente |
| `app/actions/contact.ts` | `from` (dominio Resend verificato), `to` (email cliente) |
| `public/images/` | Foto del cliente |
| `.env.local` | `RESEND_API_KEY` nuova |
| Vercel → Environment Variables | `RESEND_API_KEY` nuova |

---

## BLOCCO 1 — Stack tecnologico e dipendenze

### Tecnologie

| Tecnologia | Versione | Ruolo |
|---|---|---|
| Next.js | 16.x (App Router) | Framework React con SSR, routing basato su file, SEO nativo |
| React | 19.x | Libreria UI (Server + Client Components) |
| TypeScript | 5.x | Tipizzazione statica su tutto il codice |
| Tailwind CSS | 4.x | Utility-first CSS, tema via CSS custom properties |
| Framer Motion | 12.x | Animazioni dichiarative (fade, parallax, transizioni) |
| Lenis | 1.x | Smooth scroll custom (sostituisce scroll nativo del browser) |
| Resend | 6.x | API per invio email dal form contatti |

### Inizializzazione progetto

```bash
npx create-next-app@latest nome-progetto --typescript --tailwind --app --src-dir=no
cd nome-progetto
npm install framer-motion lenis resend
```

Il flag `--app` abilita l'App Router (cartella `app/` invece di `pages/`).
Il flag `--src-dir=no` tiene i file nella root (nessuna cartella `src/`).

### package.json — Script

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

- `npm run dev` → server di sviluppo locale su `http://localhost:3000`
- `npm run build` → build di produzione (quello che Vercel esegue in automatico)

### File di configurazione

**postcss.config.mjs** — Necessario per Tailwind v4:
```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**tsconfig.json** — Alias `@/*` per import puliti:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
Questo permette di scrivere `import Navbar from "@/components/layout/Navbar"` invece di percorsi relativi lunghi.

---

## BLOCCO 2 — Struttura del progetto

```
/
├── app/                        ← Routing + pagine (Next.js App Router)
│   ├── layout.tsx              ← Layout globale (font, navbar, footer, metadata)
│   ├── page.tsx                ← Homepage (/)
│   ├── globals.css             ← Stili globali + tema Tailwind v4
│   ├── structured-data.tsx     ← JSON-LD per SEO (Schema.org)
│   ├── sitemap.ts              ← Genera sitemap.xml automaticamente
│   ├── robots.ts               ← Genera robots.txt automaticamente
│   ├── manifest.ts             ← Genera manifest.webmanifest (PWA)
│   ├── chi-sono/page.tsx       ← Pagina /chi-sono
│   ├── servizi/page.tsx        ← Pagina /servizi
│   ├── recensioni/page.tsx     ← Pagina /recensioni
│   ├── contatti/page.tsx       ← Pagina /contatti
│   └── actions/
│       └── contact.ts          ← Server Action: invio email con Resend
│
├── components/
│   ├── layout/                 ← Componenti strutturali persistenti
│   │   ├── Navbar.tsx          ← Header con navigazione + menu mobile
│   │   └── Footer.tsx          ← Footer con contatti e link
│   ├── sections/               ← Sezioni della homepage
│   │   ├── Hero.tsx            ← Hero typography-first con animazione entrata
│   │   ├── ChiSono.tsx         ← Preview bio con foto (clip-path reveal)
│   │   ├── Servizi.tsx         ← Griglia servizi con SpotlightCard
│   │   ├── Testimonianze.tsx   ← Carosello auto-scroll con swipe mobile
│   │   └── CTASection.tsx      ← Call-to-action finale con watermark parallax
│   ├── ui/                     ← Componenti riutilizzabili
│   │   ├── FadeIn.tsx          ← Fade-in on scroll (useInView)
│   │   ├── TextReveal.tsx      ← Parole che salgono una ad una
│   │   ├── CTAButton.tsx       ← Bottone CTA con hover premium
│   │   ├── SectionLabel.tsx    ← Label di sezione (linea accent + testo)
│   │   ├── Divider.tsx         ← Linea divisoria sottile tra sezioni
│   │   ├── SpotlightCard.tsx   ← Card con gradiente che segue il mouse
│   │   └── ContactForm.tsx     ← Form interattivo (useActionState)
│   └── providers/              ← Wrapper globali
│       ├── SmoothScroll.tsx    ← Inizializza Lenis per smooth scroll
│       └── PageTransition.tsx  ← Animazione ingresso pagina
│
├── data/                       ← Dati statici centralizzati
│   ├── siteConfig.ts           ← Dati globali (nome, telefono, email, link)
│   ├── servizi.ts              ← Array servizi con descrizioni estese
│   └── testimonianze.ts        ← Array testimonianze clienti
│
├── public/
│   └── images/                 ← Immagini statiche
│       ├── foto-profilo.png    ← Foto principale
│       └── ...
│
├── .env.local                  ← Variabili d'ambiente (API key Resend) — MAI committare
├── .gitignore                  ← Include .env* per sicurezza
└── package.json
```

### Regola di organizzazione

- `layout/` → componenti che appaiono su TUTTE le pagine (navbar, footer)
- `sections/` → sezioni specifiche della homepage (una sezione = un file)
- `ui/` → componenti piccoli e riutilizzabili (bottoni, fade, label)
- `providers/` → wrapper che aggiungono funzionalità globali (scroll, transizioni)
- `data/` → dati che cambiano tra un sito e l'altro (centralizzati, facili da modificare)

---

## BLOCCO 3 — Fondamenta: layout, font, colori

### 3.1 Font

Due font, caricati con `next/font/google` (zero richieste esterne, performance massima):

```tsx
// app/layout.tsx
import { Cormorant_Garamond, Inter } from "next/font/google"

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
```

- **Cormorant Garamond** → font titoli (serif, elegante). Usato come `font-heading`.
- **Inter** → font body (sans-serif, leggibile). Usato come `font-sans`.

Le variabili CSS `--font-cormorant` e `--font-inter` vengono applicate al tag `<html>`:

```tsx
<html className={`${cormorant.variable} ${inter.variable}`}>
```

E collegate al tema Tailwind in `globals.css`:

```css
@theme {
  --font-sans:    var(--font-inter);
  --font-heading: var(--font-cormorant);
}
```

Così nel codice si scrive semplicemente `font-heading` o `font-sans`.

### 3.2 Palette colori

Tema dark con accento colorato. Definito in `globals.css` dentro `@theme`:

```css
@theme {
  --color-bg:       #08090D;     /* Sfondo principale — nero profondo */
  --color-surface:  #10131A;     /* Sfondo sezioni alternate — leggermente più chiaro */
  --color-text:     #E8ECF4;     /* Testo principale — bianco caldo */
  --color-muted:    #7A8499;     /* Testo secondario — grigio medio */
  --color-faint:    #4A5568;     /* Testo terziario — quasi invisibile */
  --color-accent:   #5B8DEF;     /* Colore accento — blu zaffiro (CAMBIARE PER OGNI SITO) */
  --color-border:       rgba(255, 255, 255, 0.06);  /* Bordi quasi invisibili */
  --color-border-hover: rgba(255, 255, 255, 0.12);  /* Bordi hover — leggermente più visibili */
  --color-white:    #FFFFFF;
}
```

Per cambiare il "mood" del sito basta cambiare `--color-accent`. Tutto il resto si adatta.

Combinazioni testate e che funzionano:
- **Blu zaffiro** `#5B8DEF` → professionale, tecnologico
- **Oro champagne** `#C9A96E` → lusso, classico (ma può sembrare banale se non dosato)
- **Verde smeraldo** `#50C878` → fresco, naturale
- **Rosa antico** `#D4A5A5` → delicato, femminile

### 3.3 Stili globali (globals.css)

Oltre al tema, `globals.css` contiene:

```css
:root { color-scheme: dark; }

body {
  background-color: #08090D;
  color: #E8ECF4;
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;    /* Testo più nitido su Mac */
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;                     /* Previene scroll orizzontale */
}
```

**Gradiente sottile di sfondo** — un velo di colore accent nell'angolo superiore destro:
```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at 70% 0%,
    rgba(91, 141, 239, 0.04) 0%,    /* accent al 4% di opacità */
    transparent 60%
  );
}
```

**Link hover** — linea accent che si espande da sinistra:
```css
.link-hover { position: relative; }
.link-hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.link-hover:hover::after {
  transform: scaleX(1);
}
```

**Scrollbar custom** — sottile e integrata col tema:
```css
::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: #08090D; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #7A8499; }
```

**Selezione testo** — colore accent:
```css
::selection {
  background: rgba(91, 141, 239, 0.15);
  color: #E8ECF4;
}
```

### 3.4 Layout globale (app/layout.tsx)

Il layout avvolge TUTTE le pagine. Contiene:
1. Font applicati al tag `<html>`
2. Attributi HTML per SEO: `lang="it"`, `dir="ltr"`
3. Metadata globali (title template, description, keywords, Open Graph, robots)
4. `<StructuredData />` — blocchi JSON-LD per Google
5. `<Navbar />` — fisso in alto su tutte le pagine
6. `<SmoothScroll>` — avvolge il contenuto per lo scroll fluido (Lenis)
7. `<Footer />` — in fondo a tutte le pagine

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
```

### 3.5 Smooth Scroll (Lenis)

Lenis sostituisce lo scroll nativo del browser con uno più fluido e controllabile.

```tsx
// components/providers/SmoothScroll.tsx
"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,        // Quanto è "morbido" lo scroll (0 = rigido, 1 = istantaneo)
      duration: 1.2,     // Durata dell'inerzia
      smoothWheel: true, // Applica anche alla rotella del mouse
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

Perché `"use client"`: Lenis accede al DOM (`window`, `requestAnimationFrame`), quindi deve girare nel browser.

In `globals.css` serve disabilitare lo scroll nativo:
```css
html { scroll-behavior: auto !important; }
```

---

## BLOCCO 4 — Dati centralizzati

### 4.1 siteConfig.ts

Tutti i dati globali del sito in un unico file. Quando cambi cliente, cambi SOLO questo file.

```tsx
// data/siteConfig.ts
export const siteConfig = {
  name: "Nome Completo del Cliente",
  shortName: "Nome Cognome",
  role: "Ruolo professionale",
  studio: "Nome Studio",

  phone: "+39 000 000 0000",
  phonePlain: "+390000000000",          // Per i link tel: e Schema.org
  email: "email@dominio.it",
  address: "Via Indirizzo 1",
  city: "Roma",
  cap: "00100",
  zone: "Quartiere",
  piva: "XXXXXXXXXXXXXXXXXX",

  url: "https://www.dominio.it",        // URL definitivo del sito

  seoTitle: "Titolo principale per SEO",
  seoDescription: "Descrizione principale per SEO (max 160 caratteri)",

  navLinks: [
    { label: "Chi Sono", href: "/chi-sono" },
    { label: "Servizi", href: "/servizi" },
    { label: "Recensioni", href: "/recensioni" },
    { label: "Contatti", href: "/contatti" },
  ],
} as const
```

`as const` rende tutti i valori readonly e permette a TypeScript di inferire i tipi esatti.

### 4.2 servizi.ts

```tsx
// data/servizi.ts
export type Servizio = {
  id: string              // Usato come key React e come id HTML (#diritto-penale)
  titolo: string          // Mostrato nella card e nella pagina dettaglio
  descrizione: string     // Breve — mostrato nella card homepage
  descrizioneEstesa: string  // Lungo — mostrato nella pagina /servizi
  punti: string[]            // Lista di punti specifici
}

export const servizi: Servizio[] = [
  {
    id: "servizio-1",
    titolo: "Nome Servizio 1",
    descrizione: "Descrizione breve per la card.",
    descrizioneEstesa: "Descrizione lunga per la pagina dedicata.",
    punti: ["Punto 1", "Punto 2", "Punto 3"],
  },
  // ... altri servizi
]
```

### 4.3 testimonianze.ts

```tsx
// data/testimonianze.ts
export type Testimonianza = {
  id: number
  testo: string
  nome: string
  citta: string
  servizio?: string    // Opzionale — mostrato come tag sotto il nome
}

export const testimonianze: Testimonianza[] = [
  {
    id: 1,
    testo: "Testo della testimonianza...",
    nome: "Mario R.",
    citta: "Roma",
    servizio: "Nome Servizio",
  },
  // ... almeno 3-4 testimonianze per equilibrio visivo
]
```

---

## BLOCCO 5 — Componenti UI riutilizzabili

Questi componenti sono la "cassetta degli attrezzi" usata in tutte le pagine.

### 5.1 FadeIn — Animazione apparizione on scroll

```tsx
// components/ui/FadeIn.tsx
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FadeIn({ children, delay = 0, duration = 0.6, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- `useInView` osserva quando l'elemento entra nel viewport
- `once: true` → l'animazione parte una sola volta (non si ripete scrollando su)
- `margin: "-60px"` → parte 60px prima che l'elemento sia completamente visibile
- `ease: [0.22, 1, 0.36, 1]` → curva custom "ease-out" usata ovunque per coerenza

### 5.2 TextReveal — Parole che salgono

```tsx
// components/ui/TextReveal.tsx
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function TextReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const words = children.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.03, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
```

Ogni parola è avvolta in un contenitore con `overflow: hidden`. La parola parte da `y: 100%` (sotto, nascosta) e sale a `y: 0%`. Lo stagger di `0.03s` tra le parole crea l'effetto "a cascata".

### 5.3 CTAButton — Bottone call-to-action

```tsx
// components/ui/CTAButton.tsx
import Link from "next/link"

export default function CTAButton({ text, href, fullWidth = false }: Props) {
  return (
    <Link href={href} className={`group relative inline-block overflow-hidden border ...`}>
      <span className="absolute inset-0 bg-accent opacity-[0.06] -translate-x-full 
        group-hover:translate-x-0 transition-transform duration-500" />
      <span className="relative">{text}</span>
    </Link>
  )
}
```

Effetto hover: un velo semitrasparente (6% opacità) scorre da sinistra a destra dentro il bottone. Il bordo diventa accent, il testo si illumina, e il bottone si alza di 2px.

Per mobile: bordo più visibile di default + feedback tattile con `active:scale-[0.98]`.

### 5.4 SectionLabel — Etichetta di sezione

```tsx
// components/ui/SectionLabel.tsx
export default function SectionLabel({ text }: { text: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-12 md:mb-16">
        <div className="w-8 h-px bg-accent" />
        <span className="text-xs uppercase tracking-[0.15em] text-muted font-medium">{text}</span>
      </div>
    </FadeIn>
  )
}
```

Linea accent corta (32px) + testo maiuscolo spaziato. Pattern usato da Linear, Stripe e tutti i siti premium dark per introdurre le sezioni.

### 5.5 SpotlightCard — Card con luce che segue il mouse

```tsx
// components/ui/SpotlightCard.tsx
"use client"
import { useState, useRef } from "react"

export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
      className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, 
            rgba(91,141,239,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
```

Un gradiente radiale che segue la posizione del mouse sulla card. Sottilissimo (6% opacità). Visibile solo su desktop (su mobile non c'è hover).

### 5.6 PageTransition — Animazione ingresso pagina

```tsx
// components/providers/PageTransition.tsx
"use client"
import { motion } from "framer-motion"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

Ogni pagina interna (`/chi-sono`, `/servizi`, ecc.) avvolge il suo contenuto in `<PageTransition>`. Quando navighi tra le pagine, il contenuto appare con un fade-in dal basso.

---

## BLOCCO 6 — Sezioni della homepage

### 6.1 Homepage — Assemblaggio

```tsx
// app/page.tsx
export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Divider />
        <ChiSono />
        <Divider />
        <Servizi />
        <Divider />
        <Testimonianze />
        <CTASection />
      </main>
    </PageTransition>
  )
}
```

Le sezioni sono separate da `<Divider />` (linea 1px semitrasparente). La CTA finale ha sfondo diverso, quindi non ha bisogno del divisore prima.

### 6.2 Hero — Ingresso cinematografico

Typography-first. Nessuna immagine (la foto sta nella sezione Chi Sono).

Sequenza di entrata:
1. Linea accent si espande (0s)
2. Label "Studio Legale" appare (0.3s)
3. Nome si rivela parola per parola — TextReveal (0.6s, 1.0s)
4. Sottotitolo fade-in (2.0s)
5. Bottone CTA appare (2.5s)
6. Linea decorativa verticale in basso (3s)

Effetto parallax: titolo e contenuto si muovono verso l'alto e diventano trasparenti mentre l'utente scrolla via dalla sezione. Gestito con `useScroll` + `useTransform` di Framer Motion.

### 6.3 Chi Sono — Preview con foto

Due colonne: foto a sinistra (5/12), testo a destra (7/12).

La foto ha un effetto **clip-path reveal**: parte nascosta (`inset(100% 0 0 0)`) e si scopre dal basso. Contemporaneamente fa un leggero zoom out (`scale: 1.15 → 1`). Dietro la foto c'è una cornice sfalsata con bordo accent al 20% di opacità.

Su mobile: foto sopra (full width), testo sotto.

### 6.4 Servizi — Griglia con SpotlightCard

4 card in griglia (4 colonne desktop, 2 tablet, 1 mobile).

Ogni card contiene:
- Icona SVG custom (accent, 50% opacità) — diversa per ogni servizio
- Titolo centrato
- Linea accent corta (24px)
- Descrizione breve

Hover: bordo più visibile + card si alza di 4px. SpotlightCard aggiunge il gradiente che segue il mouse.

Le card appaiono con stagger (delay progressivo di 0.1s l'una dall'altra).

### 6.5 Testimonianze — Carosello

Una testimonianza alla volta. Cambio automatico ogni 6 secondi.

Effetti:
- La virgoletta decorativa "respira" (scale + opacity) durante la transizione
- Il testo entra/esce con blur (da sfocato a nitido e viceversa)
- Il dot attivo si allunga da cerchio a pillola (w-1.5 → w-6)

Navigazione mobile: swipe con `onTouchStart`/`onTouchEnd`. Soglia minima di 50px per evitare swipe accidentali.

Il timer si resetta quando l'utente interagisce manualmente (clic su dot o swipe).

### 6.6 CTA Section — Chiusura con watermark

Sfondo `surface` (più chiaro del bg base). In background, un'immagine decorativa (es. bilancia) al 8% di opacità con effetto parallax (si muove e ruota leggermente in base allo scroll).

Titolo con TextReveal, sottotitolo, e bottone CTA.

---

## BLOCCO 7 — Pagine interne

Ogni pagina interna segue questo schema:

```tsx
// app/nome-pagina/page.tsx
import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"

export const metadata: Metadata = {
  title: "Titolo specifico della pagina",
  description: "Descrizione SEO della pagina",
  alternates: { canonical: "https://www.dominio.it/nome-pagina" },
  openGraph: { /* ... */ },
}

export default function NomePagina() {
  return (
    <PageTransition>
      <main className="pt-16">     {/* pt-16 compensa la navbar fixed */}
        <section className="py-24 md:py-32" aria-label="...">
          {/* Contenuto */}
        </section>
      </main>
    </PageTransition>
  )
}
```

Punti chiave:
- `export const metadata` → SEO della pagina (Server Component, non serve `"use client"`)
- `<main className="pt-16">` → padding-top per non nascondere contenuto sotto la navbar
- `aria-label` su ogni `<section>` → accessibilità
- Un solo `<h1>` per pagina con keyword SEO
- Ogni pagina finisce con una sezione CTA ("Contattami")

### Pagine implementate

| Pagina | Contenuto |
|---|---|
| `/chi-sono` | Bio completa, foto in toga, valori professionali, CTA |
| `/servizi` | Hero + una sezione per ogni servizio (layout alternato sx/dx) con icone watermark |
| `/recensioni` | Griglia 2 colonne di tutte le testimonianze |
| `/contatti` | Form email (Resend) + info contatto (telefono, email, indirizzo, orari) |

---

## BLOCCO 8 — Form contatti + Resend

### 8.1 Cos'è Resend

Resend è un servizio per inviare email via API. Il piano gratuito include 3000 email/mese. Non serve un server SMTP proprio. Un account Resend può gestire **più domini** — puoi usare lo stesso account per tutti i siti che realizzi, aggiungendo un dominio per ogni cliente.

### 8.2 ERRORE CRITICO DA NON RIPETERE — Dominio da verificare PRIMA di tutto

**Il piano gratuito di Resend con `onboarding@resend.dev` come mittente può inviare SOLO alla tua email personale (quella con cui ti sei registrato su Resend).** Non può inviare all'email del cliente.

Per inviare a qualsiasi destinatario (es. `francescacicalese1@gmail.com`) devi verificare il dominio del cliente su Resend. Questo richiede di aggiungere record DNS su Aruba.

**Fai questo PRIMA di scrivere qualsiasi codice.**

### 8.3 Setup completo — nell'ordine esatto

**FASE 1 — Resend**
1. Vai su [resend.com](https://resend.com) e accedi
2. **API Keys** → **Create API Key** → copia la chiave (`re_...`)
3. **Domains** → **Add Domain** → inserisci il dominio del cliente (es. `nomecliente.it`) → seleziona **Ireland (eu-west-1)**
4. Resend mostra i record DNS da aggiungere — **non chiudere questa pagina**

**FASE 2 — Aruba (aggiunta record DNS)**

Vai su [admin.aruba.it](https://admin.aruba.it) → Gestione DNS → dominio del cliente.

Aggiungi questi record **uno alla volta** dal tab **Record** → **AGGIUNGI RECORD**:

**Record 1 — DKIM** (tipo TXT):
```
Nome host: resend._domainkey
Valore: p=MIGfMA0GC... [copia il valore completo da Resend]
TTL: 1 Ora
```

**Record 2 — SPF** (tipo TXT):
```
Nome host: send
Valore: v=spf1 include:amazonses.com ~all
TTL: 1 Ora
```

**Record 3 — DMARC** (tipo TXT):
```
Nome host: _dmarc
Valore: v=DMARC1; p=none;
TTL: 1 Ora
```

**Record 4 — MX sottodominio** (tab **Record MX** → **Gestione avanzata** → **AGGIUNGI SU SOTTODOMINIO**):
```
Nome host: send
Valore: feedback-smtp.eu-west-1.amazonses.com
Priorità: 10
TTL: 1 Ora
```

⚠️ **ATTENZIONE**: il record MX del sottodominio NON si aggiunge dal tab Record normale (non c'è il tipo MX). Si aggiunge dal tab **Record MX** → clicca **Gestione avanzata** → poi **AGGIUNGI SU SOTTODOMINIO**.

**FASE 3 — Aspetta la propagazione DNS**

Dopo aver aggiunto tutti i record, aspetta **almeno 1-2 ore** prima di avviare la verifica su Resend. I DNS di Aruba impiegano tempo a distribuirsi. Se avvii la verifica troppo presto, Resend non trova i record e segna **Failed**.

**FASE 4 — Avvia la verifica su Resend**

1. Vai su Resend → **Domains** → clicca il dominio
2. Clicca i **tre puntini `...`** → **Verify**
3. Aspetta che tutti i record diventino **Verified** (verdi)
4. Lo status del dominio diventa **Verified** → pronto per inviare

### 8.4 Server Action — codice corretto (app/actions/contact.ts)

```tsx
"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nome = (formData.get("nome") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const messaggio = (formData.get("messaggio") as string)?.trim()

  if (!nome || !email || !messaggio) {
    return { status: "error", message: "Tutti i campi sono obbligatori." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Inserisci un indirizzo email valido." }
  }

  // IMPORTANTE: usare { error } non try/catch — Resend SDK v2+ non lancia eccezioni
  const { error } = await resend.emails.send({
    from: "Nome Studio <noreply@dominio-cliente.it>",  // dominio verificato su Resend
    to: "email-cliente@gmail.com",
    replyTo: email,
    subject: `Nuovo messaggio da ${nome}`,
    html: `...`,
  })

  if (error) {
    return { status: "error", message: "Errore nell'invio. Riprova o scrivimi direttamente all'email." }
  }

  return { status: "success" }
}
```

⚠️ **ERRORE CRITICO DA NON RIPETERE**: il Resend SDK v2+ NON lancia eccezioni — restituisce `{ data, error }`. Usare `try/catch` non intercetta mai gli errori: il form mostra sempre "successo" anche quando l'email non viene inviata. Usare SEMPRE `const { error } = await resend.emails.send(...)` e controllare `if (error)`.

### 8.5 ContactForm.tsx (componente client)

```tsx
"use client"
import { useActionState } from "react"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle" }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)

  if (state.status === "success") {
    return <p>Messaggio ricevuto!</p>
  }

  return (
    <form action={action}>
      <input name="nome" />
      <input name="email" type="email" />
      <textarea name="messaggio" />
      {state.status === "error" && <p>{state.message}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Invio in corso…" : "Invia messaggio"}
      </button>
    </form>
  )
}
```

### 8.6 Variabili d'ambiente su Vercel

1. Vai su Vercel → progetto → **Settings** → **Environment Variables**
2. Aggiungi: Key = `RESEND_API_KEY`, Value = `re_xxxxxxxxxxxxxxxxxxxxx`
3. Salva
4. Vai su **Deployments** → **Redeploy** per attivare la variabile

⚠️ Aggiungere la variabile su Vercel non basta — serve fare **Redeploy** per attivarla nel build corrente.

### 8.7 Debug — come capire cosa non funziona

Se le email non arrivano, verifica in questo ordine:

1. **Il form mostra verde o rosso?**
   - Rosso → errore nel codice o API key sbagliata
   - Verde ma email non arriva → controlla spam, oppure bug nel codice (vedi punto 2)

2. **Controlla Resend → Logs** — mostra ogni chiamata API con il dettaglio dell'errore
   - `403 Testing domain restriction` → dominio non verificato, mittente sbagliato
   - `Domain not verified` → dominio non ancora verificato su Resend
   - `Invalid API key` → chiave sbagliata su Vercel

3. **Controlla Resend → Emails** — se l'email appare in lista, Resend l'ha inviata. Se non appare, il problema è nel codice/chiave, non nella consegna.

4. **Verifica Vercel → Logs → Runtime** — mostra gli errori del server quando il form viene inviato

### 8.8 Gestione multi-sito con Resend

Un account Resend gestisce tutti i siti. Per ogni nuovo cliente:
1. Resend → **Domains** → **Add Domain** → dominio del nuovo cliente
2. Aggiungi i 4 record DNS su Aruba del nuovo cliente
3. Verifica il dominio
4. Crea una nuova API key dedicata (opzionale ma consigliato per sicurezza)
5. Aggiungi la nuova API key nelle variabili d'ambiente del nuovo progetto Vercel

---

## BLOCCO 9 — SEO completo

Il SEO è la parte più critica di un sito professionale. Google classifica i settori come legale, medico e finanziario come **YMYL** (Your Money or Your Life) — applica standard severissimi. Ogni pagina deve trasudare competenza, autorevolezza e affidabilità (principi **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness).

### 9.1 Metadata globali (layout.tsx)

Il layout globale definisce i metadata che valgono per TUTTE le pagine. Sono il fondamento SEO.

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  // Base URL — OBBLIGATORIO per risolvere URL relativi in Open Graph e canonical
  metadataBase: new URL("https://www.dominio.it"),

  // Title con template — le pagine interne diventano "Chi Sono | Nome Sito"
  title: {
    default: "Titolo completo con keyword principale — keyword secondaria",
    template: "%s | Nome Sito",
  },

  // Description — max 160 caratteri, deve contenere keyword e invitare al clic
  description: "Descrizione ricca di keyword naturali, max 160 caratteri.",

  // Keywords — array di keyword primarie e secondarie
  keywords: [
    "keyword principale",
    "keyword secondaria",
    "keyword località",
    "keyword servizio 1",
    "keyword servizio 2",
    // ... 8-12 keyword totali
  ],

  // Autore
  authors: [{ name: "Nome Completo Professionista" }],

  // Verifica Google Search Console
  verification: {
    google: "CODICE_VERIFICA_QUI",   // Solo il valore del content tag
  },

  // Open Graph — come appare quando condividi il link su Facebook/LinkedIn/WhatsApp
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.dominio.it",
    siteName: "Nome Completo Sito",
    title: "Titolo breve per social",
    description: "Descrizione breve per social (diversa dalla description principale).",
  },

  // Twitter Card — come appare quando condividi su Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Titolo breve per Twitter",
    description: "Descrizione breve per Twitter.",
  },

  // URL canonico — dice a Google qual è l'URL "ufficiale" della pagina
  alternates: {
    canonical: "https://www.dominio.it",
  },

  // Direttive per i crawler — dice a Google cosa può fare
  robots: {
    index: true,      // Indicizza questa pagina
    follow: true,     // Segui i link in questa pagina
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,       // Nessun limite su anteprima video
      "max-image-preview": "large",  // Anteprima immagini grande nei risultati
      "max-snippet": -1,             // Nessun limite su lunghezza snippet
    },
  },
}
```

### 9.2 Metadata per pagina

Ogni pagina interna esporta i propri `metadata` che sovrascrivono quelli globali:

```tsx
// app/chi-sono/page.tsx
export const metadata: Metadata = {
  title: "Chi Sono | Nome Professionista — Keyword Località",
  description: "Descrizione specifica della pagina con keyword naturali. Max 160 caratteri.",
  alternates: { canonical: "https://www.dominio.it/chi-sono" },
  openGraph: {
    title: "Chi Sono | Nome — Keyword",
    description: "Descrizione per social di questa pagina specifica.",
    url: "https://www.dominio.it/chi-sono",
  },
}
```

Regole per scrivere metadata efficaci:
- **Title**: max 60 caratteri, keyword all'inizio, brand alla fine
- **Description**: 150-160 caratteri, keyword naturali, call-to-action implicita
- **Canonical**: URL esatto della pagina (con o senza www, ma coerente col dominio)
- **Open Graph**: titolo e descrizione possono essere diversi dal title/description SEO

### 9.3 Strategia keyword

Le keyword vanno studiate per il settore e la località. Divise in tre livelli:

**Keyword primarie** (nei titoli H1/H2 e nei primi paragrafi):
- keyword + località (es. "avvocato Roma")
- keyword specifica + località (es. "avvocato penalista Roma")
- nome studio + località

**Keyword secondarie** (distribuite nei testi delle pagine):
- keyword servizio + località (es. "avvocato divorzista Roma")
- keyword quartiere (es. "studio legale Prati")
- keyword via (es. "avvocato Via Sabotino Roma")

**Keyword long-tail** (nei testi lunghi delle pagine servizi):
- frasi complete che un utente potrebbe cercare
- es. "avvocato per separazione consensuale Roma"
- es. "consulenza legale gratuita primo appuntamento Roma"

Le keyword devono sembrare naturali nel testo. Google penalizza il **keyword stuffing** (ripetizione forzata). Devono sembrare scritte da un essere umano per un essere umano.

### 9.4 Structured Data (JSON-LD) — Schema.org

File `app/structured-data.tsx`. Contiene tre blocchi Schema.org separati come `<script type="application/ld+json">`. Fondamentale per i settori YMYL.

**Blocco 1: Tipo di business** (es. LegalService, MedicalBusiness, FinancialService)

```tsx
const legalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",               // Cambiare in base al settore
  "@id": "https://www.dominio.it/#organization",
  name: "Nome Studio Completo",
  alternateName: "Nome breve",
  description: "Descrizione con keyword naturali",
  url: "https://www.dominio.it",
  telephone: "+39XXXXXXXXXX",
  email: "email@dominio.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Indirizzo Numero",
    addressLocality: "Città",
    addressRegion: "Sigla Provincia",     // es. "RM"
    postalCode: "CAP",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9109,                    // Coordinate reali dell'ufficio
    longitude: 12.4560,
  },
  areaServed: [
    { "@type": "City", name: "Roma" },
    { "@type": "AdministrativeArea", name: "Provincia di Roma" },
  ],
  serviceType: ["Servizio 1", "Servizio 2", "Servizio 3"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catalogo Servizi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nome Servizio",
          description: "Descrizione breve del servizio.",
        },
      },
      // ... un Offer per ogni servizio
    ],
  },
  priceRange: "$$",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  }],
}
```

**Blocco 2: Person** (il professionista)

```tsx
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nome Cognome",
  honorificPrefix: "Titolo",              // es. "Avv.", "Dott."
  jobTitle: "Ruolo professionale",
  description: "Bio breve con keyword",
  url: "https://www.dominio.it/chi-sono",
  telephone: "+39XXXXXXXXXX",
  email: "email@dominio.it",
  worksFor: { "@id": "https://www.dominio.it/#organization" },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Nome Università",
  },
  knowsAbout: ["Competenza 1", "Competenza 2", "Competenza 3"],
  address: { /* stessa struttura PostalAddress */ },
}
```

**Blocco 3: WebSite** (per la search box di Google)

```tsx
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nome Sito",
  url: "https://www.dominio.it",
  description: "Sito ufficiale di...",
  inLanguage: "it-IT",
  publisher: { "@id": "https://www.dominio.it/#organization" },
}
```

Il componente li renderizza tutti nel layout:

```tsx
export default function StructuredData() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
```

### 9.5 Sitemap automatica

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dominio.it"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/servizi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/chi-sono`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contatti`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/recensioni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}
```

Next.js genera automaticamente `/sitemap.xml` da questo file. Priority va da 1.0 (homepage) a 0.7 (pagine meno importanti).

### 9.6 Robots.txt

```tsx
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: "https://www.dominio.it/sitemap.xml",
  }
}
```

Permette a tutti i crawler di accedere al sito, blocca solo le route interne (`/api/`, `/_next/`). La sitemap viene indicata esplicitamente.

### 9.7 Manifest (PWA)

```tsx
// app/manifest.ts
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nome completo",
    short_name: "Nome breve",
    description: "Descrizione breve",
    start_url: "/",
    display: "standalone",
    background_color: "#08090D",     // Deve corrispondere al bg del sito
    theme_color: "#08090D",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
```

### 9.8 Semantica HTML

Regole tassative per ogni pagina:
- `<header>` per la navbar
- `<main>` per il contenuto (UNO per pagina)
- `<section aria-label="Descrizione in italiano">` per ogni sezione
- `<nav aria-label="Navigazione principale">` per la navigazione
- `<footer aria-label="Footer">` per il footer
- `<address>` per i dati di contatto (footer e pagina contatti)
- `<article>` per ogni card servizio e ogni testimonianza
- Un solo `<h1>` per pagina — DEVE contenere keyword (es. "Avvocato Penalista Roma", non "Benvenuto")
- `<h2>` per i titoli di sezione — devono contenere keyword naturali
- Gerarchia heading: h1 → h2 → h3 (mai saltare livelli)
- Tutte le immagini con `alt` descrittivo in italiano con keyword
- Link con testo significativo ("scopri i nostri servizi legali", non "clicca qui")
- `lang="it"` e `dir="ltr"` sul tag `<html>`

### 9.9 Immagini — Ottimizzazione SEO

- Sempre `next/Image` (mai `<img>`) — ottimizzazione automatica, lazy loading, formato moderno
- `alt` descrittivo con keyword naturali. Esempi:
  - Foto profilo: `alt="Nome Cognome, ruolo professionale a Città"`
  - Foto studio: `alt="Studio Nome in zona Quartiere, Città"`
- `priority={true}` SOLO per l'immagine above the fold (la prima visibile senza scroll)
- Tutte le altre: `loading="lazy"` (default di Next.js)
- Nomi file significativi: `nome-cognome-ruolo-citta.jpg` (NON `IMG_4523.jpg`)
- Formato preferito: WebP per foto, PNG per loghi/icone, SVG per icone vettoriali

### 9.10 Performance — Lighthouse 95+

Per raggiungere score alto su Lighthouse (strumento di Google per misurare qualità del sito):
- Ogni componente senza interattività deve essere **Server Component** (no `"use client"`)
- `next/Image` ovunque (mai `<img>`)
- Font caricati con `next/font/google` (zero richieste esterne, nessun `@import` CSS)
- CSS minimale — Tailwind fa purge automatico del CSS non usato
- Nessun pacchetto JS inutile nel bundle client
- Framer Motion importato SOLO nei componenti client (mai nel layout server)
- Contrasto colori sufficiente per accessibilità (testo su sfondo)

### 9.11 Checklist SEO finale

Prima di andare online, verifica OGNI punto:

- [ ] `lang="it"` e `dir="ltr"` su `<html>`
- [ ] `metadataBase` impostato nel layout globale
- [ ] Title con keyword su OGNI pagina
- [ ] Description (max 160 char) su OGNI pagina
- [ ] `canonical` URL su OGNI pagina
- [ ] Open Graph (title, description, url) su OGNI pagina
- [ ] Twitter Card configurata
- [ ] Keywords array nel layout globale
- [ ] `robots` con direttive googleBot
- [ ] JSON-LD con almeno Business + Person + WebSite
- [ ] `sitemap.ts` con tutte le pagine
- [ ] `robots.ts` con regole e link alla sitemap
- [ ] `manifest.ts` configurato
- [ ] Un solo `<h1>` per pagina con keyword
- [ ] Gerarchia heading corretta (h1 → h2 → h3)
- [ ] `aria-label` su tutte le sezioni
- [ ] `alt` descrittivo su tutte le immagini
- [ ] Google Search Console verificata e sitemap inviata
- [ ] Lighthouse score > 90 su Performance, Accessibility, SEO

---

## BLOCCO 10 — Deploy: GitHub + Vercel

La guida completa di setup è nel **Blocco 0**. Qui trovi la referenza rapida per il deploy quotidiano e la risoluzione di problemi.

### 10.1 Flusso di lavoro quotidiano

```bash
# In locale: testa sempre prima
npm run dev

# Quando tutto funziona, manda online
git add .
git commit -m "descrizione della modifica"
git push
```

Vercel si accorge automaticamente del push e fa un nuovo deploy in 30-60 secondi.

### 10.2 Redeploy manuale (quando serve)

Serve fare un redeploy manuale quando:
- Hai aggiunto o modificato una **variabile d'ambiente** su Vercel (il push automatico non la ricarica se il codice non è cambiato)
- Il deploy automatico è fallito per errori di build

Come fare:
1. Vercel → progetto → tab **Deployments**
2. Trova il deploy più recente → clicca i tre puntini `...`
3. Clicca **Redeploy**

### 10.3 Leggere i log di Vercel (debug)

Se qualcosa non funziona sul sito live ma funziona in locale:
1. Vercel → progetto → **Deployments** → clicca il deploy recente
2. Vai nel tab **Runtime Logs** — mostra gli errori del server in tempo reale
3. Riproduci l'azione che fallisce (es. invia il form) e guarda i log

### 10.4 Aggiungere variabili d'ambiente dopo il primo deploy

1. Vercel → progetto → **Settings** → **Environment Variables**
2. Aggiungi la variabile
3. ⚠️ Fai **Redeploy** manuale — senza questo la variabile non è attiva

### 10.5 Controllare l'URL del sito

Ogni progetto Vercel ha:
- URL temporaneo: `nome-progetto.vercel.app` (funziona sempre, utile per test)
- URL dominio custom: `dominio-cliente.it` (dopo aver collegato il dominio)

---

## BLOCCO 11 — Dominio: acquisto e collegamento

### 11.1 Acquistare il dominio (esempio con Aruba)

1. Vai su [aruba.it](https://www.aruba.it)
2. Cerca il dominio desiderato (es. `nomecognome.it`)
3. Se è disponibile, aggiungilo al carrello
4. Completa l'acquisto (serve registrazione con dati anagrafici per i domini .it)
5. Il dominio può risultare "in attesa di attivazione" per qualche ora — è normale

### 11.2 Collegare il dominio a Vercel

**Su Vercel:**
1. Vai nel progetto → **Settings** → **Domains**
2. Scrivi il dominio (es. `francescacicalese.it`) → clicca **Add**
3. Vercel ti mostrerà i DNS da configurare. Tipicamente:
   - Tipo **A**, valore `76.76.21.21` per il dominio root
   - Tipo **CNAME**, nome `www`, valore `cname.vercel-dns.com` per il sottodominio www

**Su Aruba (pannello DNS):**
1. Accedi al pannello di gestione del dominio
2. Vai nella sezione **Gestione DNS**
3. Aggiungi/modifica i record:
   - Record **A**: Host = `@`, Valore = `76.76.21.21`
   - Record **CNAME**: Host = `www`, Valore = `cname.vercel-dns.com`
4. Salva

### 11.3 Propagazione DNS

Dopo aver configurato i DNS, bisogna aspettare la **propagazione**. Può richiedere da 5 minuti a 24 ore (di solito meno di 1 ora).

Durante questo tempo il dominio potrebbe non funzionare o dare errore. È normale. Non toccare nulla, aspetta.

Vercel controlla automaticamente i DNS. Quando i record si propagano, il sito diventa accessibile su `https://dominio.it`. Il certificato SSL (HTTPS) viene generato automaticamente da Vercel.

### 11.4 Redirect www

Vercel configura automaticamente il redirect da `www.dominio.it` a `dominio.it` (o viceversa) in base alle tue preferenze nel pannello Domains.

---

## BLOCCO 12 — Google Search Console

### 12.1 Cos'è

Google Search Console è lo strumento di Google per:
- Verificare che Google conosce il tuo sito
- Inviare la sitemap
- Monitorare le query di ricerca
- Scoprire errori di indicizzazione

### 12.2 Setup

1. Vai su [search.google.com/search-console](https://search.google.com/search-console)
2. Accedi con l'account Google del proprietario del sito
3. Clicca **"Aggiungi proprietà"**
4. Scegli **"Prefisso URL"** e inserisci `https://www.dominio.it`
5. Come metodo di verifica, scegli **"Tag HTML"**
6. Google ti dà un codice tipo: `<meta name="google-site-verification" content="CODICE_QUI" />`
7. Copia SOLO il valore del `content` (la stringa di caratteri)

### 12.3 Aggiungere il codice di verifica al sito

Nel `layout.tsx`, aggiungi il codice nella sezione `metadata`:

```tsx
export const metadata: Metadata = {
  // ... altri metadata ...
  verification: {
    google: "IL_TUO_CODICE_QUI",
  },
}
```

Fai commit + push. Aspetta che Vercel deploya. Poi torna su Google Search Console e clicca "Verifica".

### 12.4 Inviare la sitemap

1. Nel menu a sinistra, clicca **"Sitemap"**
2. Inserisci l'URL della sitemap: `https://www.dominio.it/sitemap.xml`
3. Clicca **"Invia"**

Google inizierà a scansionare e indicizzare le pagine. I primi risultati in ricerca possono comparire dopo qualche giorno o settimana.

### 12.5 Nota importante

Il codice di verifica è legato all'account Google. Se il sito è del cliente, usa l'account Google del CLIENTE per la verifica, non il tuo.

---

## BLOCCO 13 — Concetti chiave Next.js

### Server Components vs Client Components

| Aspetto | Server Component | Client Component |
|---|---|---|
| Default | Si. Ogni componente è server di default | No. Serve scrivere `"use client"` in cima |
| Dove gira | Sul server (Vercel) durante il build | Nel browser dell'utente |
| Può usare | Database, API key, file system | useState, useEffect, onClick, animazioni |
| NON può usare | useState, useEffect, onClick | Accesso diretto al server |
| SEO | Eccellente — Google riceve HTML completo | Buono ma il contenuto è generato dal JS |
| Performance | Nessun JS inviato al browser | JS inviato al browser |

**Regola pratica**: usa `"use client"` SOLO quando serve interattività (animazioni, form, stato, click). Tutto il resto resta Server Component.

Componenti che necessitano `"use client"` nel nostro progetto:
- `Navbar` (menu mobile con stato aperto/chiuso)
- `Hero` (animazioni Framer Motion)
- `ChiSono` (animazione clip-path)
- `Servizi` (SpotlightCard con mouse tracking)
- `Testimonianze` (carosello con stato)
- `CTASection` (parallax)
- `ContactForm` (form con stato)
- `FadeIn`, `TextReveal`, `SpotlightCard` (animazioni)
- `SmoothScroll`, `PageTransition` (browser API)

Componenti che restano Server Component:
- `Footer` (nessuna interattività)
- `SectionLabel` (usa FadeIn ma è esso stesso server — FadeIn è il client boundary)
- `Divider` (puro HTML)
- `CTAButton` (puro HTML + CSS, nessun JS)
- Tutte le pagine (`page.tsx`) — possono esportare `metadata` per SEO

### React Hooks usati

| Hook | Cosa fa | Dove lo usiamo |
|---|---|---|
| `useState` | Tiene traccia di un valore che può cambiare | Carosello (indice corrente), Navbar (menu aperto), SpotlightCard (posizione mouse) |
| `useRef` | Riferimento a un elemento DOM senza causare re-render | Touch start position, target per scroll tracking |
| `useEffect` | Esegue codice dopo il render (setup/cleanup) | Timer del carosello, listener scroll, inizializzazione Lenis |
| `useInView` | Controlla se un elemento è visibile nel viewport | FadeIn, TextReveal — partono quando l'elemento entra in vista |
| `useScroll` | Traccia la posizione di scroll | Hero parallax, Navbar progress bar, CTA watermark |
| `useTransform` | Converte un valore in un altro (mapping) | Da scroll progress (0-1) a pixel offset (-120 a 0) |
| `useSpring` | Aggiunge inerzia/smoothing a un valore | Navbar scroll progress bar (movimento fluido) |
| `useCallback` | Memorizza una funzione per evitare re-creazioni | Funzioni next/prev del carosello |
| `useActionState` | Gestisce stato di un form con Server Action | ContactForm (idle → pending → success/error) |

### Curva di easing standard

In tutto il progetto usiamo la stessa curva:
```
cubic-bezier(0.22, 1, 0.36, 1)
```
È un "ease-out" accentuato: partenza veloce, arrivo morbido. Crea un feeling premium e coerente.

### Framer Motion — Pattern usati

**AnimatePresence** — gestisce animazioni di uscita. Senza AnimatePresence, quando un elemento viene rimosso dal DOM sparisce istantaneamente. Con AnimatePresence, l'animazione `exit` viene eseguita prima della rimozione.

```tsx
<AnimatePresence>
  <motion.div
    key={uniqueKey}        // FONDAMENTALE: React usa la key per capire cosa entra/esce
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
</AnimatePresence>
```

---

## BLOCCO 14 — Lezioni apprese e errori da evitare

### Estetica

1. **Mai barocco, mai kitsch**. Più è sottile meglio è. Se dubiti che un effetto sia troppo, toglilo.
2. **Il gold/oro come accent color sembra elegante in teoria ma risulta banale nella pratica**. Il blu zaffiro (#5B8DEF) su fondo nero è più sofisticato.
3. **Niente cerchi dorati che seguono il mouse**, niente aurora boreale animata, niente noise texture troppo forte. Sono effetti che urlano "fatto con AI".
4. **Le immagini decorative (watermark) devono stare tra il 3% e il 13% di opacità**. Se le vedi chiaramente, sono troppo. Se non le vedi affatto, sono inutili.
5. **I numeri decorativi "01 02 03" sulle card sono un pattern datato**. Meglio icone SVG custom.
6. **Una foto nell'hero E nella sezione Chi Sono è ridondante**. Scegli un posto solo.
7. **Il font dei titoli deve essere serif** (Cormorant, Playfair Display, etc.) per il contrasto elegante con il sans-serif del body.
8. **Le transizioni tra slide/carosello non devono avere "schermo nero"**. Usa AnimatePresence senza `mode="wait"` e aggiungi `position: "absolute"` nell'exit per permettere sovrapposizione.

### Mobile

1. **I bordi dei bottoni devono essere più visibili su mobile** (`border-border-hover` invece di `border-border`).
2. **Aggiungere feedback tattile** con `active:scale-[0.98]` e `active:border-accent`.
3. **Il carosello testimonianze deve supportare lo swipe** (touch events con soglia minima 50px).
4. **La navbar full-screen overlay è bella ma sbagliata per l'utente medio**. Meglio un panel che scende sotto la navbar.

### SEO

1. **Un solo `<h1>` per pagina** con keyword principale.
2. **Le keyword devono sembrare naturali**. Google penalizza il keyword stuffing.
3. **JSON-LD strutturato** è fondamentale per i settori YMYL (legale, medico, finanziario).
4. **La sitemap e robots.txt** si generano automaticamente con Next.js (file `.ts` in `app/`).
5. **`metadataBase`** nel layout globale è obbligatorio per risolvere correttamente gli URL relativi negli Open Graph.

### Tecnico

1. **PowerShell su Windows non supporta `&&` come separatore di comandi** in tutti i contesti. Usare `;` o comandi separati.
2. **PowerShell può bloccare `npm run dev`** per policy di esecuzione script. Soluzione: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` oppure usare `npx --yes next dev`.
3. **Se la porta 3000 è occupata** (processo Next.js precedente non chiuso), uccidere il processo con `Stop-Process -Name node -Force` o specificare una porta diversa con `npm run dev -- -p 3001`.
4. **Le variabili d'ambiente in `.env.local` funzionano solo in locale**. Su Vercel vanno aggiunte nella dashboard del progetto.
5. **Mai committare `.env.local`**. Il `.gitignore` standard di Next.js lo esclude già.
6. **Le immagini vanno in `public/images/`**. Next.js serve i file da `public/` alla root del dominio.
7. **`dangerouslySetInnerHTML`** è sicuro per JSON-LD perché il contenuto è generato dal codice (non dall'utente).
8. **Resend SDK v2+ non lancia eccezioni** — restituisce `{ data, error }`. Non usare `try/catch`, usare `const { error } = await resend.emails.send(...)` e controllare `if (error)`. Con `try/catch` il form mostra sempre successo anche quando l'email non viene inviata.
9. **Le immagini in Next.js vanno dichiarate con `width` e `height` proporzionati alla dimensione di visualizzazione reale**. Usare `width={960}` e `quality={90}` per immagini ritratto su schermi retina. Se il file sorgente è piccolo (sotto 800px), il codice non può migliorare la qualità — servono foto originali ad alta risoluzione.

### Resend — errori specifici e soluzioni

1. **`Testing domain restriction`** → stai usando `onboarding@resend.dev` come mittente ma il destinatario non è la tua email Resend. Soluzione: verifica il dominio del cliente.
2. **`Domain not verified`** → il dominio è stato aggiunto su Resend ma i record DNS non sono ancora verificati. Aspetta la propagazione e riavvia la verifica.
3. **Le email non arrivano ma il form mostra successo** → bug classico: stai usando `try/catch` invece di `{ error }`. Vedi punto 8 sopra.
4. **Il record MX per il sottodominio `send` non si trova su Aruba** → non cercarlo nel tab Record normale (non c'è il tipo MX). Vai su **Record MX** → **Gestione avanzata** → **AGGIUNGI SU SOTTODOMINIO**.
5. **Resend mostra Failed dopo poche ore** → hai avviato la verifica troppo presto, i DNS non erano ancora propagati. Aspetta 2-4 ore dopo aver aggiunto i record, poi riavvia la verifica.
6. **La API key su Vercel sembra corretta ma non funziona** → dopo aver aggiunto/modificato una variabile d'ambiente su Vercel, fare sempre **Redeploy** manuale per attivarla nel build corrente.

### Deploy e dominio

1. **Il deploy su Vercel è automatico dopo ogni push su GitHub**. Non serve fare nulla manualmente.
2. **La propagazione DNS può richiedere fino a 24 ore**. Non toccare i DNS durante l'attesa.
3. **Vercel genera automaticamente il certificato SSL** (HTTPS). Non serve comprarlo.
4. **Il codice di verifica Google Search Console è legato all'account Google**. Se verifichi con il tuo account ma il sito è del cliente, il cliente non avrà accesso a Search Console.
5. **Dopo aver inviato la sitemap**, Google può impiegare giorni o settimane per indicizzare completamente. È normale.
6. **`http://dominio.it` non funzionerà** se il browser non fa redirect automatico. Usa sempre `https://`.
7. **Dopo aver aggiunto variabili d'ambiente su Vercel**, fare sempre Redeploy. Il push automatico da GitHub non ricarica le variabili se il codice non è cambiato.

### Workflow ideale

1. Modifica codice in locale
2. Testa con `npm run dev` su `localhost:3000`
3. Quando tutto è OK: `git add .` → `git commit -m "descrizione"` → `git push`
4. Vercel deploya in automatico (30-60 secondi)
5. Verifica il sito online sull'URL di produzione

### Cosa cambiare per un nuovo sito

| File | Cosa modificare |
|---|---|
| `data/siteConfig.ts` | TUTTO (nome, contatti, indirizzo, URL, link navigazione) |
| `data/servizi.ts` | Servizi e relative descrizioni |
| `data/testimonianze.ts` | Testimonianze clienti |
| `app/globals.css` | `--color-accent` (colore principale), eventualmente palette completa |
| `app/layout.tsx` | Metadata globali, font (se ne vuoi diversi), verifica Google |
| `app/structured-data.tsx` | Tutti i dati Schema.org (tipo business, indirizzo, servizi) |
| `app/page.tsx` + pagine interne | Metadata specifici, testi, contenuti |
| `app/actions/contact.ts` | Email destinatario |
| `public/images/` | Tutte le foto |
| `.env.local` | API key Resend |
| Vercel Dashboard | Environment variables, dominio |

---

Fine del documento. Tutto il necessario per replicare, modificare e deployare un sito vetrina professionale con Next.js.
