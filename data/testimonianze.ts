export type Testimonianza = {
  id: number
  testo: string
  nome: string
  citta: string
  servizio?: string
}

export const testimonianze: Testimonianza[] = [
  {
    id: 1,
    testo:
      "Professionale, competente e sempre disponibile. Ha gestito il mio caso con grande attenzione e mi ha tenuto informato in ogni fase del procedimento. Risultato eccellente.",
    nome: "Marco R.",
    citta: "Roma",
    servizio: "Diritto Civile",
  },
  {
    id: 2,
    testo:
      "Mi ha guidato in un momento molto difficile con empatia e determinazione. Ha saputo tutelare i miei figli e trovare la soluzione migliore per tutta la famiglia. Grazie di cuore.",
    nome: "Laura S.",
    citta: "Roma",
    servizio: "Diritto di Famiglia",
  },
  {
    id: 3,
    testo:
      "Consiglio vivamente l'Avv. Cicalese. Preparata, trasparente e sempre presente. Ha affrontato il mio procedimento penale con una competenza che mi ha dato fiducia fin dal primo incontro.",
    nome: "Giuseppe M.",
    citta: "Roma",
    servizio: "Diritto Penale",
  },
  {
    id: 4,
    testo:
      "Ho affrontato una separazione difficile con tre figli coinvolti. L'Avv. Cicalese ha gestito ogni aspetto con sensibilità e fermezza. Non potevo sperare in un esito migliore.",
    nome: "Elena V.",
    citta: "Roma",
    servizio: "Diritto di Famiglia",
  },
]
