# BACKUP_DARK.md — Ripristino tema scuro

Se vuoi tornare al tema nero, segui queste istruzioni.
Ogni sezione corrisponde a un file da modificare. Copia-incolla il codice indicato.

---

## 1. app/globals.css — SOSTITUISCI INTERAMENTE

```css
@import "tailwindcss";

@theme {
  --font-sans:    var(--font-inter);
  --font-heading: var(--font-cormorant);

  --color-bg:       #08090D;
  --color-surface:  #10131A;

  --color-text:  #E8ECF4;
  --color-muted: #7A8499;
  --color-faint: #4A5568;

  --color-accent: #5B8DEF;

  --color-border:       rgba(255, 255, 255, 0.06);
  --color-border-hover: rgba(255, 255, 255, 0.12);

  --color-white: #FFFFFF;
}

:root { color-scheme: dark; }

html {
  scroll-behavior: auto !important;
  scroll-padding-top: 80px;
}

body {
  background-color: #08090D;
  color: #E8ECF4;
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at 70% 0%,
    rgba(91, 141, 239, 0.04) 0%,
    transparent 60%
  );
}

.link-hover {
  position: relative;
}
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

.footer-link {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.footer-link:hover {
  transform: translateX(4px);
}

::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: #08090D; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #7A8499; }

::selection {
  background: rgba(91, 141, 239, 0.15);
  color: #E8ECF4;
}
```

---

## 2. components/ui/CTAButton.tsx — Ombra hover

Cambia:
```
hover:shadow-[0_4px_20px_rgba(30,64,175,0.15)]
```
In:
```
hover:shadow-[0_4px_20px_rgba(91,141,239,0.15)]
```

---

## 3. components/ui/SpotlightCard.tsx — Gradiente mouse

Cambia:
```tsx
background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(30,64,175,0.04), transparent 40%)`
```
In:
```tsx
background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(91,141,239,0.06), transparent 40%)`
```

---

## 4. components/layout/Navbar.tsx — Sfondo scroll

Cambia:
```tsx
scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(17,24,39,0.06)]" : "bg-transparent"
```
In:
```tsx
scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-transparent"
```

---

## 5. components/sections/CTASection.tsx — SOSTITUISCI INTERAMENTE

```tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import TextReveal from "@/components/ui/TextReveal"

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bilanciaY = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const bilanciaRotate = useTransform(scrollYProgress, [0, 1], [-3, 3])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
      aria-label="Contattami"
    >
      <motion.div
        style={{ y: bilanciaY, rotate: bilanciaRotate }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.08]"
        aria-hidden="true"
      >
        <Image src="/images/bilancia.png" alt="" width={300} height={300} />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-text leading-[1.1] mb-6">
            <TextReveal>Parliamo del tuo caso.</TextReveal>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base text-muted leading-[1.7] mb-10 max-w-md mx-auto">
            Ogni situazione merita attenzione. Contattami per una
            consulenza iniziale senza impegno.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <CTAButton text="Contattami" href="/contatti" />
        </FadeIn>
      </div>
    </section>
  )
}
```

---

## 6. components/sections/ChiSono.tsx — Rimuovi bg-surface

Cambia:
```tsx
<section className="py-24 md:py-32 bg-surface" aria-label="Chi Sono" id="chi-sono">
```
In:
```tsx
<section className="py-24 md:py-32" aria-label="Chi Sono" id="chi-sono">
```

---

## 7. components/sections/Testimonianze.tsx — Rimuovi bg-surface

Cambia:
```tsx
className="py-24 md:py-32 bg-surface"
```
In:
```tsx
className="py-24 md:py-32"
```

---

## 8. app/icon.tsx — Colori dark

Cambia:
- `background: "#FFFFFF"` → `background: "#08090D"`
- `color: "#1E40AF"` → `color: "#5B8DEF"`
- `background: "#1E40AF"` → `background: "#5B8DEF"`

---

## 9. app/apple-icon.tsx — Colori dark

