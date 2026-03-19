# BACKUP — Riferimento rollback completo

> **Ultimo commit stabile (tema chiaro + ristrutturazione):**
> `5e4126e` — giovedì 17 marzo 2026, ~19:00
> `"redesign: tema chiaro con palette navy elegante e UI raffinata"`
>
> **Commit precedente (funzionale, solo fix email):**
> `686a487` — `"fix: mittente email aggiornato a noreply@francescacicalese.it"`

---

## Come fare un revert veloce con Git

### Opzione A — Rollback completo all'ultimo commit stabile

Se tutto è andato storto e vuoi tornare esattamente a `5e4126e`:

```bash
git checkout 5e4126e -- .
```

Questo riporta tutti i file allo stato di quel commit **senza perdere la storia**.
Poi fai commit con le modifiche ripristinate.

### Opzione B — Revert di un singolo file

```bash
git checkout 5e4126e -- app/contatti/page.tsx
git checkout 5e4126e -- components/layout/Footer.tsx
```

### Opzione C — Vedere le differenze prima di agire

```bash
git diff 686a487 5e4126e -- app/contatti/page.tsx
```

---

## Struttura del commit `5e4126e` — cosa contiene

### Modifiche strutturali (NON solo colori)

| File | Tipo di modifica |
|---|---|
| `app/contatti/page.tsx` | Ristrutturata completamente: rimosso pannello info duplicato, form centrato |
| `app/recensioni/page.tsx` | Sostituita griglia statica con carousel auto-scroll + swipe |
| `components/sections/RecensioniCarousel.tsx` | Nuovo file (carousel clienti) |
| `components/layout/Footer.tsx` | Layout a 3 colonne: info + studio + orari |
| `components/layout/Navbar.tsx` | Active state pagina + rimosso bottone Contattami mobile |
| `app/servizi/page.tsx` | CTA "Non hai trovato" da navy scuro a `#E8EDF5` chiaro |
| `app/chi-sono/page.tsx` | CTA finale da navy scuro a `#E8EDF5` chiaro |
| `app/recensioni/page.tsx` | CTA finale da navy scuro a `#E8EDF5` chiaro |

### Modifiche palette (colori)

| File | Tipo di modifica |
|---|---|
| `app/globals.css` | Accent da `#1E40AF` → `#1e3050` (navy elegante) |
| `components/ui/CTAButton.tsx` | Shadow e active color aggiornati al navy |
| `components/ui/ContactForm.tsx` | Focus shadow + bottone submit al navy |
| `components/ui/SpotlightCard.tsx` | Gradiente mouse al navy |
| `components/sections/Servizi.tsx` | Shadow hover al navy |
| `components/sections/CTASection.tsx` | Sfondo da `#1E40AF` → `#1e3050` |
| `app/icon.tsx` / `app/apple-icon.tsx` | Colori favicon al navy |

---

## Snapshot strutturale — stato attuale dei file chiave

### `app/contatti/page.tsx` — stato attuale (semplificato, solo form)

```tsx
export default function Contatti() {
  return (
    <PageTransition>
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-surface">
          {/* SectionLabel + H1 + sottotitolo */}
        </section>

        {/* Form centrato, max-w-2xl */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 md:px-12">
            <div className="bg-surface/50 rounded-lg p-6 md:p-10">
              <ContactForm />
            </div>
            <p className="text-center text-xs text-faint mt-8">
              Rispondo entro 24h · Lun–Ven 9:00–18:00 · Sabato su appuntamento
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
```

**RIMOSSO:** pannello con telefono, email, studio, orari (tutto ora nel footer).
**RIMOSSO:** sezione "Preferisci parlare a voce?".

---

### `components/layout/Footer.tsx` — stato attuale (3 colonne)

```tsx
<footer style={{ background: "linear-gradient(135deg, #1e3050, #182842)" }}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
    {/* Col 1: nome + telefono + email */}
    {/* Col 2: indirizzo studio */}
    {/* Col 3: orari Lun-Ven / Sabato */}
  </div>
  {/* Separatore + copyright + Privacy/Cookie */}
</footer>
```

