// ═══════════════════════════════════════════════════════════════
// TUTORIAL.JS — Santes Tiles · Tutorial interactiu pas a pas
// Usa el joc real però amb superposicions explicatives
// ═══════════════════════════════════════════════════════════════

// ── Cançó de tutorial (Gegant del Pi, easy, notes manuals) ──
const TUTORIAL_SONG = {
    id: 'gener',
    title: 'Gener',
    artist: 'Tradicional',
    audioSrc: '/../../../../audio/Gener.mp3',
    audioSrcEx: '/../../../../audio/Gener.mp3',
    videoSrc: '/../../../../video/Bequetero.mp4',
    bgColor: '#2e1a0a',
    bgGradient: 'linear-gradient(135deg,#2e1a0a,#0a1a2e)',
    bgImage: '/../../../../public/Gener.png',
    duration: 120,
    dificultad: "Fàcil",
    categoria: "Generals",
    vidas: 5,
    notesEasy: [[0.766,0],[1.091,2],[1.695,3],[4.574,0],[5.968,2],[6.455,3],[6.92,0],[8.266,2],[8.824,3],[11.54,0],[12.074,2],[14.211,3],[15.325,0],[16.277,2],[16.742,3],[17.043,0],[17.67,2],[19.574,3],[20.503,0],[22.291,2],[23.661,3],[24.102,0],[26.935,2],[29.814,3],[30.232,0],[30.79,2],[31.254,3],[31.742,0],[34.551,2],[35.898,3],[36.362,0],[38.731,2],[42.005,3],[44.791,0],[45.209,2],[45.627,3],[46.184,0],[47.578,2],[48.53,3],[49.459,0],[50.387,2],[52.175,3],[54.149,0],[56.471,2],[56.819,3],[57.446,0],[57.911,2],[58.77,3],[59.722,0],[60.163,2]],
    notesHard: [[0.766,0],[1.111,2],[1.252,3],[1.699,0],[2.235,2],[2.618,3],[2.733,0],[3.014,2],[3.206,3],[3.665,0],[4.125,2],[4.636,3],[4.942,0],[5.083,2],[5.543,3],[5.849,0],[5.99,2],[6.462,3],[6.769,0],[6.909,2],[7.177,3],[7.369,0],[7.535,2],[7.65,3],[8.263,0],[8.838,2],[9.336,3],[9.489,0],[9.617,2],[9.731,3],[10.217,0],[10.689,2],[10.97,3],[11.111,0],[11.29,2],[11.609,3],[11.749,0],[11.928,2],[12.081,3],[12.401,0],[12.541,2],[12.975,3],[13.333,0],[13.435,2],[13.857,3],[14.252,0],[14.393,2],[14.533,3],[14.674,0],[14.853,2],[15.019,3],[15.146,0],[15.338,2],[15.747,3],[16.296,0],[16.628,2],[16.794,3],[16.934,0],[17.062,2],[17.202,3],[17.573,0],[17.726,2],[18.033,3],[18.186,0],[18.48,2],[18.646,3],[19.093,0],[19.399,2],[19.578,3],[19.757,0],[19.884,2],[20.038,3],[20.485,0],[20.817,2],[20.944,3],[21.43,0],[21.762,2],[21.902,3],[22.068,0],[22.183,2],[22.336,3],[22.515,0],[22.681,2],[22.822,3],[22.898,0],[23.32,2],[23.69,3],[23.792,0],[24.112,2],[24.303,3],[24.559,0],[24.686,2],[25.197,3],[25.453,0],[25.695,2],[25.963,3],[26.155,0],[26.564,2],[26.768,3],[26.96,0],[27.1,2],[27.317,3],[27.534,0],[28.007,2],[28.466,3],[28.965,0],[29.233,2],[29.424,3],[29.552,0],[29.68,2],[29.859,3],[29.999,0],[30.152,2],[30.28,3],[30.791,0],[31.289,2],[31.634,3],[31.774,0],[31.927,2],[32.055,3],[32.208,0],[32.489,2],[32.668,3],[33.013,0],[33.205,2],[33.473,3],[33.639,0],[34.098,2],[34.405,3],[34.558,0],[34.878,2],[34.98,3],[35.439,0],[35.797,2],[35.938,3],[36.18,0],[36.372,2],[36.717,3],[36.883,0],[37.151,2],[37.33,3],[37.611,0],[37.777,2],[38.224,3],[38.747,0],[39.003,2],[39.105,3],[39.232,0],[39.526,2],[39.667,3],[39.999,0],[40.126,2],[40.458,3],[40.612,0],[41.046,2],[41.57,3],[41.736,0],[41.876,2],[42.016,3],[42.476,0],[42.936,2],[43.268,3],[43.421,0],[43.894,2],[44.175,3],[44.315,0],[44.481,2],[44.647,3],[44.801,0],[44.941,2],[45.069,3],[45.222,0],[45.695,2],[46.065,3],[46.205,0],[46.55,2],[46.652,3],[46.818,0],[46.972,2],[47.099,3],[47.393,0],[47.585,2],[47.955,3],[48.044,0],[48.542,2],[49.002,3],[49.194,0],[49.321,2],[49.475,3],[49.934,0],[50.407,2],[50.624,3],[50.88,0],[51.288,2],[51.774,3],[51.914,0],[52.067,2],[52.246,3],[52.399,0],[52.667,2],[53.191,3],[53.536,0],[53.689,2],[53.97,3],[54.162,0],[54.43,2],[54.609,3],[55.107,0],[55.413,2],[55.579,3],[55.873,0],[56.013,2],[56.512,3],[56.703,0],[56.831,2],[56.984,3],[57.457,0],[57.738,2],[57.916,3],[58.223,0],[58.376,2],[58.772,3],[59.13,0],[59.308,2],[59.436,3],[59.589,0],[59.73,2],[59.921,3],[60.024,0],[60.177,2]]
  };

