(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_de'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":95},"end":{"line":3,"column":103}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":53}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "der verantwortlichen Projektleitung";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":12,"column":23},"end":{"line":12,"column":43}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":14,"column":24}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":61}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":112}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " unter der Leitung von "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":86},"end":{"line":13,"column":104}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Diese Studie wird durch das Forschungsprojekt "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":62},"end":{"line":17,"column":73}}}) : helper)))
    + " gefördert und finanziert.\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Wir erfassen persönliche demografische Daten ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Personenbezogene Daten]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":140}}}))
    + ").</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Fotos aufnehmen.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Videos aufnehmen.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Wir werden während der Sitzung Audioaufnahmen machen.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Ihre Körperbewegungen während der Sitzung.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Ihre Augen- und Kopfbewegungen während der Sitzung.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Wir nehmen physiologische Messungen an Ihrem Körper vor.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Wir zeichnen die für die Studie erforderlichen Bildschirminhalte auf Ihrem Gerät auf.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Wir erfassen Interaktionsdaten (z. B. Klicks, Zeitmessungen) während der Sitzung.</li>";
},"31":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Sie erhalten als Vergütung "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punkte]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":33,"column":80},"end":{"line":33,"column":121}}}))
    + " für Ihren Studiengang.</li>\n            ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":37,"column":74}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Sie erhalten als Vergütung "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punkte]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":89},"end":{"line":34,"column":130}}}))
    + " für Ihren Studiengang oder "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Finanzielle Vergütung]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":158},"end":{"line":34,"column":216}}}))
    + " als finanzielle Vergütung.</li>\n            ";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":37,"column":74}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Sie erhalten "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Finanzielle Vergütung]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":35,"column":69},"end":{"line":35,"column":127}}}))
    + " als Vergütung.</li>\n            ";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":36,"column":22},"end":{"line":36,"column":49}}}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":37,"column":74}}})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return "<li>Sie erhalten keine Vergütung.</li>\n            ";
},"42":function(container,depth0,helpers,partials,data) {
    return "<li><span class=\"missingField\">[Vergütung]</span></li>";
},"44":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Alle von Ihnen in dieser Studie ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":86},"end":{"line":39,"column":97}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":39,"column":76},"end":{"line":39,"column":118}}}))
    + ") bereitgestellten Daten werden <b>nicht anonymisiert</b> veröffentlicht.</li>\n            ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":40,"column":22},"end":{"line":40,"column":48}}}),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":41,"column":181}}})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Alle von Ihnen in dieser Studie ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":40,"column":97},"end":{"line":40,"column":108}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":40,"column":87},"end":{"line":40,"column":129}}}))
    + ") bereitgestellten Daten werden anonymisiert veröffentlicht; sie enthalten somit weder Ihren Namen noch können sie Ihrer Identität zugeordnet werden.</li>\n            ";
},"49":function(container,depth0,helpers,partials,data) {
    return "<li>Die erhobenen Daten können von niemandem außerhalb der an dieser Arbeit beteiligten Forschenden eingesehen oder für weitere Forschung verwendet werden. </li>";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                an unsere Ethikkommission: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":46,"column":43},"end":{"line":46,"column":62}}}) : helper)))
    + ".\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":52,"column":23}}})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    an "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":49,"column":23},"end":{"line":49,"column":36}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":49,"column":46},"end":{"line":49,"column":60}}}) : helper)))
    + ") oder "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":49,"column":67},"end":{"line":49,"column":85}}}) : helper)))
    + ".\n";
},"56":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    an "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":51,"column":23},"end":{"line":51,"column":36}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":51,"column":46},"end":{"line":51,"column":60}}}) : helper)))
    + ").\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "befragt";
},"60":function(container,depth0,helpers,partials,data) {
    return "getestet";
},"62":function(container,depth0,helpers,partials,data) {
    return "interviewt";
},"64":function(container,depth0,helpers,partials,data) {
    return "Sie erhalten keine Vergütung.\n            ";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":51}}}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":74,"column":65}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten als Vergütung "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punkte]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":80},"end":{"line":71,"column":121}}}))
    + " für Ihren Studiengang an der "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":151},"end":{"line":71,"column":190}}}))
    + ". Sie können Ihre Teilnahme jederzeit ohne Angabe von Gründen widerrufen und abbrechen. Sie erhalten Ihre Vergütung dennoch.\n            ";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":56}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.program(72, data, 0),"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":74,"column":65}}})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Finanzielle Vergütung]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":71},"end":{"line":72,"column":129}}}))
    + " als Vergütung für Ihre Teilnahme oder "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punkte]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":168},"end":{"line":72,"column":209}}}))
    + " für Ihren Studiengang an der "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":239},"end":{"line":72,"column":278}}}))
    + ".\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":22},"end":{"line":73,"column":50}}}),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(75, data, 0),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":65}}})) != null ? stack1 : "");
},"73":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Sie erhalten "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Finanzielle Vergütung]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":73,"column":65},"end":{"line":73,"column":123}}}))
    + " als Vergütung für Ihre Teilnahme. \n            ";
},"75":function(container,depth0,helpers,partials,data) {
    return "<span class=\"missingField\">[Vergütung]</span>";
},"77":function(container,depth0,helpers,partials,data) {
    return "Sie können Ihre Teilnahme jederzeit widerrufen und abbrechen.\n            ";
},"79":function(container,depth0,helpers,partials,data) {
    return "Sie können Ihre Teilnahme jederzeit ohne Nachteile oder Verlust der Vergütung widerrufen und abbrechen. ";
},"81":function(container,depth0,helpers,partials,data) {
    return "Ich habe das Recht, Fragen nicht zu beantworten, und falls ich mich während des Interviews in irgendeiner Weise unwohl fühle, habe ich das Recht, das Interview abzubrechen. ";
},"83":function(container,depth0,helpers,partials,data) {
    return "                (Sie haben keinen direkten Nutzen von Ihrer Teilnahme an dieser Studie. Wir hoffen, dass die aus Ihrer Teilnahme gewonnenen Erkenntnisse dazu beitragen, die Forschung in diesem Bereich voranzubringen.)\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "                Ihr Nutzen aus der Teilnahme besteht in der oben beschriebenen Vergütung.\n";
},"87":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Wir erfassen während der Teilnahme personenbezogene Daten ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Personenbezogene Daten]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":112,"column":97},"end":{"line":112,"column":148}}}))
    + "). ";
},"89":function(container,depth0,helpers,partials,data) {
    return "Die Kontaktdaten der Studienteilnehmenden können zur Nachverfolgung möglicher Infektionsketten verwendet werden. ";
},"91":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Alle von Ihnen in dieser Studie ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":116,"column":87},"end":{"line":116,"column":98}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":116,"column":77},"end":{"line":116,"column":119}}}))
    + ") bereitgestellten Daten werden verschlüsselt. ";
},"93":function(container,depth0,helpers,partials,data) {
    return " und zeichnen Browser-Metadaten auf";
},"95":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden <b>nicht anonymisiert</b> veröffentlicht. Für die weitere Verwendung der Aufzeichnungen und Daten gelten die üblichen Datennutzungsrichtlinien.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":126,"column":22},"end":{"line":126,"column":48}}}),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.program(100, data, 0),"data":data,"loc":{"start":{"line":126,"column":12},"end":{"line":130,"column":12}}})) != null ? stack1 : "");
},"98":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden anonymisiert veröffentlicht. Für die weitere Verwendung der Aufzeichnungen und Daten gelten die üblichen Datennutzungsrichtlinien, die die Anonymität der teilnehmenden Personen schützen. Wir werden alle personenbezogenen Informationen, die Sie identifizieren könnten, vor der Veröffentlichung der Daten entfernen oder unkenntlich machen, damit niemand Sie anhand der geteilten Informationen identifizieren kann. Wir verwenden dabei aktuelle wissenschaftliche Standards und anerkannte Anonymisierungsverfahren. Bei der Anonymisierung werden Ihre Daten so verändert, dass sie nicht mehr oder nur mit unverhältnismäßigem technischen Aufwand auf Ihre Person zurückgeführt werden können. Trotz dieser Maßnahmen können wir die Anonymität Ihrer personenbezogenen Daten nicht garantieren.\n";
},"100":function(container,depth0,helpers,partials,data) {
    return "                Alle von Ihnen bereitgestellten Daten werden nicht veröffentlicht und vertraulich behandelt.\n            ";
},"102":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":133,"column":22},"end":{"line":133,"column":43}}}),{"name":"if","hash":{},"fn":container.program(103, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":16},"end":{"line":137,"column":23}}})) != null ? stack1 : "");
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        Das Interviewtranskript wird in erster Linie von "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":73},"end":{"line":134,"column":110}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":110},"end":{"line":134,"column":198}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":198},"end":{"line":134,"column":295}}})) != null ? stack1 : "")
    + " ausgewertet.\n                        Zugang zum vollständigen Interviewtranskript haben ausschließlich die Autorinnen und Autoren dieser Forschung, akademische Kolleginnen und Kollegen sowie Forschende, mit denen im Rahmen des Forschungsprozesses zusammengearbeitet wird.\n                        Zusammenfassungen von Interviewinhalten oder wörtliche Zitate aus dem Interview, die über wissenschaftliche Publikationen oder andere Kanäle veröffentlicht werden, werden so anonymisiert, dass Sie nicht identifiziert werden können; zudem wird darauf geachtet, dass keine weiteren Angaben aus dem Interview offengelegt werden, die Sie identifizieren könnten. Ich habe das Recht, Fragen nicht zu beantworten, und falls ich mich während des Interviews in irgendeiner Weise unwohl fühle, habe ich das Recht, das Interview abzubrechen.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":138},"end":{"line":134,"column":166}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":167},"end":{"line":134,"column":191}}}) : helper)));
},"105":function(container,depth0,helpers,partials,data) {
    return " und";
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":225},"end":{"line":134,"column":264}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":265},"end":{"line":134,"column":288}}}) : helper)));
},"109":function(container,depth0,helpers,partials,data) {
    return "                Diese Webseite verwendet Cookies und andere Tracking-Technologien, um die Forschung durchzuführen, die Nutzererfahrung sowie die Interaktionsmöglichkeiten mit dem System zu verbessern und zusätzliche Inhalte Dritter bereitzustellen. Trotz sorgfältiger Inhaltskontrolle übernehmen die Forschenden keine Haftung für Schäden, die direkt oder indirekt aus der Nutzung dieser Online-Anwendung entstehen.\n";
},"111":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Ihre nicht anonymisierten Daten werden ab dem Zeitpunkt der Erteilung Ihrer Einwilligung für "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"storageTime") : depth0),"[Speicherdauer]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":147,"column":109},"end":{"line":147,"column":150}}}))
    + " gespeichert, sofern Sie Ihre Einwilligung nicht vorher widerrufen. Ihre nicht anonymisierten Daten werden an einem sicheren Ort gespeichert und sind ausschließlich den an dieser Arbeit beteiligten Forschenden zugänglich.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Ihre nicht anonymisierten Daten werden auf unbestimmte Zeit gespeichert, sofern Sie Ihre Einwilligung nicht widerrufen.\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen, nicht anonymisierten Daten können öffentlich geteilt werden, sofern Sie nicht das separate Formular unterzeichnet haben, das uns dies untersagt (siehe unten).\n";
},"117":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":155,"column":22},"end":{"line":155,"column":48}}}),{"name":"if","hash":{},"fn":container.program(118, data, 0),"inverse":container.program(120, data, 0),"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":159,"column":12}}})) != null ? stack1 : "");
},"118":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen, anonymisierten Daten können öffentlich geteilt werden.\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen Daten können von niemandem außerhalb der an dieser Arbeit beteiligten Forschenden eingesehen oder für weitere Forschung verwendet werden.\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    return "                Die erhobenen Daten werden nach Abschluss der Forschung gelöscht, oder sobald Sie die Forschenden um deren Löschung bitten.\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                Nicht veröffentlichte, erhobene Daten werden nach Abschluss der Forschung gelöscht.\n";
},"126":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(127, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":171,"column":15},"end":{"line":173,"column":21}}})) != null ? stack1 : "")
    + "</p>\n";
},"127":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                "
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"prefix") : depths[1]), depth0))
    + " "
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),"[Name]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":172,"column":30},"end":{"line":172,"column":55}}}))
    + " ("
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"email") : depth0),"[E-Mail]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":172,"column":57},"end":{"line":172,"column":85}}}))
    + ") <br />\n            ";
},"129":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":148},"end":{"line":175,"column":163}}}),{"name":"if","hash":{},"fn":container.program(130, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":142},"end":{"line":175,"column":182}}})) != null ? stack1 : "");
},"130":function(container,depth0,helpers,partials,data,blockParams) {
    return container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + ", ";
},"132":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":177,"column":18},"end":{"line":177,"column":56}}}),{"name":"if","hash":{},"fn":container.program(133, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":177,"column":12},"end":{"line":179,"column":19}}})) != null ? stack1 : "");
},"133":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p><b>Leitung der Abteilung:</b> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":49},"end":{"line":178,"column":67}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":75},"end":{"line":178,"column":112}}}),{"name":"with","hash":{},"fn":container.program(134, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":67},"end":{"line":178,"column":174}}})) != null ? stack1 : "")
    + "</p>\n";
},"134":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":130},"end":{"line":178,"column":145}}}),{"name":"if","hash":{},"fn":container.program(135, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":124},"end":{"line":178,"column":165}}})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data,blockParams) {
    return " ("
    + container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + ")";
},"137":function(container,depth0,helpers,partials,data) {
    return "                   Ich konnte eine Kopie dieses Formulars speichern. Ich habe mich an die genannten Forschenden gewandt und alle meine Fragen wurden zu meiner Zufriedenheit beantwortet.\n";
},"139":function(container,depth0,helpers,partials,data) {
    return "                    Mir wurde eine Kopie dieses Formulars ausgehändigt. Alle meine Fragen wurden zu meiner Zufriedenheit beantwortet.\n";
},"141":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>Ich stimme zu, dass meine Daten und Messwerte aus der Studie im Rahmen dieser Forschung in nicht anonymisierter Form veröffentlicht werden können.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(144, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Mir ist bewusst, dass anonymisierte Daten nicht mit meinem Namen in Verbindung gebracht werden können. Aus der Einwilligung zur Veröffentlichung leite ich keine Rechte ab (wie etwa eine Vergütung oder Mitautorenschaft). Diese Einwilligungserklärung ist im Einklang mit der DSGVO jederzeit widerrufbar. Im Falle eines Widerrufs werden die veröffentlichten Aufzeichnungen, soweit sie der Verfügungsgewalt der Forschenden unterliegen, entfernt. Weitere Aufzeichnungen werden nach Widerruf der Veröffentlichung nicht mehr verwendet oder veröffentlicht.</td></tr>\n";
},"142":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Fotos aufgenommen und veröffentlicht werden können.</td>\n                    </tr>\n";
},"144":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Videos aufgenommen und veröffentlicht werden können.</td>\n                    </tr>\n";
},"146":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Ich stimme zusätzlich zu, dass während dieser Studie Audioaufnahmen gemacht und veröffentlicht werden können.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"pageBreak\"><h1>Einwilligungserklärung zur Teilnahme</h1>\n        <p>\n            Sie sind eingeladen, an unserer Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":62},"end":{"line":7,"column":73}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":94}}}))
    + ") mit dem Titel <b>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"[Titel]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":113},"end":{"line":7,"column":140}}}))
    + "</b> teilzunehmen, die von\n            "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":58}}}),"[Forschende]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":75}}}))
    + " initiiert und durchgeführt wird.\n            Die Forschung wird betreut von\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":103}}})) != null ? stack1 : "")
    + "\n            an der "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":58}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":65},"end":{"line":11,"column":90}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":58},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Bitte beachten Sie:\n        </p>\n        <ul>\n            <li>Ihre Teilnahme ist freiwillig.</li>\n            <li>Die Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":38},"end":{"line":23,"column":49}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":28},"end":{"line":23,"column":70}}}))
    + ") wird voraussichtlich etwa "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Dauer]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":98},"end":{"line":23,"column":128}}}))
    + " dauern.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":154}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":96}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":97}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":101}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":104}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":118}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":143}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":135}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.program(33, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":81}}})) != null ? stack1 : "")
    + "            <li>Wir können Ergebnisse aus dieser und anderen Sitzungen veröffentlichen.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":18},"end":{"line":39,"column":37}}}),{"name":"if","hash":{},"fn":container.program(44, data, 0, blockParams, depths),"inverse":container.program(46, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":188}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Wenn Sie Fragen zum gesamten Einwilligungsverfahren dieser Forschung oder zu Ihren Rechten als\n            Forschungsteilnehmerin bzw. Forschungsteilnehmer haben, wenden Sie sich bitte\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.program(53, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":45,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + "\n            Sie sollten die nachfolgenden Angaben sorgfältig lesen. Nehmen Sie sich so viel Zeit, wie Sie benötigen, um die Einwilligungserklärung\n            zu lesen. Wenn Sie mit etwas nicht vollständig einverstanden sind oder nicht alle Ihre Fragen zu Ihrer\n            Zufriedenheit beantwortet wurden, sollten Sie Ihre Einwilligung nicht erteilen. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Zweck und Ziel dieser Forschung</h2>\n        <p>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"purpose") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":21},"end":{"line":60,"column":43}}}),"[Zweck]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":11},"end":{"line":60,"column":55}}}))
    + " "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"goal") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":66},"end":{"line":60,"column":85}}}),"[Ziel]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":56},"end":{"line":60,"column":96}}}))
    + " Ihre Teilnahme hilft uns, dieses Ziel zu erreichen. Die Ergebnisse dieser Forschung können\n            auf wissenschaftlichen oder fachlichen Tagungen vorgestellt oder in wissenschaftlichen Sammelbänden und\n            Fachzeitschriften veröffentlicht werden.</p></div>\n    <div class=\"pageBreak\"><h2>2. Teilnahme und Vergütung</h2>\n        <p>Ihre Teilnahme an dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":54},"end":{"line":64,"column":65}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":44},"end":{"line":64,"column":86}}}))
    + ") ist freiwillig. Sie sind eine von schätzungsweise "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"participants") : depth0),"[Teilnehmerzahl]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":138},"end":{"line":64,"column":181}}}))
    + " Personen, die\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":45}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":61}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":43}}}),{"name":"if","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":60}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":44}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":60}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":18},"end":{"line":68,"column":42}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":12},"end":{"line":68,"column":61}}})) != null ? stack1 : "")
    + "\n             für diese Forschung werden.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":18},"end":{"line":70,"column":45}}}),{"name":"if","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.program(66, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":12},"end":{"line":74,"column":72}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":18},"end":{"line":75,"column":45}}}),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":12},"end":{"line":76,"column":131}}})) != null ? stack1 : "")
    + "\n            Soweit möglich, können Sie die Beantwortung einzelner Fragen ablehnen oder Ihre Teilnahme jederzeit beenden.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":18},"end":{"line":78,"column":42}}}),{"name":"if","hash":{},"fn":container.program(81, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":12},"end":{"line":78,"column":224}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>Sie können uns jederzeit und ohne Angabe von Gründen mitteilen, dass Sie Ihre erteilte Einwilligung widerrufen möchten (DSGVO Art. 7(3)). Im Falle eines Widerrufs werden Ihre auf Grundlage Ihrer Einwilligung gespeicherten Daten gelöscht oder,\n            soweit rechtlich zulässig, anonymisiert (DSGVO Art. 17). Ist eine Löschung nicht möglich oder nur mit unverhältnismäßigem\n            technischen Aufwand möglich, werden Ihre Daten durch Entfernen der personenbezogenen Identifikationsmerkmale\n            anonymisiert. Eine Anonymisierung Ihrer Daten kann jedoch die Möglichkeit einer nachträglichen\n            Rückverfolgung der Informationen zu Ihnen über andere Quellen nicht vollständig ausschließen. Sobald die Daten anonymisiert sind,\n            ist eine Löschung der Daten zudem nicht mehr möglich, da wir dann nicht mehr feststellen können, welche Daten von Ihnen stammen. </p></div>\n    <div class=\"pageBreak\"><h2>3. Ablauf</h2>\n        <p>Nach Erteilung Ihrer Einwilligung werden Sie durch die folgenden Schritte geführt:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":66},"end":{"line":88,"column":88}}}),"[Ablauf]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":56},"end":{"line":88,"column":101}}}))
    + "</p>\n        <p>Der gesamte Ablauf dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":55},"end":{"line":89,"column":66}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":45},"end":{"line":89,"column":87}}}))
    + ") wird voraussichtlich etwa "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Dauer]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":115},"end":{"line":89,"column":145}}}))
    + " dauern.</p></div>\n    <div class=\"pageBreak\"><h2>4. Risiken und Nutzen</h2>\n        <p>Mit dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":40},"end":{"line":91,"column":51}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":30},"end":{"line":91,"column":72}}}))
    + ") sind keine Risiken verbunden. Etwaige Unannehmlichkeiten oder Beeinträchtigungen werden\n            voraussichtlich gering ausfallen und sind unwahrscheinlich. Falls Sie sich unwohl fühlen, können Sie Ihre Teilnahme jederzeit abbrechen.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":18},"end":{"line":93,"column":45}}}),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.program(85, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":12},"end":{"line":97,"column":19}}})) != null ? stack1 : "")
    + "            Mit dieser Forschung werden wir den Wissensstand in diesem Forschungsbereich voranbringen.</p></div>\n    <div class=\"pageBreak\"><h2>5. Datenschutz und Vertraulichkeit</h2>\n        <p>Die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union (EU) regelt diese Datenerhebung.\n            Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist die Einwilligung der betroffenen Person gemäß Art. 6 Abs. 1 lit. a DSGVO. Die DSGVO gewährt den betroffenen Personen eine Reihe von Rechten, unter anderem das Recht auf Auskunft,\n            Berichtigung und Löschung personenbezogener Daten. </p>\n        <ul>\n            <li>Sie haben jederzeit das Recht auf Auskunft über Ihre personenbezogenen Daten (DSGVO Art. 15).</li>\n            <li>Sie haben jederzeit das Recht, unrichtige personenbezogene Daten berichtigen zu lassen (DSGVO Art. 16).</li>\n            <li>Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen (DSGVO Art. 17).</li>\n            <li>Sie haben das Recht, die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen (DSGVO Art. 18).</li>\n            <li>Sie haben das Recht, eine Kopie Ihrer personenbezogenen Daten zu erhalten und diese an eine andere Organisation zu übertragen (DSGVO Art. 20).</li>\n            <li>Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen (DSGVO Art. 21).</li>\n        </ul>\n        <p>Wenn Sie eines dieser Rechte ausüben möchten, wenden Sie sich bitte an die Forschenden. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":112,"column":11},"end":{"line":112,"column":158}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":18},"end":{"line":113,"column":45}}}),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":167}}})) != null ? stack1 : "")
    + "\n            Die Forschenden werden Sie in keinem Bericht mit den aus dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":94},"end":{"line":114,"column":105}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":84},"end":{"line":114,"column":126}}}))
    + ") gewonnenen Erkenntnissen namentlich kenntlich machen, und\n            Ihre Vertraulichkeit als Teilnehmerin bzw. Teilnehmer dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":91},"end":{"line":115,"column":102}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":81},"end":{"line":115,"column":123}}}))
    + ") bleibt gewahrt.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":18},"end":{"line":116,"column":42}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":12},"end":{"line":116,"column":173}}})) != null ? stack1 : "")
    + "\n            Die in dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":44},"end":{"line":117,"column":55}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":34},"end":{"line":117,"column":76}}}))
    + ") erhobenen Daten werden im Einklang mit der DSGVO behandelt. </p>\n        <p>Wir erfassen\n            "
    + alias3((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":119,"column":12},"end":{"line":119,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":18},"end":{"line":120,"column":45}}}),{"name":"if","hash":{},"fn":container.program(93, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":12},"end":{"line":120,"column":89}}})) != null ? stack1 : "")
    + "\n             während der Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":43},"end":{"line":121,"column":54}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":33},"end":{"line":121,"column":75}}}))
    + ").\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":124,"column":18},"end":{"line":124,"column":37}}}),{"name":"if","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.program(97, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":124,"column":12},"end":{"line":130,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":132,"column":18},"end":{"line":132,"column":42}}}),{"name":"if","hash":{},"fn":container.program(102, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":132,"column":12},"end":{"line":138,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":140,"column":18},"end":{"line":140,"column":45}}}),{"name":"if","hash":{},"fn":container.program(109, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":140,"column":12},"end":{"line":142,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":146,"column":18},"end":{"line":146,"column":39}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0, blockParams, depths),"inverse":container.program(113, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":146,"column":12},"end":{"line":150,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":153,"column":18},"end":{"line":153,"column":37}}}),{"name":"if","hash":{},"fn":container.program(115, data, 0, blockParams, depths),"inverse":container.program(117, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":153,"column":12},"end":{"line":159,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"no",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":161,"column":18},"end":{"line":161,"column":36}}}),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.program(124, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":161,"column":12},"end":{"line":165,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>Wie bei jeder Veröffentlichung oder Online-bezogenen Aktivität ist das Risiko einer Vertraulichkeitsverletzung grundsätzlich nicht auszuschließen. Gemäß der DSGVO werden die Forschenden die teilnehmende Person informieren, falls eine Verletzung des Schutzes vertraulicher Daten festgestellt wird. </p></div>\n    <div class=\"pageBreak\"><h2>6. Angaben zu den Forschenden</h2>\n        <p>Wenn Sie Fragen oder Anliegen zu dieser Forschung haben, wenden Sie sich bitte gerne an: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(126, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":170,"column":8},"end":{"line":174,"column":15}}})) != null ? stack1 : "")
    + "        <p><b>Projektleitung:</b> "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),"[Name der Projektleitung]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":34},"end":{"line":175,"column":83}}}))
    + " ("
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":93},"end":{"line":175,"column":130}}}),{"name":"with","hash":{},"fn":container.program(129, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":85},"end":{"line":175,"column":191}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0),"[E-Mail der Projektleitung]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":191},"end":{"line":175,"column":243}}}))
    + ")</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Einwilligung und Zustimmung</h2>Diese Einwilligungserklärung wird sicher und\n        im Einklang mit der DSGVO nicht länger als erforderlich aufbewahrt.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>Ich habe die mir erteilten Erläuterungen verstanden.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(137, data, 0, blockParams, depths),"inverse":container.program(139, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Daher stimme ich freiwillig der Teilnahme an dieser Studie ("
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":86},"end":{"line":194,"column":97}}}),"[Art der Studie]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":76},"end":{"line":194,"column":118}}}))
    + ") zu.\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Ich willige freiwillig ein, dass meine Daten im Einklang mit der DSGVO aufgezeichnet und anschließend verarbeitet werden. Ich wurde über die Folgen eines Widerrufs meiner Einwilligung informiert.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(141, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Name der teilnehmenden Person (in Druckbuchstaben)</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Unterschrift der teilnehmenden Person</td>\n                <td>Ort, Datum</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});
})();