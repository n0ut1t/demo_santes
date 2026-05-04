// Funcionalidad general para todas las páginas

// Animaciones al scroll
document.addEventListener('DOMContentLoaded', () => {
  // Agregar clase fade-in a elementos con animación
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los cards
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.opacity = '0';
    card.classList.add(`fade-in-delay-${(index % 4) + 1}`);
    observer.observe(card);
  });

  // Funcionalidad de búsqueda
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
          alert(`Buscando: ${searchTerm}`);
          // Aquí iría la lógica real de búsqueda
        }
      }
    });
  }

  // Funcionalidad de selector de idioma
  const langSelector = document.querySelector('.lang-selector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      alert(`Idioma cambiado a: ${selectedLang === 'es' ? 'Español' : 'Català'}`);
      // Aquí iría la lógica real de cambio de idioma
    });
  }

  // Funcionalidad de los botones JUGA
  const playButtons = document.querySelectorAll('.btn-primary');
  playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const activityName = button.closest('.card')?.querySelector('.card-title')?.textContent || 'Activitat';
      
      // Efecto visual
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 200);

      // Mostrar mensaje
      showNotification(`Iniciant: ${activityName}`);
    });
  });

  // Funcionalidad de botones MES (más información)
  const moreButtons = document.querySelectorAll('.btn-secondary');
  moreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionTitle = button.closest('.card')?.querySelector('h3')?.textContent || 'Secció';
      
      // Efecto visual
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 200);

      showNotification(`Més informació sobre: ${sectionTitle}`);
    });
  });

  // Funcionalidad del botón play grande
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', () => {
      playButton.style.transform = 'scale(0.9)';
      setTimeout(() => {
        playButton.style.transform = '';
        showNotification('Iniciant el joc...');
      }, 200);
    });
  }

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Agregar efecto parallax al hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      hero.style.opacity = 1 - (scrolled / 500);
    });
  }
});

// Función para mostrar notificaciones
function showNotification(message) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #7b7bff 0%, #6565ff 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(123, 123, 255, 0.4);
    z-index: 10000;
    font-weight: 600;
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
  `;

  // Agregar estilos de animación
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Agregar al DOM
  document.body.appendChild(notification);

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Función para cargar mapa (placeholder)
function initMap(containerId, lat, lng, title) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="map-placeholder">
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">📍</div>
          <strong>${title}</strong><br>
          <span style="font-size: 0.9rem; opacity: 0.7;">Lat: ${lat}, Lng: ${lng}</span>
        </div>
      </div>
    `;
  }
}

// Inicializar tooltips
function initTooltips() {
  const elementsWithTitle = document.querySelectorAll('[title]');
  elementsWithTitle.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = e.target.getAttribute('title');
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.85rem;
        z-index: 10000;
        pointer-events: none;
        white-space: nowrap;
      `;
      
      document.body.appendChild(tooltip);
      
      const rect = e.target.getBoundingClientRect();
      tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
      tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
      
      e.target.addEventListener('mouseleave', () => {
        tooltip.remove();
      }, { once: true });
    });
  });
}

// Función para activar/desactivar modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  
  if (isDark) {
    document.documentElement.style.setProperty('--primary-bg', '#1a1a1a');
    document.documentElement.style.setProperty('--text-dark', '#ffffff');
  } else {
    document.documentElement.style.setProperty('--primary-bg', '#f5f0e8');
    document.documentElement.style.setProperty('--text-dark', '#2c3e50');
  }
}

// Cargar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
  toggleDarkMode();
}

// Inicializar tooltips cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTooltips);