export type Testimonianza = {
  id: number;
  testo: string;
  nome: string;
  citta: string;
  servizio?: string;
};

export const testimonianze: Testimonianza[] = [
  {
    id: 1,
    testo:
      "Professionale, competente e sempre disponibile. Ha gestito il mio caso con grande attenzione e mi ha tenuto informato in ogni fase del procedimento. Risultato eccellente.",
    nome: "Marco R.",
    citta: "Napoli",
    servizio: "Diritto Civile",
  },
  {
    id: 2,
    testo:
      "Mi ha guidato in un momento molto difficile con empatia e determinazione. Ha saputo tutelare i miei figli e trovare la soluzione migliore per tutta la famiglia. Grazie di cuore.",
    nome: "Laura S.",
    citta: "Caserta",
    servizio: "Diritto di Famiglia",
  },
  {
    id: 3,
    testo:
      "Consiglio vivamente l'Avv. Cicalese. Preparata, trasparente e sempre presente. Ha gestito il mio licenziamento con grande efficacia e ho ottenuto il risarcimento che meritavo.",
    nome: "Giuseppe M.",
    citta: "Salerno",
    servizio: "Diritto del Lavoro",
  },
];
