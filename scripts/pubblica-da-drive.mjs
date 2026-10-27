#!/usr/bin/env node
/* =====================================================================
   PUBBLICA DA DRIVE

   Il ponte fra Claude e il sito. Claude non puo fare push su questa
   repo, ma puo scrivere su Google Drive. Quindi:

     1. Claude mette i file pronti nella cartella Drive
        "Talk with Fabio · Lezioni / Uscita sito"
     2. questo script, dentro GitHub Actions, li legge con lo stesso
        service account del conteggio (GCAL_SA_KEY) e li copia nella repo
     3. il workflow fa il commit e GitHub Pages pubblica

   Nessun computer acceso, nessun token di GitHub dato a nessuno.

   COME SI CHIAMANO I FILE NELLA CARTELLA
   Il percorso nella repo si scrive nel nome, con due trattini bassi al
   posto della barra:

     aula-pfr2u9__passato-al-bar__index.html  ->  aula-pfr2u9/passato-al-bar/index.html
     aula-pfr2u9__index.html                  ->  aula-pfr2u9/index.html
     esercizi__index.html                     ->  esercizi/index.html
     piano__igor-k7q.json                     ->  la riga "igor-k7q" di lezioni/piano.js

   Si pubblica solo dentro aula-pfr2u9/ ed esercizi/, piu i piani. Tutto
   il resto (workflow, script, saldi, pagine principali) viene rifiutato:
   se qualcuno sbaglia un nome non puo rompere il sito.

   Se per lo stesso percorso ci sono piu file, vince il piu recente: Drive
   non permette a Claude di riscrivere un file, quindi ogni versione nuova
   e un file nuovo. I file gia pubblicati sono segnati in
   scripts/uscita-fatti.json, cosi un giro dopo non si ripubblica niente.

   I nomi che iniziano con "_" sono ignorati (appunti, prove).

   ATTENZIONE: repo pubblica, log pubblici. Nei piani non deve mai finire
   una mail: se ne trova una, quel piano non si pubblica.

   Prove a mano:
     node scripts/pubblica-da-drive.mjs --dry               legge e non scrive
     node scripts/pubblica-da-drive.mjs --locale cartella   usa una cartella del computer al posto di Drive
   ===================================================================== */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, appendFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createSign } from "node:crypto";
import vm from "node:vm";

const CARTELLA = process.env.USCITA_FOLDER_ID || "17CIdHP4ECA0yDrSZTnvkqYI0g4YNdWkR";
const FILE_PIANO = "lezioni/piano.js";
const FILE_FATTI = "scripts/uscita-fatti.json";
const MAX_BYTE = 3 * 1024 * 1024;

const PREFISSI_OK = ["aula-pfr2u9/", "esercizi/"];
const ESTENSIONI_OK = /\.(html|js|css|json|svg|webp|png|jpg|jpeg|mp3|m4a|ogg)$/i;
const RX_PEZZO = /^[a-z0-9][a-z0-9._-]*$/i;
const RX_CODICE = /^[a-z0-9][a-z0-9-]{1,40}$/;

const argv = process.argv.slice(2);
const opt = (nome) => {
  const i = argv.indexOf(nome);
  return i >= 0 ? argv[i + 1] : null;
};
const DRY = argv.includes("--dry");
const LOCALE = opt("--locale");

/* ---------- accesso a Drive, senza librerie esterne ---------- */

const b64url = (x) => Buffer.from(x).toString("base64url");

async function chiediToken(sa) {
  const ora = Math.floor(Date.now() / 1000);
  const testa = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const corpo = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/drive.readonly",
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
  return (await r.json()).access_token;
}

async function elencaDrive(token) {
  const file = [];
  let pagina = "";
  do {
    const q = encodeURIComponent("'" + CARTELLA + "' in parents and trashed = false");
    const url = "https://www.googleapis.com/drive/v3/files?q=" + q +
      "&fields=nextPageToken,files(id,name,mimeType,modifiedTime,size)" +
      "&pageSize=1000&supportsAllDrives=true&includeItemsFromAllDrives=true" +
      (pagina ? "&pageToken=" + pagina : "");
    const r = await fetch(url, { headers: { authorization: "Bearer " + token } });
    if (r.status === 403 || r.status === 404) {
      throw new Error("Drive risponde " + r.status + ". Di solito vuol dire una di due cose: " +
        "la Google Drive API non e abilitata nel progetto del service account, " +
        "oppure la cartella \"Uscita sito\" non e condivisa con la mail del service account.");
    }
    if (!r.ok) throw new Error("Drive: " + r.status + " " + (await r.text()));
    const j = await r.json();
    file.push(...(j.files || []));
    pagina = j.nextPageToken || "";
  } while (pagina);
  return file;
}

