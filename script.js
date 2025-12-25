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
    summary: "Roblox бол хэрэглэгч бүрт тоглоом тоглохын зэрэгцээ өөрийн бүтээлийг хөгжүүлэх боломж олгодог онлайн платформ юм. Roblox Studio орчноор дамжуулан хэрэглэгчид төрөл бүрийн тоглоом (obby, simulator, horror, tycoon гэх мэт) бүтээж, нийтлэх боломжтой. Платформ нь анх 2006 онд албан ёсоор нээлтээ хийсэн бөгөөд өнөөдөр дэлхий даяар түгээмэл ашиглагддаг тоглоомын экосистемийн нэг болсон.",
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
    summary: "Counter-Strike 2 (CS2) нь Valve компанийн хөгжүүлсэн тактик шутер (FPS) тоглоом бөгөөд алдартай Counter-Strike: Global Offensive (CS:GO) тоглоомын шинэчлэгдсэн, сайжруулсан хувилбар юм. Тоглоом нь багийн 5v5 өрсөлдөөнт бүтэцтэй бөгөөд стратеги, хурд, нарийн accuracy-ийг хослуулсан нарийн тактик шаарддаг. CS2 нь шинэ Source 2 engine дээр ажиллаж, график, гэрэлтүүлэг, дууны эффектүүдийг илүү бодитой болгосон. Гол maps, бууны хяналт, эд хөрөнгийн систем (economy) нь CS:GO-оос танил бөгөөд өмнөх тоглогчид хялбар суралцах боломжтой. Тоглоом нь competitive болон casual mode-уудтай бөгөөд э-спортын тэмцээн, лигүүдэд шууд ашиглах боломжтой.",
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
    summary: "Valorant бол Riot Games компаниас 2020 онд гаргасан үнэгүй тоглох тактик шутер (FPS) тоглоом юм. Тоглоом нь багийн суурьтай бөгөөд нэг багт 5 хүн багтдаг. Тоглогчид agents, гэж нэрлэгддэг онцлог чадвартай дүрүүдийг удирдаж, өөрийн чадвар, стратегиараа багийн ялалтад хувь нэмэр оруулдаг.",
    system_requirements: {
      min: {cpu:"CPU: Intel i3-4150", gpu:"GPU: Intel HD 4000", ram:"4GB", storage:"10GB", os:"Windows 10"},
      rec: {cpu:"Intel i5-9400F", gpu:"GTX 1050 Ti", ram:"8GB", storage:"10GB", os:"Windows 10"}
    },
    popularity: 1200,
    isNew: false
  },
  {
    id: 5,
    name: "Genshin impact",
    genre: ["Action RPG, Open World"],
    release_date: "2020-09-28",
    rating: 4.6,
    platform: ["PC (Windows), PS4/PS5, Mobile (iOS, Android)"],
    images: ["https://assetsio.reedpopcdn.com/scjtdo.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"],
    trailer_url: "https://youtu.be/HLUY1nICQRY?si=D4tDPTVlSPdPK7co",
    summary: "Genshin Impact нь miHoYo (хэрэглэгчдэд Hoyoverse нэрээр танигддаг) компанийн хөгжүүлсэн үнэгүй нээлттэй ертөнц бүхий RPG тоглоом юм. Тоглогчид өөрийн дүрүүдийг удирдаж, дэлхийн олон бүс нутгийг судалж, стратеги, тэмцэлд оролцож, өөрийн багийг хөгжүүлдэг.",
    system_requirements: {
      min: {cpu:"Intel Core i5 / AMD Ryzen 3", gpu:"NVIDIA GeForce GT 1030 / AMD Radeon R7 260", ram:"8GB", storage:"30GB", os:"Windows 10"},
      rec: {cpu:"Intel Core i7 / AMD Ryzen 5", gpu:"NVIDIA GeForce GTX 1060 / AMD Radeon RX 580", ram:"16GB", storage:"30GB", os:"Windows 10"}
    },
    popularity: 1200,
    isNew: false
  },
  {
    id: 6,
    name: "GTA V / GTA Online",
    genre: ["Action, Open World, RPG"],
    release_date: "2013-09-17",
    rating: 4.8,
    platform: ["PC (Windows), PlayStation, Xbox"],
    images: ["https://www.mlwgames.com/img/news_600/gta5_5.jpg"],
    trailer_url: "https://youtu.be/QkkoHAzjnUs?si=k4Xcy-Av-sWs1WsJ",
    summary: "GTA V бол Rockstar Games компанийн 2013 онд гаргасан нээлттэй дэлхийтэй адал явдал, экшн RPG тоглоом юм. Тоглоом нь гол дүрүүдийг удирдаж, тэдгээрийн түүх, даалгавар, нээлттэй дэлхийн үйлдлүүдээр дамжуулан туршлага хуримтлуулах боломжтой. GTA Online хувилбар нь олон тоглогчтой онлайн орчинд багийн болон ганцаарчилсан үйл ажиллагааг дэмждэг.",
    system_requirements: {
      min: {cpu:"Intel Core 2 Quad Q6600", gpu:"NVIDIA 9800 GT 1GB / AMD HD 4870 1GB", ram:"4GB", storage:"72GB", os:"Windows 10"},
      rec: {cpu:"Intel Core i5 3470", gpu:"NVIDIA GTX 660 2GB / AMD HD 7870 2GB", ram:"8GB", storage:"72GB", os:"Windows 10"}
    },
    popularity: 1200,
    isNew: false
  },
  {
    id: 7,
    name: "Minecraft",
    genre: ["Sandbox, Survival, Adventure"],
    release_date: "2011-11-18",
    rating: 4.9,
    platform: ["PC (Windows, Mac, Linux), Console (PlayStation, Xbox, Nintendo Switch), Mobile (iOS, Android)"],
    images: ["https://tse2.mm.bing.net/th/id/OIP.9GuSuyXHv4Me_URY8_kDRAHaDn?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"],
    trailer_url: "https://youtu.be/MmB9b5njVbA?si=No1Xc-BauWedWnsL",
    summary: "Minecraft бол Mojang Studios компанийн 2011 онд гаргасан нээлттэй дэлхийтэй бүтээлч, survival тоглоом юм. Тоглогчид блокуудаар дэлхий бүтээж, амьд үлдэх, судалгаа хийх, тэжээвэр амьтад тэжээх, адал явдалд оролцох боломжтой. Multiplayer горимд бусад тоглогчидтой хамтран эсвэл өрсөлдөн тоглох боломжтой.",
    system_requirements: {
      min: {cpu:"Intel Core i3-3210 / AMD A8-7600", gpu:"Intel HD Graphics 4000 / AMD Radeon R5", ram:"4GB", storage:"1GB", os:"Windows 10"},
      rec: {cpu:"Intel Core i5-4690 / AMD A10-7800", gpu:"NVIDIA GeForce 700 Series / AMD Radeon Rx 200 Series", ram:"8GB", storage:"4GB", os:"Windows 10"}
    },
    popularity: 1200,
    isNew: false
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
