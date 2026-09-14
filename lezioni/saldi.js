/* =====================================================================
   SALDI DELLE LEZIONI

   Una riga per studente. Questo è l'unico file da toccare quando
   qualcuno fa una lezione o compra un pacchetto nuovo.

   Come si legge una riga:

     "K7F2": { nome:"Kristina", pacchetto:8, rimaste:5,
               link:"https://cal.com/d/xxxxxxxx/lezione" },

     "K7F2"     il codice personale. Va bene qualsiasi cosa, basta che sia
                difficile da indovinare. Il suo indirizzo diventa
                talkwithfabio.com/lezioni/?c=K7F2
     nome       come vuoi salutarlo nella pagina (solo il nome, niente cognomi)
     pacchetto  quante lezioni ha comprato in tutto
     rimaste    quante gliene restano: è il numero che aggiorni dopo ogni lezione
     link       il suo link privato di Cal.com con il limite di usi.
                Se lo lasci vuoto ("") il pulsante porta alla pagina normale
                di prenotazione.
     nota       facoltativa, una riga tua che compare sotto il saldo

   Attenzione: questo file è pubblico, come tutto il sito. Chi ha il codice
   vede quel saldo, quindi niente cognomi, indirizzi o cifre pagate.

   Ricordati di aggiornare anche la data qui sotto: compare in fondo alla
   pagina e fa capire allo studente quanto è fresco il numero.
   ===================================================================== */

var SALDI_AGGIORNATO = "14 settembre 2026";

var SALDI = {

  "DEMO": { nome: "Fabio", pacchetto: 8, rimaste: 5, link: "",
            nota: "Questa è la pagina di prova: cancella questa riga quando hai messo gli studenti veri." }

  /* Esempio di riga vera, da copiare togliendo le barre:

  ,"K7F2": { nome: "Kristina", pacchetto: 8, rimaste: 5,
             link: "https://cal.com/d/xxxxxxxx/lezione" }

  */

};
