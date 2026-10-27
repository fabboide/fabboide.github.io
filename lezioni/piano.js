/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "27 ottobre 2026, 17:32";

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

  "igor-nch": {
    "nome": "Igor",
    "aggiornato": "27 ottobre 2026",
    "ultima": {
      "quando": "2026-10-27T10:30:00+01:00",
      "fatto": [
        "Allenamento di fluency: parlare senza fermarsi",
        "Le domeniche e come ci informiamo",
        "Gli errori più frequenti: accordo, articolo, verbi riflessivi"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Continuare con la fluency: parlare a lungo senza bloccarsi, rispondere in fretta, usare parole nuove al volo.",
      "attivita": [
        {
          "titolo": "Ripasso veloce degli errori di oggi",
          "href": "",
          "nota": "Sono tutte differenti, mi incontro con gli amici, un buon posto"
        },
        {
          "titolo": "Raffica",
          "href": "",
          "nota": "Domande sempre nuove, una risposta in pochi secondi"
        },
        {
          "titolo": "Il Compressore e Parole Bomba",
          "href": "",
          "nota": "Lo stesso racconto in sempre meno tempo, e una parola nuova da infilare nel discorso"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Agreement: the gym",
        "href": "https://talkwithfabio.com/esercizi/palestra-grammatica/?mode=accordo",
        "nota": "Per l'accordo: tutte differenti, tutte simili"
      },
      {
        "titolo": "Molto: when it changes, when it doesn't",
        "href": "https://talkwithfabio.com/esercizi/palestra-grammatica/?mode=molto",
        "nota": "Troppe informazioni, molte domeniche"
      }
    ]
  },

  "igork-t7n": {
    "nome": "Igor",
    "aggiornato": "27 ottobre 2026",
    "ultima": {
      "quando": "2026-10-21T10:30:00+02:00",
      "fatto": [
        "Verbs review",
        "Free conversation: Italian music and your kitchen",
        "Harry Potter",
        "First fluency exercise"
      ]
    },
    "prossima": {
      "quando": "2026-10-27T10:30:00+01:00",
      "obiettivo": "A whole lesson on fluency. Keep talking without stopping: communication first, perfect grammar second.",
      "attivita": [
        {
          "titolo": "Fluency: the three workouts",
          "href": "",
          "nota": "We do this one together"
        },
        {
          "titolo": "Fewer pauses, longer turns",
          "href": "",
          "nota": "Short rounds, you speak, I keep the time"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Ready-made phrases, out loud",
        "href": "https://talkwithfabio.com/esercizi/prime-frasi/",
        "nota": "The fastest way to stop pausing: have the phrase ready before you need it"
      }
    ]
  },

  "igorm-v8q": {
    "nome": "Igor",
    "aggiornato": "27 ottobre 2026",
    "ultima": {
      "quando": "2026-10-15T13:00:00+02:00",
      "fatto": [
        "Exploring New York on Street View",
        "Describing a city and finding your way around it"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Be the guide and be the tourist: show me a city, then ask me about mine, and keep going without switching to English.",
      "attivita": [
        {
          "titolo": "Back to 75 Fulton Street",
          "href": "",
          "nota": "We start again exactly where we stopped"
        },
        {
          "titolo": "You guide me through New York",
          "href": "",
          "nota": "Describe what we see, I ask the questions"
        },
        {
          "titolo": "Then I guide you through Pinerolo",
          "href": "",
          "nota": "This time the questions are yours"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Prepositions: a, in, da, and al, alla, nella",
        "href": "https://talkwithfabio.com/esercizi/preposizioni/",
        "nota": "The group Le articolate. Ten minutes, the sentences are always new"
      },
      {
        "titolo": "Ready-made phrases, out loud",
        "href": "https://talkwithfabio.com/esercizi/prime-frasi/",
        "nota": "The same idea as our chunks. Say them out loud, do not just read them"
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
    "aggiornato": "27 ottobre 2026",
    "ultima": {
      "quando": "2026-10-27T09:00:00+01:00",
      "fatto": [
        "Passato prossimo",
        "What was the question?",
        "Guess who?: you guessed the person"
      ]
    },
    "prossima": {
      "quando": "2026-10-28T09:00:00+01:00",
      "obiettivo": "Passato prossimo with the right helper verb, essere or avere, and asking good questions.",
      "attivita": [
        {
          "titolo": "Essere or avere? Every day, five minutes",
          "href": "",
          "nota": "Sono andata, ho mangiato..."
        },
        {
          "titolo": "What was the question? The easy version",
          "href": "",
          "nota": "You read the answer and find the question"
        },
        {
          "titolo": "Guess who?",
          "href": "",
          "nota": "Describing people"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Passato prossimo 1: essere or avere?",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/?mode=aux",
        "nota": "A few minutes every day"
      },
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Level 1, then level 2"
      }
    ]
  }

};
