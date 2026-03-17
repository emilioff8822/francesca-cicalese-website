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

  try {
    await resend.emails.send({
      from: "Studio Legale Cicalese <onboarding@resend.dev>",
      to: "francescacicalese1@gmail.com",
      replyTo: email,
      subject: `Nuovo messaggio da ${nome}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #1a1a1a;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 32px;">
            Studio Legale Cicalese — Nuovo messaggio dal sito
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 80px;">Nome</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px;">
                <a href="mailto:${email}" style="color: #5B8DEF;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="font-size: 13px; color: #888; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Messaggio</p>
            <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${messaggio}</p>
          </div>
          <p style="margin-top: 40px; font-size: 11px; color: #aaa;">
            Rispondi direttamente a questa email per contattare ${nome}.
          </p>
        </div>
      `,
    })

    return { status: "success" }
  } catch {
    return {
      status: "error",
      message: "Errore nell'invio. Riprova o scrivimi direttamente all'email.",
    }
  }
}
