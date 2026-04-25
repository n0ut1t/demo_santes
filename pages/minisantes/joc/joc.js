// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════
const SONGS = [
  {
    id: 'bequetero',
    title: 'El Bequetero',
    artist: 'Les Santes de Mataró',
    audioSrc: '/../../../audio/Bequetero.mp3',
    videoSrc: '',
    bgColor: '#1a0a2e',
    bgGradient: 'linear-gradient(135deg,#1a0a2e,#0d1a0a)',
    bgImage: '/../../../public/Bequetero.png',
    duration: 119.81,
    notesEasy: [[1.207,0],[1.718,1],[2.206,3],[2.694,1],[3.181,0],[3.785,1],[4.342,0],[4.876,3],[5.387,0],[5.875,3],[6.385,2],[6.873,3],[7.361,0],[7.825,3],[8.313,1],[8.8,0],[9.311,1],[9.799,0],[10.31,1],[10.774,0],[11.285,3],[11.749,2],[12.26,0],[12.748,3],[13.259,0],[13.723,3],[14.211,2],[14.698,3],[15.186,2],[15.65,1],[16.161,0],[16.649,2],[17.136,3],[17.647,1],[18.158,0],[18.622,1],[19.156,3],[19.667,1],[20.132,2],[20.596,1],[21.06,0],[21.548,1],[22.036,2],[22.523,0],[23.034,1],[23.499,2],[24.009,0],[24.497,2],[24.985,1],[25.472,3],[25.983,1],[26.471,0],[27.005,3],[27.446,1],[27.957,3],[28.444,0],[28.955,2],[29.443,0],[29.977,3],[30.465,1],[30.975,3],[31.44,2],[31.927,1],[32.438,3],[32.949,0],[33.437,3],[33.948,0],[34.458,1],[35.016,3],[35.643,0],[36.177,2],[36.664,0],[37.175,1],[37.686,0],[38.174,2],[38.638,1],[39.172,2],[39.683,3],[40.194,1],[40.658,0],[41.169,2],[41.657,1],[42.144,0],[42.632,3],[43.119,1],[43.63,3],[44.141,2],[44.629,3],[45.116,0],[45.627,3],[46.138,2],[46.602,0],[47.113,3],[47.601,2],[48.112,0],[48.576,1],[49.064,2],[49.575,1],[50.062,2],[50.527,3],[51.037,2],[51.548,3],[52.036,0],[52.547,3],[53.034,1],[53.545,0],[54.033,1],[54.52,0],[54.985,2],[55.496,1],[56.007,2],[56.494,0],[57.005,1],[57.493,3],[57.98,2],[58.468,1],[58.955,0],[59.443,3],[59.931,1],[60.442,2],[61.045,3],[61.626,1],[62.16,0],[62.671,2],[63.135,0],[63.623,1],[64.134,3],[64.644,2],[65.109,3],[65.62,1],[66.107,3],[66.618,2],[67.152,1],[67.617,3],[68.081,1],[68.592,2],[69.079,0],[69.567,1],[70.055,3],[70.565,1],[71.053,0],[71.541,1],[72.075,0],[72.586,1],[73.073,3],[73.584,0],[74.072,3],[74.582,1],[75.07,3],[75.558,0],[76.069,2],[76.533,1],[77.044,3],[77.578,1],[78.065,3],[78.576,1],[79.064,3],[79.552,0],[80.062,3],[80.643,2],[81.223,0],[81.804,3],[82.315,2],[82.802,1],[83.313,3],[83.801,1],[84.358,0],[84.846,2],[85.357,1],[85.867,0],[86.355,2],[86.866,0],[87.307,3],[87.771,2],[88.236,1],[88.7,3],[89.188,0],[89.722,3],[90.21,0],[90.744,3],[91.231,1],[91.742,3],[92.276,2],[92.787,3],[93.298,0],[93.809,1],[94.319,2],[94.854,0],[95.318,3],[95.829,2],[96.363,0],[96.874,3],[97.361,1],[97.895,2],[98.406,0],[98.987,1],[99.637,2],[100.194,1],[100.751,0],[101.239,1],[101.773,0],[102.261,3],[102.772,0],[103.259,1],[103.77,3],[104.258,1],[104.768,0],[105.279,3],[105.767,0],[106.278,1],[106.765,3],[107.276,1],[107.764,3],[108.251,0],[108.762,2],[109.273,3],[109.784,2],[110.272,1],[110.759,0],[111.293,3],[111.781,2],[112.292,3],[112.779,0],[113.29,3],[113.801,1],[114.312,2],[114.799,3],[115.31,2],[115.798,1]],
    notesHard: [[1.207,0],[1.486,1],[1.625,3],[1.718,1],[1.95,0],[2.206,1],[2.345,0],[2.461,3],[2.624,0],[2.694,3],[2.926,2],[3.181,3],[3.413,0],[3.553,3],[3.669,1],[3.785,0],[3.901,1],[3.994,0],[4.133,1],[4.598,0],[4.876,3],[5.108,2],[5.155,0],[5.364,3],[5.619,0],[5.851,3],[6.13,2],[6.362,3],[6.571,2],[6.85,1],[7.129,0],[7.361,2],[7.454,3],[7.57,1],[7.802,0],[8.057,1],[8.29,3],[8.591,1],[8.8,2],[9.079,1],[9.288,0],[9.543,1],[9.776,2],[10.031,0],[10.286,1],[10.519,2],[10.774,0],[11.006,2],[11.285,1],[11.401,3],[11.517,1],[11.726,0],[12.005,3],[12.237,1],[12.446,3],[12.516,0],[12.701,2],[13.003,0],[13.235,3],[13.468,1],[13.514,3],[13.7,2],[13.978,1],[14.211,3],[14.443,0],[14.675,3],[14.93,0],[15.186,1],[15.302,3],[15.418,0],[15.65,2],[15.906,0],[16.161,1],[16.37,0],[16.625,2],[16.881,1],[17.136,2],[17.392,3],[17.624,1],[17.879,0],[18.135,2],[18.344,1],[18.599,0],[18.831,3],[18.994,1],[19.156,3],[19.342,2],[19.482,3],[19.667,0],[19.807,3],[20.271,2],[20.596,0],[20.805,3],[21.037,2],[21.269,0],[21.525,1],[21.78,2],[22.036,1],[22.221,2],[22.5,3],[22.756,2],[23.034,3],[23.15,0],[23.243,3],[23.475,1],[23.754,0],[23.986,1],[24.218,0],[24.474,2],[24.752,1],[24.985,2],[25.217,0],[25.472,1],[25.751,3],[25.96,2],[26.169,1],[26.239,0],[26.448,3],[26.703,1],[27.005,2],[27.214,3],[27.423,1],[27.701,0],[27.934,2],[28.189,0],[28.444,1],[28.7,3],[28.955,2],[29.211,3],[29.443,1],[29.675,3],[29.722,2],[29.954,1],[30.163,3],[30.395,1],[30.465,2],[30.697,0],[30.952,1],[31.068,3],[31.184,1],[31.417,0],[31.695,1],[31.927,0],[31.997,1],[32.206,3],[32.438,0],[32.67,3],[32.926,1],[33.158,3],[33.205,0],[33.414,2],[33.692,1],[33.924,3],[34.203,1],[34.412,3],[34.667,1],[34.83,3],[34.992,0],[35.155,3],[35.318,2],[35.48,0],[35.619,3],[35.944,2],[36.153,1],[36.409,3],[36.664,1],[36.92,0],[37.059,2],[37.175,1],[37.384,0],[37.686,2],[37.895,0],[38.174,3],[38.406,2],[38.638,1],[38.94,3],[39.172,0],[39.381,3],[39.892,0],[40.171,3],[40.38,1],[40.635,3],[40.914,2],[41.146,3],[41.378,0],[41.889,1],[42.144,2],[42.353,0],[42.632,3],[42.91,2],[43.003,0],[43.352,3],[43.63,1],[43.886,2],[44.118,0],[44.397,1],[44.629,2],[44.884,1],[44.977,0],[45.116,1],[45.163,0],[45.325,3],[45.604,0],[45.836,1],[45.906,3],[46.138,1],[46.347,0],[46.579,3],[46.881,0],[47.113,1],[47.322,3],[47.601,1],[47.81,3],[47.856,0],[48.089,2],[48.205,3],[48.321,2],[48.553,1],[48.832,0],[49.064,3],[49.11,2],[49.296,3],[49.551,0],[49.83,3],[50.062,1],[50.294,2],[50.527,3],[50.689,2],[50.875,1],[51.037,2],[51.223,3],[51.363,1],[51.525,0],[51.78,1],[52.013,0],[52.291,1],[52.547,2],[53.011,0],[53.243,3],[53.545,2],[53.754,0],[54.033,3],[54.265,0],[54.497,1],[54.729,0],[54.822,3],[54.985,2],[55.24,0],[55.496,1],[55.751,0],[56.007,1],[56.239,2],[56.494,0],[56.726,3],[56.982,0],[57.214,2],[57.493,3],[57.702,1],[57.957,0],[58.212,3],[58.445,0],[58.63,3],[58.77,2],[58.932,3],[59.095,1],[59.257,0],[59.42,2],[59.675,1],[59.907,0],[60.186,1],[60.442,0],[60.697,3],[60.813,1],[60.906,2],[61.208,1],[61.37,2],[61.649,1],[61.928,3],[62.137,0],[62.392,3],[62.671,2],[62.88,3],[63.112,0],[63.367,1],[63.599,2],[63.855,3],[64.11,1],[64.366,0],[64.621,1],[64.853,0],[65.086,1],[65.364,3],[65.596,1],[65.829,0],[66.084,2],[66.316,0],[66.595,2],[66.85,1],[67.013,0],[67.152,1],[67.291,2],[67.802,3],[68.058,0],[68.336,1],[68.569,3],[68.824,2],[69.056,0],[69.335,1],[69.567,0],[69.799,1],[70.055,2],[70.31,1],[70.565,2],[70.682,0],[70.821,2],[71.03,0],[71.332,1],[71.541,2],[71.843,0],[72.052,2],[72.33,1],[72.562,2],[72.771,1],[72.841,2],[73.073,3],[73.329,2],[73.561,3],[73.816,2],[74.048,3],[74.304,1],[74.582,0],[74.699,1],[74.815,2],[75.024,0],[75.302,1],[75.535,3],[75.767,2],[75.813,3],[76.069,0],[76.208,3],[76.324,1],[76.533,0],[76.812,1],[77.044,3],[77.322,1],[77.555,3],[77.74,2],[78.042,0],[78.298,1],[78.576,3],[78.669,0],[78.785,1],[78.832,0],[79.018,3],[79.319,0],[79.552,3],[79.761,0],[79.83,2],[80.062,0],[80.318,3],[80.55,0],[80.829,3],[81.061,2],[81.316,0],[81.572,3],[81.804,0],[82.036,2],[82.292,3],[82.454,2],[82.617,3],[82.802,2],[82.965,1],[83.127,2],[83.29,0],[83.778,3],[84.079,2],[84.335,1],[84.59,0],[84.706,2],[84.822,1],[85.055,0],[85.333,3],[85.612,2],[85.844,1],[86.076,2],[86.355,1],[86.634,0],[86.866,1],[87.121,2],[87.4,3],[87.632,2],[87.888,0],[88.143,1],[88.398,3],[88.677,0],[88.956,3],[89.188,1],[89.443,0],[89.722,2],[89.977,0],[90.186,1],[90.465,2],[90.744,1],[90.86,0],[90.976,2],[91.208,3],[91.487,2],[91.742,1],[91.974,3],[92.23,2],[92.532,3],[92.764,0],[93.042,3],[93.275,2],[93.53,1],[93.809,3],[94.018,0],[94.296,1],[94.528,2],[94.854,0],[95.086,1],[95.295,3],[95.597,2],[95.829,0],[96.107,2],[96.34,1],[96.618,3],[96.85,0],[97.106,3],[97.338,1],[97.617,0],[97.895,3],[98.128,2],[98.36,1],[98.638,3],[98.801,1],[98.963,2],[99.149,0],[99.312,1],[99.474,3],[99.637,1],[99.962,2],[100.171,0],[100.45,1],[100.728,2],[101.03,0],[101.239,3],[101.471,1],[101.75,0],[101.982,3],[102.237,1],[102.47,3],[102.772,2],[103.004,1],[103.12,3],[103.236,0],[103.468,1],[103.747,0],[104.002,3],[104.258,0],[104.513,3],[104.768,0],[105.024,2],[105.163,3],[105.279,2],[105.511,0],[105.744,2],[106.022,0],[106.255,1],[106.51,2],[106.765,1],[107.044,0],[107.16,2],[107.276,0],[107.508,3],[107.741,0],[107.996,3],[108.228,0],[108.53,2],[108.762,3],[109.018,1],[109.157,3],[109.25,2],[109.482,0],[109.714,1],[109.784,0],[110.016,1],[110.272,2],[110.504,0],[110.759,1],[111.061,3],[111.27,1],[111.502,2],[111.781,3],[112.013,2],[112.268,0],[112.501,2],[112.779,0],[113.058,3],[113.29,0],[113.522,2],[113.778,0],[114.056,2],[114.289,0],[114.544,1],[114.776,2],[115.008,1],[115.148,2],[115.31,0],[115.473,1],[115.635,0],[115.798,3]]
  },
  {
    id: 'gegants',
    title: 'Els Gegants',
    artist: 'Les Santes de Mataró',
    audioSrc: null,
    bgImage: '/../../../public/Gegants.png',
    duration: 90,
    locked: true
  },
   {
    id: 'Fogonades',
    title: 'Fogonades',
    artist: 'Sant Jordi de Mataró',
    audioSrc: '/../../../audio/Fogonades.mp3',
    videoSrc: '',
    bgColor: '#1a0a2e',
    bgGradient: 'linear-gradient(135deg,#1a0a2e,#0d1a0a)',
    bgImage: '/../../../public/fogonades.png',
    duration: 119.81,
    notesEasy: [
  [1.0,0],[1.5,1],[2.0,2],[2.5,3],
  [3.0,0],[3.5,1],[4.0,2],[4.5,3],

  [5.0,0],[5.25,0],[5.5,1],[6.0,2],
  [6.5,3],[7.0,2],[7.5,1],[8.0,0],

  [9.0,0],[9.5,2],[10.0,1],[10.5,3],
  [11.0,0],[11.5,2],[12.0,1],[12.5,3],

  [13.0,0],[13.25,1],[13.5,2],[13.75,3],
  [14.0,0],[14.5,1],[15.0,2],[15.5,3],

  [16.0,0],[16.5,0],[17.0,1],[17.5,2],
  [18.0,3],[18.5,2],[19.0,1],[19.5,0],

  [20.0,0],[20.5,1],[21.0,2],[21.5,3],
],
notesHard: [
  [1.0,0],[1.25,1],[1.5,2],[1.75,3],
  [2.0,0],[2.25,2],[2.5,1],[2.75,3],

  [3.0,0],[3.125,0],[3.25,1],[3.5,2],
  [3.75,3],[4.0,2],[4.25,1],[4.5,0],

  [5.0,0],[5.25,2],[5.5,1],[5.75,3],
  [6.0,0],[6.25,2],[6.5,1],[6.75,3],

  [7.0,0],[7.125,1],[7.25,2],[7.375,3],
  [7.5,0],[7.75,1],[8.0,2],[8.25,3],

  [9.0,0],[9.25,0],[9.5,1],[9.75,2],
  [10.0,3],[10.25,2],[10.5,1],[10.75,0],

  [11.0,0],[11.25,1],[11.5,2],[11.75,3],
]
  },
];

