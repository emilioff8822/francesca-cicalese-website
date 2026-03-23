# BLUEPRINT — Sito Web Dr. Alessandro Federico

> Documento autonomo per la creazione del sito web del Dr. Alessandro Federico.
> Progettato per essere letto da un'AI senza alcun contesto pregresso.
> Contiene: stack tecnologico, architettura, convenzioni, struttura pagine, identità visiva, e blocchi di lavoro sequenziali.

---

## 1. STACK TECNOLOGICO

| Tecnologia | Versione | Scopo |
|---|---|---|
| **Next.js** (App Router) | 16.x | Framework React con SSR/SSG |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x (con `@tailwindcss/postcss`) | Styling utility-first |
| **Framer Motion** | 12.x | Animazioni e transizioni |
| **Lenis** | 1.x | Smooth scroll |
| **Lucide React** | 0.5x+ | Iconografia SVG |
| **Resend** | 6.x | Invio email dal form contatti |

### Comandi principali

```bash
npm run dev          # Server di sviluppo (Turbopack)
npx next build       # Build di produzione (verifica errori prima del deploy)
npx next start       # Serve la build di produzione localmente
```

### Deploy

- **Piattaforma**: Vercel (collegato a repository GitHub)
- Ogni `git push` su `main` trigga un deploy automatico
- Le variabili d'ambiente (es. `RESEND_API_KEY`) vanno configurate su Vercel

---

## 2. ARCHITETTURA DEL PROGETTO

```
alessandro-federico-website/
├── app/
│   ├── layout.tsx              # Root layout (font, Navbar, Footer, SmoothScroll, StructuredData)
│   ├── globals.css             # CSS globale + variabili tema (@theme)
│   ├── page.tsx                # Homepage
│   ├── icon.tsx                # Favicon generato dinamicamente (ImageResponse)
│   ├── apple-icon.tsx          # Apple touch icon
│   ├── structured-data.tsx     # JSON-LD per SEO (Schema.org)
│   ├── chi-sono/page.tsx       # Conosci il Dottore
│   ├── specialita/page.tsx     # Specialità (Dermatologia + Medicina Estetica)
│   ├── prima-e-dopo/page.tsx   # Gallery Prima e Dopo
│   ├── recensioni/page.tsx     # Testimonianze clienti
│   ├── skin/page.tsx           # Blog
│   ├── prenota/page.tsx        # Prenotazione
│   ├── contatti/page.tsx       # Form di contatto
│   └── actions/
│       └── contact.ts          # Server Action per invio email (Resend)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigazione fissa (desktop + mobile hamburger)
│   │   └── Footer.tsx          # Footer con info contatto + orari (3 colonne)
│   ├── sections/
│   │   ├── Hero.tsx            # Hero homepage con parallax
│   │   ├── CTASection.tsx      # Sezione CTA con sfondo scuro
│   │   ├── Servizi.tsx         # Griglia card specialità (homepage)
│   │   └── RecensioniCarousel.tsx  # Carousel testimonianze auto-scroll + swipe
│   ├── ui/
│   │   ├── CTAButton.tsx       # Bottone CTA riutilizzabile (3 varianti: normal, inverted, solid)
│   │   ├── ContactForm.tsx     # Form contatto con useSearchParams per pre-selezione
│   │   ├── FadeIn.tsx          # Wrapper animazione fade-in on scroll
│   │   ├── TextReveal.tsx      # Animazione reveal parola per parola
│   │   ├── SectionLabel.tsx    # Label sezione con trattino corto + testo uppercase
│   │   ├── SpotlightCard.tsx   # Card con spotlight radiale che segue il mouse
│   │   └── Divider.tsx         # Separatore sfumato orizzontale
│   └── providers/
│       ├── PageTransition.tsx  # Wrapper transizione pagina (fade + slide up)
│       └── SmoothScroll.tsx    # Lenis smooth scroll provider
├── data/
│   ├── siteConfig.ts           # Configurazione centralizzata (nome, tel, email, nav links)
│   ├── servizi.ts              # Dati specialità/servizi
│   └── testimonianze.ts        # Array recensioni
├── public/
│   └── images/                 # Foto, icone statiche
├── next.config.ts              # Config Next.js (image qualities)
├── postcss.config.mjs          # PostCSS con @tailwindcss/postcss
└── .env.local                  # Variabili d'ambiente (RESEND_API_KEY)
```

