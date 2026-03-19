"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle" }

const inputClasses = "w-full px-4 py-3 bg-white border border-border rounded-md text-base text-text placeholder:text-faint transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(30,48,80,0.08)] focus:outline-none"

const areaValues = ["penale", "famiglia", "civile", "lavoro", "altro"] as const

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)
  const searchParams = useSearchParams()
  const areaParam = searchParams.get("area")
  const defaultArea = areaParam && areaValues.includes(areaParam as typeof areaValues[number]) ? areaParam : ""

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-10 h-0.5 bg-accent" />
        <p className="font-heading text-2xl md:text-3xl text-text italic">
          Messaggio ricevuto.
        </p>
        <p className="text-sm text-muted leading-[1.7]">
          Ti risponderò entro 24 ore nei giorni lavorativi.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Il tuo nome"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="la-tua@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="oggetto" className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
          Area di interesse
        </label>
        <div className="relative">
          <select
            id="oggetto"
            name="oggetto"
            className={`${inputClasses} appearance-none pr-10`}
            defaultValue={defaultArea}
          >
            <option value="" disabled>Seleziona</option>
            <option value="penale">Diritto Penale</option>
            <option value="famiglia">Diritto di Famiglia</option>
            <option value="civile">Diritto Civile</option>
            <option value="lavoro">Diritto del Lavoro</option>
            <option value="altro">Altro</option>
          </select>
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-faint pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="messaggio" className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Descrivi brevemente la tua situazione..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <p className="text-xs text-faint leading-[1.6]">
        I dati inviati saranno utilizzati esclusivamente per rispondere alla tua richiesta,
        nel rispetto del Regolamento UE 2016/679 (GDPR).
      </p>

      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <div className="pt-2 flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] font-medium text-white bg-accent rounded-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#162640] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(30,48,80,0.25)] active:translate-y-0 active:scale-[0.96] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:hover:bg-accent"
        >
          {pending ? "Invio in corso…" : "Invia messaggio"}
        </button>
      </div>

    </form>
  )
}