const LANE_COLORS   = ['#e8002d','#1a8fff','#00cc55','#ff8800'];
const LANE_COLORS_A = ['rgba(232,0,45,0.14)','rgba(26,143,255,0.14)','rgba(0,204,85,0.14)','rgba(255,136,0,0.14)'];
const KEY_MAP = { 'a':0,'s':1,'d':2,'w':3,'ArrowLeft':0,'ArrowDown':1,'ArrowRight':2,'ArrowUp':3 };

// ═══════════════════════════════════
// STORAGE
// ═══════════════════════════════════
function getProgress() {
  try { return JSON.parse(localStorage.getItem('santes_progress') || '{}'); } catch(e) { return {}; }
}
function saveProgress(data) {
  try { localStorage.setItem('santes_progress', JSON.stringify(data)); } catch(e) {}
}
function getSongData(id) {
  const p = getProgress();
  return p[id] || { stars: 0, bestScore: 0, exUnlocked: false };
}
function setSongData(id, data) {
  const p = getProgress();
  p[id] = { ...getSongData(id), ...data };
  saveProgress(p);
}

// ═══════════════════════════════════
// SCREENS
// ═══════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ═══════════════════════════════════
// TITLE SCREEN — PARTICLES + CONFETTI
// ═══════════════════════════════════
(function initParticles() {
  const c = document.getElementById('title-particles');
  const ctx = c.getContext('2d');
  let W, H, pts = [], confetti = [];

  const CONFETTI_COLORS = ['#c8a84b','#e8002d','#1a3a6e','#006633','#fff','#ff8800'];

  function resize() {
    W = c.width  = c.offsetWidth  || 680;
    H = c.height = c.offsetHeight || 620;

    pts = Array.from({length: 50}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
      r: Math.random()*1.5+0.5, a: Math.random()*0.6+0.1
    }));

    confetti = Array.from({length: 35}, () => ({
      x: Math.random()*W, y: Math.random()*H - H,
      vx: (Math.random()-0.5)*1.2, vy: Math.random()*1.8+0.8,
      rot: Math.random()*360, drot: (Math.random()-0.5)*4,
      col: CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)],
      w: 5 + Math.random()*8, h: 3 + Math.random()*5
    }));
  }

  resize();
  window.addEventListener('resize', resize);

  function frame() {
    ctx.clearRect(0, 0, W, H);

    // Gold particles
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(200,168,75,${p.a})`;
      ctx.fill();
    }

    // Confetti
    for (const piece of confetti) {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rot += piece.drot;
      if (piece.y > H + 20) {
        piece.y = -20;
        piece.x = Math.random() * W;
      }
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rot * Math.PI / 180);
      ctx.fillStyle = piece.col + 'bb';
      ctx.fillRect(-piece.w/2, -piece.h/2, piece.w, piece.h);
      ctx.restore();
    }

    requestAnimationFrame(frame);
  }
  frame();
})();

// ═══════════════════════════════════
// SONG SELECT
// ═══════════════════════════════════
function buildSongGrid() {
  const grid = document.getElementById('songs-grid');
  grid.innerHTML = '';
  for (const song of SONGS) {
    const sd = getSongData(song.id);
    const card = document.createElement('div');
    card.className = 'song-card';

    const bgDiv = document.createElement('div');
    bgDiv.className = 'song-card-bg';
    bgDiv.style.backgroundImage = `url(${song.bgImage})`;

    const overlay = document.createElement('div');
    overlay.className = 'song-card-overlay';

    const info = document.createElement('div');
    info.className = 'song-card-info';
    info.innerHTML = `<div class="song-card-title">${song.title}</div>
                      <div class="song-card-meta">${song.artist} · ${Math.floor(song.duration/60)}:${String(Math.floor(song.duration%60)).padStart(2,'0')}</div>`;

    const stars = document.createElement('div');
    stars.className = 'song-stars';
    for (let i=1; i<=3; i++) {
      const s = document.createElement('span');
      s.className = 'star ' + (sd.stars >= i ? 'filled' : 'empty');
      s.textContent = '★';
      stars.appendChild(s);
    }

    card.appendChild(bgDiv);
    card.appendChild(overlay);
    card.appendChild(info);
    card.appendChild(stars);

    if (sd.exUnlocked) {
      const b = document.createElement('div');
      b.className = 'badge-ex';
      b.textContent = '2× EX';
      card.appendChild(b);
    }

    if (song.locked) {
      const lock = document.createElement('div');
      lock.className = 'badge-locked';
      lock.textContent = '⚔';
      card.appendChild(lock);
    } else {
      card.addEventListener('click', () => startSong(song));
    }

    grid.appendChild(card);
  }
}

// ═══════════════════════════════════
// GAME ENGINE
// ═══════════════════════════════════
let G = {};

const canvas = document.getElementById('game-canvas');
const ctx2   = canvas.getContext('2d');

function resizeCanvas() {
  const area = document.getElementById('canvas-area');
  canvas.width  = area.clientWidth;
  canvas.height = area.clientHeight;
}

// ─────────────────────────────────────────────────────────────
//  startSong  — LA CLAU: audio creat i .play() cridat AQUÍ,
//  dins la cadena de l'event del clic de l'usuari.
//  Això és l'únic que garanteix que el navegador permeti l'àudio.
// ─────────────────────────────────────────────────────────────
function startSong(song, exMode = false) {
  const sd   = getSongData(song.id);
  const isEx = exMode && sd.exUnlocked;

  // Para qualsevol àudio anterior
  if (G.audio && typeof G.audio.pause === 'function') {
    G.audio.pause();
    G.audio.currentTime = 0;
  }
  if (G.animId) {
    cancelAnimationFrame(G.animId);
    G.animId = null;
  }

  G = {
    song, isEx,
    notes: (isEx ? song.notesHard : song.notesEasy).map(n => ({
      time:   isEx ? n[0] * 0.5 : n[0],
      lane:   n[1],
      hit:    false,
      missed: false,
      _y:     -999
    })),
    noteIdx:      0,
    activeNotes:  [],
    score:        0,
    combo:        0,
    maxCombo:     0,
    lives:        3,
    totalNotes:   0,
    hitCount:     0,
    perfectCount: 0,
    greatCount:   0,
    missCount:    0,
    running:      false,
    audio:        null,
    animId:       null,
    hitWindow:    0.22,
    t0:           null     // fallback timer base
  };

  G.totalNotes = G.notes.length;

  document.getElementById('hud-song-name').textContent = song.title.toUpperCase() + (isEx ? ' · 2×' : '');
  document.getElementById('hud-score').textContent     = '0';
  document.getElementById('hud-combo').textContent     = '';
  document.getElementById('hud-lives').textContent     = '♥♥♥';
  document.getElementById('hud-acc').textContent       = '';
  document.getElementById('progress-fill').style.width = '0%';

  const vid = document.getElementById('game-video-bg');
  vid.src = song.videoSrc || '';

  showScreen('game');
  resizeCanvas();

  // ── ÀUDIO ─────────────────────────────────────────────────
  // Creem l'objecte AQUÍ, dins la cadena del clic de l'usuari.
  // Sense sortir de la pila d'eventos sincrona no funcionaria.
  if (song.audioSrc) {
    const aud = new Audio(song.audioSrc);
    aud.preload = 'auto';
    if (isEx) aud.playbackRate = 2.0;

    G.audio = aud;

    const playPromise = aud.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Àudio reproduint-se correctament
          G.running = true;
          G.animId  = requestAnimationFrame(gameLoop);
        })
        .catch(err => {
          // Fallback: el fitxer no s'ha trobat o el navegador ha blocat
          console.warn('Audio play() fallit:', err.message);
          _startWithTimer(isEx);
        });
    } else {
      // Navegadors antics sense Promise
      G.running = true;
      G.animId  = requestAnimationFrame(gameLoop);
    }

  } else {
    // Cançó sense audioSrc (blocat o futur)
    _startWithTimer(isEx);
  }
}

function _startWithTimer(isEx) {
  G.t0 = performance.now();
  G.audio = {
    get currentTime() { return (performance.now() - G.t0) / 1000 * (isEx ? 2 : 1); },
    pause() {}
  };
  G.running = true;
  G.animId  = requestAnimationFrame(gameLoop);
}

// ─────────────────────────────────────────────────────────────

const SPEED        = 340;
function getHitY() { return canvas.height - 100; }
const HIT_ZONE_HALF = 55;

function spawnNotes(t) {
  const hitY = getHitY();
  while (G.noteIdx < G.notes.length) {
    const n = G.notes[G.noteIdx];
    if (n.time - hitY / SPEED <= t) {
      G.activeNotes.push(n);
      G.noteIdx++;
    } else break;
  }
}

function drawGame(t) {
  const W = canvas.width, H = canvas.height;
  const hitY = getHitY();
  const LANE_W = W / 4;
  const NOTE_H = 46;

  ctx2.clearRect(0, 0, W, H);

  // Lane backgrounds
  for (let i = 0; i < 4; i++) {
    ctx2.fillStyle = LANE_COLORS_A[i];
    ctx2.fillRect(i*LANE_W, 0, LANE_W-1, H);
    ctx2.fillStyle = 'rgba(255,255,255,0.025)';
    ctx2.fillRect(i*LANE_W + LANE_W - 1, 0, 1, H);
  }

  // Hit zone
  for (let i = 0; i < 4; i++) {
    ctx2.fillStyle = 'rgba(255,255,255,0.04)';
    roundRect(ctx2, i*LANE_W+4, hitY - HIT_ZONE_HALF, LANE_W-8, HIT_ZONE_HALF*2, 6);
    ctx2.fill();
    ctx2.strokeStyle = 'rgba(200,168,75,0.18)';
    ctx2.lineWidth = 1;
    roundRect(ctx2, i*LANE_W+4, hitY - HIT_ZONE_HALF, LANE_W-8, HIT_ZONE_HALF*2, 6);
    ctx2.stroke();
  }

  // Hit line
  ctx2.fillStyle = 'rgba(200,168,75,0.25)';
  ctx2.fillRect(0, hitY-1, W, 2);

  // Notes
  for (const n of G.activeNotes) {
    if (n.hit || n.missed) continue;
    const y = hitY - (n.time - t) * SPEED - NOTE_H / 2;
    n._y = y + NOTE_H / 2;

    const nx = n.lane * LANE_W + 5;
    const nW = LANE_W - 10;

    // Glow
    ctx2.shadowColor = LANE_COLORS[n.lane];
    ctx2.shadowBlur  = 18;
    ctx2.fillStyle   = LANE_COLORS[n.lane];
    roundRect(ctx2, nx, y, nW, NOTE_H, 7);
    ctx2.fill();
    ctx2.shadowBlur = 0;

    // Shine strip
    ctx2.fillStyle = 'rgba(255,255,255,0.2)';
    roundRect(ctx2, nx+2, y+2, nW-4, NOTE_H*0.36, 5);
    ctx2.fill();

    // Ornament diamond
    const cx = nx + nW/2;
    ctx2.fillStyle = 'rgba(255,255,255,0.35)';
    ctx2.save();
    ctx2.translate(cx, y + NOTE_H/2);
    ctx2.rotate(Math.PI/4);
    ctx2.fillRect(-3.5, -3.5, 7, 7);
    ctx2.restore();
  }

  // Auto-miss detection
  for (const n of G.activeNotes) {
    if (!n.hit && !n.missed && n._y > hitY + HIT_ZONE_HALF + 30) {
      n.missed = true;
      G.missCount++;
      G.combo = 0;
      G.lives--;
      updateHUD();
      flashLane(n.lane, 'miss');
      if (G.lives <= 0) { endGame(); return; }
    }
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y,   x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x,   y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x,   y,   x+r, y);
  ctx.closePath();
}

function gameLoop(ts) {
  if (!G.running) return;
  const t = G.audio ? G.audio.currentTime : 0;
  spawnNotes(t);
  drawGame(t);
  const dur = G.isEx ? G.song.duration * 0.5 : G.song.duration;
  document.getElementById('progress-fill').style.width = Math.min(t/dur*100, 100) + '%';
  if (t >= dur && G.noteIdx >= G.notes.length && G.activeNotes.every(n => n.hit || n.missed)) {
    endGame(); return;
  }
  G.animId = requestAnimationFrame(gameLoop);
}

function tapLane(lane, e) {
  if (e) e.preventDefault();
  if (!G.running) return;
  const hitY = getHitY();

  let best = null, bestDist = Infinity;
  for (const n of G.activeNotes) {
    if (n.hit || n.missed || n.lane !== lane) continue;
    const dist = Math.abs(n._y - hitY);
    if (dist < bestDist) { bestDist = dist; best = n; }
  }

  if (best && bestDist <= HIT_ZONE_HALF + 20) {
    best.hit = true;
    G.hitCount++;
    G.combo++;
    if (G.combo > G.maxCombo) G.maxCombo = G.combo;
    const pts = bestDist < HIT_ZONE_HALF*0.35 ? 300 : bestDist < HIT_ZONE_HALF*0.7 ? 200 : 100;
    if (pts === 300) G.perfectCount++;
    else if (pts >= 200) G.greatCount++;
    G.score += pts * Math.min(G.combo, 10);
    const label = pts===300 ? 'PERFECT' : pts===200 ? 'GREAT' : 'OK';
    const col   = pts===300 ? '#f5e0a0' : pts===200 ? '#6ae0ff' : '#ffffff';
    showFeedback(lane, label, col);
    flashLane(lane, 'hit');
    updateHUD();
  } else {
    flashLane(lane, 'miss');
  }
}

function flashLane(lane, type) {
  const el = document.getElementById('lt' + lane);
  el.classList.add(type === 'hit' ? 'hit' : 'miss-flash');
  setTimeout(() => el.classList.remove('hit', 'miss-flash'), 130);
}

function showFeedback(lane, text, color) {
  const area = document.getElementById('canvas-area');
  const lW = canvas.width / 4;
  const el = document.createElement('div');
  el.className   = 'feedback';
  el.style.color = color;
  el.style.left  = (lane * lW + lW/2 - 40) + 'px';
  el.style.top   = (getHitY() - 70) + 'px';
  el.textContent = text;
  area.appendChild(el);
  setTimeout(() => el.remove(), 560);
}

function updateHUD() {
  document.getElementById('hud-score').textContent = G.score.toLocaleString();
  const c = document.getElementById('hud-combo');
  c.textContent = G.combo > 1 ? '×' + G.combo : '';
  c.classList.remove('pop');
  void c.offsetWidth;
  if (G.combo > 1) c.classList.add('pop');
  const hearts = ['', '♥', '♥♥', '♥♥♥'][Math.max(0, G.lives)];
  document.getElementById('hud-lives').textContent = hearts;
  const acc = G.hitCount > 0 ? Math.round(G.hitCount / (G.hitCount + G.missCount) * 100) : 100;
  document.getElementById('hud-acc').textContent = acc + '%';
}

function endGame() {
  G.running = false;
  cancelAnimationFrame(G.animId);
  if (G.audio && typeof G.audio.pause === 'function') G.audio.pause();

  const hitPct  = G.hitCount / G.totalNotes;
  const stars   = hitPct >= 0.95 ? 3 : hitPct >= 0.75 ? 2 : hitPct >= 0.5 ? 1 : 0;
  const sd      = getSongData(G.song.id);
  const hadEx   = sd.exUnlocked;
  const unlockEx = !G.isEx && stars === 3 && !hadEx;

  setSongData(G.song.id, {
    stars:       Math.max(sd.stars, stars),
    bestScore:   Math.max(sd.bestScore, G.score),
    exUnlocked:  hadEx || unlockEx
  });

  document.getElementById('res-song').textContent    = G.song.title.toUpperCase();
  document.getElementById('res-score').textContent   = G.score.toLocaleString();
  document.getElementById('res-perfect').textContent = G.perfectCount;
  document.getElementById('res-great').textContent   = G.greatCount;
  document.getElementById('res-miss').textContent    = G.missCount;

  const starsEl = document.getElementById('res-stars');
  starsEl.textContent = '';
  for (let i=1; i<=3; i++) {
    const s = document.createElement('span');
    s.style.color = stars >= i ? '#c8a84b' : '#2a2a2a';
    s.textContent = '★';
    starsEl.appendChild(s);
  }

  const banner = document.getElementById('unlock-banner');
  if (unlockEx) {
    banner.textContent = '✦ Has desbloquejat el MODE EX 2×! Juga ara al doble de velocitat!';
    banner.classList.add('show');
  } else {
    banner.classList.remove('show');
  }

  const retryBtn = document.getElementById('btn-res-retry');
  const newSd    = getSongData(G.song.id);
  if (newSd.exUnlocked && !G.isEx) {
    retryBtn.textContent = 'MODE EX 2× ▶';
    retryBtn.onclick = () => startSong(G.song, true);
  } else {
    retryBtn.textContent = 'TORNAR A JUGAR';
    retryBtn.onclick = () => startSong(G.song, G.isEx);
  }

  showScreen('result');
}

// ═══════════════════════════════════
// KEYBOARD
// ═══════════════════════════════════
const keysHeld = new Set();
document.addEventListener('keydown', e => {
  if (keysHeld.has(e.key)) return;
  keysHeld.add(e.key);
  const lane = KEY_MAP[e.key];
  if (lane !== undefined) { e.preventDefault(); tapLane(lane, null); }
});
document.addEventListener('keyup', e => keysHeld.delete(e.key));

document.getElementById('lane-bar').addEventListener('touchstart', e => e.preventDefault(), { passive: false });

// ═══════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════
document.getElementById('btn-play').addEventListener('click', () => {
  buildSongGrid();
  showScreen('select');
});
document.getElementById('btn-back-select').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-res-menu').addEventListener('click', () => {
  buildSongGrid();
  showScreen('select');
});
document.getElementById('btn-res-retry').addEventListener('click', () => startSong(G.song, G.isEx));

window.addEventListener('resize', () => {
  if (document.getElementById('screen-game').classList.contains('active')) resizeCanvas();
});