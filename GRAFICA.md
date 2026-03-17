# GRAFICA.md — Design System & Visual Architecture (v3)

> Ultimo aggiornamento: 17 marzo 2026
> Stato: Homepage completa — upgrade "Awwwards-level" implementato

---

## 1. Filosofia di Design

Luxury minimal con influenze editoriali e cinematografiche.
Il sito deve sentirsi come un'esperienza, non un depliant.
Ogni scroll rivela qualcosa, ogni interazione ha peso.

Ispirazione: Linear.app, Stripe, Bottega Veneta digital, conductlaw.com.

---

## 2. Palette Colori — Obsidian + Sapphire

| Token               | Hex / Valore              | Uso                          |
|----------------------|---------------------------|------------------------------|
| `--color-bg`         | `#08090D`                 | Sfondo principale            |
| `--color-surface`    | `#10131A`                 | Card, sezione CTA            |
| `--color-elevated`   | `#181C26`                 | Elementi elevati (riservato) |
| `--color-text`       | `#E8ECF4`                 | Testo primario               |
| `--color-muted`      | `#7A8499`                 | Testo secondario, label      |
| `--color-faint`      | `#4A5568`                 | Numeri decorativi, terziario |
| `--color-accent`     | `#5B8DEF`                 | Accent — linee, CTA, hover   |
| `--color-accent-light` | `#7AAAF5`              | Accent chiaro (riservato)    |
| `--color-border`     | `rgba(255,255,255,0.06)`  | Bordi default                |
| `--color-border-hover` | `rgba(255,255,255,0.12)` | Bordi al hover               |

Atmosfera: gradiente radiale fisso `radial-gradient(ellipse at 70% 0%, rgba(91,141,239,0.04), transparent 60%)` come sfondo su body. Nessun effetto animato (aurora, noise rimossi).

---

## 3. Tipografia

| Font               | Uso                      | Peso            |
|--------------------|--------------------------|-----------------|
| Cormorant Garamond | Titoli, H1-H3, citazioni | 400, 500, 600, 700 |
| Inter              | Body, UI, label, nav     | 300, 400, 500, 600 |

Caricati via `next/font/google` con `display: "swap"` e variabili CSS `--font-cormorant`, `--font-inter`.

---

## 4. Smooth Scroll — Lenis

Lo scroll nativo è stato sostituito con **Lenis** (`npm install lenis`):
- `lerp: 0.1` — interpolazione morbida
- `duration: 1.2` — durata del momentum
- `smoothWheel: true` — scroll con mousewheel fluido

L'effetto: lo scroll dell'intera pagina è "buttery smooth" come nei siti Awwwards.
`html { scroll-behavior: auto !important }` disabilita lo smooth nativo (Lenis gestisce tutto).

Lenis wrappa `{children}` e `Footer` in `layout.tsx`. La `Navbar` resta fuori (fixed, non deve scrollare).

---

## 5. Componenti Animati

### 5A. TextReveal (`components/ui/TextReveal.tsx`)
**L'effetto signature del sito.** Il testo si rivela parola per parola:
- Ogni parola è dentro un `<span>` con `overflow: hidden`
- La parola interna fa `translateY: 100% → 0%`
- Stagger di `0.03s` tra ogni parola
- Easing: `[0.215, 0.61, 0.355, 1]` (easeOutCubic)
- Durata: `0.8s` per parola
- Si attiva sullo scroll (useInView, margin: -15%)

Usato in: nome Hero ("Francesca", "Cicalese"), H2 "Chi Sono", H2 CTA "Parliamo del tuo caso."

### 5B. FadeIn (`components/ui/FadeIn.tsx`)
Fade-in verticale generico per contenuti:
- `opacity: 0 → 1`, `y: 16px → 0`
- Durata 0.6s, easing `[0.22, 1, 0.36, 1]`
- `once: true`, margin: -60px

### 5C. SpotlightCard (`components/ui/SpotlightCard.tsx`)
Effetto luce che segue il mouse sulle card:
- Traccia `onMouseMove` la posizione relativa alla card
- Renderizza un `radial-gradient(600px circle at ${x}px ${y}px, rgba(91,141,239,0.06), transparent 40%)`
- Al `mouseLeave` il gradiente sfuma in 500ms
- Ispirazione diretta: Stripe Dashboard, Linear feature cards

