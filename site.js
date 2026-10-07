/* Nodalis — shared site behaviour.
   1. Puts the text you edit in the admin (content.js) into the page.
   2. Opens and closes the burger menu.
   3. Small shared touches: footer year, homepage Journal teaser. */
(function () {
  'use strict';

  var DATA = (typeof CONTENT !== 'undefined' && CONTENT) ? CONTENT : { text: {}, journal: [] };

  /* ---------- editable text ----------
     Admin text is plain: a new line becomes a line break, *word* becomes
     italic and **word** becomes bold. Everything else is shown exactly as typed. */
  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function richText(s) {
    return escapeHtml(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }
  window.NodalisText = { rich: richText, escape: escapeHtml };

  function applyText() {
    var t = DATA.text || {};
    var els = document.querySelectorAll('[data-c]');
    for (var i = 0; i < els.length; i++) {
      var v = t[els[i].getAttribute('data-c')];
      if (typeof v === 'string' && v.trim() !== '') els[i].innerHTML = richText(v.trim());
    }
  }
  applyText();

  /* ---------- burger menu ---------- */
  var drawer = document.getElementById('nd-drawer');
  var burger = document.querySelector('.nd-burger');
  var lastFocus = null;
  function openMenu() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nd-locked');
    var first = drawer.querySelector('.nd-close');
    if (first) setTimeout(function () { first.focus(); }, 50);
  }
  function closeMenu() {
    if (!drawer || !drawer.classList.contains('open')) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nd-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (burger) burger.addEventListener('click', openMenu);
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('[data-nd-close]')) { closeMenu(); return; }
      var a = e.target.closest('a');
      if (a) closeMenu();                       /* same-page anchors close the menu */
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
      if (e.key === 'Tab' && drawer.classList.contains('open')) {   /* keep focus inside the menu */
        var f = drawer.querySelectorAll('a, button');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- footer year ---------- */
  var y = document.querySelectorAll('.nd-year');
  for (var j = 0; j < y.length; j++) y[j].textContent = String(new Date().getFullYear());

  /* ---------- Journal helpers (used by journal.html and the homepage) ---------- */
  function published() {
    return (DATA.journal || []).filter(function (a) { return a && a.published !== false && a.title; })
      .sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
  }
  function fmtDate(d) {
    if (!d) return '';
    var dt = new Date(d + 'T00:00:00');
    if (isNaN(dt)) return d;
    return dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  function card(a) {
    var img = a.cover ? '<img src="' + escapeHtml(a.cover) + '" alt="' + escapeHtml(a.title) + '" loading="lazy" onerror="this.remove()">' : '';
    return '<a class="nd-j-card" href="journal.html?a=' + encodeURIComponent(a.id) + '">' +
      '<div class="nd-j-img">' + img + '</div>' +
      '<p class="nd-j-meta">' + escapeHtml(a.category || 'Journal') + (a.date ? ' &nbsp;·&nbsp; ' + fmtDate(a.date) : '') + '</p>' +
      '<h3>' + escapeHtml(a.title) + '</h3>' +
      (a.excerpt ? '<p>' + escapeHtml(a.excerpt) + '</p>' : '') +
      '<span class="nd-j-more">Read the article</span></a>';
  }
  window.NodalisJournal = { published: published, card: card, fmtDate: fmtDate };

  var teaser = document.getElementById('nd-j-teaser-grid');
  if (teaser) {
    var list = published().slice(0, 3);
    if (list.length) teaser.innerHTML = list.map(card).join('');
    else { var sec = document.getElementById('nd-j-teaser'); if (sec) sec.style.display = 'none'; }
  }
})();
