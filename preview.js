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
    var template = Handlebars.templates.template_en;
    if (!template) return;
    var out = document.getElementById('livePreview');
    if (!out) return;
    var data;
    try { data = collectData(); } catch (e) { return; }
    var institution = settings.institutions[data.institution] || {};
    try {
      out.innerHTML = template(Object.assign({}, data, institution));
    } catch (e) {
      /* incomplete data while typing: keep the last good render */
    }
  }
  window.renderLivePreview = renderLivePreview;

  ready(function () {
    var page = document.getElementById('demographicsPage');
    var form = document.getElementById('demographicsForm');
    if (!page || !form) return;

    var preview = document.createElement('div');
    preview.id = 'livePreview';
    preview.setAttribute('aria-label', 'Live preview of the consent document');
    preview.innerHTML = '<p class="livePreview-empty">A live preview of the consent document appears here and updates as you fill in the form.</p>';
    page.appendChild(preview);
    document.body.classList.add('has-live-preview');

    var t;
    function schedule() { clearTimeout(t); t = setTimeout(renderLivePreview, 150); }
    form.addEventListener('input', schedule);
    form.addEventListener('change', schedule);
    // The Example button fills fields from JavaScript, and assigning .value fires neither input nor change, so the preview never hears about it and a character has to be typed by hand to force a redraw.
    // The example is also fetched asynchronously, so a fixed delay would only be a guess at network timing. Poll briefly until the fields populate, then render.
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
