export type Servizio = {
  id: string
  titolo: string
  descrizione: string
}

export const servizi: Servizio[] = [
  {
    id: "diritto-penale",
    titolo: "Diritto Penale",
    descrizione:
      "Difesa in procedimenti penali, indagini preliminari, udienze e appelli. Assistenza in ogni fase del processo.",
  },
  {
    id: "diritto-famiglia",
    titolo: "Famiglia e Minori",
    descrizione:
      "Separazioni, divorzi, affidamento, tutela dei minori e successioni. Supporto attento e riservato.",
  },
  {
    id: "diritto-civile",
    titolo: "Diritto Civile",
    descrizione:
      "Risarcimento danni, controversie contrattuali, recupero crediti e responsabilità civile.",
  },
]
