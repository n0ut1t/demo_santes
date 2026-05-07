// =============================================
// LES SANTES 2026 - Super Buscador
// =============================================

// --- ELEMENTS DEL DOM ---
const searchInput = document.getElementById('search-input');
const searchInputClone = document.getElementById('search-input-clone');
const overlay = document.getElementById('search-overlay');
const navbarOriginal = document.getElementById('navbar-original');
const resultsGrid = document.getElementById('results-grid');
const dateBtns = document.querySelectorAll('.date-btn');
const ambitCheckboxes = document.querySelectorAll('#ambits-container input[type="checkbox"]');
const ubicacioCheckboxes = document.querySelectorAll('#ubicacio-container input[type="checkbox"]');
const heroCta = document.getElementById('hero-cta-btn');
const homeEventList = document.getElementById('home-event-list');
const homeDayTabs = document.querySelectorAll('#home-day-tabs .day-tab');
const galleryGrid = document.getElementById('gallery-grid');

// --- ESTAT ---
let todosEventos = [];
let diaActivo = null;
let homeDiaActivo = null;

// --- HELPERS ---

/** Mapa de nom d'àmbit → classe CSS modificadora */
const AMBIT_CLASS = {
  'Activitat familiar':  'ambit--familiar',
  'Música':              'ambit--musica',
  'Espectacle':          'ambit--espectacle',
  'Tradicional':         'ambit--tradicional',
  'Exposicions i +':     'ambit--exposicions',
  'Festes i tradicions': 'ambit--festes',
  'Cinema':              'ambit--cinema',
};

/** Extreu el dia (número) d'una data en format "DD.MM.YYYY HH:MM" */
function getDia(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('.');
  return parts.length >= 1 ? parseInt(parts[0], 10) : null;
}

/** Extreu l'hora d'una data en format "DD.MM.YYYY HH:MM" */
function getHora(dateStr) {
  if (!dateStr) return '';
  const timePart = dateStr.split(' ')[1];
  return timePart ? timePart.replace(':', '.') + ' h' : '';
}

/** Elimina etiquetes HTML d'un string */
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

/** Construeix la URL completa de la imatge */
function getImageUrl(images) {
  if (!images || !images.load_url) return 'public/portada-santes01.webp';
  const url = images.load_url;
  return url.startsWith('//') ? 'https:' + url : url;
}

/** Retorna un array de strings amb els noms dels àmbits */
function getAmbitNames(ambits) {
  if (!Array.isArray(ambits)) return [];
  return ambits.map(a => a.name).filter(Boolean);
}

// --- CARGA DE DADES ---
fetch('actes_santes_2025_pia.json')
  .then(res => res.json())
  .then(data => {
    // Normalitzem cada event al format intern
    todosEventos = (data.events || []).map(e => ({
      titulo:      e.title || '',
      pretitle:    e.pretitle || '',
      descripcion: stripHtml(e.description_short || e.description || ''),
      imagen:      getImageUrl(e.images),
      hora:        getHora(e.date_initial),
      dia:         getDia(e.date_initial),
      ubicacio:    e.location || '',
      ambits:      getAmbitNames(e.ambits),
      alert:       e.alert_message || '',
      dateLabel:   e.date_to_ca_detail || '',
    }));
    renderCards(todosEventos);
    renderHomeEvents();
    renderGallery();
  })
  .catch(err => console.error('Error carregant els actes:', err));

// --- HOME EVENTS ---
function renderHomeEvents() {
  if (!homeEventList) return;
  const list = homeDiaActivo === null
    ? todosEventos
    : todosEventos.filter(e => e.dia === homeDiaActivo);
  const subset = list.slice(0, 6);
  if (subset.length === 0) {
    homeEventList.innerHTML = '<p class="home-loading">No hi ha actes per a aquest dia.</p>';
    return;
  }
  homeEventList.innerHTML = subset.map(e => `
    <div class="home-event-item">
      <img class="home-event-img" src="${e.imagen}" alt="${e.titulo}" loading="lazy">
      <div class="home-event-info">
        <div class="home-event-location">${e.ubicacio}</div>
        <div class="home-event-title">${e.titulo}</div>
        <div class="home-event-desc">${e.descripcion}</div>
        <div class="home-event-tags">
          <span class="home-badge-hora">${e.hora}</span>
          ${e.ambits[0] ? `<span class="home-badge-ambit">${e.ambits[0]}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// --- HOME DAY TABS ---
homeDayTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    homeDayTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const d = tab.dataset.day;
    homeDiaActivo = d === 'all' ? null : parseInt(d);
    renderHomeEvents();
  });
});

// --- GALLERY ---
function renderGallery() {
  if (!galleryGrid) return;
  const picks = todosEventos
    .filter(e => e.imagen && !e.imagen.includes('portada-santes'))
    .slice(0, 3);
  galleryGrid.innerHTML = picks.map(e => `
    <div class="gallery-item">
      <img src="${e.imagen}" alt="${e.titulo}" loading="lazy">
    </div>
  `).join('');
}

