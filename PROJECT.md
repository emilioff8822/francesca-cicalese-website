# Avv. Francesca Cicalese â€” Vademecum del Progetto

> Questo file Ã¨ il riferimento centrale del progetto. Va aggiornato ad ogni step completato.
> Ultima modifica: Step 1 â€” Setup base completato âœ…

---

## ðŸŽ¯ Obiettivo

Sito vetrina professionale per **Avv. Francesca Cicalese**, avvocatessa con studio a Roma (Prati â€” Via Sabotino, 00195).
Sito **interamente statico** (no backend, no database). Tutti i contenuti sono hardcoded in file TypeScript dentro `/data`.

- Dominio target: **francescacicalese.it** *(da acquistare â€” istruzioni in fondo)*
- Deploy: **Vercel** *(collegato al repo GitHub)*
- Lingua: **100% italiano** â€” testi, meta tag, aria-label, placeholder, tutto

---

## ðŸ“‹ Piano degli Step â€” Stato Avanzamento

| # | Step | Stato | Note |
|---|---|---|---|
| **1** | Setup base: font, colori, file data, layout root | âœ… Completato | â€” |
| **2** | Navbar + Footer | âœ… Completato | â€” |
| **3** | Homepage â€” Hero section | â¬œ Da fare | Prima impressione, massimo impatto |
| **4** | Homepage â€” Chi Sono preview + Servizi | â¬œ Da fare | Sezioni centrali homepage |
| **5** | Homepage â€” Testimonianze + CTA finale | â¬œ Da fare | Completa la homepage |
| **6** | Pagina `/chi-sono` | â¬œ Da fare | Bio completa |
| **7** | Pagina `/servizi` | â¬œ Da fare | 4 aree di pratica dettagliate |
| **8** | Pagina `/recensioni` | â¬œ Da fare | Tutte le testimonianze |
| **9** | Pagina `/contatti` + form funzionante | â¬œ Da fare | Form + info studio |
| **10** | SEO completo + animazioni Framer Motion + Deploy | â¬œ Da fare | Sito online! |

**Legenda:** â¬œ Da fare Â· ðŸ”„ In corso Â· âœ… Completato

---

## ðŸŽ¨ Visione Estetica â€” Guida Completa

### Sito di riferimento: premingerlaw.com