// ═══════════════════════════════════════════════════════════════
// DEFINICIÓ DELS PASSOS
// ═══════════════════════════════════════════════════════════════
const TUTORIAL_STEPS = [
  {
    id: 'welcome',
    gameTime: null,      // null = pantalla estàtica (joc pausat)
    pauseAt: null,
    title: '👋 Benvingut al Tutorial!',
    body: `Aprendràs a jugar a <b>Santes Tiles</b> en menys de 2 minuts.<br><br>
           El joc és com un Piano Tiles: <b>prem la tecla correcta</b> quan la rajola arribi a la zona de cops.<br><br>
           Clica <b>Continua</b> per começar!`,
    highlight: null,
    btnText: 'Continua →',
    autoAt: null,
  },
  {
    id: 'lanes',
    gameTime: null,
    pauseAt: null,
    title: '🎯 Els 4 Carrils',
    body: `Hi ha <b>4 carrils de colors</b>. Cada carril té una tecla assignada:<br><br>
           <div class="tut-keys-grid">
             <div class="tut-key-item" style="color:#e8002d"><span class="tut-key-pill">A / ←</span> Carril esquerra</div>
             <div class="tut-key-item" style="color:#1a8fff"><span class="tut-key-pill">S / ↓</span> Carril centre-esq.</div>
             <div class="tut-key-item" style="color:#00cc55"><span class="tut-key-pill">D / →</span> Carril centre-dret.</div>
             <div class="tut-key-item" style="color:#ff8800"><span class="tut-key-pill">W / ↑</span> Carril dreta</div>
           </div><br>
           En mòbil, <b>toca el carril</b> directament!`,
    highlight: 'lane-bar',
    btnText: 'Entès →',
    autoAt: null,
  },
  {
    id: 'hitzone',
    gameTime: null,
    pauseAt: null,
    title: '🎵 La Zona de Cop',
    body: `La <b>línia daurada</b> és la zona de cop.<br><br>
           Prem la tecla exactament quan la rajola arribi a la línia per obtenir:<br><br>
           <div class="tut-score-list">
             <div><span style="color:#f5e0a0">✦ PERFECT</span> &nbsp;+300 × combo</div>
             <div><span style="color:#6ae0ff">✦ GREAT</span> &nbsp;&nbsp;&nbsp;+200 × combo</div>
             <div><span style="color:#ffffff">✦ OK</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+100 × combo</div>
           </div>`,
    highlight: 'hitzone-line',
    btnText: 'Provem-ho! →',
    autoAt: null,
  },
  {
    id: 'play1',
    gameTime: 0,          // arrenca el joc aquí
    pauseAt: 8.5,         // pausa automàtica en arribar a aquest temps
    title: '▶ Prem les primeres 4 notes',
    body: `Arriben 4 rajoles, una per carril.<br>Prem <b>A → S → D → W</b> quan arribin a la línia daurada.`,
    highlight: null,
    btnText: null,        // null = no mostra botó (mode play)
    autoAt: 8.5,          // es presenta sol en pausar
    nextStep: 'pause1',
  },
  {
    id: 'pause1',
    gameTime: null,       // no toca el joc, espera
    pauseAt: null,
    title: '⭐ Com ha anat?',
    body: `Has vist el <b>feedback de cop</b> sobre cada carril?<br><br>
           Com més cops perfectes, més gran el teu <b>combo</b> i més punts!<br><br>
           Si falles una nota <span style="color:#e8002d">perds una vida ♥</span>.<br>En el tutorial tens vides infinites, però a les cançons reals en tens poques!`,
    highlight: 'hud-lives',
    btnText: 'Seguim →',
    autoAt: null,
  },
  {
    id: 'combo',
    gameTime: null,
    pauseAt: null,
    title: '🔥 El Sistema de Combo',
    body: `Cada cop seguiti augmenta el teu <b>combo</b>.<br><br>
           La puntuació és: <code>punts × combo (màx ×10)</code><br><br>
           Si falles una nota, el combo es reinicia a 0.<br>
           <b>Mantén el ritme constant</b> per aconseguir la puntuació màxima!`,
    highlight: 'hud-combo',
    btnText: 'Seguim →',
    autoAt: null,
  },
  {
    id: 'play2',
    gameTime: 8.5,
    pauseAt: 21.5,
    title: '🎶 Ara prova el ritme ràpid',
    body: `Ara vénen notes <b>més ràpides i seguides</b>.<br>Mantén el ritme i no perdis el combo!`,
    highlight: null,
    btnText: null,
    autoAt: 21.5,
    nextStep: 'pause2',
  },
  {
    id: 'pause2',
    gameTime: null,
    pauseAt: null,
    title: '🌟 Gairebé ho tens!',
    body: `Has vist la <b>barra de progrés</b> a la part superior? Indica quant queda de cançó.<br><br>
           Quan acabes una cançó i aconsegueixes <span style="color:#c8a84b">⭐⭐⭐</span>, desbloques el <b>Mode EX 2×</b>: la mateixa cançó al doble de velocitat!`,
    highlight: 'progress-bar',
    btnText: 'Una última prova →',
    autoAt: null,
  },
  {
    id: 'play3',
    gameTime: 21.5,
    pauseAt: null,        // null = juga fins al final
    title: '🏁 Últimes notes!',
    body: `Ara ho saps tot. Acaba les últimes notes i completa el tutorial!`,
    highlight: null,
    btnText: null,
    autoAt: null,
  },
];

