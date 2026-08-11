/*
 * This file contains the necessary functions to be able to load and handle the templates
 */

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

    Handlebars.registerHelper("joinResearchers", function (researchers, prefix) {
        const names = (researchers ?? [])
            .map(r => `${prefix ?? ""}${r.name ?? ""}`.trim())
            .filter(s => s.length > 0);

        if (names.length === 0) return "";
        if (names.length === 1) return names[0];
        if (names.length === 2) return `${names[0]} and ${names[1]}`;
        return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
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