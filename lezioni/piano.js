/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "25 ottobre 2026, 18:37";

var PIANO = {

  "ellie-3mw": {
    "nome": "Ellie",
    "aggiornato": "25 ottobre 2026",
    "ultima": {
      "quando": "2026-10-22T14:00:00+02:00",
      "fatto": [
        "We kept working on verbs",
        "Free conversation, to speak more spontaneously"
      ]
    },
    "prossima": {
      "quando": "2026-10-26T13:00:00+01:00",
      "obiettivo": "Tell me about your holiday, and keep the conversation going: how to start a sentence and how to ask questions back.",
      "attivita": [
        {
          "titolo": "Tell me about your holiday",
          "href": "",
          "nota": "We start with this: think about what you did, where you went, what you ate"
        },
        {
          "titolo": "Attacca e rilancia",
          "href": "",
          "nota": "A conversation game we play together"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Passato prossimo 1: essere or avere?",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/?mode=aux",
        "nota": "10 minutes before the lesson"
      }
    ]
  }

};
