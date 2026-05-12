/**
 * Les Santes 2026 - Shared Components Loader
 * Injects Navbar, Search Overlay, and Footer with correct relative paths.
 */
(function() {
    const script = document.currentScript;
    const base = script.getAttribute('data-base') || ''; // e.g., "../../../ik/" or ""
    const currentTab = script.getAttribute('data-tab') || ''; // e.g., "agenda"

    // Helper to fix paths
    const fixPath = (path) => {
        if (path.startsWith('http') || path.startsWith('#') || path.startsWith('javascript:')) return path;
        // If path starts with ik/ or an/ or ol/, and we are already providing a base, 
        // we need to be careful. For simplicity, we assume links are relative to ik/ root.
        return base + path;
    };

    // 1. NAVBAR HTML
    const navHTML = `
    <nav id="navbar-original" class="navbar">
        <div class="navbar-brand">
            <a href="${fixPath('index.html')}"><img src="${fixPath('assets/logo_header.svg')}" class="nav-logo" alt="Les Santes - Festa Major de Mataró"></a>
        </div>
        <ul class="navbar-links">
            <li><a href="${fixPath('../an/pages/agenda/agenda.html')}" class="${currentTab === 'agenda' ? 'active' : ''}">Agenda</a></li>
            <li><a href="${fixPath('../an/pages/actes-rituals/actes.html')}" class="${currentTab === 'actes' ? 'active' : ''}">Actes i rituals</a></li>
            <li><a href="${fixPath('../an/pages/minisantes/index.html')}" class="${currentTab === 'minisantes' ? 'active' : ''}">Minisantes</a></li>
        </ul>
        <div class="navbar-actions">
            <div class="navbar-search">
                <input id="search-input" type="text" placeholder="La cri...">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
            <div class="navbar-cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                </svg>
            </div>
            <div class="navbar-lang">ES <span>&#9662;</span></div>
        </div>
    </nav>`;

    // 2. SEARCH OVERLAY HTML
    const overlayHTML = `
    <section id="search-overlay">
        <nav class="navbar navbar-clone">
            <div class="navbar-brand">
                <a href="${fixPath('index.html')}"><img src="${fixPath('assets/logo_header.svg')}" class="nav-logo" alt="Les Santes"></a>
            </div>
            <ul class="navbar-links">
                <li><a href="${fixPath('../an/pages/agenda/agenda.html')}">Agenda</a></li>
                <li><a href="${fixPath('../an/pages/actes-rituals/actes.html')}">Actes i rituals</a></li>
                <li><a href="${fixPath('../an/pages/minisantes/index.html')}">Minisantes</a></li>
            </ul>
            <div class="navbar-actions">
                <div class="navbar-search">
                    <input id="search-input-clone" type="text" placeholder="La cri...">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
                <div class="navbar-cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                </div>
                <div class="navbar-lang">ES <span>&#9662;</span></div>
            </div>
        </nav>

        <div class="search-content">
            <aside class="filters-sidebar">
                <h2 class="filters-title">Filtres</h2>
                <div class="filters-divider"></div>

                <div class="filter-section">
                    <span class="filter-label">Totes les dates</span>
                    <div class="date-selector" id="date-btns">
                        <button class="date-btn" data-day="25"><img src="${fixPath('assets/day_25.svg')}" data-src-off="${fixPath('assets/day_25.svg')}" data-src-on="${fixPath('assets/day_25_full.svg')}" alt="Dia 25"></button>
                        <button class="date-btn" data-day="26"><img src="${fixPath('assets/day_26.svg')}" data-src-off="${fixPath('assets/day_26.svg')}" data-src-on="${fixPath('assets/day_26_full.svg')}" alt="Dia 26"></button>
                        <button class="date-btn" data-day="27"><img src="${fixPath('assets/day_27.svg')}" data-src-off="${fixPath('assets/day_27.svg')}" data-src-on="${fixPath('assets/day_27_full.svg')}" alt="Dia 27"></button>
                        <button class="date-btn" data-day="28"><img src="${fixPath('assets/day_28.svg')}" data-src-off="${fixPath('assets/day_28.svg')}" data-src-on="${fixPath('assets/day_28_full.svg')}" alt="Dia 28"></button>
                        <button class="date-btn" data-day="29"><img src="${fixPath('assets/day_29.svg')}" data-src-off="${fixPath('assets/day_29.svg')}" data-src-on="${fixPath('assets/day_29_full.svg')}" alt="Dia 29"></button>
                    </div>
                </div>

                <div class="filter-section">
                    <h3 class="filter-heading">Àmbits</h3>
                    <div class="checkbox-container" id="ambits-container">
                        <div class="checkbox-item"><input type="checkbox" id="ambit-activitats" value="Activitat familiar"><label for="ambit-activitats"><span class="img-box"></span><span class="text-box">Activitat familiar</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-musica" value="Música"><label for="ambit-musica"><span class="img-box"></span><span class="text-box">Música</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-espectacle" value="Espectacle"><label for="ambit-espectacle"><span class="img-box"></span><span class="text-box">Espectacle</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-tradicional" value="Tradicional"><label for="ambit-tradicional"><span class="img-box"></span><span class="text-box">Tradicional</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-exposicions" value="Exposicions i +"><label for="ambit-exposicions"><span class="img-box"></span><span class="text-box">Exposicions i +</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-festes" value="Festes i tradicions"><label for="ambit-festes"><span class="img-box"></span><span class="text-box">Festes i tradicions</span></label></div>
                        <div class="checkbox-item"><input type="checkbox" id="ambit-cinema" value="Cinema"><label for="ambit-cinema"><span class="img-box"></span><span class="text-box">Cinema</span></label></div>
                    </div>
                </div>

                <div class="filter-section">
                    <h3 class="filter-heading">Ubicació</h3>
                    <div class="checkbox-container" id="ubicacio-container">
                        <!-- Filled dynamically by app.js -->
                    </div>
                </div>
            </aside>

            <div class="results-area">
                <div class="results-grid" id="results-grid">
                    <!-- Cards injected by app.js -->
                </div>
            </div>
        </div>
    </section>`;

    // 3. FOOTER HTML
    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="${fixPath('assets/logo_header.svg')}" alt="Les Santes">
            </div>
            <div class="footer-nav">
                <a href="${fixPath('../an/pages/agenda/agenda.html')}">Agenda</a>
                <a href="${fixPath('../an/pages/actes-rituals/actes.html')}">Actes i rituals</a>
                <a href="${fixPath('../an/pages/minisantes/index.html')}">Minisantes</a>
                <a href="#">Contacte</a>
            </div>
            <div class="footer-social">
                <a href="#"><img src="${fixPath('../ol/assets/facebook.png')}" alt="Facebook"></a>
                <a href="#"><img src="${fixPath('../ol/assets/twitter.png')}" alt="Twitter"></a>
                <a href="#"><img src="${fixPath('../ol/assets/instagram.png')}" alt="Instagram"></a>
                <a href="#"><img src="${fixPath('../ol/assets/linkedin.png')}" alt="LinkedIn"></a>
            </div>
            <div class="footer-bottom">
                <div class="footer-divider"></div>
                <p>Copyright © 2026 Les Santes - Festa Major de Mataró | All Rights Reserved</p>
            </div>
        </div>
    </footer>`;

    // INJECTION
    function inject() {
        // Insert Navbar and Overlay at the start of body
        document.body.insertAdjacentHTML('afterbegin', navHTML + overlayHTML);
        
        // Insert Footer at the end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML);

        // Initial search open/close logic will be handled by app.js
        window.LES_SANTES_BASE = base;
        
        // Dispatch a custom event so app.js knows components are ready
        document.dispatchEvent(new CustomEvent('components-loaded'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }

})();
