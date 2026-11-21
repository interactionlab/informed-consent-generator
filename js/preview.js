/*
 * Live split-view preview.
 *
 * On wide screens (>= 1200px) the consent document is rendered continuously as
 * the form changes, so the effect of every field, checkbox and dropdown is
 * visible immediately, next to the form. Progressive enhancement: on narrow
 * screens nothing changes, and the existing "Generate" / "Print" flow keeps
 * working exactly as before.
 *
 * Reuses the same building blocks as generate(): collectData(), the compiled
 * Handlebars template, the settings object and the selected institution.
 */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function renderLivePreview() {
    if (typeof settings === 'undefined' || !settings || !settings.institutions) return;
    var out = document.getElementById('livePreview');
    if (!out) return;
    var data;
    try { data = collectData(); } catch (e) { return; }
    // data.docLanguage (collected like any other field) is the source of
    // truth for which template to use - same reasoning as renderResult() in
    // index.html, so this pane and the generated/printed result can never
    // silently disagree about which language is actually selected.
    var template = typeof getDocTemplate === 'function' ? getDocTemplate(data.docLanguage) : Handlebars.templates.template_en;
    if (!template) return;
    var institution = settings.institutions[data.institution] || {};
    try {
      var html = template(Object.assign({}, data, institution));
      // WCAG 3.1.2 Language of Parts - same reasoning as renderResult() in js/form.js.
      // Set only once the render has actually succeeded, so a mid-typing throw below
      // can't leave the lang attribute pointing at a language the still-displayed
      // (stale, un-rolled-back) content doesn't match.
      out.setAttribute('lang', data.docLanguage || 'en');
      out.innerHTML = html;
    } catch (e) {
      /* incomplete data while typing: keep the last good render */
    }
  }
  window.renderLivePreview = renderLivePreview;

  // The aria-label is set once at creation from whatever uiString() resolves at that moment, and corrected
  // here right after on every language switch (see ui-i18n.js's applyUiLanguage()) - including, empirically,
  // the very first one on page load: this file's own ready handler actually fires before ui-i18n.js's despite
  // loading first in index.html (a raw DOMContentLoaded listener registered during parsing fires after
  // jQuery's own, which is what ui-i18n.js's $(document).ready() queues onto), so a saved non-English choice
  // hasn't been applied yet at creation time and this call needs a follow-up fix-up rather than being correct outright.
  function refreshLivePreviewAriaLabel() {
    var el = document.getElementById('livePreview');
    if (el) el.setAttribute('aria-label', uiString('livePreviewLabel'));
  }
  window.refreshLivePreviewAriaLabel = refreshLivePreviewAriaLabel;

  ready(function () {
    var page = document.getElementById('demographicsPage');
    var form = document.getElementById('demographicsForm');
    if (!page || !form) return;

    var preview = document.createElement('article');
    preview.id = 'livePreview';
    preview.setAttribute('role', 'region'); // explicit role keeps it exposed as a named landmark rather than <article>'s own implicit role
    preview.setAttribute('aria-label', uiString('livePreviewLabel'));
    // Built from uiString() rather than left as hardcoded English, same reasoning as the aria-label above:
    // may still be English right after creation for a returning non-English visitor (see that comment), but
    // carries the data-i18n attribute so ui-i18n.js's own sweep corrects it moments later regardless, instead
    // of depending on this element happening to already exist by the time that sweep runs.
    var emptyP = document.createElement('p');
    emptyP.className = 'livePreview-empty';
    emptyP.setAttribute('data-i18n', 'livePreviewEmptyText');
    emptyP.textContent = uiString('livePreviewEmptyText');
    preview.appendChild(emptyP);
    page.appendChild(preview);
    document.body.classList.add('has-live-preview');

    // "Unlocks" print on wide screens: skips the Generate step and the
    // edit/view mode switch entirely, but still runs the form's native
    // required-field validation first, same guarantee Generate gives via its
    // own type="submit" button.
    var printBtn = document.getElementById('btnPrintPreview');
    if (printBtn) {
      printBtn.addEventListener('click', function () {
        if (!form.reportValidity()) return;
        renderResult();
        window.print();
      });
    }

    // #livePreview's sticky offset and max-height (see style.css) need the
    // navbar's actual rendered height, which depends on font metrics and the
    // logo image rather than being a fixed number. Keep it in sync.
    function syncNavbarHeight() {
      var nav = document.querySelector('nav.navbar');
      if (!nav) return;
      document.documentElement.style.setProperty('--navbar-height', nav.offsetHeight + 'px');
    }
    syncNavbarHeight();
    window.addEventListener('resize', syncNavbarHeight);
    window.addEventListener('load', syncNavbarHeight); // the logo image can finish loading late and change the navbar's height

    var t;
    function schedule() { clearTimeout(t); t = setTimeout(renderLivePreview, 150); }
    form.addEventListener('input', schedule);
    form.addEventListener('change', schedule);
    // The Example button fills fields from JavaScript (fillData), and assigning .value/.prop fires neither input nor change, so the preview never hears about it and a character has to be typed by hand to force a redraw. It's also asynchronous (a fetch), so a fixed delay would only be a guess at that timing. Poll briefly until the fields populate, then render. (Import used to need this too, but importFile() - shared by the file picker and drag-and-drop - now calls renderLivePreview() itself right when fillData() finishes, so it doesn't need to guess.)
    function renderWhenFilled() {
      var tries = 0;
      var iv = setInterval(function () {
        var probe = document.getElementById('title');
        if ((probe && probe.value !== '') || ++tries > 25) {
          clearInterval(iv);
          renderLivePreview();
          setTimeout(renderLivePreview, 300);
        }
      }, 100);
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest) return;
      if (e.target.closest('#btnAddResearcher, .btnRemoveResearcher')) schedule();
      if (e.target.closest('#btnExample')) renderWhenFilled();
    });

    var iv = setInterval(function () {
      if (typeof settings !== 'undefined' && settings && settings.institutions) { clearInterval(iv); renderLivePreview(); }
    }, 200);
    setTimeout(function () { clearInterval(iv); }, 8000);
  });
})();
