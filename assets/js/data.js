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
    slug: "AngerOut",
    title: "Anger Out",
    date: "2024-06-25",
    medium: "Acrylic Pens, Watercolors, and Oil on Canvas",
    tags: ["Acrylic", "Pens", "Watercolors", "Oil", "Canvas", "completed"],
    description: "A piece of the series expressing confusion and hurt after being mistreated and ghosted by a Significant Other.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/20240622_141221_rk9nzg.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/AngerOut/IMG_20240811_063333_496_zyflbi.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240522_132515_kmg17w.jpg", caption: "Almost done." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240521_202004_yamdaz.jpg", caption: "Without focus yet." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240225_191443_qdckfc.jpg", caption: "Original direction." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240622_141225_omyhr4.jpg", caption: "Hidden sides plain to see." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240622_141239_w3tudi.jpg", caption: "Other side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240622_141233_t2ditq.jpg", caption: "Third side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/20240622_141246_pjpsde.jpg", caption: "Fourth side." }
    ]
  },
  /*
  {
    slug: "AIPrompt_Art",
    title: "AIPrompt Art",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/AIPrompt_Art/cover.jpg",
    thumb: "art/AIPrompt_Art/thumb.jpg",
    process: [
      { src: "art/AIPrompt_Art/process/01.jpg", caption: "xx." },
      { src: "art/AIPrompt_Art/process/02.jpg", caption: "xx." },
      { src: "art/AIPrompt_Art/process/03.jpg", caption: "xx." },
      { src: "art/AIPrompt_Art/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "Aphex",
    title: "Aphex",
    date: "2023-11-08",
    medium: "Acrylic Pens, Paint, and Mixed Media on Paper ",
    tags: ["Acrylic", "Pens", "Paint", "MixedMedia", "Paper"],
    description:
      "Processing my first Aphex Twin live experience in Bristol (Forward's Festival) through Art (completed). The Aphex Twin set at #forwardsfestival in Bristol was a monument to nonverbal communication through sound and video that felt like the artist had understood the limit of the framerate at which my mind is processing information, playing with afterimages and overlaying beats. In this way, he was able to edge this boundary, constantly pushing for it to allow more room. To me, the experience of the music and accompanying art was an invitation for intellectual discourse not based on words. It was an enticement to engage with a genius mind that is not bound by a need to please and which has the ability to create a space of his own choosing within music. The set opened this container for me in which I could experience and appreciate utter confusion, astonishment and chaos safely. There was a summary in there of what it must be like to know you are dying, followed instantly by the most whimsical AF tunes, insights into (maybe) what its like to be an artist and their personal story in current pop culture society, and an intense quick trip through all kinds of styles of electronic music that felt like a good fuck. When it was over and the music, lights, and lasers were just turned off like a flash, the 10k crowd needed a couple minutes before they could collect themselves enough to even cheer and applaud.  I have been looking for words that do this experience justice since then and hope I am doing an OK job. Regardless - it was incredible and I had a fucking blast..I think. :D I am adding some art by cfflepp that was posted to Aphex Twin's FB page by someone trying to express what the music may look like and I feel it was quite accurate. (Source: http://andyamholst.com/2022/02/22/zwei-notenblaetter-2). In case you have a VR headset, someone recorded the Field Day show on 360 Video with Spatial Audio: https://youtu.be/fkmo-LseN0c?si=7oJ8GeqhyQed3fm2. For nerds, this RedditPost makes your little hearts happy with the setlist and Spotify Support Playlist: https://reddit.com/r/aphextwin/s/FHRRZffy.",   
    cover: "art/Aphex/cover.jpg",
    thumb: "art/Aphex/thumb.jpg",
    process: [
      { src: "art/Aphex/process/01.jpg", caption: "xx." },
      { src: "art/Aphex/process/02.jpg", caption: "xx." },
      { src: "art/Aphex/process/03.jpg", caption: "xx." },
      { src: "art/Aphex/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Banksyland_AbomiNation",
    title: "Banksyland: AbomiNation",
    date: "2023-01-015",
    medium: "Collage and Acrylic Paint on Canvas",
    tags: ["Collage", "Acrylic", "Canvas"],
    description:
      "The story of this piece: Luring the enthusiast in me with the likeness of the name to the famed *Dismaland* by original artist Banksy and peers a while back, I went, uninformed, excited, almost triggered by streetart at its finest, promised to be presented while I visited San Diego end of December. How disappointed I was, and how offended, angry even. The exhibition was simple theft, traveling through the US, quotes printed in big letters, casts of what looks like original pieces, and a poster full of art that's ever so slightly altered to evoke the artist's genius, but is not quite be the same image. The horrified exit through the gift shop was an offense all by itself, where the spray cans that had been used to spray the show's name everywhere around the venue on the sidewalks and on the walls inside the *gallery* were sold as swag for 30-fucking-$. AbomiNation USA at its' most ugly, squeezing original, subversive art until money falls out, leaving the pieces unrecognizable, even to those I would consider of the capacity to process what happens right in front of their eyes. Had the joke been meta, god, what a genius. Sadly, it wasn't, and this is just a money machine. The experience had me steal one of the posters and create this piece as a statement, representing my own first steps into the journey of art.Go fuck yourself, Banksyland, and no-thank-you at all for the inspiration. For a more nuanced analysis from less passionate people, read: https://www.sandiegouniontribune.com/entertainment/visual-arts/story/2022-12-04/banksyland-and-the-proliferation-of-the-immersive-art-experience.",
    cover: "art/Banksyland_AbomiNation/cover.jpg",
    thumb: "art/Banksyland_AbomiNation/thumb.jpg",
    process: [
      { src: "art/Banksyland_AbomiNation/process/01.jpg", caption: "xx." },
      { src: "art/Banksyland_AbomiNation/process/02.jpg", caption: "xx." },
      { src: "art/Banksyland_AbomiNation/process/03.jpg", caption: "xx." },
      { src: "art/Banksyland_AbomiNation/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "BeginAgain",
    title: "Begin Again",
    date: "2026-08-31",
    medium: "Digital Art, drawn in Infinite Painted on a Samsung Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "in progress"],
    description:
      "The mantra of Let Go and Begin Again artfully focused in this ongoing piece, which is only drawn on trains (so far).",
    cover: "art/BeginAgain/cover.jpg",
    thumb: "art/BeginAgain/thumb.jpg",
    process: [
      { src: "art/BeginAgain/process/01.jpg", caption: "xx." },
      { src: "art/BeginAgain/process/02.jpg", caption: "xx." },
      { src: "art/BeginAgain/process/03.jpg", caption: "xx." },
      { src: "art/BeginAgain/process/04.jpg", caption: "xx." },
    ]
  },
  {
    slug: "BlissScramble",
    title: "Blissful Scramble",
    date: "2024-08-10",
    medium: "Acrylic Pens and Paint on Canvas",
    tags: ["Acrylic", "Pens", "Paints", "Canvas"],
    description:
      "Inspired by a psychedelic experience at Ozora Festival 2024.",
    cover: "art/BlissScramble/cover.jpg",
    thumb: "art/BlissScramble/thumb.jpg",
    process: [
      { src: "art/BlissScramble/process/01.jpg", caption: "xx." },
      { src: "art/BlissScramble/process/02.jpg", caption: "xx." },
      { src: "art/BlissScramble/process/03.jpg", caption: "xx." },
      { src: "art/BlissScramble/process/04.jpg", caption: "xx." }
  },
  {
    slug: "Body",
    title: "Body",
    date: "2024-06-01",
    medium: "Fabric and Acrylic Paints on Canvas",
    tags: ["Acrylic", "Paints", "Fabric"],
    description:
      "Part of some lingerie that passionately got ripped to pieces and made its way onto a canvas for some fish scale-inspired art.",
    cover: "art/Body/cover.jpg",
    thumb: "art/Body/thumb.jpg",
    process: [
      { src: "art/Body/process/01.jpg", caption: "xx." },
      { src: "art/Body/process/02.jpg", caption: "xx." },
      { src: "art/Body/process/03.jpg", caption: "xx." },
      { src: "art/Body/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "BoredSymmetry1",
    title: "Bored Symmetry 1",
    date: "2024-03-15",
    medium: "Acrylic Pens, Paints, and various Pencils and Markers on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper"],
    description:
      "Ever wonder how art gets created? This one is an example of *from boredom, based on opportunity.* Saw this FB post, liked the pattern (Wave Optic diagram), traced it, fucked around, found out, painted over, liked it. Voilà.",
    cover: "art/BoredSymmetry1/cover.jpg",
    thumb: "art/BoredSymmetry1/thumb.jpg",
    process: [
      { src: "art/BoredSymmetry1/process/01.jpg", caption: "xx." },
      { src: "art/BoredSymmetry1/process/02.jpg", caption: "xx." },
      { src: "art/BoredSymmetry1/process/03.jpg", caption: "xx." },
      { src: "art/BoredSymmetry1/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "BoredSymmetry2_Deity",
    title: "Bored Symmetry 2: Deity",
    date: "2026-03-01",
    medium: "Acrylic Pens, Dividers, and Ruler on Paper",
    tags: ["Acrylic", "Pens", "Dividers", "Ruler", "Paper", "in progress"],
    description:
      "Emerging from playing around with dividers and a ruler, this pieces is another version of crerative approach to bordedom.",
    cover: "art/BoredSymmetry2_Deity/cover.jpg",
    thumb: "art/BoredSymmetry2_Deity/thumb.jpg",
    process: [
      { src: "art/BoredSymmetry2_Deity/process/01.jpg", caption: "xx." },
      { src: "art/BoredSymmetry2_Deity/process/02.jpg", caption: "xx." },
      { src: "art/BoredSymmetry2_Deity/process/03.jpg", caption: "xx." },
      { src: "art/BoredSymmetry2_Deity/process/04.jpg", caption: "xx." }
    ]
  },
/*
  {
    slug: "BoredSymmetry3",
    title: "Bored Symmetry 3",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/BoredSymmetry3/cover.jpg",
    thumb: "art/BoredSymmetry3/thumb.jpg",
    process: [
      { src: "art/BoredSymmetry3/process/01.jpg", caption: "xx." },
      { src: "art/BoredSymmetry3/process/02.jpg", caption: "xx." },
      { src: "art/BoredSymmetry3/process/03.jpg", caption: "xx." },
      { src: "art/BoredSymmetry3/process/04.jpg", caption: "xx." }
    ]
  },

  {
    slug: "BoredSymmetry4",
    title: "Bored Symmetry 4",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/BoredSymmetry4/cover.jpg",
    thumb: "art/BoredSymmetry4/thumb.jpg",
    process: [
      { src: "art/BoredSymmetry4/process/01.jpg", caption: "xx." },
      { src: "art/BoredSymmetry4/process/02.jpg", caption: "xx." },
      { src: "art/BoredSymmetry4/process/03.jpg", caption: "xx." },
      { src: "art/BoredSymmetry4/process/04.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "BurningMan_Blanket",
    title: "Burning Man - Blanket",
    date: "2019-07-02",
    medium: "Printed fabric with provided printing instructions created digitally",
    tags: ["Fabric", "Digital", "completed"],
    description:
      "Intended as gifts, 3 blankets with the art pieces were ordered for print. The art was created in a digital drawing program.",
    cover: "art/BurningMan_Blanket/cover.jpg",
    thumb: "art/BurningMan_Blanket/thumb.jpg",
    process: [
      { src: "art/BurningMan_Blanket/process/01.jpg", caption: "xx." },
      { src: "art/BurningMan_Blanket/process/02.jpg", caption: "xx." },
      { src: "art/BurningMan_Blanket/process/03.jpg", caption: "xx." },
      { src: "art/BurningMan_Blanket/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "BurningMan_Sticker",
    title: "BurningMan - Sticker",
    date: "2018-07-02",
    medium: "Digital Art printed on see-through stickers",
    tags: ["Sticky paper", "Digital", "completed", "partly gifted"],
    description:
      "For the Metamorphoses theme of Burning Man 2018, I created a sticker about the life cycle of a frog, reading *So froggin meta*, which only very few people actually got as a joke. I liked it :D"   
    cover: "art/BurningMan_Sticker/cover.jpg",
    thumb: "art/BurningMan_Sticker/thumb.jpg",
    process: [
      { src: "art/BurningMan_Sticker/process/01.jpg", caption: "xx." },
      { src: "art/BurningMan_Sticker/process/02.jpg", caption: "xx." },
      { src: "art/BurningMan_Sticker/process/03.jpg", caption: "xx." },
      { src: "art/BurningMan_Sticker/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "BurnLocal",
    title: "Think Global - Burn Local",
    date: "2023-05-22",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper"],
    description:
      "Celebrating a global mindset alongside local awareness for Burner culture.",
    cover: "art/BurnLocal/cover.jpg",
    thumb: "art/BurnLocal/thumb.jpg",
    process: [
      { src: "art/BurnLocal/process/01.jpg", caption: "xx." },
      { src: "art/BurnLocal/process/02.jpg", caption: "xx." },
      { src: "art/BurnLocal/process/03.jpg", caption: "xx." },
      { src: "art/BurnLocal/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "CCC_NieSie",
    title: "CCC - Nie Sie",
    date: "2026-05-02",
    medium: "Collage, Acrylic Pens and Paints",
    tags: ["Collage", "Acrylic", "Pens", "Paints", "completed"],
    description:
      "This CCC-themed piece is created from a leftover poster from CCC's 39C3 and lots of stickers and flyers from EH2026, as well as 38C3. It is now settled that this piece will go into silent auction at Kongress in December, with the money intended to support a yet unchosen good cause in this, my community :) #silentauction #Chaos #C3.",
    cover: "art/CCC_NieSie/cover.jpg",
    thumb: "art/CCC_NieSie/thumb.jpg",
    process: [
      { src: "art/CCC_NieSie/process/01.jpg", caption: "xx." },
      { src: "art/CCC_NieSie/process/02.jpg", caption: "xx." },
      { src: "art/CCC_NieSie/process/03.jpg", caption: "xx." },
      { src: "art/CCC_NieSie/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Chaos_Order",
    title: "Chaos & Order",
    date: "2023-05-08",
    medium: "Acrylic Paint on Paper",
    tags: ["Acrylic", "Pens", "Paper"],
    description:
      "I love looking at art from far away, normal distance, and up close and try to satisfy the details of each of those perspectives (like pinch-zooming into your pics on the phone).",
    cover: "art/Chaos_Order/cover.jpg",
    thumb: "art/Chaos_Order/thumb.jpg",
    process: [
      { src: "art/Chaos_Order/process/01.jpg", caption: "xx." },
      { src: "art/Chaos_Order/process/02.jpg", caption: "xx." },
      { src: "art/Chaos_Order/process/03.jpg", caption: "xx." },
      { src: "art/Chaos_Order/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Collage1_Pusheen",
    title: "Collage 1: Pusheen",
    date: "2022-07-12",
    medium: "Collage and Acrylic Pens on Canvas",
    tags: ["Collage", "Acrylic", "Pens", "Canvas", "completed", "gifted"],
    description:
      "A collage from paper pieces printed with the image of Pusheen, the Cat.",
    cover: "art/Collage1_Pusheen/cover.jpg",
    thumb: "art/Collage1_Pusheen/thumb.jpg",
    process: [
      { src: "art/Collage1_Pusheen/process/01.jpg", caption: "xx." },
      { src: "art/Collage1_Pusheen/process/02.jpg", caption: "xx." },
      { src: "art/Collage1_Pusheen/process/03.jpg", caption: "xx." },
      { src: "art/Collage1_Pusheen/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Collage2_Random",
    title: "Collage 2: Random",
    date: "2022-08-01",
    medium: "Collage, MixedMedia, and Acrylic Pens on Canvas",
    tags: ["Collage", "MixedMedia", "Acrylic", "Pens", "Canvas", "completed"],
    description:
      "A collage that inspired my art journey, made from paper pieces collected over years, printed with things and advertising concepts that aim to make people happy, removed from the original product packaging.",
    cover: "art/Collage2_Random/cover.jpg",
    thumb: "art/Collage2_Random/thumb.jpg",
    process: [
      { src: "art/Collage2_Random/process/01.jpg", caption: "xx." },
      { src: "art/Collage2_Random/process/02.jpg", caption: "xx." },
      { src: "art/Collage2_Random/process/03.jpg", caption: "xx." },
      { src: "art/Collage2_Random/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Collage3_Decommodify",
    title: "Collage 3: Decommodify",
    date: "2023-12-19",
    medium: "Acrylic Pens, Collage, and MixedMedia on Canvas",
    tags: ["Collage", "MixedMedia", "Acrylic", "Pens", "Canvas", "completed", "gifted"],
    description:
      "A collage and mixed media pieces about Decommodification and leaving Capitalism behind. Gifted to the amazing Elin.",
    cover: "art/Collage3_Decommodify/cover.jpg",
    thumb: "art/Collage3_Decommodify/thumb.jpg",
    process: [
      { src: "art/Collage3_Decommodify/process/01.jpg", caption: "xx." },
      { src: "art/Collage3_Decommodify/process/02.jpg", caption: "xx." },
      { src: "art/Collage3_Decommodify/process/03.jpg", caption: "xx." },
      { src: "art/Collage3_Decommodify/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "ConfusionAge",
    title: "Why?: Confusion Age",
    date: "2024-04-01",
    medium: "Acrylic Pens on Canvas",
    tags: ["Acrylic", "Pens", "Canvas"],
    description:
      "Asking WHY some people mistreat others without care, and expressing being very confused by this mistreatment.",
    cover: "art/ConfusionAge/cover.jpg",
    thumb: "art/ConfusionAge/thumb.jpg",
    process: [
      { src: "art/ConfusionAge/process/01.jpg", caption: "xx." },
      { src: "art/ConfusionAge/process/02.jpg", caption: "xx." },
      { src: "art/ConfusionAge/process/03.jpg", caption: "xx." },
      { src: "art/ConfusionAge/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "EarlyWork",
    title: "Early Work",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/EarlyWork/cover.jpg",
    thumb: "art/EarlyWork/thumb.jpg",
    process: [
      { src: "art/EarlyWork/process/01.jpg", caption: "xx." },
      { src: "art/EarlyWork/process/02.jpg", caption: "xx." },
      { src: "art/EarlyWork/process/03.jpg", caption: "xx." },
      { src: "art/EarlyWork/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "Elindentity",
    title: "Elindentity",
    date: "2025-03-01",
    medium: "Digital Art created using Infinite Painter on a Samsung Galaxy Tab8, turned into an NFT",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed", "gifted"],
    description:
      "This one is also finally done - a fully digitally painted piece turned NFT that is both a meditation on the connection with, as well as an expression of admiration for the person this is a gift to. I am honored and overjoyed to be able to call you my friend.",
    cover: "art/Elindentity/cover.jpg",
    thumb: "art/Elindentity/thumb.jpg",
    process: [
      { src: "art/Elindentity/process/01.jpg", caption: "xx." },
      { src: "art/Elindentity/process/02.jpg", caption: "xx." },
      { src: "art/Elindentity/process/03.jpg", caption: "xx." },
      { src: "art/Elindentity/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "Eukel",
    title: "Eukel",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Eukel/cover.jpg",
    thumb: "art/Eukel/thumb.jpg",
    process: [
      { src: "art/Eukel/process/01.jpg", caption: "xx." },
      { src: "art/Eukel/process/02.jpg", caption: "xx." },
      { src: "art/Eukel/process/03.jpg", caption: "xx." },
      { src: "art/Eukel/process/04.jpg", caption: "xx." }
    ]
  },

  {
    slug: "Exhibition_Kulti",
    title: "Exhibition im Kulti",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Exhibition_Kulti/cover.jpg",
    thumb: "art/Exhibition_Kulti/thumb.jpg",
    process: [
      { src: "art/Exhibition_Kulti/process/01.jpg", caption: "xx." },
      { src: "art/Exhibition_Kulti/process/02.jpg", caption: "xx." },
      { src: "art/Exhibition_Kulti/process/03.jpg", caption: "xx." },
      { src: "art/Exhibition_Kulti/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "FemaleEnergy",
    title: "Female Energy",
    date: "2026-06-09",
    medium: "Acrylic Pens, Collage, and Transfer using foil",
    tags: ["Acrylic", "Pens", "Collage", "Transfer", "completed"],
    description:
      "This piece sought to capture my meditations on maturing my female energy, through music preference. It intends to process the changes and intense recent growth alongside and in connection with some significant personal female inspiration figures (Lorde and Florence represented as guides) in my life. Also it helps me work through the massive girlcrush I have on Florence as well as the extensive awe I feel for Florence and the Machine 's new album (Everybody Scream), ..Lastly, it aids in exploring what that actually is, female energy.:. raw, tender, connective? Yes, and..dark and light, and beautiful, or intentionally spikey, yet real. So far, I identified heavily with the the cool, quirky, always evolving style of Lorde, whose albums (her newest cover art included here, as well as in original) always seemed to mirror exactly what was going on in my life - all the way to her very passionate, sexy undertones on the new album (Virgin). Then, I met Florence Welch's pure magic, her explosive, still quirky, but very self-aware female energy bursting out of every one of her songs on the new album (Florence and the Machine's Everybody Scream, similarly included and provided in original). I felt myself overwhelmed with awe and the invitation to look at my own female energy - which has become overboarding, rich, voluptuous, attractive, enticing, deep, but still quirky. I want to blurt out the colors, celebrate mind and emotion, just as Florence and the image do.  A self-portrait generated by feeding Lensa images of me through the last year, with my expanding magic and mind shining through tied everything together for this piece.  So inspiring. Guess I too am unfurling, becoming my whole size :) Watch this space... Album art cover and art by Florence and the Machine and Lorde (Virgin).",
    cover: "art/FemaleEnergy/cover.jpg",
    thumb: "art/FemaleEnergy/thumb.jpg",
    process: [
      { src: "art/FemaleEnergy/process/01.jpg", caption: "xx." },
      { src: "art/FemaleEnergy/process/02.jpg", caption: "xx." },
      { src: "art/FemaleEnergy/process/03.jpg", caption: "xx." },
      { src: "art/FemaleEnergy/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Flyer",
    title: "Flyer",
    date: "20264-01-026",
    medium: "Digital Art Flyer",
    tags: ["Digital", "Canva", "completed"],
    description:
      "Flyer created in Canva, for my 2024 Birthday.",
    cover: "art/Flyer/cover.jpg",
    thumb: "art/Flyer/thumb.jpg",
    process: [
      { src: "art/Flyer/process/01.jpg", caption: "xx." },
      { src: "art/Flyer/process/02.jpg", caption: "xx." },
      { src: "art/Flyer/process/03.jpg", caption: "xx." },
      { src: "art/Flyer/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Fuechse+Pelikane",
    title: "Füchse & Pelikane",
    date: "2021-05-22",
    medium: "Stabilo Pens and Markers on Paper",
    tags: ["Stabilo FineLiner", "Markers", "Paper", "completed"],
    description:
      "My first attempt at art again since high school..I have come a long way this year.",
    cover: "art/Fuechse+Pelikane/cover.jpg",
    thumb: "art/Fuechse+Pelikane/thumb.jpg",
    process: [
      { src: "art/Fuechse+Pelikane/process/01.jpg", caption: "xx." },
      { src: "art/Fuechse+Pelikane/process/02.jpg", caption: "xx." },
      { src: "art/Fuechse+Pelikane/process/03.jpg", caption: "xx." },
      { src: "art/Fuechse+Pelikane/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Furniture1_Vortex",
    title: "Furniture 1: Vortex",
    date: "2026-01-09",
    medium: "Acrylic Paints on Wood",
    tags: ["Acrylic", "Paints", "Wood", "completed"],
    description:
      "Painting my wooden couch table on a whim, fully resolved to throw it out if it looks shit..It doesn't, and here we are.",
    cover: "art/Furniture1_Vortex/cover.jpg",
    thumb: "art/Furniture1_Vortex/thumb.jpg",
    process: [
      { src: "art/Furniture1_Vortex/process/01.jpg", caption: "xx." },
      { src: "art/Furniture1_Vortex/process/02.jpg", caption: "xx." },
      { src: "art/Furniture1_Vortex/process/03.jpg", caption: "xx." },
      { src: "art/Furniture1_Vortex/process/04.jpg", caption: "xx." }
    ]
  },
/*
  {
    slug: "Furniture2",
    title: "Furniture 2",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Furniture2/cover.jpg",
    thumb: "art/Furniture2/thumb.jpg",
    process: [
      { src: "art/Furniture2/process/01.jpg", caption: "xx." },
      { src: "art/Furniture2/process/02.jpg", caption: "xx." },
      { src: "art/Furniture2/process/03.jpg", caption: "xx." },
      { src: "art/Furniture2/process/04.jpg", caption: "xx." }
    ]
  },

  {
    slug: "GourdLamp",
    title: "Gourd Lamp",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/GourdLamp/cover.jpg",
    thumb: "art/GourdLamp/thumb.jpg",
    process: [
      { src: "art/GourdLamp/process/01.jpg", caption: "xx." },
      { src: "art/GourdLamp/process/02.jpg", caption: "xx." },
      { src: "art/GourdLamp/process/03.jpg", caption: "xx." },
      { src: "art/GourdLamp/process/04.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "Heart",
    title: "Heart",
    date: "2026-03-02",
    medium: "Digital Art created by hand in Infinite Painted",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "A leisure time doodle on my Samsung  Galaxy Tab8 led to this nice piece which could easily be a postcard.",
    cover: "art/Heart/cover.jpg",
    thumb: "art/Heart/thumb.jpg",
    process: [
      { src: "art/Heart/process/01.jpg", caption: "xx." },
      { src: "art/Heart/process/02.jpg", caption: "xx." },
      { src: "art/Heart/process/03.jpg", caption: "xx." },
      { src: "art/Heart/process/04.jpg", caption: "xx." }
    ]
  },
/*
  {
    slug: "Iceland",
    title: "Iceland",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Iceland/cover.jpg",
    thumb: "art/Iceland/thumb.jpg",
    process: [
      { src: "art/Iceland/process/01.jpg", caption: "xx." },
      { src: "art/Iceland/process/02.jpg", caption: "xx." },
      { src: "art/Iceland/process/03.jpg", caption: "xx." },
      { src: "art/Iceland/process/04.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "Idarwald",
    title: "Idarwald",
    date: "2023-12-22",
    medium: "Acrylic Pens and Paint on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper"],
    description:
      "Honoring a special place and a special community.",
    cover: "art/Idarwald/cover.jpg",
    thumb: "art/Idarwald/thumb.jpg",
    process: [
      { src: "art/Idarwald/process/01.jpg", caption: "xx." },
      { src: "art/Idarwald/process/02.jpg", caption: "xx." },
      { src: "art/Idarwald/process/03.jpg", caption: "xx." },
      { src: "art/Idarwald/process/04.jpg", caption: "xx." }
    ]
  },
/*
  {
    slug: "LensaAI",
    title: "Lensa AI Art",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/LensaAI/cover.jpg",
    thumb: "art/LensaAI/thumb.jpg",
    process: [
      { src: "art/LensaAI/process/01.jpg", caption: "xx." },
      { src: "art/LensaAI/process/02.jpg", caption: "xx." },
      { src: "art/LensaAI/process/03.jpg", caption: "xx." },
      { src: "art/LensaAI/process/04.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "LetGo",
    title: "Let Go",
    date: "2024-09-28",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper"],
    description:
      "Inspired by a magical stencil, the practice (and practice, and practice..) of letting go, and by someone beautiful, wise, and nurturing (whose gift this art may become). #goyoga.",
    cover: "art/LetGo/cover.jpg",
    thumb: "art/LetGo/thumb.jpg",
    process: [
      { src: "art/LetGo/process/01.jpg", caption: "xx." },
      { src: "art/LetGo/process/02.jpg", caption: "xx." },
      { src: "art/LetGo/process/03.jpg", caption: "xx." },
      { src: "art/LetGo/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Lingua",
    title: "Lingua cordis - Lingua intellectus",
    date: "2023-04-22",
    medium: "Digital Art created with Lensa App and Infinite Painter",
    tags: ["Digital", "AI", "Lensa"],
    description:
      "Playing around with overlaying AI-created portraits (made with Lensa) with a visual interpretation of my current endeavor to learn to listen to my now opening heart - as opposed to always be guided by my mind.",
    cover: "art/Lingua/cover.jpg",
    thumb: "art/Lingua/thumb.jpg",
    process: [
      { src: "art/Lingua/process/01.jpg", caption: "xx." },
      { src: "art/Lingua/process/02.jpg", caption: "xx." },
      { src: "art/Lingua/process/03.jpg", caption: "xx." },
      { src: "art/Lingua/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "LoveWhenYouCry",
    title: "I love it when you cry",
    date: "2024-08-29",
    medium: "Digital Art created with Infinite Painter and Samsung Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "in progress"],
    description:
      "Exploring self-image and emotions in my art.. inspired by the quiet horror of accepting words from people who hurt us at face value.. or not..",
    cover: "art/LoveWhenYouCry/cover.jpg",
    thumb: "art/LoveWhenYouCry/thumb.jpg",
    process: [
      { src: "art/LoveWhenYouCry/process/01.jpg", caption: "xx." },
      { src: "art/LoveWhenYouCry/process/02.jpg", caption: "xx." },
      { src: "art/LoveWhenYouCry/process/03.jpg", caption: "xx." },
      { src: "art/LoveWhenYouCry/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "LSD80",
    title: "LSD 80",
    date: "2023-04-19",
    medium: "Digital Painting created with Infinite Painter",
    tags: ["Digital", "Handdrawn", "Samsung Tablet"],
    description:
      "Art created for the logo of the event honoring the 80th anniversary of the Bicycle Day in Basel, Switzerland.",
    cover: "art/LSD80/cover.jpg",
    thumb: "art/LSD80/thumb.jpg",
    process: [
      { src: "art/LSD80/process/01.jpg", caption: "xx." },
      { src: "art/LSD80/process/02.jpg", caption: "xx." },
      { src: "art/LSD80/process/03.jpg", caption: "xx." },
      { src: "art/LSD80/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Lyrics1_Peng",
    title: "Lyrics 1: Kapt'n Peng",
    date: "2024-02-03",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed"],
    description:
      "The lyrics of Käptn Peng's Pförtner needed a monument, too.",
    cover: "art/Lyrics1_Peng/cover.jpg",
    thumb: "art/Lyrics1_Peng/thumb.jpg",
    process: [
      { src: "art/Lyrics1_Peng/process/01.jpg", caption: "xx." },
      { src: "art/Lyrics1_Peng/process/02.jpg", caption: "xx." },
      { src: "art/Lyrics1_Peng/process/03.jpg", caption: "xx." },
      { src: "art/Lyrics1_Peng/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Lyrics2_Tool",
    title: "Lyrics 2: Tool",
    date: "2025-04-27",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed"],
    description:
      "The lyrics to Tool's Sober are incrtedibly powerful and needed to be represented in art.",
    cover: "art/Lyrics2_Tool/cover.jpg",
    thumb: "art/Lyrics2_Tool/thumb.jpg",
    process: [
      { src: "art/Lyrics2_Tool/process/01.jpg", caption: "xx." },
      { src: "art/Lyrics2_Tool/process/02.jpg", caption: "xx." },
      { src: "art/Lyrics2_Tool/process/03.jpg", caption: "xx." },
      { src: "art/Lyrics2_Tool/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "Lyrics3_Puscifer",
    title: "Lyrics 3: Puscifer",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "in progress"],
    description:
      "Describe your piece.",
    cover: "art/Lyrics3_Puscifer/cover.jpg",
    thumb: "art/Lyrics3_Puscifer/thumb.jpg",
    process: [
      { src: "art/Lyrics3_Puscifer/process/01.jpg", caption: "xx." },
      { src: "art/Lyrics3_Puscifer/process/02.jpg", caption: "xx." },
      { src: "art/Lyrics3_Puscifer/process/03.jpg", caption: "xx." },
      { src: "art/Lyrics3_Puscifer/process/04.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "Meditations1_T+C",
    title: "Meditations 1: Trench & Cuddles",
    date: "2023-04-18",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "art/Meditations1_T+C/cover.jpg",
    thumb: "art/Meditations1_T+C/thumb.jpg",
    process: [
      { src: "art/Meditations1_T+C/process/01.jpg", caption: "xx." },
      { src: "art/Meditations1_T+C/process/02.jpg", caption: "xx." },
      { src: "art/Meditations1_T+C/process/03.jpg", caption: "xx." },
      { src: "art/Meditations1_T+C/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations2_L+Y",
    title: "Meditations 2: Lucy & Yanic",
    date: "2023-04-25",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "art/Meditations2_L+Y/cover.jpg",
    thumb: "art/Meditations2_L+Y/thumb.jpg",
    process: [
      { src: "art/Meditations2_L+Y/process/01.jpg", caption: "xx." },
      { src: "art/Meditations2_L+Y/process/02.jpg", caption: "xx." },
      { src: "art/Meditations2_L+Y/process/03.jpg", caption: "xx." },
      { src: "art/Meditations2_L+Y/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations3_M",
    title: "Meditations 3: Mich",
    date: "2023-05-11",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "art/Meditations3_M/cover.jpg",
    thumb: "art/Meditations3_M/thumb.jpg",
    process: [
      { src: "art/Meditations3_M/process/01.jpg", caption: "xx." },
      { src: "art/Meditations3_M/process/02.jpg", caption: "xx." },
      { src: "art/Meditations3_M/process/03.jpg", caption: "xx." },
      { src: "art/Meditations3_M/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations4_Meg",
    title: "Meditations 4: Megan",
    date: "2023-12-08",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "art/Meditations4_Meg/cover.jpg",
    thumb: "art/Meditations4_Meg/thumb.jpg",
    process: [
      { src: "art/Meditations4_Meg/process/01.jpg", caption: "xx." },
      { src: "art/Meditations4_Meg/process/02.jpg", caption: "xx." },
      { src: "art/Meditations4_Meg/process/03.jpg", caption: "xx." },
      { src: "art/Meditations4_Meg/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations5_SZ",
    title: "Meditations 5: Sebastian",
    date: "2026-08-05",
    medium: "Acrylic Pens and MixedMedia on Canvas",
    tags: ["Acrylic", "Pens", "MixedMedia", "Canvas", "completed"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed. This one was especially meaningful to me. <3",
    cover: "art/Meditations5_SZ/cover.jpg",
    thumb: "art/Meditations5_SZ/thumb.jpg",
    process: [
      { src: "art/Meditations5_SZ/process/01.jpg", caption: "xx." },
      { src: "art/Meditations5_SZ/process/02.jpg", caption: "xx." },
      { src: "art/Meditations5_SZ/process/03.jpg", caption: "xx." },
      { src: "art/Meditations5_SZ/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations6_H",
    title: "Meditations 6: Hannah",
    date: "2024-01-18",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "in progress"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "art/Meditations6_H/cover.jpg",
    thumb: "art/Meditations6_H/thumb.jpg",
    process: [
      { src: "art/Meditations6_H/process/01.jpg", caption: "xx." },
      { src: "art/Meditations6_H/process/02.jpg", caption: "xx." },
      { src: "art/Meditations6_H/process/03.jpg", caption: "xx." },
      { src: "art/Meditations6_H/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations7_L",
    title: "Meditations 7: Leo",
    date: "2026-03-01",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "This piece was a birh gift to the son of a colleague, and therefore was a special case of the meditations, because I envisioned what he would become, instead of what I know about him.",
    cover: "art/Meditations7_L/cover.jpg",
    thumb: "art/Meditations7_L/thumb.jpg",
    process: [
      { src: "art/Meditations7_L/process/01.jpg", caption: "xx." },
      { src: "art/Meditations7_L/process/02.jpg", caption: "xx." },
      { src: "art/Meditations7_L/process/03.jpg", caption: "xx." },
      { src: "art/Meditations7_L/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations8_Dad",
    title: "Meditations 8: Dad",
    date: "2026-03-02",
    medium: "Acrylic Pens and Paints on Canvas",
    tags: ["Acrylic", "Pens", "Paints", "Canvas", "completed", "gifted"],
    description:
      "A gift to my father on his day of retirement.",
    cover: "art/Meditations8_Dad/cover.jpg",
    thumb: "art/Meditations8_Dad/thumb.jpg",
    process: [
      { src: "art/Meditations8_Dad/process/01.jpg", caption: "xx." },
      { src: "art/Meditations8_Dad/process/02.jpg", caption: "xx." },
      { src: "art/Meditations8_Dad/process/03.jpg", caption: "xx." },
      { src: "art/Meditations8_Dad/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "MuchnessInc",
    title: "Muchness Inc.",
    date: "2023-02-23",
    medium: "Digital Art created using Midjourney and Infinite Painter",
    tags: ["Digital", "AI", "Handdrawn", "Samsung Tablet"],
    description:
      "The source image was generated in Midjourney, prompting it to deliver a picture of a bower bird wearing a crown. The image picked was then overlaid with modifications in Infinite Painter and is now used as the logo of the Etsy shop Muchness Inc.",
    cover: "art/MuchnessInc/cover.jpg",
    thumb: "art/MuchnessInc/thumb.jpg",
    process: [
      { src: "art/MuchnessInc/process/01.jpg", caption: "xx." },
      { src: "art/MuchnessInc/process/02.jpg", caption: "xx." },
      { src: "art/MuchnessInc/process/03.jpg", caption: "xx." },
      { src: "art/MuchnessInc/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "NathaliesLounge",
    title: "Nathalie's Lounge",
    date: "2023-08-09",
    medium: "Acrylic Paint on Paper",
    tags: ["Acrylic", "Pens", "Paper"],
    description:
      "Art in support of a planned Burning Man Camp idea.",
    cover: "art/NathaliesLounge/cover.jpg",
    thumb: "art/NathaliesLounge/thumb.jpg",
    process: [
      { src: "art/NathaliesLounge/process/01.jpg", caption: "xx." },
      { src: "art/NathaliesLounge/process/02.jpg", caption: "xx." },
      { src: "art/NathaliesLounge/process/03.jpg", caption: "xx." },
      { src: "art/NathaliesLounge/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "NeonSpiro",
    title: "Neon Spiro",
    date: "2026-036-24",
    medium: "Acrylic Pens and Spirography on Canvas",
    tags: ["Acrylic", "Pens", "Spirography", "Canvas", "completed"],
    description:
      "DTrying out my new Spirograph worked pretty well :)",
    cover: "art/NeonSpiro/cover.jpg",
    thumb: "art/NeonSpiro/thumb.jpg",
    process: [
      { src: "art/NeonSpiro/process/01.jpg", caption: "xx." },
      { src: "art/NeonSpiro/process/02.jpg", caption: "xx." },
      { src: "art/NeonSpiro/process/03.jpg", caption: "xx." },
      { src: "art/NeonSpiro/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Origami",
    title: "Origami",
    date: "2021-11-01",
    medium: "Folded Paper and Glue, sometimes Paints",
    tags: ["Paper", "Glue", "Paints", "completed", "ongoing when needed"],
    description:
      "Origami FLowers are nice excerside for the hand and make great little gifts. I get motivated off and on to ctreate some new ones.",
    cover: "art/Origami/cover.jpg",
    thumb: "art/Origami/thumb.jpg",
    process: [
      { src: "art/Origami/process/01.jpg", caption: "xx." },
      { src: "art/Origami/process/02.jpg", caption: "xx." },
      { src: "art/Origami/process/03.jpg", caption: "xx." },
      { src: "art/Origami/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Roots",
    title: "Roots",
    date: "2024-09-12",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "gifted"],
    description:
      "Intended as a gift, this is a second piece based on the same central stencil, with sides and shapes signifying roots and wings this beautiful person has and grew.",
    cover: "art/Roots/cover.jpg",
    thumb: "art/Roots/thumb.jpg",
    process: [
      { src: "art/Roots/process/01.jpg", caption: "xx." },
      { src: "art/Roots/process/02.jpg", caption: "xx." },
      { src: "art/Roots/process/03.jpg", caption: "xx." },
      { src: "art/Roots/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Schplomi_Collab",
    title: "Schplomi (Collaboration)",
    date: "2025-04-01",
    medium: "Acrylic Pens on Canvas and Paper",
    tags: ["Acrylic", "Pens", "Canvas", "Paper", "completed", "gifted"],
    description:
      "This collaboration piece is finally off to its rightful owner today - the originator of the lyrics, Schplomi/atomglomi. Thank you for the inspiration and for letting me use your words.",
    cover: "art/Schplomi_Collab/cover.jpg",
    thumb: "art/Schplomi_Collab/thumb.jpg",
    process: [
      { src: "art/Schplomi_Collab/process/01.jpg", caption: "xx." },
      { src: "art/Schplomi_Collab/process/02.jpg", caption: "xx." },
      { src: "art/Schplomi_Collab/process/03.jpg", caption: "xx." },
      { src: "art/Schplomi_Collab/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "Sewing",
    title: "Sewing",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Sewing/cover.jpg",
    thumb: "art/Sewing/thumb.jpg",
    process: [
      { src: "art/Sewing/process/01.jpg", caption: "xx." },
      { src: "art/Sewing/process/02.jpg", caption: "xx." },
      { src: "art/Sewing/process/03.jpg", caption: "xx." },
      { src: "art/Sewing/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "SliceofParadise",
    title: "Slice of Paradise",
    date: "2025-03-12",
    medium: "Acrylic Pens, Paints, and MixedMedia on Canvas",
    tags: ["Acrylic", "Pens", "Paints", "MixedMedia", "Canvas", "in progress"],
    description:
      "Experiment drawing a human, featuring trinkets, brought..well.. from paradise.",
    cover: "art/SliceofParadise/cover.jpg",
    thumb: "art/SliceofParadise/thumb.jpg",
    process: [
      { src: "art/SliceofParadise/process/01.jpg", caption: "xx." },
      { src: "art/SliceofParadise/process/02.jpg", caption: "xx." },
      { src: "art/SliceofParadise/process/03.jpg", caption: "xx." },
      { src: "art/SliceofParadise/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "Soldering",
    title: "Soldering",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Soldering/cover.jpg",
    thumb: "art/Soldering/thumb.jpg",
    process: [
      { src: "art/Soldering/process/01.jpg", caption: "xx." },
      { src: "art/Soldering/process/02.jpg", caption: "xx." },
      { src: "art/Soldering/process/03.jpg", caption: "xx." },
      { src: "art/Soldering/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "TattooMagic",
    title: "Tattoo Magic",
    date: "2025-11-23",
    medium: "Acrylic Pens on Canvas",
    tags: ["Acrylic", "Pens", "Canvas", "completed"],
    description:
      "In celebration of symmetry and biology, art in artificial structures, juice in round biology, and patience for process, this piece used tattoo stencil inspiration (art on my shoulders created by the prodigy and dear friend, @weltenwechsel_tattoos), honoring the further development of a theme represented in some of my art as well as a few tattoos on my body, always placed right/left of the midline: biological/artificial - magic/madness - body/spirit - matter/mind. I can see how this will go. I know the pieces fit.",
    cover: "art/TattooMagic/cover.jpg",
    thumb: "art/TattooMagic/thumb.jpg",
    process: [
      { src: "art/TattooMagic/process/01.jpg", caption: "xx." },
      { src: "art/TattooMagic/process/02.jpg", caption: "xx." },
      { src: "art/TattooMagic/process/03.jpg", caption: "xx." },
      { src: "art/TattooMagic/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Treedom",
    title: "Treedom",
    date: "2024-07-11",
    medium: "Acrylic Paint and Oil on Canvas",
    tags: ["Oil", "Acrylic paint", "Canvas", "completed"],
    description:
      "Wow..this has been a long time coming..I started this back in 2022: my second painting, my first in oil. Now it is finally completed, the unfinished image in a pile between other more advanced pieces had been calling me again this week. The original inspo was classical Starry Night, as well as my favority painting, CDF's Monk by the sea; plus a contemplation of the view out of my previous living room with the massive windows and moving door looking out over France on the 10th floor I liked to sit by, and the concept of the universe watching over things working out the way they should. Originally envisioned as the universe the person was gazing at, it turned into a tree with the person at its core and roots of things they carry along.. The tricky bit introducing the breaks and prolonbging the painting time was the use of oil paints (which in regular air will take 15 days to dry properly). This resulted in me losing interest for a while and moving on with something else a few times. The piece changed many times during its creation, but I'm very happy with it now.",
    cover: "art/Treedom/cover.jpg",
    thumb: "art/Treedom/thumb.jpg",
    process: [
      { src: "art/Treedom/process/01.jpg", caption: "xx." },
      { src: "art/Treedom/process/02.jpg", caption: "xx." },
      { src: "art/Treedom/process/03.jpg", caption: "xx." },
      { src: "art/Treedom/process/04.jpg", caption: "xx." }
    ]
  },
  /*
  {
    slug: "Update",
    title: "Update",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "art/Update/cover.jpg",
    thumb: "art/Update/thumb.jpg",
    process: [
      { src: "art/Update/process/01.jpg", caption: "xx." },
      { src: "art/Update/process/02.jpg", caption: "xx." },
      { src: "art/Update/process/03.jpg", caption: "xx." },
      { src: "art/Update/process/04.jpg", caption: "xx." }
    ]
  },
  */
  {
    slug: "Vegas",
    title: "Vegas",
    date: "2024-02-01",
    medium: "Acrylic Paints and Pens and MixedMedia on Canvas",
    tags: ["Acrylic", "Paints", "Pens", "MixedMedia", "Canvas", "in progress"],
    description:
      "A piece themed at visiting the Grand Canyon for my birthday in 2022.",
    cover: "art/Vegas/cover.jpg",
    thumb: "art/Vegas/thumb.jpg",
    process: [
      { src: "art/Vegas/process/01.jpg", caption: "xx." },
      { src: "art/Vegas/process/02.jpg", caption: "xx." },
      { src: "art/Vegas/process/03.jpg", caption: "xx." },
      { src: "art/Vegas/process/04.jpg", caption: "xx." }
    ]
  },
  {
    slug: "YourLife",
    title: "Your Life",
    date: "20256-01-01",
    medium: "Acrylic Pens and Paints onto a poster base",
    tags: ["Acrylic", "Pens", "Paints", "Posterbase", "in progress"],
    description:
      "Work in preparation for a potential art exhibit alongside or for an event organized by the amazing, talented, wise, awe-inspiring elin_im_wunderland.",
    cover: "art/YourLife/cover.jpg",
    thumb: "art/YourLife/thumb.jpg",
    process: [
      { src: "art/YourLife/process/01.jpg", caption: "xx." },
      { src: "art/YourLife/process/02.jpg", caption: "xx." },
      { src: "art/YourLife/process/03.jpg", caption: "xx." },
      { src: "art/YourLife/process/04.jpg", caption: "xx." }
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