---

## 3. CONVENZIONI DI SVILUPPO

### 3.1 Font

Due font Google, caricati in `layout.tsx` via `next/font/google`:

| Variabile CSS | Font | Uso |
|---|---|---|
| `--font-heading` | **[PLACEHOLDER: scegliere serif/display]** | Titoli, citazioni, nomi |
| `--font-sans` | **[PLACEHOLDER: scegliere sans-serif]** | Body, label, bottoni, UI |

> Nel progetto Cicalese: `Cormorant Garamond` (heading) + `Inter` (sans).
> Per Federico: valutare font che richiamino il mondo medicale/estetico. Suggerimenti: `Playfair Display` o `DM Serif Display` (heading) + `DM Sans` o `Outfit` (sans).

### 3.2 Palette colori

Definita in `globals.css` dentro il blocco `@theme { }` di Tailwind 4:

```css
@theme {
  --font-sans:    var(--font-XXXX);
  --font-heading: var(--font-YYYY);

  --color-bg:       #FFFFFF;            /* sfondo principale */
  --color-surface:  #F0F2F7;            /* sfondo card / sezioni alternate */

  --color-text:  #111827;               /* testo principale */
  --color-muted: #4B5563;               /* testo secondario */
  --color-faint: #9CA3AF;               /* testo terziario / placeholder */

  --color-accent: [PLACEHOLDER];        /* colore brand principale */

  --color-border:       rgba(17,24,39,0.12);
  --color-border-hover: rgba(17,24,39,0.22);

  --color-white: #FFFFFF;
}
```

**[PLACEHOLDER PALETTE]**: La palette sarà definita quando verranno fornite le foto e il branding di Alessandro Federico. Servono:
- **Accent primario**: colore dominante del brand (usato per Navbar, Footer, icone, bottoni CTA solid)
- **Accent secondario** (opzionale): per CTA section intermedie o hover
- **Gradiente hero/footer**: `linear-gradient(135deg, [primario], [secondario])` — coerente con Navbar e Footer
- **Colore CTA intermedio**: una tinta chiara del brand per sezioni di separazione (es. `#E8EDF5` nel progetto Cicalese)

> **REGOLA**: tutti i colori hardcoded nel CSS devono usare i valori `rgba()` coerenti col brand. Non usare mai `blue-600` o simili di Tailwind — tutto custom.

### 3.3 Classi e pattern ricorrenti

| Pattern | Dove | Cosa fa |
|---|---|---|
| `SectionLabel` | Inizio di ogni sezione | Trattino corto (`w-3 h-px`) + testo uppercase `text-xs tracking-[0.15em]` |
| `FadeIn` | Ovunque | Wrapper `motion.div` che anima `opacity: 0→1, y: 16→0` al scroll |
| `TextReveal` | Titoli h1/h2 | Reveal parola per parola con stagger 0.03s |
| `PageTransition` | Wrapper `<main>` di ogni pagina | Fade + slide up all'ingresso pagina |
| `SpotlightCard` | Card servizi homepage | Spotlight radiale che segue il mouse |
| `CTAButton` | Ovunque servano CTA | 3 varianti: `normal` (bordo), `inverted` (bianco su scuro), `solid` (pieno) |
| `Divider` | Tra sezioni | Linea orizzontale con sfumatura laterale |

### 3.4 Navbar

