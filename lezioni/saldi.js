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

var SALDI_AGGIORNATO = "24 settembre 2026, 11:00";

var SALDI = {

  "elena-8qw": {
    nome: "Elena",
    pacchetto: 2,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 0,
    rimaste: 2,
    prossime: [],
    promemoria: "Per Fabio: aggiungi la mail di Elena a mail-studenti.json e il conteggio diventa automatico."
  },

  "sophie-6zk": {
    nome: "Sophie",
    pacchetto: 10,
    inizio: "2026-09-15",
    fatte_prima: 3,
    fatte: 5,
    prenotate: 1,
    rimaste: 4,
    prossime: [
      { quando: "2026-09-28T20:00:00+02:00", gestisci: "https://cal.com/booking/4fhVRYitKeELqec1soSxiw?changes=true" }
    ]
  },

  "rafaela-yrd": {
    nome: "Rafaela",
    pacchetto: 26,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 1,
    prenotate: 0,
    rimaste: 25,
    prossime: []
  },

  "kristina-xix": {
    nome: "Kristina",
    pacchetto: 6,
    inizio: "2026-09-21",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 0,
    rimaste: 6,
    prossime: []
  }

};
