/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "3 novembre 2026, 11:02";

var PIANO = {

  "ari-p49": {
    "nome": "Ari",
    "aggiornato": "2 novembre 2026",
    "ultima": {
      "quando": "2026-11-02T22:00:00+01:00",
      "fatto": [
        "Senza ripetere: rispondi al volo",
        "Senza ripetere: il racconto. Bravissima!"
      ]
    },
    "prossima": {
      "quando": "2026-11-04T22:00:00+01:00",
      "obiettivo": "Usare ne, ci e i pronomi parlando, sempre di più senza pensarci.",
      "attivita": [
        {
          "titolo": "Rispondi al volo",
          "href": "",
          "nota": "Più veloce di oggi"
        },
        {
          "titolo": "Il racconto",
          "href": "",
          "nota": "Gli ultimi due"
        },
        {
          "titolo": "L'amica curiosa",
          "href": "",
          "nota": "Tre minuti, cinque paroline, senza ripetere"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Ne, ci e i pronomi",
        "href": "https://talkwithfabio.com/esercizi/pronomi/",
        "nota": "La sfida da 60 secondi: batti il tuo record"
      },
      {
        "titolo": "Due pronomi insieme",
        "href": "https://talkwithfabio.com/esercizi/pronomi-combinati/",
        "nota": "Glielo, me ne, ce l'ho"
      }
    ]
  },

  "bianca-hco": {
    "nome": "Bianca",
    "aggiornato": "2 novembre 2026",
    "ultima": {
      "quando": "2026-11-02T15:00:00+01:00",
      "fatto": [
        "Describing people: quick review",
        "Clothes and colours with Il guardaroba. Very good!"
      ]
    },
    "prossima": {
      "quando": "2026-11-09T15:00:00+01:00",
      "obiettivo": "A whole lesson on fluency: keep talking without stopping, even when a word is missing.",
      "attivita": [
        {
          "titolo": "Warm-up: what are you wearing today?",
          "href": "",
          "nota": "Start from what you already know"
        },
        {
          "titolo": "The story ladder",
          "href": "",
          "nota": "One story, three times: less time and less help each round"
        },
        {
          "titolo": "Non mi fermo",
          "href": "",
          "nota": "Describe a word without saying it. Missing a word? Use a bridge phrase"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Dialogues to repeat",
        "href": "https://talkwithfabio.com/dialoghi/",
        "nota": "Read aloud, then hide your lines and say them again"
      },
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Try level 2: you write the questions"
      }
    ]
  },

  "ellie-3mw": {
    "nome": "Ellie",
    "aggiornato": "2 novembre 2026",
    "ultima": {
      "quando": "2026-10-29T14:30:00+01:00",
      "fatto": [
        "Verb roulette",
        "Guess who? Very good!",
        "A bit of Halloween"
      ]
    },
    "prossima": {
      "quando": "2026-11-03T15:00:00+01:00",
      "obiettivo": "Tell me about your Halloween party, then clothes and colours.",
      "attivita": [
        {
          "titolo": "How was the party?",
          "href": "",
          "nota": "Com'eri vestita? Quante persone sono venute?"
        },
        {
          "titolo": "Verb roulette",
          "href": "",
          "nota": "Ten minutes of verbs"
        },
        {
          "titolo": "Il guardaroba",
          "href": "",
          "nota": "Clothes and colours: maglietta rossa, pantaloni neri"
        },
        {
          "titolo": "Conversation",
          "href": "",
          "nota": "Ten minutes at the end"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Now it understands eye colours and skin too"
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
    "aggiornato": "2 novembre 2026",
    "ultima": {
      "quando": "2026-11-02T11:00:00+01:00",
      "fatto": [
        "Conversazione: la vacanza a Cipro"
      ]
    },
    "prossima": {
      "quando": "2026-11-09T11:00:00+01:00",
      "obiettivo": "Raccontare la vacanza al passato, adesso che sei tornato: passato prossimo e imperfetto insieme.",
      "attivita": [
        {
          "titolo": "Il ritorno",
          "href": "",
          "nota": "Cipro e Polonia a confronto: più caldo di, meno caro di"
        },
        {
          "titolo": "Il Compressore: la vacanza a Cipro",
          "href": "",
          "nota": "Lo stesso racconto in 90, 60 e 40 secondi"
        },
        {
          "titolo": "Conversazione",
          "href": "",
          "nota": "La cosa più bella del viaggio, un imprevisto, un consiglio per chi ci va"
        },
        {
          "titolo": "Questa domenica, Olly",
          "href": "",
          "nota": "Dalla seconda strofa alla fine"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Passato prossimo",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/",
        "nota": "Essere o avere? Per raccontare il viaggio"
      },
      {
        "titolo": "Prepositions, simple and articulated",
        "href": "https://talkwithfabio.com/esercizi/preposizioni/",
        "nota": "A Cipro, in Polonia, al mare"
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

  "luis-q4m": {
    "nome": "Luis",
    "aggiornato": "29 ottobre 2026",
    "ultima": {
      "quando": "2026-10-29T16:30:00+01:00",
      "fatto": [
        "Describing people: quick review",
        "Clothes: we started today"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "A short warm-up with verbs, more clothes, then half an hour of conversation.",
      "attivita": [
        {
          "titolo": "Verb roulette",
          "href": "",
          "nota": "Five to ten minutes"
        },
        {
          "titolo": "Il guardaroba",
          "href": "",
          "nota": "Clothes and colours: maglietta rossa, pantaloni neri"
        },
        {
          "titolo": "Conversation, 30 minutes",
          "href": "",
          "nota": "Real people, your childhood, and free talk"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Chi è? Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Level 2 or 3: you write the questions"
      },
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Look at the clothes and colours"
      }
    ]
  },

  "rafaela-yrd": {
    "nome": "Rafaela",
    "aggiornato": "3 novembre 2026",
    "ultima": {
      "quando": "2026-10-30T09:30:00+01:00",
      "fatto": [
        "Conversation",
        "The past: passato prossimo"
      ]
    },
    "prossima": {
      "quando": "2026-11-03T09:30:00+01:00",
      "obiettivo": "We keep going with the past: what you did, where you went, with essere or avere.",
      "attivita": [
        {
          "titolo": "Verb roulette",
          "href": "",
          "nota": "Ten minutes in the past: sono andata, ho mangiato..."
        },
        {
          "titolo": "What was the question?",
          "href": "",
          "nota": "Questions in the past: Dove sei andata? Cosa hai fatto?"
        },
        {
          "titolo": "Conversation",
          "href": "",
          "nota": "Your weekend, in the past, and three questions back to me"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Passato prossimo 1: essere or avere?",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/?mode=aux",
        "nota": "A few minutes every day"
      }
    ]
  },

  "robmarie-7vc": {
    "nome": "Rob & Marie",
    "aggiornato": "2 novembre 2026",
    "ultima": {
      "quando": "2026-11-02T10:00:00+01:00",
      "fatto": [
        "Describing people: eyes, height, build, age, beard and glasses",
        "Ha + capelli, occhi, barba / è + alto, magro, giovane"
      ]
    },
    "prossima": {
      "quando": "2026-11-09T10:00:00+01:00",
      "obiettivo": "A whole lesson of speaking. No new grammar: just getting the words out, with each other.",
      "attivita": [
        {
          "titolo": "Verb roulette",
          "href": "",
          "nota": "Five minutes, and every sentence true for you"
        },
        {
          "titolo": "The vanishing dialogue",
          "href": "",
          "nota": "Read it together, then say it with fewer and fewer words on screen"
        },
        {
          "titolo": "Two plus one",
          "href": "",
          "nota": "Answer with two pieces of information, then ask one question back: E tu?"
        },
        {
          "titolo": "Who are you today?",
          "href": "",
          "nota": "A new identity, a three minute meeting, then what did you learn about the other?"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Dialogues to repeat",
        "href": "https://talkwithfabio.com/dialoghi/",
        "nota": "The dialogue Conoscersi: read it in two voices, then hide your lines"
      },
      {
        "titolo": "Guess who, on your own",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "To keep describing people fresh"
      }
    ]
  },

  "samy-k74": {
    "nome": "Samy",
    "aggiornato": "3 novembre 2026",
    "ultima": {
      "quando": "2026-10-29T11:30:00+01:00",
      "fatto": [
        "Verb roulette",
        "Describing people: hair and eyes",
        "Guess who, with the faces game",
        "Describing your family"
      ]
    },
    "prossima": {
      "quando": "2026-11-12T18:00:00+01:00",
      "obiettivo": "Describe a person from head to toe, asking the questions on your own.",
      "attivita": [
        {
          "titolo": "Verb roulette",
          "href": "",
          "nota": "Ten minutes: passato prossimo, essere or avere"
        },
        {
          "titolo": "Identikit",
          "href": "",
          "nota": "You ask the questions, without help on the screen"
        },
        {
          "titolo": "Conversation",
          "href": "",
          "nota": "Describe a real person: a friend, a colleague, someone famous"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Guess who, in Italian",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Optional. Level 2: write the questions yourself"
      },
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Optional. Hair, face, clothes"
      }
    ]
  },

  "sophie-6zk": {
    "nome": "Sophie",
    "aggiornato": "30 ottobre 2026",
    "ultima": {
      "quando": "2026-10-30T10:30:00+01:00",
      "fatto": [
        "Ne, ci e i pronomi",
        "Il congiuntivo vivo",
        "Se vincessi la lotteria, comprerei...: congiuntivo e condizionale",
        "Il caso: un enigma da risolvere con le domande"
      ]
    },
    "prossima": {
      "quando": "2026-11-02T16:00:00+01:00",
      "obiettivo": "Continuare con ne, ci e i pronomi, e usare insieme congiuntivo e condizionale: se potessi, farei.",
      "attivita": [
        {
          "titolo": "Senza ripetere",
          "href": "",
          "nota": "Ne, ci e i pronomi dentro il discorso"
        },
        {
          "titolo": "Il congiuntivo vivo",
          "href": "",
          "nota": "Andiamo avanti dalle fasi che mancano"
        },
        {
          "titolo": "E se...?",
          "href": "",
          "nota": "La catena del se, i dilemmi e «mi sentirei... se...»"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Ne, ci e i pronomi",
        "href": "https://talkwithfabio.com/esercizi/pronomi/",
        "nota": "Ci vado spesso, ne ho bisogno, se ce n'è bisogno"
      },
      {
        "titolo": "Aggettivo + infinito: di, da, a o niente",
        "href": "https://talkwithfabio.com/esercizi/aggettivo-infinito/",
        "nota": "È bello partire, sono pronta a partire, è facile da dire"
      }
    ]
  }

};