Il DNA visivo viene da [premingerlaw.com](https://premingerlaw.com):
- Sezioni full-width, ogni sezione un unico focus
- Tipografia enorme e coraggiosa â€” titoli che occupano spazio
- Navigazione semplicissima, CTA sempre visibile
- Tantissimo respiro tra gli elementi

### Come adattiamo per Francesca Cicalese â€” DARK EDITION

Stesso DNA strutturale, ma il sito Ã¨ **fondamentalmente scuro**:
- Sfondo **nero** `#0D0D0D` come base di tutto il sito â€” mai sfondo bianco o chiaro
- **Oro/Champagne** `#C9A96E` come unico colore accento â€” lusso sobrio su nero
- **Cormorant Garamond** per i titoli â€” eleganza e autorevolezza
- **Simboli della giustizia** eleganti: icone SVG outline (bilancia stilizzata, colonne), mai clipart
- **Mobile-first**: ogni componente viene progettato prima per telefono, poi adattato al desktop
- **Animazioni Framer Motion**: fade-in dal basso on scroll, hover con glow oro, transizioni fluide

### âš ï¸ Regola assoluta di design
> **Mai sfondo chiaro come sfondo principale.**
> Le sezioni alternate usano `#1A1A1A`, non bianco.
> Il bianco appare solo per testo su sfondo scuro, mai come sfondo.

### Palette Colori â€” OBSIDIAN + ZAFFIRO ELETTRICO

L'oro era la scorciatoia pigra. Eliminato.
Ispirazione: orologi IWC, Quinn Emanuel, architettura istituzionale romana.
L'accento zaffiro viene usato con **estrema parsimonia** â€” solo dove guida la visione.

| Nome | Hex | Uso specifico |
|---|---|---|
| Background | `#070B14` | Sfondo principale â€” obsidian con anima blu |
| Surface | `#0F1624` | Card, sezioni alternate â€” navy profondo |
| Surface alto | `#1A2535` | Navbar, elementi elevati |
| Bordo | `#243348` | Linee di separazione, bordi sottili |
| Testo primario | `#F2F5FF` | Titoli e testi â€” bianco lunare freddo |
| Testo muted | `#6A8CAE` | Sottotitoli, didascalie, testi secondari |
| Zaffiro (accento) | `#4D8EF0` | CTA, hover, linee di enfasi â€” usato raramente |
| Zaffiro chiaro | `#7AAAF5` | Hover state |
| Zaffiro scuro | `#3670D0` | Active / pressed |
| Bianco puro | `#FFFFFF` | Solo su sfondi accent |

**NO** oro. **NO** custom cursor. Minimalismo assoluto.

### Foto di Francesca (disponibili in /public/images)
- `francesca-toga.png` â€” in toga nella Corte di Cassazione â†’ uso in Hero / Chi Sono (immagine principale)
- `francesca-esterno.png` â€” fuori in toga con statua classica â†’ uso in Chi Sono (immagine secondaria)

### Tipografia

| Font | Tipo | Pesi | Uso |
|---|---|---|---|
| **Cormorant Garamond** | Serif | 400, 500, 600, 700 | Tutti i titoli H1â€“H3, quote decorative, nome nelle hero |
| **Inter** | Sans-serif | 300, 400, 500, 600 | Body text, bottoni, navigazione, label form |

**Scala tipografica:**
- H1 hero: `text-6xl` / `text-8xl` su desktop â€” grandissimo, coraggioso
- H2 sezioni: `text-4xl` / `text-5xl` â€” ancora imponente
- Body: `text-base` / `text-lg` â€” leggibile, mai minuscolo
- Sottotitoli: `text-sm uppercase tracking-widest` â€” distanziato, elegante

### Spaziatura

- Padding verticale sezioni: `py-24` minimo, `py-32` per le sezioni principali
- Tra elementi: `gap-8`, `gap-12`, `gap-16` â€” mai `gap-2` o `gap-4` per elementi visivi
- Container: `max-w-6xl mx-auto px-6` o `px-8`
- **Regola d'oro**: se sembra troppo stretto, aggiungi spazio. Il sito deve respirare.

### Animazioni (Framer Motion)

| Animazione | Dove | Come |
|---|---|---|
| Fade-in dal basso | Ogni sezione al primo scroll | `opacity: 0â†’1`, `y: 40â†’0`, durata 0.6s |
| Rivelazione titolo | H1 hero | Parola per parola, con stagger 0.1s |
| Hover bottoni | Tutti i bottoni CTA | `scale: 1.03`, cambio colore sfondo |
| Hover cards servizi | Cards nella sezione servizi | `y: -4`, leggera ombra |
| Parallax leggero | Immagine hero | Scorrimento leggermente piÃ¹ lento del testo |
| Linea sottostante nav | Link di navigazione | Linea oro che appare/scorre da sx a dx |

---

## ðŸ—ï¸ Struttura delle Pagine â€” Dettaglio Visivo

### `/` â€” Homepage

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  NAVBAR                             â”‚
â”‚  Logo (sx) | Nav links (centro) | CTA (dx, oro) â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  HERO â€” sfondo bianco caldo         â”‚
â”‚  [testo sx]      [foto placeholder dx] â”‚
â”‚  "Avv. Francesca Cicalese"          â”‚
â”‚  "Avvocato - Studio Legale Roma"    â”‚
â”‚  [CTA bottone oro]                  â”‚
â”‚  Decorazione: linea sottile oro a sx â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  CHI SONO preview â€” sfondo bianco   â”‚
â”‚  Colonna sx: testo intro 4 righe    â”‚
â”‚  Colonna dx: numero/stats (es. "10+ anni di esperienza") â”‚
â”‚  Link "Scopri di piÃ¹ â†’" in oro      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  SERVIZI â€” sfondo grigio #F5F5F5    â”‚
â”‚  Titolo centrato                    â”‚
â”‚  4 cards in griglia 2x2 (mobile 1 col) â”‚
â”‚  Ogni card: icona outline, titolo, testo â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  TESTIMONIANZE â€” sfondo bianco      â”‚
â”‚  Virgolette decorative grandi (oro) â”‚
â”‚  3 testimonianze in carosello/griglia â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  CTA FINALE â€” sfondo #1A1A1A scuro  â”‚
â”‚  Testo bianco + oro                 â”‚
â”‚  Bottone grande con bordo oro       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  FOOTER â€” sfondo #1A1A1A            â”‚
â”‚  Logo | Link | Contatti | Credits   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### `/chi-sono`
- Hero con foto grande a sinistra e testo a destra
- Timeline formazione (UniversitÃ , abilitazione, esperienze)
- Sezione valori (3 punti: ProfessionalitÃ , Empatia, Risultati)
- CTA finale per contattarla

### `/servizi`
- Hero titolo centrato
- 4 sezioni alternate (immagine sx/dx) per ogni area di pratica
- Ogni area: titolo, descrizione lunga, lista punti, CTA

### `/recensioni`
- Hero titolo centrato
- Griglia testimonianze (2 colonne desktop, 1 mobile)
- Ogni card: citazione, nome cliente, cittÃ 
- CTA finale

### `/contatti`
- Split layout: form a sinistra, info a destra
- Form: Nome, Email, Telefono (opzionale), Messaggio, Invia
- Info: indirizzo, telefono, email, orari
- Nota GDPR sotto il form

---

## ðŸ› ï¸ Stack Tecnico

| Tecnologia | Versione | Note |
|---|---|---|
| Next.js | 15 â€” App Router | GiÃ  installato |
| TypeScript | ^5 | GiÃ  installato |
| Tailwind CSS | ^4 | GiÃ  installato |
| Framer Motion | da installare allo Step 1 | Animazioni |
| next/font/google | incluso in Next.js | Font ottimizzati |
| Form | Resend (Server Actions) | Installare allo Step 9 |

**Dipendenze da installare:**
```bash
npm install framer-motion        # Step 1
npm install resend               # Step 9
```

---

## ðŸ“ Struttura Cartelle Target

```
/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ layout.tsx              # Layout root: font, lang="it", metadata, Navbar, Footer
â”‚   â”œâ”€â”€ page.tsx                # Homepage (assembla le sezioni)
â”‚   â”œâ”€â”€ globals.css             # Stili globali, variabili CSS
â”‚   â”œâ”€â”€ chi-sono/
â”‚   â”‚   â””â”€â”€ page.tsx
â”‚   â”œâ”€â”€ servizi/
â”‚   â”‚   â””â”€â”€ page.tsx
â”‚   â”œâ”€â”€ recensioni/
â”‚   â”‚   â””â”€â”€ page.tsx
â”‚   â”œâ”€â”€ contatti/
â”‚   â”‚   â””â”€â”€ page.tsx
â”‚   â”œâ”€â”€ sitemap.ts              # Sitemap XML automatica (Step 10)
â”‚   â””â”€â”€ robots.ts               # robots.txt (Step 10)
â”‚
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ layout/
â”‚   â”‚   â”œâ”€â”€ Navbar.tsx          # "use client" (menu mobile)
â”‚   â”‚   â””â”€â”€ Footer.tsx          # Server Component
â”‚   â”œâ”€â”€ ui/                     # Componenti riutilizzabili
â”‚   â”‚   â”œâ”€â”€ Button.tsx
â”‚   â”‚   â”œâ”€â”€ SectionTitle.tsx
â”‚   â”‚   â””â”€â”€ AnimatedSection.tsx # Wrapper Framer Motion per fade-in
â”‚   â””â”€â”€ sections/               # Sezioni della homepage
â”‚       â”œâ”€â”€ Hero.tsx
â”‚       â”œâ”€â”€ ChiSonoPreview.tsx
â”‚       â”œâ”€â”€ Servizi.tsx
â”‚       â”œâ”€â”€ Testimonianze.tsx
â”‚       â””â”€â”€ CtaFinale.tsx
â”‚
â”œâ”€â”€ data/                       # Contenuti hardcoded
â”‚   â”œâ”€â”€ siteConfig.ts           # Nome, contatti, P.IVA, descrizione SEO
â”‚   â”œâ”€â”€ servizi.ts              # Array 4 servizi
â”‚   â””â”€â”€ testimonianze.ts        # Array testimonianze
â”‚
â”œâ”€â”€ lib/
â”‚   â””â”€â”€ utils.ts                # Helper functions
â”‚
â””â”€â”€ public/
    â””â”€â”€ images/                 # Foto e immagini (da aggiungere)
```

---

## ðŸ§  Next.js vs React â€” Concetti Chiave

Conosci React, quindi partiamo da lÃ¬. Ecco le differenze pratiche che incontrerai:

### Routing
- **React (Vite/CRA)**: usi React Router, definisci le route in un file centrale
- **Next.js App Router**: ogni **cartella** dentro `/app` Ã¨ una route. Metti un file `page.tsx` dentro e quella cartella diventa una pagina. Zero configurazione.
  ```
  /app/page.tsx          â†’ francescacicalese.it/
  /app/chi-sono/page.tsx â†’ francescacicalese.it/chi-sono
  ```

### Server vs Client Components
- **React**: tutti i componenti girano nel browser
- **Next.js**: di default i componenti girano sul **server** (piÃ¹ veloci, migliori per SEO). Scrivi `"use client"` in cima al file solo quando hai bisogno di:
  - `useState`, `useEffect`, `useRef` (stato e ciclo di vita)
  - Animazioni Framer Motion
  - Event listener (`onClick` interattivo, form)
  - Menu mobile che si apre/chiude

### `layout.tsx`
- Ãˆ il tuo `App.tsx`, ma piÃ¹ potente
- Wrappa tutte le pagine automaticamente
- LÃ¬ metti Navbar, Footer, font, metadati base

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

## ðŸš€ Guida al Deploy â€” Quando Saremo Pronti

### Fase 1 â€” Deploy su Vercel (senza dominio)
1. Vai su [vercel.com](https://vercel.com) e accedi con GitHub
2. Clicca "New Project" â†’ seleziona `francesca-cicalese-website`
3. Vercel rileva automaticamente Next.js â€” clicca "Deploy"
4. In 2 minuti il sito Ã¨ online su un URL tipo `francesca-cicalese-website.vercel.app`
5. Da lÃ¬ in poi, ogni push su GitHub aggiorna automaticamente il sito

### Fase 2 â€” Acquisto dominio
**Dove comprare:** [Namecheap](https://namecheap.com) o [Aruba](https://aruba.it) (italiano, piÃ¹ semplice per p.iva italiana)
- Cerca `francescacicalese.it`
- Costo: ~10-15â‚¬/anno per un `.it`
- Aruba permette anche di gestire la PEC se necessaria

### Fase 3 â€” Collegare dominio a Vercel
1. In Vercel â†’ progetto â†’ Settings â†’ Domains
2. Aggiungi `francescacicalese.it`
3. Vercel ti dÃ  dei record DNS da copiare
4. Vai sul pannello del tuo registrar (Namecheap/Aruba) â†’ DNS
5. Incolla i record che ti ha dato Vercel
6. Aspetta 5-30 minuti â€” il dominio Ã¨ attivo
7. HTTPS automatico incluso (Vercel gestisce il certificato SSL)

### Fase 4 â€” Variabili d'ambiente (per il form)
Quando aggiungeremo Resend per il form contatti:
1. In Vercel â†’ progetto â†’ Settings â†’ Environment Variables
2. Aggiungi `RESEND_API_KEY` con la tua chiave API
3. Non mettere MAI le chiavi API nel codice

---

## ðŸ“Š SEO â€” Checklist

- [ ] `export const metadata` con title + description su ogni pagina
- [ ] `/app/sitemap.ts` â€” sitemap XML automatica
- [ ] `/app/robots.ts` â€” robots.txt
- [ ] JSON-LD Schema.org (`Attorney` / `LegalService`) in homepage
- [ ] Tag HTML semantici (`header`, `main`, `section`, `article`, `nav`, `footer`)
- [ ] Tutte le immagini con `next/Image` + `alt` descrittivi in italiano
- [ ] Open Graph meta per condivisione social (Facebook, WhatsApp)
- [ ] `<html lang="it">` nel layout root
- [ ] Target: **Lighthouse 95+** su tutte le metriche

---

## ðŸ“ Dati del Progetto

```
Nome:      Avv. Francesca Cicalese
Studio:    Roma (Via Sabotino, 00195)
Telefono:  [DA INSERIRE]
Email:     [DA INSERIRE]
Indirizzo: [DA INSERIRE]
P.IVA:     [DA INSERIRE]
Dominio:   francescacicalese.it (da acquistare)
```

---

## âœ… Log delle sessioni di lavoro

| Data | Step | Cosa Ã¨ stato fatto |
|---|---|---|
| 17/03/2026 | Step 0 | Creato PROJECT.md, pianificazione completa |
| 17/03/2026 | Step 1 | Installato framer-motion, configurati font e colori Tailwind v4, creati file /data, aggiornato layout.tsx (lang=it, metadata), pulito page.tsx |
| 17/03/2026 | Step 2 | Creati Navbar.tsx (use client, menu mobile, hamburger animato, scroll behavior) e Footer.tsx (Server Component, 3 colonne, linea oro) |

---

## ðŸ”‘ Regole di Lavoro

- Un step alla volta â€” si testa con `npm run dev` prima di andare avanti
- Se qualcosa non piace (grafica, testo, colore) si corregge subito, nello stesso step
- Nessuna dipendenza installata senza conferma
- Codice pulito, zero commenti inutili
- Componenti piccoli e riutilizzabili â€” mai file enormi

