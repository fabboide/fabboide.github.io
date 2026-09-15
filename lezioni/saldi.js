/* =====================================================================
   SALDI DELLE LEZIONI

   Una riga per studente. È l'unico file da toccare quando qualcuno fa una
   lezione o compra un pacchetto nuovo.

   Come si legge una riga:

     "kristina-7fq": { nome:"Kristina", mail:"kristina@esempio.com",
                       pacchetto:8, rimaste:5 },

     "kristina-7fq"  il codice personale, cioè il suo indirizzo:
                     talkwithfabio.com/lezioni/?c=kristina-7fq
                     Metti il nome più due o tre caratteri a caso, così è
                     personale ma nessuno ci arriva tirando a indovinare.
     nome            come la saluti nella pagina (solo il nome)
     mail            facoltativa: se c'è, il calendario si presenta già
                     compilato e a lei restano due clic
     pacchetto       quante lezioni ha comprato in tutto
     rimaste         quante gliene restano: è il numero che aggiorni tu
     nota            facoltativa, una riga tua sotto il saldo
     link            facoltativo: un link di Cal.com diverso da quello
                     normale (per esempio un link privato). Se lo lasci
                     fuori, si usa il calendario di sempre.

   Attenzione: questo file è pubblico, come tutto il sito. Niente cognomi,
   niente cifre pagate. La mail si può togliere se preferisci: serve solo a
   fargli risparmiare due campi da riempire.

   Aggiorna anche la data qui sotto: compare in fondo alla pagina e dice
   allo studente quanto è fresco il numero.
   ===================================================================== */

var SALDI_AGGIORNATO = "15 settembre 2026";

var SALDI = {

  "sophie-6zk": { nome: "Sophie", mail: "sophiephilippe0@gmail.com", pacchetto: 10, rimaste: 6 },

  "rafaela-yrd": { nome: "Rafaela", pacchetto: 24, rimaste: 24 },

  "demo": { nome: "Fabio", pacchetto: 8, rimaste: 5,
            nota: "Questa è la pagina di prova: cancella questa riga quando hai messo gli studenti veri." }

  /* Esempio di riga vera, da copiare togliendo le barre:

  ,"kristina-7fq": { nome: "Kristina", mail: "kristina@esempio.com",
                     pacchetto: 8, rimaste: 5 }

  */

};
