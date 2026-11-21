function onChange(event){
    data = collectData();
    updateCompensationFieldsVisibility();
}

// Monetary/Points Compensation only make sense (and are only mentioned in the generated document - see the templates' compensation branches) once Compensation actually includes money/points; otherwise hide the row and drop its required-ness so it can't block submission over an irrelevant field.
function updateCompensationFieldsVisibility(){
    var compensation = $("select[name='compensation']").val();
    var showMoney = compensation === "money" || compensation === "moneyPoints";
    var showPoints = compensation === "points" || compensation === "moneyPoints";
    $("#monetaryCompensationRow").toggle(showMoney);
    $("#monetaryCompensation").prop("required", showMoney);
    $("#pointsCompensationRow").toggle(showPoints);
    $("#pointsCompensation").prop("required", showPoints);
}

// Mirrors the "ensurePeriod" Handlebars helper (js/templating.js) - keeps the one-sentence Purpose/Goal fields reading like complete sentences as soon as the researcher tabs away, rather than only once the document is generated/previewed.
function appendPeriodOnBlur(event){
    var el = event.target;
    var v = el.value.replace(/\s+$/, "");
    if (v.length > 0 && !/[.!?]$/.test(v)) {
        el.value = v + ".";
        onChange(event);
    }
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function downloadObjectAsJson(data, fileName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 4));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


var inputKeys = ["title", "duration", "personalData", "storageTime", "purpose", "goal", "departmentHead", "thePIname", "thePIemail", "participants", "monetaryCompensation", "pointsCompensation", "ethicalComittee", "funding"];
var inputRecord = ["demographics", "contact", "audio", "photos", "videos", "motion", "physiological", "eyetracking", "screenrecording", "notes", "interaction"];

function fillSelect(){
    document.getElementById("version").innerHTML = settings["version"];

    $("select[name='institution']").append(new Option(uiString("selectPlaceholder"), ""));
    for (let key in settings["institutions"]) {
        let institution = settings["institutions"][key]
        $("select[name='institution']").append(new Option(institution["name"], institution["name"]));
    }

    $("select[name='type']").append(new Option(uiString("selectPlaceholder"), ""));
    for (let i = 0; i < settings["types"].length; i++) {
        type = settings["types"][i]
        $("select[name='type']").append(new Option(optionLabel("types", type[1], type[0]), type[1]));
    }

    $("select[name='share']").append(new Option(uiString("selectPlaceholder"), ""));
    for (let i = 0; i < settings["dataShare"].length; i++) {
        share = settings["dataShare"][i]
        $("select[name='share']").append(new Option(optionLabel("dataShare", share[1], share[0]), share[1]));
    }

    $("select[name='encryption']").append(new Option(uiString("selectPlaceholder"), ""));
    for (let i = 0; i < settings["dataEncryption"].length; i++) {
        encryption = settings["dataEncryption"][i]
        $("select[name='encryption']").append(new Option(optionLabel("dataEncryption", encryption[1], encryption[0]), encryption[1]));
    }

    $("select[name='compensation']").append(new Option(uiString("selectPlaceholder"), ""));
    for (let i = 0; i < settings["compensation"].length; i++) {
        compensation = settings["compensation"][i]
        $("select[name='compensation']").append(new Option(optionLabel("compensation", compensation[1], compensation[0]), compensation[1]));
    }

    refreshInputHints();

    $("#hostUrl").attr("href", settings["hostUrl"]);
    // Hides the whole link (not just the image) when there's no logo configured, rather than leaving a broken/empty image visible.
    if (settings["hostLogo"]) {
        // An absolute URL (http(s)://, protocol-relative //, or a data: URI) is used as-is; anything else is treated as a local filename inside img/, same as before.
        var isExternal = /^(https?:)?\/\/|^data:/i.test(settings["hostLogo"]);
        $("#hostLogo").attr("src", isExternal ? settings["hostLogo"] : "img/" + settings["hostLogo"]);
        $("#hostUrl").show();
    } else {
        $("#hostUrl").hide();
    }

    let savedData = null;
    try { savedData = sessionStorage.getItem("icgData"); } catch (e) { /* storage unavailable */ }

    let restored = false;
    if (savedData != null) {
        try {
            fillData(JSON.parse(savedData));
            restored = true;
        } catch (e) {
            // corrupt saved data: fall through to a blank form
        }
    }
    if (!restored) {
        for (let i = 0; i < settings["researcherCount"]; i++){
            addResearcher();
        }
    }
    updateCompensationFieldsVisibility();
}

