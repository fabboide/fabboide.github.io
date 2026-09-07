[index_4.html](https://github.com/user-attachments/files/31927016/index_4.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- ============================================================
     SOSTITUISCI QUI IL NOME DEL BRAND (adesso: "Italiano con Fabio")
     Cerca "Italiano con Fabio" nel file e cambialo ovunque.
     ============================================================ -->
<title>Italiano con Fabio</title>
<meta name="description" content="One-to-one Italian lessons with a linguist. You speak from minute one. Free exercises, real conversation, no textbook theatre.">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Caveat:wght@600&display=swap">

<style>
/* ============================================================
   1. TOKEN — cambia i colori qui e cambiano ovunque
   ============================================================ */
:root{
  --ink:        #16233F;  /* blu inchiostro, il colore del testo e delle sezioni scure */
  --ink-soft:   #4A5670;  /* testo secondario */
  --paper:      #F7F4EC;  /* fondo pagina */
  --paper-2:    #FFFDF8;  /* fondo delle schede */
  --rule:       #DFD8C7;  /* linee e bordi */
  --saffron:    #E8A33D;  /* giallo zafferano, accento principale */
  --rosso:      #C4312B;  /* rosso della penna che corregge */
  --verde:      #2E5E4E;  /* verde profondo */

  --display: "Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif;
  --body: "Newsreader", Georgia, "Times New Roman", serif;
  --pen: "Caveat", "Segoe Script", cursive;
  --mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;

  --wrap: 1140px;
}

*,*::before,*::after{ box-sizing:border-box; }

html{ scroll-behavior:smooth; -webkit-text-size-adjust:100%; }

body{
  margin:0;
  background:var(--paper);
  color:var(--ink);
  font-family:var(--body);
  font-size:1.0625rem;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}

img{ max-width:100%; display:block; }
a{ color:inherit; }

:focus-visible{
  outline:3px solid var(--rosso);
  outline-offset:3px;
  border-radius:2px;
}

h1,h2,h3{
  font-family:var(--display);
  font-weight:800;
  line-height:1.02;
  letter-spacing:-0.025em;
  text-wrap:balance;
  margin:0;
}

h1{ font-size:clamp(2.4rem, 5.2vw, 4.05rem); line-height:1.06; }
h1 .l{ display:block; }
h1 .l-fix{ padding-top:0.34em; }
h2{ font-size:clamp(2rem, 4.1vw, 3.1rem); }
h3{ font-size:1.3rem; letter-spacing:-0.015em; line-height:1.15; }

p{ margin:0; }

.wrap{
  width:100%;
  max-width:var(--wrap);
  margin-inline:auto;
  padding-inline:24px;
}

/* Etichetta di sezione in maiuscoletto */
.eyebrow{
  font-family:var(--mono);
  font-size:0.72rem;
  letter-spacing:0.16em;
  text-transform:uppercase;
  color:var(--ink-soft);
  margin:0;
}

/* La penna rossa del prof: parola italiana scritta a mano */
.pen{
  font-family:var(--pen);
  color:var(--rosso);
  font-size:0.92em;
  line-height:1;
  display:inline-block;
  transform:rotate(-4deg);
}

/* Parola cancellata dalla penna */
.struck{
  position:relative;
  color:var(--ink-soft);
}
.strike-line{
  position:absolute;
  left:-3%;
  right:-3%;
  top:0.54em;
  height:0.075em;
  background:var(--rosso);
  border-radius:99px;
  transform-origin:left center;
}

.lead{
  font-size:clamp(1.1rem,1.7vw,1.28rem);
  color:var(--ink-soft);
  max-width:56ch;
}

/* ============================================================
   2. BOTTONI
   ============================================================ */
.btn{
  display:inline-flex;
  align-items:center;
  gap:0.55em;
  font-family:var(--display);
  font-weight:700;
  font-size:1rem;
  letter-spacing:-0.01em;
  text-decoration:none;
  padding:0.95em 1.5em;
  border-radius:999px;
  border:2px solid var(--ink);
  transition:transform .16s ease, background-color .16s ease, color .16s ease;
}
.btn-primary{ background:var(--ink); color:var(--paper-2); }
.btn-primary:hover{ transform:translateY(-2px); background:var(--rosso); border-color:var(--rosso); }
.btn-ghost{ background:transparent; color:var(--ink); }
.btn-ghost:hover{ transform:translateY(-2px); background:var(--saffron); border-color:var(--saffron); }
.btn-light{ background:var(--saffron); color:var(--ink); border-color:var(--saffron); }
.btn-light:hover{ transform:translateY(-2px); background:var(--paper-2); border-color:var(--paper-2); }

/* ============================================================
   3. NAVIGAZIONE
   ============================================================ */
.nav{
  position:sticky;
  top:0;
  z-index:50;
  background:color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--rule);
}
.nav-in{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
  height:70px;
}
.logo{
  font-family:var(--display);
  font-weight:800;
  font-size:1.12rem;
  letter-spacing:-0.03em;
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:0.5em;
}
.logo-mark{
  width:26px; height:26px;
  border-radius:50%;
  background:
    conic-gradient(from 180deg, var(--verde) 0 25%, var(--saffron) 0 50%, var(--rosso) 0 75%, var(--ink) 0);
  flex:none;
}
.nav-links{
  display:flex;
  align-items:center;
  gap:30px;
  font-family:var(--display);
  font-weight:500;
  font-size:0.95rem;
}
.nav-links a{ text-decoration:none; }
.nav-links a:hover{ color:var(--rosso); }
.nav .btn{ padding:0.7em 1.15em; font-size:0.92rem; }
@media (max-width:900px){
  .nav-links{ display:none; }
}

