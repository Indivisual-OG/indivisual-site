/**
 * Lightweight email de-obfuscation for the Contact footer.
 * ------------------------------------------------------------
 * The address is stored reversed, so it never appears as a
 * literal "user@domain" string anywhere in the page source or
 * in this file — that alone stops the vast majority of simple
 * bots, which just regex-scan static HTML/JS for email patterns.
 * The real mailto: link and visible text are built here at
 * runtime instead.
 *
 * No third-party service (no Cloudflare, no external requests) —
 * this is plain JS and works identically on any static host.
 *
 * Note: like any client-side obfuscation (Cloudflare's included),
 * this only deters basic scrapers, not bots that fully execute
 * JavaScript. There's no fully bot-proof way to publish a
 * clickable email link; this just raises the bar cheaply.
 *
 * IMPORTANT: because the address below is reversed, it is very easy
 * to introduce a typo here that's nearly invisible to spot (e.g.
 * swapping "_" and "-"). The real address is indivisual_OG@proton.me
 * (underscore, not hyphen). If you ever need to edit this, the
 * safest way is: type the real address forwards, reverse it with
 * `node -e "console.log([...'indivisual_OG@proton.me'].reverse().join(''))"`,
 * and paste the result below — don't hand-edit the reversed text directly.
 */
(function () {
  var reversed = "em.notorp@GO_lausividni";
  var address = reversed.split("").reverse().join("");

  var link = document.getElementById("email-link");
  if (link) {
    link.href = "mailto:" + address;
    link.textContent = "Email: " + address;
  }
})();