// The blank placeholder option fillSelect() adds to each of these selects is built once, before a language switch could update it - re-run on every UI language change (see ui-i18n.js's applyUiLanguage) so it doesn't stay stuck in whichever language was active when the page loaded.
function refreshSelectPlaceholders(){
    ["institution", "type", "share", "encryption", "compensation"].forEach(function (name) {
        $("select[name='" + name + "'] option[value='']").text(uiString("selectPlaceholder"));
    });
}

// Same reasoning as refreshSelectPlaceholders() above, for the type/compensation/share/encryption option text built from settings.json's arrays + optionLabel().
function refreshOptionLabels(){
    function refresh(name, category, pairs) {
        (pairs || []).forEach(function (pair) {
            $("select[name='" + name + "'] option[value='" + pair[1] + "']").text(optionLabel(category, pair[1], pair[0]));
        });
    }
    refresh("type", "types", settings["types"]);
    refresh("compensation", "compensation", settings["compensation"]);
    refresh("share", "dataShare", settings["dataShare"]);
    refresh("encryption", "dataEncryption", settings["dataEncryption"]);
}

// Input placeholder hints: settings.json's "hints" is a flat, single-language admin override (same treatment as
// the "types"/"compensation" option labels there - shown as-is regardless of UI language); a field the admin
// hasn't customized falls back to DEFAULT_HINTS' translation for the current UI language. Re-run on every
// language change, same reasoning as refreshSelectPlaceholders() above.
function refreshInputHints(){
    var overrides = settings["hints"] || {};
    for (let key in DEFAULT_HINTS) {
        var text = overrides[key] != null ? overrides[key] : (DEFAULT_HINTS[key][currentUiLanguage] || DEFAULT_HINTS[key].en);
        if (key === "procedure"){
            $("textarea[name='" + key + "'] ").attr("placeholder", text);
        } else {
            $("input[name='" + key + "'] ").attr("placeholder", text);
        }
    }
}

var researcherIdCounter = 0;

function addResearcher (){
        var uid = researcherIdCounter++;
        var nameId = "researcherName" + uid;
        var emailId = "researcherEmail" + uid;
        var link = `<div class="row mt-3 researchersContainer">
                <div class="col-4"></div>
                <div class="col-8">
                    <div class="row mt-3">
                        <div class="col-2"><label class="researcherName danger" for="${nameId}">Name</label></div>
                        <div class="col-10">
                            <div class="input-group">
                            <input class="form-control" id="${nameId}" name="researcherName" onchange="onChange(event)" required />
                            <button class="btn btn-danger btnRemoveResearcher" aria-label="Remove researcher" onclick="removeResearcher(1)" type="button">-</button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-2"><label class="researcherEmail danger" for="${emailId}">E-Mail</label></div>
                        <div class="col-10"><input class="form-control" id="${emailId}" name="researcherEmail"  type="email" onchange="onChange(event)" required />
                        </div>
                    </div>
                </div>
            </div>`;
        // Always insert directly above the fixed "+ Add Researcher" row, rather than after whichever researcher was last - that row naturally ends up below every researcher as the list grows.
        document.getElementById("addResearchersContainer").insertAdjacentHTML("beforebegin", link);
        correctResercherNumbers();
        ensureResearchersLabel();
}

