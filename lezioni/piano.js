/* ===================================================================
   PIANI DELLE LEZIONI

   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la
   prossima pubblicazione lo riscrive. Per cambiare il piano di uno
   studente si mette un file piano__CODICE.json nella cartella Drive
   "Uscita sito" (lo fa Claude dopo gli appunti della lezione).

   File pubblico: niente mail, niente cognomi, niente note private.
   =================================================================== */

var PIANO_AGGIORNATO = "19 novembre 2026, 02:28";

var PIANO = {

  "ari-p49": {
    "nome": "Ari",
    "aggiornato": "18 novembre 2026",
    "ultima": {
      "quando": "2026-11-18T22:00:00+01:00",
      "fatto": [
        "Ti è successo davvero? Due storie vere e una inventata",
        "Le reazioni: Ma dai!, Non ci credo!, Che figuraccia!"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Raccontare aneddoti come un italiano: la scena, cosa è successo, il finale. Più attività, meno grammatica.",
      "attivita": [
        {
          "titolo": "Prova generale",
          "href": "",
          "nota": "La tua storia migliore in un minuto, ancora meglio"
        },
        {
          "titolo": "Che figuraccia!",
          "href": "",
          "nota": "Le figuracce: le tue e le mie"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "La volta che...",
        "href": "",
        "nota": "Mandami un vocale di 60-90 secondi su Preply: vero o inventato? Ti dico se ti credo!"
      }
    ]
  },

  "bianca-hco": {
    "nome": "Bianca",
    "aggiornato": "16 novembre 2026",
    "ultima": {
      "quando": "2026-11-16T15:00:00+01:00",
      "fatto": [
        "A whole hour of conversation, using what you already know"
      ]
    },
    "prossima": {
      "quando": "2026-11-23T15:00:00+01:00",
      "obiettivo": "From now on, only Italian! Keep talking with what you know, then tell a trip: where you left from, where you went, how long you stayed.",
      "attivita": [
        {
          "titolo": "How was your week?",
          "href": "",
          "nota": "Only Italian: if a word is missing, say it another way"
        },
        {
          "titolo": "There and back",
          "href": "",
          "nota": "Draw my friend's trip on the map, then tell me yours"
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
        "nota": "Try a mission on your own"
      }
    ]
  },

  "brett-fjh": {
    "nome": "Brett",
    "aggiornato": "16 novembre 2026",
    "ultima": {
      "quando": "2026-11-16T19:00:00+01:00",
      "fatto": [
        "The weather: Che tempo fa?"
      ]
    },
    "prossima": {
      "quando": "2026-11-23T18:00:00+01:00",
      "obiettivo": "Back to the basics: all the Italian words you already know, then packing a suitcase.",
      "attivita": [
        {
          "titolo": "What's the weather like today?",
          "href": "",
          "nota": "Warm-up: tell me the weather where you are"
        },
        {
          "titolo": "Words you already know",
          "href": "",
          "nota": "You know more Italian than you think!"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Che tempo fa?",
        "href": "https://talkwithfabio.com/esercizi/che-tempo-fa/",
        "nota": "The weather words with audio and the 60-second game"
      },
      {
        "titolo": "Your first 80 phrases",
        "href": "https://talkwithfabio.com/esercizi/prime-frasi/",
        "nota": "A few minutes a day"
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
    "aggiornato": "17 novembre 2026",
    "ultima": {
      "quando": "2026-11-17T15:00:00+01:00",
      "fatto": [
        "The weather: Che tempo fa?",
        "The body: mi fa male la testa"
      ]
    },
    "prossima": {
      "quando": "2026-11-18T15:00:00+01:00",
      "obiettivo": "Read Italian signs and say what you can and can't do: posso, non posso, devo.",
      "attivita": [
        {
          "titolo": "Warm-up",
          "href": "",
          "nota": "What's the weather like? Does anything hurt?"
        },
        {
          "titolo": "Can I?",
          "href": "",
          "nota": "Help Kim at the museum and on the train"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Che tempo fa?",
        "href": "https://talkwithfabio.com/esercizi/che-tempo-fa/",
        "nota": "The weather words with audio and the 60-second game"
      },
      {
        "titolo": "Describing people",
        "href": "https://talkwithfabio.com/esercizi/descrivere/",
        "nota": "Flashcards: the body and more"
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
    "aggiornato": "18 novembre 2026",
    "ultima": {
      "quando": "2026-11-18T19:00:00+01:00",
      "fatto": [
        "Verbi in tasca: ready-made phrases",
        "The body and clothes",
        "The verb roulette"
      ]
    },
    "prossima": {
      "quando": "2026-11-23T20:00:00+01:00",
      "obiettivo": "Talk about your plans: what are you doing this weekend, with whom, where are you going? Just conversation.",
      "attivita": [
        {
          "titolo": "Your weekend",
          "href": "",
          "nota": "Cosa fai questo weekend? Con chi?"
        },
        {
          "titolo": "Verbi in tasca",
          "href": "",
          "nota": "The cards that are not in your pocket yet"
        },
        {
          "titolo": "Are you free on Saturday?",
          "href": "",
          "nota": "Invitations and plans: forse andiamo a cena insieme!"
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
    "aggiornato": "18 novembre 2026",
    "ultima": {
      "quando": "2026-11-18T20:30:00+01:00",
      "fatto": [
        "A whole lesson of conversation: your stories, books, music and favourite fandoms"
      ]
    },
    "prossima": {
      "quando": "2026-11-23T21:00:00+01:00",
      "obiettivo": "Tell your story in the past: what you did, and what it was like back then. Conversation, plus a real bit of lesson.",
      "attivita": [
        {
          "titolo": "Your story",
          "href": "",
          "nota": "What is it about? When did you start writing it?"
        },
        {
          "titolo": "Back in the Tumblr days",
          "href": "",
          "nota": "How old were you? What did you listen to?"
        },
        {
          "titolo": "Pitch it to a publisher",
          "href": "",
          "nota": "One minute to convince me!"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Your story in Italian",
        "href": "",
        "nota": "Write the plot in 5-6 lines and send it to Fabio on Preply"
      },
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
    "aggiornato": "16 novembre 2026",
    "ultima": {
      "quando": "2026-11-12T09:30:00+01:00",
      "fatto": [
        "The weather: Che tempo fa?",
        "My postcards and True or made up?"
      ]
    },
    "prossima": {
      "quando": "2026-11-17T09:30:00+01:00",
      "obiettivo": "Say what the weather is like where you are: fa caldo, c'è il sole, piove...",
      "attivita": [
        {
          "titolo": "fa, c'è or alone?",
          "href": "",
          "nota": "Sort the weather words and find the rule"
        },
        {
          "titolo": "Your postcard",
          "href": "",
          "nota": "Your city and today's weather"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Che tempo fa?",
        "href": "https://talkwithfabio.com/esercizi/che-tempo-fa/",
        "nota": "The weather words and the 60-second game"
      },
      {
        "titolo": "The first 190 words",
        "href": "https://talkwithfabio.com/esercizi/parole-a1/",
        "nota": "Ten minutes a day: more words, less English"
      }
    ]
  },

  "robert-zll": {
    "nome": "Robert",
    "aggiornato": "11 novembre 2026",
    "ultima": {
      "quando": "2026-11-05T18:00:00+01:00",
      "fatto": [
        "Describing people: hair and eyes"
      ]
    },
    "prossima": {
      "quando": "",
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
        "nota": "Practise the questions before the next lesson"
      }
    ]
  },

  "robmarie-7vc": {
    "nome": "Rob & Marie",
    "aggiornato": "16 novembre 2026",
    "ultima": {
      "quando": "2026-11-16T10:00:00+01:00",
      "fatto": [
        "The weather: Che tempo fa?"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Say what the weather is like where you are, then a new topic.",
      "attivita": [
        {
          "titolo": "Your weather mission",
          "href": "",
          "nota": "30 seconds each: the weather where you are, and in a city you'd love to be in"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Che tempo fa?",
        "href": "https://talkwithfabio.com/esercizi/che-tempo-fa/",
        "nota": "Together: the words, the 60-second game, then present the TV weather to each other"
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
    "aggiornato": "16 novembre 2026",
    "ultima": {
      "quando": "2026-11-16T18:00:00+01:00",
      "fatto": [
        "Acqua in bocca: una lezione sui segreti",
        "Verbi con la sorpresa: prendersela, cavarsela, passarsela",
        "Il treno ha fischiato: i primi due paragrafi"
      ]
    },
    "prossima": {
      "quando": "",
      "obiettivo": "Tre parti: un ripasso e poi avanti, altri verbi con la sorpresa, e Pirandello da dove ci siamo fermati.",
      "attivita": [
        {
          "titolo": "Ripasso e lezione nuova",
          "href": "",
          "nota": "Un ripasso veloce di Acqua in bocca, poi avanti"
        },
        {
          "titolo": "Verbi con la sorpresa",
          "href": "",
          "nota": "Farcela, metterci, volerci, andarsene, sentirsela..."
        },
        {
          "titolo": "Il treno ha fischiato",
          "href": "",
          "nota": "Da «Orbene, cento volte...» alla notte del fischio"
        }
      ]
    },
    "compiti": [
      {
        "titolo": "Rileggere «Il treno ha fischiato»",
        "href": "",
        "nota": "I due paragrafi di oggi e il pezzo dopo, a voce alta"
      },
      {
        "titolo": "Il congiuntivo, passo dopo passo",
        "href": "https://talkwithfabio.com/esercizi/congiuntivo/",
        "nota": "Ripasso delle forme"
      }
    ]
  }

};
