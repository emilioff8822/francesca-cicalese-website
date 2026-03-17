"use client"

import { useActionState } from "react"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle" }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-6 h-px bg-accent" />
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
    <form action={action} className="flex flex-col gap-6" noValidate>

      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-xs uppercase tracking-[0.15em] text-faint">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Il tuo nome"
          className="w-full bg-transparent border-b border-border py-3 text-base text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors duration-300"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-faint">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="la-tua@email.com"
          className="w-full bg-transparent border-b border-border py-3 text-base text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors duration-300"
        />
      </div>

      {/* Messaggio */}
      <div className="flex flex-col gap-2">
        <label htmlFor="messaggio" className="text-xs uppercase tracking-[0.15em] text-faint">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Descrivi brevemente la tua situazione..."
          className="w-full bg-transparent border-b border-border py-3 text-base text-text placeholder:text-faint focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-faint leading-[1.6]">
        I dati inviati saranno utilizzati esclusivamente per rispondere alla tua richiesta,
        nel rispetto del Regolamento UE 2016/679 (GDPR).
      </p>

      {/* Errore */}
      {state.status === "error" && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="group relative overflow-hidden border border-border px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-medium text-muted transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:text-text hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(91,141,239,0.15)] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className="absolute inset-0 bg-accent opacity-[0.06] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          <span className="relative">
            {pending ? "Invio in corso…" : "Invia messaggio"}
          </span>
        </button>
      </div>

    </form>
  )
}
