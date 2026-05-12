// =============================================
// LES SANTES 2026 - Super Buscador (Shared Logic)
// =============================================

(function() {
  let base = '';
  let DETAIL_URL = '';
  let JSON_URL = '';

  // --- ELEMENTS DEL DOM ---
  function getElements() {
    return {
      searchInput: document.getElementById('search-input'),
      searchInputClone: document.getElementById('search-input-clone'),
      overlay: document.getElementById('search-overlay'),
      navbarOriginal: document.getElementById('navbar-original'),
      resultsGrid: document.getElementById('results-grid'),
      dateBtns: document.querySelectorAll('.date-btn'),
      ambitsContainer: document.getElementById('ambits-container'),
      ubicacioContainer: document.getElementById('ubicacio-container'),
      heroCta: document.getElementById('hero-cta-btn'),
      homeEventList: document.getElementById('home-event-list'),
      homeDayTabs: document.querySelectorAll('#home-day-tabs .day-tab'),
      galleryGrid: document.getElementById('gallery-grid')
    };
  }

  // Helper to get ALL active checkboxes (static and dynamic)
  function getActiveCheckboxes() {
    return {
      ambits: document.querySelectorAll('#ambits-container input[type="checkbox"]'),
      ubicacions: document.querySelectorAll('#ubicacio-container input[type="checkbox"]')
    };
  }

  // --- ESTAT ---
  let todosEventos = [];
  let diaActivo = null;
  let homeDiaActivo = null;

  // --- HELPERS ---
  const AMBIT_CLASS = {
    'Activitat familiar':  'ambit--familiar',
    'Música':              'ambit--musica',
    'Espectacle':          'ambit--espectacle',
    'Tradicional':         'ambit--tradicional',
    'Exposicions i +':     'ambit--exposicions',
    'Festes i tradicions': 'ambit--festes',
    'Cinema':              'ambit--cinema',
  };

  function getDia(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('.');
    return parts.length >= 1 ? parseInt(parts[0], 10) : null;
  }

  function getHora(dateStr) {
    if (!dateStr) return '';
    const timePart = dateStr.split(' ')[1];
    return timePart ? timePart.replace(':', '.') + ' h' : '';
  }

  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
  }

  function getImageUrl(images) {
    const currentBase = window.LES_SANTES_BASE || '';
    if (!images || !images.load_url) return currentBase + 'public/portada-santes01.webp';
    const url = images.load_url;
    return url.startsWith('//') ? 'https:' + url : url;
  }

  function getAmbitNames(ambits) {
    if (!Array.isArray(ambits)) return [];
    return ambits.map(a => a.name).filter(Boolean);
  }

  // --- CARGA DE DADES ---
  function init() {
    base = window.LES_SANTES_BASE || '';
    DETAIL_URL = base + '../ol/pages/diada/Diada.html';
    JSON_URL = base + 'actes_santes_2025_pia.json';

    fetch(JSON_URL)
      .then(res => res.json())
      .then(data => {
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
        
        renderFilters(); // Generate dynamic filters
        
        const el = getElements();
        if (el.resultsGrid) renderCards(todosEventos);
        if (el.homeEventList) renderHomeEvents();
        if (el.galleryGrid) renderGallery();
        
        setupEventListeners(el);
      })
      .catch(err => console.error('Error carregant els actes:', err));
  }

  function renderFilters() {
    const el = getElements();
    if (!el.ubicacioContainer) return;

    // Extract unique locations
    const locations = [...new Set(todosEventos.map(e => e.ubicacio))].filter(Boolean).sort();
    
    el.ubicacioContainer.innerHTML = locations.map(loc => `
      <div class="checkbox-item">
        <input type="checkbox" id="ubi-${loc.replace(/\s+/g, '-')}" value="${loc}">
        <label for="ubi-${loc.replace(/\s+/g, '-')}">
          <div class="img-box"></div>
          <span>${loc}</span>
        </label>
      </div>
    `).join('');
  }

  function setupEventListeners(el) {
    if (el.searchInput) {
      el.searchInput.addEventListener('focus', () => abrirOverlay(el));
    }
    if (el.heroCta) {
      el.heroCta.addEventListener('click', () => abrirOverlay(el));
    }

    if (el.overlay) {
      el.overlay.addEventListener('click', (e) => {
        if (e.target === el.overlay) cerrarOverlay(el);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') cerrarOverlay(el);
    });

    if (el.searchInputClone) {
      el.searchInputClone.addEventListener('input', () => filtrarEventos(el));
    }

    el.dateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const dia = parseInt(btn.dataset.day);
        const img = btn.querySelector('img');

        if (diaActivo === dia) {
          diaActivo = null;
          btn.classList.remove('active');
          img.src = img.dataset.srcOff;
        } else {
          el.dateBtns.forEach(b => {
            b.classList.remove('active');
            const bImg = b.querySelector('img');
            bImg.src = bImg.dataset.srcOff;
          });
          btn.classList.add('active');
          img.src = img.dataset.srcOn;
          diaActivo = dia;
        }
        filtrarEventos(el);
      });
    });

    // Re-bind checkboxes after generation
    const cbs = getActiveCheckboxes();
    cbs.ambits.forEach(cb => cb.addEventListener('change', () => filtrarEventos(el)));
    cbs.ubicacions.forEach(cb => cb.addEventListener('change', () => filtrarEventos(el)));

    el.homeDayTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        el.homeDayTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const d = tab.dataset.day;
        homeDiaActivo = d === 'all' ? null : parseInt(d);
        renderHomeEvents();
      });
    });

    // Auto-open from URL param
    const params = new URLSearchParams(window.location.search);
    if (params.has('search')) {
      setTimeout(() => abrirOverlay(el), 100);
    }
  }

  function abrirOverlay(el) {
    if (!el.overlay) return;
    el.overlay.classList.add('activo');
    document.body.classList.add('overlay-open');
    if (el.navbarOriginal) el.navbarOriginal.classList.add('hidden');
    if (el.searchInputClone) {
        el.searchInputClone.value = el.searchInput.value;
        setTimeout(() => el.searchInputClone.focus(), 50);
    }
  }

  function cerrarOverlay(el) {
    if (!el.overlay) return;
    el.overlay.classList.remove('activo');
    document.body.classList.remove('overlay-open');
    if (el.navbarOriginal) el.navbarOriginal.classList.remove('hidden');
    if (el.searchInput) {
        el.searchInput.value = el.searchInputClone.value;
        el.searchInput.blur();
    }
    if (el.searchInputClone) el.searchInputClone.blur();
  }

  function filtrarEventos(el) {
    const texto = el.searchInputClone.value.toLowerCase().trim();
    const cbs = getActiveCheckboxes();
    const ambitsActivos = Array.from(cbs.ambits).filter(cb => cb.checked).map(cb => cb.value);
    const ubicacionsActivas = Array.from(cbs.ubicacions).filter(cb => cb.checked).map(cb => cb.value);

    const filtrados = todosEventos.filter(evento => {
      const coincideTexto = texto === '' ||
        evento.titulo.toLowerCase().includes(texto) ||
        evento.pretitle.toLowerCase().includes(texto) ||
        evento.descripcion.toLowerCase().includes(texto);
      const coincideDia = diaActivo === null || evento.dia === diaActivo;
      const coincideAmbit = ambitsActivos.length === 0 || ambitsActivos.some(a => evento.ambits.includes(a));
      const coincideUbi = ubicacionsActivas.length === 0 || ubicacionsActivas.some(u => evento.ubicacio.toLowerCase().includes(u.toLowerCase()));
      return coincideTexto && coincideDia && coincideAmbit && coincideUbi;
    });

    renderCards(filtrados);
  }

  function renderCards(eventos) {
    const el = getElements();
    if (!el.resultsGrid) return;

    if (eventos.length === 0) {
      el.resultsGrid.innerHTML = `<div class="no-results"><p>🔍 No s'han trobat esdeveniments amb aquests filtres.</p></div>`;
      return;
    }

    el.resultsGrid.innerHTML = eventos.map((evento, i) => `
      <article class="search-card" style="animation-delay: ${i * 0.05}s">
        <div class="search-card-image">
          <img src="${evento.imagen}" alt="${evento.titulo}" loading="lazy">
          <div class="search-card-badges">
            <span class="badge-hora">${evento.hora}</span>
            ${evento.alert ? `<span class="badge-alert">⚠ ${evento.alert}</span>` : ''}
          </div>
          <h3 class="search-card-title">${evento.titulo}</h3>
        </div>
        <div class="search-card-info">
          ${evento.pretitle ? `<span class="search-card-pretitle">${evento.pretitle}</span>` : ''}
          ${evento.dateLabel ? `<span class="search-card-date">${evento.dateLabel}</span>` : ''}
          <p>${evento.descripcion || ''}</p>
          <div class="search-card-location">📍 ${evento.ubicacio}</div>
          ${evento.ambits.length > 0
            ? `<div class="search-card-ambits">${evento.ambits.map(a => `<span class="ambit-tag ${AMBIT_CLASS[a] || ''}">${a}</span>`).join('')}</div>`
            : ''}
          <a href="${DETAIL_URL}" class="btn-detall">Mes detall</a>
        </div>
      </article>`).join('');
  }

  function renderHomeEvents() {
    const el = getElements();
    if (!el.homeEventList) return;
    const list = homeDiaActivo === null ? todosEventos : todosEventos.filter(e => e.dia === homeDiaActivo);
    const subset = list.slice(0, 6);
    if (subset.length === 0) {
      el.homeEventList.innerHTML = '<p class="home-loading">No hi ha actes per a aquest dia.</p>';
      return;
    }
    el.homeEventList.innerHTML = subset.map(e => `
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
      </div>`).join('');
  }

  function renderGallery() {
    const el = getElements();
    if (!el.galleryGrid) return;
    const picks = todosEventos.filter(e => e.imagen && !e.imagen.includes('portada-santes')).slice(0, 3);
    el.galleryGrid.innerHTML = picks.map(e => `
      <div class="gallery-item">
        <img src="${e.imagen}" alt="${e.titulo}" loading="lazy">
      </div>`).join('');
  }

  // Wait for dynamic elements to be in DOM
  document.addEventListener('components-loaded', init);

})();
