#!/usr/bin/env node
/* =====================================================================
   CONTEGGIO DELLE LEZIONI

   Legge il calendario principale di Fabio, conta le lezioni di ogni
   studente e riscrive i campi calcolati di lezioni/saldi.js.

   Gira dentro GitHub Actions: nessun computer acceso, nessun file
   privato nella repo. Prende tutto da due variabili d'ambiente.

     GCAL_SA_KEY     la chiave JSON di un service account Google, che
                     legge il calendario perche il calendario e stato
                     condiviso con la sua mail ("vedere tutti i dettagli")
     MAIL_STUDENTI   il contenuto di mail-studenti.json: codice dello
                     studente -> la sua mail, o la lista delle sue mail
     CALENDAR_ID     opzionale, default boccuzzifabio@gmail.com
     FORZA           "true" per pubblicare anche i salti sospetti

   SI CONTANO SOLO LE PRENOTAZIONI FATTE DAL SISTEMA DI PRENOTAZIONE.
   Le lezioni che Fabio mette sul calendario a mano non contano, anche
   se ha invitato lo studente: e una sua decisione esplicita. Un evento
   conta solo se ha un'ora di inizio e di fine, se una delle mail dello
   studente e tra gli invitati, e se nella descrizione c'e la firma del
   sistema di prenotazione.

   ATTENZIONE: i log di GitHub Actions di una repo pubblica li legge
   chiunque. Qui dentro non si stampa MAI una mail, per nessun motivo:
   nei messaggi si nominano solo i codici degli studenti.

   Prove a mano:
     node scripts/aggiorna-saldi.mjs --dry            conta e non scrive
     node scripts/aggiorna-saldi.mjs --eventi x.json  usa eventi finti
   ===================================================================== */

import { readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { createSign } from "node:crypto";

const CALENDARIO = process.env.CALENDAR_ID || "boccuzzifabio@gmail.com";
const FIRME = ["cal.com/booking", "Prenotato da"];
const RX_GESTISCI = /https:\/\/(?:app\.)?cal\.com\/booking\/[A-Za-z0-9_-]+\?changes=true/;
const DURATA_DEFAULT_MIN = 60;
const MAX_PASSATE = 40;
const SALTO_SOSPETTO = 3;

const argv = process.argv.slice(2);
const opt = (nome) => {
  const i = argv.indexOf(nome);
  return i >= 0 ? argv[i + 1] : null;
};
const FILE_SALDI = opt("--file") || "lezioni/saldi.js";
const EVENTI_FINTI = opt("--eventi");
const DRY = argv.includes("--dry");
const FORZA = process.env.FORZA === "true" || argv.includes("--forza");

/* ---------- accesso al calendario, senza librerie esterne ---------- */

const b64url = (x) => Buffer.from(x).toString("base64url");

async function chiediToken(sa) {
  const ora = Math.floor(Date.now() / 1000);
  const testa = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const corpo = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/calendar.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: ora,
    exp: ora + 3600
  }));
  const firma = b64url(
    createSign("RSA-SHA256").update(testa + "." + corpo).sign(sa.private_key)
  );
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: testa + "." + corpo + "." + firma
    })
  });
  if (!r.ok) throw new Error("Google ha rifiutato il token: " + r.status + " " + (await r.text()));
  const j = await r.json();
  if (!j.access_token) throw new Error("Google non ha dato un access_token.");
  return j.access_token;
}

async function cercaEventi(token, testo, da, a) {
  const trovati = [];
  let pagina;
  do {
    const u = new URL(
      "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(CALENDARIO) + "/events"
    );
    u.searchParams.set("q", testo);
    u.searchParams.set("timeMin", da);
    u.searchParams.set("timeMax", a);
    u.searchParams.set("singleEvents", "true");
    u.searchParams.set("orderBy", "startTime");
    u.searchParams.set("maxResults", "250");
    if (pagina) u.searchParams.set("pageToken", pagina);
    const r = await fetch(u, { headers: { authorization: "Bearer " + token } });
    /* Il messaggio d'errore non deve contenere la ricerca: e una mail. */
    if (!r.ok) throw new Error("Il calendario ha risposto " + r.status + ".");
    const j = await r.json();
    if (Array.isArray(j.items)) trovati.push(...j.items);
    pagina = j.nextPageToken;
  } while (pagina);
  return trovati;
}