async function scaricaDrive(token, f) {
  if (f.mimeType && f.mimeType.startsWith("application/vnd.google-apps")) {
    throw new Error("e un file Google (Doc o simili), non un file vero: va caricato senza conversione");
  }
  const r = await fetch("https://www.googleapis.com/drive/v3/files/" + f.id + "?alt=media&supportsAllDrives=true", {
    headers: { authorization: "Bearer " + token }
  });
  if (!r.ok) throw new Error("download " + r.status);
  return Buffer.from(await r.arrayBuffer());
}

/* Per le prove: una cartella del computer fa finta di essere Drive. */
function elencaLocale(dir) {
  return readdirSync(dir).map((name) => {
    const st = statSync(join(dir, name));
    return { id: "locale:" + name, name, modifiedTime: st.mtime.toISOString(), size: String(st.size) };
  });
}

/* ---------- regole sui nomi ---------- */

function interpreta(nome) {
  if (nome.startsWith("_")) return { salta: "nome che inizia con _" };
  const m = /^piano__([^_].*)\.json$/i.exec(nome);
  if (m) {
    const codice = m[1].toLowerCase();
    if (!RX_CODICE.test(codice)) return { errore: "codice studente non valido" };
    return { tipo: "piano", chiave: "piano:" + codice, codice };
  }
  const pezzi = nome.split("__");
  if (pezzi.length < 2) return { errore: "manca il percorso (servono i due trattini bassi)" };
  if (!pezzi.every((p) => RX_PEZZO.test(p) && p !== "." && p !== "..")) {
    return { errore: "percorso con caratteri non ammessi" };
  }
  const percorso = pezzi.join("/");
  if (!PREFISSI_OK.some((p) => percorso.startsWith(p))) {
    return { errore: "fuori da aula-pfr2u9/ ed esercizi/" };
  }
  if (!ESTENSIONI_OK.test(percorso)) return { errore: "tipo di file non ammesso" };
  return { tipo: "file", chiave: "file:" + percorso, percorso };
}

/* ---------- i piani delle lezioni ---------- */

function leggiPiani() {
  if (!existsSync(FILE_PIANO)) return {};
  const scatola = {};
  vm.runInNewContext(readFileSync(FILE_PIANO, "utf8"), scatola);
  return (scatola.PIANO && typeof scatola.PIANO === "object") ? scatola.PIANO : {};
}

/* I link che un piano puo contenere: solo il sito e le sue pagine. */
/* I font stanno sul sito (/fonts/), non su Google: niente dati dei visitatori a Google e
   privacy policy piu' semplice. Se una pagina arriva da Drive con il link a Google Fonts,
   qui viene girato sul file locale, cosi' nessuno deve ricordarsene. */