// ═══════════════════════════════════════════════════════════════
// ESTAT DEL TUTORIAL
// ═══════════════════════════════════════════════════════════════
let TUT = {
  active: false,
  stepIdx: 0,
  overlayVisible: false,
  pausedTime: 0,
  pausedByStep: false,
  audioOffset: 0,  // temps de l'àudio quan es va pausar
};

// ═══════════════════════════════════════════════════════════════
// INJECCIÓ CSS DEL TUTORIAL
// ═══════════════════════════════════════════════════════════════
(function injectTutorialCSS() {
  const style = document.createElement('style');
  style.textContent = `
    /* ── Overlay fosc ── */
    #tut-overlay {
      display: none;
      position: absolute;
      inset: 0;
      background: rgba(5,8,20,0.82);
      z-index: 200;
      pointer-events: all;
      backdrop-filter: blur(2px);
    }
    #tut-overlay.visible { display: flex; align-items: center; justify-content: center; }

    /* ── Caixa de pas ── */
    .tut-box {
      background: linear-gradient(145deg, #0f1b2e, #1a0d2e);
      border: 1.5px solid rgba(200,168,75,0.45);
      border-radius: 16px;
      padding: 28px 32px 24px;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 0 60px rgba(200,168,75,0.12), 0 20px 60px rgba(0,0,0,0.6);
      animation: tutBoxIn .3s cubic-bezier(.22,1,.36,1);
      position: relative;
    }
    @keyframes tutBoxIn {
      from { opacity:0; transform: translateY(24px) scale(.97); }
      to   { opacity:1; transform: none; }
    }

    /* ── Indicador de pas ── */
    .tut-step-dots {
      display: flex; gap: 6px; justify-content: center; margin-bottom: 16px;
    }
    .tut-step-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: rgba(200,168,75,0.2);
      transition: background .25s;
    }
    .tut-step-dot.active { background: #c8a84b; }
    .tut-step-dot.done   { background: rgba(200,168,75,0.55); }

    /* ── Títol i cos ── */
    .tut-title {
      font-family: 'Titillium Web', sans-serif;
      font-size: 1.15rem; font-weight: 700;
      color: #c8a84b; margin-bottom: 12px; letter-spacing: .03em;
    }
    .tut-body {
      font-family: 'Titillium Web', sans-serif;
      font-size: .93rem; color: rgba(255,255,255,0.85);
      line-height: 1.6;
    }
    .tut-body b { color: #fff; }
    .tut-body code {
      background: rgba(200,168,75,0.12); padding: 2px 6px;
      border-radius: 4px; font-size:.88rem; color:#c8a84b;
    }

    /* ── Grid tecles ── */
    .tut-keys-grid { display:flex; flex-direction:column; gap:6px; margin-top:4px; }
    .tut-key-item  { display:flex; align-items:center; gap:10px; font-size:.88rem; }
    .tut-key-pill  {
      display:inline-block; background:rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.2); border-radius:6px;
      padding:2px 10px; font-size:.82rem; color:#fff; font-weight:600;
      white-space:nowrap;
    }

    /* ── Llista puntuació ── */
    .tut-score-list { display:flex; flex-direction:column; gap:5px; font-size:.9rem; }

    /* ── Botó continua ── */
    .tut-btn {
      display: block; width: 100%; margin-top: 22px;
      padding: 11px 0; border-radius: 8px;
      background: linear-gradient(90deg,#c8a84b,#e8c96a);
      color: #0a0a14; font-family:'Titillium Web',sans-serif;
      font-size:.95rem; font-weight:700; letter-spacing:.08em;
      border: none; cursor: pointer;
      transition: transform .12s, box-shadow .12s;
      box-shadow: 0 4px 20px rgba(200,168,75,0.3);
    }
    .tut-btn:hover { transform:translateY(-2px); box-shadow:0 6px 28px rgba(200,168,75,0.45); }
    .tut-btn:active { transform:translateY(0); }

    /* ── Badge "jugant" ── */
    .tut-playing-hint {
      position: absolute; bottom: 14px; left: 50%;
      transform: translateX(-50%);
      background: rgba(200,168,75,0.13);
      border: 1px solid rgba(200,168,75,0.3);
      border-radius: 20px; padding: 5px 16px;
      font-family:'Titillium Web',sans-serif;
      font-size:.78rem; color:rgba(200,168,75,0.8);
      pointer-events:none; white-space:nowrap;
      animation: tutPulse 1.5s infinite;
    }
    @keyframes tutPulse {
      0%,100%{opacity:.6} 50%{opacity:1}
    }

    /* ── Ressaltat d'elements del joc ── */
    .tut-highlight-ring {
      position: absolute;
      border: 2.5px solid #c8a84b;
      border-radius: 10px;
      box-shadow: 0 0 24px rgba(200,168,75,0.5);
      pointer-events: none;
      z-index: 195;
      animation: tutRing 1.2s ease-in-out infinite;
      transition: all .3s;
    }
    @keyframes tutRing {
      0%,100%{box-shadow:0 0 16px rgba(200,168,75,0.4)}
      50%{box-shadow:0 0 32px rgba(200,168,75,0.8)}
    }

    /* ── Overlay petit "jugant" durant joc ── */
    #tut-live-hint {
      display: none;
      position: absolute;
      top: 10px; left: 50%; transform: translateX(-50%);
      background: rgba(200,168,75,0.15);
      border: 1px solid rgba(200,168,75,0.35);
      border-radius: 20px; padding: 4px 18px;
      font-family: 'Titillium Web',sans-serif;
      font-size: .78rem; color: rgba(200,168,75,.9);
      z-index: 190; pointer-events: none; white-space: nowrap;
    }
    #tut-live-hint.visible { display: block; }

    /* ── Botó sortir tutorial ── */
    #tut-exit-btn {
      position: absolute;
      top: 12px; right: 12px;
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(200,168,75,0.08);
      border: 1px solid rgba(200,168,75,0.25);
      border-radius: 4px;
      color: rgba(200,168,75,0.6);
      font-family: 'Cinzel', serif;
      font-size: 14px;
      cursor: pointer;
      z-index: 210;
      transition: all 0.15s;
      line-height: 1;
    }
    #tut-exit-btn:hover {
      background: rgba(200,168,75,0.18);
      border-color: #c8a84b;
      color: #c8a84b;
      transform: scale(1.08);
    }
    #tut-exit-btn:active { transform: scale(0.95); }

    /* ── Confirm sortir (mini modal) ── */
    #tut-exit-confirm {
      display: none;
      position: absolute;
      inset: 0;
      background: rgba(5,8,20,0.88);
      z-index: 220;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(3px);
    }
    #tut-exit-confirm.visible { display: flex; }
    .tut-exit-box {
      background: linear-gradient(145deg, #0f1b2e, #1a0d2e);
      border: 1.5px solid rgba(200,168,75,0.4);
      border-radius: 12px;
      padding: 28px 32px 22px;
      text-align: center;
      max-width: 300px; width: 85%;
      box-shadow: 0 0 50px rgba(0,0,0,0.7);
      animation: tutBoxIn .25s cubic-bezier(.22,1,.36,1);
    }
    .tut-exit-title {
      font-family: 'Cinzel Decorative', cursive;
      font-size: 1rem; color: #c8a84b;
      margin-bottom: 10px; letter-spacing: .05em;
    }
    .tut-exit-body {
      font-family: 'Titillium Web', sans-serif;
      font-size: .88rem; color: rgba(255,255,255,0.75);
      line-height: 1.55; margin-bottom: 20px;
    }
    .tut-exit-btns { display: flex; gap: 10px; justify-content: center; }
    .tut-exit-cancel {
      flex: 1; padding: 9px 0; border-radius: 6px;
      background: rgba(200,168,75,0.08);
      border: 1px solid rgba(200,168,75,0.25);
      color: rgba(200,168,75,0.8);
      font-family: 'Cinzel', serif; font-size: .78rem;
      letter-spacing: .08em; cursor: pointer;
      transition: all .15s;
    }
    .tut-exit-cancel:hover { border-color:#c8a84b; color:#c8a84b; background:rgba(200,168,75,0.14); }
    .tut-exit-ok {
      flex: 1; padding: 9px 0; border-radius: 6px;
      background: linear-gradient(90deg,#8b0000,#c8302d);
      border: none; color: #fff;
      font-family: 'Cinzel', serif; font-size: .78rem;
      letter-spacing: .08em; cursor: pointer;
      transition: all .15s;
      box-shadow: 0 4px 16px rgba(139,0,0,0.35);
    }
    .tut-exit-ok:hover { filter: brightness(1.15); transform: translateY(-1px); }
    .tut-exit-ok:active { transform: none; }
  `;
  document.head.appendChild(style);
})();

