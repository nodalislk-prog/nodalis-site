/* Nodalis — warm the cache.
   As soon as the first screen is painted, quietly fetch every catalogue image
   in the background, so tiles and product pages appear instantly when clicked.
   Runs at low priority: it never competes with what the visitor is looking at. */
(function () {
  'use strict';

  function warm() {
    if (typeof CATEGORIES === 'undefined' || typeof PRODUCTS === 'undefined') return;

    var urls = [];

    /* section tiles */
    Object.keys(CATEGORIES).forEach(function (k) {
      var c = CATEGORIES[k];
      urls.push(c.image || ('images/' + k + '.jpg'));
    });

    /* product photographs — front first, then the hover shot */
    PRODUCTS.forEach(function (p) { urls.push('images/products/' + p.id + '-front.jpg'); });
    PRODUCTS.forEach(function (p) { urls.push('images/products/' + p.id + '-side.jpg'); });

    /* the other pages, so navigation is instant too */
    ['women.html', 'mens.html', 'petstore.html', 'category.html', 'product.html', 'creator.html']
      .forEach(function (page) {
        if (location.pathname.indexOf(page) === -1) {
          var l = document.createElement('link');
          l.rel = 'prefetch'; l.href = page;
          document.head.appendChild(l);
        }
      });

    /* fetch a few at a time so nothing floods the connection */
    var i = 0;
    function next() {
      if (i >= urls.length) return;
      var url = urls[i++];
      var img = new Image();
      if ('fetchPriority' in img) img.fetchPriority = 'low';
      img.onload = img.onerror = next;
      img.src = url;
    }
    for (var lane = 0; lane < 4; lane++) next();
  }

  function go() {
    if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 2500 });
    else setTimeout(warm, 800);
  }

  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go);
})();