// --- OBRIR OVERLAY ---
searchInput.addEventListener('focus', () => abrirOverlay());
if (heroCta) heroCta.addEventListener('click', () => abrirOverlay());

// --- TANCAR OVERLAY ---
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    cerrarOverlay();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarOverlay();
  }
});

function abrirOverlay() {
  overlay.classList.add('activo');
  document.body.classList.add('overlay-open');
  navbarOriginal.classList.add('hidden');
  searchInputClone.value = searchInput.value;
  setTimeout(() => searchInputClone.focus(), 50);
}

function cerrarOverlay() {
  overlay.classList.remove('activo');
  document.body.classList.remove('overlay-open');
  navbarOriginal.classList.remove('hidden');
  searchInput.value = searchInputClone.value;
  searchInput.blur();
  searchInputClone.blur();
}

// --- CERCA EN TEMPS REAL ---
searchInputClone.addEventListener('input', () => {
  filtrarEventos();
});

// --- FILTRES PER DATA ---
dateBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const dia = parseInt(btn.dataset.day);
    const img = btn.querySelector('img');

    if (diaActivo === dia) {
      diaActivo = null;
      btn.classList.remove('active');
      img.src = img.dataset.srcOff;
    } else {
      dateBtns.forEach(b => {
        b.classList.remove('active');
        const bImg = b.querySelector('img');
        bImg.src = bImg.dataset.srcOff;
      });
      btn.classList.add('active');
      img.src = img.dataset.srcOn;
      diaActivo = dia;
    }

    filtrarEventos();
  });
});

// --- FILTRES PER CHECKBOX ---
ambitCheckboxes.forEach(cb => cb.addEventListener('change', filtrarEventos));
ubicacioCheckboxes.forEach(cb => cb.addEventListener('change', filtrarEventos));

// --- FUNCIÓ PRINCIPAL DE FILTRAT ---
function filtrarEventos() {
  const texto = searchInputClone.value.toLowerCase().trim();

  const ambitsActivos = [];
  ambitCheckboxes.forEach(cb => {
    if (cb.checked) ambitsActivos.push(cb.value);
  });

  const ubicacionsActivas = [];
  ubicacioCheckboxes.forEach(cb => {
    if (cb.checked) ubicacionsActivas.push(cb.value);
  });

  const filtrados = todosEventos.filter(evento => {
    // Filtre text (títol o descripció)
    const coincideTexto = texto === '' ||
      evento.titulo.toLowerCase().includes(texto) ||
      evento.pretitle.toLowerCase().includes(texto) ||
      evento.descripcion.toLowerCase().includes(texto);

    // Filtre dia
    const coincideDia = diaActivo === null || evento.dia === diaActivo;

    // Filtre àmbits (OR: si algun dels àmbits de l'event coincideix)
    const coincideAmbit = ambitsActivos.length === 0 ||
      ambitsActivos.some(a => evento.ambits.includes(a));

    // Filtre ubicació (OR: si la ubicació de l'event és a les seleccionades)
    const coincideUbi = ubicacionsActivas.length === 0 ||
      ubicacionsActivas.some(u => evento.ubicacio.toLowerCase().includes(u.toLowerCase()));

    return coincideTexto && coincideDia && coincideAmbit && coincideUbi;
  });

  renderCards(filtrados);
}

// --- RENDERITZAT DE CARDS ---
function renderCards(eventos) {
  if (eventos.length === 0) {
    resultsGrid.innerHTML = `
      <div class="no-results">
        <p>🔍 No s'han trobat esdeveniments amb aquests filtres.</p>
      </div>`;
    return;
  }

  resultsGrid.innerHTML = eventos.map((evento, i) => `
    <article class="card" style="animation-delay: ${i * 0.05}s">
      <div class="card-image">
        <img src="${evento.imagen}" alt="${evento.titulo}" loading="lazy">
        <div class="badges">
          <span class="badge-hora">${evento.hora}</span>
          ${evento.alert ? `<span class="badge-alert">⚠ ${evento.alert}</span>` : ''}
        </div>
        <h3 class="card-title">${evento.titulo}</h3>
      </div>
      <div class="card-info">
        ${evento.pretitle ? `<span class="card-pretitle">${evento.pretitle}</span>` : ''}
        ${evento.dateLabel ? `<span class="card-date">${evento.dateLabel}</span>` : ''}
        <p>${evento.descripcion || ''}</p>
        <div class="card-location">📍 ${evento.ubicacio}</div>
        ${evento.ambits.length > 0
          ? `<div class="card-ambits">${evento.ambits.map(a => `<span class="ambit-tag ${AMBIT_CLASS[a] || ''}">${a}</span>`).join('')}</div>`
          : ''}
        <button class="btn-detall">Mes detall</button>
      </div>
    </article>
  `).join('');
}