/* ============================================================
   4. HERO — il quaderno a righe con il margine rosso
   ============================================================ */
.hero{
  position:relative;
  overflow:hidden;
  padding:clamp(48px,7vw,86px) 0 clamp(40px,5vw,64px);
}
.hero::before{
  content:"";
  position:absolute;
  inset:0;
  background-image:repeating-linear-gradient(
    to bottom,
    transparent 0 33px,
    color-mix(in srgb, var(--ink) 8%, transparent) 33px 34px
  );
  opacity:.55;
  pointer-events:none;
}
.hero-in{
  position:relative;
  display:grid;
  grid-template-columns:1.15fr 0.85fr;
  gap:clamp(32px,5vw,64px);
  align-items:center;
}
@media (max-width:960px){
  .hero-in{ grid-template-columns:1fr; }
}

.hero-copy{
  position:relative;
  padding-left:clamp(20px,3vw,38px);
}
.hero-copy::before{
  content:"";
  position:absolute;
  left:0; top:-6px; bottom:-6px;
  width:2px;
  background:var(--rosso);
  opacity:.75;
}

.hero h1{ margin-bottom:22px; }

/* la correzione sopra la parola */
.fix{
  position:relative;
  display:inline-block;
  white-space:nowrap;
}
.fix .pen{
  position:absolute;
  left:50%;
  top:-0.30em;
  transform:translateX(-50%) rotate(-4deg);
  font-size:0.44em;
  white-space:nowrap;
}

.hero-cta{
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  margin-top:30px;
}

.credentials{
  display:flex;
  flex-wrap:wrap;
  gap:10px 26px;
  margin-top:34px;
  padding-top:22px;
  border-top:1px solid var(--rule);
  font-family:var(--mono);
  font-size:0.76rem;
  letter-spacing:0.05em;
  text-transform:uppercase;
  color:var(--ink-soft);
}
.credentials span{ display:flex; align-items:center; gap:0.5em; }
.credentials span::before{
  content:"";
  width:7px; height:7px;
  border-radius:50%;
  background:var(--saffron);
  flex:none;
}

/* Scheda della lezione, appoggiata a destra */
.lesson-card{
  position:relative;
  background:var(--paper-2);
  border:2px solid var(--ink);
  border-radius:22px;
  padding:26px;
  box-shadow:14px 14px 0 color-mix(in srgb, var(--ink) 12%, transparent);
}
.lesson-card h3{ margin-bottom:4px; }
.lesson-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:16px;
  padding-bottom:16px;
  border-bottom:1px solid var(--rule);
}
.price{
  font-family:var(--display);
  font-weight:800;
  font-size:1.5rem;
  letter-spacing:-0.03em;
  white-space:nowrap;
}
.price small{
  display:block;
  font-family:var(--mono);
  font-size:0.62rem;
  font-weight:400;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:var(--ink-soft);
  margin-top:2px;
}
.lesson-list{
  list-style:none;
  margin:16px 0 0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:11px;
  font-size:1rem;
}
.lesson-list li{
  display:flex;
  gap:11px;
  align-items:flex-start;
  line-height:1.45;
}
.lesson-list li::before{
  content:"";
  flex:none;
  width:18px; height:18px;
  margin-top:3px;
  border-radius:50%;
  background:var(--verde);
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 12.5l5 5L20 6.5' fill='none' stroke='%23000' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/76% no-repeat;
          mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 12.5l5 5L20 6.5' fill='none' stroke='%23000' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/76% no-repeat;
}
.lesson-note{
  margin-top:20px;
  padding-top:16px;
  border-top:1px solid var(--rule);
  font-size:0.95rem;
  color:var(--ink-soft);
}

