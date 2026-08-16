/* Renders the homepage gallery grid from ARTWORKS (see data.js) */

(function () {
  const galleryEl = document.getElementById("gallery");
  const filtersEl = document.getElementById("filters");
  if (!galleryEl) return;

  const sorted = [...ARTWORKS].sort((a, b) => (a.date < b.date ? 1 : -1));

  // Build tag list for filter buttons
  const allTags = Array.from(
    new Set(sorted.flatMap((a) => a.tags || []))
  ).sort();

  let activeTag = "all";

  function renderFilters() {
    if (!filtersEl || allTags.length === 0) return;
    const buttons = ["all", ...allTags].map((tag) => {
      const cls = tag === activeTag ? "filter-btn active" : "filter-btn";
      const label = tag === "all" ? "All" : tag;
      return `<button class="${cls}" data-tag="${tag}">${label}</button>`;
    });
    filtersEl.innerHTML = buttons.join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTag = btn.dataset.tag;
        renderFilters();
        renderGallery();
      });
    });
  }

  function renderGallery() {
    const items =
      activeTag === "all"
        ? sorted
        : sorted.filter((a) => (a.tags || []).includes(activeTag));

    if (items.length === 0) {
      galleryEl.innerHTML = `<p class="empty-state">No pieces yet — add one in assets/js/data.js</p>`;
      return;
    }

    galleryEl.innerHTML = items
      .map((art) => {
        const date = new Date(art.date);
        const dateStr = isNaN(date) ? "" : date.toLocaleDateString(undefined, { year: "numeric", month: "short" });
        const tags = (art.tags || [])
          .map((t) => `<span class="tag">${t}</span>`)
          .join("");
        // cover can be a single URL or an array (pieces with more than one
        // "front" image) — the grid thumbnail always just shows the first one.
        const firstCover = Array.isArray(art.cover) ? art.cover[0] : art.cover;
        return `
          <a class="card" href="art.html?piece=${encodeURIComponent(art.slug)}">
            <div class="thumb-wrap">
              <img src="${art.thumb || firstCover}" alt="${art.title}" loading="lazy" />
            </div>
            <div class="card-body">
              <h3>${art.title}</h3>
              <div class="meta">${dateStr}${art.medium ? " · " + art.medium : ""}</div>
              <div class="tags">${tags}</div>
            </div>
          </a>
        `;
      })
      .join("");
  }

  renderFilters();
  renderGallery();
})();