// Keeps "All involved researchers" living in the first researcher's own col-4 (same row as "Name 1"), rather than a separate heading row - re-homes it there whenever the list changes, recreating it if it was just destroyed along with whichever block used to hold it. Once the list is empty, it falls back to the "+ Add Researcher" row's own col-4 instead of disappearing, so that row still reads as a placeholder for the group rather than an unlabeled button.
function ensureResearchersLabel() {
    var lst = document.getElementsByClassName("researchersContainer");
    var label = document.getElementById("additionalResearchers");
    var targetCol4 = lst.length > 0
        ? lst[0].querySelector(".col-4")
        : document.getElementById("addResearchersContainer").querySelector(".col-4");
    if (label) {
        label.textContent = uiString("allInvolvedResearchersLabel");
        if (label.parentElement !== targetCol4) targetCol4.appendChild(label);
    } else {
        targetCol4.insertAdjacentHTML("afterbegin", '<span id="additionalResearchers" class="danger">' + uiString("allInvolvedResearchersLabel") + '</span>');
    }
}

function removeResearcher(value){
    var lstResearchers = document.getElementsByClassName("researchersContainer");
    if (lstResearchers.length > 0){
        lstResearchers[value].remove();
    }
    correctResercherNumbers();
    ensureResearchersLabel();
    data = collectData();
}

function correctResercherNumbers (){
    var lstResearchers = document.getElementsByClassName("researcherName");
    for (var i = 0; i < lstResearchers.length; i++){
        var researcherName = lstResearchers[i];
        researcherName.innerHTML = uiString("researcherNameLabel") + " " + (i+1);
    }
    var lstResearchers = document.getElementsByClassName("btnRemoveResearcher");
    for (var i = 0; i < lstResearchers.length; i++){
        var researcherName = lstResearchers[i];
        researcherName.setAttribute("onclick", "removeResearcher(" + (i) + ")");
        researcherName.setAttribute("aria-label", uiString("removeResearcherAria"));
    }
    var lstResearchers = document.getElementsByClassName("researcherEmail");
    for (var i = 0; i < lstResearchers.length; i++){
        var researcherName = lstResearchers[i];
        researcherName.innerHTML = uiString("researcherEmailLabel") + " " + (i+1);
    }
}

function fillData(data){
    $("textarea[name='procedure']").val(data["procedure"]);
    var record = data["record"];
    for (let key in record) {
        $("input[name='record" + capitalize(key) + "']").prop("checked", record[key]);
    }

    inputKeys.forEach((key) => {
        $("input[name='" + key + "']").val(data[key]);
    });

    // .val() rather than .attr("selected", true) on the matching <option>: the "selected" HTML attribute only sets the initial defaultSelected state at parse time - once these options were already dynamically created by fillSelect(), setting the attribute afterward doesn't reliably update the actual visible selection in modern browsers.
    $("select[name='institution']").val(data["institution"]);
    $("select[name='type']").val(data["type"]);
    $("select[name='share']").val(data["share"]);
    $("select[name='encryption']").val(data["encryption"]);
    $("select[name='compensation']").val(data["compensation"]);
    // Explicitly defaults to English for old saves that predate this field, or any unrecognized value, rather than silently leaving whatever the select happened to already be set to.
    var validDocLanguages = ["en", "de", "es", "fr", "it"];
    $("select[name='docLanguage']").val(validDocLanguages.includes(data["docLanguage"]) ? data["docLanguage"] : "en");

    document.querySelectorAll(".researchersContainer").forEach(el => el.remove());
    if (data["researchers"] != null){
        data["researchers"].forEach((researcher) => {
            addResearcher();
            var lstResearchers = document.getElementsByClassName("researchersContainer");
            var lastElement = lstResearchers[lstResearchers.length-1];
            // || "" - a malformed/foreign import's entry missing name/email would otherwise assign the literal string "undefined" (native .value coerces via ToString).
            lastElement.getElementsByClassName("form-control")[0].value = (researcher && researcher["name"]) || "";
            lastElement.getElementsByClassName("form-control")[1].value = (researcher && researcher["email"]) || "";
        });
    }
    // Covers the case data.researchers is missing/empty: addResearcher()'s own call never ran above, so nothing else would re-home the label onto the now-empty "+ Add Researcher" row otherwise.
    ensureResearchersLabel();
    updateCompensationFieldsVisibility();
}