/* ============================================================
   5. FASCIA A MATTONELLE (le cementine)
   ============================================================ */
.tiles{
  height:72px;
  background-color:var(--saffron);
  background-image:
    radial-gradient(circle at 0 100%,  var(--verde) 49.5%, transparent 50%),
    radial-gradient(circle at 100% 0,  var(--paper) 49.5%, transparent 50%);
  background-size:72px 72px;
}

/* ============================================================
   6. SEZIONI GENERICHE
   ============================================================ */
.section{ padding:clamp(64px,8vw,110px) 0; }
.section-head{
  max-width:62ch;
  margin-bottom:clamp(32px,4vw,52px);
  display:flex;
  flex-direction:column;
  gap:14px;
}

.grid-3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}
@media (max-width:880px){ .grid-3{ grid-template-columns:1fr; } }

.card{
  background:var(--paper-2);
  border:1px solid var(--rule);
  border-radius:18px;
  padding:28px;
  display:flex;
  flex-direction:column;
  gap:12px;
}
.card p{ color:var(--ink-soft); }
.card .quote{
  font-family:var(--body);
  font-style:italic;
  font-size:1.12rem;
  color:var(--ink);
  line-height:1.45;
}
.card-tag{
  font-family:var(--mono);
  font-size:0.68rem;
  letter-spacing:0.14em;
  text-transform:uppercase;
  color:var(--rosso);
}

/* ============================================================
   7. METODO — sezione scura
   ============================================================ */
.dark{
  background:var(--ink);
  color:var(--paper);
}
.dark h2{ color:var(--paper-2); }
.dark .eyebrow{ color:var(--saffron); }
.dark .lead{ color:color-mix(in srgb, var(--paper) 74%, transparent); }

.steps{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0;
  border-top:1px solid color-mix(in srgb, var(--paper) 24%, transparent);
}
@media (max-width:900px){ .steps{ grid-template-columns:1fr; } }

.step{
  padding:28px 24px 30px 0;
  border-right:1px solid color-mix(in srgb, var(--paper) 18%, transparent);
  display:flex;
  flex-direction:column;
  gap:10px;
}
.step:last-child{ border-right:none; }
@media (min-width:901px){ .step + .step{ padding-left:24px; } }
@media (max-width:900px){
  .step{
    border-right:none;
    border-bottom:1px solid color-mix(in srgb, var(--paper) 18%, transparent);
    padding-right:0;
  }
  .step:last-child{ border-bottom:none; }
}
.step-n{
  font-family:var(--mono);
  font-size:0.72rem;
  letter-spacing:0.16em;
  color:var(--saffron);
}
.step h3{ color:var(--paper-2); }
.step p{
  color:color-mix(in srgb, var(--paper) 70%, transparent);
  font-size:0.99rem;
}

/* ============================================================
   8. MATERIALI GRATUITI
   ============================================================ */
.materials{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
@media (max-width:880px){ .materials{ grid-template-columns:1fr; } }

.mat{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:10px;
  text-decoration:none;
  background:var(--paper-2);
  border:1px solid var(--rule);
  border-radius:18px;
  padding:0 0 24px;
  overflow:hidden;
  transition:transform .18s ease, box-shadow .18s ease;
}
.mat:hover{
  transform:translateY(-4px);
  box-shadow:0 14px 30px color-mix(in srgb, var(--ink) 14%, transparent);
}
.mat-top{
  height:104px;
  background-color:var(--paper);
  background-image:
    radial-gradient(circle at 0 0,    color-mix(in srgb, var(--verde) 28%, transparent) 49.5%, transparent 50%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--saffron) 55%, transparent) 49.5%, transparent 50%);
  background-size:34px 34px;
  border-bottom:1px solid var(--rule);
}
.mat-top.v2{
  background-image:
    radial-gradient(circle at 100% 0,  color-mix(in srgb, var(--verde) 26%, transparent) 49.5%, transparent 50%),
    radial-gradient(circle at 0 100%, color-mix(in srgb, var(--saffron) 55%, transparent) 49.5%, transparent 50%);
}
.mat-top.v3{
  background-image:
    radial-gradient(circle at 0 0,     color-mix(in srgb, var(--ink) 20%, transparent) 49.5%, transparent 50%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--saffron) 55%, transparent) 49.5%, transparent 50%);
}
.mat h3, .mat p, .mat .card-tag{ padding-inline:24px; }
.mat h3{ margin-top:18px; }
.mat p{ color:var(--ink-soft); font-size:0.99rem; }
.mat-go{
  margin-top:auto;
  padding-inline:24px;
  font-family:var(--display);
  font-weight:700;
  font-size:0.94rem;
  color:var(--rosso);
}

