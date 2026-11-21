/*
 * This file contains the necessary functions to be able to load and handle the templates
 */

// Translates a raw settings.json-coded value (e.g. "online study"; see the
// "types" array) into prose for the active document language. Used by the
// typeLabel helper below, which reads this.docLanguage - whatever was
// actually collected into the data the current render call is using, so it
// can't disagree with which template got picked (see getDocTemplate() and
// collectData() in index.html).
const TYPE_LABELS = {
    en: { "online study": "online study", "user study": "user study", "field study": "field study", "interview": "interview" },
    de: { "online study": "Online-Studie", "user study": "Nutzerstudie", "field study": "Feldstudie", "interview": "Interview" },
    es: { "online study": "estudio en línea", "user study": "estudio con usuarios", "field study": "estudio de campo", "interview": "entrevista" },
    fr: { "online study": "étude en ligne", "user study": "étude utilisateur", "field study": "étude de terrain", "interview": "entretien" },
    it: { "online study": "studio online", "user study": "studio con utenti", "field study": "studio sul campo", "interview": "intervista" }
};

const RECORD_KEY_LABELS = {
    en: {
        demographics: "personal demographics", contact: "contact information", audio: "audio recordings",
        photo: "photographs", video: "video recordings", motion: "motion data", physiological: "physiological signals",
        eyetracking: "eye-tracking data", screenrecording: "screen recordings", notes: "notes", interaction: "interaction logs"
    },
    de: {
        demographics: "persönliche Demografiedaten", contact: "Kontaktinformationen", audio: "Audioaufnahmen",
        photo: "Fotos", video: "Videoaufnahmen", motion: "Bewegungsdaten", physiological: "physiologische Signale",
        eyetracking: "Eye-Tracking-Daten", screenrecording: "Bildschirmaufnahmen", notes: "Notizen", interaction: "Interaktionsprotokolle"
    },
    es: {
        demographics: "datos demográficos personales", contact: "información de contacto", audio: "grabaciones de audio",
        photo: "fotografías", video: "grabaciones de vídeo", motion: "datos de movimiento", physiological: "señales fisiológicas",
        eyetracking: "datos de seguimiento ocular", screenrecording: "grabaciones de pantalla", notes: "notas", interaction: "registros de interacción"
    },
    fr: {
        demographics: "données démographiques personnelles", contact: "coordonnées", audio: "enregistrements audio",
        photo: "photographies", video: "enregistrements vidéo", motion: "données de mouvement", physiological: "signaux physiologiques",
        eyetracking: "données de suivi oculaire", screenrecording: "enregistrements d'écran", notes: "notes", interaction: "journaux d'interaction"
    },
    it: {
        demographics: "dati demografici personali", contact: "informazioni di contatto", audio: "registrazioni audio",
        photo: "fotografie", video: "registrazioni video", motion: "dati di movimento", physiological: "segnali fisiologici",
        eyetracking: "dati di eye-tracking", screenrecording: "registrazioni dello schermo", notes: "note", interaction: "log di interazione"
    }
};

/**
 * Registers the Handlebar helpers
 */
