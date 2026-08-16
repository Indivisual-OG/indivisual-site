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

  // Multiple tags can be selected at once. An empty set means "no filter,
  // show everything". A piece must have ALL of the currently selected tags
  // to be shown (AND, not OR) — this lets you narrow down results by
  // stacking filters, e.g. selecting "Acrylic" + "Canvas" shows only pieces
  // that are both, the same way most faceted filter UIs work.
  const activeTags = new Set();

  function renderFilters() {
    if (!filtersEl || allTags.length === 0) return;
    const buttons = ["all", ...allTags].map((tag) => {
      const isActive = tag === "all" ? activeTags.size === 0 : activeTags.has(tag);
      const cls = isActive ? "filter-btn active" : "filter-btn";
      const label = tag === "all" ? "All" : tag;
      return `<button class="${cls}" data-tag="${tag}" aria-pressed="${isActive}">${label}</button>`;
    });
    filtersEl.innerHTML = buttons.join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.dataset.tag;
        if (tag === "all") {
          activeTags.clear();
        } else if (activeTags.has(tag)) {
          activeTags.delete(tag);
        } else {
          activeTags.add(tag);
        }
        renderFilters();
        renderGallery();
      });
    });
  }

  function renderGallery() {
    const items =
      activeTags.size === 0
        ? sorted
        : sorted.filter((a) => {
            const tags = a.tags || [];
            return [...activeTags].every((t) => tags.includes(t));
          });

    if (items.length === 0) {
      galleryEl.innerHTML =
        sorted.length === 0
          ? `<p class="empty-state">No pieces yet — add one in assets/js/data.js</p>`
          : `<p class="empty-state">No pieces match the selected filters — try removing one.</p>`;
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