function fontLocali(html) {
  return html
    .replace(/[ \t]*<link[^>]*rel="preconnect"[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>\r?\n?/gi, "")
    .replace(/<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2?[^"]*"[^>]*>/gi,
             '<link rel="stylesheet" href="/fonts/fonts.css">');
}

function linkBuono(h) {
  const s = String(h || "");
  return s === "" ||
    /^https:\/\/talkwithfabio\.com\/[^\s"'<>]*$/i.test(s) ||
    /^\.\.\/(esercizi|aula-pfr2u9|dialoghi|missioni)\/[^\s"'<>]*$/i.test(s);
}

function pulisciTesto(x, max) {
  return String(x == null ? "" : x).replace(/\s+/g, " ").trim().slice(0, max || 400);
}

function pulisciAttivita(lista) {
  if (!Array.isArray(lista)) return [];
  return lista.slice(0, 8).map((a) => ({
    titolo: pulisciTesto(a && a.titolo, 120),
    href: linkBuono(a && a.href) ? String(a.href || "") : "",
    nota: pulisciTesto(a && a.nota, 300)
  })).filter((a) => a.titolo);
}

function validaPiano(codice, testo) {
  if (testo.includes("@")) throw new Error("c'e una chiocciola: niente mail nei piani, il file e pubblico");
  const p = JSON.parse(testo);
  if (p.codice && String(p.codice).toLowerCase() !== codice) throw new Error("il codice dentro non corrisponde al nome del file");
  if (p.rimuovi === true) return null;
  const prossima = p.prossima || {};
  const ultima = p.ultima || {};
  return {
    nome: pulisciTesto(p.nome, 40),
    aggiornato: pulisciTesto(p.aggiornato, 40),
    ultima: {
      quando: pulisciTesto(ultima.quando, 40),
      fatto: (Array.isArray(ultima.fatto) ? ultima.fatto : []).slice(0, 6).map((x) => pulisciTesto(x, 200)).filter(Boolean)
    },
    prossima: {
      quando: pulisciTesto(prossima.quando, 40),
      obiettivo: pulisciTesto(prossima.obiettivo, 300),
      attivita: pulisciAttivita(prossima.attivita)
    },
    compiti: pulisciAttivita(p.compiti)
  };
}

function serializzaPiani(piani, aggiornato) {
  const codici = Object.keys(piani).sort();
  const corpo = codici.map((c) => "  " + JSON.stringify(c) + ": " +
    JSON.stringify(piani[c], null, 2).replace(/\n/g, "\n  ")).join(",\n\n");
  return "/* ===================================================================\n" +
    "   PIANI DELLE LEZIONI\n\n" +
    "   Lo scrive scripts/pubblica-da-drive.mjs: non toccarlo a mano, la\n" +
    "   prossima pubblicazione lo riscrive. Per cambiare il piano di uno\n" +
    "   studente si mette un file piano__CODICE.json nella cartella Drive\n" +
    "   \"Uscita sito\" (lo fa Claude dopo gli appunti della lezione).\n\n" +
    "   File pubblico: niente mail, niente cognomi, niente note private.\n" +
    "   =================================================================== */\n\n" +
    "var PIANO_AGGIORNATO = " + JSON.stringify(aggiornato) + ";\n\n" +
    "var PIANO = {\n\n" + corpo + (corpo ? "\n\n" : "") + "};\n";
}

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
  const fatti = existsSync(FILE_FATTI) ? JSON.parse(readFileSync(FILE_FATTI, "utf8")) : {};
  let token = null;
  let elenco;
  if (LOCALE) elenco = elencaLocale(LOCALE);
  else {
    token = await chiediToken(JSON.parse(process.env.GCAL_SA_KEY || "{}"));
    elenco = await elencaDrive(token);
  }

  /* Per ogni percorso tiene solo il file piu recente. */
  const scelti = new Map();
  const resoconto = [];
  for (const f of elenco) {
    const d = interpreta(f.name);
    if (d.salta) continue;
    if (d.errore) { resoconto.push("SCARTATO " + f.name + ": " + d.errore); continue; }
    const prima = scelti.get(d.chiave);
    if (!prima || f.modifiedTime > prima.f.modifiedTime) scelti.set(d.chiave, { f, d });
  }

  const piani = leggiPiani();
  let pianiCambiati = false;
  let scritti = 0;

  for (const { f, d } of scelti.values()) {
    const firma = f.id + "@" + f.modifiedTime;
    if (fatti[d.chiave] === firma) continue;
    if (Number(f.size || 0) > MAX_BYTE) { resoconto.push("SCARTATO " + f.name + ": troppo grande"); continue; }
    try {
      const dati = LOCALE ? readFileSync(join(LOCALE, f.name)) : await scaricaDrive(token, f);
      if (d.tipo === "piano") {
        const p = validaPiano(d.codice, dati.toString("utf8"));
        if (p === null) delete piani[d.codice];
        else piani[d.codice] = p;
        pianiCambiati = true;
        resoconto.push((p === null ? "TOLTO piano " : "PIANO ") + d.codice);
      } else {
        let uscita = dati;
        if (/\.(html|js|css|json|svg)$/i.test(d.percorso)) {
          const testo = dati.toString("utf8");
          if (/\.html$/i.test(d.percorso) && !/<\/html>/i.test(testo)) {
            throw new Error("HTML senza </html>: sembra tagliato a meta");
          }
          if (/\.html$/i.test(d.percorso)) uscita = Buffer.from(fontLocali(testo), "utf8");
        }
        if (!DRY) {
          mkdirSync(dirname(d.percorso), { recursive: true });
          writeFileSync(d.percorso, uscita);
        }
        scritti++;
        resoconto.push("FILE " + d.percorso);
      }
      fatti[d.chiave] = firma;
    } catch (e) {
      resoconto.push("ERRORE " + f.name + ": " + e.message);
    }
  }

  if (!DRY) {
    if (pianiCambiati) writeFileSync(FILE_PIANO, serializzaPiani(piani, oraDiRoma()));
    else if (!existsSync(FILE_PIANO)) writeFileSync(FILE_PIANO, serializzaPiani({}, oraDiRoma()));
    writeFileSync(FILE_FATTI, JSON.stringify(fatti, null, 2) + "\n");
  }

  const riga = scritti + " file, " + (pianiCambiati ? "piani aggiornati" : "piani invariati");
  const testo = [riga, ...resoconto].join("\n");
  console.log(testo || "Niente di nuovo.");
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, "```\n" + testo + "\n```\n");
  /* Un file sbagliato non blocca gli altri: si pubblica il resto, e quello
     resta nella cartella e si riprova al giro dopo. */
}

main().catch((e) => { console.error(e.message); process.exit(1); });
