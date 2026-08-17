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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/2.jpg", caption: "Almost done." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/3.jpg", caption: "Without focus yet." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/4.jpg", caption: "Original direction." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/1a.jpg", caption: "Hidden sides plain to see." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/1b.jpg", caption: "Other side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/1c.jpg", caption: "Third side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/AngerOut/Process/1d.jpg", caption: "Fourth side." }
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
    medium: "Acrylic Pens, Paints, and Mixed Media on Paper ",
    tags: ["Acrylic", "Pens", "Paints", "MixedMedia", "Paper", "completed"],
    description:
      "Processing my first Aphex Twin live experience in Bristol (Forward's Festival) through Art (completed). The Aphex Twin set at #forwardsfestival in Bristol was a monument to nonverbal communication through sound and video that felt like the artist had understood the limit of the framerate at which my mind is processing information, playing with afterimages and overlaying beats. In this way, he was able to edge this boundary, constantly pushing for it to allow more room. To me, the experience of the music and accompanying art was an invitation for intellectual discourse not based on words. It was an enticement to engage with a genius mind that is not bound by a need to please and which has the ability to create a space of his own choosing within music. The set opened this container for me in which I could experience and appreciate utter confusion, astonishment, and chaos safely. There was a summary in there of what it must be like to know you are dying, followed instantly by the most whimsical AF tunes, insights into (maybe) what its like to be an artist and their personal story in current pop culture society, and an intense quick trip through all kinds of styles of electronic music that felt like a good fuck. When it was over and the music, lights, and lasers were just turned off like a flash, the 10k crowd needed a couple of minutes before they could collect themselves enough to even cheer and applaud.  I have been looking for words that do this experience justice since then and hope I am doing an OK job. Regardless - it was incredible, and I had a fucking blast..I think. :D I am cheekily slipping in some art by cfflepp that was posted to Aphex Twin's FB page by someone trying to express what the music may look like to the process images, I feel it was quite accurate. In case you have a VR headset, someone recorded the Field Day show on 360 Video with Spatial Audio: https://youtu.be/fkmo-LseN0c?si=7oJ8GeqhyQed3fm2. For nerds, this RedditPost makes your little hearts happy with the setlist and Spotify Support Playlist: https://reddit.com/r/aphextwin/s/FHRRZffy.",   
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/1.jpg", caption: "Intentionally pretty under UV Light." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/4.jpg", caption: "Clean before the final style is added." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/3.jpg", caption: "Underway to being amazing :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/2.jpg", caption: "Early bravery." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/0.jpg", caption: "First steps." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Aphex/Process/5.jpg", caption: "Source: http://andyamholst.com/2022/02/22/zwei-notenblaetter-2." }
    ]
  },
  {
    slug: "Banksyland_AbomiNation",
    title: "Banksyland: AbomiNation",
    date: "2023-01-15",
    medium: "Collage and Acrylic Paints on Canvas",
    tags: ["Collage", "Acrylic", "Paints", "Canvas", "completed"],
    description:
      "The story of this piece: Luring the enthusiast in me with the likeness of the name to the famed *Dismaland* by original artist Banksy and peers a while back, I went, uninformed, excited, almost triggered by street art at its finest, promised to be presented while I visited San Diego end of December. How disappointed I was, and how offended, angry even. The exhibition was simple theft, traveling through the US, quotes printed in big letters, casts of what looks like original pieces, and a poster full of art that's ever so slightly altered to evoke the artist's genius but is not quite the same image. The horrified exit through the gift shop was an offense all by itself, where the spray cans that had been used to spray the show's name everywhere around the venue on the sidewalks and on the walls inside the *gallery* were sold as swag for 30-fucking-$. AbomiNation USA at its most ugly, squeezing original, subversive art until money falls out, leaving the pieces unrecognizable, even to those I would consider of the capacity to process what happens right in front of their eyes. Had the joke been meta, God, what a genius. Sadly, it wasn't, and this is just a money machine. The experience had me steal one of the posters and create this piece as a statement, representing my own first steps into the journey of art. Go fuck yourself, Banksyland, and no-thank-you at all for the inspiration. For a more nuanced analysis from less passionate people, read: https://www.sandiegouniontribune.com/entertainment/visual-arts/story/2022-12-04/banksyland-and-the-proliferation-of-the-immersive-art-experience.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/6.jpg", caption: "Amazing under UV Lights." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/5b.jpg", caption: "UV light look is always a consideration." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/5.jpg", caption: "Nearing completion..or is it?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/4.jpg", caption: "Collage pieces II." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/3.jpg", caption: "Collage pieces I." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/2.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/1.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Banksyland_AbomiNation/Process/0.jpg", caption: "So it begins - with a stolen poster and some Burner art (from FTE)." }
    ]
  },
  {
    slug: "BeginAgain",
    title: "Begin Again",
    date: "2026-08-31",
    medium: "Digital Art, drawn in Infinite Painter on a Samsung Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "in progress"],
    description:
      "The mantra of Let Go and Begin Again artfully focused in this ongoing piece, which is only drawn on trains (so far).",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/q_auto:best/f_auto/BeginAgain/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/6.jpg", caption: "Always in progress with each train ride. I enjoy the imprecision of the moving vehicle that is introduced to the draw strokes." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/5.jpg", caption: "Slowly evolving II." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/4.jpg", caption: "Slowly evolving I." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/3.jpg", caption: "How the process looks on the tablet." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/2.jpg", caption: "Early stages." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BeginAgain/Process/1.jpg", caption: "First strokes are crude." }
    ]
  },
  {
    slug: "BlissScramble",
    title: "Blissful Scramble",
    date: "2024-08-10",
    medium: "Acrylic Pens and Paints on Canvas",
    tags: ["Acrylic", "Pens", "Paints", "Canvas", "completed"],
    description:
      "Inspired by a psychedelic experience at Ozora Festival 2024.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/13.jpg", caption: "The last step is usually polishing, meaning, I redraw black lines and add the black paint framing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/12.jpg", caption: "White acrylic pens help reclear any white space (if I left any..hihi) and remove signs of prior, then undeveloped directions the image took." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/11.jpg", caption: "This piece is pretty cool because it has a texture to it that was created with uncolored relief paste." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/10.jpg", caption: "This piece was inspired by a psychedelic trip experienced at Ozora Festival 2024 during the Dome-opening set by the amazing artist OTT. I felt as if the energy emitted by all things that are catalyzed through my open heart and curious mind and connected me to the universe, like a visit to an old friend who has been your quiet but wise guide all these years. Beautiful and awe-inspiring." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/9.jpg", caption: "The decision to add the paints was one of those brave ones, since it changed the picture quite a bit." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/8.jpg", caption: "Some steps, despite being simple (like the enhancement of the black lines, for example), take a few days to come through as the next best move. This is the reason I like working on several pieces at once - in that way, I can ..procrastinate.. once piece with another, until I know how to proceed." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/7.jpg", caption: "The hair was too boring here, so I worked on it in this step. I cursed having decided on a canvas, rather than paper, because it is a bit unresponsive to the thin-tipped pens..." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/6.jpg", caption: "I knew the piece needed to be square, and symmetrical somehow, and this was the first moment I felt the dynamic nature of the experience, the swirl and catalyst movement was going to be well-represented." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/5.jpg", caption: "At this point, the image was not very inspired yet, and felt too edgy and pointy. From experience, though, I know I just need to give it some time, and that there is always a white pen, and no one watching until I choose to have them." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/4.jpg", caption: "For some reason, the beginnings of this piece were slow, despite the vivid memory and big motivation to draw this experience." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/3.jpg", caption: "The piece was small enough to take onto a train, and the Swiss public are private and reserved enough to not engage with such a curious activity as someone painting on public transportation." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/2.jpg", caption: "A rough idea was at the humble beginnings of this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BlissScramble/Process/1.jpg", caption: "Special mentions for the start of this process were my acquisitions of gold metallic acrylic markers, which I used as my starting point here." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Process/5.jpg", caption: "Almost perfect." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Process/4.jpg", caption: "Nearing completion..maybe?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Process/3.jpg", caption: "Experimenting with mixtures." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Process/2a.jpg", caption: "Filling in paint." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Body/Process/1.jpg", caption: "Naked fabric of a lingerie item I wore to my first Kink party." }
    ]
  },
  {
    slug: "BordedSymmetry1",
    title: "Bored Symmetry 1",
    date: "2024-03-15",
    medium: "Acrylic Pens, Paints, and various Pencils and Markers on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed"],
    description:
      "Ever wonder how art gets created? This one is an example of *from boredom, based on opportunity*. Saw this FB post, liked the pattern (Wave Optic diagram), traced it, fucked around, found out, painted over, liked it. Voilà.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/1.jpg", caption: "My inspiration and basis, and a bit of a cheat, because I could just transfer the pattern - which I had never seen anywhere: apparently, this is called the Wave Optic diagram." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/7.jpg", caption: "Once I added the black paint framing, this piece was completed and posed a welcome challenge: how to display it. It now hangs diagonally on my wall above the fireplace :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/6.jpg", caption: "The use of the acrylic paints is a bit crude and bold, but I like playing with the circular motion of the brush, as well as with the opposition of the chaotic, free-form nature of the paints to the strict lines and dividers-drawn circle, offset and one-sided, offending most of my usual symmetry and harmonious style of drawing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/5.jpg", caption: "The piece changes quite a bit under different lighting conditions." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/4.jpg", caption: "Once again, my gold markers, here in their first edition, got a place to shine, and I refrained from the urge to draw in-between the circles with other pens or black marker." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/3.jpg", caption: "Before adding the black circle, this piece was not only born from boredom, but also itself was kind of boring, too symmetrical and generic. Wanting a sort of focus point, the black circle would not need to be tiny.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/2.jpg", caption: "My first idea was quickly abandoned, given that the straight lines were..well..too straight and predictable :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BordedSymmetry1/Process/1a.jpg", caption: "Getting the diagram onto paper required me to find my dividers and remember some basic geometry lessons..Fun!" }
    ]
  },
  {
    slug: "BoredSymmetry2_Deity",
    title: "Bored Symmetry 2: Deity",
    date: "2026-03-01",
    medium: "Acrylic Pens, Dividers, and Ruler on Paper",
    tags: ["Acrylic", "Pens", "Dividers", "Ruler", "Paper", "in progress"],
    description:
      "Emerging from playing around with dividers and a ruler, this piece is another version of a creative approach to boredom.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry2_Deity/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry2_Deity/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry2_Deity/Process/1.jpg", caption: "This is me having fun with my dividers (after buying new pencil leads, as well as some orderly coloring.. I do not know where this will go, so this is in progress, and currently a bit dormant until I find new inspiration. Watch this space :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry2_Deity/Process/2.jpg", caption: "Before removing the helper lines from the dividers selectively to create the symmetry without it all being circles." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry3/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BoredSymmetry4/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Blanket/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Blanket/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Blanket/Process/1.jpg", caption: "A neat digital interface to create such cool images that can then be printed onto fabric (a blanket)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Blanket/Process/2.jpg", caption: "Original direction of the image, sporting Burning Man imagery." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Sticker/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Sticker/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Sticker/Process/2.jpg", caption: "The interface that allowed me to print my design onto a see-through sticker material." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurningMan_Sticker/Process/1.jpg", caption: "A neat design - which noone got :D Total Nerd-levels.. I loved it :D" }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurnLocal/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurnLocal/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurnLocal/Process/2.jpg", caption: "I managed to keep this quite logo-y and leave white spaces." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/BurnLocal/Process/1.jpg", caption: "I got inspired by graffiti-style images." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/6.jpg", caption: "Endlessly incomplete, but already pretty shapely." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/5.jpg", caption: "Working out focus areas." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/4.jpg", caption: "Underway to be great & the idea arises to sell this as a silent auction piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/3.jpg", caption: "Taking good shape." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/2.jpg", caption: "Adding stickers and material collected at different Chaos events." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/CCC_NieSie/Process/1.jpg", caption: "Original poster found left hanging when clean-up of the 39C3 congress was already far advanced. I got lucky :)" }
    ]
  },
  {
    slug: "Chaos_Order",
    title: "Chaos & Order",
    date: "2023-05-08",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed", "gifted"],
    description:
      "I love looking at art from far away, normal distance, and up close and try to satisfy the details of each of those perspectives (like pinch-zooming into your pics on the phone).",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/Process/3.jpg", caption: "The intention was to have the pattern look like liquid had run through it, creating entropy/chaos from order." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/Process/2a.jpg", caption: "A small piece, this was really fun to draw and the first time I used different media (paint and pens, in this case)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/Process/2.jpg", caption: "Once again, I could not leave white spaces :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Chaos_Order/Process/1.jpg", caption: "I like the clarity of the piece, despite so much going on." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage1_Pusheen/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage1_Pusheen/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage1_Pusheen/Process/1.jpg", caption: "One of my earliest pieces - hence, few progress or status images.. I had been collecting collage pieces for ages, in this case, they came from a collector's box for the internet comic Pusheen. The piece was overly cutesy for my own taste, despite me being a total cat person, and was gifted to a younger female friend who loved it :)" }
    ]
  },
  {
    slug: "Collage2_Decommodify",
    title: "Collage 2 - Decommodify",
    date: "2023-12-19",
    medium: "Acrylic Pens, Collage, and MixedMedia on Canvas",
    tags: ["Collage", "MixedMedia", "Acrylic", "Pens", "Canvas", "completed", "gifted"],
    description:
      "A collage and mixed media piece that inspired my art journey, made from paper pieces collected over years, printed with things and advertising concepts that aim to make people happy, removed from the original product packaging. Perfect for a statement about Decommodification and leaving Capitalism behind. Gifted to the amazing Elin.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/Process/1.jpg", caption: "I collected the pieces for this collage for an insanely long time. The topic was loosely to uncover the marketing intention to seemingly make people happy and smile when buying a product. The black framing has become an integral part of each piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/Process/2.jpg", caption: "The piece lacked aim and vision as I was making the collage, so the writing over the top was a much-needed bold move." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/Process/3.jpg", caption: "Collages become more intricate the longer I work on them :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Collage3_Decommodify/Process/4.jpg", caption: "Beginnings." }
    ]
  },
  {
    slug: "ConfusionAge",
    title: "Why?: Confusion Age",
    date: "2024-04-01",
    medium: "Acrylic Pens on Canvas",
    tags: ["Acrylic", "Pens", "Canvas", "completed"],
    description:
      "Asking WHY some people mistreat others without care and expressing being very confused by this mistreatment.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Process/4.jpg", caption: "The acrylic paints mixed insanely well on this canvas, while adding to this with the pens was a bit cumbersome. I suspect that the content of the image was the true reason for the excess of energy I felt this needed to be drawn.. I was deep down a hole of being ghosted by someone in the worst possible way, betrayed for trust, realizing I had been letting this person mistreat me while watching it happen.. God, what a terrible person. Still, when this was done, I felt weird positing it, fearing I could hurt the person who inspired it. Now I feel much stronger actually asking this question, although I know there is no answer." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Process/3.jpg", caption: "The piece almost has graffiti vibes, and I will add the method of writing into a mark of paint with acrylic pens for future pieces, always developing my methodology." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Process/2.jpg", caption: "Aiming to obscure while being clear was an underlying motivation, screaming out my feelings, which had no destination, was not a great path to digestion of the emotion, but it was .. Something.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Process/2a.jpg", caption: "I took a bunch of status photos during a short time, so these are similar, but nuances progress, and I reflect onto how my feelings and experiences of the situation evolved there." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/ConfusionAge/Process/1.jpg", caption: "Don't you also just totally dig the green-turquoise-pink-purple of the central word? I was almost afraid to touch it again, for the chance of smudging the perfect composition." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/EarlyWork/Process/x.jpg", caption: "xx." }
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
      "This one is also finally done - a fully digitally painted piece turned NFT that is both a meditation on the connection with, as well as an expression of admiration for the person this was a gift to. I am honored and overjoyed to be able to call you my friend.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/2a.jpg", caption: "My second digital, first truly creative tablet-drawn piece. From the original, writing out the DJ name, tattoo artist handle, and true name of the recipient, then scrambling and reconstituting the image and then reconnecting the pieces, this took ages and was very satisfying for its invitation to perfect even the smallest details. I tend to draw on several layers - the whole, a region, a small square, and, if applicable, the UV-reactive layers. Here, I could add the pixel level - when zoomed in all the way, one can fill in individual pixels and perfect the line on very macro scales and very micro details." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/5.jpg", caption: "Turning the image into an NFT once I was done meant I could gift some knowledge about cryptoassets and wallet functionality. Despite the short-lived nature of the medium, it was fun finding out about its details." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/4.jpg", caption: "The black frame should never be missed, not even on a digital image :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/3.jpg", caption: "An earlier screenshot from the production level in Infinite Painter, and a long way off from the final detail-perfection of the finished piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/2.jpg", caption: "Can you spot how the original image was reconstituted, what was rotated, and where the bits matched before?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Elindentity/Process/1.jpg", caption: "The start was simple, but it would be a great basis. :) I should repeat the exercise of drawing, cutting apart, and then reassembling a physical art piece..mhhh..Watch that space :)" }
    ]
  },
  {
    slug: "Eukel",
    title: "Eukel",
    date: "2023-09-02",
    medium: "Ink and Acrylic Pens on Paper",
    tags: ["Ink", "Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Being bored among a few not so entertaining people at a home burn, I found some ink and some pens and kind of doodled for one of the more articulate and intellectually interesting people at the event.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Eukel/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Eukel/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Eukel/Process/1.jpg", caption: "Ink is a great medium and always leaves a surprise in terms of the beginnings of an art piece. I opted against the obvious tree-representation and used the low lighting level at the event to create some depth and dimensionality to the ink." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Eukel/Process/2.jpg", caption: "Having a pleasant conversation with the person who would receive the image meant this was more of a doodle than intense art creation. Additionally, I did not have my usual pens and didn't quite like the event I attended.. For those conditions, this is a'ight :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Eukel/Process/3.jpg", caption: "The paper was rather interesting, and the ink was a great practice invite for dimensionality and imaginative thinking." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Exhibition_Kulti/Process/x.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "FemaleEnergy",
    title: "Female Energy",
    date: "2026-06-09",
    medium: "Acrylic Pens and Paints, Collage, and Transfer using foil",
    tags: ["Acrylic", "Pens", "Paints", "Collage", "Transfer", "completed"],
    description:
      "This piece sought to capture my meditations on maturing my female energy through music preference. It intends to process the changes and intense recent growth alongside and in connection with some significant personal female inspiration figures - Lorde and Florence represented as guides - in my life. Also, it helps me work through the massive girl crush I have on Florence as well as the extensive awe I feel for Florence and the Machine's new album - Everybody Scream. Lastly, it aids in exploring what that actually is, female energy: raw, tender, connective? Yes, and..dark and light and beautiful, or intentionally spiky, yet real. So far, I identified heavily with the cool, quirky, always evolving style of Lorde, whose albums - her newest cover art included here, as well as in original- always seemed to mirror exactly what was going on in my life - all the way to her very passionate, sexy undertones on the new album, Virgin. Then, I met Florence Welch's pure magic, her explosive, still quirky, but very self-aware female energy bursting out of every one of her songs on the new album - Florence and the Machine's Everybody Scream, similarly included and provided in original. I felt myself overwhelmed with awe and the invitation to look at my own female energy - which has become overflowing, rich, voluptuous, attractive, enticing, deep, passionate, hedonistic, but still quirky. I want to blurt out the colors, celebrate mind and emotion, just as Florence and now the image do.  A self-portrait generated by feeding the AI app Lensa images of me through the last year, with my expanding magic and mind shining through, tied everything together for this piece.  So inspiring. Guess I too am unfurling, becoming my full size :) Watch this space... Album art cover and art by Florence and the Machine and Lorde.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/1.jpg", caption: "Lorde contributing artwork as inspiration." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/2.jpg", caption: "The cover of the new Florence and the Machine Album (Everybody Screams) offered the inspirational art that had me start this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/3.jpg", caption: "My own AI art as inspiration to be overlaid over the two artist's artwork." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/4.jpg", caption: "Finished piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/5.jpg", caption: "Symmetry in the combination of the contributing artworks." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/6.jpg", caption: "Sometimes, changing a piece in this major way requires some bravery." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/7.jpg", caption: "Foil overlay helps with the design." },            
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/8.jpg", caption: "Secret tips for perfect images." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/9.jpg", caption: "Painted off the screen onto the foil..cheating? Naw..Method! :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/10.jpg", caption: "Underway to being amazing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/10b.jpg", caption: "The cover art at the basis of this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/11.jpg", caption: "Pristine transfer, was almost hard to paint over." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/12.jpg", caption: "That skirt is an insane mystery of a 3D object to paint in 2D." },     
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/FemaleEnergy/Process/13.jpg", caption: "The first strokes." }
    ]
  },
  {
    slug: "Flyer",
    title: "Flyer",
    date: "2024-01-26",
    medium: "Digital Art created on a Galaxy Tab S8 for a later printed flyer",
    tags: ["Digital", "Canva", "Samsung Tablet", "completed"],
    description:
      "Flyer created in Canva for my 2024 Birthday.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/Process/3.jpg", caption: "The event was the last bit of a time dominated by a relationship that truly was not benefitting me. Still, I looked forward to this birthday, especially since I had never celebrated a huge party like this. I got stood up by a few people, had some juice gifted to me, loved the music, learned a lot about the people around me, and realized I am deserving of celebration :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/Process/2.jpg", caption: "I played around a lot with the sizings and fought my urge to make everything pop with color. Canva is a nice piece of software, but it constrains what I feel should be free-flowing art (by requiring lines and frames and layers). Still - it did the job." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/Process/1.jpg", caption: "I am unsure who among my guests actually got the H.S.T. reference up on the page, or if anyone understood the Burner-nature of the event, but it was enough to make me feel happy this was my invitation." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Flyer/Process/1a.jpg", caption: "When it was printed and mail-delivered to my guests, it was neat and square and looked great." }
    ]
  },
  {
    slug: "Fuechse+Pelikane",
    title: "Füchse & Pelikane",
    date: "2021-05-22",
    medium: "Stabilo FineLiners and Markers on Paper",
    tags: ["Stabilo FineLiners", "Markers", "Paper", "completed"],
    description:
      "My first attempt at art again since high school..I have come a long way this year.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/Process/4.jpg", caption: "Quirky paper." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/Process/3.jpg", caption: "Heavy marker use is experimental." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/Process/2.jpg", caption: "Clear lines." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Fuechse+Pelikane/Process/1.jpg", caption: "Lets see where this goes.." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furniture1_Vortex/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furniture1_Vortex/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furniture1_Vortex/Process/1.jpg", caption: "The lighting is shit because this was taken at night, but the table turned out much better than I had anticipated. The black framing never misses, and the swirls progress beautifully from a cool silver metallic through the colors to leave a dynamic impression." }
    ]
  },
  {
    slug: "Furtniture2",
    title: "Furniture 2 - Little Blue Cupboard",
    date: "2026-01-02",
    medium: "Acrylic Paints on Wood",
    tags: ["Acrylic", "Paints", "Wood", "completed"],
    description:
      "I found this little blue cupboard among some other furniture to be thrown away by the side of the road, didn't like the blue base, but I thought it was a fun piece to try some more furniture painting on it. It is definitely not blue anymore now :D",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/8.jpg", caption: "Both sides are different, and I managed to recreate the amazing mixture of the acrylic paints that had made it onto the Confusion Age piece. I also needed this done quickly at the end, so this served that purpose, too." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/7.jpg", caption: "A bit uninspired, but it did the trick in the beginning. I later painted the dots over the sides, too." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/6.jpg", caption: "Same here, a good basis, not enough of a perfect spiral to keep, but good enough to begin with. The dots took over this side later, too." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/5.jpg", caption: "Between this and the next images were a few months, given I had lost my inspiration, the drying of the paint took ages when the surface was not soaking any moisture up, and I wasn't quite sure how much paint I was willing to spend on this." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/4.jpg", caption: "As you can see, not only did I change styles and methods, but also the colors of the initial dots :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/3.jpg", caption: "I intended this to look like paint had dripped onto the cupboard, but realized quickly that the dripping part would mean a danger of coloring the (paper-protected) floor as well as curious (and white) cat babies." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/2.jpg", caption: "The original cupboard from above, tiny and almost too cute and blue." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/1.jpg", caption: "A mighty many number of drawers for such a small (knee-height) piece of furniture deserves some respect, at least :D" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Furtniture2/Process/1a.jpg", caption: "Richness in colors and paints, ready to be used." }
    ]
  },
  {
    slug: "Gourd_Lamp",
    title: "Gourd Lamp",
    date: "2024-02-02",
    medium: "A Gourd plant product - like a pumpkin, but inedible - hollowed out and painted with Acrylic Paints",
    tags: ["Plant product", "Acrylic", "Pens", "completed"],
    description:
      "A gourd, harvested in my friend's garden in San Diego I hollowed out to keep only the hard outer shell. I then painted the outside with Acrylic Paints, and placed a string light inside.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Gourd_Lamp/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Gourd_Lamp/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Gourd_Lamp/Process/1.jpg", caption: "The surface of the gourd was smooth and unporous, a bitch to paint on.. Drying took ages, and I kept being unsure of the design.. In the end, I just did what stuck to the woody material and let it dry across weeks. I should take a picture of the finalized lamp hanging in my living room..Watch this space :)" }
    ]
  },
  {
    slug: "Heart",
    title: "Heart",
    date: "2026-03-02",
    medium: "Digital Art handdrawn in Infinite Painter on my Samsung Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "A leisure time doodle on my Samsung  Galaxy Tab8 led to this nice piece, which could easily be a postcard.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Heart/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Heart/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Heart/Process/1.jpg", caption: "This started as a little doodle for my partner at the time, but turned into an exercise of detail-perfection and never-ending layers that could be added. I had to fight the urge to fill in all the white space, but now, this makes for a nice post-card design or similar." }
    ]
  },
  {
    slug: "Iceland",
    title: "Iceland",
    date: "2026-02-02",
    medium: "Acrylic Pens and Paints on canvas, inspired by AI-derived Art",
    tags: ["Acrylic", "Pens", "Paints", "Canvas", "AI", "abandoned/discontinued"],
    description:
      "I started this piece with the intention to commemorate and celebrate my and SZ's trip to Iceland in August 2026. I had an AI create me an image with a volcano, penguins, the RV, a solar eclipse, and the generic Northern Lights.. I quickly realized that I could not begin drawing before actually having been on the trip - and now, afterward, I know that I could never have done the experience justice with such mundane means.. Watch this space, I will try to do better, although accurately painting those volcanic colors inside that volcano may take a lifetime.. :) Thank you, SZ for the trip, you made it worth all its while <3.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Iceland/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Iceland/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Iceland/Process/1.jpg", caption: "I wouldn't say the piece was uninspired, but maybe a bit lazy. AI created me the original image, I transferred the bits onto the canvas and then quickly got bored. Honorable mentions for the volcano colors, which I know now are not even close in richness and mixture when compared to the real thing.. I will attempt to do better representing this trip in the coming months - or years, seeing how complex those colors inside the volcano were..damn!." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Iceland/Process/2.jpg", caption: "This and the next image....." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Iceland/Process/3.jpg", caption: "were created by AI to honor my request for having a volcano, penguins as our approximations, a seal, the eclipse, and Northern Lights. Yeah, I know.. I didn't stay here, okay? :D." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/1.jpg", caption: "Amazing under UV light." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/7.jpg", caption: "Almost complete..maybe." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/6.jpg", caption: "On the way to filling the white spaces with magic." },   
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/5.jpg", caption: "Sunny palette." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/4.jpg", caption: "Symmetries." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/3.jpg", caption: "Wide open directions this picture could take." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Idarwald/Process/2.jpg", caption: "Basic message of the picture as a guiding principle." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LensaAI/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/1.jpg", caption: "Intentionally gorgeous under UV light - which is one of the dimensions I paint with." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/2a.jpg", caption: "Different light brings out different qualities in the almost completed artwork." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/2b.jpg", caption: "I liked the depth the spiral created." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/4.jpg", caption: "The bit in the middle was a repurposed tattoo stencil." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/3.jpg", caption: "Bravely expanding the design." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/5.jpg", caption: "I would love to be able to stay with simplicity, but depth and complexity is more fun." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LetGo/Process/6.jpg", caption: "Off to a good start." }
    ]
  },
  {
    slug: "Lingua",
    title: "Lingua Cordis - Lingua Intellectus",
    date: "2023-04-22",
    medium: "Digital Art created with the Lensa App and Infinite Painter on my Galaxy Tab S8",
    tags: ["Digital", "AI", "Lensa", "Samsung Tablet", "completed"],
    description:
      "Playing around with overlaying AI-created portraits - made with Lensa - with a visual interpretation of my current endeavor to learn to listen to my now opening heart - as opposed to always being guided by my mind.",
    cover: ["https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lingua/Cover.jpg", "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lingua/Cover2.jpg"],
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lingua/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lingua/Process/1.jpg", caption: "Seeing with my heart was the intended expression of this piece. I create a series of portraits using Lensa (a brief craze had everyone upload their portraits to the online instance of the software). The two best ones I used as canvases in Infinite Painter to try and show what it feels like to now be able to hear my emotions, my heart, and to tap into my softness more and more :)" },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lingua/Process/2.jpg", caption: "I would not give a good representation of myself if I did not also add my mind and its curious, experienced eyes - it is an open gate to wisdom, but also a source for distraction from the things and sensations I should pay better attention to." }
    ]
  },
  {
    slug: "LoveWhenYouCry",
    title: "I love it when you cry",
    date: "2024-08-29",
    medium: "Digital Art created with Infinite Painter on my Samsung Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "in progress"],
    description:
      "Exploring self-image and emotions in my art.. Inspired by the quiet horror of accepting words from people who hurt us at face value.. or not..",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/Process/1.jpg", caption: "One of the original photos I took of myself one morning when I cried with sadness and anger about the experience and fallout with the person who caused all my confusion and feelings of abandonment and inability to understand why I had deserved the treatment I received from him. Selfies have done a huge deal for my self-image and my confidence, and I try to remember taking pictures also when I am in any other emotional state than happiness. I feel there is strength in vulnerability, and when I heard the sentence that gave the picture its name from this person (spoken in true honesty and unaware of how creepy it is), I knew it would be potent for art." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/Process/2.jpg", caption: "This image would become the canvas for this piece in Infinite Painter, a first and new method for me, alongside the novelty of working with my own image. - I love it when you cry was said after I burst with emotion when I and the person who hurt me so tremendously met to clarify what was going on, and he just said he was working on himself and there was no other way than to hurt me in that process, but that he loved me. When this last bit was said over the noise of a loud vehicle passing, I could not keep my cool demeanor. He then whispered I love it when you cry, and in my head, a switch flipped, and I realized he had both no idea how to treat others and zero care for my heart and that he was the reason I had cried for months without an explanation. My heart hardened a bit, and this bit is one of the biggest parts I accuse him of causing. It is now open and soft again, but damn, I was angry then." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/Process/3.jpg", caption: "Without the image, this is what I added, and it is very amazone-y. I was a bit shy changing my face, so I kept it at that." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LoveWhenYouCry/Process/4.jpg", caption: "A look at how the interface in Infinite Painter works." }
    ]
  },
  {
    slug: "LSD80",
    title: "LSD 80",
    date: "2023-04-19",
    medium: "Digital Painting created with Infinite Painter on my Galaxy Tab S8",
    tags: ["Digital", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "Art created for the logo of the event honoring the 80th anniversary of the Bicycle Day in Basel, Switzerland.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Process/1.jpg", caption: "Wow, 80 years since the discovery of LSD and the first intentional trip in my hometown, and at my workplace location. I got excited and began this design, hoping to gift it to the celebrations. In the end, it was not accepted, and I stopped without adding the neurons the finished piece has to the degree I had planned, but the meditation was lovely, and I was grateful for this time and place to be alive." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Process/2.jpg", caption: "This was my first dance with digital art, and I learned a ton about the software and how to use my stylus. I loved the chance to undo strokes and the option to add layers that I could later integrate if I liked how they contributed to the whole image." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Process/3.jpg", caption: "The piece grew, and the colors shown here were on a layer I did not keep for the final image." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Process/4.jpg", caption: "A foto of the tablet and app environment. A neat little art space I can take anywhere :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/LSD80/Process/5.jpg", caption: "I am pretty proud of even having created the background by symmetry and pattern repetition." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/7.jpg", caption: "I liked the 3D impressions of the bubbles and noted them for future use and expansion of the method." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/6.jpg", caption: "Rewriting over and over, while keeping the borders with high contrast, needs much motivation, which is why I would only give this special treatment to special music and my most dear-hearted lyrics." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/5.jpg", caption: "Working with gold this time, I noted that it suited the elegance and complexity of the content well." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/4.jpg", caption: "I realized that the left border was quite prominent and would need to receive special attention to be straight." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/3.jpg", caption: "I slowly moved through the lyrics and added little bits and pieces everywhere." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/2.jpg", caption: "Enhancing the black writing and adding careful initial pops of color, I realized this piece would need a delicate hand." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics1_Peng/Process/1.jpg", caption: "Writing out the poem-like lyrics, they, too, are quite long and intricate - and barely fit the page." }
    ]
  },
  {
    slug: "Lyrics2_Tool",
    title: "Lyrics 2: Tool",
    date: "2025-04-27",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "completed"],
    description:
      "The lyrics to Tool's Sober are incredibly powerful and needed to be represented in art.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/1.jpg", caption: "Removing the double title and once more giving contrast to the writing by refining the black borders finalized the piece. The black paint frame was enhanced with some neon ink." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/2.jpg", caption: "The double title writing up top was a remnant of my overboarding excitement for the track, and from listening to it over and over at the start of painting this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/3.jpg", caption: "Learning from the piece with Schplomi, I ended up filling in the letter with the multiple colors as I had done for his round piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/4.jpg", caption: "With all black bordering of the letters done, they were quite bold and not easy to decipher from afar." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/5.jpg", caption: "This detail pic shows the fine black bordering of the letters, greatly enhancing contrast and legibility." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/6.jpg", caption: "Hence - I brought back the silver, this time as a font." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/7.jpg", caption: "Filling the page, I rewrote in dark black, losing more clarity in the lettering." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/8.jpg", caption: "I had to rewrite the text again and again, but the fire made good pervasive progress in this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/9.jpg", caption: "So..I added fire :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/10.jpg", caption: "I do adore this song with passion, though, so while elegant and dark, these lyrics needed fire..." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/11.jpg", caption: "Starting with silver paint was a new approach I quite liked, it kept the piece cool and dry to start with...." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics2_Tool/Process/12.jpg", caption: "Writing out the text, I realized it was longer than I thought, and space (and legibility!) was going to be an issue." }
     ]
  },
  {
    slug: "Lyrics3_Puscifer",
    title: "Lyrics 3 - Puscifer: Bedlamite",
    date: "2025-03-01",
    medium: "Acrylic Pens and Paints on Paper",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "abandoned/discontinued"],
    description:
      "This one is a nice example of the case where an idea of how to represent some idea does not work out. I love the track, but I could not transfer my emotions and impressions of it onto my art..maybe I will try again in the future.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/1.jpg", caption: "I was unsure I should upload this, given that I barely am sure I will do anything more with this.. However, I think it is valuable to show when plans and expectations don't work out and that it is OK to have some ink and paint go to potential waste for trying out an idea. This washed out, ruined piece was the result of me putting the piece of paper under water after it was at the level of the previous image. Hoping the colors would run slightly, potentially be directable a bit, I realized that the pens do not withstand any moisture and immediately run into each other, blurring colors to a brownish gray. I tried to save this using a brush, and this made it a bit worse. I guess, I'll try again, either with this paper or a new one to represent what the track / lyrics mean to me.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/2.jpg", caption: "Before moisture entered the game..It was boring and generic. Not a good representation of this fantastic musical piece it was supposed to be a tribute to." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/3.jpg", caption: "The image progressed, but I felt uninspired and often diverted my attention to other ongoing pieces. A meditation on music such as this should be invigorating and exciting, so this was doomed from the start." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/4.jpg", caption: "I feel like the choice of lyrics added and how they are arranged were what began the trouble I had with this piece from the start." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/5.jpg", caption: "The color mixing level was good, though, and could have evolved." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/6.jpg", caption: "Jumping off from simple into complex color schemes is a constant joy and luxury :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/7.jpg", caption: "The green-yellow is a good experiment that worked out well and may inform other pieces :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Lyrics3_Puscifer/Process/8.jpg", caption: "Humble beginnings, unsure where to head to express my connection to this track from Puscifer - Maynard telling me that everything's going to be alright was a true anker during Corona, for example." }
     ]
  },
  {
    slug: "Meditations1_T+C",
    title: "Meditations 1: Trench & Cuddles",
    date: "2023-04-18",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations1_T+C/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations1_T+C/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations1_T+C/Process/2.jpg", caption: "I did not take many progress pictures here because I was working on another piece as well, while still giving this my undivided attention in-between." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations1_T+C/Process/1.jpg", caption: "The basis was simple." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations2_L+Y/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations2_L+Y/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations2_L+Y/Process/1.jpg", caption: "As with the other meditation pieces, I tried to reflect my feelings of the connection and my impression of the subjects of each piece. The code below was a quirky way to acknowledge the male designee's IT background, the color palette is what I associate the female designee's Australian heritage with. The words, as with the other pieces are reflections of my associations with them and their connection to me." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/Process/4.jpg", caption: "I tend to continue with a piece until it truly is perfect, and then leave it for a bit to see if something still needs to be changed." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/Process/3.jpg", caption: "Underway for an intricate level of detail." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/Process/2.jpg", caption: "I like filling in the white spaces." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations3_M/Process/1.jpg", caption: "First progress pic I took of this piece." }
    ]
  },
  {
    slug: "Meditations4_Meg",
    title: "Meditations 4: Megan",
    date: "2023-12-08",
    medium: "Ink and Acrylic Pens on Paper",
    tags: ["Ink", "Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations4_Meg/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations4_Meg/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations4_Meg/Process/2.jpg", caption: "I really like the ink addition of media - it gives me shapes to work around, and it creates invitations to challenge my usual process. In this meditation, I added words that I associate with the subject of this piece, as well as much color and fine nuanced changes." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations4_Meg/Process/1.jpg", caption: "This picture shows how much color and structure I added after the ink was dried. Fun." }
    ]
  },
