# La pubblicazione da Drive

Claude prepara i materiali delle lezioni (attivita per l'aula, esercizi,
piani della prossima lezione) e li mette nella cartella Drive
**Talk with Fabio · Lezioni / Uscita sito**. Il workflow "Pubblica da
Drive" li porta nella repo ogni mezz'ora. Nessun computer acceso.

## Da fare una volta sola

1. **Abilitare la Google Drive API** nello stesso progetto Google Cloud
   del service account del conteggio (`console.cloud.google.com`,
   API e servizi, Libreria, "Google Drive API", Abilita).
2. **Condividere la cartella "Uscita sito"** con la mail del service
   account (quella che finisce per `.iam.gserviceaccount.com`) come
   **Visualizzatore**. Basta quella cartella, non tutto Drive.

Il segreto e lo stesso del conteggio, `GCAL_SA_KEY`: non serve altro.

## Per sapere se funziona

Linguetta Actions, workflow "Pubblica da Drive", Run workflow. Nel
riepilogo del giro c'e l'elenco di cosa ha pubblicato e cosa ha
scartato. Un 403 o 404 da Drive vuol dire che manca uno dei due passi
sopra.

## Cosa accetta

- file dentro `aula-pfr2u9/` ed `esercizi/`, col percorso scritto nel
  nome e `__` al posto della barra (`aula-pfr2u9__nuovo-gioco__index.html`)
- piani delle lezioni, `piano__CODICE.json`, che finiscono in
  `lezioni/piano.js` e compaiono sulla pagina `/lezioni/?c=CODICE`

Tutto il resto viene scartato. I piani con una chiocciola dentro non si
pubblicano mai: il file e pubblico. Per lo stesso percorso vince il file
piu recente; quelli gia pubblicati sono segnati in
`scripts/uscita-fatti.json`.

## La pagina dello studente

Chi ha un pacchetto (riga in `saldi.js`) vede il piano sotto il saldo.
Chi ha solo il piano, cioe gli studenti Preply, vede una pagina ridotta:
prossima lezione, attivita, compiti. Niente saldo, niente calendario,
niente prenotazioni o pagamenti, per restare dentro le regole di Preply.
