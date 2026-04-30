// ═══════════════════════════════════════════════════════════════
// TUTORIAL.JS — Santes Tiles · Tutorial interactiu pas a pas
// Usa el joc real però amb superposicions explicatives
// ═══════════════════════════════════════════════════════════════

// ── Cançó de tutorial (Gegant del Pi, easy, notes manuals) ──
const TUTORIAL_SONG = {
    id: 'gener',
    title: 'Gener',
    artist: 'Tradicional',
    audioSrc: '/../../../audio/Gener.mp3',
    audioSrcEx: '/../../../audio/Gener.mp3',
    videoSrc: '/../../../video/Gener.mp4',
    bgColor: '#2e1a0a',
    bgGradient: 'linear-gradient(135deg,#2e1a0a,#0a1a2e)',
    bgImage: '/../../../public/Gener.png',
    duration: 120,
    dificultad: "Fàcil",
    categoria: "Generals",
    vidas: 5,
    notesEasy: [],
    notesHard: []
  },

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
    btnTut.addEventListener('click', startTutorial);
  }
})();

// ═══════════════════════════════════════════════════════════════
// FUNCIONS PRINCIPALS
// ═══════════════════════════════════════════════════════════════

function startTutorial() {
  TUT.active   = true;
  TUT.stepIdx  = 0;
  TUT.pausedTime = 0;
  TUT.audioOffset = 0;

  // Mostra el botó de sortir
  const exitBtn = document.getElementById('tut-exit-btn');
  if (exitBtn) exitBtn.style.display = 'flex';

  // Inicia el joc real amb la cançó tutorial (sense àudio per ara)
  if (typeof startSong === 'function') {
    startSong(TUTORIAL_SONG, false);
  }

  // Pausa el joc immediatament (pantalla de benvinguda)
  setTimeout(() => {
    if (typeof G !== 'undefined') {
      G.running = false;
      if (G.animId) { cancelAnimationFrame(G.animId); G.animId = null; }
      if (G.audio)  { try { G.audio.pause(); } catch(e){} }
    }
    showTutorialStep(0);
  }, 80);
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
  const t = G.audio ? G.audio.currentTime : (G.timerMode ? G.getTime() : 0);
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
  hideExitConfirm();
  TUT.active = false;

  // Atura el joc
  if (typeof G !== 'undefined') {
    G.running = false;
    if (G.animId) { cancelAnimationFrame(G.animId); G.animId = null; }
    if (G.audio)  { try { G.audio.pause(); G.audio.currentTime = 0; } catch(e){} G.audio = null; }
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
  const liveHint = document.getElementById('tut-live-hint');
  if (liveHint) liveHint.classList.remove('visible');
  showTutorialComplete();
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