### 5D. PageTransition (`components/PageTransition.tsx`)
Transizione di ingresso pagina:
- `opacity: 0 → 1`, `y: 20px → 0`
- Durata 0.5s, easing custom
- Wrappa il contenuto di ogni page

---

## 6. Sezioni Homepage — Dettaglio

### 6A. Hero (`components/sections/Hero.tsx`)
**Cinematografico, non statico.** Sequenza orchestrata in timeline:
1. **0-0.6s**: Linea orizzontale accent si espande da 0 a 60px
2. **0.3-0.5s**: "Studio Legale" appare sopra (fade + translateY 8px)
3. **0.6-1.4s**: "Francesca" con TextReveal lettera per lettera, Cormorant 72px
4. **1.0-1.8s**: "Cicalese" con TextReveal, delay 1.0s
5. **2.0-2.4s**: Sottotitolo fade in
6. **2.5-2.8s**: CTAButton appare con fade + scale 0.95→1

**Parallax sullo scroll:**
- Il testo nome si muove verso l'alto (`translateY: scrollY * -0.3`)
- L'opacità sfuma da 1 a 0 nel primo 30% dello scroll
- Effetto: profondità cinematografica, il contenuto ha "peso"

**Linea verticale decorativa** (1px, accent, opacity 10%): appare dopo 3s, si estende 80px sotto l'hero. Suggerisce "scrolla" senza essere una freccia bouncing.

Layout: `min-h-[85vh]`, centrato verticalmente, `pt-16` (compensa navbar fixed).

### 6B. Chi Sono (`components/sections/ChiSono.tsx`)
Due colonne: foto (5/12) + testo (7/12).

**Immagine — clip-path reveal + scale:**
- Parte con `clipPath: "inset(100% 0 0 0)"` (nascosta dal basso)
- Si anima a `clipPath: "inset(0% 0 0 0)"` in 1.2s
- Easing: `[0.77, 0, 0.175, 1]` — l'effetto "cinematic reveal" dei siti premiati
- Contemporaneamente: `scale: 1.15 → 1.0` (zoom out morbido)
- La cornice accent sfalsata (-3px top/left) appare 0.3s DOPO l'immagine (delay 1.5s)

**Testo:** SectionLabel → H2 con TextReveal → paragrafo → link "Scopri di più" con freccia animata.

### 6C. Servizi (`components/sections/Servizi.tsx`)
Griglia 3 colonne (1 su mobile). Ogni card wrappata in `SpotlightCard`:
- Numero decorativo (01, 02, 03) in `text-faint`
- Titolo Inter, font-medium
- Linea accent 24px (opacity 40%)
- Descrizione text-sm text-muted
- Hover: bordo più visibile + translateY -1px
- Spotlight: luce radiale segue il mouse su ogni card
- Stagger FadeIn 0.1s tra le card

### 6D. Testimonianze (`components/sections/Testimonianze.tsx`)
Carousel con cambio automatico ogni 6s:
- **Transizione blur**: il testo esce con `blur(4px)` + `translateY: -20px`, entra con `blur(4px→0)` + `translateY: 20px→0`
- La virgoletta `"` decorativa "respira" (scale 0.95→1→0.95) durante le transizioni
- Dot attivi: da cerchio 6px a pillola 24px con `rounded-full`
- Reset timer su interazione manuale

### 6E. CTA (`components/sections/CTASection.tsx`)
Sfondo `bg-surface` per separazione visiva:
- H2 "Parliamo del tuo caso." con TextReveal
- **Bilancia parallax**: l'immagine bilancia.png si muove in parallax inverso (`translateY: ±30px`), ruota leggermente (`rotate: ±3deg`), e l'opacità sale da 2% a 4% quando la sezione è centrata nel viewport

---

