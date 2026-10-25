/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "26 ottobre 2026, 00:12";

var PIANO = {

  "bianca-hco": {
    "nome": "Bianca",
    "aggiornato": "25 ottobre 2026",
    "ultima": {
      "quando": "2026-10-20T14:00:00+02:00",
      "fatto": [
        "Verb review",
        "The first 190 words, to build your vocabulary",
        "How often: sempre, spesso, di solito, mai",
        "We started Guess Who?"
      ]
    },
    "prossima": {
      "quando": "2026-10-26T14:00:00+01:00",
      "obiettivo": "Describe people and ask the right questions to find them, and use verbs in everyday sentences.",
      "attivita": [
        {
          "titolo": "Verbs and your routine: how often?",
          "href": "",
          "nota": "We play it together"
        },
        {
          "titolo": "Guess Who?, round two",
          "href": "",
          "nota": "You ask the questions, then you describe the person"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "The same game: try level 1, then level 2"
      },
      {
        "titolo": "The first 190 words",
        "href": "https://talkwithfabio.com/esercizi/parole-a1/",
        "nota": "10 minutes a day"
      }
    ]
  },

  "ellie-3mw": {
    "nome": "Ellie",
    "aggiornato": "25 ottobre 2026",
    "ultima": {
      "quando": "2026-10-22T14:00:00+02:00",
      "fatto": [
        "Verb review",
        "Question words: come, cosa, chi, quando, quanto",
        "Numbers from 1 to 20"
      ]
    },
    "prossima": {
      "quando": "2026-10-26T13:00:00+01:00",
      "obiettivo": "Describe a person (hair, eyes, height, face) and ask the right questions to guess who it is.",
      "attivita": [
        {
          "titolo": "Words to describe people",
          "href": "",
          "nota": "New adjectives: long, short, tall, blue eyes..."
        },
        {
          "titolo": "Guess who?",
          "href": "",
          "nota": "A game we play together: you ask the questions"
        },
        {
          "titolo": "Describe someone you know",
          "href": "",
          "nota": "A friend, someone in your family or a famous person"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Before the lesson: the words we will use"
      },
      {
        "titolo": "The words that open a question",
        "href": "https://talkwithfabio.com/esercizi/parole-domanda/",
        "nota": "Review: chi, cosa, come, quando, quanto"
      }
    ]
  }

};
