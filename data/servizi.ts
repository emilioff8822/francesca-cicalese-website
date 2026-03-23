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
      "Come avvocato penalista a Roma, zona Prati, garantisco una difesa rigorosa e tempestiva in ogni fase del procedimento penale. Dall'iscrizione nel registro degli indagati fino all'eventuale giudizio di appello presso il Tribunale vicino a Piazzale Clodio, seguo ogni cliente con attenzione costante, tutelando i suoi diritti fondamentali con competenza tecnica e determinazione.",
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
      "Come avvocato divorzista e per separazioni a Roma, accompagno i miei clienti nei momenti più delicati della vita familiare con professionalità e profonda umanità. La tutela dei minori è al centro di ogni procedimento. Mi occupo di separazioni consensuali e giudiziali, affidamento e mantenimento dei figli, successioni ereditarie e protezione dei soggetti vulnerabili.",
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
      "Come avvocato civilista a Roma, offro assistenza completa nelle controversie di diritto civile: dalla tutela dei diritti soggettivi al risarcimento danni da sinistri e infortuni, dalla responsabilità contrattuale ed extracontrattuale alle controversie condominiali e alla consulenza contrattuale. Ogni caso è trattato con rigore tecnico e attenzione alle esigenze reali del cliente.",
    punti: [
      "Risarcimento danni da sinistri e infortuni",
      "Controversie contrattuali e recupero crediti",
      "Responsabilità contrattuale ed extracontrattuale",
      "Redazione e revisione di contratti",
      "Controversie condominiali e diritti reali",
    ],
  },
  {
    id: "diritto-lavoro",
    titolo: "Diritto del Lavoro",
    descrizione:
      "Tutela del lavoratore e del datore di lavoro. Licenziamenti, mobbing, contratti e vertenze sindacali.",
    descrizioneEstesa:
      "Come avvocato del lavoro a Roma, assisto lavoratori e aziende in tutte le controversie di natura giuslavoristica. Dalla verifica della legittimità di un licenziamento alla gestione di una vertenza sindacale, garantisco una tutela efficace e tempestiva dei diritti di entrambe le parti, sempre nel rispetto della normativa vigente.",
    punti: [
      "Licenziamento illegittimo e reintegro",
      "Mobbing e molestie sul luogo di lavoro",
      "Contratti di lavoro e mansioni",
      "Vertenze per retribuzioni non corrisposte",
      "Accordi sindacali e conciliazioni",
    ],
  },
]