- **Sempre fissa** (`fixed top-0 z-50`)
- **Sfondo**: gradiente del brand (identico al footer)
- **Testo**: bianco con opacità variabile (`text-white/60` inattivo, `text-white` attivo/hover)
- **Mobile**: hamburger a 2 linee animate (X quando aperto), pannello slide-down con `AnimatePresence`
- **Barra di progresso**: `motion.div` con `scaleX` legato a `scrollYProgress`
- **Active state**: `usePathname()` confronta il path corrente per evidenziare il link attivo

### 3.5 Footer

- **Sfondo**: stesso gradiente del Navbar
- **3 colonne**: Info principali (nome, tel, email) | Studio (indirizzo) | Orari
- **Separatore**: `h-px bg-white/10`
- **Bottom**: copyright + P.IVA + link Privacy/Cookie
- **Testi**: `text-white` per titoli, `text-white/60` per contenuti, `text-white/25` per micro-testi

### 3.6 Hero homepage

- `min-h-[85vh]` con parallax (titolo si sposta con lo scroll)
- Trattino animato (`width: 0 → 20`) + sottotitolo in uppercase
- Nome grande in `font-heading` con `TextReveal`
- Descrizione breve + bottone CTA `solid`
- Linea verticale animata in basso al centro

### 3.7 Icone Hero per pagine interne

Ogni pagina interna ha un'icona Lucide decorativa a **destra** del titolo hero:
- Contenitore: `w-14 h-14 md:w-20 md:h-20 rounded-xl` con gradiente brand e ombra
- Icona: `strokeWidth={1.2}`, bianca
- Posizionata con `flex items-center justify-between` nel wrapper hero

### 3.8 Carousel Recensioni

- **Auto-scroll**: ogni 5.5 secondi
- **Swipe mobile**: touch start/end con threshold 50px
- **Navigazione**: dots interattivi in basso
- **Card**: ognuna con sfondo azzurro/brand diverso (niente bianco puro per distinguerle dallo sfondo)
- **Virgolette**: apertura grande decorativa + chiusura piccola inline
- **Layout**: `overflow-hidden` + `AnimatePresence mode="wait"` con animazione slide orizzontale
- **NO posizionamento assoluto**: le card hanno altezza naturale per evitare overflow su mobile

### 3.9 Form Contatto

- Input con `rounded-md`, bordi sottili, shadow al focus con colore brand
- Select con icona chevron custom SVG
- Pre-selezione area via URL query param (`useSearchParams`) con whitelist di valori
- Bottone submit centrato (`flex justify-center`)
- Stato di successo con messaggio elegante
- GDPR disclaimer in `text-xs`

### 3.10 Invio Email (Server Action)

- File: `app/actions/contact.ts` con `"use server"`
- Usa **Resend SDK** per l'invio
- Template HTML inline con stile Georgia serif
- Validazione server-side (campi obbligatori + regex email)
- `replyTo` impostato sull'email del mittente

### 3.11 SEO

- **Metadata**: ogni pagina ha `metadata` tipizzato con `title`, `description`, `alternates.canonical`, `openGraph`
- **Structured Data**: JSON-LD in `structured-data.tsx` — Schema.org `MedicalBusiness` (adattare da `LegalService`), `Person`, `WebSite`
- **Favicon**: generato dinamicamente con `ImageResponse` (iniziali su sfondo brand)

### 3.12 Regole operative

1. **MAI commit/push senza autorizzazione esplicita dell'utente**
2. Usare `git add -A; git commit -m "messaggio"; git push` (con `;` su PowerShell, non `&&`)
3. Prima di un deploy verificare con `npx next build` che non ci siano errori
4. I file `.env.local` non vanno mai committati
5. Rispondere sempre in italiano

---

## 4. STRUTTURA PAGINE — ALESSANDRO FEDERICO

### Navigazione

```typescript
navLinks: [
  { label: "Chi Sono",       href: "/chi-sono" },
  { label: "Specialità",     href: "/specialita" },
  { label: "Prima e Dopo",   href: "/prima-e-dopo" },
  { label: "Recensioni",     href: "/recensioni" },
  { label: "Skin",           href: "/skin" },
  { label: "Prenota",        href: "/prenota" },
  { label: "Contatti",       href: "/contatti" },
]
```

