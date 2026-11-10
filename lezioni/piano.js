/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "10 novembre 2026, 04:29";

var PIANO = {

  "ari-p49": {
    "nome": "Ari",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-04T22:00:00+01:00",
      "fatto": [
        "Senza ripetere: ne, ci e i pronomi parlando"
      ]
    },
    "prossima": {
      "quando": "2026-11-11T22:00:00+01:00",
      "obiettivo": "Ne, ci e i pronomi in gioco, poi un argomento nuovo: l'imperativo con i pronomi. Chiamala! Dimmelo! Non farlo!",
      "attivita": [
        {
          "titolo": "Senza ripetere",
          "href": "",
          "nota": "Dieci minuti di ripasso al volo"
        },
        {
          "titolo": "Paroline in gioco",
          "href": "",
          "nota": "Passa la palla, e se c'è tempo Il segreto"
        },
        {
          "titolo": "Dimmelo!",
          "href": "",
          "nota": "A chi parla? e Posso?"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Due pronomi insieme",
        "href": "https://talkwithfabio.com/esercizi/pronomi-combinati/",
        "nota": "Glielo, me ne, ce l'ho: servono anche nell'imperativo"
      },
      {
        "titolo": "Ne, ci e i pronomi",
        "href": "https://talkwithfabio.com/esercizi/pronomi/",
        "nota": "La sfida da 60 secondi: batti il tuo record"
      }
    ]
  },

  "bianca-hco": {
    "nome": "Bianca",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T15:00:00+01:00",
      "fatto": [
        "Fluency with Il filo: one story, told three times, without stopping. Very useful!"
      ]
    },
    "prossima": {
      "quando": "2026-11-16T15:00:00+01:00",
      "obiettivo": "Real conversation: start your sentences easily, ask questions back, and get what you need in a role-play.",
      "attivita": [
        {
          "titolo": "Warm-up: what did you do at the weekend?",
          "href": "",
          "nota": "Use the bridge phrases from last time"
        },
        {
          "titolo": "Attacca e rilancia",
          "href": "",
          "nota": "Start with allora, beh, secondo me... and always ask something back"
        },
        {
          "titolo": "Missioni in Italia",
          "href": "https://talkwithfabio.com/missioni/",
          "nota": "Two missions: the bar and the station. I play the barista!"
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
        "titolo": "Missioni in Italia",
        "href": "https://talkwithfabio.com/missioni/",
        "nota": "After the lesson: try another mission on your own"
      }
    ]
  },

  "catherina-d4h": {
    "nome": "Catherina & Nunzio",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T12:30:00+01:00",
      "fatto": [
        "Conversation practice"
      ]
    },
    "prossima": {
      "quando": "2026-11-10T11:00:00+01:00",
      "obiettivo": "Talk to each other in Italian, not just to the teacher.",
      "attivita": [
        {
          "titolo": "Noi due: conversation games for two",
          "href": "",
          "nota": "We play it together"
        }
      ]
    },
    "compiti": []
  },

  "elena-8qw": {
    "nome": "Elena",
    "aggiornato": "6 novembre 2026",
    "ultima": {
      "quando": "2026-11-06T17:30:00+01:00",
      "fatto": [
        "Senza ripetere: ne, ci e i pronomi parlando"
      ]
    },
    "prossima": {
      "quando": "2026-11-13T17:00:00+01:00",
      "obiettivo": "Andiamo avanti con ne, ci e i pronomi: prima le tue domande sulla grammatica, poi tutto a voce.",
      "attivita": [
        {
          "titolo": "Le tue domande sulla guida «Le paroline»",
          "href": "",
          "nota": "Partiamo da quello che non ti torna"
        },
        {
          "titolo": "Senza ripetere",
          "href": "",
          "nota": "Più veloce, anche con due paroline insieme"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Ne, ci e i pronomi",
        "href": "https://talkwithfabio.com/esercizi/pronomi/",
        "nota": "Allenamento e sfida da 60 secondi"
      },
      {
        "titolo": "Due pronomi insieme",
        "href": "https://talkwithfabio.com/esercizi/pronomi-combinati/",
        "nota": "Glielo, me ne, ce l'ho"
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

  "jasmine-jo9": {
    "nome": "Jasmine",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T19:00:00+01:00",
      "fatto": [
        "Getting to know each other: your Italian roots and your summers in Tuscany",
        "A first look at where your Italian flows and where it gets stuck"
      ]
    },
    "prossima": {
      "quando": "2026-11-18T19:00:00+01:00",
      "obiettivo": "Talk about your day and your summers in Italy, with the verbs coming out on their own. No grammar tables, just conversation.",
      "attivita": [
        {
          "titolo": "Verbi in tasca: ready-made phrases",
          "href": "",
          "nota": "I ask, you answer, then you ask me back"
        },
        {
          "titolo": "Small talk about your week",
          "href": "",
          "nota": "Just chatting, in Italian"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "First phrases",
        "href": "https://talkwithfabio.com/esercizi/prime-frasi/",
        "nota": "Five minutes, no studying: listen and repeat"
      }
    ]
  },

  "luana-zqy": {
    "nome": "Luana",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T20:30:00+01:00",
      "fatto": [
        "Fluency with Il filo: one story, told without stopping"
      ]
    },
    "prossima": {
      "quando": "2026-11-18T20:30:00+01:00",
      "obiettivo": "Talk about what you did: yesterday, last weekend, your last shopping trip. Just conversation.",
      "attivita": [
        {
          "titolo": "Warm-up: what did you do at the weekend?",
          "href": "",
          "nota": "Free chat"
        },
        {
          "titolo": "Verbi in tasca: yesterday",
          "href": "",
          "nota": "I ask, you answer, then you ask me back"
        },
        {
          "titolo": "Your last shopping trip",
          "href": "",
          "nota": "Clothes, shoes or a perfume: tell me everything!"
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
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T09:00:00+01:00",
      "fatto": [
        "How do you say it? Talking only in Italian, even when a word is missing"
      ]
    },
    "prossima": {
      "quando": "2026-11-10T09:30:00+01:00",
      "obiettivo": "Talk, talk, talk: only Italian, as much as you can.",
      "attivita": [
        {
          "titolo": "My words",
          "href": "",
          "nota": "The words you were missing today come back"
        },
        {
          "titolo": "Three jokers",
          "href": "",
          "nota": "Two topics, only three English words allowed"
        },
        {
          "titolo": "How do you say it?",
          "href": "",
          "nota": "Explain places, people and actions in Italian"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "The first 190 words",
        "href": "https://talkwithfabio.com/esercizi/parole-a1/",
        "nota": "Ten minutes a day: more words, less English"
      },
      {
        "titolo": "Passato prossimo 1: essere or avere?",
        "href": "https://talkwithfabio.com/esercizi/passato-prossimo/?mode=aux",
        "nota": "A few minutes every day"
      }
    ]
  },

  "robert-zll": {
    "nome": "Robert",
    "aggiornato": "5 novembre 2026",
    "ultima": {
      "quando": "2026-11-05T18:00:00+01:00",
      "fatto": [
        "Describing people: hair and eyes"
      ]
    },
    "prossima": {
      "quando": "2026-11-11T19:00:00+01:00",
      "obiettivo": "Describe a person from head to toe: face, height, build, age, beard and glasses. The last step before A2!",
      "attivita": [
        {
          "titolo": "Identikit",
          "href": "",
          "nota": "Find the mystery person by asking questions, first with help, then on your own"
        },
        {
          "titolo": "Your description",
          "href": "",
          "nota": "At the end you describe a person by yourself"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Flashcards: hair, face, build, age"
      },
      {
        "titolo": "Guess who, in Italian",
        "href": "https://talkwithfabio.com/esercizi/indovina-chi/",
        "nota": "Practise the questions before Wednesday"
      }
    ]
  },

  "robmarie-7vc": {
    "nome": "Rob & Marie",
    "aggiornato": "9 novembre 2026",
    "ultima": {
      "quando": "2026-11-09T10:00:00+01:00",
      "fatto": [
        "Parliamo! A whole lesson of speaking. Well done!"
      ]
    },
    "prossima": {
      "quando": "2026-11-11T13:00:00+01:00",
      "obiettivo": "More conversation: your topic first, then new games where only you two talk.",
      "attivita": [
        {
          "titolo": "Your topic",
          "href": "",
          "nota": "Tell me the topic you chose at home and say it without the screen"
        },
        {
          "titolo": "Parliamo!",
          "href": "",
          "nota": "Two plus one and Who are you today?"
        },
        {
          "titolo": "Three jokers",
          "href": "",
          "nota": "Three minutes on a topic, only three English words allowed"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Parliamo! at home",
        "href": "https://talkwithfabio.com/aula-pfr2u9/parliamo/",
        "nota": "Choose a topic, 10 to 15 minutes: the instructions are in my email"
      },
      {
        "titolo": "Dialogues to repeat",
        "href": "https://talkwithfabio.com/dialoghi/",
        "nota": "Read in two voices, then hide your lines"
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
    "aggiornato": "3 novembre 2026",
    "ultima": {
      "quando": "2026-11-03T11:30:00+01:00",
      "fatto": [
        "Senza ripetere: ne, ci e i pronomi dentro il discorso",
        "Rispondi al volo, il racconto e l'amica curiosa"
      ]
    },
    "prossima": {
      "quando": "2026-11-10T10:30:00+01:00",
      "obiettivo": "Ne, ci e i pronomi sempre più dentro il parlato, anche due insieme: glielo, ce l'ho, me ne ricordo.",
      "attivita": [
        {
          "titolo": "Senza ripetere",
          "href": "",
          "nota": "Domande nuove, i pronomi doppi, racconti e temi nuovi"
        },
        {
          "titolo": "Paroline in gioco",
          "href": "",
          "nota": "Il segreto, l'eredità della zia e passa la palla"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Ne, ci e i pronomi",
        "href": "https://talkwithfabio.com/esercizi/pronomi/",
        "nota": "Ci vado spesso, ne ho due, la chiamo, le scrivo"
      },
      {
        "titolo": "Due pronomi insieme",
        "href": "https://talkwithfabio.com/esercizi/pronomi-combinati/",
        "nota": "Glielo do, me l'ha detto, ce n'è ancora"
      }
    ]
  }

};
