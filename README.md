# Talk with Fabio

Il sito di **Fabio Boccuzzi**, insegnante di italiano: lezioni individuali online ed esercizi
gratuiti per chi impara l'italiano. Online su **https://talkwithfabio.com**.

## Com'è fatto

Sito statico su GitHub Pages, senza build: ogni pagina è un file HTML con dentro CSS e JavaScript.
Si modifica il file, si carica su `main`, e dopo qualche minuto è online.

| Cartella | Cosa c'è |
|---|---|
| `index.html` | la home |
| `prenota/` | prenotazione delle lezioni (calendario Cal.com) |
| `pagare/` | pagamento dei pacchetti con bonifico Wise |
| `lezioni/` | la pagina personale di chi ha un pacchetto, e `saldi.js` con i saldi |
| `esercizi/` | l'indice degli esercizi e un esercizio per cartella |
| `privacy/` | la privacy policy |
| `404.html` | la pagina per gli indirizzi sbagliati |
| `fonts/` | i font del sito (Bricolage Grotesque, Newsreader, Caveat), ospitati qui |
| `img/` | foto e immagini di anteprima dei link (`og-*.jpg`, 1200×630) |
| `scripts/`, `.github/` | il conteggio automatico delle lezioni (GitHub Actions) |

## Regole da rispettare

- **Niente dati personali nei file**: la repo è pubblica. Le mail degli studenti stanno nei segreti
  di GitHub, mai in `saldi.js` (il conteggio si rifiuta di pubblicare un file con una chiocciola).
- **Niente servizi esterni nelle pagine** oltre a Cal.com: i font sono in `fonts/`, niente analytics.
  Se si aggiunge qualcosa che raccoglie dati, va aggiornata `privacy/`.
- Ogni pagina nuova si collega ai font con `<link rel="stylesheet" href="/fonts/fonts.css">`.
- Il file `CNAME` lo gestisce GitHub per il dominio: non va cancellato.

© Fabio Boccuzzi · P.IVA 13510320016
