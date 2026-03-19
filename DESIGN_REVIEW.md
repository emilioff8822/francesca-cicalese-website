# DESIGN_REVIEW.md — Stato attuale completo per revisione esterna

> Aggiornato dopo le ultime modifiche cromatiche e di interazione.
> Il sito è in sviluppo locale, non ancora pushato.

---

## 1. Chi è il cliente

**Avv. Francesca Cicalese** — avvocato penalista e civilista a Roma (zona Prati, Via Sabotino 46).
Sito vetrina professionale. Target: persone in cerca di un avvocato a Roma.
Il sito deve comunicare autorevolezza, fiducia, eleganza sobria.

---

## 2. Stack tecnico

Next.js 15 + Tailwind CSS v4 + Framer Motion + Lenis (smooth scroll).
I colori sono CSS custom properties in `app/globals.css` dentro il blocco `@theme`. Tailwind genera le classi automaticamente (`text-text`, `bg-surface`, `border-border`, ecc.).

---

## 3. Palette attuale

| Token | Valore | Uso |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Sfondo principale (bianco puro) |
| `--color-surface` | `#F0F2F7` | Sfondo sezioni alternate (grigio-blu chiaro) |
| `--color-text` | `#111827` | Testo primario (quasi nero, tinta fredda) |
| `--color-muted` | `#4B5563` | Testo secondario (grigio medio-scuro) |
| `--color-faint` | `#9CA3AF` | Testo terziario (label, placeholder, copyright) |
| `--color-accent` | `#1E40AF` | Blu profondo — accent per tutto (link, bordi, CTA, hover) |
| `--color-border` | `rgba(17,24,39,0.12)` | Bordi card/divider |
| `--color-border-hover` | `rgba(17,24,39,0.22)` | Bordi al hover |

Gradiente atmosferico: `radial-gradient` blu al 3% in alto a destra su body.
Selection testo: velo blu al 12%.

---

## 4. Tipografia

| Ruolo | Font | Pesi |
|---|---|---|
| Titoli (H1, H2, H3, citazioni) | Cormorant Garamond (serif) | 400, 500, 600, 700 |
| Body, UI, nav, label | Inter (sans-serif) | 300, 400, 500, 600 |

Hero H1: `text-5xl md:text-6xl lg:text-7xl` (fino a 72px)
Titoli sezione H2: `text-3xl md:text-4xl`
Body: `text-base`, `leading-[1.8]`
Label sezione: `text-xs uppercase tracking-[0.15em]` in blu accent

---

## 5. Homepage — struttura e alternanza sfondi

```
Navbar         → trasparente → bianco/80 + blur + ombra 1px dopo scroll
Hero           → #FFFFFF (bianco)
─── divider ───  (gradient sfumato alle estremità, max-width 80%)
Chi Sono       → #F0F2F7 (grigio-blu) — foto a sinistra, testo a destra
─── divider ───
Servizi        → #FFFFFF (bianco) — griglia 4 card
─── divider ───
Testimonianze  → #F0F2F7 (grigio-blu) — carousel automatico
CTA finale     → #1E40AF (BLU PIENO — accent) — "Parliamo del tuo caso"
Footer         → #FFFFFF (bianco)
```

---

## 6. Componenti — stato attuale dettagliato

### CTAButton (bottone principale)
- **Normale**: bordo 1.5px `rgba(17,24,39,0.15)`, testo `--color-text`, sfondo trasparente, angoli vivi (no border-radius), uppercase, tracking 0.15em, font 13px
- **Hover**: sfondo diventa `--color-accent` (blu pieno), testo bianco, bordo blu, ombra `0 8px 30px rgba(30,64,175,0.25)`, translateY -2px
- **Active**: scale 0.98, translateY 0
- **Versione invertita** (usata nella CTA blu): bordo bianco/30, testo bianco; hover: sfondo bianco, testo blu

