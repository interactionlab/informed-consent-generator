(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_fr'] = template({"1":function(container,depth0,helpers,partials,data) {
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
    return "le responsable scientifique";
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

  return ", sous la direction de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":86},"end":{"line":13,"column":104}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Cette étude est financée par le projet de recherche "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":68},"end":{"line":17,"column":79}}}) : helper)))
    + ".\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Nous enregistrerons des données démographiques personnelles ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Données Personnelles]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":24,"column":104},"end":{"line":24,"column":153}}}))
    + ").</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Nous prendrons des photos pendant la session.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons des vidéos pendant la session.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons de l'audio pendant la session.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Nous suivrons les mouvements de votre corps pendant la session.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Nous suivrons les mouvements de vos yeux et de votre tête pendant la session.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Nous relèverons des mesures physiologiques de votre corps.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons l'écran de votre appareil dans la mesure nécessaire à l'étude.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons des données d'interaction (par ex. clics, temporisations) pendant la session.</li>";
},"31":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Vous recevrez "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":33,"column":67},"end":{"line":33,"column":108}}}))
    + " pour votre cursus universitaire à titre de compensation.</li>\n            ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":37,"column":77}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Vous recevrez "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":76},"end":{"line":34,"column":117}}}))
    + " pour votre cursus universitaire à titre de compensation, ou "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compensation Monétaire]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":178},"end":{"line":34,"column":237}}}))
    + " à titre de compensation financière.</li>\n            ";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":37,"column":77}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Vous recevrez "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compensation Monétaire]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":35,"column":70},"end":{"line":35,"column":129}}}))
    + " à titre de compensation.</li>\n            ";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":36,"column":22},"end":{"line":36,"column":49}}}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":37,"column":77}}})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return "<li>Vous ne recevrez aucune compensation.</li>\n            ";
},"42":function(container,depth0,helpers,partials,data) {
    return "<li><span class=\"missingField\">[Compensation]</span></li>";
},"44":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":109},"end":{"line":39,"column":120}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":39,"column":99},"end":{"line":39,"column":139}}}))
    + " seront publiées <b>sans anonymisation</b>.</li>\n            ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":40,"column":22},"end":{"line":40,"column":48}}}),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":41,"column":184}}})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":40,"column":120},"end":{"line":40,"column":131}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":40,"column":110},"end":{"line":40,"column":150}}}))
    + " seront publiées de manière anonymisée ; ainsi, elles ne comporteront pas votre nom et ne pourront pas être associées à votre identité.</li>\n            ";
},"49":function(container,depth0,helpers,partials,data) {
    return "<li>Les données recueillies ne pourront être consultées ou utilisées pour d'autres recherches par quiconque en dehors des chercheurs impliqués dans ce travail.</li>";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                notre comité d'éthique : "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":45,"column":41},"end":{"line":45,"column":60}}}) : helper)))
    + ".\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data,"loc":{"start":{"line":47,"column":16},"end":{"line":51,"column":23}}})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":33}}}) : helper)))
    + " (e-mail : "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":48,"column":44},"end":{"line":48,"column":58}}}) : helper)))
    + ") ou "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":48,"column":63},"end":{"line":48,"column":81}}}) : helper)))
    + ".\n";
},"56":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":50,"column":33}}}) : helper)))
    + " (e-mail : "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":50,"column":44},"end":{"line":50,"column":58}}}) : helper)))
    + ").\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "interrogées";
},"60":function(container,depth0,helpers,partials,data) {
    return "testées";
},"62":function(container,depth0,helpers,partials,data) {
    return "interviewées";
},"64":function(container,depth0,helpers,partials,data) {
    return "Vous ne recevrez aucune compensation.\n            ";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":68,"column":22},"end":{"line":68,"column":51}}}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data,"loc":{"start":{"line":68,"column":12},"end":{"line":71,"column":68}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":68,"column":67},"end":{"line":68,"column":108}}}))
    + " pour votre cursus à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":68,"column":129},"end":{"line":68,"column":168}}}))
    + ". Vous pouvez vous retirer et interrompre votre participation à tout moment sans justification. Vous conserverez néanmoins votre compensation.\n            ";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":69,"column":22},"end":{"line":69,"column":56}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.program(72, data, 0),"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":71,"column":68}}})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compensation Monétaire]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":69,"column":72},"end":{"line":69,"column":131}}}))
    + " en compensation de votre participation, ou "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":69,"column":175},"end":{"line":69,"column":216}}}))
    + " pour votre cursus à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":69,"column":237},"end":{"line":69,"column":276}}}))
    + ".\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":70,"column":22},"end":{"line":70,"column":50}}}),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(75, data, 0),"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":71,"column":68}}})) != null ? stack1 : "");
},"73":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compensation Monétaire]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":70,"column":66},"end":{"line":70,"column":125}}}))
    + " en compensation de votre participation. \n            ";
},"75":function(container,depth0,helpers,partials,data) {
    return "<span class=\"missingField\">[Compensation]</span>";
},"77":function(container,depth0,helpers,partials,data) {
    return "Vous pouvez vous retirer et interrompre votre participation à tout moment.\n            ";
},"79":function(container,depth0,helpers,partials,data) {
    return "Vous pouvez vous retirer et interrompre votre participation à tout moment, sans pénalité ni perte de la compensation. ";
},"81":function(container,depth0,helpers,partials,data) {
    return "J'ai le droit de ne pas répondre aux questions et, si je me sens mal à l'aise à un moment quelconque de l'entretien, j'ai le droit de me retirer de l'entretien. ";
},"83":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (Vous ne bénéficierez pas directement de votre participation à "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":91,"column":89},"end":{"line":91,"column":100}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":91,"column":79},"end":{"line":91,"column":119}}}))
    + ". Nous espérons que les informations obtenues grâce à votre participation contribueront à faire progresser la recherche dans ce domaine.)\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "                Votre bénéfice à participer est la compensation décrite ci-dessus.\n";
},"87":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Nous enregistrerons des données personnelles ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Données Personnelles]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":109,"column":84},"end":{"line":109,"column":133}}}))
    + ") pendant votre participation. ";
},"89":function(container,depth0,helpers,partials,data) {
    return "Les coordonnées des participants à l'étude pourront être utilisées pour le suivi d'éventuelles chaînes de contamination. ";
},"91":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":113,"column":110},"end":{"line":113,"column":121}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":113,"column":100},"end":{"line":113,"column":140}}}))
    + " seront chiffrées. ";
},"93":function(container,depth0,helpers,partials,data) {
    return " et enregistrerons les métadonnées du navigateur";
},"95":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":122,"column":82},"end":{"line":122,"column":93}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":122,"column":72},"end":{"line":122,"column":112}}}))
    + " seront publiées <b>sans anonymisation</b>. Les utilisations ultérieures des enregistrements et des données seront soumises aux politiques standard d'utilisation des données.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":123,"column":22},"end":{"line":123,"column":48}}}),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.program(100, data, 0),"data":data,"loc":{"start":{"line":123,"column":12},"end":{"line":127,"column":12}}})) != null ? stack1 : "");
},"98":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":124,"column":82},"end":{"line":124,"column":93}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":124,"column":72},"end":{"line":124,"column":112}}}))
    + " seront publiées de manière anonymisée. Les utilisations ultérieures des enregistrements et des données seront soumises aux politiques standard d'utilisation des données qui protègent l'anonymat des personnes participantes. Nous supprimerons ou coderons toute information personnelle susceptible de vous identifier avant de publier les données, afin de garantir que personne ne puisse vous identifier à partir des informations que nous partageons. Nous utiliserons les normes scientifiques actuelles et des méthodes reconnues d'anonymisation. Lorsque vos données sont anonymisées, elles sont modifiées de telle sorte qu'elles ne puissent plus être rattachées à votre personne, ou seulement au prix d'un effort technique disproportionné. Malgré ces mesures, nous ne pouvons garantir l'anonymat total de vos données personnelles.\n";
},"100":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":126,"column":82},"end":{"line":126,"column":93}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":126,"column":72},"end":{"line":126,"column":112}}}))
    + " ne seront pas publiées et resteront confidentielles.\n            ";
},"102":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":130,"column":22},"end":{"line":130,"column":43}}}),{"name":"if","hash":{},"fn":container.program(103, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":16},"end":{"line":134,"column":23}}})) != null ? stack1 : "");
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        La transcription de l'entretien sera principalement analysée par "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":89},"end":{"line":131,"column":126}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":126},"end":{"line":131,"column":213}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":213},"end":{"line":131,"column":309}}})) != null ? stack1 : "")
    + ".\n                        L'accès à la transcription brute de l'entretien sera limité aux auteurs de cette recherche, à leurs collègues universitaires, et aux chercheurs avec lesquels ils pourraient collaborer dans le cadre du processus de recherche.\n                        Tout résumé du contenu de l'entretien, ou toute citation directe de l'entretien, rendus disponibles dans des publications universitaires ou d'autres supports, seront anonymisés afin que vous ne puissiez pas être identifié(e), et un soin particulier sera apporté afin qu'aucun autre élément de l'entretien susceptible de vous identifier ne soit révélé. J'ai le droit de ne pas répondre aux questions et, si je me sens mal à l'aise à un moment quelconque de l'entretien, j'ai le droit de me retirer de l'entretien.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":154},"end":{"line":131,"column":181}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":131,"column":182},"end":{"line":131,"column":206}}}) : helper)));
},"105":function(container,depth0,helpers,partials,data) {
    return " et";
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":240},"end":{"line":131,"column":278}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":131,"column":279},"end":{"line":131,"column":302}}}) : helper)));
},"109":function(container,depth0,helpers,partials,data) {
    return "                Ce site utilise des cookies et d'autres technologies de suivi pour mener la recherche, améliorer l'expérience utilisateur, la capacité à interagir avec le système, et fournir du contenu supplémentaire de la part de tiers. Malgré un contrôle attentif du contenu, les chercheurs déclinent toute responsabilité pour les dommages résultant directement ou indirectement de l'utilisation de cette application en ligne.\n";
},"111":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Vos données non anonymisées seront conservées pendant "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"storageTime") : depth0),"[Durée de Conservation]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":144,"column":70},"end":{"line":144,"column":119}}}))
    + " à compter du moment où votre consentement est donné, à moins que vous ne retiriez votre consentement avant l'expiration de ce délai. Vos données non anonymisées seront stockées dans un lieu sécurisé et ne seront accessibles qu'aux chercheurs impliqués dans ce travail.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Vos données non anonymisées seront conservées indéfiniment, à moins que vous ne retiriez votre consentement.\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Les données non anonymisées recueillies pourront être partagées publiquement, sauf si vous n'avez pas signé le formulaire d'autorisation distinct nous permettant de le faire (voir ci-dessous).\n";
},"117":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":152,"column":22},"end":{"line":152,"column":48}}}),{"name":"if","hash":{},"fn":container.program(118, data, 0),"inverse":container.program(120, data, 0),"data":data,"loc":{"start":{"line":152,"column":12},"end":{"line":156,"column":12}}})) != null ? stack1 : "");
},"118":function(container,depth0,helpers,partials,data) {
    return "                Les données anonymisées recueillies pourront être partagées publiquement.\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies ne pourront être consultées ou utilisées pour d'autres recherches par quiconque en dehors des chercheurs impliqués dans ce travail.\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies seront supprimées à la fin de la recherche, ou si vous contactez le chercheur afin qu'il les supprime.\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies qui n'auront pas été rendues publiques seront supprimées à la fin de la recherche.\n";
},"126":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(127, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":168,"column":15},"end":{"line":170,"column":21}}})) != null ? stack1 : "")
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
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),"[Nom]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":169,"column":30},"end":{"line":169,"column":54}}}))
    + " ("
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"email") : depth0),"[E-mail]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":169,"column":56},"end":{"line":169,"column":84}}}))
    + ") <br />\n            ";
},"129":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":154},"end":{"line":172,"column":169}}}),{"name":"if","hash":{},"fn":container.program(130, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":148},"end":{"line":172,"column":188}}})) != null ? stack1 : "");
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":174,"column":18},"end":{"line":174,"column":56}}}),{"name":"if","hash":{},"fn":container.program(133, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":174,"column":12},"end":{"line":176,"column":19}}})) != null ? stack1 : "");
},"133":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p><b>Directeur du département :</b> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":53},"end":{"line":175,"column":71}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":79},"end":{"line":175,"column":116}}}),{"name":"with","hash":{},"fn":container.program(134, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":71},"end":{"line":175,"column":178}}})) != null ? stack1 : "")
    + "</p>\n";
},"134":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":134},"end":{"line":175,"column":149}}}),{"name":"if","hash":{},"fn":container.program(135, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":128},"end":{"line":175,"column":169}}})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data,blockParams) {
    return " ("
    + container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + ")";
},"137":function(container,depth0,helpers,partials,data) {
    return "                   J'ai pu enregistrer une copie de ce formulaire. J'ai contacté les chercheurs mentionnés et j'ai obtenu des réponses satisfaisantes à toutes mes questions.\n";
},"139":function(container,depth0,helpers,partials,data) {
    return "                    Une copie de ce formulaire m'a été remise. J'ai obtenu des réponses satisfaisantes à toutes mes questions.\n";
},"141":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>J'accepte que mes enregistrements de données et mesures réalisés au cours de l'étude soient publiés dans le cadre de cette recherche sous une forme non anonymisée.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":205,"column":16},"end":{"line":210,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(144, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":211,"column":16},"end":{"line":216,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":217,"column":16},"end":{"line":222,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Je comprends que les données anonymisées ne pourront pas être associées à mon nom. Je ne tire aucun droit (tel qu'une rémunération ou une qualité de co-auteur) du consentement à la publication. Cette déclaration de consentement est révocable à tout moment, conformément au RGPD. En cas de révocation, les enregistrements publiés, dans la mesure où ils relèvent de la disposition des chercheurs, seront retirés. Les enregistrements ultérieurs ne seront plus utilisés ni publiés après la révocation de la publication.</td></tr>\n";
},"142":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des photos prises au cours de cette étude puissent être réalisées et publiées.</td>\n                    </tr>\n";
},"144":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des vidéos prises au cours de cette étude puissent être enregistrées et publiées.</td>\n                    </tr>\n";
},"146":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des fichiers audio pris au cours de cette étude puissent être enregistrés et publiés.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"pageBreak\"><h1>Consentement éclairé de participation</h1>\n        <p>\n            Vous êtes invité(e) à participer à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":57},"end":{"line":7,"column":68}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":87}}}))
    + " <b>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"[Titre]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":91},"end":{"line":7,"column":118}}}))
    + "</b>, initié(e) et menée par\n            "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":58}}}),"[Chercheurs]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":75}}}))
    + ".\n            Cette recherche est supervisée par\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":95}}})) != null ? stack1 : "")
    + "\n            à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":53}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":60},"end":{"line":11,"column":85}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":53},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Veuillez noter ce qui suit :\n        </p>\n        <ul>\n            <li>Votre participation est volontaire.</li>\n            <li>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":37}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":56}}}))
    + " durera environ "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Durée]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":102}}}))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":167}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":94}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":99}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":98}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":131}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":114}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":140}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":151}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.program(33, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":84}}})) != null ? stack1 : "")
    + "            <li>Nous pourrons publier les résultats de cette session et d'autres sessions.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":18},"end":{"line":39,"column":37}}}),{"name":"if","hash":{},"fn":container.program(44, data, 0, blockParams, depths),"inverse":container.program(46, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":191}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Si vous avez des questions concernant l'ensemble du processus de consentement éclairé de cette recherche ou vos droits en tant que participant à une recherche impliquant la personne humaine, veuillez contacter\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.program(53, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":44,"column":12},"end":{"line":52,"column":19}}})) != null ? stack1 : "")
    + "\n            Vous devriez lire attentivement les informations ci-dessous. Vous pouvez prendre tout le temps nécessaire pour lire le formulaire de consentement. Si vous n'êtes pas entièrement d'accord avec un point, ou si toutes vos questions n'ont pas reçu de réponse satisfaisante, vous ne devez pas donner votre consentement. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Objet et but de cette recherche</h2>\n        <p>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"purpose") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":57,"column":21},"end":{"line":57,"column":43}}}),"[But]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":57,"column":11},"end":{"line":57,"column":53}}}))
    + " "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"goal") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":57,"column":64},"end":{"line":57,"column":83}}}),"[Objectif]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":57,"column":54},"end":{"line":57,"column":98}}}))
    + " Votre participation nous aidera à atteindre cet objectif. Les résultats de cette recherche pourront être\n            présentés lors de réunions scientifiques ou professionnelles, ou publiés dans des actes ou revues\n            scientifiques.</p></div>\n    <div class=\"pageBreak\"><h2>2. Participation et compensation</h2>\n        <p>Votre participation à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":61,"column":43},"end":{"line":61,"column":54}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":61,"column":33},"end":{"line":61,"column":73}}}))
    + " est volontaire. Vous serez l'une des "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"participants") : depth0),"[Participants]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":61,"column":111},"end":{"line":61,"column":152}}}))
    + " personnes environ à être\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":62,"column":18},"end":{"line":62,"column":45}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":65}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":63,"column":18},"end":{"line":63,"column":43}}}),{"name":"if","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":63,"column":12},"end":{"line":63,"column":59}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":18},"end":{"line":64,"column":44}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":64}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":42}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":63}}})) != null ? stack1 : "")
    + "\n             dans le cadre de cette recherche.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":45}}}),{"name":"if","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.program(66, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":12},"end":{"line":71,"column":75}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":72,"column":18},"end":{"line":72,"column":45}}}),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":72,"column":12},"end":{"line":73,"column":145}}})) != null ? stack1 : "")
    + "\n            Dans la mesure du possible, vous pouvez refuser de répondre à toute question à laquelle vous ne souhaitez pas répondre, ou vous retirer de la participation à tout moment.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":18},"end":{"line":75,"column":42}}}),{"name":"if","hash":{},"fn":container.program(81, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":12},"end":{"line":75,"column":212}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>À tout moment et sans avoir à vous justifier, vous pouvez nous informer que vous souhaitez retirer le consentement donné (RGPD art. 7(3)). En cas de retrait, vos données conservées sur la base de votre consentement seront supprimées ou\n            anonymisées dans la mesure où cela est légalement possible (RGPD art. 17). Si la suppression est impossible ou ne peut être réalisée qu'avec un effort technique\n            déraisonnable, vos données seront anonymisées par la suppression des informations permettant votre identification\n            personnelle. Toutefois, l'anonymisation de vos données ne peut exclure totalement la possibilité qu'une\n            information permette ultérieurement de remonter jusqu'à vous par d'autres sources. Enfin, une fois les données anonymisées, leur\n            suppression n'est plus possible puisque nous ne serons plus en mesure d'identifier quelles données sont les vôtres. </p></div>\n    <div class=\"pageBreak\"><h2>3. Déroulement</h2>\n        <p>Après avoir donné votre consentement, vous serez guidé(e) à travers les étapes suivantes :</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":85,"column":66},"end":{"line":85,"column":88}}}),"[Procédure]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":85,"column":56},"end":{"line":85,"column":104}}}))
    + "</p>\n        <p>La procédure complète de "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":86,"column":46},"end":{"line":86,"column":57}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":86,"column":36},"end":{"line":86,"column":76}}}))
    + " durera environ "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Durée]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":86,"column":92},"end":{"line":86,"column":122}}}))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Risques et bénéfices</h2>\n        <p>Il n'existe aucun risque associé à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":56},"end":{"line":88,"column":67}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":46},"end":{"line":88,"column":86}}}))
    + ". Les désagréments ou inconvénients seront mineurs et\n            peu susceptibles de se produire. Si vous vous sentez mal à l'aise, vous pouvez interrompre votre participation.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":90,"column":18},"end":{"line":90,"column":45}}}),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.program(85, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":90,"column":12},"end":{"line":94,"column":19}}})) != null ? stack1 : "")
    + "            Cette recherche nous permettra de faire progresser les connaissances dans ce domaine.</p></div>\n    <div class=\"pageBreak\"><h2>5. Protection des données et confidentialité</h2>\n        <p>Le Règlement Général sur la Protection des Données (RGPD) de l'Union européenne (UE) régit la collecte de ces données.\n            La base légale du traitement des données personnelles est le consentement du participant, conformément à l'art. 6(1)(a) du RGPD. Le RGPD garantit à la personne concernée un ensemble de droits, notamment le droit d'accès,\n            de rectification et d'effacement des données personnelles. </p>\n        <ul>\n            <li>Vous avez le droit d'accéder à vos données personnelles à tout moment (RGPD art. 15).</li>\n            <li>Vous avez le droit de corriger des données personnelles inexactes à tout moment (RGPD art. 16).</li>\n            <li>Vous avez le droit de faire supprimer vos données personnelles (RGPD art. 17).</li>\n            <li>Vous avez le droit de limiter le traitement de vos données personnelles (RGPD art. 18).</li>\n            <li>Vous avez le droit de recevoir une copie de vos données personnelles et de les transférer à une autre organisation (RGPD art. 20).</li>\n            <li>Vous avez le droit de vous opposer au traitement de vos données personnelles (RGPD art. 21).</li>\n        </ul>\n        <p>Si vous souhaitez exercer l'un de ces droits, veuillez contacter les chercheurs. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":109,"column":11},"end":{"line":109,"column":171}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":110,"column":18},"end":{"line":110,"column":45}}}),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":110,"column":12},"end":{"line":110,"column":175}}})) != null ? stack1 : "")
    + "\n            Les chercheurs ne vous identifieront pas par votre nom réel dans les rapports utilisant les informations obtenues dans le cadre de "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":111,"column":153},"end":{"line":111,"column":164}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":111,"column":143},"end":{"line":111,"column":183}}}))
    + ", et\n            votre confidentialité en tant que participant à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":112,"column":70},"end":{"line":112,"column":81}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":112,"column":60},"end":{"line":112,"column":100}}}))
    + " restera garantie.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":18},"end":{"line":113,"column":42}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":166}}})) != null ? stack1 : "")
    + "\n            Les données recueillies dans le cadre de "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":63},"end":{"line":114,"column":74}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":53},"end":{"line":114,"column":93}}}))
    + " seront traitées conformément au RGPD. </p>\n        <p>Nous enregistrerons\n            "
    + alias3((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":12},"end":{"line":116,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":18},"end":{"line":117,"column":45}}}),{"name":"if","hash":{},"fn":container.program(93, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":12},"end":{"line":117,"column":102}}})) != null ? stack1 : "")
    + "\n             pendant "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":118,"column":31},"end":{"line":118,"column":42}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":118,"column":21},"end":{"line":118,"column":61}}}))
    + ".\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":18},"end":{"line":121,"column":37}}}),{"name":"if","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.program(97, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":12},"end":{"line":127,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":129,"column":18},"end":{"line":129,"column":42}}}),{"name":"if","hash":{},"fn":container.program(102, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":129,"column":12},"end":{"line":135,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":137,"column":18},"end":{"line":137,"column":45}}}),{"name":"if","hash":{},"fn":container.program(109, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":137,"column":12},"end":{"line":139,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":143,"column":18},"end":{"line":143,"column":39}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0, blockParams, depths),"inverse":container.program(113, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":143,"column":12},"end":{"line":147,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":150,"column":18},"end":{"line":150,"column":37}}}),{"name":"if","hash":{},"fn":container.program(115, data, 0, blockParams, depths),"inverse":container.program(117, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":150,"column":12},"end":{"line":156,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"no",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":158,"column":18},"end":{"line":158,"column":36}}}),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.program(124, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":158,"column":12},"end":{"line":162,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>Comme pour toute publication ou activité en ligne, le risque d'une violation de la confidentialité reste toujours possible. Conformément au RGPD, les chercheurs informeront le participant si une violation de données confidentielles est détectée. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identification des chercheurs</h2>\n        <p>Si vous avez des questions ou des préoccupations concernant la recherche, n'hésitez pas à contacter : </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(126, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":167,"column":8},"end":{"line":171,"column":15}}})) != null ? stack1 : "")
    + "        <p><b>Responsable scientifique :</b> "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),"[Nom du Responsable]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":45},"end":{"line":172,"column":89}}}))
    + " ("
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":99},"end":{"line":172,"column":136}}}),{"name":"with","hash":{},"fn":container.program(129, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":91},"end":{"line":172,"column":197}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0),"[E-mail du Responsable]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":172,"column":197},"end":{"line":172,"column":245}}}))
    + ")</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":173,"column":8},"end":{"line":177,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Consentement éclairé et accord</h2>Le présent formulaire de consentement sera conservé en lieu sûr et\n        conformément au RGPD, pendant une durée n'excédant pas ce qui est nécessaire.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>J'ai compris les explications qui m'ont été fournies.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":186,"column":22},"end":{"line":186,"column":49}}}),{"name":"if","hash":{},"fn":container.program(137, data, 0, blockParams, depths),"inverse":container.program(139, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":186,"column":16},"end":{"line":190,"column":23}}})) != null ? stack1 : "")
    + "                Par conséquent, j'accepte volontairement de participer à "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":191,"column":83},"end":{"line":191,"column":94}}}),"[Type d'Étude]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":191,"column":73},"end":{"line":191,"column":113}}}))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Je consens volontairement à ce que mes données soient enregistrées puis traitées conformément au RGPD. J'ai été informé(e) des conséquences du retrait de mon consentement.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":199,"column":18},"end":{"line":199,"column":37}}}),{"name":"if","hash":{},"fn":container.program(141, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":199,"column":12},"end":{"line":224,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Nom du participant en lettres capitales</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Signature du participant</td>\n                <td>Lieu, date</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});
})();