/* ============================================================
   9. CHI SONO
   ============================================================ */
.about{
  display:grid;
  grid-template-columns:0.8fr 1.2fr;
  gap:clamp(28px,5vw,64px);
  align-items:center;
}
@media (max-width:880px){ .about{ grid-template-columns:1fr; } }

.portrait{
  aspect-ratio:4/5;
  border-radius:20px;
  border:2px solid var(--ink);
  background-color:var(--saffron);
  background-image:
    radial-gradient(circle at 0 100%,  var(--verde) 49.5%, transparent 50%),
    radial-gradient(circle at 100% 0,  color-mix(in srgb, var(--paper) 70%, transparent) 49.5%, transparent 50%);
  background-size:56px 56px;
  display:flex;
  align-items:flex-end;
  padding:22px;
  color:var(--ink);
  font-family:var(--mono);
  font-size:0.72rem;
  letter-spacing:0.1em;
  text-transform:uppercase;
}
.portrait span{
  background:var(--paper-2);
  border:1px solid var(--ink);
  border-radius:999px;
  padding:7px 14px;
}
.about-body{ display:flex; flex-direction:column; gap:18px; }
.about-body p{ color:var(--ink-soft); max-width:56ch; }
.about-body p strong{ color:var(--ink); font-weight:500; }

/* ============================================================
   10. RECENSIONI
   ============================================================ */
.placeholder-note{
  font-family:var(--mono);
  font-size:0.72rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--rosso);
  border:1px dashed var(--rosso);
  border-radius:8px;
  padding:6px 10px;
  display:inline-block;
}

/* ============================================================
   11. PRENOTAZIONE
   ============================================================ */
.book{
  background:var(--verde);
  color:var(--paper-2);
  border-radius:26px;
  padding:clamp(34px,5vw,62px);
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:clamp(26px,4vw,54px);
  align-items:center;
}
@media (max-width:880px){ .book{ grid-template-columns:1fr; } }
.book h2{ color:var(--paper-2); }
.book p{ color:color-mix(in srgb, var(--paper) 80%, transparent); }
.book .eyebrow{ color:var(--saffron); }
.book-copy{ display:flex; flex-direction:column; gap:16px; }
.book-cta{ display:flex; flex-wrap:wrap; gap:14px; margin-top:8px; }

.calendar-slot{
  background:var(--paper-2);
  border-radius:18px;
  min-height:270px;
  padding:24px;
  color:var(--ink);
  display:flex;
  flex-direction:column;
  gap:12px;
  justify-content:center;
  align-items:flex-start;
}

/* ============================================================
   12. FOOTER
   ============================================================ */
.footer{
  border-top:1px solid var(--rule);
  padding:44px 0 56px;
  margin-top:clamp(56px,7vw,96px);
}
.footer-in{
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  justify-content:space-between;
  align-items:center;
  font-size:0.95rem;
  color:var(--ink-soft);
}
.footer-links{
  display:flex;
  flex-wrap:wrap;
  gap:22px;
  font-family:var(--display);
  font-weight:500;
}
.footer-links a{ text-decoration:none; }
.footer-links a:hover{ color:var(--rosso); }

/* ============================================================
   13. ANIMAZIONI
   Regola di sicurezza: senza JavaScript la pagina resta
   completamente visibile. Nascondiamo qualcosa solo dopo che
   lo script ha aggiunto la classe .js all'HTML.
   ============================================================ */

/* --- Barra di avanzamento della lettura, in cima --- */
.progress{
  position:fixed;
  top:0; left:0; right:0;
  height:3px;
  background:var(--rosso);
  transform:scaleX(0);
  transform-origin:0 50%;
  z-index:100;
}
@supports (animation-timeline:scroll()){
  @media (prefers-reduced-motion:no-preference){
    .progress{
      animation:progress-grow linear both;
      animation-timeline:scroll(root block);
    }
  }
}
@keyframes progress-grow{ to{ transform:scaleX(1); } }

/* --- Comparse morbide al primo passaggio --- */
.js [data-reveal],
.js .step,
.js .mat,
.js .book,
.js .portrait,
.js .about-body,
.js .card{
  opacity:0;
  transform:translateY(22px);
  transition:opacity .75s cubic-bezier(.22,.7,.25,1), transform .75s cubic-bezier(.22,.7,.25,1);
  transition-delay:var(--d,0s);
}
.js .in{ opacity:1 !important; transform:none !important; }

