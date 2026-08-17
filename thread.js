/* Nodalis — the thread.
   A single continuous line of yarn drawn behind the whole site. It spills from
   a ball of wool on the homepage, then carries on from page to page: each page
   picks up where the last one left off, so the thread never breaks.
   Draws itself as you scroll. Sits behind everything, never intercepts clicks. */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var KEY = 'nodalis-thread-side';           /* which edge the thread left on */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var isHome = /(^|\/)(index\.html)?$/.test(location.pathname.replace(/\/+$/, '/')) ||
               document.body.hasAttribute('data-thread-start');

  var wrap, svg, path, ball, len = 0, docH = 0;

  function build() {
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'nodalis-thread';
      wrap.setAttribute('aria-hidden', 'true');
      svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('preserveAspectRatio', 'none');
      path = document.createElementNS(NS, 'path');
      path.setAttribute('class', 'nt-line');
      svg.appendChild(path);
      wrap.appendChild(svg);
      document.body.appendChild(wrap);
    }

    docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
    var W = 100;                                  /* viewBox units across */
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + docH);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', docH);

    /* where the thread enters: homepage from the ball, others from where the
       previous page left it (remembered), so the line feels unbroken */
    var enterLeft = true;
    try {
      var saved = sessionStorage.getItem(KEY);
      if (!isHome && saved) enterLeft = saved === 'left';
    } catch (e) {}

    var startY = isHome ? 150 : 0;
    var startX = enterLeft ? 14 : 86;

    /* meander down the page: a slow S, wall to wall, one waypoint per screen */
    var steps = Math.max(4, Math.round(docH / 420));
    var d = 'M ' + startX + ' ' + startY;
    var x = startX, y = startY;
    var goRight = enterLeft;

    for (var i = 0; i < steps; i++) {
      var ny = startY + ((docH - startY) * (i + 1)) / steps;
      var nx = goRight ? (78 + (i % 3) * 5) : (12 + (i % 3) * 5);
      var c1x = goRight ? x + 46 : x - 46;
      var c2x = goRight ? nx - 40 : nx + 40;
      var midA = y + (ny - y) * 0.35;
      var midB = y + (ny - y) * 0.7;
      d += ' C ' + c1x + ' ' + midA + ', ' + c2x + ' ' + midB + ', ' + nx + ' ' + ny;
      x = nx; y = ny; goRight = !goRight;
    }
    path.setAttribute('d', d);

    try { sessionStorage.setItem(KEY, x < 50 ? 'left' : 'right'); } catch (e) {}

    /* the ball of wool, homepage only — wound from many overlapping strands,
       in the continuous-line style, with loose loops trailing from the base */
    if (isHome && !ball) {
      ball = document.createElementNS(NS, 'g');
      ball.setAttribute('class', 'nt-ball');

      var cx = startX, cy = startY - 74, r = 46;

      /* clip so every strand stays inside the sphere */
      var clipId = 'nt-ball-clip';
      var defs = document.createElementNS(NS, 'defs');
      var clip = document.createElementNS(NS, 'clipPath');
      clip.setAttribute('id', clipId);
      var clipC = document.createElementNS(NS, 'circle');
      clipC.setAttribute('cx', cx); clipC.setAttribute('cy', cy); clipC.setAttribute('r', r);
      clip.appendChild(clipC); defs.appendChild(clip); ball.appendChild(defs);

      var outline = document.createElementNS(NS, 'circle');
      outline.setAttribute('cx', cx); outline.setAttribute('cy', cy); outline.setAttribute('r', r);
      ball.appendChild(outline);

      var wound = document.createElementNS(NS, 'g');
      wound.setAttribute('clip-path', 'url(#' + clipId + ')');
      /* strands: ellipses at rotating angles, like yarn wound over itself */
      for (var s = 0; s < 22; s++) {
        var e = document.createElementNS(NS, 'ellipse');
        var t = s / 22;
        var rx = r * (0.16 + 0.82 * Math.abs(Math.sin(t * Math.PI * 1.6 + 0.4)));
        var rot = (s * 47) % 180;
        var ox = (Math.sin(s * 1.7) * r) * 0.16;
        var oy = (Math.cos(s * 2.3) * r) * 0.16;
        e.setAttribute('cx', cx + ox); e.setAttribute('cy', cy + oy);
        e.setAttribute('rx', rx.toFixed(2)); e.setAttribute('ry', (r * 0.99).toFixed(2));
        e.setAttribute('transform', 'rotate(' + rot + ' ' + (cx + ox) + ' ' + (cy + oy) + ')');
        wound.appendChild(e);
      }
      ball.appendChild(wound);

      /* loose loops spilling from the base before the thread runs on */
      var tail = document.createElementNS(NS, 'path');
      var by = cy + r * 0.86;
      tail.setAttribute('d',
        'M ' + (cx + r * 0.15) + ' ' + by +
        ' c 10 10, -22 16, -20 26 c 2 9, 22 7, 24 -2 c 2 -8, -12 -10, -16 -3' +
        ' M ' + (cx + r * 0.5) + ' ' + (by + 8) +
        ' c 12 4, 14 14, 6 17 c -8 3, -13 -6, -6 -10');
      ball.appendChild(tail);

      svg.insertBefore(ball, path);
    }
    if (ball) {
      ball.setAttribute('transform', 'translate(' + (enterLeft ? 0 : 72) + ',0)');
    }

    len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = reduce ? 0 : len;
    draw();
  }

  function draw() {
    if (!len || reduce) return;
    var scrollable = Math.max(1, docH - window.innerHeight);
    var p = Math.min(1, Math.max(0, window.scrollY / scrollable));
    /* thread is already partly drawn on arrival, then completes as you scroll */
    var shown = 0.12 + p * 0.88;
    path.style.strokeDashoffset = len * (1 - shown);
  }

  var tick = null;
  function onScroll() {
    if (tick) return;
    tick = requestAnimationFrame(function () { tick = null; draw(); });
  }

  var rebuild = null;
  function onResize() {
    clearTimeout(rebuild);
    rebuild = setTimeout(build, 180);
  }

  function start() {
    build();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
