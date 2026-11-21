// Theme (light/dark/auto/high-contrast) and document-language preferences. Grouped together since both are small, independent "pick a persisted setting, apply it" concerns - UI/document preferences, not core form logic (index.html's own script) or document rendering/translation (templating.js).

// getDocLanguage() is only an initial DEFAULT (what #docLanguage is set to on page load, from localStorage). The live source of truth is data.docLanguage from collectData(), same as every other form field, so it can never drift from what Save/Load sees.
var DOC_LANG_KEY = "icgDocLang";
function getDocLanguage() {
    try { return localStorage.getItem(DOC_LANG_KEY) || "en"; } catch (e) { return "en"; }
}
function getDocTemplate(lang) {
    return Handlebars.templates["template_" + (lang || "en")] || Handlebars.templates.template_en;
}

$(document).ready(function () {

    // Theme toggle. The <head> script (in index.html) already applied the saved theme before first paint; this syncs the dropdown's visual/ARIA state and wires up switching themes from here on.
    (function () {
        var THEME_KEY = "icgTheme";
        var ICONS = { light: "☀", dark: "☾", auto: "◐", "high-contrast": "◑" };
        var LABELS = { light: "light", dark: "dark", auto: "auto", "high-contrast": "high contrast" };
        var buttons = document.querySelectorAll("#themeToggle button[data-theme-value]");
        var mainBtn = document.getElementById("bd-theme");
        var mainIcon = document.getElementById("bd-theme-icon");
        var status = document.getElementById("themeStatus");
        var media = window.matchMedia("(prefers-color-scheme: dark)");

        function resolvedBsTheme(theme) {
            if (theme === "dark") return "dark";
            if (theme === "auto") return media.matches ? "dark" : "light";
            return "light"; // light, high-contrast
        }

        // announce defaults to false: the initial applyTheme(saved) call and the "auto" media-query listener reacting to an OS-level change shouldn't trigger a spoken announcement - only an actual click in the dropdown should.
        function applyTheme(theme, announce) {
            document.documentElement.setAttribute("data-bs-theme", resolvedBsTheme(theme));
            document.documentElement.setAttribute("data-theme", theme);
            buttons.forEach(function (btn) {
                var active = btn.getAttribute("data-theme-value") === theme;
                btn.classList.toggle("active", active);
                btn.setAttribute("aria-pressed", active ? "true" : "false");
                var check = btn.querySelector(".theme-check");
                if (check) check.classList.toggle("d-none", !active);
            });
            if (mainIcon) mainIcon.textContent = ICONS[theme] || ICONS.light;
            if (mainBtn) mainBtn.setAttribute("aria-label", "Toggle theme (" + (LABELS[theme] || "light") + ")");
            if (announce && status) status.textContent = "Theme changed to " + (LABELS[theme] || theme) + ".";
            try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* best-effort persistence */ }
        }

        var saved = "light";
        try { saved = localStorage.getItem(THEME_KEY) || "light"; } catch (e) { /* storage unavailable */ }
        applyTheme(saved);

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () { applyTheme(btn.getAttribute("data-theme-value"), true); });
        });

        // "Auto" follows the OS preference live, not just at page load.
        media.addEventListener("change", function () {
            if (document.documentElement.getAttribute("data-theme") === "auto") applyTheme("auto");
        });
    })();

    // Document language: #docLanguage (just above Institution) picks which template_<lang>.precompiled.js renderResult()/renderLivePreview() use (see getDocTemplate()). A native <select> already announces its own selection change, so no custom live-region status is needed here like the theme toggle (a styled dropdown, not a real <select>) required.
    (function () {
        var select = document.getElementById("docLanguage");
        if (!select) return;

        select.value = getDocLanguage();

        select.addEventListener("change", function () {
            try { localStorage.setItem(DOC_LANG_KEY, select.value); } catch (e) { /* best-effort persistence */ }
            renderResult();
            if (typeof renderLivePreview === "function") renderLivePreview();
        });
    })();

});