### Card servizi (homepage)
- **Background**: `bg-white` (risaltano sia su bianco con bordo che su surface)
- **Bordi**: 1px `--color-border`, angoli vivi (no border-radius)
- **Hover**: bordo diventa blu accent, translateY -6px, ombra `0 12px 40px rgba(30,64,175,0.08)`, spotlight mouse (gradiente radiale blu 4%)
- **Contenuto**: icona SVG watermark accent → titolo → linea accent 32px → descrizione

### SectionLabel
- Linea blu 40px, height 2px
- Testo uppercase `text-accent` (BLU, non grigio)

### Divider tra sezioni
- Gradient: sfuma alle estremità (transparent → border → border → transparent)
- max-width 80%, centrato

### Navbar
- Fixed, h-16, z-50
- Trasparente → `bg-white/80 + backdrop-blur + shadow 1px` dopo 40px scroll
- Link: `text-muted` → hover `text-accent` (diventano blu)
- Linea hover: 1.5px accent, scaleX 0→1 da sinistra
- Scroll progress: linea 1px `bg-accent/40` sotto la navbar

### Footer
- Link hover → `text-accent` (blu) + translateX 4px

### Testimonianze (carousel homepage)
- Virgoletta decorativa `"`: 120px, accent, opacity 15%
- Dot inattivi: `bg-accent/20`, hover `bg-accent/40`
- Dot attivo: `bg-accent` pieno, pillola 24px
- Transizione: blur 6px in/out

---

## 7. Pagina /contatti — PROBLEMA

Layout: due colonne. Form a sinistra, info contatti a destra.

**Problemi segnalati dal cliente:**
- La pagina è **tutta bianca**, senza personalità
- Il form è funzionale ma visivamente piatto — input con solo `border-bottom`, nessun contenitore, nessuna sezione differenziata
- Manca un elemento visivo che dia carattere alla pagina (nessuna immagine, nessun elemento decorativo, nessun cambio di sfondo)

**Stato attuale degli input:**
- Bordo inferiore `border-border`
- Focus: bordo diventa accent + sottile shadow blu
- Sfondo: trasparente
- Nessun contenitore, nessuna card