## 7. Navbar (`components/layout/Navbar.tsx`)
- Fixed, `z-50`, `h-16`
- Trasparente → `bg-bg/80 + backdrop-blur-md` dopo 40px di scroll
- Desktop: nome a sinistra, 4 link a destra
- Mobile: hamburger (2 linee → X), panel slide down
- **Scroll progress indicator**: linea 1px `bg-accent/40` alla base della navbar, width 0→100% in base allo scroll (usa `useScroll` + `useSpring` di Framer Motion)

---

## 8. Micro-interazioni

| Elemento        | Effetto hover/active                                    |
|-----------------|--------------------------------------------------------|
| Link navbar     | Linea accent `scaleX(0→1)` da sinistra, transform-origin: left |
| CTAButton       | Border accent + fill 6% da sinistra + translateY -2px + shadow `rgba(91,141,239,0.15)` |
| CTAButton click | `scale: 0.98` per 100ms (feedback tattile)             |
| Link "Scopri"   | Freccia → si sposta 4px a destra                       |
| Footer link     | `translateX: 0→4px` in 300ms                           |
| Card servizi    | Border-hover + translateY -4px + luce spotlight mouse  |
| Dot carousel    | Da cerchio 6px a pillola 24px                          |

---

## 9. Mobile Rules
- Layout: tutto stacked, 1 colonna
- Font sizes: scalano da `text-5xl` a `text-3xl`
- Padding: `px-5` (mobile) → `px-12` (desktop)
- Cards: `p-8` su mobile, `p-10` su desktop
- Menu: panel slide down con divide-y
- Immagini: `aspect-[3/4]` su mobile

---

## 10. Immagini Disponibili

| File                    | Descrizione                                  | Usata in      |
|-------------------------|----------------------------------------------|---------------|
| `francesca-esterno.png` | Foto esterna con statua classica, Roma       | Chi Sono      |
| `francesca-toga.png`    | Foto in toga, Corte di Cassazione             | (riservata)   |
| `bilancia.png`          | Bilancia della giustizia                     | CTA (watermark parallax 2-4%) |

---

## 11. Stack Tecnico Animazioni
- **Framer Motion**: useInView, useScroll, useTransform, useSpring, AnimatePresence, motion.div
- **Lenis**: smooth scroll con momentum naturale
- **CSS**: transizioni GPU-only (transform, opacity, filter, clip-path)
- **Easing personalizzati**: `[0.22, 1, 0.36, 1]`, `[0.215, 0.61, 0.355, 1]`, `[0.77, 0, 0.175, 1]`

---

## 12. Cosa è Cambiato rispetto alla v2

| Prima (v2)                    | Ora (v3)                                     |
|-------------------------------|----------------------------------------------|
| Scroll nativo browser         | Lenis smooth scroll con momentum             |
| Testo appare con semplice FadeIn | TextReveal parola per parola                |
| Hero statico, tipografico     | Hero cinematografico con timeline orchestrata + parallax |
| Immagine Chi Sono fade-in     | Clip-path reveal + scale + cornice sfalsata  |
| Card servizi flat             | SpotlightCard con luce che segue il mouse    |
| Testimonianze fade semplice   | Transizioni con blur + virgoletta "respira"  |
| Bilancia statica 2%           | Bilancia con parallax + rotazione + opacità variabile |
| Nessun progress indicator     | Linea accent sotto navbar che segue lo scroll |
| Link hover = width animata    | Link hover = scaleX (più GPU-performante)    |
| CTAButton solo fill           | + translateY + shadow + active scale feedback |
| Footer link statici           | translateX shift al hover                    |
| Nessuna page transition       | PageTransition con fade+translateY           |

---

## 13. Domande Aperte per il Reviewer

1. **Timing dell'hero**: la sequenza dura ~3s. Troppo? Troppo poco?
2. **TextReveal vs FadeIn**: c'è il rischio di sovraccaricare il TextReveal? Al momento è su Hero, H2 Chi Sono, e H2 CTA.
3. **SpotlightCard mobile**: su touch screen non c'è hover. Le card sono comunque eleganti senza il gradiente?
4. **Lenis + Next.js navigation**: il back/forward del browser potrebbe sentirsi diverso. Monitorare.
5. **Performance**: le animazioni sono tutte GPU (transform, opacity, filter, clip-path). Nessun layout shift.
