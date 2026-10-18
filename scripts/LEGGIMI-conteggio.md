# Il conteggio delle lezioni

Il saldo che vede ogni studente su `/lezioni/?c=CODICE` viene dal
calendario di Fabio. Nessun computer deve essere acceso: gira tutto sui
server di GitHub.

## Come si tiene aggiornato, su tre strati

1. **Appena qualcuno prenota.** Cal.com chiama GitHub, GitHub fa partire
   il conteggio. Passa circa un minuto fra la prenotazione e il numero
   nuovo sulla pagina: il conteggio dura una quarantina di secondi e la
   pubblicazione del sito un altro po'.
2. **Appena una lezione finisce.** Qui non c'e niente da chiamare,
   perche nessuno prenota niente quando una lezione termina: e la pagina
   stessa che, sapendo che ore sono, sposta la lezione dalle prenotate
   alle fatte. Immediato e gratis.
3. **Ogni notte alle 4:17.** La rete di sicurezza. Ricalcola tutto da
   zero e sistema quello che gli altri due strati non possono vedere: un
   webhook perso, una lezione che Fabio sposta a mano sul calendario, un
   disservizio di Cal.com.

## I segreti su GitHub

Settings della repo, poi Secrets and variables, poi Actions.

| Nome | Cosa ci va dentro | |
|---|---|---|
| `GCAL_SA_KEY` | tutto il file JSON della chiave del service account Google | serve |
| `MAIL_STUDENTI` | tutto il contenuto di `mail-studenti.json` | serve |
| `DEPLOY_KEY` | la chiave privata di deploy della repo (il file `deploy-key`) | facoltativo |

`DEPLOY_KEY` **non serve**. Il dubbio era se un push fatto col token
automatico del workflow facesse ripartire la pubblicazione di GitHub
Pages. Verificato il 18 ottobre 2026 sul primo giro vero: il commit del
conteggio ha fatto partire da solo il "pages build and deployment", ed e
andato a buon fine. Il campo nel workflow resta, cosi se un giorno
servisse basta aggiungere il segreto senza toccare il codice.

Le mail delle studentesse stanno **solo** qui dentro. Nella repo non ci
finiscono mai, e il conteggio ha un controllo che si rifiuta di
pubblicare `saldi.js` se dentro trova una chiocciola.

Per aggiungere una studentessa al conteggio si modifica il segreto
`MAIL_STUDENTI`, non un file del sito.

## Il service account Google (una volta sola)

Serve perche su un server non c'e nessuno che clicca "autorizza".

1. Su `console.cloud.google.com` crea un progetto qualsiasi.
2. Abilita la **Google Calendar API**.
3. Crea un **service account** e scaricane una **chiave JSON**. Quel
   file e il valore del segreto `GCAL_SA_KEY`.
4. Copia la mail del service account, che finisce per
   `.iam.gserviceaccount.com`.
5. Su Google Calendar, impostazioni del calendario principale,
   **condividi con quella mail** dando il permesso
   **"Vedere tutti i dettagli dell'evento"**. Senza "tutti i dettagli"
   il conteggio non vede gli invitati e conta zero.

Un service account non scade e non va riautorizzato, al contrario di un
token OAuth personale.

## Il webhook di Cal.com

Impostazioni di Cal.com, sezione Webhooks, nuovo webhook.

- **Subscriber URL**: `https://api.github.com/repos/fabboide/fabboide.github.io/dispatches`
- **Event triggers**: Booking Created, Booking Rescheduled, Booking Cancelled
- **Custom headers**:
  - `Authorization` con valore `Bearer TUO_TOKEN`
  - `Accept` con valore `application/vnd.github+json`
- **Custom payload template**: `{"event_type":"prenotazione"}`

Il token e un **fine-grained personal access token** di GitHub, creato
in Settings, Developer settings, Personal access tokens. Va limitato
alla sola repo `fabboide.github.io` e gli basta il permesso
**Contents: Read and write**. Se gli metti una scadenza, segnatela:
quando scade il webhook smette di funzionare in silenzio e resta solo il
conteggio notturno.

Per sapere se funziona: prenota una lezione di prova e guarda la
linguetta Actions della repo. Se non parte niente, Cal.com nella sua
pagina dei webhook mostra la risposta di GitHub. Un 403 vuol dire che la
chiamata diretta non passa: in quel caso in mezzo serve un piccolo
Cloudflare Worker che riceva il webhook e rigiri la chiamata.

## Lanciarlo a mano

Linguetta Actions, workflow "Saldi lezioni", bottone **Run workflow**.

C'e una spunta **forza**. Serve perche il conteggio, per prudenza, non
pubblica un saldo che scende sotto zero o che cambia di piu di tre
lezioni in un colpo: davanti a un salto del genere e piu probabile un
errore di conteggio che una variazione vera, quindi lo segnala e lascia
il numero vecchio. Quando il salto e giusto davvero (uno studente nuovo
con molte lezioni gia fatte, un pacchetto rifatto) si rilancia con
**forza** attiva e passa.

## Provarlo sul proprio computer

    node scripts/aggiorna-saldi.mjs --dry              conta e non scrive niente
    node scripts/aggiorna-saldi.mjs --eventi finti.json usa eventi da un file

Servono le due variabili `GCAL_SA_KEY` e `MAIL_STUDENTI` nell'ambiente,
tranne con `--eventi`, che non chiama Google.

## Cosa conta e cosa no

Conta solo cio che e stato prenotato dal sistema di prenotazione. Un
evento entra nel conto se ha tutte e tre queste cose:

- un'ora di inizio e di fine (le giornate intere non contano mai)
- una delle mail dello studente fra gli invitati
- nella descrizione la firma del sistema di prenotazione, cioe
  `cal.com/booking` (formato attuale) oppure `Prenotato da` (formato
  vecchio, fino a meta settembre 2026)

Le lezioni che Fabio mette sul calendario a mano **non contano**, anche
se ha invitato lo studente. Il conteggio le elenca a parte nel suo
resoconto, cosi se una era una lezione vera si vede.

Il titolo degli eventi non viene mai guardato: e cambiato due volte e
cambiera ancora.

Le lezioni Preply stanno su un calendario separato e non entrano.
