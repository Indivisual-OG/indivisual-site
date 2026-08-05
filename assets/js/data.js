/**
 * ============================================================
 *  ARTWORK DATA FILE
 * ============================================================
 * This is the ONLY file you need to edit to add, remove, or
 * update artworks on the site. No other code needs to change.
 *
 * HOW TO ADD A NEW PIECE:
 * 1. Create a new folder inside /art/  e.g.  /art/my-new-piece/
 * 2. Put the finished artwork image inside it, named cover.jpg
 * 3. (Optional) Make a thumbnail version named thumb.jpg
 *    (a smaller/cropped copy of cover.jpg, ~900px wide, loads
 *    faster on the gallery page). If you skip this, cover.jpg
 *    will be used for the thumbnail too.
 * 4. Create a /process/ subfolder and put your work-in-progress
 *    screenshots/photos in it, named 01.jpg, 02.jpg, 03.jpg... in
 *    the order you want them displayed.
 * 5. Copy one of the objects below, paste it into the ARTWORKS
 *    array, and edit the fields to match your new piece.
 *
 * FIELD REFERENCE:
 *  slug        - unique id used in the URL, e.g. "my-new-piece"
 *                (lowercase, no spaces, use dashes)
 *  title       - the artwork's title, shown on the site
 *  date        - "YYYY-MM-DD" (used for sorting, newest first)
 *  medium      - e.g. "Digital painting", "Ink on paper"
 *  tags        - list of short keywords, shown as labels & used
 *                for the filter buttons on the gallery
 *  description - a short paragraph about the piece
 *  cover       - path to the finished image
 *  thumb       - path to the gallery thumbnail
 *  process     - list of { src, caption } for each process image,
 *                in the order they should appear
 * ============================================================
 */

const ARTWORKS = [
  {
    slug: "sample-cosmic-drift",
    title: "Cosmic Drift",
    date: "2026-05-12",
    medium: "Digital painting",
    tags: ["digital", "space", "color"],
    description:
      "A placeholder example piece. Replace this description with a few sentences about the artwork — inspiration, techniques used, tools, or the story behind it.",
    cover: "art/sample-cosmic-drift/cover.jpg",
    thumb: "art/sample-cosmic-drift/thumb.jpg",
    process: [
      { src: "art/sample-cosmic-drift/process/01.jpg", caption: "Thumbnail sketch — blocking in the composition." },
      { src: "art/sample-cosmic-drift/process/02.jpg", caption: "Refining the linework." },
      { src: "art/sample-cosmic-drift/process/03.jpg", caption: "Laying down base colors." },
      { src: "art/sample-cosmic-drift/process/04.jpg", caption: "Adding lighting and atmosphere." }
    ]
  },
  {
    slug: "sample-neon-forest",
    title: "Neon Forest",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["digital", "nature", "neon"],
    description:
      "Another placeholder example. Swap the images in /art/sample-neon-forest/ for your own and edit this text to describe your piece.",
    cover: "art/sample-neon-forest/cover.jpg",
    thumb: "art/sample-neon-forest/thumb.jpg",
    process: [
      { src: "art/sample-neon-forest/process/01.jpg", caption: "Rough gesture sketch." },
      { src: "art/sample-neon-forest/process/02.jpg", caption: "Working out the composition." },
      { src: "art/sample-neon-forest/process/03.jpg", caption: "Blocking in color masses." },
      { src: "art/sample-neon-forest/process/04.jpg", caption: "Detail and texture pass." }
    ]
  },
  {
    slug: "my new example",
    title: "Trial",
    date: "2026-08-12",
    medium: "Acrylic ink and acrylic pens",
    tags: ["test", "space", "color"],
    description:
      "Example Test case.",
    cover: "art/example/cover.jpg",
    thumb: "art/examplet/thumb.jpg",
    process: [
      { src: "art/example/process/01.jpg", caption: "Thumbnail sketch — blocking in the composition." },
      { src: "art/example/process/02.jpg", caption: "Refining the linework." },
      { src: "art/example/process/03.jpg", caption: "Laying down base colors." },
      { src: "art/example/process/04.jpg", caption: "Adding lighting and atmosphere." }
    ]
  },

  /*
  ,{
    slug: "another-example",
    title: "Another Example",
    date: "2026-01-01",
    medium: "Ink and watercolor",
    tags: ["traditional", "ink"],
    description: "Copy this block, edit the fields, and add your own images.",
    cover: "art/another-example/cover.jpg",
    thumb: "art/another-example/thumb.jpg",
    process: [
      { src: "art/another-example/process/01.jpg", caption: "First pass." },
      { src: "art/another-example/process/02.jpg", caption: "Second pass." }
    ]
  }
  */
];