**Il bottone "Invia messaggio"** ha lo stesso stile del CTAButton (riempimento blu all'hover).

**Possibili soluzioni da valutare:**
1. Mettere il form dentro una card con `bg-surface` e bordo, così si stacca dal bianco
2. Aggiungere un elemento decorativo (watermark bilancia, o pattern geometrico sottile)
3. Mettere una sezione superiore con sfondo `bg-surface` per dare ritmo alla pagina
4. Aggiungere un'immagine dello studio o della zona a fianco
5. Input: passare da `border-bottom` a input con bordo completo e focus ring blu (come Linear.app)

---

## 8. Pagina /chi-sono — PROBLEMA

Layout: due sezioni. Hero (foto toga + bio) e sezione "I miei valori".

**Problemi segnalati dal cliente:**
- La sezione **"I miei valori"** (Competenza, Dedizione, Riservatezza) è **troppo banale e senza personalità**
- Sono 3 blocchi di testo con una linea accent sopra — nessun contenitore, nessuna card, nessuna icona
- La struttura è: `linea accent 24px → titolo → testo`. Troppo minimal, sembra un wireframe

**Stato attuale dei 3 valori:**
```
──────  (linea accent 24px, 1px di altezza)
Competenza
Una preparazione tecnica rigorosa...

──────
Dedizione
Ogni caso riceve la massima...

──────
Riservatezza
Il rapporto con il cliente...
```

**Nessun bordo, nessuna card, nessuna icona, nessuna ombra. Solo testo flottante su sfondo `#F0F2F7`.**

**Possibili soluzioni da valutare:**
1. Metterli dentro card con bordo e sfondo bianco (come le card servizi)
2. Aggiungere icone o simboli decorativi per ogni valore (es. scudo per competenza, cuore per dedizione, lucchetto per riservatezza)
3. Aggiungere un numero grande decorativo (01, 02, 03) — ma attenzione, i numeri erano stati rimossi dalle card servizi perché non piacevano
4. Card con hover (bordo blu, ombra, translateY) per dare interattività
5. Layout diverso: da 3 colonne piatte a 3 card vere con padding e struttura

---

## 9. Pagina /servizi — stato attuale

Layout: hero + 4 sezioni alternate (testo + icona SVG watermark).
Ogni servizio ha: SectionLabel → H2 → paragrafo esteso → lista punti con linea accent → CTAButton.
Le icone watermark sono SVG custom al 13% di opacità, 200x200px.

**Non segnalati problemi specifici**, ma dato che le card homepage ora hanno angoli vivi e hover blu, verificare coerenza con il resto.

---

## 10. Pagina /recensioni — stato attuale

Hero + griglia 2 colonne di card testimonianze.
Card: `bg-surface`, bordo `border-border`, padding 32-40px, virgoletta decorativa, testo in Cormorant italic, nome + città + servizio.

Fix recente: aggiunto `h-full` per uniformare l'altezza delle card (erano asimmetriche).

---

## 11. Sezione CTA homepage — stato attuale

Sfondo **`bg-accent`** (#1E40AF, blu pieno).
Testo bianco, sottotitolo bianco/70.
Bottone invertito (bordo bianco → hover: sfondo bianco, testo blu).
Bilancia watermark bianca al 5% con parallax.
Punto luce radiale al centro per profondità.

---

## 12. Micro-interazioni attive

| Elemento | Stato normale | Hover |
|---|---|---|
| CTAButton | Bordo sottile, testo scuro | **Riempimento blu**, testo bianco, ombra blu, translateY -2px |
| Link navbar | `text-muted` | `text-accent` (blu) + linea 1.5px da sinistra |
| Card servizi HP | Bordo 12%, bg-white | Bordo blu, translateY -6px, ombra blu |
| Link "Scopri di più" | `text-accent` | Freccia translateX 6px |
| Footer links | `text-muted` / `text-faint` | `text-accent` + translateX 4px |
| Dot carousel | `bg-accent/20` | `bg-accent/40`, attivo: `bg-accent` pillola |
| Input form | `border-bottom border-border` | `border-accent` + shadow accent |

---

## 13. Domande per il reviewer

### Pagina /contatti
1. Come dare personalità alla pagina contatti senza sovraccaricarla? Card per il form? Sfondo alternato? Elemento decorativo?
2. Gli input dovrebbero avere bordo completo (stile card) o restare con solo `border-bottom` (stile minimal)?
3. La colonna info a destra è troppo semplice — serve una card o un trattamento diverso?

### Pagina /chi-sono — sezione valori
4. Come rendere i 3 valori (Competenza, Dedizione, Riservatezza) visivamente interessanti senza essere kitsch?
5. Card con bordo e hover, icone, numeri, o altro approccio?
6. Devono avere lo stesso trattamento delle card servizi (bordo, angoli vivi, hover blu)?

### Generale
7. Le card servizi sulla homepage ora hanno angoli vivi — coerente con il resto? Le card recensioni hanno `rounded-lg`. Uniformare?
8. La cornice sfalsata dietro la foto Chi Sono (homepage) — mantenerla? Cambiarla? È `border-2 border-accent/25`.
9. La CTA blu piena funziona o è troppo aggressiva per un sito legale?
10. Manca qualcosa di strutturale che darebbe più "vita" al sito?

---

## 14. File da modificare (per il developer)

| Pagina/Componente | File |
|---|---|
| Colori globali | `app/globals.css` (blocco `@theme`) |
| Pagina contatti | `app/contatti/page.tsx` |
| Form contatti | `components/ui/ContactForm.tsx` |
| Pagina chi sono | `app/chi-sono/page.tsx` |
| Card servizi HP | `components/sections/Servizi.tsx` |
| Card recensioni | `app/recensioni/page.tsx` |
| Bottone CTA | `components/ui/CTAButton.tsx` |
| Spotlight card | `components/ui/SpotlightCard.tsx` |
| Sezione CTA | `components/sections/CTASection.tsx` |

**Formato risposta ideale**: per ogni punto, indica il file, il codice/classe esatto da modificare, e il motivo. Se proponi nuovi colori, fornisci i valori hex.
