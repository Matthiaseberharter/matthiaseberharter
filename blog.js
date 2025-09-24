// blog.js – Logik für Übersicht (auf index.html) und Detail (auf blog/index.html)
(function () {
  const posts = (window.BLOG_POSTS || []).slice()
    .sort((a,b) => new Date(b.date) - new Date(a.date));

  // Hilfsfunktionen
  const fmt = (iso) => new Date(iso).toLocaleDateString('de-AT', {
    year:'numeric', month:'long', day:'numeric'
  });
  const byId = (id) => posts.find(p => p.id === id);

  // --- Übersicht auf der Startseite (#blogList) ---
  const listEl = document.getElementById('blogList');
  if (listEl) {
    listEl.innerHTML = '';
    posts.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="pill">${fmt(p.date)}</div>
        <h3>${p.title}</h3>
        <p class="muted">${p.teaser}</p>
        <a class="button" href="blog/?id=${encodeURIComponent(p.id)}" aria-label="Weiterlesen: ${p.title}">Weiterlesen</a>
      `;
      listEl.appendChild(card);
    });
  }

  // --- Detailseite (blog/?id=slug) ---
  const viewEl = document.getElementById('blogView');
  if (viewEl) {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const post = byId(id);

    if (!post) {
      viewEl.innerHTML = `
        <div class="wrap">
          <h2>Beitrag nicht gefunden</h2>
          <p class="muted">Der angeforderte Beitrag existiert nicht.</p>
          <p><a class="button" href="../#blog">Zurück zur Übersicht</a></p>
        </div>`;
      return;
    }

    // Head-Titel & Canonical
    document.title = `${post.title} – Blog`;
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel','canonical');
    canonical.setAttribute('href', location.href);
    document.head.appendChild(canonical);

    viewEl.innerHTML = `
      <section class="section">
        <div class="wrap">
          <div class="pill">${fmt(post.date)}</div>
          <h1 style="margin-top:.5rem">${post.title}</h1>
          <div class="sep"></div>
          <article class="card">
            ${post.content}
          </article>
          <div class="space"></div>
          <p><a class="button" href="../#blog">← Zurück zur Übersicht</a></p>
        </div>
      </section>
    `;
  }
})();
