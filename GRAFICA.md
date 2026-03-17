# GRAFICA.md — Analisi visiva del progetto
### Sito vetrina: Avv. Francesca Cicalese — Studio Legale Roma

> Documento creato per revisione esterna.
> Il revisore non ha accesso al localhost, quindi ogni scelta è descritta nel dettaglio.
> Obiettivo: feedback su direzione grafica, UX, animazioni, struttura.

---

## 1. IDENTITÀ VISIVA — Filosofia di partenza

Il sito deve comunicare: **autorevolezza, precisione, fiducia**. Non è il classico sito di avvocato con linee e griglie rigide. L'obiettivo è che un visitatore entri e pensi "questo non è il solito studio legale".

L'ispirazione principale è **premingerlaw.com** (studio legale texano, award-winning design), integrata con estetica da luxury brand europeo (Bottega Veneta, IWC, Rolls-Royce Digital). La differenza rispetto a un sito generico:

- Il sito è un **viaggio** (ATTO 1 → ATTO 4), non una brochure
- Ogni sezione risponde a **una sola domanda** del visitatore
- Nessun elemento duplicato — se c'è in navbar non c'è in footer
- Il **silenzio visivo** (whitespace, semitrasparenze, ghost elements) comunica lusso

---

## 2. PALETTE COLORI

### Sistema: Obsidian + Zaffiro Elettrico

