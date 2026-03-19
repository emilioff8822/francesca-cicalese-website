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
  {
    id: 5,
    testo:
      "Sono rimasto colpito dalla sua preparazione tecnica e dalla chiarezza con cui mi ha spiegato ogni passaggio. Grazie alla sua assistenza ho ottenuto un risarcimento che non speravo più di vedere.",
    nome: "Riccardo F.",
    citta: "Roma",
    servizio: "Diritto Civile",
  },
  {
    id: 6,
    testo:
      "Quando ho ricevuto la lettera di licenziamento ero disorientato e spaventato. L'Avv. Cicalese mi ha accolto con professionalità e umanità, seguendomi passo dopo passo fino a un accordo che non avrei mai pensato possibile.",
    nome: "Davide C.",
    citta: "Roma",
    servizio: "Diritto del Lavoro",
  },
  {
    id: 7,
    testo:
      "Persona di grande valore umano e professionale. Ha trattato il mio caso penale con discrezione assoluta e una strategia difensiva che si è rivelata vincente. Le sono profondamente grato.",
    nome: "Matteo B.",
    citta: "Roma",
    servizio: "Diritto Penale",
  },
  {
    id: 8,
    testo:
      "In un momento tra i più delicati della mia vita, l'Avv. Cicalese è stata una presenza solida e rassicurante. Ha protetto me e i miei figli con una dedizione che va ben oltre il semplice incarico professionale.",
    nome: "Alessia T.",
    citta: "Roma",
    servizio: "Diritto di Famiglia",
  },
]