// Drag-and-drop makes the whole window a drop target rather than a ".json"-filtered file picker click, so this is now reachable with any JSON file a user happens to drag in, not just ones exported by this tool - checks for at least one field an export would actually have, rather than trusting arbitrary valid JSON (e.g. a stray package.json) to be one.
function looksLikeExportedData(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return false;
    return ["title", "institution", "researchers", "docLanguage", "type"].some((key) => key in obj);
}

// Shared by the file-picker Import button and the drag-and-drop overlay. Reads a File, fills the form from it, and immediately refreshes the live preview - since this already knows the exact moment fillData() finishes, there's no need for preview.js's old click-then-poll fallback (which existed only because it couldn't otherwise tell when an asynchronous FileReader read had completed).
function importFile(file) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var jsonObj;
        try {
            jsonObj = JSON.parse(event.target.result);
            if (!looksLikeExportedData(jsonObj)) throw new Error("not an exported settings file");
        } catch (e) {
            alert("Could not read that file. Please choose a settings JSON exported by this tool.");
            return;
        }
        // Separate from the parse/shape check above: the file itself was read fine here, so a problem applying it to the form shouldn't be blamed on "could not read that file".
        try {
            data = jsonObj;
            fillData(data);
            if (typeof renderLivePreview === "function") renderLivePreview();
        } catch (e) {
            alert("That file was read, but some of its data could not be applied to the form.");
        }
    };
    reader.readAsText(file);
}

// Shared by generate() and the navbar's #btnPrintPreview button (see preview.js): both need #results populated from the current form data, but only generate() should switch the page into view mode.
function renderResult(){
    // Defensive: every current caller (generate(), #btnPrintPreview, beforeprint) only ever runs well after settings.json has loaded, but if that ever changes, settings["institutions"] being undefined here would throw uncaught rather than fail quietly.
    if (!settings || !settings.institutions) return;
    data = collectData();
    var template = getDocTemplate(data.docLanguage);

    let institution = settings["institutions"][data["institution"]]
    if (template != null) {
        try {
            let result = template({...data, ...institution});
            $("#results").html(result);
        } catch (e) {
            /* incomplete data: leave whatever was last successfully rendered */
        }
    }
}

// Ctrl+P / the browser's own Print menu bypass #btnPrintPreview and #btnPrint entirely and print whatever is currently in the DOM. Without this, printing before ever clicking Generate or Print left #results empty, so the print allowlist (see style.css) showed a blank page. beforeprint fires right before any print action, regardless of how it was triggered, so re-render here as a safety net on top of what the buttons already do explicitly.
window.addEventListener("beforeprint", function () {
    renderResult();
});

function generate(){
    renderResult();

    // On wide screens the live preview + navbar Print button already cover what this view switch is for, and #btnGenerate/.uiView are hidden there (see style.css) - but a hidden (not disabled) submit button still lets Enter in a text field implicitly submit the form, so this guards against hiding #input with nothing on screen to replace it with.
    if (document.body.classList.contains("has-live-preview") && window.matchMedia("(min-width: 1200px)").matches) {
        return;
    }

    // #btnPrintPreview isn't itself .uiView (that class is force-hidden on wide screens, and this button must stay visible there), so it's synced explicitly alongside every .uiView show()/hide() instead.
    $(".uiView, #btnPrintPreview").show();
    $(".uiEdit").hide();
    $("#input").hide();
    $("#fieldsrequired").hide();
    // Move focus (and the screen reader's point of regard) to the generated document, since the view just swapped from the form to the result with no page navigation to announce it.
    document.getElementById("results").focus();

    setTimeout(function () {
             // window.print();
         }, 100);
}

