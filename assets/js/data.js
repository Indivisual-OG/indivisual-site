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
 * 4. Create a /Process/ subfolder and put your work-in-progress
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/AngerOut/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/2.jpg", caption: "Almost done." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/3.jpg", caption: "Without focus yet." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/4.jpg", caption: "Original direction." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/1a.jpg", caption: "Hidden sides plain to see." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/1b.jpg", caption: "Other side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/1c.jpg", caption: "Third side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/AngerOut/Process/1d.jpg", caption: "Fourth side." }
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
    tags: ["Acrylic", "Pens", "Paint", "MixedMedia", "Paper", "completed"],
    description:"Processing my first Aphex Twin live experience in Bristol (Forward's Festival) through Art (completed). The Aphex Twin set at #forwardsfestival in Bristol was a monument to nonverbal communication through sound and video that felt like the artist had understood the limit of the framerate at which my mind is processing information, playing with afterimages and overlaying beats. In this way, he was able to edge this boundary, constantly pushing for it to allow more room. To me, the experience of the music and accompanying art was an invitation for intellectual discourse not based on words. It was an enticement to engage with a genius mind that is not bound by a need to please and which has the ability to create a space of his own choosing within music. The set opened this container for me in which I could experience and appreciate utter confusion, astonishment and chaos safely. There was a summary in there of what it must be like to know you are dying, followed instantly by the most whimsical AF tunes, insights into (maybe) what its like to be an artist and their personal story in current pop culture society, and an intense quick trip through all kinds of styles of electronic music that felt like a good fuck. When it was over and the music, lights, and lasers were just turned off like a flash, the 10k crowd needed a couple minutes before they could collect themselves enough to even cheer and applaud.  I have been looking for words that do this experience justice since then and hope I am doing an OK job. Regardless - it was incredible and I had a fucking blast..I think. :D I am adding some art by cfflepp that was posted to Aphex Twin's FB page by someone trying to express what the music may look like and I feel it was quite accurate. (Source: http://andyamholst.com/2022/02/22/zwei-notenblaetter-2). In case you have a VR headset, someone recorded the Field Day show on 360 Video with Spatial Audio: https://youtu.be/fkmo-LseN0c?si=7oJ8GeqhyQed3fm2. For nerds, this RedditPost makes your little hearts happy with the setlist and Spotify Support Playlist: https://reddit.com/r/aphextwin/s/FHRRZffy.",   
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Aphex/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Process/1.jpg", caption: "Pretty under UV Light." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Process/4.jpg", caption: "Clean before the final style is added." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Process/3.jpg", caption: "Underway to being amazing :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Process/2.jpg", caption: "Early bravery." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Aphex/Process/0.jpg", caption: "First steps." }
    ]
  },
  {
    slug: "Banksyland_AbomiNation",
    title: "Banksyland: AbomiNation",
    date: "2023-01-15",
    medium: "Collage and Acrylic Paint on Canvas",
    tags: ["Collage", "Acrylic", "Canvas", "completed"],
    description:
      "The story of this piece: Luring the enthusiast in me with the likeness of the name to the famed *Dismaland* by original artist Banksy and peers a while back, I went, uninformed, excited, almost triggered by streetart at its finest, promised to be presented while I visited San Diego end of December. How disappointed I was, and how offended, angry even. The exhibition was simple theft, traveling through the US, quotes printed in big letters, casts of what looks like original pieces, and a poster full of art that's ever so slightly altered to evoke the artist's genius, but is not quite be the same image. The horrified exit through the gift shop was an offense all by itself, where the spray cans that had been used to spray the show's name everywhere around the venue on the sidewalks and on the walls inside the *gallery* were sold as swag for 30-fucking-$. AbomiNation USA at its' most ugly, squeezing original, subversive art until money falls out, leaving the pieces unrecognizable, even to those I would consider of the capacity to process what happens right in front of their eyes. Had the joke been meta, god, what a genius. Sadly, it wasn't, and this is just a money machine. The experience had me steal one of the posters and create this piece as a statement, representing my own first steps into the journey of art.Go fuck yourself, Banksyland, and no-thank-you at all for the inspiration. For a more nuanced analysis from less passionate people, read: https://www.sandiegouniontribune.com/entertainment/visual-arts/story/2022-12-04/banksyland-and-the-proliferation-of-the-immersive-art-experience.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Banksyland_AbomiNation/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/6.jpg", caption: "Amazing under UV Lights." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/5b.jpg", caption: "UV light look is always a consideration." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/5.jpg", caption: "Nearing completion..or is it?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/4.jpg", caption: "Collage pieces II." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/3.jpg", caption: "Collage pieces I." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/2.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/1.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Banksyland_AbomiNation/Process/0.jpg", caption: "So it begins - with a stolen poster and some Burner art (from FTE)." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BeginAgain/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/6.jpg", caption: "Always in progress with each train ride. I enjoy the imprecision of the moving vehicle that is introduced to the draw strokes." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/5.jpg", caption: "Slowly evolving II." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/4.jpg", caption: "Slowly evolving I." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/3.jpg", caption: "How the process looks on the tablet." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/2.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BeginAgain/Process/1.jpg", caption: "First strokes are crude." }
    ]
  },
  {
    slug: "BlissScramble",
    title: "Blissful Scramble",
    date: "2024-08-10",
    medium: "Acrylic Pens and Paint on Canvas",
    tags: ["Acrylic", "Pens", "Paints", "Canvas", "completed"],
    description:
      "Inspired by a psychedelic experience at Ozora Festival 2024.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BlissScramble/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/13.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/12.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/11.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/10.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BlissScramble/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Body",
    title: "Body",
    date: "2024-06-01",
    medium: "Fabric and Acrylic Paints on Canvas",
    tags: ["Acrylic", "Paints", "Fabric", "completed"],
    description:
      "Part of some lingerie that passionately got ripped to pieces and made its way onto a canvas for some fish scale-inspired art.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Body/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Process/5.jpg", caption: "Almost perfect." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Process/4.jpg", caption: "Nearing completion..maybe?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Process/3.jpg", caption: "Experimenting with mixtures." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Process/2a.jpg", caption: "Filling in paint." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Body/Process/1.jpg", caption: "Naked fabric of a lingerie item I wore to my first Kink party." }
    ]
  },
  {
    slug: "BoredSymmetry1",
    title: "Bored Symmetry 1",
    date: "2024-03-15",
    medium: "Acrylic Pens, Paints, and various Pencils and Markers on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed"],
    description:
      "Ever wonder how art gets created? This one is an example of *from boredom, based on opportunity.* Saw this FB post, liked the pattern (Wave Optic diagram), traced it, fucked around, found out, painted over, liked it. Voilà.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BoredSymmetry1/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry1/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry2_Deity/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BoredSymmetry2_Deity/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry2_Deity/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry2_Deity/Process/2.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BoredSymmetry3/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BoredSymmetry4/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Blanket/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BurningMan_Blanket/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Blanket/Process/1.jpg", caption: "A neat digital interface to create such cool images that can then be printed onto fabric (a blanket)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Blanket/Process/2.jpg", caption: "Original direction of the image, sporting Burning Man imagery." }
    ]
  },
  {
    slug: "BurningMan_Sticker",
    title: "BurningMan - Sticker",
    date: "2018-07-02",
    medium: "Digital Art printed on see-through stickers",
    tags: ["Sticky paper", "Digital", "completed", "partly gifted"],
    description:
      "For the Metamorphoses theme of Burning Man 2018, I created a sticker about the life cycle of a frog, reading *So froggin meta*, which only very few people actually got as a joke. I liked it :D",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Sticker/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BurningMan_Sticker/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Sticker/Process/2.jpg", caption: "The interface that allowed me to print my design onto a see-through sticker material." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurningMan_Sticker/Process/1.jpg", caption: "A neat design - which noone got :D Total Nerd-levels.. I loved it :D" }
    ]
  },
  {
    slug: "BurnLocal",
    title: "Think Global - Burn Local",
    date: "2023-05-22",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Celebrating a global mindset alongside local awareness for Burner culture.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurnLocal/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/BurnLocal/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurnLocal/Process/2.jpg", caption: "I managed to keep this quite logo-y and leave white spaces." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/BurnLocal/Process/1.jpg", caption: "I got inspired by graffitti-style images." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/CCC_NieSie/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/6.jpg", caption: "Endlessly incomplete, but already pretty shapely." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/5.jpg", caption: "Working out focus areas." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/4.jpg", caption: "Underway to be great & the idea arises to sell this as a silent auction piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/3.jpg", caption: "Taking good shape." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/2.jpg", caption: "Adding stickers and material collected at different Chaos events." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/CCC_NieSie/Process/1.jpg", caption: "Original poster found left hanging when clean-up of the 39C3 congress was already far advanced. I got lucky :)" }
    ]
  },
  {
    slug: "Chaos_Order",
    title: "Chaos & Order",
    date: "2023-05-08",
    medium: "Acrylic Paint on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "I love looking at art from far away, normal distance, and up close and try to satisfy the details of each of those perspectives (like pinch-zooming into your pics on the phone).",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Chaos_Order/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Chaos_Order/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Chaos_Order/Process/3.jpg", caption: "The intention was to have the pattern look like liquid had run through it, creating entropy/chaos from order." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Chaos_Order/Process/2a.jpg", caption: "A small piece, this was really fun toi draw and the first time I used different media (paint and pens, in this case)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Chaos_Order/Process/2.jpg", caption: "Once again, I could not leave white spaces :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Chaos_Order/Process/1.jpg", caption: "I like the clarity of the piece, despite so much going on." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage1_Pusheen/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Collage1_Pusheen/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage1_Pusheen/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Collage2_Decommodify",
    title: "Collage 2: Decommodify",
    date: "2023-12-19",
    medium: "Acrylic Pens, Collage, and MixedMedia on Canvas",
    tags: ["Collage", "MixedMedia", "Acrylic", "Pens", "Canvas", "completed", "gifted"],
    description:
      "A collage and mixed media piece that inspired my art journey, made from paper pieces collected over years, printed with things and advertising concepts that aim to make people happy, removed from the original product packaging. Perfect for a statement about Decommodification and leaving Capitalism behind. Gifted to the amazing Elin.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage2_Decommodify/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Collage2_Decommodify/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage2_Decommodify/Process/1.jpg", caption: "I collected the pieces for this collage for an insanely long time. THe topic was loose the intention of information to seemingly make people happy and smile when buying a product. THe black framing has become an integral part to each piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage2_Decommodify/Process/2.jpg", caption: "The piece lacked aim and vision as I was making the collage, so the writing over the top was a much-needed bold move." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage2_Decommodify/Process/3.jpg", caption: "Collages become more intricate the longer I work on them :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Collage2_Decommodify/Process/4.jpg", caption: "Beginnings." }
    ]
  },
  {
    slug: "ConfusionAge",
    title: "Why?: Confusion Age",
    date: "2024-04-01",
    medium: "Acrylic Pens on Canvas",
    tags: ["Acrylic", "Pens", "Canvas", "completed"],
    description:
      "Asking WHY some people mistreat others without care, and expressing being very confused by this mistreatment.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/ConfusionAge/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Process/2a.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/ConfusionAge/Process/1.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/EarlyWork/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/EarlyWork/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Elindentity/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/2a.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Elindentity/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Eukel",
    title: "Eukel",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Eukel/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Eukel/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Eukel/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Eukel/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Eukel/Process/3.jpg", caption: "xx." }
    ]
  },