/* --- La penna che corregge, all'apertura della pagina --- */
.js .strike-line{ transform:scaleX(0); }
.js .hero-ready .strike-line{
  animation:strike-through .42s .55s cubic-bezier(.65,0,.35,1) forwards;
}
@keyframes strike-through{ to{ transform:scaleX(1); } }

.js .fix .pen{ opacity:0; }
.js .hero-ready .fix .pen{
  animation:hand-write .5s 1s cubic-bezier(.2,.8,.3,1) forwards;
}
@keyframes hand-write{
  from{ opacity:0; transform:translateX(-50%) rotate(-14deg) translateY(7px) scale(.85); }
  to{   opacity:1; transform:translateX(-50%) rotate(-4deg); }
}

/* --- La fascia di mattonelle che scorre di lato --- */
@supports (animation-timeline:scroll()){
  @media (prefers-reduced-motion:no-preference){
    .tiles{
      animation:tiles-slide linear both;
      animation-timeline:scroll(root block);
    }
  }
}
@keyframes tiles-slide{ to{ background-position:432px 0; } }

/* --- Le schede che si accavallano una sull'altra --- */
/* Contenitore a blocco, non flex: dentro un flex la proprietà sticky
   fa i capricci e le schede si spingono a vicenda.
   Lo spazio fra una scheda e l'altra NON si fa con i margini: il margine
   fa parte della scheda e le ruba la corsa, così si stacca troppo presto.
   E nemmeno con il padding del contenitore, che lo sticky ignora.
   Si fa con dei distanziatori veri, i div qui sotto. */
.stack{ display:block; }
.stack-gap{ height:30vh; }
.stack-tail{ height:44vh; }

.stack-card{
  position:sticky;
  /* Ogni scheda si ferma più in basso della precedente, così restano
     visibili le etichette di quelle già lette e i tre motivi si sommano. */
  top:calc(96px + var(--i,0) * 62px);
  background:var(--paper-2);
  border:2px solid var(--ink);
  border-radius:22px;
  padding:clamp(26px,3.2vw,42px);
  display:grid;
  grid-template-columns:8px minmax(0,1.05fr) minmax(0,0.95fr);
  column-gap:clamp(22px,3.2vw,48px);
  row-gap:14px;
  box-shadow:0 20px 44px color-mix(in srgb, var(--ink) 15%, transparent);
}
.stack-card::before{
  content:"";
  grid-column:1;
  grid-row:1 / span 2;
  border-radius:99px;
  background:var(--accent,var(--saffron));
}
.stack-card .card-tag{ grid-column:2; grid-row:1; align-self:start; }
.stack-card .quote{
  grid-column:2;
  grid-row:2;
  font-size:clamp(1.28rem,2.2vw,1.72rem);
  font-style:italic;
  line-height:1.3;
  margin:0;
  align-self:start;
}
.stack-card p:last-child{
  grid-column:3;
  grid-row:1 / span 2;
  align-self:center;
  color:var(--ink-soft);
  border-left:1px solid var(--rule);
  padding-left:clamp(20px,2.4vw,34px);
}

@media (max-width:900px){
  .stack{ display:flex; flex-direction:column; gap:18px; }
  .stack-gap, .stack-tail{ display:none; }
  .stack-card{
    position:static;
    box-shadow:none;
    grid-template-columns:8px minmax(0,1fr);
  }
  .stack-card p:last-child{
    grid-column:2;
    grid-row:3;
    border-left:none;
    padding-left:0;
  }
  .stack-card::before{ grid-row:1 / span 3; }
}

/* --- I passi del metodo che si accendono uno dopo l'altro --- */
.js .step .step-n{ color:color-mix(in srgb, var(--paper) 40%, transparent); transition:color .6s ease; transition-delay:calc(var(--d,0s) + .25s); }
.js .step.in .step-n{ color:var(--saffron); }

@media (prefers-reduced-motion:reduce){
  html{ scroll-behavior:auto; }
  *{ transition:none !important; animation:none !important; }
  .js [data-reveal]{ opacity:1 !important; transform:none !important; }
  .js .strike-line{ transform:scaleX(1) !important; }
  .js .fix .pen{ opacity:1 !important; }
  .progress{ display:none; }
}
</style>

<script>
  /* Segna subito che il JavaScript funziona, prima che la pagina si disegni.
     Se questa riga non gira, la pagina resta tutta visibile e statica. */
  document.documentElement.classList.add("js");
</script>
</head>
<body>

<div class="progress" aria-hidden="true"></div>