La scelta cade su sfondi quasi-neri con un'anima blu navy, accentati da un zaffiro elettrico usato con estrema parsimonia. L'oro è stato deliberatamente scartato (troppo comune nei siti legali, associato a studi anni '90 o casinò).

| Token Tailwind | Nome | Hex | Uso |
|---|---|---|---|
| `bg-bg` | Obsidian | `#070B14` | Sfondo base di tutto il sito |
| `bg-surface` | Navy profondo | `#0F1624` | Card, footer, sezioni alternate |
| `bg-surface-high` | Navy medio | `#1A2535` | Navbar scrolled, overlay menu |
| `border-border` | Bordo blu-grigio | `#243348` | Divisori, bordi elementi |
| `text-text` | Bianco lunare | `#F2F5FF` | Titoli, testi primari |
| `text-muted` | Grigio-blu | `#6A8CAE` | Testi secondari, label, placeholder |
| `text-accent` | Zaffiro elettrico | `#4D8EF0` | Accento principale, usato pochissimo |
| `text-accent-light` | Zaffiro chiaro | `#7AAAF5` | Hover states |
| `text-accent-dark` | Zaffiro scuro | `#3670D0` | Pressed/active states |

### Effetto aurora (background animato)
Sul `body::before` è presente un gradiente radiale animato in loop da 14 secondi:
- Due "blob" di luce blu (`rgba(77,142,240,0.08)` e `rgba(54,112,208,0.06)`)
- Posizionati uno in alto a sinistra, uno in basso a destra
- Si spostano lentamente con `translateX` e `scale` — l'effetto è un bagliore che "respira"
- Non è visibile in modo ovvio, ma toglie la "piattezza digitale" del background

### Noise texture
Sul `body::after` è applicato un filtro SVG `feTurbulence` come rumore di sfondo:
- Opacità: 2.5% — **non percepibile consciamente**, ma aggiunge profondità
- Frequenza: 0.9 — grana fine
- Questa tecnica viene usata da Figma, Linear, e molti siti luxury 2024-2026

---

## 3. TIPOGRAFIA

| Font | Tipo | Pesi | CDN |
|---|---|---|---|
| **Cormorant Garamond** | Serif | 400, 500, 600, 700 + corsivo | Google Fonts (via next/font) |
| **Inter** | Sans-serif | 300, 400, 500, 600 | Google Fonts (via next/font) |

### Logica di utilizzo
- **Cormorant Garamond in corsivo** = identità, presenza, autorevolezza. Usato per: nome del sito in navbar, nome nell'hero H1, titoli di sezione, telefono nel footer, quote.
- **Inter** = precisione, leggibilità. Usato per: body text, label, bottoni, navigazione, tutti i testi secondari.

### Contrasto tipografico (tecnica dei luxury brand)
La differenza di dimensione tra Cormorant e Inter È il design. Il mix tra un titolo enorme in serif corsivo e una label minuscola uppercase sans-serif crea una gerarchia visiva potente senza bisogno di colori forti.

### Scala tipografica
- H1 hero: `clamp(4rem, 10vw, 8rem)` — responsive, enorme su desktop, grande su mobile
- Label sezioni: `text-xs uppercase tracking-[0.4em]` — distanziato, quasi sparisce
- Body: `text-sm leading-loose` — leggibile, respirato
- Contatti nel footer: `text-2xl italic` — inaspettato, crea interesse

---

## 4. NAVBAR

### Stato attuale: Overlay full-screen
La navbar è ridotta al **minimo**: logo a sinistra, "Contattami" + "Menu" a destra.
Quando l'utente clicca "Menu", si apre un **overlay full-screen** con:

**Elementi dell'overlay:**
- Background: `#070B14` al 98% + `backdrop-blur-2xl`
- Ghost watermark: "Legge" in Cormorant italics, opacità 3%, enorme sullo sfondo
- 4 link di navigazione con counter (01, 02, 03, 04), in Cormorant italic 5xl–7xl
- Ogni link ha un bordo bottom sottile che cambia colore all'hover (→ accent)
- In basso: telefono, email, indirizzo in Inter piccolo
- Animazione ingresso: i link appaiono da sinistra con stagger da 0.08s

**Animazione apertura:**
- Overlay: `opacity 0 → 1` in 0.4s
- Link: `x: -40px, opacity: 0 → x: 0, opacity: 1` con stagger
- Chiusura: inversione automatica con `AnimatePresence` di Framer Motion

### ⚠️ Nota per il revisore
C'è **incertezza** su questa scelta. L'approccio overlay è più editoriale e "luxury" ma:
- Richiede un click in più per navigare
- La vecchia navbar con 4 link visibili era forse più usabile, specialmente per utenti meno digitali (target: clienti con problemi legali, non designer)
- **Domanda aperta**: overlay full-screen oppure navbar classica con link sempre visibili?

---

## 5. HERO SECTION

### Layout (desktop)
Split orizzontale: **55% testo sinistra / 45% foto destra**

```
┌────────────────────────────────────────────────────────┐
│  Studio Legale · Roma          [foto Francesca         │
│                                 in toga, Corte di      │
│  Avv.                           Cassazione]            │
│  Francesca                                             │
│  Cicalese                    [La foto sfuma verso      │
│  ────────                     sinistra con gradient    │
│                               lineare, si fonde col bg]│
│  Difesa penale, famiglia...                            │
│                                                        │
│  [Contattami] [I miei servizi →]                       │
│                                                        │
│  10+        3          Roma                            │
│  Anni exp   Aree       Foro                            │
│                                                        │
│              ↓ Scorri (animato)                        │
└────────────────────────────────────────────────────────┘
```

### Layout mobile
La foto è in background full-width con overlay scuro (bg/70%) + i testi sopra.

### Animazioni del titolo (tecnica editorial)
Il nome "Francesca" / "Cicalese" si rivela parola per parola:
- Ogni parola parte da `y: 60px, skewY: 4deg, opacity: 0`
- Arriva a `y: 0, skewY: 0, opacity: 1`
- Stagger: 0.18s tra una parola e l'altra
- Easing: `[0.22, 1, 0.36, 1]` — custom cubic-bezier, più fluido di ease-out standard
- Ispirazione: siti editoriali Bottega Veneta, agency Work & Co

### La foto — trattamento
- Immagine: `francesca-toga.png` — Francesca in toga nera con cravatta bianca, all'interno della Corte di Cassazione di Roma (colonne, porta in legno massello, illuminazione calda)
- Sfumatura sinistra: `linear-gradient(to right, #070B14 0%, rgba(7,11,20,0.7) 40%, transparent 100%)` — la foto "evapora" verso il bg, non ha un bordo netto
- Sfumatura bassa: fade verso il bg in fondo
- Il risultato: la foto fa parte del design, non è un rettangolo incollato

### ⚠️ Nota per il revisore
Il committente ha sollevato una perplessità: **"l'immagine gigante di lei appena entri è un po' spaventosa"**.
- Possibile soluzione A: ridurre la foto a un formato più piccolo, non full-height
- Possibile soluzione B: usare la seconda foto (francesca-esterno.png — fuori con statua, luce naturale, più soft) nell'hero invece della toga
- Possibile soluzione C: non foto nell'hero, ma foto nella sezione "Chi Sono"
- Possibile soluzione D: mostrare la foto solo come sfondo semitrasparente, con testo centrato full-width
- **Richiedo feedback su quale direzione preferire**

### Statistiche (nella Hero)
Tre numeri: 10+ anni di esperienza / 3 aree di pratica / Roma (foro)
In Cormorant italic, separati da linee verticali. Appaiono con FadeIn delay 1.5s.

---

## 6. FOOTER

### Filosofia: la chiusura del viaggio
Il footer **non è un secondo menu**. È il momento in cui il visitatore ha visto tutto e deve decidere: mi fido? La risposta del footer è: "Parliamo."

### Struttura
```
[Ghost watermark "FC" enorme, opacità 3%]

INIZIA DA QUI (label accent)

Parliamo del       ← Cormorant italic enorme
tuo caso.

Testo invito alla consulenza (2 righe, muted)

[Scrivimi ──→]    ← CTA con freccia animata all'hover

+39 349 163 5839  |  francescacicalese1@gmail.com  |  Via Sabotino, 00195 Roma

© 2026 Avv. Francesca Cicalese · P.IVA XXXXX    Privacy · Cookie
```

**Nessun link di navigazione ripetuti** — se sei arrivato in fondo, conosci già il sito.

---

## 7. SISTEMA DI ANIMAZIONI

### FadeIn (componente globale)
`components/ui/FadeIn.tsx` — wrapper riutilizzabile per **qualsiasi elemento**.

```tsx
<FadeIn delay={0.2} direction="up">
  <h2>Qualsiasi cosa</h2>
</FadeIn>
```

Parametri disponibili:
- `delay`: secondi di ritardo prima dell'animazione
- `duration`: durata (default 0.6s)
- `direction`: "up" | "down" | "left" | "right" | "none"

Tecnologia: `useInView` di Framer Motion con `once: true` — si anima una sola volta al primo ingresso nel viewport, non si re-anima scrollando su.

### Easing custom usato ovunque
`[0.22, 1, 0.36, 1]` — cubic-bezier custom. Parte lentamente, accelera nel mezzo, rallenta morbidamente alla fine. Molto più elegante di `ease-out` standard.

### Animazioni in uso
| Elemento | Animazione | Parametri |
|---|---|---|
| Navbar ingresso | Fade da sopra | y: -80→0, opacity 0→1, 0.7s |
| Link navbar stagger | Appaiono uno per uno | stagger 0.08s |
| Overlay menu | Fade + link da sinistra | opacity 0→1 + x: -40→0 |
| Titolo hero | Parola per parola + skew | stagger 0.18s, skewY 4→0 |
| Linea separatore | Estensione orizzontale | scaleX 0→1, origin-left |
| Indicatore scroll | Bounce verticale | y: 0→8→0, loop infinito |
| Tutti gli altri | FadeIn dal basso | delay variabile per sezione |
| Hover link nav overlay | Cambio colore | transition 300ms |
| CTA "Scrivimi" footer | Freccia si allunga | w: 0→6, hover group |

---

## 8. IMMAGINI DISPONIBILI

| File | Descrizione | Uso previsto |
|---|---|---|
| `public/images/francesca-toga.png` | Francesca in toga nera con cravatta bianca, all'interno della Corte di Cassazione di Roma. Sfondo caldo (marmo, porta in legno). Foto verticale. | Hero section (principale) + Chi Sono |
| `public/images/francesca-esterno.png` | Francesca in toga nera all'esterno, accanto a una statua classica bianca (zona Palazzo di Giustizia, Roma). Luce naturale, atmosfera più soft. | Chi Sono (secondaria) |
| `public/images/bilancia.png` | Bilancia della giustizia dorata su cerchio nero con bordo dorato. Stile clipart premium. | Elemento decorativo semitrasparente (watermark, icona) |

---

## 9. STRUTTURA FILE DEL PROGETTO

```
/
├── app/
│   ├── layout.tsx          ← Font, lang="it", metadata SEO, Navbar+Footer
│   ├── page.tsx            ← Importa Hero (attualmente solo Hero)
│   └── globals.css         ← Palette @theme Tailwind v4, aurora, noise, scroll
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← "use client" — overlay menu full-screen
│   │   └── Footer.tsx      ← Server Component — closing message
│   ├── ui/
│   │   └── FadeIn.tsx      ← "use client" — wrapper animazione scroll
│   └── sections/
│       └── Hero.tsx        ← "use client" — hero con foto + animazioni
│
├── data/
│   ├── siteConfig.ts       ← Nome, telefono, email, indirizzo, navLinks
│   ├── servizi.ts          ← Array 4 servizi (penale, famiglia, civile, contratti)
│   └── testimonianze.ts    ← Array 3 testimonianze placeholder
│
└── public/
    └── images/
        ├── francesca-toga.png
        ├── francesca-esterno.png
        └── bilancia.png
```

---

## 10. STATO AVANZAMENTO — QUALE STEP SIAMO

| Step | Cosa | Stato |
|---|---|---|
| **1** | Setup: font, colori, data files, layout root | ✅ Completato |
| **2** | Navbar + Footer | ✅ Completato (con overlay full-screen) |
| **3** | Hero section | ✅ Completato |
| **4** | Homepage: Chi Sono preview + Servizi | ⬜ Prossimo |
| **5** | Homepage: Testimonianze + CTA finale | ⬜ Da fare |
| **6** | Pagina /chi-sono | ⬜ Da fare |
| **7** | Pagina /servizi | ⬜ Da fare |
| **8** | Pagina /recensioni | ⬜ Da fare |
| **9** | Pagina /contatti + form email | ⬜ Da fare |
| **10** | SEO completo + Framer Motion finale + Deploy Vercel | ⬜ Da fare |

**Siamo alla fine dello Step 3.** Il prossimo è lo Step 4.

---

## 11. DOMANDE APERTE PER IL REVISORE

1. **Navbar overlay vs classica** — L'overlay full-screen è più premium ma richiede un click in più. Per un pubblico che cerca un avvocato (spesso anziani, meno digitali), è la scelta giusta o meglio una navbar classica con link sempre visibili?

2. **Hero con foto grande** — La foto di Francesca in toga occupa tutta la metà destra dell'hero su desktop, full-screen mobile. Il committente la trova "un po' spaventosa". Alternativa: foto più piccola, oppure foto nella sezione Chi Sono e hero solo tipografica?

3. **Foto nell'hero: quale?** — La foto con la toga all'interno della Corte (cupa, autorevole) oppure quella all'esterno con la statua (più luminosa, meno intimidatoria)?

4. **Aree di pratica** — Attualmente sono 4: Diritto Penale, Famiglia e Minori, Diritto Civile, Consulenza Contrattuale. Il committente ha confermato penale + famiglia/minori + civile. I contratti restano?

5. **Tono generale** — "Parliamo del tuo caso" nel footer — piace. Stesso tono per il resto del sito?

---

## 12. TECH NOTE (per il developer)

- **Next.js 15** App Router, TypeScript, **Tailwind v4** (no tailwind.config.ts — tutto in globals.css con `@theme`)
- **Framer Motion** installato per tutte le animazioni
- `"use client"` usato solo dove serve (Navbar, Hero, FadeIn) — tutto il resto è Server Component per SEO ottimale
- I font (Cormorant Garamond + Inter) sono caricati da Google tramite `next/font/google` — zero latenza, zero richieste esterne a runtime
- Deploy target: **Vercel** collegato al repo GitHub
- Dominio: **francescacicalese.it** (da acquistare)
- Il form contatti (Step 9) userà **Resend** con Next.js Server Actions per inviare email