### 4.1 HOME (`app/page.tsx`)

- **Hero**: foto grande del Dr. Federico (fornita dall'utente), nome in heading serif, sottotitolo "Dermatologo · Medicina Estetica", CTA "Prenota una visita"
- **Sezione Specialità** (griglia card): card cliccabili per Dermatologia e Medicina Estetica con icone Lucide
- **Sezione Recensioni** (anteprima): 1-2 testimonianze con link a `/recensioni`
- **CTA Section**: sfondo brand scuro con titolo e CTA "Prenota"

### 4.2 CONOSCI IL DOTTORE (`app/chi-sono/page.tsx`)

Struttura a blocchi scrollabili:

1. **Hero**: foto + bio del Dr. Federico (layout 2 colonne: foto sx, testo dx)
2. **L'approccio integrato**: paragrafo descrittivo
3. **Stay Young**: concept/filosofia
4. **Il mio concept**: visione professionale
5. **Scarica il CV**: link a PDF scaricabile

> Icona hero: `Stethoscope` o `UserRound`

### 4.3 SPECIALITÀ (`app/specialita/page.tsx`)

Due macro-aree, ognuna con sotto-servizi espandibili:

**Dermatologia**
- Dermatologia Clinica
- Malattie Sessualmente Trasmesse
- Tricologia
- Dermatoscopia
- Terapia Fisica

**Medicina Estetica**
- Filler
- Biolifting
- Tossina Botulinica
- Peeling
- Mesoterapia Lipolitica e Tricologica

> Layout: come la pagina `/servizi` di Cicalese ma con 2 macro-sezioni. Ogni sotto-servizio ha titolo, descrizione estesa, lista punti con pallini tondi.
> Icona hero: `Activity` o `Sparkles`

### 4.4 PRIMA E DOPO (`app/prima-e-dopo/page.tsx`)

- Gallery fotografica con confronti before/after
- Slider interattivo (immagine divisa a metà con cursore trascinabile) o layout side-by-side
- Categorie filtrabile per tipo di trattamento
- **[PLACEHOLDER: le foto saranno fornite dall'utente]**

> Icona hero: `Images` o `ArrowLeftRight`

### 4.5 RECENSIONI (`app/recensioni/page.tsx`)

- Stessa struttura di Cicalese: carousel auto-scroll + swipe
- Card con sfondo azzurro/brand alternato (mai bianco puro)
- Virgolette decorative apertura/chiusura
- Nome, città, tipo di trattamento in uppercase piccolo

> Icona hero: `MessageSquareQuote`

### 4.6 SKIN — Blog (`app/skin/page.tsx`)

- Lista articoli con card: immagine, titolo, data, estratto
- Pagine individuali: `app/skin/[slug]/page.tsx`
- Contenuti in MDX o dati strutturati in `/data/blog.ts`
- Design card: sfondo `surface`, bordo sottile, hover con shadow

> Icona hero: `BookOpen` o `Newspaper`

### 4.7 PRENOTA (`app/prenota/page.tsx`)

- Integrazione con sistema di prenotazione esterno (Doctolib, MioDottore, Calendly) tramite iframe o link diretto
- Oppure: form custom con selezione data/ora + invio email
- **[PLACEHOLDER: dipende dal sistema scelto dal cliente]**

> Icona hero: `CalendarCheck`

### 4.8 CONTATTI (`app/contatti/page.tsx`)

- Stesso pattern di Cicalese: hero + form centrato
- Form: Nome, Email, Tipo di richiesta (dropdown con specialità), Messaggio
- Sotto il form: riga con orari + tempi di risposta
- Server Action con Resend per invio email

> Icona hero: `Mail`

---

## 5. IDENTITÀ VISIVA

| Elemento | Valore |
|---|---|
| **Nome completo** | Dr. Alessandro Federico |
| **Titolo professionale** | Dermatologo · Medicina Estetica |
| **Accent primario** | `#7AAEC9` — blu acciaio soft (colore del logo) |
| **Accent scuro (Navbar/Footer)** | `#4A7D9A` |
| **Gradiente brand** | `linear-gradient(135deg, #4A7D9A, #7AAEC9)` |
| **Colore CTA intermedio** | `#EAF3F8` — tinta chiarissima del logo per sezioni di stacco |
| **Sfondo surface** | `#F4F7FA` — grigio-blu chiarissimo per card/sezioni alternate |
| **Font heading** | `DM Serif Display` — elegante, medicale, autorevole |
| **Font sans** | `DM Sans` — moderno, leggibile, professionale |
| **Telefono** | `[DA DEFINIRE]` |
| **Email** | `[DA DEFINIRE]` |
| **Indirizzo studio** | `[DA DEFINIRE]` |
| **CAP + Città** | `[DA DEFINIRE]` |
| **P.IVA** | `[DA DEFINIRE]` |
| **Dominio** | `[DA DEFINIRE]` |
| **Orari** | `[DA DEFINIRE]` |

### Asset disponibili

| Asset | Percorso nel progetto |
|---|---|
| **Logo** | `public/images/logo.png` — forme curve azzurre su sfondo bianco |
| **Foto hero homepage** | `public/images/foto-hero.png` — ritratto professionale Dr. Federico |

### Foto ancora necessarie

1. **Chi Sono**: foto in studio o in camice (da fornire)
2. **Prima e Dopo**: set di foto cliniche prima/dopo trattamenti (da fornire)
3. **Favicon**: iniziali "AF" su sfondo brand (generato dinamicamente con ImageResponse)

---

## 6. BLOCCHI DI LAVORO

Ogni blocco è autonomo. L'utente dirà "vai con il Blocco X" e l'AI realizzerà quel pezzo.

---

### BLOCCO 1 — Scaffolding del progetto

**Obiettivo**: creare il progetto Next.js da zero con tutte le dipendenze e la struttura base.

**Azioni**:
1. `npx create-next-app@latest alessandro-federico-website --typescript --tailwind --eslint --app --src-dir=no`
2. Installare dipendenze: `npm install framer-motion lenis lucide-react resend`
3. Configurare `postcss.config.mjs` con `@tailwindcss/postcss`
4. Creare la struttura cartelle come da sezione 2
5. Creare `data/siteConfig.ts` con i dati del Dr. Federico (usare placeholder dove mancano)
6. Creare `app/globals.css` con il blocco `@theme` e gli stili base (scrollbar, selection, body::before, link-hover, tap-highlight)
7. Creare `next.config.ts` con `images: { qualities: [75, 90] }`
8. Creare `.env.local` con `RESEND_API_KEY=placeholder`

**Output atteso**: progetto avviabile con `npm run dev`, pagina bianca, nessun errore.

---

### BLOCCO 2 — Componenti UI base

**Obiettivo**: creare tutti i componenti riutilizzabili.

**Azioni**:
1. `components/ui/FadeIn.tsx` — animazione fade-in on scroll (`useInView`, `margin: "-60px"`, `once: true`)
2. `components/ui/TextReveal.tsx` — reveal parola per parola con stagger
3. `components/ui/SectionLabel.tsx` — trattino corto `w-3 h-px` + testo uppercase
4. `components/ui/CTAButton.tsx` — 3 varianti (normal, inverted, solid) con hover/active states
5. `components/ui/SpotlightCard.tsx` — spotlight radiale che segue il mouse
6. `components/ui/Divider.tsx` — linea sfumata orizzontale
7. `components/providers/PageTransition.tsx` — wrapper fade+slide
8. `components/providers/SmoothScroll.tsx` — Lenis integration

**Output atteso**: tutti i componenti importabili, nessun errore TypeScript.

---

### BLOCCO 3 — Layout (Navbar + Footer)

**Obiettivo**: creare header fisso e footer, wrappati nel root layout.

**Azioni**:
1. `components/layout/Navbar.tsx`:
   - Sfondo gradiente brand, testo bianco
   - Logo/nome a sinistra, nav links a destra (desktop)
   - Hamburger animato + pannello slide-down (mobile)
   - Active state con `usePathname()`
   - Barra progresso scroll
2. `components/layout/Footer.tsx`:
   - 3 colonne: contatto, studio, orari
   - Stesso gradiente del Navbar
   - Link privacy/cookie
3. `app/layout.tsx`:
   - Caricare font, wrappare con `Navbar`, `SmoothScroll`, `Footer`
   - Metadata base con titolo/description

**Output atteso**: header e footer visibili su tutte le pagine, navigazione funzionante.

---

### BLOCCO 4 — Homepage

**Obiettivo**: creare la pagina principale con Hero, sezione Specialità e CTA.

**Azioni**:
1. `components/sections/Hero.tsx`:
   - Foto hero a sinistra o full-width con overlay
   - Nome "Alessandro Federico" in heading serif con TextReveal
   - Sottotitolo + CTA "Prenota una visita"
   - Parallax scroll sul titolo
2. `components/sections/Servizi.tsx` (adattato per specialità):
   - Griglia 2 colonne con card cliccabili (Dermatologia, Medicina Estetica)
   - Icone Lucide in container con gradiente brand
   - Link a `/specialita#sezione`
3. `components/sections/CTASection.tsx`:
   - Sfondo gradiente brand scuro
   - Titolo + descrizione + CTAButton inverted
4. `app/page.tsx`:
   - Composizione: Hero → Servizi → CTASection

**Output atteso**: homepage completa e navigabile.

---

### BLOCCO 5 — Pagina Specialità

**Obiettivo**: creare la pagina dettagliata delle specialità.

**Azioni**:
1. `data/servizi.ts`:
   - Array con 2 macro-aree (Dermatologia, Medicina Estetica)
   - Ogni macro-area con sotto-servizi (id, titolo, descrizione, punti)
2. `app/specialita/page.tsx`:
   - Hero con icona a destra
   - Sezioni per ogni sotto-servizio con layout alternato (testo sx/dx)
   - Pallini tondi per le liste, CTA per ogni servizio
   - Scroll-to con anchor ID

**Output atteso**: pagina specialità completa con tutti i servizi elencati.

---

### BLOCCO 6 — Pagina Chi Sono

**Obiettivo**: creare la pagina biografia del Dr. Federico.

**Azioni**:
1. `app/chi-sono/page.tsx`:
   - Hero: foto + bio (2 colonne)
   - Sezione "L'approccio integrato"
   - Sezione "Stay Young"
   - Sezione "Il mio concept"
   - Link "Scarica il CV" (PDF in `/public`)
   - Icona hero a destra del testo

**Output atteso**: pagina Chi Sono completa con tutte le sotto-sezioni.

---

### BLOCCO 7 — Pagina Recensioni

**Obiettivo**: creare la pagina testimonianze con carousel.

**Azioni**:
1. `data/testimonianze.ts`:
   - 6-8 recensioni credibili (nomi realistici, città varie, tipo trattamento in uppercase)
2. `components/sections/RecensioniCarousel.tsx`:
   - Auto-scroll 5.5s + swipe manuale
   - Card con sfondo tintato alternato (no bianco)
   - Virgolette decorative + chiusura inline
   - Dots navigazione
3. `app/recensioni/page.tsx`:
   - Hero con icona `MessageSquareQuote`
   - Carousel
   - CTA finale

**Output atteso**: pagina recensioni con carousel funzionante su desktop e mobile.

---

### BLOCCO 8 — Pagina Prima e Dopo

**Obiettivo**: creare la gallery prima/dopo.

**Azioni**:
1. Componente comparatore before/after (slider o side-by-side)
2. Griglia filtrabile per tipo di trattamento
3. `app/prima-e-dopo/page.tsx`:
   - Hero con icona
   - Gallery
   - CTA
4. **[PLACEHOLDER: le foto verranno fornite successivamente]**

**Output atteso**: struttura pagina pronta, con placeholder per le immagini.

---

### BLOCCO 9 — Pagina Contatti + Server Action

**Obiettivo**: creare form di contatto funzionante.

**Azioni**:
1. `components/ui/ContactForm.tsx`:
   - Campi: Nome, Email, Tipo richiesta (Dermatologia / Medicina Estetica / Altro), Messaggio
   - Pre-selezione area via URL param
   - `useSearchParams` + `Suspense`
   - Validazione + stati (idle, pending, success, error)
2. `app/actions/contact.ts`:
   - Server Action con Resend
   - Template email HTML elegante
3. `app/contatti/page.tsx`:
   - Hero con icona `Mail`
   - Form centrato (`max-w-2xl`)
   - Riga orari sotto il form

**Output atteso**: form funzionante che invia email.

---

### BLOCCO 10 — Pagina Prenota

**Obiettivo**: integrare sistema di prenotazione.

**Azioni**:
1. Definire la piattaforma (Doctolib / MioDottore / Calendly / custom)
2. `app/prenota/page.tsx`:
   - Hero con icona `CalendarCheck`
   - Embed o redirect alla piattaforma scelta
3. **[PLACEHOLDER: dipende dalla scelta del cliente]**

**Output atteso**: pagina prenotazione funzionante.

---

### BLOCCO 11 — Blog Skin

**Obiettivo**: creare la sezione blog.

**Azioni**:
1. `data/blog.ts` o directory MDX
2. `app/skin/page.tsx`: lista articoli con card
3. `app/skin/[slug]/page.tsx`: pagina singolo articolo
4. Layout articolo: titolo, data, immagine hero, corpo testo, CTA finale

**Output atteso**: blog con almeno 1-2 articoli placeholder.

---

### BLOCCO 12 — SEO + Favicon + Metadata

**Obiettivo**: ottimizzare per i motori di ricerca.

**Azioni**:
1. `app/structured-data.tsx`: JSON-LD `MedicalBusiness`, `Person`, `WebSite`
2. `app/icon.tsx` e `app/apple-icon.tsx`: iniziali "AF" su sfondo brand
3. Metadata completa su ogni pagina (title, description, canonical, openGraph)
4. `robots.txt` e `sitemap.xml` (opzionali, generabili da Next.js)

**Output atteso**: SEO completa, favicon visibile.

---

### BLOCCO 13 — Polish finale

**Obiettivo**: rifinitura estetica e performance.

**Azioni**:
1. Verificare coerenza colori su tutte le pagine
2. Testare responsive (mobile, tablet, desktop)
3. Ottimizzare immagini (quality 75/90, lazy loading)
4. Verificare accessibilità (aria-label, alt text, contrast ratio)
5. Testare carousel su mobile (swipe + auto-scroll)
6. `npx next build` senza errori
7. Configurare dominio e variabili d'ambiente su Vercel

**Output atteso**: sito pronto per il lancio.

---

## 7. NOTE PER L'AI

1. **Lingua**: rispondi sempre in italiano
2. **Commit**: MAI fare commit/push senza autorizzazione esplicita
3. **Shell PowerShell**: usare `;` come separatore comandi (non `&&`)
4. **Stile codice**: niente commenti ovvi, codice pulito e tipizzato
5. **Animazioni**: usare sempre `cubic-bezier(0.22, 1, 0.36, 1)` come easing principale
6. **Colori**: mai usare preset Tailwind (blue-600 ecc.), solo valori custom coerenti col brand
7. **Mobile first**: testare sempre la resa mobile, il carousel NON deve sovrapporre il testo
8. **Dimensione icone hero**: contenute (`w-14 h-14 md:w-20 md:h-20`), mai troppo grandi
9. **SectionLabel**: trattino corto (`w-3 h-px`), mai troppo lungo o invasivo
10. **Recensioni**: ogni card con sfondo colorato diverso, mai bianco puro