/*
  {
    slug: "Meditations5_SZ",
    title: "Meditations 5: SZ",
    date: "2026-08-05",
    medium: "Acrylic Pens and MixedMedia on Canvas",
    tags: ["Acrylic", "Pens", "MixedMedia", "Canvas", "completed"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed. This one was especially meaningful to me. <3",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations5_SZ/Process/x.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "Meditations6_H",
    title: "Meditations 6: Hannah",
    date: "2024-01-18",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "in progress"],
    description:
      "Giving gifts to my friends, I let my love and appreciation flow through me as I focused on each of these people who would receive the piece once completed.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/Process/4.jpg", caption: "This piece is not yet complete, because the connection loosened. Still, she inspired me enough, I started drawing her." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/Process/3.jpg", caption: "This grew quirkily, with the shapes changing types of object (question mark to heart, for example)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/Process/2.jpg", caption: "At this point it was also somehow a face." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations6_H/Process/1.jpg", caption: "Humble beginnings." }
    ]
  },
  {
    slug: "Meditations7_L",
    title: "Meditations 7: Leo",
    date: "2026-03-01",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed", "gifted"],
    description:
      "This piece was a birth gift to the son of a colleague and therefore was a special case of the meditations because I envisioned what he would become,instead of what I know about him.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/Process/4.jpg", caption: "Completed quickly." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/Process/3.jpg", caption: "Boldness in colours." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/Process/2.jpg", caption: "Recently, I have been having way too much fun with dividers ;)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations7_L/Process/1.jpg", caption: "Starting from the middle." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations8_Dad/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations8_Dad/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Meditations8_Dad/Process/1.jpg", caption: "When my dad went into retirement, I felt inspired to reflect on what my perception had been of his work life. My father was, and still is, a true role model to me when it comes to work perspectives, when it comes to living true to your decided values, to taking pride in your path without arrogance, and in for loyal devotion and commitment to family. His status at the end of his work career was my goal and destination for a long time, until my path diverged and I worked on difficulties he seemingly had not encountered (like trouble with inconsequent, incompetent, and incorrect leadership and authority - he bowed to this type of issue much better than I ever did or ever will). Huge respect, and I love you, Dad." }
    ]
  },
  {
    slug: "MuchnessInc",
    title: "Muchness Inc.",
    date: "2023-02-23",
    medium: "Digital Art created on my Galaxy Tab S8, using Midjourney and Infinite Painter",
    tags: ["Digital", "AI", "Handdrawn", "Samsung Tablet", "completed"],
    description:
      "The source image was generated in Midjourney, prompting it to deliver a picture of a bower bird wearing a crown. The image picked was then overlaid with modifications in Infinite Painter and is now used as the logo of the Etsy shop Muchness Inc.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/Process/1.jpg", caption: "The piece was supposed to be the logo of the Muchness Inc webshop on Etsy a friend-at-the-time and I had planned. I got all excited and created this image - using an AI-generated image of a bower bird wearing a crown, placed into Infinite Painter on my tablet and then stylized and filled in. Given that the bower bird creates peculiar nests out of blue things, we felt it was a great representation of our peculiar planned shop. The shop never really happened, and the friendship broke, but the image remains cool and my creation." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/Process/2.jpg", caption: "The original AI image in Infinite Painter, showing the layers feature." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/Process/3.jpg", caption: "Drawing over the picture to create the comic look." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/MuchnessInc/Process/4.jpg", caption: "Initial additions with the base layer of the AI image switched off in Infinite Painter." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NathaliesLounge/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NathaliesLounge/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NathaliesLounge/Process/2.jpg", caption: "Per usual, UV light is an essential level of painting in the process of creation of each piece. Here, one side is more UV-reactive than the other, given that there is a night and a day side to this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NathaliesLounge/Process/1.jpg", caption: "When at a Burn, I took residence on one of the comfortable couches in the communal area and sat there having great conversations all through the night. I was greeted by someone who went to bed late and then got up early with the question if I had been there awake already or still - The idea of the lounge-y Burning Man camp was born. The idea took some more turns (to being 18+, for example), but it was never implemented because of disagreements among the founding members (or something of that sort :D)..." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NeonSpiro/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NeonSpiro/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/NeonSpiro/Process/1.jpg", caption: "Uh, I got all excited for the spirograph I got from Galaxus.. It is a bit finicky, but when I managed to paint with a tip from one of the acrylic pens and do so on a prepared canvas covered in neon acrylic paints, a neat, square piece emerges that was drawn in barely a day, and with much satisfaction. The triangles and circles approach is an experience-proven one that looks great in many contexts. I shall play with it more in the future :)" }
    ]
  },
  {
    slug: "Origami",
    title: "Origami",
    date: "2021-11-01",
    medium: "Folded Paper and Glue, sometimes Acrylic Paints",
    tags: ["Paper", "Glue", "Acrylic", "Paints", "completed", "ongoing when needed"],
    description:
      "Origami Flowers are a nice exercise for the hands as well as making great little gifts. I get motivated off and on to create some new ones.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/8.jpg", caption: "In case you want to try too, here are the instructions for these Origami flowers (cheating your way through using glue)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/7.jpg", caption: "When using the right paper, these flowers beautifully satisfy my need for UV-reactive pieces :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/6.jpg", caption: "They have been placed on desks of friends all through the world." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/5.jpg", caption: "Some good planning of the paper will result in beautifully shaped backsides, too." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/5b.jpg", caption: "Even small sizes are possible (although they are not much faster to fold)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/4.jpg", caption: "When folded with care, they are very symmetrical and shapely." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/3.jpg", caption: "Connecting several basis flowers, beautiful symmetrical, and even fractal pieces are possible." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/2.jpg", caption: "A triple is a common gift-away level, especially since this shape rests stably on even surfaces." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/1.jpg", caption: "Some insight into the process of creating these shows that strategic clips and the right glue do wonders in how long these last." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/1b.jpg", caption: "Individual pieces get glued first, to later be joined to the individual flower level." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Origami/Process/1a.jpg", caption: "The steps to creating origami flowers can be separated in time, for example, by cutting and making individual sub-pieces in one step and then leaving a break for the glue drying and the hands resetting :) Enjoy!." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Roots/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Roots/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Roots/Process/1.jpg", caption: "Isn't it truly gorgeous under UV light?." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Roots/Process/2.jpg", caption: "The central shape is the tattoo stencil for Magic I wear on my right ankle, as well as the shape of South Africa for the Roots part. The two sides represent the multitudes and contrasts and conflicts the recipient carries with what seems like ease and much grace." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Roots/Process/3.jpg", caption: "I knew I would go this direction early on, which is different from many other pieces I begin, as they change and evolve all the time - to a point where my white marker is a true essential asset for the success of any piece." }
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
    cover: ["https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Cover.jpg", "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Cover2.jpg"],
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/1.jpg", caption: "The round canvas with the Travel poem was a gift to the author, the side-by-side version with the Magician's Oath was kept for me. I wrote both pieces so often, I kept repeating the words along in my head. It was a challenge to get in all on the circle, but in the end it turned out quite stunning." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/1b.jpg", caption: "The one side of the side-by-side sister piece. I created this to give the author of the lyrics the choice of which representation of his art he liked better." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/1c.jpg", caption: "The other side of the side-by-side piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/2.jpg", caption: "The background on this circle piece went through many iterations and thus turned out as complex as this." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/2a.jpg", caption: "The challenge of the side-by-side pieces was to keep the small writing legible while still enhancing the writing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/3.jpg", caption: "After the initial silver font, I decided to adapt the writing to the color scheme, but make the contrast higher by circling all letters with black pen ink." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/3a.jpg", caption: "The side-by-side piece was quickly covered in this way, but the writing lacked making an impression (in its design, not content), so it needed enhancement, too." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/4.jpg", caption: "The silver font was gorgeous, but too sharp in its contrast." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/4a.jpg", caption: "I liked the Travel poem better, having heard it recited by the author at a Burn the year prior - so it was my starting point and initial focus. The Magician's Oath is deeper and more complex than the Travel poem, but no less amazing and eloquent." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/5.jpg", caption: "The colors became darker and richer with each intervention." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/5a.jpg", caption: "Difference between the already advanced work on the Travel poem and the virgin Magician's Oath poem." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/6.jpg", caption: "Half silver, half black on the way to the silver font." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/7.jpg", caption: "I also liked it with a black font, but legibility was low." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/8.jpg", caption: "First status picture after applying all the color :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Schplomi_Collab/Process/9.jpg", caption: "Humble beginnings of the round piece." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Sewing/Process/x.jpg", caption: "xx." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/1.jpg", caption: "The photo I used to draw myself in a stylized manner." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/9.jpg", caption: "The face is always the hardest, but I have become more confident, so even imperfect lines and a strange expression are comfortable for now. I truly wish I had that kind of hair :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/8.jpg", caption: "The mixed media pieces were all brought from paradise - Thailand, or better, Koh Phangan. Bringing Dengue will stay a silent observer, outside the scope and focus of this piece." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/7.jpg", caption: "By now, I have accepted that beginnings of images, until about 3/4 done, are usually messy and unpolished, and that weird images usually take cool turns if I give them time." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/6.jpg", caption: "I do love glitter.. :D Don't you? :p." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/5.jpg", caption: "Even unfinished, this piece had even more humble beginnings :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/4.jpg", caption: "That nose, tho :D." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/3.jpg", caption: "Scruffy and dis-proportioned, but with a great hand base.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/SliceofParadise/Process/2.jpg", caption: "Lines as guidance to draw from the original photo." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Process/x.jpg", caption: "xx." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Soldering/Process/x.jpg", caption: "xx." }
    ]
  },
*/
  {
    slug: "TattooMagic",
    title: "Tattoo Magic",
    date: "2025-11-23",
    medium: "Acrylic Pens and Collage on Canvas",
    tags: ["Acrylic", "Pens", "Collage", "Canvas", "completed"],
    description:
      "In celebration of symmetry and biology, art in artificial structures, juice in round biology, and patience for process, this piece used tattoo stencil inspiration (art on my shoulders created by the prodigy and dear friend, @weltenwechsel_tattoos), honoring the further development of a theme represented in some of my art as well as a few tattoos on my body, always placed right/left of the midline: biological/artificial - magic/madness - body/spirit - matter/mind. I can see how this will go. I know the pieces fit.",
    cover: ["https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Cover.jpg", "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Cover2.jpg"],
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/1.jpg", caption: "I am quite proud of what this piece has become after much meticulous fine detail work and some bold choices for the design. Taking the tattoo stencil further on paper worked out quite well.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/13.jpg", caption: "The first half of the original stencil, placed as a tattoo on my left shoulder by Weltenwechsel Tattoos (<3), representing my *Madness/Artificial/Worldly/Technical/Mathematical* side." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/12.jpg", caption: "The second half of the original stencil, placed as a tattoo on my right shoulder, representing my *Magic/Organis/Natural/Spiritual/Artistic/Hedonistic/Animalistic* side.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/11.jpg", caption: "This piece received special attention with regard to its UV-light reactivity - I guess it shows :)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/10.jpg", caption: "The piece went through many steps and evolution and was fun to paint each step of the way." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/9.jpg", caption: "I explored more of the perspective-drawing part I tried in the Treedom piece and added lines converging in one place." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/8.jpg", caption: "Once I made the decision to go bold and indeed as colorful as I could, the piece bloomed like a beautiful flower." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/7.jpg", caption: "The collage pieces would later disappear in the background, but I liked crossing over media in this way." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/6.jpg", caption: "I started off with a representation of the stencil (a bit reduced in size) and added symbols for biology and art, natural processes, and geometry." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/5.jpg", caption: "Flower of life onsets made way to focal point shapes." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/4.jpg", caption: "It was then filled in with organic shapes." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/3.jpg", caption: "Geometry crept in first." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/2.jpg", caption: "I love working on a black base and getting the lines settled well." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/TattooMagic/Process/1a.jpg", caption: "The first lines came about by tracking the stencil, but reducing its size slightly." }
    ]
  },
  {
    slug: "Treedom",
    title: "Treedom",
    date: "2024-07-11",
    medium: "Acrylic Paint and Oil on Canvas",
    tags: ["Oil", "Acrylic", "Paints", "Canvas", "completed"],
    description:
      "Wow..this has been a long time coming..I started this back in 2022: my second painting, my first in oil. Now it is finally completed, the unfinished image in a pile between other more advanced pieces had been calling me again this week. The original inspo was classical Starry Night, as well as my favorite painting, CDF's Monk by the sea; plus a contemplation of the view out of my previous living room with the massive windows and moving door looking out over France on the 10th floor I liked to sit by, and the concept of the universe watching over things working out the way they should.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/1.jpg", caption: "Inspiration for this piece: Starry Night." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/2.jpg", caption: "Inspiration for this piece: My living room in Basel." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/3.jpg", caption: "Inspiration for this piece: Monk by the Sea (Moench am Meer)." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/1a.jpg", caption: "Once more gorgeous under UV-light conditions." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/14.jpg", caption: "Originally envisioned as the universe the person was gazing at, it turned into a tree with the person at its core and roots of things they carry along.. The tricky bit introducing the breaks and prolonging the painting time was the use of oil paints (which in regular air will take 15 days to dry properly). This resulted in me losing interest for a while and moving on with something else a few times. The piece changed many times during its creation, but I'm very happy with it now." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/13.jpg", caption: "The base for the sitting person in the tree stem changed a lot over the period of creation (almost 2 years). I wanted to show my roots, being Germany, my cats, which used to represent the concept of Home to me, polyamory, and more, but it felt awkward and too simple. I was in awe with the color mixtures already here.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/12.jpg", caption: "The jump into wild colors and reworking the floor was brave, but not reckless, and much of it motivated by having to wait for the oil colors to dry." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/11.jpg", caption: "Here a originally envisioned sky slowly became a tree, incorporating the meditating person sitting in what is still a bit unassuming window frame lines." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/10.jpg", caption: "When I pulled off the tape that protected the window frame lines, I noted it had worked well but needed more polishing." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/9.jpg", caption: "Window lines still covered, the roots starting to grow more menacing, I realized this image would evolve to be different than I had planned. Permitting and even embracing this to happen has been my key to the joy of drawing from the start - I can never satisfy the image I have in my head to be floating onto the paper or canvas using my hand as the medium - but if I let both the piece and my mental image and expectations evolve, it all becomes beautiful and organic." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/8.jpg", caption: "I uncovered the lines too early and reapplied the tape again later. I still tried sticking with my idea of the sky as the focus point here." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/7.jpg", caption: "My first time drawing a person, felt uneasy and like it would go wrong easily." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/6.jpg", caption: "Starry night is still more represented here, and the tape helped me savor my beautiful, true-to-perspective window lines here." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/5.jpg", caption: "Humbly extending the colored regions." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Treedom/Process/4.jpg", caption: "Beginnings were joyous, thos oil paints were a bitch, but they stayed beautifully mixed, yet separated when dry." }
    ]
  },
  {
    slug: "Update",
    title: "Update",
    date: "2026-03-02",
    medium: "Acrylic Pens on Paper",
    tags: ["Acrylic", "Pens", "Paper", "completed"],
    description:
      "Inspired by a track from Puscifer's album Existential Reckoning, this piece acknowledges that people need to withdraw and take time to work on themselves. In these times, they are not open to connect, and this is not an expression of the level of closeness to me.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/8.jpg", caption: "When I painted this, learning that people can withdraw without breaking connections was a new, surprising lesson to learn. That the person who triggered this was all kinds of imperfect in their relationship to me was something that I tried to not have creep into my expression of the experience in this painting." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/9.jpg", caption: "Feeling I would be done with the subject of this piece soon, I took a short way out and filled open spaces with grey only." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/7.jpg", caption: "I lost my inspiration and motivation for a bit but came back to finish the piece a few months later." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/6.jpg", caption: "Adding color around was originally intended to help fill the image after all, but I experimented with regional pops and bursts of color." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/5.jpg", caption: "I have the tendency to crowd images and always need to pace myself with too much -fill the blanks- enthusiasm." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/4.jpg", caption: "More combinations were a great exercise and led to much method development." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/4a.jpg", caption: "I adore the combination of these two colors in the middle and noted them for future reference." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/3.jpg", caption: "I liked working in black at first, and the lyrics from Puscifer were truly fitting as well." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/2.jpg", caption: "First layout emerging." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Update/Process/1.jpg", caption: "The writing I used in this piece is actually a novel creation that I based on writing samples I had received from the person who triggered this meditation. Each letter is taken from other art he made and altogether turned into this new font. I doubt he realized this when I was working on this art..that's alright, though, and thank you for all the fish :D." }
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
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/5.jpg", caption: "This piece expresses fury and anger with a situation that developed when I invited my friend-at-the-time to Las Vegas and the Grand Canyon for my birthday in 2022, which became a showcase for that friend when my male friend from San Diego joined us." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/4.jpg", caption: "I did not yet know how to exert boundaries, and I felt I was indebted to the friend I invited because she helped me greatly in overcoming a disastrous abusive relationship with a narcissistic ex, listening to me not learning from his mistreatments over and over again. Shaping our relationship as the person who needs help on my part and the provider of care and guidance on her part, we took this dynamic on that trip, where she fully stepped into the receiving role, having me pay for all costs, and then taking center stage to show off to the others in my birthday party trip to the Grand Canyon. Unable to stand my ground, I was miserable. I was ready to step into my power after this trip, and when I asked her to reexamine our dynamics, our connection broke badly. Here, then, I hung her bunny and placed a smudge, smiling cat into the center of the image. This cat, held hostage by her in the aftermath of our falling out, definitely did not get a great position in all this, but she definitely did in this image." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/6.jpg", caption: "I have not finished this piece (yet), feeling weird about airing all this out on Instagram or the like. I do it here because much time has passed, and this piece definitely needs some explanations. We will see if I will finish the picture in the near future or whether the energy is lost and old and dusty, anyway.." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/7.jpg", caption: "Before covering it all with paints, essentially to hide and obscure the content, the mixed media pieces stuck to the canvas visible were all souvenirs and memorabilia from the trip." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/3.jpg", caption: "I considered long and hard about the bunny and had not yet added it here." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/2.jpg", caption: "Looking back at the steps, drawing and building this piece helped catalyze a lot of the insights I described above. At its humble beginnings, the piece was mostly a way to commemorate the trip itself." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/Vegas/Process/1.jpg", caption: "Unobfuscated images of people involved and unaltered memorabilia are visible at this early stage." }
    ]
  },
  {
    slug: "YourLife",
    title: "Your Life",
    date: "2025-06-01",
    medium: "Acrylic Pens and Paints on a paper poster base",
    tags: ["Acrylic", "Pens", "Paints", "Paper", "Poster base", "in progress"],
    description:
      "Work in preparation for a potential art exhibit alongside or for an event organized by the amazing, talented, wise, awe-inspiring elin_im_wunderland.",
    cover: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/Cover.jpg",
    thumb: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/thumb.jpg",
    process: [
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/Process/1.jpg", caption: "It felt like a cheat to start from this poster already perinted - but the poster became way more cool and fun once I applied my art." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/Process/2.jpg", caption: "I needed to restrain myself from adding too much paint and tried to enhance the readability using black acrylic pens." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/Process/3.jpg", caption: "I really like how the paints mix at the bottom." },
      { src: "https://res.cloudinary.com/griwok9m/image/upload/f_auto/q_auto/YourLife/Process/4.jpg", caption: "A host of ongoing pieces calling my name." }
    ]
  }
];
