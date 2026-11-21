// Form chrome translations (labels, buttons, headings) - independent from the document language
// (js/theme.js's docLanguage picker, templates/*.handlebars): a researcher can author in an English
// form while generating a German document, and vice versa. Deliberately out of scope here: the 21
// field-help tooltip sentences and the GitHub footer credit line. settings.json's own per-language
// "hints" (js/form.js's refreshInputHints()) are translated separately, since they're admin-configurable
// example content rather than fixed UI chrome.
var UI_STRINGS = {
    pageTitle: { en: "Informed Consent Generator", de: "Generator für Einwilligungserklärungen", es: "Generador de Consentimiento Informado", fr: "Générateur de Consentement Éclairé", it: "Generatore di Consenso Informato" },
    introText: {
        en: "Obtaining informed consent ensures the users' autonomy and privacy, and that the users are aware of potential risks and benefits of your HCI study. That consent should be freely given, specific, informed and unambiguous by way of a request presented in clear and plain language. Consent should be given by an affirmative act, such as checking a box online or signing the form. Please reach out to your supervisor in case of any requests.",
        de: "Die Einholung einer informierten Einwilligung gewährleistet die Autonomie und Privatsphäre der Teilnehmenden und stellt sicher, dass sie sich der möglichen Risiken und Vorteile Ihrer HCI-Studie bewusst sind. Die Einwilligung sollte freiwillig, spezifisch, informiert und eindeutig erfolgen, durch eine in klarer und einfacher Sprache formulierte Anfrage. Die Einwilligung sollte durch eine aktive Handlung erfolgen, etwa das Ankreuzen eines Kästchens online oder das Unterschreiben des Formulars. Bitte wenden Sie sich bei Fragen an Ihre betreuende Person.",
        es: "Obtener el consentimiento informado garantiza la autonomía y privacidad de los usuarios, y que estos sean conscientes de los posibles riesgos y beneficios de su estudio de interacción persona-ordenador. Dicho consentimiento debe darse de forma libre, específica, informada e inequívoca mediante una solicitud redactada en un lenguaje claro y sencillo. El consentimiento debe otorgarse mediante un acto afirmativo, como marcar una casilla en línea o firmar el formulario. Póngase en contacto con su supervisor en caso de cualquier duda.",
        fr: "L'obtention du consentement éclairé garantit l'autonomie et la vie privée des utilisateurs, et veille à ce qu'ils soient conscients des risques et avantages potentiels de votre étude en IHM. Ce consentement doit être donné librement, de manière spécifique, informée et sans ambiguïté, au moyen d'une demande présentée dans un langage clair et simple. Le consentement doit être donné par un acte positif, comme cocher une case en ligne ou signer le formulaire. Merci de contacter votre superviseur pour toute question.",
        it: "Ottenere il consenso informato garantisce l'autonomia e la privacy degli utenti e assicura che siano consapevoli dei potenziali rischi e benefici del vostro studio HCI. Il consenso deve essere dato liberamente, in modo specifico, informato e inequivocabile, tramite una richiesta presentata in un linguaggio chiaro e semplice. Il consenso deve essere espresso con un atto affermativo, come selezionare una casella online o firmare il modulo. Vi preghiamo di contattare il vostro supervisore in caso di domande."
    },
    ethicsText: {
        en: "This informed consent is not suitable for vulnerable groups (children, disabled, prisoners) or when any harm can occur (medical studies). Please consult your local ethics committee.",
        de: "Diese Einwilligungserklärung ist nicht geeignet für schutzbedürftige Gruppen (Kinder, Menschen mit Behinderung, Inhaftierte) oder wenn ein Schaden entstehen kann (medizinische Studien). Bitte wenden Sie sich an Ihre lokale Ethikkommission.",
        es: "Este consentimiento informado no es adecuado para grupos vulnerables (niños, personas con discapacidad, reclusos) ni para casos en los que pueda producirse algún daño (estudios médicos). Consulte a su comité de ética local.",
        fr: "Ce consentement éclairé ne convient pas aux groupes vulnérables (enfants, personnes handicapées, détenus) ni aux situations pouvant entraîner un préjudice (études médicales). Veuillez consulter votre comité d'éthique local.",
        it: "Questo consenso informato non è adatto a gruppi vulnerabili (bambini, persone con disabilità, detenuti) o quando può verificarsi un danno (studi medici). Si prega di consultare il proprio comitato etico locale."
    },
    requiredFieldsText: { en: "* required fields", de: "* Pflichtfelder", es: "* campos obligatorios", fr: "* champs obligatoires", it: "* campi obbligatori" },

    docLanguageLabel: { en: "Document Language", de: "Dokumentsprache", es: "Idioma del documento", fr: "Langue du document", it: "Lingua del documento" },
    institutionLabel: { en: "Institution", de: "Institution", es: "Institución", fr: "Institution", it: "Istituzione" },
    researchTypeLabel: { en: "Kind of research", de: "Art der Forschung", es: "Tipo de investigación", fr: "Type de recherche", it: "Tipo di ricerca" },
    titleLabel: { en: "Title", de: "Titel", es: "Título", fr: "Titre", it: "Titolo" },
    compensationLabel: { en: "Compensation", de: "Vergütung", es: "Compensación", fr: "Compensation", it: "Compenso" },
    monetaryCompensationLabel: { en: "Monetary Compensation", de: "Finanzielle Vergütung", es: "Compensación Monetaria", fr: "Compensation Monétaire", it: "Compenso Monetario" },
    pointsCompensationLabel: { en: "Points Compensation", de: "Punkte-Vergütung", es: "Compensación en Puntos", fr: "Compensation en Points", it: "Compenso in Punti" },
    recordedDataLabel: { en: "Recorded Data", de: "Erfasste Daten", es: "Datos Registrados", fr: "Données Enregistrées", it: "Dati Registrati" },
    demographicsLabel: { en: "Demographics", de: "Demografie", es: "Datos demográficos", fr: "Démographie", it: "Dati demografici" },
    contactInfoLabel: { en: "Contact information", de: "Kontaktinformationen", es: "Información de contacto", fr: "Coordonnées", it: "Informazioni di contatto" },
    userInteractionLabel: { en: "User Interaction", de: "Nutzerinteraktion", es: "Interacción del usuario", fr: "Interaction utilisateur", it: "Interazione utente" },
    audioLabel: { en: "Audio", de: "Audio", es: "Audio", fr: "Audio", it: "Audio" },
    photosLabel: { en: "Photos", de: "Fotos", es: "Fotos", fr: "Photos", it: "Foto" },
    videosLabel: { en: "Videos", de: "Videos", es: "Vídeos", fr: "Vidéos", it: "Video" },
    motionTrackingLabel: { en: "Motion Tracking", de: "Bewegungserfassung", es: "Seguimiento de movimiento", fr: "Suivi des mouvements", it: "Tracciamento del movimento" },
    physioSensingLabel: { en: "Physio. Sensing", de: "Physio. Messung", es: "Medición fisiológica", fr: "Mesure physiologique", it: "Rilevamento fisiologico" },
    eyeHeadTrackingLabel: { en: "Eye/Head Tracking", de: "Blick-/Kopferfassung", es: "Seguimiento ocular/de cabeza", fr: "Suivi oculaire/de la tête", it: "Tracciamento occhi/testa" },
    screenRecordingLabel: { en: "Screen Recording", de: "Bildschirmaufnahme", es: "Grabación de pantalla", fr: "Enregistrement d'écran", it: "Registrazione dello schermo" },
    manualNotesLabel: { en: "Manual notes", de: "Manuelle Notizen", es: "Notas manuales", fr: "Notes manuelles", it: "Note manuali" },
    personalDataLabel: { en: "Which personal data will be collected? (list all)", de: "Welche personenbezogenen Daten werden erhoben? (alle auflisten)", es: "¿Qué datos personales se recopilarán? (enumere todos)", fr: "Quelles données personnelles seront collectées ? (listez-les toutes)", it: "Quali dati personali verranno raccolti? (elencarli tutti)" },
    storageTimeLabel: { en: "How long will the data stored with the researchers?", de: "Wie lange werden die Daten bei den Forschenden gespeichert?", es: "¿Durante cuánto tiempo se conservarán los datos con los investigadores?", fr: "Pendant combien de temps les données seront-elles conservées par les chercheurs ?", it: "Per quanto tempo i dati saranno conservati dai ricercatori?" },
    shareLabel: { en: "Will the raw data be public?", de: "Werden die Rohdaten veröffentlicht?", es: "¿Se harán públicos los datos en bruto?", fr: "Les données brutes seront-elles rendues publiques ?", it: "I dati grezzi saranno resi pubblici?" },
    encryptionLabel: { en: "Will the data be stored encrypted?", de: "Werden die Daten verschlüsselt gespeichert?", es: "¿Se almacenarán los datos cifrados?", fr: "Les données seront-elles stockées chiffrées ?", it: "I dati saranno archiviati in modo crittografato?" },
    durationLabel: { en: "Estimated Study Duration", de: "Geschätzte Studiendauer", es: "Duración estimada del estudio", fr: "Durée estimée de l'étude", it: "Durata stimata dello studio" },
    participantsLabel: { en: "Estimated Number of Participants", de: "Geschätzte Teilnehmerzahl", es: "Número estimado de participantes", fr: "Nombre estimé de participants", it: "Numero stimato di partecipanti" },
    purposeLabel: { en: "Purpose", de: "Zweck", es: "Propósito", fr: "But", it: "Scopo" },
    goalLabel: { en: "Goal", de: "Ziel", es: "Objetivo", fr: "Objectif", it: "Obiettivo" },
    procedureLabel: { en: "Procedure (in 4-6 steps)", de: "Ablauf (in 4-6 Schritten)", es: "Procedimiento (en 4-6 pasos)", fr: "Procédure (en 4 à 6 étapes)", it: "Procedura (in 4-6 passaggi)" },
    piNameLabel: { en: "Principal Investigator Name", de: "Name der Projektleitung", es: "Nombre del Investigador Principal", fr: "Nom du Responsable Scientifique", it: "Nome del Responsabile Scientifico" },
    piEmailLabel: { en: "Principal Investigator E-Mail", de: "E-Mail der Projektleitung", es: "Correo del Investigador Principal", fr: "E-mail du Responsable Scientifique", it: "Email del Responsabile Scientifico" },
    departmentHeadLabel: { en: "Head of the Department (if not the principal investigator)", de: "Abteilungsleitung (falls nicht identisch mit der Projektleitung)", es: "Jefe del Departamento (si no es el investigador principal)", fr: "Directeur du Département (si différent du responsable scientifique)", it: "Direttore del Dipartimento (se diverso dal responsabile scientifico)" },
    fundingLabel: { en: "Funding", de: "Finanzierung", es: "Financiación", fr: "Financement", it: "Finanziamento" },
    ethicalCommitteeLabel: { en: "Ethical Committee", de: "Ethikkommission", es: "Comité de Ética", fr: "Comité d'Éthique", it: "Comitato Etico" },

    btnExample: { en: "Example", de: "Beispiel", es: "Ejemplo", fr: "Exemple", it: "Esempio" },
    btnExport: { en: "Export", de: "Export", es: "Exportar", fr: "Exporter", it: "Esporta" },
    btnImport: { en: "Import", de: "Import", es: "Importar", fr: "Importer", it: "Importa" },
    btnBack: { en: "Back", de: "Zurück", es: "Atrás", fr: "Retour", it: "Indietro" },
    btnGenerate: { en: "Generate From", de: "Formular Generieren", es: "Generar Formulario", fr: "Générer le Formulaire", it: "Genera Modulo" },
    btnPrint: { en: "Print", de: "Drucken", es: "Imprimir", fr: "Imprimer", it: "Stampa" },
    btnAddResearcher: { en: "+ Add Researcher", de: "+ Forschende hinzufügen", es: "+ Añadir Investigador", fr: "+ Ajouter un Chercheur", it: "+ Aggiungi Ricercatore" },

    dropOverlayMessage: {
        en: "Drop your exported *.json file here to import it",
        de: "Lassen Sie Ihre exportierte *.json-Datei hier los, um sie zu importieren",
        es: "Suelte aquí su archivo *.json exportado para importarlo",
        fr: "Déposez ici votre fichier *.json exporté pour l'importer",
        it: "Rilascia qui il tuo file *.json esportato per importarlo"
    },

    themeLight: { en: "Light", de: "Hell", es: "Claro", fr: "Clair", it: "Chiaro" },
    themeDark: { en: "Dark", de: "Dunkel", es: "Oscuro", fr: "Sombre", it: "Scuro" },
    themeAuto: { en: "Auto", de: "Automatisch", es: "Automático", fr: "Automatique", it: "Automatico" },
    themeHighContrast: { en: "High contrast", de: "Hoher Kontrast", es: "Alto contraste", fr: "Contraste élevé", it: "Alto contrasto" },
    themeToggleAriaLabel: { en: "Toggle theme ({theme})", de: "Design umschalten ({theme})", es: "Cambiar tema ({theme})", fr: "Changer de thème ({theme})", it: "Cambia tema ({theme})" },
    themeChangedTo: { en: "Theme changed to {theme}.", de: "Design geändert zu {theme}.", es: "Tema cambiado a {theme}.", fr: "Thème changé en {theme}.", it: "Tema cambiato in {theme}." },
    uiLanguageChangedTo: { en: "Language changed to {language}.", de: "Sprache geändert zu {language}.", es: "Idioma cambiado a {language}.", fr: "Langue changée en {language}.", it: "Lingua cambiata in {language}." },

    // #livePreview (js/preview.js): a named landmark region, so its label and placeholder text are translated like any other UI chrome rather than left as the known English-only gap tooltips/footer are.
    livePreviewLabel: { en: "Live preview of the consent document", de: "Live-Vorschau des Einwilligungsdokuments", es: "Vista previa en vivo del documento de consentimiento", fr: "Aperçu en direct du document de consentement", it: "Anteprima in tempo reale del documento di consenso" },
    livePreviewEmptyText: { en: "A live preview of the consent document appears here and updates as you fill in the form.", de: "Hier erscheint eine Live-Vorschau des Einwilligungsdokuments, die sich beim Ausfüllen des Formulars aktualisiert.", es: "Aquí aparece una vista previa en vivo del documento de consentimiento, que se actualiza a medida que completa el formulario.", fr: "Un aperçu en direct du document de consentement apparaît ici et se met à jour au fur et à mesure que vous remplissez le formulaire.", it: "Qui appare un'anteprima in tempo reale del documento di consenso, che si aggiorna man mano che completi il modulo." },

    // Looked up from js/form.js when it builds/renumbers researcher rows (addResearcher(), correctResercherNumbers(), ensureResearchersLabel()).
    researcherNameLabel: { en: "Name", de: "Name", es: "Nombre", fr: "Nom", it: "Nome" },
    researcherEmailLabel: { en: "E-Mail", de: "E-Mail", es: "Correo", fr: "E-mail", it: "Email" },
    removeResearcherAria: { en: "Remove researcher", de: "Forschende entfernen", es: "Eliminar investigador", fr: "Supprimer le chercheur", it: "Rimuovi ricercatore" },
    allInvolvedResearchersLabel: { en: "All involved researchers", de: "Alle beteiligten Forschenden", es: "Todos los investigadores involucrados", fr: "Tous les chercheurs impliqués", it: "Tutti i ricercatori coinvolti" },

    // The blank placeholder option fillSelect() (js/form.js) adds to institution/type/share/encryption/compensation - fixed UI chrome rather than admin-configurable example content, so it lives here rather than in settings.json's own per-language "hints".
    selectPlaceholder: { en: "Please select", de: "Bitte auswählen", es: "Seleccione", fr: "Veuillez sélectionner", it: "Seleziona" }
};

