export type Servizio = {
  id: string
  titolo: string
  descrizione: string
  descrizioneEstesa: string
  punti: string[]
}

export const servizi: Servizio[] = [
  {
    id: "diritto-penale",
    titolo: "Diritto Penale",
    descrizione:
      "Difesa in procedimenti penali, indagini preliminari, udienze e appelli. Assistenza in ogni fase del processo.",
    descrizioneEstesa:
      "Garantisco una difesa rigorosa e tempestiva in ogni fase del procedimento penale. Dall'iscrizione nel registro degli indagati fino all'eventuale giudizio di appello, seguo ogni cliente con attenzione costante, tutelando i suoi diritti fondamentali con competenza tecnica e determinazione.",
    punti: [
      "Difesa in fase di indagini preliminari",
      "Assistenza durante interrogatori e fermi",
      "Udienza preliminare e dibattimento",
      "Reati contro la persona e il patrimonio",
      "Procedimenti in Corte d'Appello",
    ],
  },
  {
    id: "diritto-famiglia",
    titolo: "Famiglia e Minori",
    descrizione:
      "Separazioni, divorzi, affidamento, tutela dei minori e successioni. Supporto attento e riservato.",
    descrizioneEstesa:
      "Accompagno i miei clienti nei momenti più delicati della vita familiare con professionalità e profonda umanità. La tutela dei minori è al centro di ogni procedimento. Mi occupo di separazioni consensuali e giudiziali, affidamento e mantenimento dei figli, successioni ereditarie e protezione dei soggetti vulnerabili.",
    punti: [
      "Separazione e divorzio consensuale o giudiziale",
      "Affidamento, mantenimento e diritto di visita",
      "Tutela legale dei minori",
      "Successioni, eredità e testamenti",
      "Modifica delle condizioni di separazione",
    ],
  },
  {
    id: "diritto-civile",
    titolo: "Diritto Civile",
    descrizione:
      "Risarcimento danni, controversie contrattuali, recupero crediti e responsabilità civile.",
    descrizioneEstesa:
      "Offro assistenza completa nelle controversie di diritto civile: dalla tutela dei diritti soggettivi al risarcimento del danno, dalla responsabilità contrattuale ed extracontrattuale alle controversie condominiali e alla consulenza contrattuale. Ogni caso è trattato con rigore tecnico e attenzione alle esigenze reali del cliente.",
    punti: [
      "Risarcimento danni da sinistri e infortuni",
      "Controversie contrattuali e recupero crediti",
      "Responsabilità contrattuale ed extracontrattuale",
      "Redazione e revisione di contratti",
      "Controversie condominiali e diritti reali",
    ],
  },
]
