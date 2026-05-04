// ═══════════════════════════════════
// ICON MAP — png paths
// ═══════════════════════════════════
const ICON_MAP = {
  "🔔": "../../../../public/icons/campana.png",
  "🎭": "../../../../public/icons/teatre.png",
  "⭐": "../../../../public/icons/estrella.png",
  "🎵": "../../../../public/icons/music.png"
};

// ═══════════════════════════════════
// DADES DE L'AGENDA
// ═══════════════════════════════════
const AGENDA = {
  "25": {
    label: "DJ",
    day: "25",
    month: "Julio",
    events: [
      {
        time: "18:00 H",
        icon: "🔔",
        title: "La Crida",
        location: "Ajuntament de Mataró",
        description: "Acte que dona inici oficial a la Festa Major amb la lectura i ambient festiu. Els mataronins i mataronines es reuneixen per donar el tret de sortida. Comença l’esperit de Les Santes.",
        tags: ["Tradició", "Familiar"],
        image: "/../../../public/actes/acte1.png"
      },
      {
        time: "19:00 H",
        icon: "🎭",
        title: "Cercavila de la Crida",
        location: "Carrers del Centre",
        description: "Recorregut amb comparses i figures festives pels carrers principals. Música, balls i molta participació popular. Ambient festiu des del primer dia.",
        tags: ["Cultura", "Familiar"],
        image: "/../../../public/actes/acte2.png"
      },
      {
        time: "23:00 H",
        icon: "⭐",
        title: "Concert Inaugural",
        location: "Parc Central",
        description: "Primera gran nit musical amb grups en directe. Ambient jove i festiu per començar amb energia. Un clàssic de l'inici de festa.",
        tags: ["Música", "Juvenil"],
        image: "/../../../public/actes/acte3.png"
      }
    ]
  },

  "26": {
    label: "DJ",
    day: "26",
    month: "Julio",
    events: [
      {
        time: "19:00 H",
        icon: "🔔",
        title: "La Dormida",
        location: "Carrers del Centre",
        description: "Cercavila nocturna amb figures i música tradicional. Anuncia l’arribada del dia gran de Les Santes. Gran participació i ambient als carrers.",
        tags: ["Tradició", "Familiar"],
        image: "/../../../public/actes/acte4.png"
      },
      {
        time: "23:30 H",
        icon: "🎭",
        title: "Nit Jove",
        location: "Espai Firal",
        description: "Concerts i DJ fins a la matinada. Punt de trobada del públic més jove. Música actual i festa assegurada.",
        tags: ["Musica", "Juvenil", "DJ"],
        image: "/../../../public/actes/acte5.png"
      },
      {
        time: "00:30 H",
        icon: "🎭",
        title: "Desvetllament Bellugós",
        location: "Carrers del centre",
        description: "Recorregut nocturn amb música, foc i figures que omplen els carrers de festa. Centenars de persones ballen sense parar fins a la matinada. Un dels actes més emblemàtics de Les Santes.",
        tags: ["Musica", "Juvenil", "Mitic"],
        image: "/../../../public/actes/acte6.png"
      },
    ]
  },

  "27": {
    label: "DJ",
    day: "27",
    month: "Julio",
    events: [
      {
        time: "09:30 H",
        icon: "🔔",
        title: "Matinal de campanes i de galejada",
        location: "Campanar de Santa Maria",
        description: "Inici oficial del dia gran amb el repic de campanes i trets de trabucaires. El so s’estén per tota la ciutat creant un ambient únic. Un dels moments més emblemàtics.",
        tags: ["Tradicio", "Cultura"],
        image: "/../../../public/actes/acte7.png"
      },
      {
        time: "10:00 H",
        icon: "🎭",
        title: "Missa de les Santes",
        location: "Basilica de Santa Maria",
        description: "L’acte central religios amb la interpretacio de la Missa de Glòria de Mossèn Manuel Blanc per part del Cor Madrigalista.",
        tags: ["Cultura", "Tradició"],
        image: "/../../../public/actes/acte8.png"
      },
      {
        time: "13:00 H",
        icon: "⭐",
        title: "Desfilada de Gegants i Nans",
        location: "Plaça de l'Ajuntament",
        description: "Robafaves i la seva família surten a ballar pels carrers. Un dels actes més estimats i seguits. Tradició viva per a totes les edats.",
        tags: ["Imperdible", "Familiar", "Popular"],
        image: "/../../../public/actes/acte9.png"
      },
      {
        time: "19:00 H",
        icon: "🎵",
        title: "La Passada",
        location: "Carrers del centre",
        description: "Gran cercavila amb totes les figures festives. Recorregut pels carrers més emblemàtics de Mataró. Un dels actes més espectaculars.",
        tags: ["Tradicio", "Familiar"],
        image: "/../../../public/actes/acte10.png"
      },
      {
        time: "23:00 H",
        icon: "⭐",
        title: "Castells de focs",
        location: "Platja del varador",
        description: "L’espectacular castell de focs artificials des de la platja que il·lumina tot el litoral mataroni i tanca el dia gran. Gran afluència de públic.",
        tags: ["Espectacle", "Exterior", "Familiar"],
        image: "/../../../public/actes/acte11.png"
      }
    ]
  },

  "28": {
    label: "DJ",
    day: "28",
    month: "Julio",
    events: [
      {
        time: "11:00 H",
        icon: "🔔",
        title: "Activitats familiars",
        location: "Parc Central",
        description: "Tallers, jocs i espectacles per als més petits. Espai pensat per gaudir en família. Ambient relaxat i participatiu.",
        tags: ["Infantil", "Familiar"],
        image: "/../../../public/actes/acte12.png"
      },
      {
        time: "18:30 H",
        icon: "🎭",
        title: "Trobada de Gegants",
        location: "Carrers del Centre",
        description: "Colles geganteres d’arreu participen en una gran trobada. Exhibicions i balls tradicionals. Molt visual i cultural.",
        tags: ["Cultura", "Familiar"],
        image: "/../../../public/actes/acte13.png"
      },
      {
        time: "22:30 H",
        icon: "⭐",
        title: "Ball de Festa Major",
        location: "Plaça Santa Anna",
        description: "Música en directe i ball popular. Ambient festiu i obert a tothom. Ideal per acabar el dia.",
        tags: ["Música", "Adult"],
        image: "/../../../public/actes/acte14.png"
      }
    ]
  },

  "29": {
    label: "DJ",
    day: "29",
    month: "Julio",
    events: [
      {
        time: "19:00 H",
        icon: "🔔",
        title: "Correfoc",
        location: "Carrers del centre",
        description: "Diables i foc recorren els carrers amb ritme i intensitat. Un dels actes més espectaculars de la festa. Cal seguir les mesures de seguretat.",
        tags: ["Tradicio", "Espectacle"],
        image: "/../../../public/actes/acte15.png"
      },
      {
        time: "23:00 H",
        icon: "🎭",
        title: "Fi de Festa",
        location: "Platja del verador",
        description: "Acte final que posa punt i final a Les Santes. Ambient festiu i emotiu entre els assistents. Comiat fins l’any vinent.",
        tags: ["Espectacle", "Familiar"],
        image: "/../../../public/actes/acte16.png"
      }
    ]
  }
};