// ═══════════════════════════════════════════════════════════════
// CONSTRUCCIÓ DEL DOM DEL TUTORIAL
// ═══════════════════════════════════════════════════════════════
(function buildTutorialDOM() {
  // Overlay principal
  const overlay = document.createElement('div');
  overlay.id = 'tut-overlay';
  overlay.innerHTML = `
    <div class="tut-box" id="tut-box">
      <div class="tut-step-dots" id="tut-dots"></div>
      <div class="tut-title" id="tut-title"></div>
      <div class="tut-body"  id="tut-body"></div>
      <button class="tut-btn" id="tut-btn">Continua →</button>
    </div>
  `;

  // Botó × per sortir (sempre visible sobre el joc durant el tutorial)
  const exitBtn = document.createElement('button');
  exitBtn.id = 'tut-exit-btn';
  exitBtn.title = 'Sortir del tutorial';
  exitBtn.innerHTML = '✕';
  exitBtn.style.display = 'none';  // ocult fins que arrenca el tutorial
  exitBtn.addEventListener('click', showExitConfirm);

  // Modal de confirmació de sortida
  const exitConfirm = document.createElement('div');
  exitConfirm.id = 'tut-exit-confirm';
  exitConfirm.innerHTML = `
    <div class="tut-exit-box">
      <div class="tut-exit-title">Sortir del Tutorial?</div>
      <div class="tut-exit-body">Perdràs el progrés del tutorial.<br>Podràs tornar-lo a fer quan vulguis.</div>
      <div class="tut-exit-btns">
        <button class="tut-exit-cancel" id="tut-exit-cancel">Continuar</button>
        <button class="tut-exit-ok"    id="tut-exit-ok">Sortir</button>
      </div>
    </div>
  `;

  // Ring de ressaltat
  const ring = document.createElement('div');
  ring.className = 'tut-highlight-ring';
  ring.id = 'tut-ring';
  ring.style.display = 'none';

  // Hint "jugant" visible durant gameplay
  const liveHint = document.createElement('div');
  liveHint.id = 'tut-live-hint';
  liveHint.textContent = '🎵 Tutorial en curs — prem les tecles al ritme!';

  // Afegim al game screen
  const gameScreen = document.getElementById('screen-game');
  if (gameScreen) {
    gameScreen.appendChild(overlay);
    gameScreen.appendChild(ring);
    gameScreen.appendChild(liveHint);
    gameScreen.appendChild(exitBtn);
    gameScreen.appendChild(exitConfirm);
  }

  // Listeners confirm modal
  setTimeout(() => {
    const cancelEl = document.getElementById('tut-exit-cancel');
    const okEl     = document.getElementById('tut-exit-ok');
    if (cancelEl) cancelEl.addEventListener('click', hideExitConfirm);
    if (okEl)     okEl.addEventListener('click', forceTutorialExit);
  }, 100);

  // Botó TUTORIAL a la pantalla títol ja existeix a l'HTML, només li posem el listener
  const btnTut = document.getElementById('btn-tutorial');
  if (btnTut) {
    btnTut.onclick = startTutorial;
  }
})();

// ═══════════════════════════════════════════════════════════════
// FUNCIONS PRINCIPALS
// ═══════════════════════════════════════════════════════════════

function startTutorial() {
  resetTutorial();   // 🔥 IMPORTANT

  TUT.active = true;
  TUT.stepIdx = 0;
  TUT.pauseAt = null;
  TUT.currentPlayStep = null;

  const exitBtn = document.getElementById('tut-exit-btn');
  if (exitBtn) exitBtn.style.display = 'flex';

if (typeof startSong === 'function') {
  startSong(TUTORIAL_SONG, false);
}

setTimeout(() => {
  if (typeof G !== 'undefined') {
    G.running = false;
    if (G.animId) cancelAnimationFrame(G.animId);
    G.animId = null;

    if (G.audio) {
      try {
        // ❌ ELIMINAT: G.audio.pause();
        G.audio.currentTime = 0;
      } catch(e){}
    }
  }

  showTutorialStep(0);
}, 80);
}

function resetTutorial() {
  TUT.active = false;
  TUT.stepIdx = 0;
  TUT.overlayVisible = false;
  TUT.pausedTime = 0;
  TUT.pausedByStep = false;
  TUT.audioOffset = 0;
  TUT.pauseAt = null;
  TUT.currentPlayStep = null;

  hideOverlay();
  hideHighlight();
  hidePlayHint();

  const liveHint = document.getElementById('tut-live-hint');
  if (liveHint) liveHint.classList.remove('visible');

  const exitBtn = document.getElementById('tut-exit-btn');
  if (exitBtn) exitBtn.style.display = 'none';

  // 🔥 IMPORTANTE: reset del juego REAL
  if (typeof G !== 'undefined') {
    G.running = false;

    if (G.animId) {
      cancelAnimationFrame(G.animId);
      G.animId = null;
    }

    if (G.audio) {
      try {
        G.audio.pause();
        G.audio.currentTime = 0;
      } catch(e){}
    }
  }
}