**AGGIUNTO:** orari nel footer.
**LAYOUT:** da colonna unica a 3 colonne su desktop.
**COLORE:** `linear-gradient(135deg, #1e3050, #182842)` — stesso delle CTA principali.

---

### `components/sections/RecensioniCarousel.tsx` — nuovo file

Carousel che sostituisce la griglia 2×2 statica nella pagina /recensioni.

- Auto-scroll ogni 5.5s su desktop
- Swipe touch su mobile
- Animazione blur + slide laterale (Framer Motion)
- Card a colori alternati: bianco / `#EEF2FF` / `#F5F7FC` / `#E8EEFF`
- Dots interattivi per navigazione manuale

---

### `components/layout/Navbar.tsx` — cambiamenti chiave

```tsx
const pathname = usePathname()  // aggiunto

// Desktop: link attivo in accent, inattivo in muted
className={pathname === link.href ? "text-accent" : "text-muted hover:text-accent"}

// Mobile: link attivo in accent + font-medium
className={pathname === link.href ? "text-accent font-medium" : "text-text"}

// Mobile: sfondo bg-white/95 backdrop-blur-md (era bg-surface)
// RIMOSSO: bottone "Contattami" separato dal menu mobile
```

---

### Palette CTA — ritmo visivo attuale

```
Contenuto bianco/grigio (#FFFFFF / #F0F2F7)
         ↓
CTA pre-footer: #E8EDF5 (azzurro-grigio chiaro, testo scuro)
         ↓
Footer: linear-gradient #1e3050 → #182842 (navy scuro)
```

Le CTA in homepage (`CTASection.tsx`) mantengono il navy scuro diretto perché sono nel mezzo della pagina, non subito sopra il footer.

---

## Rollback al tema scuro — palette completa

Se si dovesse tornare al **tema nero** (non la struttura, solo i colori):

### `app/globals.css` — sostituisci il blocco `@theme`

```css
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
```

E in `body`: `background-color: #08090D; color: #E8ECF4;`
E `:root { color-scheme: dark; }`

### Colori shadow da aggiornare (usano rgba hardcoded)

Tutti i `rgba(30,48,80,...)` → `rgba(91,141,239,...)`

File coinvolti:
- `components/ui/CTAButton.tsx`
- `components/ui/ContactForm.tsx`
- `components/ui/SpotlightCard.tsx`
- `components/sections/Servizi.tsx`
- `components/sections/RecensioniCarousel.tsx`
- `app/globals.css` (radial-gradient body + selection)

### Footer tema scuro

```tsx
style={{ background: "linear-gradient(to bottom, #10131A, #08090D)" }}
// testi: text-white → text-text (già E8ECF4)
```

### CTA Section tema scuro

```tsx
style={{ background: "linear-gradient(135deg, #1a2744, #152138)" }}
// oppure: tornare a bg-surface (scuro) senza gradient
```

### Icone tema scuro

`app/icon.tsx` e `app/apple-icon.tsx`:
- `background: "#FFFFFF"` → `"#08090D"`
- `color: "#1e3050"` → `"#5B8DEF"`

---

## Note importanti

1. **La struttura delle pagine è indipendente dai colori.** Se si torna al tema scuro, i layout restano quelli attuali (contatti semplificato, footer 3 colonne, carousel recensioni, navbar con active state).

2. **`RecensioniCarousel.tsx` è un nuovo file** — non esisteva nel commit prima di `5e4126e`. Se si fa `git checkout` su commit precedenti, il file sparisce. Tenerlo da parte se si vuole riusarlo.

3. **Le info di contatto (telefono, email, indirizzo) vivono SOLO nel footer.** Non ci sono più colonne duplicate nelle pagine.

4. **Commit di riferimento sicuro:** `686a487` — quello prima di tutto questo redesign. Funzionava, email configurata, build pulita.