<!-- ============================ NAV ============================ -->
<header class="nav">
  <div class="wrap nav-in">
    <a class="logo" href="#top">
      <span class="logo-mark" aria-hidden="true"></span>
      Italiano con Fabio
    </a>
    <nav class="nav-links" aria-label="Main">
      <a href="#familiar">Who it's for</a>
      <a href="#method">The method</a>
      <a href="#materials">Free exercises</a>
      <a href="#about">About me</a>
    </nav>
    <a class="btn btn-primary" href="#book">Book a lesson</a>
  </div>
</header>

<!-- ============================ HERO ============================ -->
<main id="top">
<section class="hero">
  <div class="wrap hero-in">

    <div class="hero-copy">
      <p class="eyebrow">One&#8209;to&#8209;one Italian &middot; online &middot; all levels</p>
      <h1>
        <span class="l">You already know</span>
        <span class="l">more Italian than</span>
        <span class="l l-fix">you can <span class="fix"><span class="pen" aria-hidden="true">dire</span><span class="struck">say<span class="strike-line" aria-hidden="true"></span></span></span>.</span>
      </h1>
      <p class="lead">
        Most people don't need more grammar. They need someone to make them
        <em>talk</em>, and to catch them when they fall. That's the whole lesson:
        you speak from minute one, I correct as we go, and the rules arrive when
        you actually need them.
      </p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#book">Book a first lesson</a>
        <a class="btn btn-ghost" href="#materials">Try the free exercises</a>
      </div>

      <!-- SOSTITUISCI: metti qui i tuoi dati veri. Il terzo è un segnaposto. -->
      <div class="credentials">
        <span>Super Tutor on Preply</span>
        <span>MA Linguistics, University of Turin</span>
        <span>Students in 14 countries</span>
      </div>
    </div>

    <aside class="lesson-card" aria-label="What a lesson includes">
      <div class="lesson-head">
        <div>
          <h3>A single lesson</h3>
          <p class="eyebrow" style="margin-top:6px;">55 minutes &middot; video call</p>
        </div>
        <!-- SOSTITUISCI: il tuo prezzo vero -->
        <div class="price">&euro;25<small>per lesson</small></div>
      </div>
      <ul class="lesson-list">
        <li><span>A real task to complete in Italian, not a chapter to read</span></li>
        <li><span>Live corrections, written down as we speak</span></li>
        <li><span>A short recap page you keep forever</span></li>
        <li><span>Exercises built around the mistakes <em>you</em> actually make</span></li>
      </ul>
      <p class="lesson-note">
        First lesson is a conversation, not a test. We find out where you are and
        what's blocking you, then we start from there.
      </p>
    </aside>

  </div>
</section>

<div class="tiles" aria-hidden="true"></div>

<!-- ======================= CHI SI RICONOSCE ======================= -->
<section class="section" id="familiar">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Sound familiar?</p>
      <h2>Three people usually write to me.</h2>
      <p class="lead">You'll probably recognise yourself in one of them.</p>
    </div>

    <div class="stack">
      <article class="stack-card" style="--accent:var(--saffron); --i:0;">
        <p class="card-tag">The one who got stuck</p>
        <p class="quote">&ldquo;Six hundred days on the app. I understand everything and I can't say a word.&rdquo;</p>
        <p>
          You've collected vocabulary you never use. What's missing isn't knowledge,
          it's the mileage of speaking badly for a while with someone who doesn't
          let you drift. That takes weeks, not years.
        </p>
      </article>
      <div class="stack-gap" aria-hidden="true"></div>

      <article class="stack-card" style="--accent:var(--verde); --i:1;">
        <p class="card-tag">The one starting from zero</p>
        <p class="quote">&ldquo;Everyone says Italian is easy. So why can't I order a coffee?&rdquo;</p>
        <p>
          Because you were handed the present tense of <em>essere</em> instead of a
          reason to open your mouth. We start with things you'll say this week,
          and the grammar comes in behind them, quietly.
        </p>
      </article>
      <div class="stack-gap" aria-hidden="true"></div>

      <article class="stack-card" style="--accent:var(--rosso); --i:2;">
        <p class="card-tag">The one who loves Italy</p>
        <p class="quote">&ldquo;My grandmother spoke it. I want it back.&rdquo;</p>
        <p>
          A house in the hills, a family name, someone you love, a move you're
          planning. The motivation is already there and it's the strongest kind.
          It just needs a structure around it.
        </p>
      </article>
      <div class="stack-tail" aria-hidden="true"></div>
    </div>
  </div>
</section>

