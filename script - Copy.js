// sample data (you can replace / extend)
const games = [
  {
    id: 1,
    name: "Roblox",
    genre: ["Sandbox, Adventure"],
    release_date: "2006-09-01",
    rating: 4.8,
    platform: ["PC, Mobile, Xbox"],
    images: ["https://th.bing.com/th/id/R.c83761712c58384892d63501cad3a1ee?rik=ZXKj9ZiIhMN5Rw&pid=ImgRaw&r=0"],
    trailer_url: "https://youtu.be/bzXzGMbdQfY?si=3R4tSZv9ln0jnlJE",
    summary: "A multiplayer online platform.",
    system_requirements: {
      min: {cpu:"Intel i5Dual-Core", gpu:"Integrated", ram:"2GB", storage:"2GB", os:"Windows 10"},
      rec: {cpu:"Quad-Core", gpu:"GTX 960", ram:"4GB", storage:"4GB", os:"Windows 10"}
    },
    popularity: 1000,
    isNew: true
  },
  {
    id: 2,
    name: "Counter-Strike 2",
    genre: ["FPS, Tactical Shooter"],
    release_date: "2023-09-27",
    rating: 4.6,
    platform: ["PC (Windows, Linux)"],
    images: ["https://www.gaming.net/wp-content/uploads/2023/03/Counter-Strike-2-1.jpg"],
    trailer_url: "https://youtu.be/c80dVYcL69E?si=ipwyMXjEitvzmMkA",
    summary: "Fast paced shooter with multiplayer modes.",
    system_requirements: {
      min: {cpu:"CPU: Intel Core i5-2500K", gpu:"GPU: GTX 660 / HD 7850", ram:"8GB", storage:"85GB", os:"Windows 10 (64-bit)"},
      rec: {cpu:"CPU: Intel Core i5-7500 / Ryzen 5 1600", gpu:"GTX 1060 / RX 580", ram:"16GB", storage:"85GB", os:"Windows 10/11 (64-bit)"}
    },
    popularity: 780,
    isNew: false
  },
  {
    id: 3,
    name: "Valorant",
    genre: ["FPS, Tactical Shooter"],
    release_date: "2020-06-02",
    rating: 4.7,
    platform: ["PC (Windows)"],
    images: ["https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-b88adde6a57e40aa85818820aa87a6cd"],
    trailer_url: "https://youtu.be/e_E9W2vsRbQ?si=Pc3hclTm25jKL7XP",
    summary: "Fast-paced tactical shooter with team-based multiplayer gameplay.",
    system_requirements: {
      min: {cpu:"CPU: Intel i3-4150", gpu:"GPU: Intel HD 4000", ram:"4GB", storage:"10GB", os:"Windows 10"},
      rec: {cpu:"Intel i5-9400F", gpu:"GTX 1050 Ti", ram:"8GB", storage:"10GB", os:"Windows 10"}
    },
    popularity: 1200,
    isNew: false
  },
  {
    id: 4,
    name: "Genshin impact",
    genre: ["FPS, Tactical Shooter"],

  }
];

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');
const sortSelect = document.getElementById('sortSelect');
const btnAll = document.getElementById('btnAll');
const btnNew = document.getElementById('btnNew');
const btnTop = document.getElementById('btnTop');

let filtered = [...games];

// render cards
function renderGames(list){
  gamesGrid.innerHTML = '';
  if(list.length === 0){
    gamesGrid.innerHTML = '<p style="color:var(--muted)">Тоглоом олдсонгүй.</p>';
    return;
  }
  list.forEach(g => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${g.images[0]}" alt="${escapeHtml(g.name)} cover" />
      <div class="title">${escapeHtml(g.name)}</div>
      <div class="meta">
        <div class="badge">${g.genre[0]}</div>
        <div>${g.rating} ★</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(g.id));
    gamesGrid.appendChild(card);
  });
}

// escape html to be safe
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// search & filter logic
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const genre = genreSelect.value;
  const sort = sortSelect.value;

  filtered = games.filter(g => {
    const matchQ = g.name.toLowerCase().includes(q) || (g.summary && g.summary.toLowerCase().includes(q));
    const matchGenre = genre === 'all' || g.genre.includes(genre);
    return matchQ && matchGenre;
  });

  if(sort === 'popular'){
    filtered.sort((a,b) => b.popularity - a.popularity);
  } else if(sort === 'rating'){
    filtered.sort((a,b) => b.rating - a.rating);
  } else if(sort === 'newest'){
    filtered.sort((a,b) => new Date(b.release_date) - new Date(a.release_date));
  }

  renderGames(filtered);
}

// simple nav buttons
btnAll.addEventListener('click', () => { setActiveNav(btnAll); searchInput.value=''; genreSelect.value='all'; sortSelect.value='popular'; applyFilters(); });
btnNew.addEventListener('click', () => { setActiveNav(btnNew); filtered = games.filter(g => g.isNew); renderGames(filtered); });
btnTop.addEventListener('click', () => { setActiveNav(btnTop); filtered = [...games].sort((a,b) => b.rating - a.rating); renderGames(filtered); });

function setActiveNav(btn){
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// events
searchInput.addEventListener('input', applyFilters);
genreSelect.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

// modal logic
const modal = document.getElementById('gameModal');
const closeModalBtn = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function openModal(id){
  const g = games.find(x => x.id === id);
  if(!g) return;
  modalBody.innerHTML = `
    <div class="modal-body-hero">
      <img src="${g.images[0]}" alt="${escapeHtml(g.name)}" />
      <div class="modal-info">
        <h2>${escapeHtml(g.name)}</h2>
        <p style="color:var(--muted);margin-top:6px">${escapeHtml(g.summary)}</p>
        <p style="margin-top:8px"><strong>Genre:</strong> ${g.genre.join(', ')}</p>
        <p style="margin-top:6px"><strong>Platforms:</strong> ${g.platform.join(', ')}</p>
        <p style="margin-top:6px"><strong>Release:</strong> ${g.release_date} • <strong>Rating:</strong> ${g.rating}</p>

        <div class="sys-req">
          <strong>System Requirements</strong>
          <div style="display:flex;gap:12px;margin-top:8px;flex-wrap:wrap">
            <div style="min-width:180px">
              <div style="font-weight:600">Minimum</div>
              <div style="color:var(--muted);font-size:13px">${formatReq(g.system_requirements.min)}</div>
            </div>
            <div style="min-width:180px">
              <div style="font-weight:600">Recommended</div>
              <div style="color:var(--muted);font-size:13px">${formatReq(g.system_requirements.rec)}</div>
            </div>
          </div>
        </div>

        ${g.trailer_url ? `<p style="margin-top:10px"><a href="${g.trailer_url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">Trailer үзэх</a></p>` : ''}
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}
function formatReq(obj){
  return `CPU: ${obj.cpu}<br>GPU: ${obj.gpu}<br>RAM: ${obj.ram}<br>Storage: ${obj.storage}<br>OS: ${obj.os || ''}`;
}
closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.add('hidden') });

// init
applyFilters();
