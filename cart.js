/* ============ Nodalis Basket — shared cart (localStorage) ============ */
(function(){
  var KEY = 'nodalis_basket_v1';

  function read(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
  function write(items){
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch(e){}
    refreshBadge();
  }
  function count(){ return read().reduce(function(s,i){ return s + (i.qty || 1); }, 0); }
  function subtotal(){ return read().reduce(function(s,i){ return s + (Number(i.unitPrice)||0) * (i.qty||1); }, 0); }

  function add(item){
    var items = read();
    var match = null;
    for (var k = 0; k < items.length; k++){
      var it = items[k];
      if (it.id === item.id && (it.size||'') === (item.size||'') && (it.colour||'') === (item.colour||'')) { match = it; break; }
    }
    if (match) match.qty = (match.qty || 1) + 1;
    else { item.qty = 1; items.push(item); }
    write(items);
    toast(item.name + ' added to your basket');
  }
  function removeAt(i){ var items = read(); items.splice(i,1); write(items); }
  function setQty(i,q){
    var items = read(); if (!items[i]) return;
    q = Math.max(0, Math.min(20, Number(q)||0));
    if (q === 0) items.splice(i,1); else items[i].qty = q;
    write(items);
  }
  function clearAll(){ write([]); }

  /* ---- nav badge ---- */
  function refreshBadge(){
    var el = document.getElementById('basket-count');
    if (!el) return;
    var n = count();
    el.textContent = n > 0 ? String(n) : '';
    el.style.display = n > 0 ? 'inline-flex' : 'none';
  }
  function injectLink(){
    var right = document.querySelector('.nav-links.right');
    if (!right || document.getElementById('basket-link')) { refreshBadge(); return; }
    var a = document.createElement('a');
    a.href = 'cart.html'; a.id = 'basket-link';
    a.innerHTML = 'Basket<span id="basket-count" aria-hidden="true"></span>';
    right.appendChild(a);
    var st = document.createElement('style');
    st.textContent = '#basket-link{position:relative}' +
      '#basket-count{display:none;margin-left:6px;min-width:17px;height:17px;padding:0 4px;border-radius:50%;' +
      'background:var(--yarn,#7A4B81);color:#FDFBF7;font-size:10.5px;line-height:17px;letter-spacing:0;' +
      'align-items:center;justify-content:center;vertical-align:2px;font-family:var(--sans,Inter,sans-serif)}';
    document.head.appendChild(st);
    refreshBadge();
  }

  /* ---- toast ---- */
  var toastTimer = null;
  function toast(text){
    var t = document.getElementById('basket-toast');
    if (!t){
      t = document.createElement('div');
      t.id = 'basket-toast';
      t.style.cssText = 'position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(8px);z-index:120;' +
        'background:var(--ink,#241B26);color:#FDFBF7;font-family:var(--sans,Inter,sans-serif);font-size:13px;' +
        'letter-spacing:.05em;padding:12px 18px;border:1px solid rgba(253,251,247,.25);opacity:0;' +
        'transition:opacity .25s ease, transform .25s ease;max-width:88vw;text-align:center';
      var link = document.createElement('a');
      link.href = 'cart.html';
      link.style.cssText = 'color:#E8C87A;margin-left:10px;border-bottom:1px solid rgba(232,200,122,.5)';
      link.textContent = 'View basket';
      t.appendChild(document.createElement('span'));
      t.appendChild(link);
      document.body.appendChild(t);
    }
    t.firstChild.textContent = text;
    requestAnimationFrame(function(){ t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(8px)'; }, 3200);
  }

  window.NodalisBasket = { read:read, write:write, add:add, removeAt:removeAt, setQty:setQty,
                           count:count, subtotal:subtotal, clear:clearAll, refreshBadge:refreshBadge };

  window.addEventListener('storage', function(e){ if (e.key === KEY) refreshBadge(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectLink);
  else injectLink();
})();