/* ---------- regole di conteggio ---------- */

function invitato(ev, mails) {
  const lista = (ev.attendees || []).map((a) => String(a.email || "").toLowerCase());
  return mails.some((m) => lista.includes(m));
}

const haFirma = (ev) => FIRME.some((f) => String(ev.description || "").includes(f));

const conOrario = (ev) => !!(ev.start && ev.start.dateTime && ev.end && ev.end.dateTime);

function linkGestione(ev) {
  const m = RX_GESTISCI.exec(String(ev.description || ""));
  return m ? m[0] : null;
}

/* ---------- lettura e riscrittura di saldi.js ---------- */

function leggiSaldi(testo) {
  const taglio = testo.indexOf("var SALDI_AGGIORNATO");
  if (taglio < 0) throw new Error("saldi.js non ha la riga SALDI_AGGIORNATO.");
  const fn = new Function(
    testo + "\n; return { SALDI: SALDI, SALDI_AGGIORNATO: SALDI_AGGIORNATO };"
  );
  const dati = fn();
  return { intestazione: testo.slice(0, taglio), saldi: dati.SALDI };
}

const CAMPI = ["nome", "pacchetto", "inizio", "fatte_prima", "nota",
               "fatte", "prenotate", "rimaste", "passate", "prossime",
               "promemoria"];

function rigaProssima(v) {
  const pezzi = ["quando: " + JSON.stringify(v.quando)];
  if (v.fine) pezzi.push("fine: " + JSON.stringify(v.fine));
  if (v.gestisci) pezzi.push("gestisci: " + JSON.stringify(v.gestisci));
  return "{ " + pezzi.join(", ") + " }";
}

function lista(nome, voci, rendi) {
  if (!voci || !voci.length) return "    " + nome + ": []";
  return "    " + nome + ": [\n" +
    voci.map((v) => "      " + rendi(v)).join(",\n") + "\n    ]";
}

function serializza(intestazione, saldi, aggiornato) {
  const blocchi = Object.keys(saldi).map((codice) => {
    const s = saldi[codice];
    const righe = [];
    for (const k of CAMPI) {
      if (!(k in s) || s[k] === undefined) continue;
      if (k === "passate") righe.push(lista("passate", s.passate, JSON.stringify));
      else if (k === "prossime") righe.push(lista("prossime", s.prossime, rigaProssima));
      else righe.push("    " + k + ": " + JSON.stringify(s[k]));
    }
    return "  " + JSON.stringify(codice) + ": {\n" + righe.join(",\n") + "\n  }";
  });
  return intestazione +
    "var SALDI_AGGIORNATO = " + JSON.stringify(aggiornato) + ";\n\nvar SALDI = {\n\n" +
    blocchi.join(",\n\n") + "\n\n};\n";
}

/* La data in cima al file, come la scriverebbe Fabio: "18 ottobre 2026, 13:12". */
function oraDiRoma() {
  const ora = new Date();
  const giorno = new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome", day: "numeric", month: "long", year: "numeric"
  }).format(ora);
  const minuti = new Intl.DateTimeFormat("it-IT", {
    timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit", hour12: false
  }).format(ora);
  return giorno + ", " + minuti;
}

/* ---------- il lavoro ---------- */