// Built-in translations for the input placeholder hints (js/form.js's refreshInputHints()). settings.json's own
// "hints" object stays a flat, single-language admin override - same treatment as the "types"/"compensation"
// option labels there, shown as-is regardless of UI language - and falls back to whichever of these matches
// the active language when the admin hasn't customized a given field.
var DEFAULT_HINTS = {
    title: { en: "Your research title", de: "Ihr Forschungstitel", es: "El título de su investigación", fr: "Le titre de votre recherche", it: "Il titolo della tua ricerca" },
    monetaryCompensation: { en: "Monetary compensation, e.g., 12 EUR/hour", de: "Finanzielle Vergütung, z. B. 12 EUR/Stunde", es: "Compensación monetaria, p. ej., 12 EUR/hora", fr: "Compensation monétaire, p. ex. 12 EUR/heure", it: "Compenso monetario, ad es. 12 EUR/ora" },
    pointsCompensation: { en: "e.g., 1 credit point per hour", de: "z. B. 1 Leistungspunkt pro Stunde", es: "p. ej., 1 punto de créditos por hora", fr: "p. ex. 1 point de crédit par heure", it: "ad es. 1 punto di credito all'ora" },
    personalData: { en: "age, gender, and country of birth", de: "Alter, Geschlecht und Geburtsland", es: "edad, género y país de nacimiento", fr: "âge, genre et pays de naissance", it: "età, genere e paese di nascita" },
    storageTime: { en: "a maximum of 10 years", de: "maximal 10 Jahre", es: "un máximo de 10 años", fr: "un maximum de 10 ans", it: "un massimo di 10 anni" },
    ethicalComittee: { en: "Your review board", de: "Ihre Ethikkommission", es: "Su comité de revisión", fr: "Votre comité d'évaluation", it: "Il tuo comitato di revisione" },
    departmentHead: { en: "When there is a prof above the prof....", de: "Wenn es über dem Prof noch einen Prof gibt....", es: "Cuando hay un profesor por encima del profesor....", fr: "Quand il y a un prof au-dessus du prof....", it: "Quando c'è un prof sopra il prof...." },
    thePIname: { en: "the person, who said you should do the study (e.g., Prof. Dr. Sven Mayer)", de: "die Person, die gesagt hat, Sie sollen die Studie machen (z. B. Prof. Dr. Sven Mayer)", es: "la persona que le dijo que hiciera el estudio (p. ej., Prof. Dr. Sven Mayer)", fr: "la personne qui vous a dit de faire l'étude (p. ex. Prof. Dr. Sven Mayer)", it: "la persona che ti ha detto di condurre lo studio (ad es. Prof. Dr. Sven Mayer)" },
    thePIemail: { en: "email of the guy, who said you should do the study", de: "E-Mail der Person, die gesagt hat, Sie sollen die Studie machen", es: "correo de la persona que le dijo que hiciera el estudio", fr: "e-mail de la personne qui vous a dit de faire l'étude", it: "email della persona che ti ha detto di condurre lo studio" },
    procedure: {
        en: "1. Participant takes a seat\n2. Participant conducts the study\n3. Participant is confused\n4.Participant leaves",
        de: "1. Teilnehmende nimmt Platz\n2. Teilnehmende führt die Studie durch\n3. Teilnehmende ist verwirrt\n4. Teilnehmende geht",
        es: "1. El participante toma asiento\n2. El participante realiza el estudio\n3. El participante está confundido\n4. El participante se va",
        fr: "1. Le participant s'assoit\n2. Le participant réalise l'étude\n3. Le participant est confus\n4. Le participant part",
        it: "1. Il partecipante si siede\n2. Il partecipante svolge lo studio\n3. Il partecipante è confuso\n4. Il partecipante se ne va"
    },
    participants: { en: "Insert number", de: "Zahl eingeben", es: "Introduzca un número", fr: "Insérez un nombre", it: "Inserisci un numero" },
    funding: { en: "Your funding", de: "Ihre Finanzierung", es: "Su financiación", fr: "Votre financement", it: "Il tuo finanziamento" },
    duration: { en: "60 minutes", de: "60 Minuten", es: "60 minutos", fr: "60 minutes", it: "60 minuti" },
    purpose: { en: "Explain the purpose of this research.", de: "Erklären Sie den Zweck dieser Forschung.", es: "Explique el propósito de esta investigación.", fr: "Expliquez le but de cette recherche.", it: "Spiega lo scopo di questa ricerca." },
    goal: { en: "Explain the goal of this research.", de: "Erklären Sie das Ziel dieser Forschung.", es: "Explique el objetivo de esta investigación.", fr: "Expliquez l'objectif de cette recherche.", it: "Spiega l'obiettivo di questa ricerca." }
};

