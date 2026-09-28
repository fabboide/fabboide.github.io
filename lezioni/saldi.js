/* =====================================================================
   SALDI DELLE LEZIONI

   Una riga per studente. I primi quattro campi li decidi tu (o li scrivo
   io quando me lo dici), gli ultimi quattro si aggiornano da soli ogni
   notte leggendo il calendario.

     "sophie-6zk": {
       nome: "Sophie",                        come la saluta la pagina
       pacchetto: 10,                         quante lezioni ha comprato
       inizio: "2026-09-15",                  da quando si conta
       fatte_prima: 3,                        lezioni gia fatte prima di quella data

       fatte: 4, prenotate: 1, rimaste: 5,    calcolati dal calendario, non toccare a mano
       passate: [                             le lezioni gia fatte, con data e ora
         "2026-09-17T11:00:00+02:00"
       ],
       prossime: [                            le lezioni gia prenotate
         { quando: "2026-09-17T10:00:00+02:00",
           gestisci: "https://cal.com/booking/xxxx?changes=true" }
       ]
     }

   LE MAIL NON STANNO QUI. Questo file e pubblico, quindi gli indirizzi
   delle studentesse vivono sul computer di Fabio, in
   Documents/talkwithfabio/mail-studenti.json. Il conteggio notturno legge
   di la per riconoscere le lezioni sul calendario, e qui scrive solo i
   numeri. Per far partire il conteggio di uno studente nuovo si aggiunge
   una riga a quel file, non a questo.

   Le date in "quando" sono istanti precisi: la pagina le mostra nel fuso
   orario dello studente, qualunque sia, perche a convertirle ci pensa il
   suo browser.

   Il campo "gestisci" e il link della singola prenotazione su Cal.com:
   apre la pagina dove lo studente sposta o disdice da solo, e la
   disdetta arriva a Fabio via mail. Lo pesca il conteggio notturno dalla
   descrizione dell'evento. Se manca, la pagina mostra solo l'orario e
   resta il "scrivimi" sotto l'elenco.

   Il campo "nota" compare nella pagina e lo legge lo studente. Per gli
   appunti tuoi usa "promemoria", che la pagina ignora.

   Il codice ("sophie-6zk") e il suo indirizzo personale:
   talkwithfabio.com/lezioni/?c=sophie-6zk

   Il conteggio automatico guarda solo il calendario principale, e conta
   un evento come lezione di quella persona quando la sua mail e tra gli
   invitati. Le lezioni Preply stanno su un altro calendario, quindi non
   entrano nel conto. Senza mail nel file privato il conteggio resta
   fermo e i numeri vanno messi a mano.

   Questo file e pubblico, come tutto il sito: niente cognomi, niente
   mail, niente cifre pagate, codici difficili da indovinare.
   ===================================================================== */

var SALDI_AGGIORNATO = "28 settembre 2026, 23:30";

var SALDI = {

  "luis-q4m": {
    nome: "Luis",
    pacchetto: 4,
    inizio: "2026-09-28",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 1,
    rimaste: 3,
    passate: [],
    prossime: [
      { quando: "2026-10-09T09:00:00+02:00" }
    ],
    promemoria: "Per Fabio: le lezioni di agosto e inizio settembre (27/8, 28/8, 3/9, 10/9) restano fuori da questo pacchetto, il conteggio parte dal 28 settembre. Se vanno incluse, si sposta indietro inizio e si alza pacchetto."
  },

  "elena-8qw": {
    nome: "Elena",
    pacchetto: 2,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 0,
    rimaste: 2,
    passate: [],
    prossime: [],
    promemoria: "Per Fabio: aggiungi la mail di Elena a mail-studenti.json e il conteggio diventa automatico."
  },

  "sophie-6zk": {
    nome: "Sophie",
    pacchetto: 10,
    inizio: "2026-08-26",
    fatte_prima: 0,
    fatte: 5,
    prenotate: 0,
    rimaste: 5,
    passate: [
      "2026-08-26T12:00:00+02:00",
      "2026-09-01T12:00:00+02:00",
      "2026-09-10T12:00:00+02:00",
      "2026-09-17T11:00:00+02:00",
      "2026-09-21T13:00:00+02:00"
    ],
    prossime: []
  },

  "rafaela-yrd": {
    nome: "Rafaela",
    pacchetto: 26,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 1,
    prenotate: 0,
    rimaste: 25,
    passate: [
      "2026-09-21T14:00:00+02:00"
    ],
    prossime: []
  },

  "kristina-xix": {
    nome: "Kristina",
    pacchetto: 6,
    inizio: "2026-09-21",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 1,
    rimaste: 5,
    passate: [],
    prossime: [
      { quando: "2026-10-08T17:00:00+02:00", gestisci: "https://cal.com/booking/asKRjCiSj1X5Y4F3NH6UEy?changes=true" }
    ]
  }

};