/*
  {
    slug: "Exhibition_Kulti",
    title: "Exhibition im Kulti",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Exhibition_Kulti/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." }
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
      "This piece sought to capture my meditations on maturing my female energy, through music preference. It intends to process the changes and intense recent growth alongside and in connection with some significant personal female inspiration figures - Lorde and Florence represented as guides - in my life. Also it helps me work through the massive girlcrush I have on Florence as well as the extensive awe I feel for Florence and the Machine.s new album -Everybody Scream. Lastly, it aids in exploring what that actually is, female energy: raw, tender, connective? Yes, and..dark and light, and beautiful, or intentionally spikey, yet real. So far, I identified heavily with the the cool, quirky, always evolving style of Lorde, whose albums - her newest cover art included here, as well as in original- always seemed to mirror exactly what was going on in my life - all the way to her very passionate, sexy undertones on the new album, Virgin. Then, I met Florence Welch.s pure magic, her explosive, still quirky, but very self-aware female energy bursting out of every one of her songs on the new album - Florence and the Machine.s Everybody Scream, similarly included and provided in original. I felt myself overwhelmed with awe and the invitation to look at my own female energy - which has become overboarding, rich, voluptuous, attractive, enticing, deep, but still quirky. I want to blurt out the colors, celebrate mind and emotion, just as Florence and the image do.  A self-portrait generated by feeding Lensa images of me through the last year, with my expanding magic and mind shining through tied everything together for this piece.  So inspiring. Guess I too am unfurling, becoming my whole size :) Watch this space... Album art cover and art by Florence and the Machine and Lorde.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/FemaleEnergy/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/1.jpg", caption: "Lorde contributing artwork as inspiration." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/2.jpg", caption: "The cover of the new Florence and the Machine Album (Everybody Screams) offered the inspirational art that had me start this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/3.jpg", caption: "My own AI art as inspiration to be overlaid over the two artists artwork." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/4.jpg", caption: "Finished piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/5.jpg", caption: "Symmetry in the combination of the contrubuting artworks." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/6.jpg", caption: "Sometimes, changing a piece in this major way requiresy some bravery." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/7.jpg", caption: "Foil overlayy helps with the design." },            
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/8.jpg", caption: "Secret tips for perfect images." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/9.jpg", caption: "Painted off the screen onto the foil..cheating? Naw..Method! :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/10.jpg", caption: "Underway to being amazing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/10b.jpg", caption: "The cover art at the basis of this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/11.jpg", caption: "Pristine transfer, was almost hard to paint over." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/12.jpg", caption: "That skirt is an insane mystery of a three-domensional object to paint in 2D." },     
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/FemaleEnergy/Process/13.jpg", caption: "The first strokes." }
    ]
  },
  {
    slug: "Flyer",
    title: "Flyer",
    date: "2024-01-26",
    medium: "Digital Art Flyer",
    tags: ["Digital", "Canva", "completed"],
    description:
      "Flyer created in Canva, for my 2024 Birthday.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Flyer/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Flyer/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Fuechse+Pelikane/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Fuechse+Pelikane/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Fuechse+Pelikane/Process/4.jpg", caption: "Quirky paper." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Fuechse+Pelikane/Process/3.jpg", caption: "Heavy marker use is experimental." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Fuechse+Pelikane/Process/2.jpg", caption: "Clear lines." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Fuechse+Pelikane/Process/1.jpg", caption: "Lets see where this goes.." }
    ]
  },
  {
    slug: "Furniture1_Vortex",
    title: "Furniture 1 - Vortex",
    date: "2026-01-09",
    medium: "Acrylic Paints on Wood",
    tags: ["Acrylic", "Paints", "Wood", "completed"],
    description:
      "Painting my wooden couch table on a whim, fully resolved to throw it out if it looks shit..It doesn't, and here we are.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture1_Vortex/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Furniture1_Vortex/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture1_Vortex/Process/1.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Furniture2/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Furniture2/Process/x.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "GourdLamp",
    title: "Gourd Lamp",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/GourdLamp/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/GourdLamp/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/GourdLamp/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Heart",
    title: "Heart",
    date: "2026-03-02",
    medium: "Digital Art created by hand in Infinite Painted",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "A leisure time doodle on my Samsung  Galaxy Tab8 led to this nice piece which could easily be a postcard.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Heart/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Heart/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Heart/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Iceland",
    title: "Iceland",
    date: "2026-03-02",
    medium: "Digital painting",
    tags: ["tag", "tag", "tag"],
    description:
      "Describe your piece.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Iceland/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Iceland/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Iceland/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Idarwald",
    title: "Idarwald",
    date: "2023-12-22",
    medium: "Acrylic Pens and Paint on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed", "gifted"],
    description:
      "Honoring a special place and a special community.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Idarwald/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/1.jpg", caption: "Amazing under UV light." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/7.jpg", caption: "Almost complete..maybe." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/6.jpg", caption: "On the way to filling the white spaces with magic." },   
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/5.jpg", caption: "Sunny pallette." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/4.jpg", caption: "Symmetries." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/3.jpg", caption: "Wide open directions this picture could take." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Idarwald/Process/2.jpg", caption: "Basic message of the picture as a guiding principle." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/LensaAI/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LensaAI/Process/x.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "LetGo",
    title: "Let Go",
    date: "2024-09-28",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed", "gifted"],
    description:
      "Inspired by a magical stencil, the practice (and practice, and practice..) of letting go, and by someone beautiful, wise, and nurturing (whose gift this art may become). #goyoga.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/LetGo/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/1.jpg", caption: "Intentionally gorgeous under UV light - which is one of the dimensions I paint with." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/2a.jpg", caption: "Different light brings out different qualities in the almost completed artwork." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/2b.jpg", caption: "I liked the depth the spiral created." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/4.jpg", caption: "The bit in the middle was a repurposed tattoo stenil." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/3.jpg", caption: "Bravely expanding the design." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/5.jpg", caption: "I would love to be able to stay with simplicity, but depth and complexity is more fun." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LetGo/Process/6.jpg", caption: "Off to a good start." }
    ]
  },
  {
    slug: "Lingua",
    title: "Lingua cordis - Lingua intellectus",
    date: "2023-04-22",
    medium: "Digital Art created with Lensa App and Infinite Painter",
    tags: ["Digital", "AI", "Lensa", "completed"],
    description:
      "Playing around with overlaying AI-created portraits (made with Lensa) with a visual interpretation of my current endeavor to learn to listen to my now opening heart - as opposed to always be guided by my mind.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lingua/Cover.jpg", "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lingua/Cover2.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Lingua/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lingua/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lingua/Process/2.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LoveWhenYouCry/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/LoveWhenYouCry/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LoveWhenYouCry/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LoveWhenYouCry/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LoveWhenYouCry/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LoveWhenYouCry/Process/4.jpg", caption: "xx." }
    ]
  },
  {
    slug: "LSD80",
    title: "LSD 80",
    date: "2023-04-19",
    medium: "Digital Painting created with Infinite Painter",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "Art created for the logo of the event honoring the 80th anniversary of the Bicycle Day in Basel, Switzerland.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/LSD80/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/LSD80/Process/5.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Lyrics1_Peng/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics1_Peng/Process/1.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Lyrics2_Tool/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/10.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/11.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics2_Tool/Process/12.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Lyrics3_Puscifer/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Lyrics3_Puscifer/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations1_T+C/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations1_T+C/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations1_T+C/Process/2.jpg", caption: "I did not take many progress pictures here because I was working on another piece as well, while still giving this my undivided attention in-between." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations1_T+C/Process/1.jpg", caption: "The basis was simple." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations2_L+Y/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations2_L+Y/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations2_L+Y/Process/1.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations3_M/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations3_M/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations3_M/Process/4.jpg", caption: "I tend to continue with a piece until it trulz is perfect, and then leave it for a bit to see if something still needs to be changed." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations3_M/Process/3.jpg", caption: "Underway for an intricate level of detail." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations3_M/Process/2.jpg", caption: "I like filling in the white sapces." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations3_M/Process/1.jpg", caption: "First progress pic I took of this piece." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations4_Meg/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations4_Meg/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations4_Meg/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations4_Meg/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Meditations5_SZ",
    title: "Meditations 5: SZ",
    date: "2026-08-05",
    medium: "Acrylic Pens and MixedMedia on Canvas",
    tags: ["Acrylic", "Pens", "MixedMedia", "Canvas", "completed"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed. This one was especially meaningful to me. <3",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations5_SZ/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations6_H/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations6_H/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations6_H/Process/4.jpg", caption: "This piece is not yet complete, because the connection loosened. Still, she inspired me enpugh, I started drawing her." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations6_H/Process/3.jpg", caption: "This grew quirkily, with the shapes changing types of object (questionsmark to hear, for example)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations6_H/Process/2.jpg", caption: "At this point is was also somehow a face." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations6_H/Process/1.jpg", caption: "Humble beginnings." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations7_L/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations7_L/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations7_L/Process/4.jpg", caption: "Completed quickly." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations7_L/Process/3.jpg", caption: "Boldness in colours." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations7_L/Process/2.jpg", caption: "Recently, I have been having way too much fun with dividers ;)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations7_L/Process/1.jpg", caption: "Starting from the middle." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations8_Dad/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Meditations8_Dad/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Meditations8_Dad/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "MuchnessInc",
    title: "Muchness Inc.",
    date: "2023-02-23",
    medium: "Digital Art created using Midjourney and Infinite Painter",
    tags: ["Digital", "AI", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "The source image was generated in Midjourney, prompting it to deliver a picture of a bower bird wearing a crown. The image picked was then overlaid with modifications in Infinite Painter and is now used as the logo of the Etsy shop Muchness Inc.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/MuchnessInc/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/MuchnessInc/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/MuchnessInc/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/MuchnessInc/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/MuchnessInc/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/MuchnessInc/Process/4.jpg", caption: "xx." }
    ]
  },
  {
    slug: "NathaliesLounge",
    title: "Nathalie's Lounge",
    date: "2023-08-09",
    medium: "Acrylic Paint on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed"],
    description:
      "Art in support of a planned Burning Man Camp idea.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/NathaliesLounge/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/NathaliesLounge/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/NathaliesLounge/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/NathaliesLounge/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "NeonSpiro",
    title: "Neon Spiro",
    date: "2026-06-24",
    medium: "Acrylic Pens and Spirography on Canvas",
    tags: ["Acrylic", "Pens", "Spirography", "Canvas", "completed"],
    description:
      "Trying out my new Spirograph worked pretty well :)",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/NeonSpiro/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/NeonSpiro/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/NeonSpiro/Process/1.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Origami/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/5b.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/1b.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Origami/Process/1a.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Roots",
    title: "Roots",
    date: "2024-09-12",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Intended as a gift, this is a second piece based on the same central stencil, with sides and shapes signifying roots and wings this beautiful person has and grew.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Roots/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Roots/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Roots/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Roots/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Roots/Process/3.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Schplomi_Collab/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Schplomi_Collab/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Sewing/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Sewing/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/SliceofParadise/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/SliceofParadise/Process/2.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Soldering/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Soldering/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Cover.jpg", "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Cover2.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/TattooMagic/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/13.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/12.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/11.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/10.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/TattooMagic/Process/1a.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Treedom/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/1a.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/14jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/13.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/12.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/11.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/10.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Treedom/Process/4.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Update",
    title: "Update",
    date: "2026-03-02",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed"],
    description:
      "Inspired by a track from Puscifer.s album Existential Reckoning, this piece acknowledges that people need to withdraw and take time to work on themselves. In these times, they are not open to connect, and this is not an expression of the level of closeness to me - when I painted this, this was a new, surprising öesson to learn. That the person who triggered this was all kinds of imperfect in their relationship to me was something that I tried to not creep into my expression of the experience in this painting.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Update/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/9.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/8.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/4a.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/3.jpg", caption: "xx." },      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Update/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "Vegas",
    title: "Vegas",
    date: "2024-02-01",
    medium: "Acrylic Paints and Pens and MixedMedia on Canvas",
    tags: ["Acrylic", "Paints", "Pens", "MixedMedia", "Canvas", "in progress"],
    description:
      "A piece themed at visiting the Grand Canyon for my birthday in 2022.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/Vegas/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/7.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/6.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/5.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/4.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/Vegas/Process/1.jpg", caption: "xx." }
    ]
  },
  {
    slug: "YourLife",
    title: "Your Life",
    date: "2025-06-01",
    medium: "Acrylic Pens and Paints onto a poster base",
    tags: ["Acrylic", "Pens", "Paints", "Posterbase", "in progress"],
    description:
      "Work in preparation for a potential art exhibit alongside or for an event organized by the amazing, talented, wise, awe-inspiring elin_im_wunderland.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/YourLife/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto,w_900/YourLife/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/YourLife/Process/1.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/YourLife/Process/2.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/YourLife/Process/3.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto,q_auto/YourLife/Process/4.jpg", caption: "xx." }
    ]
  }
];