// Translated option labels for the type/compensation/share/encryption dropdowns, keyed by the
// value token settings.json's own types/compensation/dataShare/dataEncryption arrays pair each label
// with (e.g. "online study", "money") - those values are also what the Handlebars templates branch
// on, so they stay fixed; only the display text is looked up here. See optionLabel() below.
var OPTION_LABELS = {
    types: {
        "online study": { en: "Online study (survey, apps, web studies, etc.)", de: "Online-Studie (Umfrage, Apps, Webstudien usw.)", es: "Estudio en línea (encuesta, apps, estudios web, etc.)", fr: "Étude en ligne (sondage, applications, études web, etc.)", it: "Studio online (sondaggio, app, studi web, ecc.)" },
        "user study": { en: "User Study (lab study, UX study, VR, eye-tracking, etc.)", de: "Nutzerstudie (Laborstudie, UX-Studie, VR, Eye-Tracking usw.)", es: "Estudio con usuarios (estudio de laboratorio, estudio UX, RV, seguimiento ocular, etc.)", fr: "Étude utilisateur (étude en laboratoire, étude UX, RV, suivi oculaire, etc.)", it: "Studio con utenti (studio in laboratorio, studio UX, VR, eye-tracking, ecc.)" },
        "field study": { en: "Field Study (outside the lab, in-situ, etc.)", de: "Feldstudie (außerhalb des Labors, vor Ort usw.)", es: "Estudio de campo (fuera del laboratorio, in situ, etc.)", fr: "Étude de terrain (hors laboratoire, in situ, etc.)", it: "Studio sul campo (fuori dal laboratorio, in situ, ecc.)" },
        "interview": { en: "Interview (focus groups, use cases, diaries, etc.)", de: "Interview (Fokusgruppen, Anwendungsfälle, Tagebücher usw.)", es: "Entrevista (grupos focales, casos de uso, diarios, etc.)", fr: "Entretien (groupes de discussion, cas d'usage, journaux, etc.)", it: "Intervista (focus group, casi d'uso, diari, ecc.)" }
    },
    compensation: {
        money: { en: "Money", de: "Geld", es: "Dinero", fr: "Argent", it: "Denaro" },
        moneyPoints: { en: "Money or Participation Points", de: "Geld oder Teilnahmepunkte", es: "Dinero o puntos de participación", fr: "Argent ou points de participation", it: "Denaro o punti di partecipazione" },
        points: { en: "Participation Points", de: "Teilnahmepunkte", es: "Puntos de participación", fr: "Points de participation", it: "Punti di partecipazione" },
        none: { en: "None", de: "Keine", es: "Ninguna", fr: "Aucune", it: "Nessuno" }
    },
    dataShare: {
        yes: { en: "Yes (not anonymized)", de: "Ja (nicht anonymisiert)", es: "Sí (sin anonimizar)", fr: "Oui (non anonymisé)", it: "Sì (non anonimizzato)" },
        anonymized: { en: "Yes (anonymized)", de: "Ja (anonymisiert)", es: "Sí (anonimizado)", fr: "Oui (anonymisé)", it: "Sì (anonimizzato)" },
        no: { en: "No", de: "Nein", es: "No", fr: "Non", it: "No" }
    },
    dataEncryption: {
        yes: { en: "Yes", de: "Ja", es: "Sí", fr: "Oui", it: "Sì" },
        no: { en: "No", de: "Nein", es: "No", fr: "Non", it: "No" }
    }
};