Cambia:
- `background: "#FFFFFF"` → `background: "#08090D"`
- `color: "#1E40AF"` → `color: "#5B8DEF"`
- `background: "#1E40AF"` → `background: "#5B8DEF"`

---

## 10. app/manifest.ts — Colori dark

Cambia:
```ts
background_color: "#FFFFFF",
theme_color: "#FFFFFF",
```
In:
```ts
background_color: "#08090D",
theme_color: "#08090D",
```

---

## 11. app/recensioni/page.tsx — Rimuovi h-full dalle card

Cambia:
```tsx
<FadeIn key={t.id} delay={index * 0.1} className="h-full">
  <div className="bg-surface border border-border rounded-lg p-8 md:p-10 flex flex-col gap-6 h-full">
```
In:
```tsx
<FadeIn key={t.id} delay={index * 0.1}>
  <div className="bg-surface border border-border rounded-lg p-8 md:p-10 flex flex-col gap-6">
```

---

## 12. components/ui/SectionLabel.tsx — Testo grigio, linea più corta

Cambia:
```tsx
<div className="w-10 h-0.5 bg-accent" />
<span className="text-xs uppercase tracking-[0.15em] text-accent font-medium">
```
In:
```tsx
<div className="w-8 h-px bg-accent" />
<span className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
```

---

## 13. components/ui/Divider.tsx — Linea piena senza gradient

Sostituisci con:
```tsx
export default function Divider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-5 md:px-12">
      <div className="h-px bg-border" />
    </div>
  )
}
```

---

## 14. components/layout/Footer.tsx — Hover text, non accent

Cambia tutti `hover:text-accent` in `hover:text-text` (telefono, email) e `hover:text-muted` (privacy, cookie).

---

## 15. components/sections/Testimonianze.tsx — Virgoletta e dot

Virgoletta: cambia `text-[120px]` → `text-6xl`, `opacity: 0.15` → `opacity: 0.2`.
Dot: cambia `bg-accent/20` → `bg-faint`, `hover:bg-accent/40` → `hover:bg-muted`.

---

## 16. components/layout/Navbar.tsx — Link hover grigio

Cambia `hover:text-accent` → `hover:text-text`.

---

## 17. globals.css — Linea hover 1px

Cambia `height: 1.5px` → `height: 1px` nel `.link-hover::after`.

---

## 18. components/ui/ContactForm.tsx — Bottone e input

Bottone submit: ripristina con il vecchio stile (border-border, text-muted, fill accent swipe).
Input focus: rimuovi `focus:shadow-[0_1px_0_0_var(--color-accent)]`.

---

## Riepilogo: 18 file/modifiche per il rollback completo

| # | File | Tipo modifica |
|---|---|---|
| 1 | `app/globals.css` | Sostituisci tutto + height 1px |
| 2 | `components/ui/CTAButton.tsx` | Sostituisci tutto (vecchio stile) |
| 3 | `components/ui/SpotlightCard.tsx` | Una riga (gradient) |
| 4 | `components/layout/Navbar.tsx` | bg scroll + link hover |
| 5 | `components/sections/CTASection.tsx` | Sostituisci tutto |
| 6 | `components/sections/ChiSono.tsx` | Rimuovi `bg-surface` + cornice + link |
| 7 | `components/sections/Testimonianze.tsx` | Rimuovi `bg-surface` + virgoletta + dot |
| 8 | `app/icon.tsx` | 3 colori |
| 9 | `app/apple-icon.tsx` | 3 colori |
| 10 | `app/manifest.ts` | 2 colori |
| 11 | `app/recensioni/page.tsx` | Rimuovi `h-full` |
| 12 | `components/ui/SectionLabel.tsx` | Testo + linea |
| 13 | `components/ui/Divider.tsx` | Sostituisci tutto |
| 14 | `components/layout/Footer.tsx` | Hover links |
| 15 | `components/sections/Servizi.tsx` | Card: bg-surface, rounded-lg, vecchio hover |
| 16 | `components/ui/ContactForm.tsx` | Bottone + input focus |