async function main() {
  const mails = JSON.parse(process.env.MAIL_STUDENTI || "{}");
  const testo = readFileSync(FILE_SALDI, "utf8");
  const { intestazione, saldi } = leggiSaldi(testo);

  const adesso = Date.now();
  const traUnAnno = new Date(adesso + 366 * 864e5).toISOString();

  let token = null;
  let finti = null;
  if (EVENTI_FINTI) finti = JSON.parse(readFileSync(EVENTI_FINTI, "utf8"));
  else token = await chiediToken(JSON.parse(process.env.GCAL_SA_KEY || "{}"));

  const resoconto = [];
  const senzaMail = [];
  const sospetti = [];
  const senzaFirma = [];

  for (const codice of Object.keys(saldi)) {
    const s = saldi[codice];
    const sue = []
      .concat(mails[codice] || [])
      .map((m) => String(m).toLowerCase().trim())
      .filter(Boolean);

    if (!sue.length) {
      senzaMail.push(codice);
      continue;
    }

    const da = new Date((s.inizio || "2000-01-01") + "T00:00:00Z").toISOString();
    const perId = new Map();
    for (const mail of sue) {
      const trovati = finti
        ? finti
        : await cercaEventi(token, mail, da, traUnAnno);
      for (const ev of trovati) {
        if (ev.status === "cancelled") continue;
        if (!conOrario(ev)) continue;
        if (!invitato(ev, sue)) continue;
        perId.set(ev.id, ev);
      }
    }

    const buoni = [];
    for (const ev of perId.values()) {
      if (haFirma(ev)) buoni.push(ev);
      else senzaFirma.push({ codice, quando: ev.start.dateTime });
    }

    const passate = [];
    const prossime = [];
    for (const ev of buoni) {
      const inizio = ev.start.dateTime;
      const fine = ev.end.dateTime;
      if (new Date(fine).getTime() <= adesso) passate.push(inizio);
      else prossime.push({ quando: inizio, fine, gestisci: linkGestione(ev) || undefined });
    }

    passate.sort();
    prossime.sort((a, b) => new Date(a.quando) - new Date(b.quando));

    const pacchetto = Number(s.pacchetto) || 0;
    const fatte = passate.length + (Number(s.fatte_prima) || 0);
    const prenotate = prossime.length;
    const rimaste = pacchetto - fatte - prenotate;

    const prima = Number(s.rimaste);
    const salto = Number.isFinite(prima) ? Math.abs(rimaste - prima) : 0;

    if (!FORZA && (rimaste < 0 || salto > SALTO_SOSPETTO)) {
      sospetti.push({ codice, prima, dopo: rimaste, fatte, prenotate });
      continue;
    }

    s.fatte = fatte;
    s.prenotate = prenotate;
    s.rimaste = Math.max(0, rimaste);
    s.passate = passate.slice(-MAX_PASSATE);
    s.prossime = prossime;

    resoconto.push({
      codice, nome: s.nome || codice, pacchetto, fatte, prenotate,
      rimaste: s.rimaste,
      prossima: prossime.length ? prossime[0].quando : null
    });
  }

  const nuovo = serializza(intestazione, saldi, oraDiRoma());
  const cambiato = nuovo !== testo;
  if (cambiato && !DRY) writeFileSync(FILE_SALDI, nuovo);

  /* Nel resoconto non entrano mai mail ne link di gestione. */
  const out = [];
  out.push(cambiato ? (DRY ? "Cambierebbe (--dry)." : "File aggiornato.") : "Niente da cambiare.");
  out.push("");
  for (const r of resoconto) {
    out.push("- " + r.nome + " (" + r.codice + "): pacchetto " + r.pacchetto +
      ", fatte " + r.fatte + ", prenotate " + r.prenotate + ", rimaste " + r.rimaste +
      (r.prossima ? ", prossima " + r.prossima.slice(0, 16).replace("T", " ") : ", nessuna prenotata"));
  }
  if (senzaMail.length) {
    out.push("");
    out.push("Senza mail nel file privato, non contati: " + senzaMail.join(", ") + ".");
  }
  if (sospetti.length) {
    out.push("");
    out.push("NON pubblicati, salto sospetto (serve un controllo a mano):");
    for (const x of sospetti) {
      out.push("- " + x.codice + ": rimaste " + x.prima + " -> " + x.dopo +
        " (fatte " + x.fatte + ", prenotate " + x.prenotate + ")");
    }
    out.push("Se il conto e giusto, rilancia a mano con l'opzione forza.");
  }
  if (senzaFirma.length) {
    out.push("");
    out.push("Eventi con lo studente invitato ma senza la firma del sistema di");
    out.push("prenotazione, quindi messi a mano e NON contati:");
    for (const x of senzaFirma) {
      out.push("- " + x.codice + ": " + x.quando.slice(0, 16).replace("T", " "));
    }
  }

  const testoOut = out.join("\n");
  console.log(testoOut);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, testoOut + "\n");
  }
}

main().catch((e) => {
  console.error("Conteggio fallito: " + e.message);
  process.exit(1);
});