const TAG_COLORS = {
  "Tradició": "#645BC6",
  "Familiar": "#6c63ff",
  "Cultura": "#645BC6",
  "Música": "#645BC6",
  "Juvenil": "#645BC6",
  "Infantil": "#645BC6",
  "Foc": "#645BC6",
  "Espectacle": "#645BC6",
  "Religiós": "#645BC6",
  "Art": "#645BC6",
  "Esport": "#645BC6",
  "Popular": "#645BC6",
  "Gastronomia": "#645BC6",
  "Nit": "#645BC6",
  "Emoció": "#645BC6",
  "DJ": "#645BC6",
  "Mític": "#645BC6",
  "Imperdible": "#645BC6",
  "Exterior": "#645BC6",
  "Adult": "#645BC6"
};

let activeDay = "25";

function renderDays() {
  const container = document.getElementById("days");
  container.innerHTML = "";
  Object.entries(AGENDA).forEach(([key, data]) => {
    const btn = document.createElement("button");
    btn.className = "day-btn" + (key === activeDay ? " active" : "");
    btn.innerHTML = `<span class="day-label">${data.label}</span><span class="day-num">${data.day}</span><span class="day-month">${data.month}</span>`;
    btn.addEventListener("click", () => { activeDay = key; renderDays(); renderTimeline(); });
    container.appendChild(btn);
  });
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  const dayData = AGENDA[activeDay];
  container.innerHTML = "";

  dayData.events.forEach((ev, i) => {
    const tagsHTML = ev.tags.map(t => {
      const color = TAG_COLORS[t] || "#888";
      return `<span class="tag" style="background:${color}22;color:${color};border-color:${color}55">${t}</span>`;
    }).join("");

    const iconPath = ICON_MAP[ev.icon] || "../../../../public/icons/default.png";

    const item = document.createElement("div");
    item.className = "timeline-item";
    item.style.animationDelay = `${i * 0.08}s`;
    item.innerHTML = `
  <div class="timeline-dot">
    <img class="dot-icon-img" src="${iconPath}" alt="${ev.title}" onerror="this.style.display='none'">
  </div>

  <div class="timeline-time">
    <span class="time-text">${ev.time}</span>
  </div>
  <div class="event-card">
        <div class="event-img" style="background-image:url('${ev.image}')"></div>
        <div class="event-body">
         <div class="event-location">
          <img class="location-icon" src="../../../../public/ubi.png" alt="Ubicación">
          <span>${ev.location.toUpperCase()}</span>
        </div>
          <h3 class="event-title">${ev.title}</h3>
          <p class="event-desc">${ev.description}</p>
          <div class="event-tags">${tagsHTML}</div>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => { renderDays(); renderTimeline(); });