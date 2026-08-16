/* Renders a single artwork detail page based on ?piece=slug in the URL */

(function () {
  const container = document.getElementById("art-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("piece");

  const sorted = [...ARTWORKS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const index = sorted.findIndex((a) => a.slug === slug);
  const art = index >= 0 ? sorted[index] : null;

  if (!art) {
    container.innerHTML = `
      <div class="empty-state">
        <p>We couldn't find that piece.</p>
        <p><a href="index.html">&larr; Back to the gallery</a></p>
      </div>
    `;
    document.title = "Not found · indivisual.art";
    return;
  }

  document.title = `${art.title} · indivisual.art`;

  const date = new Date(art.date);
  const dateStr = isNaN(date) ? "" : date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const tags = (art.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");

  // `cover` is usually a single image URL, but can also be an array of
  // URLs for pieces that have more than one "front" (e.g. two sides of a
  // canvas). Normalize to an array so both forms render the same way.
  const covers = Array.isArray(art.cover) ? art.cover : [art.cover];

  container.innerHTML = `
    <nav class="breadcrumb wrap">
      <a href="index.html">&larr; All work</a>
    </nav>

    <section class="art-hero wrap">
      <div class="image-frame${covers.length > 1 ? " multi" : ""}" id="cover-frame">
        ${covers
          .map(
            (src, i) => `<img src="${src}" alt="${art.title}" data-cover-index="${i}" />`
          )
          .join("")}
      </div>
      <div class="art-info">
        <h1>${art.title}</h1>
        <div class="meta">${dateStr}${art.medium ? " · " + art.medium : ""}</div>
        <p class="description">${art.description || ""}</p>
        <div class="tags">${tags}</div>
        <a class="instagram-link" href="https://www.instagram.com/artbyindivisual/" target="_blank" rel="noopener">
          Also find me on Instagram
        </a>
      </div>
    </section>

    ${
      art.process && art.process.length
        ? `
      <div class="wrap">
        <h2 class="section-title">Process</h2>
      </div>
      <div class="process-grid wrap" id="process-grid">
        ${art.process
          .map(
            (p, i) => `
          <div class="process-item" data-index="${i}">
            <div class="process-thumb">
              <div class="thumb-bg" style="background-image:url('${p.src}')"></div>
              <img src="${p.src}" alt="${p.caption || "Process image " + (i + 1)}" loading="lazy" />
            </div>
            <div class="caption"><span class="step">${String(i + 1).padStart(2, "0")}</span>${p.caption || ""}</div>
          </div>
        `
          )
          .join("")}
      </div>
      `
        : ""
    }

    <div class="nav-buttons wrap">
      ${sorted[index + 1] ? `<a href="art.html?piece=${sorted[index + 1].slug}">&larr; ${sorted[index + 1].title}</a>` : `<span></span>`}
      ${sorted[index - 1] ? `<a href="art.html?piece=${sorted[index - 1].slug}">${sorted[index - 1].title} &rarr;</a>` : `<span></span>`}
    </div>
  `;

  // Lightbox: cover image(s) open as their own navigable set, process
  // images open as a separate set.
  const coverImages = covers.map((src) => ({ src, caption: art.title }));
  document.querySelectorAll("#cover-frame img").forEach((img) => {
    img.addEventListener("click", () => {
      const i = parseInt(img.dataset.coverIndex, 10) || 0;
      Lightbox.open(coverImages, i);
    });
  });

  const processImages = (art.process || []).map((p, i) => ({
    src: p.src,
    caption: `${String(i + 1).padStart(2, "0")} — ${p.caption || ""}`
  }));

  const grid = document.getElementById("process-grid");
  if (grid) {
    grid.querySelectorAll(".process-item").forEach((el) => {
      el.addEventListener("click", () => {
        const i = parseInt(el.dataset.index, 10);
        Lightbox.open(processImages, i);
      });
    });
  }
})();
