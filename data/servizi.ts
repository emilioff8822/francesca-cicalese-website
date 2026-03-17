export type Servizio = {
  id: string;
  titolo: string;
  descrizione: string;
  descrizioneEstesa: string;
  punti: string[];
};

export const servizi: Servizio[] = [
  {
    id: "diritto-civile",
    titolo: "Diritto Civile",
    descrizione:
      "Tutela dei diritti, risarcimento danni, controversie contrattuali e responsabilità civile.",
    descrizioneEstesa:
      "Offro assistenza completa nelle controversie di diritto civile: dalla tutela dei diritti soggettivi al risarcimento del danno, dalla responsabilità contrattuale ed extracontrattuale alle controversie condominiali. Ogni caso è trattato con rigore tecnico e attenzione alle esigenze del cliente.",
    punti: [
      "Risarcimento danni da sinistri stradali e infortuni",
      "Controversie condominiali e diritti reali",
      "Responsabilità contrattuale ed extracontrattuale",
      "Tutela del consumatore",
    ],
  },
  {
    id: "diritto-famiglia",
    titolo: "Diritto di Famiglia",
    descrizione:
      "Separazioni, divorzi, affidamento minori, successioni e tutela dei diritti familiari.",
    descrizioneEstesa:
      "Accompagno i miei clienti nei momenti più delicati della vita familiare con professionalità e umanità. Mi occupo di separazioni e divorzi, affidamento e mantenimento dei figli minori, successioni ereditarie e tutela dei diritti dei più vulnerabili.",
    punti: [
      "Separazione e divorzio consensuale o giudiziale",
      "Affidamento e mantenimento dei figli",
      "Successioni, eredità e testamenti",
      "Adozione e tutela dei minori",
    ],
  },
  {
    id: "diritto-lavoro",
    titolo: "Diritto del Lavoro",
    descrizione:
      "Licenziamenti, contratti di lavoro, mobbing, vertenze sindacali e tutela del lavoratore.",
    descrizioneEstesa:
      "Difendo i diritti dei lavoratori e delle aziende in ogni fase del rapporto di lavoro. Dall'analisi del contratto alla gestione del licenziamento, dalle vertenze per mobbing alle controversie previdenziali, garantisco una tutela efficace e tempestiva.",
    punti: [
      "Impugnazione del licenziamento",
      "Contratti di lavoro e inquadramento",
      "Mobbing e demansionamento",
      "Vertenze previdenziali e INPS",
    ],
  },
  {
    id: "consulenza-contrattuale",
    titolo: "Consulenza Contrattuale",
    descrizione:
      "Redazione, revisione e negoziazione di contratti commerciali e privati.",
    descrizioneEstesa:
      "Predispongo e analizzo contratti commerciali, locazioni, compravendite e accordi privati. Un contratto ben redatto previene le controversie future. Offro consulenza preventiva per imprenditori, professionisti e privati che vogliono tutelare i propri interessi prima che sorgano problemi.",
    punti: [
      "Contratti commerciali e d'affari",
      "Contratti di locazione e compravendita immobiliare",
      "Accordi tra soci e partnership",
      "Revisione e negoziazione contrattuale",
    ],
  },
];