function showTutorialStep(idx) {
  const steps = TUTORIAL_STEPS;
  if (idx >= steps.length) {
    endTutorial();
    return;
  }

  TUT.stepIdx = idx;
  const step  = steps[idx];

  // ── Punts de progrés ──
  buildDots(idx);

  // ── Contingut ──
  document.getElementById('tut-title').textContent = step.title;
  document.getElementById('tut-body').innerHTML    = step.body;

  const btn = document.getElementById('tut-btn');
  if (step.btnText) {
    btn.textContent = step.btnText;
    btn.style.display = 'block';
    btn.onclick = () => onTutorialBtn(idx);
  } else {
    btn.style.display = 'none';
  }

  // ── Mostra l'overlay ──
  const overlay = document.getElementById('tut-overlay');
  overlay.classList.add('visible');
  TUT.overlayVisible = true;

  // ── Ressaltat ──
  if (step.highlight) {
    showHighlight(step.highlight);
  } else {
    hideHighlight();
  }

  // Si el pas és de JOC, el gestionem a onTutorialBtn
}

function onTutorialBtn(idx) {
  const step     = TUTORIAL_STEPS[idx];
  const nextIdx  = idx + 1;
  const nextStep = TUTORIAL_STEPS[nextIdx];

  hideOverlay();
  hideHighlight();

  if (!nextStep) { endTutorial(); return; }

  // Si el proper pas té gameTime (arrenca joc), comencem a jugar
  if (nextStep.gameTime !== null) {
    startTutorialPlay(nextIdx);
  } else {
    showTutorialStep(nextIdx);
  }
}

// ── Inicia o reprèn el joc per a un pas de gameplay ──
function startTutorialPlay(idx) {
  const step = TUTORIAL_STEPS[idx];

  // Mostra el hint petit
  const liveHint = document.getElementById('tut-live-hint');
  if (liveHint) liveHint.classList.add('visible');

  // Mostra caixa petita si té body (mode play semi-overlay)
  if (step.body && step.btnText === null) {
    showPlayHint(step.title, step.body);
  }

  // Reprèn/arrenca el joc
  if (typeof G !== 'undefined') {
    G.running = true;

    // Si hi ha àudio i estava pausat, reprenem
    if (G.audio && G.audio.paused) {
      G.audio.currentTime = step.gameTime || TUT.audioOffset;
      G.audio.play().catch(()=>{});
    }

    // Reinicia el loop
    if (!G.animId) {
      G.animId = requestAnimationFrame(tutGameLoop);
    }
  }

  // Registra quan s'ha de pausar
  TUT.pauseAt = step.pauseAt;
  TUT.currentPlayStep = idx;
}

