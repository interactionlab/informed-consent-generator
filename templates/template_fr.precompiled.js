(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_fr'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":53}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "le responsable scientifique";
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

  return ", sous la direction de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":86},"end":{"line":13,"column":104}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Cette étude est financée par le projet de recherche "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":68},"end":{"line":17,"column":79}}}) : helper)))
    + ".\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Nous enregistrerons des données démographiques personnelles ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":24,"column":104},"end":{"line":24,"column":120}}}) : helper)))
    + ").</li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<li>Nous prendrons des photos pendant la session.</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons des vidéos pendant la session.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons de l'audio pendant la session.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Nous suivrons les mouvements de votre corps pendant la session.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Nous suivrons les mouvements de vos yeux et de votre tête pendant la session.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Nous relèverons des mesures physiologiques de votre corps.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons l'écran de votre appareil dans la mesure nécessaire à l'étude.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Nous enregistrerons des données d'interaction (par ex. clics, temporisations) pendant la session.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Vous recevrez 1 point de crédit par heure pour votre cursus universitaire à titre de compensation.</li>\n            ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":66}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Vous recevrez 1 point de crédit par heure pour votre cursus universitaire à titre de compensation, ou "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":34,"column":164},"end":{"line":34,"column":188}}}) : helper)))
    + " à titre de compensation financière.</li>\n            ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":36,"column":66}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Vous recevrez "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":35,"column":70},"end":{"line":35,"column":94}}}) : helper)))
    + " à titre de compensation.</li>\n            ";
},"37":function(container,depth0,helpers,partials,data) {
    return "<li>Vous ne recevrez aucune compensation.</li>";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":38,"column":99},"end":{"line":38,"column":112}}}) : helper)))
    + " seront publiées <b>sans anonymisation</b>.</li>\n            ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":48}}}),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":40,"column":184}}})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":110},"end":{"line":39,"column":123}}}) : helper)))
    + " seront publiées de manière anonymisée ; ainsi, elles ne comporteront pas votre nom et ne pourront pas être associées à votre identité.</li>\n            ";
},"44":function(container,depth0,helpers,partials,data) {
    return "<li>Les données recueillies ne pourront être consultées ou utilisées pour d'autres recherches par quiconque en dehors des chercheurs impliqués dans ce travail.</li>";
},"46":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                notre comité d'éthique : "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":44,"column":41},"end":{"line":44,"column":60}}}) : helper)))
    + ".\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.program(51, data, 0),"data":data,"loc":{"start":{"line":46,"column":16},"end":{"line":50,"column":23}}})) != null ? stack1 : "");
},"49":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":47,"column":20},"end":{"line":47,"column":33}}}) : helper)))
    + " (e-mail : "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":47,"column":44},"end":{"line":47,"column":58}}}) : helper)))
    + ") ou "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":47,"column":63},"end":{"line":47,"column":81}}}) : helper)))
    + ".\n";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":49,"column":20},"end":{"line":49,"column":33}}}) : helper)))
    + " (e-mail : "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":49,"column":44},"end":{"line":49,"column":58}}}) : helper)))
    + ").\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "interrogées";
},"55":function(container,depth0,helpers,partials,data) {
    return "testées";
},"57":function(container,depth0,helpers,partials,data) {
    return "interviewées";
},"59":function(container,depth0,helpers,partials,data) {
    return "Vous ne recevrez aucune compensation.\n            ";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":67,"column":22},"end":{"line":67,"column":51}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":67,"column":12},"end":{"line":69,"column":131}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez un point de crédit par heure requis pour votre cursus à "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":67,"column":123},"end":{"line":67,"column":138}}}) : helper)))
    + ". Vous pouvez vous retirer et interrompre votre participation à tout moment sans justification. Vous conserverez néanmoins vos points de crédit.\n            ";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":68,"column":22},"end":{"line":68,"column":56}}}),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data,"loc":{"start":{"line":68,"column":12},"end":{"line":69,"column":131}}})) != null ? stack1 : "");
},"65":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez "
    + alias4(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":68,"column":72},"end":{"line":68,"column":96}}}) : helper)))
    + " en compensation de votre participation, ou un point de crédit par heure requis pour votre cursus à "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":68,"column":196},"end":{"line":68,"column":211}}}) : helper)))
    + ".\n            ";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":69,"column":22},"end":{"line":69,"column":50}}}),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":69,"column":131}}})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Vous recevrez "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":69,"column":66},"end":{"line":69,"column":90}}}) : helper)))
    + " en compensation de votre participation. ";
},"70":function(container,depth0,helpers,partials,data) {
    return "Vous pouvez vous retirer et interrompre votre participation à tout moment.\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    return "Vous pouvez vous retirer et interrompre votre participation à tout moment, sans pénalité ni perte de la compensation. ";
},"74":function(container,depth0,helpers,partials,data) {
    return "J'ai le droit de ne pas répondre aux questions et, si je me sens mal à l'aise à un moment quelconque de l'entretien, j'ai le droit de me retirer de l'entretien. ";
},"76":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (Vous ne bénéficierez pas directement de votre participation à "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":89,"column":79},"end":{"line":89,"column":92}}}) : helper)))
    + ". Nous espérons que les informations obtenues grâce à votre participation contribueront à faire progresser la recherche dans ce domaine.)\n";
},"78":function(container,depth0,helpers,partials,data) {
    return "                Votre bénéfice à participer est la compensation décrite ci-dessus.\n";
},"80":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Nous enregistrerons des données personnelles ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":107,"column":84},"end":{"line":107,"column":100}}}) : helper)))
    + ") pendant votre participation. ";
},"82":function(container,depth0,helpers,partials,data) {
    return "Les coordonnées des participants à l'étude pourront être utilisées pour le suivi d'éventuelles chaînes de contamination. ";
},"84":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":111,"column":100},"end":{"line":111,"column":113}}}) : helper)))
    + " seront chiffrées. ";
},"86":function(container,depth0,helpers,partials,data) {
    return " et enregistrerons les métadonnées du navigateur";
},"88":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":120,"column":72},"end":{"line":120,"column":85}}}) : helper)))
    + " seront publiées <b>sans anonymisation</b>. Les utilisations ultérieures des enregistrements et des données seront soumises aux politiques standard d'utilisation des données.\n";
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":121,"column":22},"end":{"line":121,"column":48}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0),"inverse":container.program(93, data, 0),"data":data,"loc":{"start":{"line":121,"column":12},"end":{"line":125,"column":12}}})) != null ? stack1 : "");
},"91":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":122,"column":72},"end":{"line":122,"column":85}}}) : helper)))
    + " seront publiées de manière anonymisée. Les utilisations ultérieures des enregistrements et des données seront soumises aux politiques standard d'utilisation des données qui protègent l'anonymat des personnes participantes. Nous supprimerons ou coderons toute information personnelle susceptible de vous identifier avant de publier les données, afin de garantir que personne ne puisse vous identifier à partir des informations que nous partageons. Nous utiliserons les normes scientifiques actuelles et des méthodes reconnues d'anonymisation. Lorsque vos données sont anonymisées, elles sont modifiées de telle sorte qu'elles ne puissent plus être rattachées à votre personne, ou seulement au prix d'un effort technique disproportionné. Malgré ces mesures, nous ne pouvons garantir l'anonymat total de vos données personnelles.\n";
},"93":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Toutes les données que vous fournissez dans le cadre de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":124,"column":72},"end":{"line":124,"column":85}}}) : helper)))
    + " ne seront pas publiées et resteront confidentielles.\n            ";
},"95":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":128,"column":22},"end":{"line":128,"column":43}}}),{"name":"if","hash":{},"fn":container.program(96, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":16},"end":{"line":132,"column":23}}})) != null ? stack1 : "");
},"96":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        La transcription de l'entretien sera principalement analysée par "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":89},"end":{"line":129,"column":126}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":126},"end":{"line":129,"column":213}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":213},"end":{"line":129,"column":309}}})) != null ? stack1 : "")
    + ".\n                        L'accès à la transcription brute de l'entretien sera limité aux auteurs de cette recherche, à leurs collègues universitaires, et aux chercheurs avec lesquels ils pourraient collaborer dans le cadre du processus de recherche.\n                        Tout résumé du contenu de l'entretien, ou toute citation directe de l'entretien, rendus disponibles dans des publications universitaires ou d'autres supports, seront anonymisés afin que vous ne puissiez pas être identifié(e), et un soin particulier sera apporté afin qu'aucun autre élément de l'entretien susceptible de vous identifier ne soit révélé. J'ai le droit de ne pas répondre aux questions et, si je me sens mal à l'aise à un moment quelconque de l'entretien, j'ai le droit de me retirer de l'entretien.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":154},"end":{"line":129,"column":181}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":129,"column":182},"end":{"line":129,"column":206}}}) : helper)));
},"98":function(container,depth0,helpers,partials,data) {
    return " et";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":240},"end":{"line":129,"column":278}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":129,"column":279},"end":{"line":129,"column":302}}}) : helper)));
},"102":function(container,depth0,helpers,partials,data) {
    return "                Ce site utilise des cookies et d'autres technologies de suivi pour mener la recherche, améliorer l'expérience utilisateur, la capacité à interagir avec le système, et fournir du contenu supplémentaire de la part de tiers. Malgré un contrôle attentif du contenu, les chercheurs déclinent toute responsabilité pour les dommages résultant directement ou indirectement de l'utilisation de cette application en ligne.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Vos données non anonymisées seront conservées pendant "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"storageTime") || (depth0 != null ? lookupProperty(depth0,"storageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storageTime","hash":{},"data":data,"loc":{"start":{"line":142,"column":70},"end":{"line":142,"column":85}}}) : helper)))
    + " à compter du moment où votre consentement est donné, à moins que vous ne retiriez votre consentement avant l'expiration de ce délai. Vos données non anonymisées seront stockées dans un lieu sécurisé et ne seront accessibles qu'aux chercheurs impliqués dans ce travail.\n";
},"106":function(container,depth0,helpers,partials,data) {
    return "                Vos données non anonymisées seront conservées indéfiniment, à moins que vous ne retiriez votre consentement.\n";
},"108":function(container,depth0,helpers,partials,data) {
    return "                Les données non anonymisées recueillies pourront être partagées publiquement, sauf si vous n'avez pas signé le formulaire d'autorisation distinct nous permettant de le faire (voir ci-dessous).\n";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":150,"column":22},"end":{"line":150,"column":48}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0),"inverse":container.program(113, data, 0),"data":data,"loc":{"start":{"line":150,"column":12},"end":{"line":154,"column":12}}})) != null ? stack1 : "");
},"111":function(container,depth0,helpers,partials,data) {
    return "                Les données anonymisées recueillies pourront être partagées publiquement.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies ne pourront être consultées ou utilisées pour d'autres recherches par quiconque en dehors des chercheurs impliqués dans ce travail.\n            ";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies seront supprimées à la fin de la recherche, ou si vous contactez le chercheur afin qu'il les supprime.\n";
},"117":function(container,depth0,helpers,partials,data) {
    return "                Les données recueillies qui n'auront pas été rendues publiques seront supprimées à la fin de la recherche.\n";
},"119":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(120, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":15},"end":{"line":168,"column":21}}})) != null ? stack1 : "")
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
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":167,"column":30},"end":{"line":167,"column":38}}}) : helper)))
    + " ("
    + alias1(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":167,"column":40},"end":{"line":167,"column":49}}}) : helper)))
    + ") <br />\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p><b>Responsable scientifique :</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":171,"column":49},"end":{"line":171,"column":62}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":171,"column":64},"end":{"line":171,"column":74}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":171,"column":76},"end":{"line":171,"column":83}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":171,"column":84},"end":{"line":171,"column":92}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"if","hash":{},"fn":container.program(123, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":171,"column":92},"end":{"line":171,"column":127}}})) != null ? stack1 : "")
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":171,"column":129},"end":{"line":171,"column":143}}}) : helper)))
    + ")</p>\n";
},"123":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":171,"column":109},"end":{"line":171,"column":120}}}) : helper)));
},"125":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":174,"column":18},"end":{"line":174,"column":56}}}),{"name":"if","hash":{},"fn":container.program(126, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":12},"end":{"line":176,"column":19}}})) != null ? stack1 : "");
},"126":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p><b>Directeur du département :</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":175,"column":53},"end":{"line":175,"column":71}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":175,"column":73},"end":{"line":175,"column":83}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":175,"column":85},"end":{"line":175,"column":92}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":175,"column":93},"end":{"line":175,"column":101}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":175,"column":103},"end":{"line":175,"column":114}}}) : helper)))
    + ")</p>\n";
},"128":function(container,depth0,helpers,partials,data) {
    return "                   J'ai pu enregistrer une copie de ce formulaire. J'ai contacté les chercheurs mentionnés et j'ai obtenu des réponses satisfaisantes à toutes mes questions.\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                    Une copie de ce formulaire m'a été remise. J'ai obtenu des réponses satisfaisantes à toutes mes questions.\n";
},"132":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>J'accepte que mes enregistrements de données et mesures réalisés au cours de l'étude soient publiés dans le cadre de cette recherche sous une forme non anonymisée.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(133, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":205,"column":16},"end":{"line":210,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":211,"column":16},"end":{"line":216,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":217,"column":16},"end":{"line":222,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Je comprends que les données anonymisées ne pourront pas être associées à mon nom. Je ne tire aucun droit (tel qu'une rémunération ou une qualité de co-auteur) du consentement à la publication. Cette déclaration de consentement est révocable à tout moment, conformément au RGPD. En cas de révocation, les enregistrements publiés, dans la mesure où ils relèvent de la disposition des chercheurs, seront retirés. Les enregistrements ultérieurs ne seront plus utilisés ni publiés après la révocation de la publication.</td></tr>\n";
},"133":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des photos prises au cours de cette étude puissent être réalisées et publiées.</td>\n                    </tr>\n";
},"135":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des vidéos prises au cours de cette étude puissent être enregistrées et publiées.</td>\n                    </tr>\n";
},"137":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">J'accepte en outre que des fichiers audio pris au cours de cette étude puissent être enregistrés et publiés.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \"><img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"pageBreak\"><h1>Consentement éclairé de participation</h1>\n        <p>\n            Vous êtes invité(e) à participer à "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":60}}}) : helper)))
    + " <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":64},"end":{"line":7,"column":73}}}) : helper)))
    + "</b>, initié(e) et menée par\n            "
    + alias4((lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":50}}}))
    + ".\n            Cette recherche est supervisée par\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":95}}})) != null ? stack1 : "")
    + "\n            à "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":29}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":61}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":29},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Veuillez noter ce qui suit :\n        </p>\n        <ul>\n            <li>Votre participation est volontaire.</li>\n            <li>"
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":29}}}) : helper)))
    + " durera environ "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":23,"column":45},"end":{"line":23,"column":57}}}) : helper)))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":134}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":94}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":99}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":98}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":131}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":114}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":140}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":151}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":36,"column":73}}})) != null ? stack1 : "")
    + "            <li>Nous pourrons publier les résultats de cette session et d'autres sessions.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":37}}}),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.program(41, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":191}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Si vous avez des questions concernant l'ensemble du processus de consentement éclairé de cette recherche ou vos droits en tant que participant à une recherche impliquant la personne humaine, veuillez contacter\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.program(48, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":51,"column":19}}})) != null ? stack1 : "")
    + "\n            Vous devriez lire attentivement les informations ci-dessous. Vous pouvez prendre tout le temps nécessaire pour lire le formulaire de consentement. Si vous n'êtes pas entièrement d'accord avec un point, ou si toutes vos questions n'ont pas reçu de réponse satisfaisante, vous ne devez pas donner votre consentement. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Objet et but de cette recherche</h2>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"purpose") || (depth0 != null ? lookupProperty(depth0,"purpose") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"purpose","hash":{},"data":data,"loc":{"start":{"line":56,"column":11},"end":{"line":56,"column":22}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"goal") || (depth0 != null ? lookupProperty(depth0,"goal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data,"loc":{"start":{"line":56,"column":23},"end":{"line":56,"column":31}}}) : helper)))
    + " Votre participation nous aidera à atteindre cet objectif. Les résultats de cette recherche pourront être\n            présentés lors de réunions scientifiques ou professionnelles, ou publiés dans des actes ou revues\n            scientifiques.</p></div>\n    <div class=\"pageBreak\"><h2>2. Participation et compensation</h2>\n        <p>Votre participation à "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":60,"column":33},"end":{"line":60,"column":46}}}) : helper)))
    + " est volontaire. Vous serez l'une des "
    + alias4(((helper = (helper = lookupProperty(helpers,"participants") || (depth0 != null ? lookupProperty(depth0,"participants") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participants","hash":{},"data":data,"loc":{"start":{"line":60,"column":84},"end":{"line":60,"column":100}}}) : helper)))
    + " personnes environ à être\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":61,"column":18},"end":{"line":61,"column":45}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":61,"column":65}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":62,"column":18},"end":{"line":62,"column":43}}}),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":59}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":63,"column":18},"end":{"line":63,"column":44}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":12},"end":{"line":63,"column":64}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":64,"column":18},"end":{"line":64,"column":42}}}),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":63}}})) != null ? stack1 : "")
    + "\n             dans le cadre de cette recherche.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":45}}}),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.program(61, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":69,"column":138}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":70,"column":18},"end":{"line":70,"column":45}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.program(72, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":71,"column":145}}})) != null ? stack1 : "")
    + "\n            Dans la mesure du possible, vous pouvez refuser de répondre à toute question à laquelle vous ne souhaitez pas répondre, ou vous retirer de la participation à tout moment.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":18},"end":{"line":73,"column":42}}}),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":73,"column":212}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>À tout moment et sans avoir à vous justifier, vous pouvez nous informer que vous souhaitez retirer le consentement donné (RGPD art. 7(3)). En cas de retrait, vos données conservées sur la base de votre consentement seront supprimées ou\n            anonymisées dans la mesure où cela est légalement possible (RGPD art. 17). Si la suppression est impossible ou ne peut être réalisée qu'avec un effort technique\n            déraisonnable, vos données seront anonymisées par la suppression des informations permettant votre identification\n            personnelle. Toutefois, l'anonymisation de vos données ne peut exclure totalement la possibilité qu'une\n            information permette ultérieurement de remonter jusqu'à vous par d'autres sources. Enfin, une fois les données anonymisées, leur\n            suppression n'est plus possible puisque nous ne serons plus en mesure d'identifier quelles données sont les vôtres. </p></div>\n    <div class=\"pageBreak\"><h2>3. Déroulement</h2>\n        <p>Après avoir donné votre consentement, vous serez guidé(e) à travers les étapes suivantes :</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":83,"column":56},"end":{"line":83,"column":80}}}))
    + "</p>\n        <p>La procédure complète de "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":84,"column":36},"end":{"line":84,"column":49}}}) : helper)))
    + " durera environ "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":84,"column":65},"end":{"line":84,"column":77}}}) : helper)))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Risques et bénéfices</h2>\n        <p>Il n'existe aucun risque associé à "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":86,"column":46},"end":{"line":86,"column":59}}}) : helper)))
    + ". Les désagréments ou inconvénients seront mineurs et\n            peu susceptibles de se produire. Si vous vous sentez mal à l'aise, vous pouvez interrompre votre participation.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":88,"column":18},"end":{"line":88,"column":45}}}),{"name":"if","hash":{},"fn":container.program(76, data, 0, blockParams, depths),"inverse":container.program(78, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":88,"column":12},"end":{"line":92,"column":19}}})) != null ? stack1 : "")
    + "            Cette recherche nous permettra de faire progresser les connaissances dans ce domaine.</p></div>\n    <div class=\"pageBreak\"><h2>5. Protection des données et confidentialité</h2>\n        <p>Le Règlement Général sur la Protection des Données (RGPD) de l'Union européenne (UE) régit la collecte de ces données.\n            La base légale du traitement des données personnelles est le consentement du participant, conformément à l'art. 6(1)(a) du RGPD. Le RGPD garantit à la personne concernée un ensemble de droits, notamment le droit d'accès,\n            de rectification et d'effacement des données personnelles. </p>\n        <ul>\n            <li>Vous avez le droit d'accéder à vos données personnelles à tout moment (RGPD art. 15).</li>\n            <li>Vous avez le droit de corriger des données personnelles inexactes à tout moment (RGPD art. 16).</li>\n            <li>Vous avez le droit de faire supprimer vos données personnelles (RGPD art. 17).</li>\n            <li>Vous avez le droit de limiter le traitement de vos données personnelles (RGPD art. 18).</li>\n            <li>Vous avez le droit de recevoir une copie de vos données personnelles et de les transférer à une autre organisation (RGPD art. 20).</li>\n            <li>Vous avez le droit de vous opposer au traitement de vos données personnelles (RGPD art. 21).</li>\n        </ul>\n        <p>Si vous souhaitez exercer l'un de ces droits, veuillez contacter les chercheurs. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":11},"end":{"line":107,"column":138}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":108,"column":18},"end":{"line":108,"column":45}}}),{"name":"if","hash":{},"fn":container.program(82, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":108,"column":12},"end":{"line":108,"column":175}}})) != null ? stack1 : "")
    + "\n            Les chercheurs ne vous identifieront pas par votre nom réel dans les rapports utilisant les informations obtenues dans le cadre de "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":109,"column":143},"end":{"line":109,"column":156}}}) : helper)))
    + ", et\n            votre confidentialité en tant que participant à "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":110,"column":60},"end":{"line":110,"column":73}}}) : helper)))
    + " restera garantie.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":111,"column":18},"end":{"line":111,"column":42}}}),{"name":"if","hash":{},"fn":container.program(84, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":111,"column":139}}})) != null ? stack1 : "")
    + "\n            Les données recueillies dans le cadre de "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":112,"column":53},"end":{"line":112,"column":66}}}) : helper)))
    + " seront traitées conformément au RGPD. </p>\n        <p>Nous enregistrerons\n            "
    + alias4((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":114,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":115,"column":18},"end":{"line":115,"column":45}}}),{"name":"if","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":12},"end":{"line":115,"column":102}}})) != null ? stack1 : "")
    + "\n             pendant "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":116,"column":21},"end":{"line":116,"column":34}}}) : helper)))
    + ".\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":119,"column":18},"end":{"line":119,"column":37}}}),{"name":"if","hash":{},"fn":container.program(88, data, 0, blockParams, depths),"inverse":container.program(90, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":119,"column":12},"end":{"line":125,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":127,"column":18},"end":{"line":127,"column":42}}}),{"name":"if","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":12},"end":{"line":133,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":135,"column":18},"end":{"line":135,"column":45}}}),{"name":"if","hash":{},"fn":container.program(102, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":12},"end":{"line":137,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":141,"column":18},"end":{"line":141,"column":39}}}),{"name":"if","hash":{},"fn":container.program(104, data, 0, blockParams, depths),"inverse":container.program(106, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":141,"column":12},"end":{"line":145,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":148,"column":18},"end":{"line":148,"column":37}}}),{"name":"if","hash":{},"fn":container.program(108, data, 0, blockParams, depths),"inverse":container.program(110, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":148,"column":12},"end":{"line":154,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"no",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":156,"column":18},"end":{"line":156,"column":36}}}),{"name":"if","hash":{},"fn":container.program(115, data, 0, blockParams, depths),"inverse":container.program(117, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":156,"column":12},"end":{"line":160,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>Comme pour toute publication ou activité en ligne, le risque d'une violation de la confidentialité reste toujours possible. Conformément au RGPD, les chercheurs informeront le participant si une violation de données confidentielles est détectée. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identification des chercheurs</h2>\n        <p>Si vous avez des questions ou des préoccupations concernant la recherche, n'hésitez pas à contacter : </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(119, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":165,"column":8},"end":{"line":169,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":170,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(125, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":8},"end":{"line":177,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Consentement éclairé et accord</h2>Le présent formulaire de consentement sera conservé en lieu sûr et\n        conformément au RGPD, pendant une durée n'excédant pas ce qui est nécessaire.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>J'ai compris les explications qui m'ont été fournies.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":186,"column":22},"end":{"line":186,"column":49}}}),{"name":"if","hash":{},"fn":container.program(128, data, 0, blockParams, depths),"inverse":container.program(130, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":186,"column":16},"end":{"line":190,"column":23}}})) != null ? stack1 : "")
    + "                Par conséquent, j'accepte volontairement de participer à "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":191,"column":73},"end":{"line":191,"column":86}}}) : helper)))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Je consens volontairement à ce que mes données soient enregistrées puis traitées conformément au RGPD. J'ai été informé(e) des conséquences du retrait de mon consentement.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":199,"column":18},"end":{"line":199,"column":37}}}),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":199,"column":12},"end":{"line":224,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Nom du participant en lettres capitales</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Signature du participant</td>\n                <td>Lieu, date</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();