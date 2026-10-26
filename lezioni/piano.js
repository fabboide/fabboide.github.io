/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "26 ottobre 2026, 21:44";

var PIANO = {

  "bianca-hco": {
    "nome": "Bianca",
    "aggiornato": "26 ottobre 2026",
    "ultima": {
      "quando": "2026-10-26T14:00:00+01:00",
      "fatto": [
        "Describing people: hair, eyes, height, face",
        "Guess who?"
      ]
    },
    "prossima": {
      "quando": "2026-11-09T13:30:00+01:00",
      "obiettivo": "Describe what people are wearing: clothes, colours, stripes and checks.",
      "attivita": [
        {
          "titolo": "Quick review: describe a person",
          "href": "",
          "nota": "What we did this time"
        },
        {
          "titolo": "Verbs for clothes: portare, mettersi, vestirsi",
          "href": "",
          "nota": "Mi metto, ti metti, si mette..."
        },
        {
          "titolo": "Il guardaroba",
          "href": "",
          "nota": "A game with clothes we play together"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Try level 2: you write the questions"
      },
      {
        "titolo": "The first 190 words",
        "href": "https://talkwithfabio.com/esercizi/parole-a1/",
        "nota": "A few minutes a day"
      }
    ]
  },

  "ellie-3mw": {
    "nome": "Ellie",
    "aggiornato": "26 ottobre 2026",
    "ultima": {
      "quando": "2026-10-26T13:00:00+01:00",
      "fatto": [
        "Describing people: hair, eyes, height, face",
        "Guess who?",
        "You described yourself and people you know: very good!"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Describe what people are wearing: clothes, colours, stripes and checks.",
      "attivita": [
        {
          "titolo": "Quick review: describe a person",
          "href": "",
          "nota": "What we did this time, in ten minutes"
        },
        {
          "titolo": "Verbs for clothes: portare, mettersi, vestirsi",
          "href": "",
          "nota": "Mi metto, ti metti, si mette..."
        },
        {
          "titolo": "Il guardaroba",
          "href": "",
          "nota": "A game with clothes we play together"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "The same game: level 1, then level 2"
      },
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Look at the clothes and colours"
      }
    ]
  },

  "luana-zqy": {
    "nome": "Luana",
    "aggiornato": "26 ottobre 2026",
    "ultima": {
      "quando": "2026-10-26T20:00:00+01:00",
      "fatto": [
        "Verbs: very good!",
        "Guess who?",
        "You described a friend"
      ]
    },
    "prossima": {
      "quando": "2026-11-09T20:30:00+01:00",
      "obiettivo": "Describe people with confidence, then lots of conversation.",
      "attivita": [
        {
          "titolo": "Guess who?, two games: 12 and 24 faces",
          "href": "",
          "nota": "We play it together"
        },
        {
          "titolo": "Your turn: describe someone and I guess",
          "href": "",
          "nota": "A friend or a famous person"
        },
        {
          "titolo": "Conversation",
          "href": "",
          "nota": "The main part of the lesson"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Try level 2: you write the questions"
      }
    ]
  },

  "rafaela-yrd": {
    "nome": "Rafaela",
    "aggiornato": "26 ottobre 2026",
    "ultima": {
      "quando": "2026-10-26T09:00:00+01:00",
      "fatto": [
        "Passato prossimo",
        "Free conversation"
      ]
    },
    "prossima": {
      "quando": "2026-10-27T09:00:00+01:00",
      "obiettivo": "Tell what happened and ask about it: passato prossimo and the words that open a question.",
      "attivita": [
        {
          "titolo": "Passato prossimo: the verb roulette",
          "href": "",
          "nota": "We play it together"
        },
        {
          "titolo": "What was the question?",
          "href": "",
          "nota": "You read the answer and say the question: come, dove, quando, che cosa"
        },
        {
          "titolo": "Words for your dog",
          "href": "",
          "nota": "The commands you asked me for"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Passato prossimo 1: essere or avere?",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/?mode=aux",
        "nota": "10 minutes"
      },
      {
        "titolo": "The first 190 words",
        "href": "https://talkwithfabio.com/esercizi/parole-a1/",
        "nota": "A few minutes a day, for general vocabulary"
      }
    ]
  }

};