// ── Loop de joc del tutorial (amb detecció de pausa automàtica) ──
function tutGameLoop() {
  if (!TUT.active || !G || !G.running) return;

  // Crida al gameLoop original
  if (typeof gameLoop === 'function') {
    // Ja l'executem via requestAnimationFrame des del joc original
  }

  // Comprova si hem d'aturar
  const t = G.audio?.currentTime ?? G.getTime?.() ?? 0;
  if (TUT.pauseAt && t >= TUT.pauseAt) {
    G.running = false;
    if (G.animId) { cancelAnimationFrame(G.animId); G.animId = null; }
    if (G.audio)  { try { G.audio.pause(); TUT.audioOffset = G.audio.currentTime; } catch(e){} }

    const liveHint = document.getElementById('tut-live-hint');
    if (liveHint) liveHint.classList.remove('visible');

    hidePlayHint();
    TUT.pauseAt = null;

    // Avança al proper pas (pause/explicació)
    const nextIdx = TUT.currentPlayStep + 1;
    setTimeout(() => showTutorialStep(nextIdx), 350);
    return;
  }

  G.animId = requestAnimationFrame(tutGameLoop);
}

// ── Injecta el hook al gameLoop original per detecció de fi ──
const _origEndGame = typeof endGame === 'function' ? endGame : null;
if (_origEndGame) {
  window.endGame = function() {
    if (TUT.active) {
      endTutorial();
      const liveHint = document.getElementById('tut-live-hint');
      if (liveHint) liveHint.classList.remove('visible');
      hidePlayHint();
      hideHighlight();
      // Amaga overlay joc i mostra pantalla de fi tutorial
      TUT.active = false;
      showTutorialComplete();
      return;
    }
    _origEndGame.apply(this, arguments);
  };
}

// ── Pantalla de fi del tutorial ──
function showTutorialComplete() {
  // Amaga el botó × (tutorial acabat)
  const exitBtnEl = document.getElementById('tut-exit-btn');
  if (exitBtnEl) exitBtnEl.style.display = 'none';

  const overlay = document.getElementById('tut-overlay');
  document.getElementById('tut-title').textContent = '🎉 Tutorial completat!';
  document.getElementById('tut-body').innerHTML = `
    Ja saps tot el necessari per jugar a <b>Santes Tiles</b>!<br><br>
    <div class="tut-score-list">
      <div>🎵 Prem la tecla al ritme de les notes</div>
      <div>🔥 Mantén el combo per més punts</div>
      <div>⭐ Aconsegueix 3 estrelles per desbloquar el Mode EX</div>
      <div>❤️ Vigila les vides — si les perdes totes, game over!</div>
    </div><br>
    Ara tria una cançó i <b>demostra el teu talent!</b>
  `;
  const btn = document.getElementById('tut-btn');
  btn.textContent = '🎵 Escull una cançó';
  btn.style.display = 'block';
  btn.onclick = () => {
    hideOverlay();
    if (typeof buildSongGrid === 'function') buildSongGrid();
    if (typeof showScreen === 'function') showScreen('select');
  };
  buildDots(TUTORIAL_STEPS.length); // tots plens
  overlay.classList.add('visible');
  TUT.overlayVisible = true;
}

// ═══════════════════════════════════════════════════════════════
// SORTIR DEL TUTORIAL
// ═══════════════════════════════════════════════════════════════

function showExitConfirm() {
  const c = document.getElementById('tut-exit-confirm');
  if (c) c.classList.add('visible');
}

function hideExitConfirm() {
  const c = document.getElementById('tut-exit-confirm');
  if (c) c.classList.remove('visible');
}

function forceTutorialExit() {
  TUT.active = false;
  hideExitConfirm();

  // 🔁 RESET TOTAL DEL TUTORIAL
  TUT = {
    active: false,
    stepIdx: 0,
    overlayVisible: false,
    pausedTime: 0,
    pausedByStep: false,
    audioOffset: 0,
    pauseAt: null,
    currentPlayStep: null
  };

  // Atura el joc
  if (typeof G !== 'undefined') {
    G.running = false;
    if (G.animId) {
      cancelAnimationFrame(G.animId);
      G.animId = null;
    }
    if (G.audio) {
      try {
        G.audio.pause();
        G.audio.currentTime = 0;
      } catch(e){}
      G.audio = null;
    }
  }

  // Amaga tots els elements del tutorial
  hideOverlay();
  hideHighlight();
  hidePlayHint();

  const liveHint = document.getElementById('tut-live-hint');
  if (liveHint) liveHint.classList.remove('visible');

  // Amaga el botó ×
  const exitBtn = document.getElementById('tut-exit-btn');
  if (exitBtn) exitBtn.style.display = 'none';

  // Torna a la pantalla títol
  if (typeof showScreen === 'function') showScreen('title');
}