// fallback: settings.json's own label text (pair[0]) for a value this dictionary doesn't recognize - an admin-added option not in the standard set.
function optionLabel(category, value, fallback) {
    var entry = OPTION_LABELS[category] && OPTION_LABELS[category][value];
    if (!entry) return fallback;
    return entry[currentUiLanguage] || entry.en;
}

var UI_LANG_KEY = "icgUiLang";
var UI_LANGS = ["en", "de", "es", "fr", "it"];
var currentUiLanguage = "en";

// Looked up by js/form.js for the researcher-row strings it builds dynamically.
function uiString(key) {
    var entry = UI_STRINGS[key];
    if (!entry) return "";
    return entry[currentUiLanguage] || entry.en;
}

// Substitutes {token} placeholders in a UI_STRINGS entry - shared by js/theme.js's and this file's own
// "<Thing> changed to X." live-region announcements and the theme toggle's aria-label, so the one
// announce-pattern (and its wording, per language) lives in a single place instead of being
// reimplemented ad hoc wherever a translated sentence needs a value spliced into it.
function uiStringFormatted(key, vars) {
    var s = uiString(key);
    for (var k in vars) {
        if (Object.prototype.hasOwnProperty.call(vars, k)) s = s.split("{" + k + "}").join(vars[k]);
    }
    return s;
}

