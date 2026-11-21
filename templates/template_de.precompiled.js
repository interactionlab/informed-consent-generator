(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_de'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":53}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "der verantwortlichen Projektleitung";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":12,"column":23},"end":{"line":12,"column":43}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":24}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":61}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":112}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " unter der Leitung von "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":86},"end":{"line":13,"column":104}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Diese Studie wird durch das Forschungsprojekt "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":62},"end":{"line":17,"column":73}}}) : helper)))
    + " gefördert und finanziert.\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Wir erfassen persönliche demografische Daten ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":105}}}) : helper)))
    + ").</li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Fotos aufnehmen.</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Videos aufnehmen.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Audioaufnahmen machen.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Ihre Körperbewegungen während der Sitzung.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Ihre Augen- und Kopfbewegungen während der Sitzung.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Wir nehmen physiologische Messungen an Ihrem Körper vor.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Wir zeichnen die für die Studie erforderlichen Bildschirminhalte auf Ihrem Gerät auf.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Interaktionsdaten (z. B. Klicks, Zeitmessungen) während der Sitzung.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Sie erhalten als Vergütung 1 Leistungspunkt pro Stunde für Ihren Studiengang.</li>\n            ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":58}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Sie erhalten als Vergütung 1 Leistungspunkt pro Stunde für Ihren Studiengang oder "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":34,"column":144},"end":{"line":34,"column":168}}}) : helper)))
    + " als finanzielle Vergütung.</li>\n            ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":36,"column":58}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Sie erhalten "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":35,"column":69},"end":{"line":35,"column":93}}}) : helper)))
    + " als Vergütung.</li>\n            ";
},"37":function(container,depth0,helpers,partials,data) {
    return "<li>Sie erhalten keine Vergütung.</li>";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Alle von Ihnen in dieser Studie ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":38,"column":76},"end":{"line":38,"column":89}}}) : helper)))
    + ") bereitgestellten Daten werden <b>nicht anonymisiert</b> veröffentlicht.</li>\n            ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":48}}}),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":40,"column":181}}})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Alle von Ihnen in dieser Studie ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":87},"end":{"line":39,"column":100}}}) : helper)))
    + ") bereitgestellten Daten werden anonymisiert veröffentlicht; sie enthalten somit weder Ihren Namen noch können sie Ihrer Identität zugeordnet werden.</li>\n            ";
},"44":function(container,depth0,helpers,partials,data) {
    return "<li>Die erhobenen Daten können von niemandem außerhalb der an dieser Arbeit beteiligten Forschenden eingesehen oder für weitere Forschung verwendet werden. </li>";
},"46":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                an unsere Ethikkommission: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":45,"column":43},"end":{"line":45,"column":62}}}) : helper)))
    + ".\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.program(51, data, 0),"data":data,"loc":{"start":{"line":47,"column":16},"end":{"line":51,"column":23}}})) != null ? stack1 : "");
},"49":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    an "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":48,"column":23},"end":{"line":48,"column":36}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":48,"column":46},"end":{"line":48,"column":60}}}) : helper)))
    + ") oder "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":48,"column":67},"end":{"line":48,"column":85}}}) : helper)))
    + ".\n";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    an "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":50,"column":23},"end":{"line":50,"column":36}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":50,"column":46},"end":{"line":50,"column":60}}}) : helper)))
    + ").\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "befragt";
},"55":function(container,depth0,helpers,partials,data) {
    return "getestet";
},"57":function(container,depth0,helpers,partials,data) {
    return "interviewt";
},"59":function(container,depth0,helpers,partials,data) {
    return "Sie erhalten keine Vergütung.\n            ";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":70,"column":22},"end":{"line":70,"column":51}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":72,"column":124}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten einen Leistungspunkt pro Stunde, der für Ihren Studiengang an der "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":70,"column":132},"end":{"line":70,"column":147}}}) : helper)))
    + " erforderlich ist. Sie können Ihre Teilnahme jederzeit ohne Angabe von Gründen widerrufen und abbrechen. Sie erhalten Ihre Leistungspunkte dennoch.\n            ";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":56}}}),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":72,"column":124}}})) != null ? stack1 : "");
},"65":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten "
    + alias4(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":71,"column":71},"end":{"line":71,"column":95}}}) : helper)))
    + " als Vergütung für Ihre Teilnahme oder einen Leistungspunkt pro Stunde, der für Ihren Studiengang an der "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":71,"column":200},"end":{"line":71,"column":215}}}) : helper)))
    + " erforderlich ist.\n            ";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":50}}}),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":72,"column":124}}})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":72,"column":65},"end":{"line":72,"column":89}}}) : helper)))
    + " als Vergütung für Ihre Teilnahme. ";
},"70":function(container,depth0,helpers,partials,data) {
    return "Sie können Ihre Teilnahme jederzeit widerrufen und abbrechen.\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    return "Sie können Ihre Teilnahme jederzeit ohne Nachteile oder Verlust der Vergütung widerrufen und abbrechen. ";
},"74":function(container,depth0,helpers,partials,data) {
    return "Ich habe das Recht, Fragen nicht zu beantworten, und falls ich mich während des Interviews in irgendeiner Weise unwohl fühle, habe ich das Recht, das Interview abzubrechen. ";
},"76":function(container,depth0,helpers,partials,data) {
    return "                (Sie haben keinen direkten Nutzen von Ihrer Teilnahme an dieser Studie. Wir hoffen, dass die aus Ihrer Teilnahme gewonnenen Erkenntnisse dazu beitragen, die Forschung in diesem Bereich voranzubringen.)\n";
},"78":function(container,depth0,helpers,partials,data) {
    return "                Ihr Nutzen aus der Teilnahme besteht in der oben beschriebenen Vergütung.\n";
},"80":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Wir erfassen während der Teilnahme personenbezogene Daten ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":110,"column":97},"end":{"line":110,"column":113}}}) : helper)))
    + "). ";
},"82":function(container,depth0,helpers,partials,data) {
    return "Die Kontaktdaten der Studienteilnehmenden können zur Nachverfolgung möglicher Infektionsketten verwendet werden. ";
},"84":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Alle von Ihnen in dieser Studie ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":114,"column":77},"end":{"line":114,"column":90}}}) : helper)))
    + ") bereitgestellten Daten werden verschlüsselt. ";
},"86":function(container,depth0,helpers,partials,data) {
    return " und zeichnen Browser-Metadaten auf";
},"88":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden <b>nicht anonymisiert</b> veröffentlicht. Für die weitere Verwendung der Aufzeichnungen und Daten gelten die üblichen Datennutzungsrichtlinien.\n";
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":124,"column":22},"end":{"line":124,"column":48}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0),"inverse":container.program(93, data, 0),"data":data,"loc":{"start":{"line":124,"column":12},"end":{"line":128,"column":12}}})) != null ? stack1 : "");
},"91":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden anonymisiert veröffentlicht. Für die weitere Verwendung der Aufzeichnungen und Daten gelten die üblichen Datennutzungsrichtlinien, die die Anonymität der teilnehmenden Personen schützen. Wir werden alle personenbezogenen Informationen, die Sie identifizieren könnten, vor der Veröffentlichung der Daten entfernen oder unkenntlich machen, damit niemand Sie anhand der geteilten Informationen identifizieren kann. Wir verwenden dabei aktuelle wissenschaftliche Standards und anerkannte Anonymisierungsverfahren. Bei der Anonymisierung werden Ihre Daten so verändert, dass sie nicht mehr oder nur mit unverhältnismäßigem technischen Aufwand auf Ihre Person zurückgeführt werden können. Trotz dieser Maßnahmen können wir die Anonymität Ihrer personenbezogenen Daten nicht garantieren.\n";
},"93":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden nicht veröffentlicht und vertraulich behandelt.\n            ";
},"95":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":131,"column":22},"end":{"line":131,"column":43}}}),{"name":"if","hash":{},"fn":container.program(96, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":16},"end":{"line":135,"column":23}}})) != null ? stack1 : "");
},"96":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        Das Interviewtranskript wird in erster Linie von "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":73},"end":{"line":132,"column":110}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":110},"end":{"line":132,"column":198}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":198},"end":{"line":132,"column":295}}})) != null ? stack1 : "")
    + " ausgewertet.\n                        Zugang zum vollständigen Interviewtranskript haben ausschließlich die Autorinnen und Autoren dieser Forschung, akademische Kolleginnen und Kollegen sowie Forschende, mit denen im Rahmen des Forschungsprozesses zusammengearbeitet wird.\n                        Zusammenfassungen von Interviewinhalten oder wörtliche Zitate aus dem Interview, die über wissenschaftliche Publikationen oder andere Kanäle veröffentlicht werden, werden so anonymisiert, dass Sie nicht identifiziert werden können; zudem wird darauf geachtet, dass keine weiteren Angaben aus dem Interview offengelegt werden, die Sie identifizieren könnten. Ich habe das Recht, Fragen nicht zu beantworten, und falls ich mich während des Interviews in irgendeiner Weise unwohl fühle, habe ich das Recht, das Interview abzubrechen.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":138},"end":{"line":132,"column":166}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":167},"end":{"line":132,"column":191}}}) : helper)));
},"98":function(container,depth0,helpers,partials,data) {
    return " und";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":225},"end":{"line":132,"column":264}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":265},"end":{"line":132,"column":288}}}) : helper)));
},"102":function(container,depth0,helpers,partials,data) {
    return "                Diese Webseite verwendet Cookies und andere Tracking-Technologien, um die Forschung durchzuführen, die Nutzererfahrung sowie die Interaktionsmöglichkeiten mit dem System zu verbessern und zusätzliche Inhalte Dritter bereitzustellen. Trotz sorgfältiger Inhaltskontrolle übernehmen die Forschenden keine Haftung für Schäden, die direkt oder indirekt aus der Nutzung dieser Online-Anwendung entstehen.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Ihre nicht anonymisierten Daten werden ab dem Zeitpunkt der Erteilung Ihrer Einwilligung für "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"storageTime") || (depth0 != null ? lookupProperty(depth0,"storageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storageTime","hash":{},"data":data,"loc":{"start":{"line":145,"column":109},"end":{"line":145,"column":124}}}) : helper)))
    + " gespeichert, sofern Sie Ihre Einwilligung nicht vorher widerrufen. Ihre nicht anonymisierten Daten werden an einem sicheren Ort gespeichert und sind ausschließlich den an dieser Arbeit beteiligten Forschenden zugänglich.\n";
},"106":function(container,depth0,helpers,partials,data) {
    return "                Ihre nicht anonymisierten Daten werden auf unbestimmte Zeit gespeichert, sofern Sie Ihre Einwilligung nicht widerrufen.\n";
},"108":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen, nicht anonymisierten Daten können öffentlich geteilt werden, sofern Sie nicht das separate Formular unterzeichnet haben, das uns dies untersagt (siehe unten).\n";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":153,"column":22},"end":{"line":153,"column":48}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0),"inverse":container.program(113, data, 0),"data":data,"loc":{"start":{"line":153,"column":12},"end":{"line":157,"column":12}}})) != null ? stack1 : "");
},"111":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen, anonymisierten Daten können öffentlich geteilt werden.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen Daten können von niemandem außerhalb der an dieser Arbeit beteiligten Forschenden eingesehen oder für weitere Forschung verwendet werden.\n            ";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen Daten werden nach Abschluss der Forschung gelöscht, oder sobald Sie die Forschenden um deren Löschung bitten.\n";
},"117":function(container,depth0,helpers,partials,data) {
    return "                Nicht veröffentlichte, erhobene Daten werden nach Abschluss der Forschung gelöscht.\n";
},"119":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(120, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":169,"column":15},"end":{"line":171,"column":21}}})) != null ? stack1 : "")
    + "</p>\n";
},"120":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                "
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"prefix") : depths[1]), depth0))
    + " "
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":170,"column":30},"end":{"line":170,"column":38}}}) : helper)))
    + " ("
    + alias1(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":170,"column":40},"end":{"line":170,"column":49}}}) : helper)))
    + ") <br />\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p><b>Projektleitung:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":174,"column":38},"end":{"line":174,"column":51}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":174,"column":53},"end":{"line":174,"column":63}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":174,"column":65},"end":{"line":174,"column":72}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":174,"column":73},"end":{"line":174,"column":81}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"if","hash":{},"fn":container.program(123, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":81},"end":{"line":174,"column":116}}})) != null ? stack1 : "")
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":174,"column":118},"end":{"line":174,"column":132}}}) : helper)))
    + ")</p>\n";
},"123":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":174,"column":98},"end":{"line":174,"column":109}}}) : helper)));
},"125":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":177,"column":18},"end":{"line":177,"column":56}}}),{"name":"if","hash":{},"fn":container.program(126, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":12},"end":{"line":179,"column":19}}})) != null ? stack1 : "");
},"126":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p><b>Leitung der Abteilung:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":178,"column":49},"end":{"line":178,"column":67}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":178,"column":69},"end":{"line":178,"column":79}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":178,"column":81},"end":{"line":178,"column":88}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":178,"column":89},"end":{"line":178,"column":97}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":178,"column":99},"end":{"line":178,"column":110}}}) : helper)))
    + ")</p>\n";
},"128":function(container,depth0,helpers,partials,data) {
    return "                   Ich konnte eine Kopie dieses Formulars speichern. Ich habe mich an die genannten Forschenden gewandt und alle meine Fragen wurden zu meiner Zufriedenheit beantwortet.\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                    Mir wurde eine Kopie dieses Formulars ausgehändigt. Alle meine Fragen wurden zu meiner Zufriedenheit beantwortet.\n";
},"132":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>Ich stimme zu, dass meine Daten und Messwerte aus der Studie im Rahmen dieser Forschung in nicht anonymisierter Form veröffentlicht werden können.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(133, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Mir ist bewusst, dass anonymisierte Daten nicht mit meinem Namen in Verbindung gebracht werden können. Aus der Einwilligung zur Veröffentlichung leite ich keine Rechte ab (wie etwa eine Vergütung oder Mitautorenschaft). Diese Einwilligungserklärung ist im Einklang mit der DSGVO jederzeit widerrufbar. Im Falle eines Widerrufs werden die veröffentlichten Aufzeichnungen, soweit sie der Verfügungsgewalt der Forschenden unterliegen, entfernt. Weitere Aufzeichnungen werden nach Widerruf der Veröffentlichung nicht mehr verwendet oder veröffentlicht.</td></tr>\n";
},"133":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Fotos aufgenommen und veröffentlicht werden können.</td>\n                    </tr>\n";
},"135":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Videos aufgenommen und veröffentlicht werden können.</td>\n                    </tr>\n";
},"137":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Audioaufnahmen gemacht und veröffentlicht werden können.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \"><img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"pageBreak\"><h1>Einwilligungserklärung zur Teilnahme</h1>\n        <p>\n            Sie sind eingeladen, an unserer Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":65}}}) : helper)))
    + ") mit dem Titel <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":84},"end":{"line":7,"column":93}}}) : helper)))
    + "</b> teilzunehmen, die von\n            "
    + alias4((lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":50}}}))
    + " initiiert und durchgeführt wird.\n            Die Forschung wird betreut von\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":103}}})) != null ? stack1 : "")
    + "\n            an der "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":34}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":11,"column":41},"end":{"line":11,"column":66}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Bitte beachten Sie:\n        </p>\n        <ul>\n            <li>Ihre Teilnahme ist freiwillig.</li>\n            <li>Die Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":23,"column":28},"end":{"line":23,"column":41}}}) : helper)))
    + ") wird voraussichtlich etwa "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":23,"column":69},"end":{"line":23,"column":81}}}) : helper)))
    + " dauern.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":119}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":96}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":97}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":101}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":104}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":118}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":143}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":135}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":36,"column":65}}})) != null ? stack1 : "")
    + "            <li>Wir können Ergebnisse aus dieser und anderen Sitzungen veröffentlichen.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":37}}}),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.program(41, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":188}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Wenn Sie Fragen zum gesamten Einwilligungsverfahren dieser Forschung oder zu Ihren Rechten als\n            Forschungsteilnehmerin bzw. Forschungsteilnehmer haben, wenden Sie sich bitte\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.program(48, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":52,"column":19}}})) != null ? stack1 : "")
    + "\n            Sie sollten die nachfolgenden Angaben sorgfältig lesen. Nehmen Sie sich so viel Zeit, wie Sie benötigen, um die Einwilligungserklärung\n            zu lesen. Wenn Sie mit etwas nicht vollständig einverstanden sind oder nicht alle Ihre Fragen zu Ihrer\n            Zufriedenheit beantwortet wurden, sollten Sie Ihre Einwilligung nicht erteilen. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Zweck und Ziel dieser Forschung</h2>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"purpose") || (depth0 != null ? lookupProperty(depth0,"purpose") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"purpose","hash":{},"data":data,"loc":{"start":{"line":59,"column":11},"end":{"line":59,"column":22}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"goal") || (depth0 != null ? lookupProperty(depth0,"goal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data,"loc":{"start":{"line":59,"column":23},"end":{"line":59,"column":31}}}) : helper)))
    + " Ihre Teilnahme hilft uns, dieses Ziel zu erreichen. Die Ergebnisse dieser Forschung können\n            auf wissenschaftlichen oder fachlichen Tagungen vorgestellt oder in wissenschaftlichen Sammelbänden und\n            Fachzeitschriften veröffentlicht werden.</p></div>\n    <div class=\"pageBreak\"><h2>2. Teilnahme und Vergütung</h2>\n        <p>Ihre Teilnahme an dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":63,"column":44},"end":{"line":63,"column":57}}}) : helper)))
    + ") ist freiwillig. Sie sind eine von schätzungsweise "
    + alias4(((helper = (helper = lookupProperty(helpers,"participants") || (depth0 != null ? lookupProperty(depth0,"participants") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participants","hash":{},"data":data,"loc":{"start":{"line":63,"column":109},"end":{"line":63,"column":125}}}) : helper)))
    + " Personen, die\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":64,"column":18},"end":{"line":64,"column":45}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":61}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":43}}}),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":60}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":44}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":60}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":42}}}),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":61}}})) != null ? stack1 : "")
    + "\n             für diese Forschung werden.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":69,"column":18},"end":{"line":69,"column":45}}}),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.program(61, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":72,"column":131}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":18},"end":{"line":73,"column":45}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.program(72, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":131}}})) != null ? stack1 : "")
    + "\n            Soweit möglich, können Sie die Beantwortung einzelner Fragen ablehnen oder Ihre Teilnahme jederzeit beenden.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":76,"column":18},"end":{"line":76,"column":42}}}),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":12},"end":{"line":76,"column":224}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>Sie können uns jederzeit und ohne Angabe von Gründen mitteilen, dass Sie Ihre erteilte Einwilligung widerrufen möchten (DSGVO Art. 7(3)). Im Falle eines Widerrufs werden Ihre auf Grundlage Ihrer Einwilligung gespeicherten Daten gelöscht oder,\n            soweit rechtlich zulässig, anonymisiert (DSGVO Art. 17). Ist eine Löschung nicht möglich oder nur mit unverhältnismäßigem\n            technischen Aufwand möglich, werden Ihre Daten durch Entfernen der personenbezogenen Identifikationsmerkmale\n            anonymisiert. Eine Anonymisierung Ihrer Daten kann jedoch die Möglichkeit einer nachträglichen\n            Rückverfolgung der Informationen zu Ihnen über andere Quellen nicht vollständig ausschließen. Sobald die Daten anonymisiert sind,\n            ist eine Löschung der Daten zudem nicht mehr möglich, da wir dann nicht mehr feststellen können, welche Daten von Ihnen stammen. </p></div>\n    <div class=\"pageBreak\"><h2>3. Ablauf</h2>\n        <p>Nach Erteilung Ihrer Einwilligung werden Sie durch die folgenden Schritte geführt:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":86,"column":56},"end":{"line":86,"column":80}}}))
    + "</p>\n        <p>Der gesamte Ablauf dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":87,"column":45},"end":{"line":87,"column":58}}}) : helper)))
    + ") wird voraussichtlich etwa "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":87,"column":86},"end":{"line":87,"column":98}}}) : helper)))
    + " dauern.</p></div>\n    <div class=\"pageBreak\"><h2>4. Risiken und Nutzen</h2>\n        <p>Mit dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":89,"column":30},"end":{"line":89,"column":43}}}) : helper)))
    + ") sind keine Risiken verbunden. Etwaige Unannehmlichkeiten oder Beeinträchtigungen werden\n            voraussichtlich gering ausfallen und sind unwahrscheinlich. Falls Sie sich unwohl fühlen, können Sie Ihre Teilnahme jederzeit abbrechen.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":91,"column":18},"end":{"line":91,"column":45}}}),{"name":"if","hash":{},"fn":container.program(76, data, 0, blockParams, depths),"inverse":container.program(78, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":91,"column":12},"end":{"line":95,"column":19}}})) != null ? stack1 : "")
    + "            Mit dieser Forschung werden wir den Wissensstand in diesem Forschungsbereich voranbringen.</p></div>\n    <div class=\"pageBreak\"><h2>5. Datenschutz und Vertraulichkeit</h2>\n        <p>Die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union (EU) regelt diese Datenerhebung.\n            Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist die Einwilligung der betroffenen Person gemäß Art. 6 Abs. 1 lit. a DSGVO. Die DSGVO gewährt den betroffenen Personen eine Reihe von Rechten, unter anderem das Recht auf Auskunft,\n            Berichtigung und Löschung personenbezogener Daten. </p>\n        <ul>\n            <li>Sie haben jederzeit das Recht auf Auskunft über Ihre personenbezogenen Daten (DSGVO Art. 15).</li>\n            <li>Sie haben jederzeit das Recht, unrichtige personenbezogene Daten berichtigen zu lassen (DSGVO Art. 16).</li>\n            <li>Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen (DSGVO Art. 17).</li>\n            <li>Sie haben das Recht, die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen (DSGVO Art. 18).</li>\n            <li>Sie haben das Recht, eine Kopie Ihrer personenbezogenen Daten zu erhalten und diese an eine andere Organisation zu übertragen (DSGVO Art. 20).</li>\n            <li>Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen (DSGVO Art. 21).</li>\n        </ul>\n        <p>Wenn Sie eines dieser Rechte ausüben möchten, wenden Sie sich bitte an die Forschenden. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":11},"end":{"line":110,"column":123}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":111,"column":18},"end":{"line":111,"column":45}}}),{"name":"if","hash":{},"fn":container.program(82, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":111,"column":167}}})) != null ? stack1 : "")
    + "\n            Die Forschenden werden Sie in keinem Bericht mit den aus dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":112,"column":84},"end":{"line":112,"column":97}}}) : helper)))
    + ") gewonnenen Erkenntnissen namentlich kenntlich machen, und\n            Ihre Vertraulichkeit als Teilnehmerin bzw. Teilnehmer dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":113,"column":81},"end":{"line":113,"column":94}}}) : helper)))
    + ") bleibt gewahrt.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":114,"column":18},"end":{"line":114,"column":42}}}),{"name":"if","hash":{},"fn":container.program(84, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":114,"column":144}}})) != null ? stack1 : "")
    + "\n            Die in dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":115,"column":34},"end":{"line":115,"column":47}}}) : helper)))
    + ") erhobenen Daten werden im Einklang mit der DSGVO behandelt. </p>\n        <p>Wir erfassen\n            "
    + alias4((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"loc":{"start":{"line":117,"column":12},"end":{"line":117,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":118,"column":18},"end":{"line":118,"column":45}}}),{"name":"if","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":12},"end":{"line":118,"column":89}}})) != null ? stack1 : "")
    + "\n             während der Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":119,"column":33},"end":{"line":119,"column":46}}}) : helper)))
    + ").\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":122,"column":18},"end":{"line":122,"column":37}}}),{"name":"if","hash":{},"fn":container.program(88, data, 0, blockParams, depths),"inverse":container.program(90, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":122,"column":12},"end":{"line":128,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":130,"column":18},"end":{"line":130,"column":42}}}),{"name":"if","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":12},"end":{"line":136,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":138,"column":18},"end":{"line":138,"column":45}}}),{"name":"if","hash":{},"fn":container.program(102, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":12},"end":{"line":140,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":144,"column":18},"end":{"line":144,"column":39}}}),{"name":"if","hash":{},"fn":container.program(104, data, 0, blockParams, depths),"inverse":container.program(106, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":144,"column":12},"end":{"line":148,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":151,"column":18},"end":{"line":151,"column":37}}}),{"name":"if","hash":{},"fn":container.program(108, data, 0, blockParams, depths),"inverse":container.program(110, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":151,"column":12},"end":{"line":157,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"no",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":159,"column":18},"end":{"line":159,"column":36}}}),{"name":"if","hash":{},"fn":container.program(115, data, 0, blockParams, depths),"inverse":container.program(117, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":159,"column":12},"end":{"line":163,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>Wie bei jeder Veröffentlichung oder Online-bezogenen Aktivität ist das Risiko einer Vertraulichkeitsverletzung grundsätzlich nicht auszuschließen. Gemäß der DSGVO werden die Forschenden die teilnehmende Person informieren, falls eine Verletzung des Schutzes vertraulicher Daten festgestellt wird. </p></div>\n    <div class=\"pageBreak\"><h2>6. Angaben zu den Forschenden</h2>\n        <p>Wenn Sie Fragen oder Anliegen zu dieser Forschung haben, wenden Sie sich bitte gerne an: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(119, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":168,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":8},"end":{"line":175,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(125, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Einwilligung und Zustimmung</h2>Diese Einwilligungserklärung wird sicher und\n        im Einklang mit der DSGVO nicht länger als erforderlich aufbewahrt.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>Ich habe die mir erteilten Erläuterungen verstanden.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(128, data, 0, blockParams, depths),"inverse":container.program(130, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Daher stimme ich freiwillig der Teilnahme an dieser Studie ("
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":194,"column":76},"end":{"line":194,"column":89}}}) : helper)))
    + ") zu.\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Ich willige freiwillig ein, dass meine Daten im Einklang mit der DSGVO aufgezeichnet und anschließend verarbeitet werden. Ich wurde über die Folgen eines Widerrufs meiner Einwilligung informiert.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Name der teilnehmenden Person (in Druckbuchstaben)</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Unterschrift der teilnehmenden Person</td>\n                <td>Ort, Datum</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();