<!-- ============================ METODO ============================ -->
<section class="section dark" id="method">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">The method</p>
      <h2>You don't study the language.<br>You use it, and it sticks.</h2>
      <p class="lead">
        It's called task&#8209;based teaching, and it's what the research has pointed at for
        thirty years. Every lesson is built around something you have to actually get
        done in Italian. The grammar shows up as the tool you need to finish the job.
      </p>
    </div>

    <div class="steps">
      <div class="step">
        <p class="step-n">STEP 01</p>
        <h3>The task</h3>
        <p>Rent a flat in Bologna. Argue about a bill. Tell me about your weekend so I believe you. Something with a real outcome.</p>
      </div>
      <div class="step">
        <p class="step-n">STEP 02</p>
        <h3>You try it</h3>
        <p>Badly, at first. That's the point. I write down every slip without stopping you, because interrupting kills fluency.</p>
      </div>
      <div class="step">
        <p class="step-n">STEP 03</p>
        <h3>We fix what broke</h3>
        <p>Now the grammar, and only the piece that got in your way. Ten focused minutes beat a chapter you'll forget.</p>
      </div>
      <div class="step">
        <p class="step-n">STEP 04</p>
        <h3>You do it again</h3>
        <p>Same task, new version, and you feel the difference in your own mouth. That feeling is what keeps people coming back.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================= MATERIALI GRATUITI ======================= -->
<section class="section" id="materials">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Free, no sign&#8209;up, no email</p>
      <h2>Exercises I built for my own students.</h2>
      <p class="lead">
        Open them, use them, come back to them. Nothing to register for and nothing
        to pay. If they help you, you'll know what a lesson feels like.
      </p>
    </div>

    <!-- SOSTITUISCI i link quando gli esercizi saranno online -->
    <div class="materials">
      <a class="mat" href="esercizi/passato-prossimo/">
        <span class="mat-top" aria-hidden="true"></span>
        <p class="card-tag" style="margin-top:18px;">A2 &middot; Grammar</p>
        <h3 style="margin-top:0;">Passato prossimo, without the panic</h3>
        <p>The past tense that Italians actually use all day. Twenty sentences, instant correction.</p>
        <p class="mat-go">Open the exercise &rarr;</p>
      </a>

      <a class="mat" href="esercizi/parole-quotidiane/">
        <span class="mat-top v2" aria-hidden="true"></span>
        <p class="card-tag" style="margin-top:18px;">A1 &rarr; B1 &middot; Vocabulary</p>
        <h3 style="margin-top:0;">300 words you'll hear on day one</h3>
        <p>Spaced repetition that remembers what you keep forgetting. Your progress stays on your device.</p>
        <p class="mat-go">Start training &rarr;</p>
      </a>

      <a class="mat" href="esercizi/ascolto/">
        <span class="mat-top v3" aria-hidden="true"></span>
        <p class="card-tag" style="margin-top:18px;">B1 &middot; Listening</p>
        <h3 style="margin-top:0;">Italians speaking at normal speed</h3>
        <p>Short clips, no slow-motion voice. Listen, guess, reveal, listen again.</p>
        <p class="mat-go">Open the exercise &rarr;</p>
      </a>
    </div>
  </div>
</section>

<!-- ============================ CHI SONO ============================ -->
<section class="section" id="about">
  <div class="wrap about">
    <!-- SOSTITUISCI: al posto di questo riquadro va la tua foto.
         <img src="img/fabio.jpg" alt="Fabio" class="portrait"> -->
    <div class="portrait"><span>Your photo goes here</span></div>

    <div class="about-body">
      <p class="eyebrow">Piacere, io sono Fabio</p>
      <h2>A linguist who'd rather hear you talk.</h2>
      <p>
        I have a master's in linguistics from the University of Turin, which mostly
        means I know exactly <strong>why</strong> a thing is hard for you before you
        can explain it to me. I teach Italian online full time, and I'm a Super Tutor
        on Preply, which is a polite way of saying people keep coming back.
      </p>
      <p>
        I live near Pinerolo, in Piedmont, where the mountains start. I'm not going
        to teach you the Italy of postcards. I'll teach you the language people use
        to complain about the trains, order the second coffee, and tell a story badly
        at dinner. <strong>That's the one you actually want.</strong>
      </p>
    </div>
  </div>
</section>