function endTutorial() {
  TUT.active = false;

  hideOverlay();
  hideHighlight();
  hidePlayHint();

  const liveHint = document.getElementById('tut-live-hint');
  if (liveHint) liveHint.classList.remove('visible');

  if (typeof G !== 'undefined') {
    G.running = false;
    if (G.audio) {
      try {
        G.audio.pause();
        G.audio.currentTime = 0;
      } catch (e) {}
    }
  }

  // ❌ NO cridar showTutorialComplete aquí
}
// ═══════════════════════════════════════════════════════════════
// UTILITATS UI
// ═══════════════════════════════════════════════════════════════

function hideOverlay() {
  const overlay = document.getElementById('tut-overlay');
  if (overlay) overlay.classList.remove('visible');
  TUT.overlayVisible = false;
}

function buildDots(currentIdx) {
  const dotsEl = document.getElementById('tut-dots');
  if (!dotsEl) return;
  const total = TUTORIAL_STEPS.filter(s => s.id !== 'play1' && s.id !== 'play2' && s.id !== 'play3').length;
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'tut-step-dot' + (i === currentIdx ? ' active' : i < currentIdx ? ' done' : '');
    dotsEl.appendChild(d);
  }
}

// ── Ressaltat d'elements de la UI del joc ──
function showHighlight(targetId) {
  const ring = document.getElementById('tut-ring');
  if (!ring) return;

  let el = null;
  if (targetId === 'lane-bar')     el = document.getElementById('lane-bar');
  if (targetId === 'hud-lives')    el = document.getElementById('hud-lives');
  if (targetId === 'hud-combo')    el = document.getElementById('hud-combo');
  if (targetId === 'progress-bar') el = document.getElementById('progress-bar');
  if (targetId === 'hitzone-line') {
    // Ressaltem el canvas area
    el = document.getElementById('canvas-area');
  }

  if (!el) { ring.style.display = 'none'; return; }

  const rect   = el.getBoundingClientRect();
  const parent = document.getElementById('screen-game').getBoundingClientRect();

  ring.style.display = 'block';
  ring.style.left    = (rect.left   - parent.left - 4)  + 'px';
  ring.style.top     = (rect.top    - parent.top  - 4)  + 'px';
  ring.style.width   = (rect.width  + 8) + 'px';
  ring.style.height  = (rect.height + 8) + 'px';
}

function hideHighlight() {
  const ring = document.getElementById('tut-ring');
  if (ring) ring.style.display = 'none';
}

// ── Caixa petita durant gameplay (cantonada inferior) ──
let _playHintEl = null;
function showPlayHint(title, body) {
  if (_playHintEl) _playHintEl.remove();

  const box = document.createElement('div');
  box.id = 'tut-play-hint';
  box.style.cssText = `
    position:absolute; bottom:90px; right:12px;
    background:rgba(5,8,20,0.88);
    border:1px solid rgba(200,168,75,0.4);
    border-radius:12px; padding:12px 16px;
    max-width:210px; z-index:180; pointer-events:none;
    font-family:'Titillium Web',sans-serif;
    animation: tutBoxIn .3s cubic-bezier(.22,1,.36,1);
  `;
  box.innerHTML = `
    <div style="color:#c8a84b;font-weight:700;font-size:.82rem;margin-bottom:6px">${title}</div>
    <div style="color:rgba(255,255,255,.8);font-size:.78rem;line-height:1.5">${body}</div>
  `;

  const gameScreen = document.getElementById('screen-game');
  if (gameScreen) gameScreen.appendChild(box);
  _playHintEl = box;
}

function hidePlayHint() {
  if (_playHintEl) { _playHintEl.remove(); _playHintEl = null; }
}

// ── Reposiciona el ring en resize ──
window.addEventListener('resize', () => {
  if (TUT.active && TUTORIAL_STEPS[TUT.stepIdx]) {
    const h = TUTORIAL_STEPS[TUT.stepIdx].highlight;
    if (h) showHighlight(h);
  }
});

// ── Override del gameLoop del joc principal per injectar la detecció de pausa ──
// Apliquen el hook quan el joc es carrega
setTimeout(() => {
  // Guardamos referencia al startSong original para poder lanzar el tutorial
  const _origStartSong = typeof startSong === 'function' ? startSong : null;
  if (_origStartSong && !window._tutStartSongPatched) {
    window._tutStartSongPatched = true;
    // No cal sobreescriure startSong, el tutorial l'usa directament
  }
}, 200);

console.log('[Tutorial] tutorial.js carregat correctament ✓');