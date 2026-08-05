/* Small, dependency-free lightbox used on the artwork detail page. */

const Lightbox = (function () {
  let images = []; // [{src, caption}]
  let currentIndex = 0;
  let rootEl;

  function build() {
    rootEl = document.createElement("div");
    rootEl.className = "lightbox";
    rootEl.innerHTML = `
      <button class="lb-close" aria-label="Close">&times;</button>
      <button class="lb-prev" aria-label="Previous">&#10094;</button>
      <img src="" alt="" />
      <div class="lb-caption"></div>
      <button class="lb-next" aria-label="Next">&#10095;</button>
    `;
    document.body.appendChild(rootEl);

    rootEl.querySelector(".lb-close").addEventListener("click", close);
    rootEl.querySelector(".lb-prev").addEventListener("click", () => step(-1));
    rootEl.querySelector(".lb-next").addEventListener("click", () => step(1));
    rootEl.addEventListener("click", (e) => {
      if (e.target === rootEl) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!rootEl.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  function render() {
    const item = images[currentIndex];
    if (!item) return;
    rootEl.querySelector("img").src = item.src;
    rootEl.querySelector("img").alt = item.caption || "";
    rootEl.querySelector(".lb-caption").textContent = item.caption || "";
    const multi = images.length > 1;
    rootEl.querySelector(".lb-prev").style.display = multi ? "block" : "none";
    rootEl.querySelector(".lb-next").style.display = multi ? "block" : "none";
  }

  function step(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    render();
  }

  function open(list, startIndex) {
    if (!rootEl) build();
    images = list;
    currentIndex = startIndex || 0;
    render();
    rootEl.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!rootEl) return;
    rootEl.classList.remove("open");
    document.body.style.overflow = "";
  }

  return { open, close };
})();
