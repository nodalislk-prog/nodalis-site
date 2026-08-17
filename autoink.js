/* Nodalis — automatic text contrast.
   Reads the page's background gradient, works out the colour behind every
   section, and picks the text colour that reads best on it. Re-runs whenever
   the page grows (new products, images loading, window resize), so text can
   never end up invisible as the site fills up. */
(function () {
  'use strict';

  /* candidates, tried in order of preference; the one with the best
     contrast against the actual background wins */
  var PALETTES = [
    { ink: '#2D2D2D', soft: '#5C5460', gold: '#7A5620' },   /* charcoal, for light grounds */
    { ink: '#FBF6FA', soft: '#DCC7DF', gold: '#DCC08A' },   /* ivory, for dark grounds */
    { ink: '#14101A', soft: '#332B3B', gold: '#5E410F' },   /* deep ink, for mid tones */
    { ink: '#FFFFFF', soft: '#F0E6F2', gold: '#F0D9A4' }    /* pure light, last resort */
  ];

  function lum(rgb) {
    var c = rgb.map(function (v) {
      v = v / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }

  function ratio(a, b) {
    var la = lum(a), lb = lum(b);
    var hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05);
  }

  function hexToRgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  /* pull "rgb(r, g, b) NN%" pairs out of the computed gradient */
  function readStops() {
    var bg = getComputedStyle(document.body).backgroundImage || '';
    var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)\s*([\d.]+)%/g;
    var stops = [], m;
    while ((m = re.exec(bg)) !== null) {
      stops.push({ rgb: [+m[1], +m[2], +m[3]], at: parseFloat(m[4]) });
    }
    return stops.length >= 2 ? stops : null;
  }

  function colourAt(stops, pct) {
    if (pct <= stops[0].at) return stops[0].rgb;
    if (pct >= stops[stops.length - 1].at) return stops[stops.length - 1].rgb;
    for (var i = 0; i < stops.length - 1; i++) {
      var a = stops[i], b = stops[i + 1];
      if (pct >= a.at && pct <= b.at) {
        var t = (b.at - a.at) === 0 ? 0 : (pct - a.at) / (b.at - a.at);
        return [0, 1, 2].map(function (j) {
          return Math.round(a.rgb[j] + (b.rgb[j] - a.rgb[j]) * t);
        });
      }
    }
    return stops[stops.length - 1].rgb;
  }

  function apply() {
    var stops = readStops();
    if (!stops) return;

    var docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) || 1;
    var blocks = document.querySelectorAll('section, header, footer, .chapter, .profile');

    blocks.forEach(function (el) {
      if (el.hasAttribute('data-ink-lock')) return;      /* opt out where a design needs fixed colours */

      var box = el.getBoundingClientRect();
      var top = box.top + window.scrollY;
      var mid = top + box.height / 2;
      var pct = Math.max(0, Math.min(100, (mid / docH) * 100));

      var bg = colourAt(stops, pct);
      var pick = PALETTES[0], best = 0;
      for (var i = 0; i < PALETTES.length; i++) {
        var r = ratio(hexToRgb(PALETTES[i].ink), bg);
        /* prefer the first candidate that comfortably clears the standard */
        if (r >= 5.5) { pick = PALETTES[i]; best = r; break; }
        if (r > best) { best = r; pick = PALETTES[i]; }
      }

      el.style.setProperty('--ink', pick.ink);
      el.style.setProperty('--ink-soft', pick.soft);
      el.style.setProperty('--yarn', pick.gold);
    });
  }

  var pending = null;
  function schedule() {
    if (pending) cancelAnimationFrame(pending);
    pending = requestAnimationFrame(apply);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule);
  } else {
    schedule();
  }
  window.addEventListener('load', schedule);
  window.addEventListener('resize', schedule);

  /* the page grows when products, tiles or images arrive — re-check then */
  if ('ResizeObserver' in window) {
    new ResizeObserver(schedule).observe(document.body);
  }
  if ('MutationObserver' in window) {
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  }
  document.addEventListener('load', function (e) {
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO')) schedule();
  }, true);
})();