function registerHandlebarHelpers() {
    // Replace \n with <br />
    // Credit to https://stackoverflow.com/questions/12331077/does-handlebars-js-replace-newline-characters-with-br
    Handlebars.registerHelper('breaklines', function(text) {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br />');
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('equal', function(a, b) {
       return a===b;
    });

    Handlebars.registerHelper('unequal', function(a, b) {
        return a!==b;
    });

    Handlebars.registerHelper("unequalTrim", function (a, b) {
        const aa = a == null ? "" : String(a).trim();
        const bb = b == null ? "" : String(b).trim();
        return aa !== bb;
    });

    Handlebars.registerHelper("notBlank", function (v) {
        if (v == null) return false;
        return String(v).trim().length > 0;
    });

    // Purpose/Goal are free-text single sentences typed without an enforced trailing period - adds one if missing, so they always read as a complete sentence next to the prose that follows them. Leaves a still-blank value alone, so "missing" (below) can still tell it's empty and show its placeholder.
    Handlebars.registerHelper("ensurePeriod", function (text) {
        if (text == null || String(text).trim().length === 0) return text;
        var s = String(text);
        return /[.!?]\s*$/.test(s) ? s : s + ".";
    });

    // Live-preview aid: required fields the researcher hasn't filled in yet would otherwise render as blank gaps ("at .", "demographics ()."). Shows a red bracketed placeholder instead, until the field (always validated before Generate/Print) has a real value.
    Handlebars.registerHelper("missing", function (value, label) {
        if (value != null && String(value).trim().length > 0) return value;
        return new Handlebars.SafeString('<span class="missingField">' + Handlebars.Utils.escapeExpression(label) + '</span>');
    });

    // Institution street/zip/city/country (section 6, Principal Investigator / Department Head): each piece only exists once an institution is selected, so this joins only whichever parts are actually present instead of leaving stray ", ," when some are still blank.
    Handlebars.registerHelper("addressLine", function (street, zip, city, country) {
        var zipCity = [zip, city].map(x => (x || "").trim()).filter(Boolean).join(" ");
        var parts = [street, zipCity, country].map(x => (x || "").trim()).filter(Boolean);
        return parts.join(", ");
    });

    Handlebars.registerHelper("joinResearchers", function (researchers, prefix) {
        const names = (researchers ?? [])
            .map(r => `${prefix ?? ""}${r.name ?? ""}`.trim())
            .filter(s => s.length > 0);

        if (names.length === 0) return "";
        if (names.length === 1) return names[0];
        if (names.length === 2) return `${names[0]} and ${names[1]}`;
        return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
    });

    // {{typeLabel}} takes no explicit argument - called as a plain mustache,
    // Handlebars binds `this` to the current data context, so `this.type`
    // reads the same field {{type}} would have printed directly.
    Handlebars.registerHelper('typeLabel', function() {
        var table = TYPE_LABELS[this.docLanguage] || TYPE_LABELS.en;
        return table[this.type] || this.type;
    });

    Handlebars.registerHelper('listTrueKeys', function(obj) {
        // this.docLanguage, same reasoning as typeLabel() above: {{listTrueKeys record}}
        // is called at the template's top level (not inside a block that changes
        // context), so `this` here is the same data object `record` came from.
        const translations = RECORD_KEY_LABELS[this.docLanguage] || RECORD_KEY_LABELS.en;
        const andWord = { en: "and", de: "und", es: "y", fr: "et", it: "e" }[this.docLanguage] || "and";

        const items = Object.keys(obj)
            .filter(k => obj[k])
            .map(k => translations[k] || k); // fall back to key if no translation

        if (items.length > 1) {
            return items.slice(0, -1).join(', ') + ', ' + andWord + ' ' + items[items.length - 1];
        }
        return items[0] || '';
    });
}


function collectData(){
    let data = {};

    data["version"] = settings["version"];
    data["versionData"] = settings["versionData"];

    inputKeys.forEach((key) => {
        data[key] = $("input[name='" + key + "']").val();
    });

    data["record"] = {};
    inputRecord.forEach((key) => {
        data["record"][key] = $("input[name='record" + capitalize(key) + "']").prop('checked')
    });

    data["procedure"] = $("textarea[name='procedure']").val();
    data["institution"] = $("select[name='institution']").val();
    data["type"] = $("select[name='type']").val();
    data["share"] = $("select[name='share']").val();
    data["encryption"] = $("select[name='encryption']").val();
    data["compensation"] = $("select[name='compensation']").val();
    data["docLanguage"] = $("select[name='docLanguage']").val();

    data["researchers"] = [];
    var lstResearchers = document.getElementsByClassName("researchersContainer");
    for (var i = 0; i < lstResearchers.length; i++){
        var researcher = lstResearchers[i];
        var name = researcher.getElementsByClassName("form-control")[0].value;
        var email = researcher.getElementsByClassName("form-control")[1].value;
        data["researchers"].push({"name": name, "email": email});
    }

    // Persist the entered data so a reload restores it. sessionStorage keeps it in
    // the browser only; unlike a cookie it is never sent to the server.
    try {
        sessionStorage.setItem("icgData", JSON.stringify(data));
    } catch (e) {
        /* storage unavailable (private mode / quota): persistence is best-effort */
    }

    return data;
}

registerHandlebarHelpers();