// Set once settings.json loads (see form.js) - only applies its configured default if the visitor hasn't explicitly chosen a UI language yet, same guarded pattern as applyConfiguredThemeDefault/applyConfiguredDocLanguageDefault in js/theme.js.
var applyConfiguredUiLanguageDefault = function () {};

$(document).ready(function () {
    (function () {
        var buttons = document.querySelectorAll("#langToggle button[data-ui-lang-value]");
        var code = document.getElementById("bd-lang-code");
        var status = document.getElementById("uiLanguageStatus");

        function getSavedUiLanguage() {
            try { return localStorage.getItem(UI_LANG_KEY); } catch (e) { return null; }
        }

        // announce defaults to false: the initial load call and the settings.json-configured default (applyConfiguredUiLanguageDefault below) shouldn't trigger a spoken announcement - only an actual click in the dropdown should (same reasoning as js/theme.js's applyTheme()).
        function applyUiLanguage(lang, persist, announce) {
            if (UI_LANGS.indexOf(lang) === -1) lang = "en";
            currentUiLanguage = lang;
            // WCAG 3.1.1 Language of Page: the document's primary language is this page's own UI chrome, which now actually changes with this setting (the #docLanguage/#results/#livePreview generated document is a separate, independently-tracked language - see its own lang attribute in renderResult()/renderLivePreview()).
            document.documentElement.setAttribute("lang", lang);

            document.querySelectorAll("[data-i18n]").forEach(function (el) {
                el.textContent = uiString(el.getAttribute("data-i18n"));
            });

            // The active button's own visible text doubles as "this language's name, in itself" (same
            // convention as the #docLanguage <option>s) - read directly off the DOM rather than keeping a
            // second, separately-maintained name map that could silently drift from what the dropdown shows.
            var activeName = lang;
            buttons.forEach(function (btn) {
                var active = btn.getAttribute("data-ui-lang-value") === lang;
                btn.classList.toggle("active", active);
                btn.setAttribute("aria-pressed", active ? "true" : "false");
                var check = btn.querySelector(".lang-check");
                if (check) check.classList.toggle("d-none", !active);
                if (active && btn.firstChild) activeName = btn.firstChild.textContent.trim();
            });
            if (code) code.textContent = lang.toUpperCase();
            if (announce && status) status.textContent = uiStringFormatted("uiLanguageChangedTo", { language: activeName });

            if (persist !== false) { try { localStorage.setItem(UI_LANG_KEY, lang); } catch (e) { /* best-effort persistence */ } }

            // Researcher rows build their "Name"/"E-Mail" labels from uiString() at insertion time, so already-added rows need re-numbering/re-labeling on a language switch.
            if (typeof correctResercherNumbers === "function") correctResercherNumbers();
            if (typeof ensureResearchersLabel === "function") ensureResearchersLabel();
            if (typeof refreshSelectPlaceholders === "function") refreshSelectPlaceholders();
            if (typeof refreshOptionLabels === "function") refreshOptionLabels();
            if (typeof refreshInputHints === "function") refreshInputHints();
            // Attributes (not textContent, so not covered by the [data-i18n] sweep above): the live-preview landmark's aria-label (js/preview.js) and the theme toggle's aria-label/live-region wording for the currently active theme (js/theme.js).
            if (typeof refreshLivePreviewAriaLabel === "function") refreshLivePreviewAriaLabel();
            if (typeof refreshThemeLanguage === "function") refreshThemeLanguage();
        }

        // persist: false on the initial load - a merely-defaulted language (no explicit choice yet) shouldn't be written back as if the visitor had picked it, or settings.json's configured default below would never get a chance to apply on a first visit (see applyConfiguredUiLanguageDefault).
        applyUiLanguage(getSavedUiLanguage() || "en", false);

        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () { applyUiLanguage(btn.getAttribute("data-ui-lang-value"), true, true); });
        });

        applyConfiguredUiLanguageDefault = function (lang) {
            if (lang && !getSavedUiLanguage()) applyUiLanguage(lang, false);
        };
    })();
});
