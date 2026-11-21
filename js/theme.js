// Theme (light/dark/auto/high-contrast) and document-language preferences. Grouped together since both are small, independent "pick a persisted setting, apply it" concerns - UI/document preferences, not core form logic (index.html's own script) or document rendering/translation (templating.js).

// getDocLanguage() is only an initial DEFAULT (what #docLanguage is set to on page load, from localStorage). The live source of truth is data.docLanguage from collectData(), same as every other form field, so it can never drift from what Save/Load sees.
var DOC_LANG_KEY = "icgDocLang";
function getDocLanguage() {
    try { return localStorage.getItem(DOC_LANG_KEY) || "en"; } catch (e) { return "en"; }
}
function getDocTemplate(lang) {
    return Handlebars.templates["template_" + (lang || "en")] || Handlebars.templates.template_en;
}

// Set once settings.json loads (see form.js), to apply its configured defaults - but only for whichever of theme/docLanguage the user hasn't explicitly chosen themselves yet (an explicit choice, saved in localStorage, always wins over the config default).
var applyConfiguredThemeDefault = function () {};
var applyConfiguredDocLanguageDefault = function () {};

// Set by the theme IIFE below; called from ui-i18n.js's applyUiLanguage() so the theme toggle's aria-label/live-region wording ("light"/"dark"/...) updates when the UI language changes, not just when the theme itself does.
var refreshThemeLanguage = function () {};

$(document).ready(function () {

    // Theme toggle. The <head> script (in index.html) already applied the saved theme before first paint; this syncs the dropdown's visual/ARIA state and wires up switching themes from here on.
    (function () {
        var THEME_KEY = "icgTheme";
        var ICONS = { light: "☀", dark: "☾", auto: "◐", "high-contrast": "◑" };
        // Keys into ui-i18n.js's UI_STRINGS - the same translations already used for the dropdown items' own visible text, reused here for the aria-label/live-region wording rather than a separate English-only copy.
        var LABEL_KEYS = { light: "themeLight", dark: "themeDark", auto: "themeAuto", "high-contrast": "themeHighContrast" };
        var buttons = document.querySelectorAll("#themeToggle button[data-theme-value]");
        var mainBtn = document.getElementById("bd-theme");
        var mainIcon = document.getElementById("bd-theme-icon");
        var status = document.getElementById("themeStatus");
        var media = window.matchMedia("(prefers-color-scheme: dark)");

        function getSavedTheme() {
            try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
        }

        function resolvedBsTheme(theme) {
            if (theme === "dark") return "dark";
            if (theme === "auto") return media.matches ? "dark" : "light";
            return "light"; // light, high-contrast
        }

        // (theme, persist, announce) - same parameter order as ui-i18n.js's applyUiLanguage(lang, persist, announce), so the two near-identical "apply a persisted setting and optionally announce it" functions can't have their trailing booleans transposed by mistake.
        // announce defaults to false: the initial applyTheme(saved) call, the "auto" media-query listener reacting to an OS-level change, and the settings.json-configured default below shouldn't trigger a spoken announcement - only an actual click in the dropdown should.
        function applyTheme(theme, persist, announce) {
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
            var label = uiString(LABEL_KEYS[theme] || "themeLight");
            if (mainBtn) mainBtn.setAttribute("aria-label", uiStringFormatted("themeToggleAriaLabel", { theme: label }));
            if (announce && status) status.textContent = uiStringFormatted("themeChangedTo", { theme: label });
            if (persist !== false) { try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* best-effort persistence */ } }
        }

        // persist: false - same reasoning as applyConfiguredThemeDefault's own comment below: a merely-defaulted
        // theme (no explicit saved choice yet) shouldn't be written back as if the visitor had picked it, or
        // settings.json's configured default would never get a chance to apply on a first visit (getSavedTheme()
        // would already return non-null by the time that runs).
        applyTheme(getSavedTheme() || "auto", false, false);

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () { applyTheme(btn.getAttribute("data-theme-value"), true, true); });
        });

        // "Auto" follows the OS preference live, not just at page load.
        media.addEventListener("change", function () {
            if (document.documentElement.getAttribute("data-theme") === "auto") applyTheme("auto");
        });

        // persist: false - a config-driven default shouldn't look like an explicit user choice, or settings.json later changing its default would stop reaching this visitor even though they never actually chose anything themselves.
        applyConfiguredThemeDefault = function (theme) {
            if (theme && !getSavedTheme()) applyTheme(theme, false, false);
        };

        // Re-applies the currently active theme's own aria-label/live-region wording in whatever UI language is now active - doesn't change the theme itself (announce/persist both false).
        refreshThemeLanguage = function () {
            applyTheme(document.documentElement.getAttribute("data-theme") || "light", false, false);
        };
    })();

    // Document language: #docLanguage (just above Institution) picks which template_<lang>.precompiled.js renderResult()/renderLivePreview() use (see getDocTemplate()). A native <select> already announces its own selection change, so no custom live-region status is needed here like the theme toggle (a styled dropdown, not a real <select>) required.
    (function () {
        var select = document.getElementById("docLanguage");
        if (!select) return;

        function getSavedDocLanguage() {
            try { return localStorage.getItem(DOC_LANG_KEY); } catch (e) { return null; }
        }

        select.value = getDocLanguage();

        select.addEventListener("change", function () {
            try { localStorage.setItem(DOC_LANG_KEY, select.value); } catch (e) { /* best-effort persistence */ }
            renderResult();
            if (typeof renderLivePreview === "function") renderLivePreview();
        });

        // Same reasoning as applyConfiguredThemeDefault above: only applies if the user hasn't explicitly picked a document language themselves yet, and doesn't persist as if they had.
        applyConfiguredDocLanguageDefault = function (lang) {
            if (lang && !getSavedDocLanguage()) {
                select.value = lang;
                renderResult();
                if (typeof renderLivePreview === "function") renderLivePreview();
            }
        };
    })();

});