var settings = {};
var data = {};
$(document).ready(function() {

    // Bootstrap's tooltips don't activate from the data attributes alone - each trigger element needs its own Tooltip instance. Default trigger is "hover focus", so these work for keyboard users too, not just mouse.
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
        new bootstrap.Tooltip(el);
    });

    fetch('./settings.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
            settings = responseJson;
            fillSelect();
            applyConfiguredThemeDefault(settings.theme);
            applyConfiguredDocLanguageDefault(settings.docLanguage);
            applyConfiguredUiLanguageDefault(settings.uiLanguage);
        });

    $("#demographicsForm").on("submit", function(e) {
        e.preventDefault();
        generate();
    });

    $(".uiEdit").show();
    $(".uiView, #btnPrintPreview").hide();
    $(".btnBack").click(function(e){
        e.preventDefault();
        $(".uiEdit").show();
        $(".uiView, #btnPrintPreview").hide();
        $("#input").show();
        $("#fieldsrequired").show();
        $("#btnGenerate").show();
        $("#results").html("");
        // Same reasoning as generate(): the view just swapped back to the form, so move focus there instead of leaving it on a button that just disappeared from view.
        document.getElementById("pageTitle").focus();
    });

    $("#btnAddResearcher").click(function(e){addResearcher ();});

    $("#purpose, #goal").on("blur", appendPeriodOnBlur);

    $(".btnExport").click(function() {
        data = collectData();
        downloadObjectAsJson(data, "exportInformedConsent.json");
    });

    $("#btnImport").click(function() {
        $("#fileInput").click();
    });

    $('#fileInput').change(function (e) {
        importFile(e.target.files[0]);
    });

    // Drag-and-drop import, reusing the same importFile() the file picker uses. The overlay is purely visual feedback - the real drop target is `window`, so it doesn't matter which element the browser reports as the drop/dragenter/dragleave target.
    var dropOverlay = document.getElementById("dropOverlay");
    if (dropOverlay) {
        var dragDepth = 0; // dragenter/dragleave fire once per element boundary crossed, including nested children, so a plain counter is needed rather than toggling on every event.

        function isFileDrag(e) {
            return e.dataTransfer && Array.prototype.indexOf.call(e.dataTransfer.types || [], "Files") !== -1;
        }

        window.addEventListener("dragenter", function (e) {
            if (!isFileDrag(e)) return;
            dragDepth++;
            dropOverlay.classList.remove("d-none");
        });

        window.addEventListener("dragover", function (e) {
            if (!isFileDrag(e)) return;
            e.preventDefault(); // required, or the browser refuses to allow a drop here at all
        });

        // No isFileDrag(e) guard here (unlike dragenter/dragover): dataTransfer.types on the final dragleave as the cursor exits the browser window isn't reliably populated across browsers, which would otherwise leave dragDepth stuck above 0 and the overlay stuck visible. Decrementing unconditionally is safe - Math.max keeps it from ever going negative, so a stray dragleave from a non-file drag (when dragDepth is already 0) is a no-op.
        window.addEventListener("dragleave", function (e) {
            dragDepth = Math.max(0, dragDepth - 1);
            if (dragDepth === 0) dropOverlay.classList.add("d-none");
        });

        window.addEventListener("drop", function (e) {
            if (!isFileDrag(e)) return;
            e.preventDefault();
            dragDepth = 0;
            dropOverlay.classList.add("d-none");
            if (e.dataTransfer.files[0]) importFile(e.dataTransfer.files[0]);
        });
    }

    $("#btnExample").click(function() {
        fetch('./example.json')
            .then((response)=>response.json())
            .then((example)=>{fillData(example);data = collectData();});
    });

});
