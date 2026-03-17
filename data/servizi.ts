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
      "Difesa penale in ogni fase del procedimento: indagini, udienza preliminare, dibattimento e appello.",
    descrizioneEstesa:
      "Garantisco una difesa rigorosa e tempestiva in ogni fase del procedimento penale. Dall'iscrizione nel registro degli indagati fino all'eventuale giudizio di appello, seguo il cliente con attenzione costante, tutelando i suoi diritti fondamentali con competenza tecnica e determinazione.",
    punti: [
      "Difesa in fase di indagini preliminari",
      "Assistenza durante interrogatori e fermi",
      "Udienza preliminare e dibattimento",
      "Reati contro la persona e il patrimonio",
    ],
  },
  {
    id: "diritto-famiglia",
    titolo: "Famiglia e Minori",
    descrizione:
      "Separazioni, divorzi, affidamento dei minori, successioni e tutela dei diritti familiari.",
    descrizioneEstesa:
      "Accompagno i miei clienti nei momenti più delicati della vita familiare con professionalità e profonda umanità. La tutela dei minori è al centro di ogni procedimento che riguarda la famiglia. Mi occupo di separazioni consensuali e giudiziali, affidamento e mantenimento dei figli, successioni ereditarie e protezione dei soggetti vulnerabili.",
    punti: [
      "Separazione e divorzio consensuale o giudiziale",
      "Affidamento, mantenimento e diritto di visita",
      "Tutela legale dei minori",
      "Successioni, eredità e testamenti",
    ],
  },
  {
    id: "diritto-civile",
    titolo: "Diritto Civile",
    descrizione:
      "Tutela dei diritti, risarcimento danni, controversie contrattuali e responsabilità civile.",
    descrizioneEstesa:
      "Offro assistenza completa nelle controversie di diritto civile: dalla tutela dei diritti soggettivi al risarcimento del danno, dalla responsabilità contrattuale ed extracontrattuale alle controversie condominiali. Ogni caso è trattato con rigore tecnico e attenzione alle esigenze reali del cliente.",
    punti: [
      "Risarcimento danni da sinistri e infortuni",
      "Controversie condominiali e diritti reali",
      "Responsabilità contrattuale ed extracontrattuale",
      "Tutela del consumatore",
    ],
  },
  {
    id: "consulenza-contrattuale",
    titolo: "Consulenza Contrattuale",
    descrizione:
      "Redazione, revisione e negoziazione di contratti commerciali e privati.",
    descrizioneEstesa:
      "Un contratto ben redatto è la migliore prevenzione delle controversie future. Predispongo e analizzo contratti commerciali, locazioni, compravendite e accordi privati. Offro consulenza preventiva per imprenditori, professionisti e privati che vogliono tutelare i propri interessi prima che sorgano problemi.",
    punti: [
      "Contratti commerciali e d'affari",
      "Contratti di locazione e compravendita",
      "Accordi tra soci e partnership",
      "Revisione e negoziazione contrattuale",
    ],
  },
]