<!-- ============================ RECENSIONI ============================ -->
<section class="section" id="reviews" style="padding-top:0;">
  <div class="wrap">
    <div class="section-head" data-reveal>
      <p class="eyebrow">What students say</p>
      <h2>In their words.</h2>
      <!-- SOSTITUISCI con recensioni vere copiate dal tuo profilo Preply.
           Non pubblicare la pagina con questi segnaposto. -->
      <p class="placeholder-note">Da sostituire con recensioni vere</p>
    </div>

    <div class="grid-3">
      <article class="card">
        <p class="quote">&ldquo;Here goes the real review of a real student.&rdquo;</p>
        <p class="card-tag">Name &middot; Country</p>
      </article>
      <article class="card">
        <p class="quote">&ldquo;Here goes the real review of a real student.&rdquo;</p>
        <p class="card-tag">Name &middot; Country</p>
      </article>
      <article class="card">
        <p class="quote">&ldquo;Here goes the real review of a real student.&rdquo;</p>
        <p class="card-tag">Name &middot; Country</p>
      </article>
    </div>
  </div>
</section>

<!-- ============================ PRENOTAZIONE ============================ -->
<section class="section" id="book" style="padding-top:0;">
  <div class="wrap">
    <div class="book">
      <div class="book-copy">
        <p class="eyebrow">Allora, cominciamo</p>
        <h2>Pick a time. We'll talk.</h2>
        <p>
          The first lesson costs the same as any other and commits you to nothing.
          If we're not a good fit, I'll tell you straight and point you to someone
          who is.
        </p>
        <div class="book-cta">
          <!-- SOSTITUISCI con il tuo link Cal.com e la tua email -->
          <a class="btn btn-light" href="#">See my calendar</a>
          <a class="btn btn-light" style="background:transparent;color:var(--paper-2);border-color:var(--paper-2);" href="mailto:tuaemail@esempio.com">Write to me first</a>
        </div>
      </div>

      <!-- SOSTITUISCI questo riquadro con il calendario Cal.com incorporato -->
      <div class="calendar-slot">
        <p class="eyebrow">Booking calendar</p>
        <p style="color:var(--ink-soft);">Qui va incorporato il calendario di Cal.com. Finché non c'è, il bottone porta alla mail.</p>
      </div>
    </div>
  </div>
</section>
</main>

<!-- ============================ FOOTER ============================ -->
<footer class="footer">
  <div class="wrap footer-in">
    <div>
      <a class="logo" href="#top" style="margin-bottom:8px;">
        <span class="logo-mark" aria-hidden="true"></span>
        Italiano con Fabio
      </a>
      <p style="font-size:0.9rem;margin-top:8px;">Online Italian lessons from Piedmont, Italy.</p>
    </div>
    <nav class="footer-links" aria-label="Footer">
      <a href="#method">The method</a>
      <a href="#materials">Free exercises</a>
      <a href="#book">Book a lesson</a>
      <!-- SOSTITUISCI con il tuo profilo Instagram -->
      <a href="#">Instagram</a>
    </nav>
  </div>
</footer>

<script>
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;

  /* Chi ha chiesto meno movimento vede la pagina ferma e completa. */
  if (reduced || !("IntersectionObserver" in window)) {
    root.classList.remove("js");
    return;
  }

  /* 1. La penna che corregge, subito dopo l'apertura.
        Si riscrive ogni volta che si torna in cima alla pagina. */
  var hero = document.querySelector(".hero-copy");
  if (hero) {
    requestAnimationFrame(function () { hero.classList.add("hero-ready"); });

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hero.classList.remove("hero-ready");
          /* forza il browser a ricalcolare, altrimenti non riparte */
          void hero.offsetWidth;
          hero.classList.add("hero-ready");
        }
      });
    }, { threshold: 0.55 }).observe(hero);
  }

  /* 2. Tutto quello che compare scorrendo. */
  var targets = document.querySelectorAll(
    "[data-reveal], .step, .mat, .book, .portrait, .about-body, .card"
  );

  /* Gli elementi vicini partono a catena, non tutti insieme. */
  var groups = [".steps", ".materials", ".grid-3", ".stack"];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        var el = child.matches(".step, .mat, .card, .stack-card") ? child : child.querySelector(".stack-card");
        if (el) { el.style.setProperty("--d", (i * 0.09) + "s"); }
      });
    });
  });

  /* L'animazione va avanti scendendo e indietro risalendo.
     Attenzione a un dettaglio: togliamo la classe solo agli elementi
     usciti dal BASSO dello schermo. Quelli usciti dall'alto restano
     visibili, altrimenti scrollando in su la pagina lampeggerebbe. */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("in");
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  targets.forEach(function (el) { io.observe(el); });

  /* 3. Barra di avanzamento, per i browser senza le animazioni CSS legate allo scroll. */
  var bar = document.querySelector(".progress");
  if (bar && !CSS.supports("animation-timeline: scroll()")) {
    var ticking = false;
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
</script>

</body>
</html>
