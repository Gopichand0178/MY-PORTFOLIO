 """/* ---------- Base ---------- */
:root{
  --bg: #0b0f14;
  --card: rgba(255,255,255,0.06);
  --text: #e8eef5;
  --muted: #a0afc1;
  --accent: #60a5fa;
  --accent-2: #34d399;
  --shadow: 0 10px 30px rgba(0,0,0,.35);
  --radius: 16px;
}

*{ box-sizing: border-box }
html,body{ margin:0; padding:0 }
body{
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(96,165,250,.15), transparent 60%),
    radial-gradient(800px 500px at 90% 10%, rgba(52,211,153,.12), transparent 50%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* Light theme */
body.light{
  --bg: #f6f8fb;
  --card: rgba(9,12,15,0.05);
  --text: #0b1220;
  --muted: #4a5568;
  --accent: #2563eb;
  --accent-2: #059669;
  background:
    radial-gradient(1200px 600px at 0% -10%, rgba(37,99,235,.12), transparent 60%),
    radial-gradient(800px 500px at 100% 0%, rgba(5,150,105,.10), transparent 50%),
    var(--bg);
}

/* ---------- Layout ---------- */
.site-header{
  position: sticky; top:0; z-index:10;
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, rgba(0,0,0,.45), transparent);
  display:flex; align-items:center; justify-content:space-between;
  gap: 1rem; padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,.05);
}
.brand{ font-weight: 800; letter-spacing: .5px; color: var(--text); text-decoration:none; font-size: 20px; }
.nav{ display:flex; flex-wrap:wrap; gap:.8rem }
.nav a{ color: var(--text); text-decoration:none; opacity:.85 }
.nav a:hover{ color: var(--accent) }
#themeToggle{ background:transparent; border:1px solid rgba(255,255,255,.2); color:var(--text); padding:.4rem .6rem; border-radius:10px; cursor:pointer }

.hero{
  min-height: 88dvh; padding: 40px 20px; display:grid; gap:2rem;
  grid-template-columns: 1.1fr .9fr; align-items: center; max-width: 1100px; margin: 0 auto;
}
.hero .subtitle{ color: var(--muted); margin-top: -6px }
.hero .lead{ margin:.8rem 0 1.2rem }
.hero .hero-actions{ display:flex; gap:.8rem; flex-wrap:wrap }
.hero .links{ display:flex; flex-wrap:wrap; gap:1rem; font-size:.95rem; opacity:.9 }
.hero .links a{ color: var(--muted); text-decoration:none }
.hero .links a:hover{ color: var(--accent) }

.hero-photo{
  display:flex; flex-direction:column; align-items:center; gap:.5rem;
  padding: 10px; border-radius: var(--radius);
}
.hero-photo img{
  width: 100%; max-width: 360px; aspect-ratio: 1/1.2; object-fit: cover;
  border-radius: 18px; box-shadow: var(--shadow);
  border: 1px solid rgba(255,255,255,.15);
}
.hint{ color: var(--muted); font-size: 12px }

.section{ padding: 64px 20px; max-width: 1100px; margin: 0 auto }
.section h2{ font-size: clamp(1.6rem, 2.6vw, 2.1rem); margin: 0 0 18px }
.glass{
  background: var(--card);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-text{ padding: 24px }

/* ---------- Components ---------- */
.btn{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.7rem 1rem; border-radius:12px;
  text-decoration:none; color:var(--text);
  border:1px solid rgba(255,255,255,.15);
  backdrop-filter: blur(6px);
}
.btn.primary{ background: linear-gradient(90deg, var(--accent), var(--accent-2)); color: white; border:none }
.btn:hover{ transform: translateY(-1px) scale(1.01) }
.accent{ color: var(--accent) }
.muted{ color: var(--muted) }

.card{ padding: 20px; border-radius: var(--radius); background: var(--card); border:1px solid rgba(255,255,255,.08) }
.card-head{ display:flex; flex-direction:column; gap:.3rem; margin-bottom:.5rem }

.grid{
  display:grid; gap:16px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.bullets{ margin:0; padding-left: 18px }
.bullets li{ margin: .3rem 0 }

.chips{ display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom: 18px }
.chips span{
  border:1px solid rgba(255,255,255,.15); padding:.45rem .7rem; border-radius:999px; font-size:.92rem; background: var(--card);
}

.meters{ display:grid; gap:10px }
.meter{ height: 42px; background: rgba(255,255,255,.04); border-radius: 12px; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,.08) }
.meter span{
  position:absolute; inset:0 0 0 0;
  --val: 70%;
  width: var(--val);
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  display:flex; align-items:center; padding-left:12px; font-weight:600; color:#fff;
}
.meter span::after{ content: attr(data-skill) }

.timeline{ display:grid; gap: 14px }
.time-card{ padding:16px; border-radius:14px; background: var(--card); border:1px solid rgba(255,255,255,.08) }

/* Masonry-like gallery using CSS columns */
.masonry{ column-count: 1; column-gap: 12px }
.masonry .m-item{ break-inside: avoid; margin-bottom: 12px }
.masonry img{ width:100%; border-radius: 12px; border:1px solid rgba(255,255,255,.12) }

.contact .row{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px }
input, textarea{
  width:100%; padding:.8rem .9rem; border-radius: 10px; border:1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.06); color: var(--text);
}
input::placeholder, textarea::placeholder{ color: var(--muted) }
.form-actions{ display:flex; gap:.8rem; margin-top:.6rem }

.site-footer{ padding: 28px 20px; text-align:center; color: var(--muted) }

/* ---------- Responsive ---------- */
@media (max-width: 900px){
  .hero{ grid-template-columns: 1fr }
  .hero-photo{ order: -1 }
  .contact .row{ grid-template-columns: 1fr }
  .masonry{ column-count: 2 }
}
@media (max-width: 560px){
  .masonry{ column-count: 1 }
}
"""