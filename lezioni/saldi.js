/* =====================================================================
   SALDI DELLE LEZIONI

   Una riga per studente. I primi cinque campi li decidi tu (o li scrivo
   io quando me lo dici), gli ultimi tre si aggiornano da soli ogni notte
   leggendo il calendario.

     "sophie-6zk": {
       nome: "Sophie",                        come la saluta la pagina
       mail: "sophie@esempio.com",            serve per riconoscere le sue lezioni sul calendario
       pacchetto: 10,                         quante lezioni ha comprato
       inizio: "2026-09-15",                  da quando si conta
       fatte_prima: 3,                        lezioni già fatte prima di quella data

       fatte: 3, prenotate: 1, rimaste: 6,    calcolati dal calendario, non toccare a mano
       prossime: ["2026-09-17T10:00:00+02:00"]   le lezioni già prenotate, con il fuso italiano
     }

   Le date in "prossime" sono istanti precisi: la pagina le mostra nel fuso
   orario dello studente, qualunque sia, perché a convertirle ci pensa il
   suo browser.

   Il campo "nota" compare nella pagina e lo legge lo studente. Per gli
   appunti tuoi usa "promemoria", che la pagina ignora.

   Il codice ("sophie-6zk") è il suo indirizzo personale:
   talkwithfabio.com/lezioni/?c=sophie-6zk

   Il conteggio automatico guarda solo il calendario principale, e conta
   un evento come lezione di quella persona quando la sua mail è tra gli
   invitati. Le lezioni Preply stanno su un altro calendario, quindi non
   entrano nel conto. Senza mail il conteggio resta fermo e i numeri
   vanno messi a mano.

   Questo file è pubblico, come tutto il sito: niente cognomi, niente
   cifre pagate, codici difficili da indovinare.
   ===================================================================== */

var SALDI_AGGIORNATO = "15 settembre 2026, 17:51";

var SALDI = {

  "elena-8qw": {
    nome: "Elena",
    mail: "",
    pacchetto: 2,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 0,
    rimaste: 2,
    prossime: [],
    promemoria: "Per Fabio: metti qui la mail di Elena e il conteggio diventa automatico."
  },

  "sophie-6zk": {
    nome: "Sophie",
    mail: "sophiephilippe0@gmail.com",
    pacchetto: 10,
    inizio: "2026-09-15",
    fatte_prima: 3,
    fatte: 3,
    prenotate: 1,
    rimaste: 6,
    prossime: ["2026-09-17T10:00:00+02:00"]
  },

  "rafaela-yrd": {
    nome: "Rafaela",
    mail: "",
    pacchetto: 24,
    inizio: "2026-09-15",
    fatte_prima: 0,
    fatte: 0,
    prenotate: 0,
    rimaste: 24,
    prossime: [],
    promemoria: "Per Fabio: appena prenota la prima lezione, qui va la sua mail e il conteggio diventa automatico. Questo campo non compare nella pagina."
  }

};
