(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_it'] = template({"1":function(container,depth0,helpers,partials,data) {
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
    return "il responsabile della ricerca";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":61}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":113}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", sotto la direzione di "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":87},"end":{"line":13,"column":105}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Questo studio è finanziato dal progetto di ricerca "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":67},"end":{"line":17,"column":78}}}) : helper)))
    + ".\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Registreremo dati demografici personali ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Dati Personali]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":24,"column":84},"end":{"line":24,"column":127}}}))
    + ").</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Scatteremo fotografie durante la sessione.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo video durante la sessione.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo audio durante la sessione.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Tracceremo i movimenti del Suo corpo durante la sessione.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Tracceremo i movimenti dei Suoi occhi e della Sua testa durante la sessione.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Effettueremo misurazioni fisiologiche del Suo corpo.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo lo schermo del Suo dispositivo, nella misura necessaria per lo studio.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo dati di interazione (ad es. clic, tempistiche) durante la sessione.</li>";
},"31":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Riceverà "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punti]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":33,"column":62},"end":{"line":33,"column":102}}}))
    + " per il Suo corso di studi come compenso.</li>\n            ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":37,"column":73}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Riceverà "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punti]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":71},"end":{"line":34,"column":111}}}))
    + " per il Suo corso di studi come compenso, oppure "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compenso Monetario]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":160},"end":{"line":34,"column":215}}}))
    + " come compenso economico.</li>\n            ";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":37,"column":73}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Riceverà "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compenso Monetario]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":35,"column":65},"end":{"line":35,"column":120}}}))
    + " come compenso.</li>\n            ";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":36,"column":22},"end":{"line":36,"column":49}}}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":37,"column":73}}})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return "<li>Non riceverà alcun compenso.</li>\n            ";
},"42":function(container,depth0,helpers,partials,data) {
    return "<li><span class=\"missingField\">[Compenso]</span></li>";
},"44":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":91},"end":{"line":39,"column":102}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":39,"column":81},"end":{"line":39,"column":123}}}))
    + " saranno pubblicati <b>non in forma anonima</b>.</li>\n            ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":40,"column":22},"end":{"line":40,"column":48}}}),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":41,"column":178}}})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":40,"column":102},"end":{"line":40,"column":113}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":40,"column":92},"end":{"line":40,"column":134}}}))
    + " saranno pubblicati in forma anonima; pertanto non includeranno il Suo nome né potranno essere ricondotti alla Sua identità.</li>\n            ";
},"49":function(container,depth0,helpers,partials,data) {
    return "<li>I dati raccolti non potranno essere consultati o utilizzati per ulteriori ricerche da nessuno al di fuori dei ricercatori coinvolti in questo lavoro.</li>";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                il nostro comitato etico: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":46,"column":42},"end":{"line":46,"column":61}}}) : helper)))
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

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":49,"column":20},"end":{"line":49,"column":33}}}) : helper)))
    + " (e-mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":49,"column":43},"end":{"line":49,"column":57}}}) : helper)))
    + ") oppure "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":49,"column":66},"end":{"line":49,"column":84}}}) : helper)))
    + ".\n";
},"56":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":51,"column":20},"end":{"line":51,"column":33}}}) : helper)))
    + " (e-mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":51,"column":43},"end":{"line":51,"column":57}}}) : helper)))
    + ").\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "intervistate tramite sondaggio";
},"60":function(container,depth0,helpers,partials,data) {
    return "sottoposte a test";
},"62":function(container,depth0,helpers,partials,data) {
    return "intervistate";
},"64":function(container,depth0,helpers,partials,data) {
    return "Non riceverà alcun compenso.\n            ";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":51}}}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":74,"column":64}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punti]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":62},"end":{"line":71,"column":102}}}))
    + " per il Suo corso di studi presso "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Istituzione]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":136},"end":{"line":71,"column":175}}}))
    + ". Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento senza doverne giustificare il motivo. Riceverà comunque il Suo compenso.\n            ";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":56}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.program(72, data, 0),"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":74,"column":64}}})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compenso Monetario]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":67},"end":{"line":72,"column":122}}}))
    + " come compenso per la Sua partecipazione, oppure "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Punti]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":171},"end":{"line":72,"column":211}}}))
    + " per il Suo corso di studi presso "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Istituzione]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":245},"end":{"line":72,"column":284}}}))
    + ".\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":22},"end":{"line":73,"column":50}}}),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(75, data, 0),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":64}}})) != null ? stack1 : "");
},"73":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Compenso Monetario]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":73,"column":61},"end":{"line":73,"column":116}}}))
    + " come compenso per la Sua partecipazione. \n            ";
},"75":function(container,depth0,helpers,partials,data) {
    return "<span class=\"missingField\">[Compenso]</span>";
},"77":function(container,depth0,helpers,partials,data) {
    return "Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento.\n            ";
},"79":function(container,depth0,helpers,partials,data) {
    return "Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento senza alcuna penalità e senza perdere il compenso. ";
},"81":function(container,depth0,helpers,partials,data) {
    return "Ho il diritto di non rispondere alle domande e, se dovessi sentirmi a disagio in qualsiasi momento durante l'intervista, ho il diritto di interromperla. ";
},"83":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (Non trarrà un beneficio diretto dalla partecipazione a questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":94,"column":89},"end":{"line":94,"column":100}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":94,"column":79},"end":{"line":94,"column":121}}}))
    + ". Ci auguriamo che i risultati ottenuti dalla Sua partecipazione possano contribuire a far progredire la ricerca in questo campo.)\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "                Il Suo beneficio nella partecipazione è il compenso sopra descritto.\n";
},"87":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Registreremo dati personali ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Dati Personali]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":112,"column":67},"end":{"line":112,"column":110}}}))
    + ") durante la partecipazione. ";
},"89":function(container,depth0,helpers,partials,data) {
    return "I dati di contatto dei partecipanti allo studio potranno essere utilizzati per tracciare eventuali catene di contagio. ";
},"91":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":116,"column":92},"end":{"line":116,"column":103}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":116,"column":82},"end":{"line":116,"column":124}}}))
    + " saranno crittografati. ";
},"93":function(container,depth0,helpers,partials,data) {
    return " e registreremo i metadati del browser";
},"95":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":125,"column":64},"end":{"line":125,"column":75}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":125,"column":54},"end":{"line":125,"column":96}}}))
    + " saranno pubblicati <b>non in forma anonima</b>. Gli usi successivi dei dati e delle registrazioni saranno soggetti alle normali politiche di utilizzo dei dati.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":126,"column":22},"end":{"line":126,"column":48}}}),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.program(100, data, 0),"data":data,"loc":{"start":{"line":126,"column":12},"end":{"line":130,"column":12}}})) != null ? stack1 : "");
},"98":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":127,"column":64},"end":{"line":127,"column":75}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":127,"column":54},"end":{"line":127,"column":96}}}))
    + " saranno pubblicati in forma anonima. Gli usi successivi dei dati e delle registrazioni saranno soggetti alle normali politiche di utilizzo dei dati che tutelano l'anonimato degli individui partecipanti. Rimuoveremo o codificheremo qualsiasi informazione personale che potrebbe identificarLa prima di pubblicare i dati, in modo da garantire che nessuno possa identificarLa dalle informazioni condivise. Utilizzeremo gli standard scientifici attuali e i metodi noti per l'anonimizzazione. Quando i Suoi dati sono resi anonimi, vengono modificati in modo tale da non poter più essere ricondotti alla Sua persona, se non con uno sforzo tecnico sproporzionato. Nonostante queste misure, non possiamo garantire l'anonimato dei Suoi dati personali.\n";
},"100":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":129,"column":64},"end":{"line":129,"column":75}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":129,"column":54},"end":{"line":129,"column":96}}}))
    + " non saranno pubblicati e resteranno riservati.\n            ";
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

  return "                        La trascrizione dell'intervista sarà analizzata principalmente da "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":90},"end":{"line":134,"column":127}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":127},"end":{"line":134,"column":213}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":213},"end":{"line":134,"column":308}}})) != null ? stack1 : "")
    + ".\n                        L'accesso alla trascrizione grezza dell'intervista sarà limitato agli autori di questa ricerca, a colleghi accademici e ai ricercatori con cui potrebbe collaborare nell'ambito del processo di ricerca.\n                        Qualsiasi sintesi dei contenuti dell'intervista, o citazione diretta tratta dall'intervista, resa disponibile tramite pubblicazioni accademiche o altri canali, sarà resa anonima in modo che Lei non possa essere identificato/a, e si presterà attenzione affinché altre informazioni presenti nell'intervista che potrebbero identificarLa non vengano rivelate. Ho il diritto di non rispondere alle domande e, se dovessi sentirmi a disagio in qualsiasi momento durante l'intervista, ho il diritto di interromperla.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":155},"end":{"line":134,"column":181}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":182},"end":{"line":134,"column":206}}}) : helper)));
},"105":function(container,depth0,helpers,partials,data) {
    return " e";
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":240},"end":{"line":134,"column":277}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":278},"end":{"line":134,"column":301}}}) : helper)));
},"109":function(container,depth0,helpers,partials,data) {
    return "                Questo sito utilizza cookie e altre tecnologie di tracciamento per condurre la ricerca, migliorare l'esperienza utente, la capacità di interazione con il sistema e fornire contenuti aggiuntivi da parte di terzi. Nonostante un attento controllo dei contenuti, i ricercatori non si assumono alcuna responsabilità per i danni, diretti o indiretti, derivanti dall'uso di questa applicazione online.\n";
},"111":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                I Suoi dati non anonimi saranno conservati per "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"storageTime") : depth0),"[Tempo di Conservazione]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":147,"column":63},"end":{"line":147,"column":113}}}))
    + " a partire dal momento in cui presta il consenso, salvo che Lei non revochi il consenso prima della scadenza di tale periodo. I Suoi dati non anonimi saranno conservati in un luogo sicuro e saranno accessibili solo ai ricercatori coinvolti in questo lavoro.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                I Suoi dati non anonimi saranno conservati a tempo indeterminato, salvo che Lei non revochi il consenso.\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "                I dati non anonimi raccolti potranno essere condivisi pubblicamente, a meno che Lei non abbia firmato il modulo di autorizzazione separato che ce lo consente (vedi sotto).\n";
},"117":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":155,"column":22},"end":{"line":155,"column":48}}}),{"name":"if","hash":{},"fn":container.program(118, data, 0),"inverse":container.program(120, data, 0),"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":159,"column":12}}})) != null ? stack1 : "");
},"118":function(container,depth0,helpers,partials,data) {
    return "                I dati anonimi raccolti potranno essere condivisi pubblicamente.\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti non potranno essere consultati o utilizzati per ulteriori ricerche da chiunque al di fuori dei ricercatori coinvolti in questo lavoro.\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti saranno cancellati al termine della ricerca, oppure se Lei contatta il ricercatore per richiederne la cancellazione.\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti che non sono stati resi pubblici saranno cancellati al termine della ricerca.\n";
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
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),"[Nome]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":172,"column":30},"end":{"line":172,"column":55}}}))
    + " ("
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"email") : depth0),"[Email]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":172,"column":57},"end":{"line":172,"column":84}}}))
    + ") <br />\n            ";
},"129":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":156},"end":{"line":175,"column":171}}}),{"name":"if","hash":{},"fn":container.program(130, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":150},"end":{"line":175,"column":190}}})) != null ? stack1 : "");
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

  return "                <p><b>Direttore del Dipartimento:</b> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":54},"end":{"line":178,"column":72}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":80},"end":{"line":178,"column":117}}}),{"name":"with","hash":{},"fn":container.program(134, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":72},"end":{"line":178,"column":179}}})) != null ? stack1 : "")
    + "</p>\n";
},"134":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":135},"end":{"line":178,"column":150}}}),{"name":"if","hash":{},"fn":container.program(135, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":129},"end":{"line":178,"column":170}}})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data,blockParams) {
    return " ("
    + container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + ")";
},"137":function(container,depth0,helpers,partials,data) {
    return "                   Ho potuto salvare una copia di questo modulo. Ho contattato i ricercatori indicati e ho ricevuto risposta a tutte le mie domande in modo soddisfacente.\n";
},"139":function(container,depth0,helpers,partials,data) {
    return "                    Ho ricevuto una copia di questo modulo. Ho ricevuto risposta a tutte le mie domande in modo soddisfacente.\n";
},"141":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>Acconsento a che i miei dati e le misurazioni raccolte durante lo studio possano essere pubblicati nell'ambito di questa ricerca in forma non anonima.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(144, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Comprendo che i dati resi anonimi non potranno essere ricondotti al mio nome. Dal consenso alla pubblicazione non derivo alcun diritto (quali remunerazione o co-autorship). La presente dichiarazione di consenso è revocabile in qualsiasi momento in conformità al GDPR. In caso di revoca, le registrazioni pubblicate, nella misura in cui siano nella disponibilità dei ricercatori, saranno rimosse. Le ulteriori registrazioni non saranno più utilizzate né pubblicate dopo la revoca del consenso alla pubblicazione.</td></tr>\n";
},"142":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che le fotografie scattate durante questo studio possano essere realizzate e pubblicate.</td>\n                    </tr>\n";
},"144":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che i video registrati durante questo studio possano essere realizzati e pubblicati.</td>\n                    </tr>\n";
},"146":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che i file audio registrati durante questo studio possano essere realizzati e pubblicati.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"pageBreak\"><h1>Consenso Informato alla Partecipazione</h1>\n        <p>\n            Lei è invitato/a a partecipare al seguente "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":65},"end":{"line":7,"column":76}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":55},"end":{"line":7,"column":97}}}))
    + " <b>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"[Titolo]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":101},"end":{"line":7,"column":129}}}))
    + "</b>, avviato e condotto da\n            "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":58}}}),"[Ricercatori]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":76}}}))
    + ".\n            La ricerca è supervisionata da\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":97}}})) != null ? stack1 : "")
    + "\n            presso "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Istituzione]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":58}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":65},"end":{"line":11,"column":90}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":58},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            La preghiamo di notare quanto segue:\n        </p>\n        <ul>\n            <li>La Sua partecipazione è volontaria.</li>\n            <li>Il/La "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":32},"end":{"line":23,"column":43}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":64}}}))
    + " durerà circa "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Durata]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":78},"end":{"line":23,"column":109}}}))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":141}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":91}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":87}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":106}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":130}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":108}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":141}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":134}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.program(33, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":80}}})) != null ? stack1 : "")
    + "            <li>Potremmo pubblicare i risultati di questa e di altre sessioni.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":18},"end":{"line":39,"column":37}}}),{"name":"if","hash":{},"fn":container.program(44, data, 0, blockParams, depths),"inverse":container.program(46, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":185}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Se ha domande sull'intero processo di consenso informato relativo a questa ricerca o sui Suoi diritti come\n            soggetto di ricerca, La preghiamo di contattare\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.program(53, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":45,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + "\n            Deve leggere attentamente le informazioni riportate di seguito. Può prendersi tutto il tempo necessario per leggere il modulo\n            di consenso. Se non è pienamente d'accordo con qualche punto, o se le Sue domande non hanno ricevuto risposta in modo\n            soddisfacente, non dovrebbe prestare il Suo consenso. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Finalità e Obiettivo della Ricerca</h2>\n        <p>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"purpose") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":21},"end":{"line":60,"column":43}}}),"[Scopo]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":11},"end":{"line":60,"column":55}}}))
    + " "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"goal") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":66},"end":{"line":60,"column":85}}}),"[Obiettivo]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":56},"end":{"line":60,"column":101}}}))
    + " La Sua partecipazione ci aiuterà a raggiungere questo obiettivo. I risultati di questa ricerca potranno essere\n            presentati in convegni scientifici o professionali o pubblicati in atti e riviste\n            scientifiche.</p></div>\n    <div class=\"pageBreak\"><h2>2. Partecipazione e Compenso</h2>\n        <p>La Sua partecipazione a questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":52},"end":{"line":64,"column":63}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":42},"end":{"line":64,"column":84}}}))
    + " è volontaria. Sarà una delle circa "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"participants") : depth0),"[Partecipanti]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":120},"end":{"line":64,"column":161}}}))
    + " persone\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":45}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":84}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":43}}}),{"name":"if","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":69}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":44}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":83}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":18},"end":{"line":68,"column":42}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":12},"end":{"line":68,"column":63}}})) != null ? stack1 : "")
    + "\n             per questa ricerca.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":18},"end":{"line":70,"column":45}}}),{"name":"if","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.program(66, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":12},"end":{"line":74,"column":71}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":18},"end":{"line":75,"column":45}}}),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":12},"end":{"line":76,"column":148}}})) != null ? stack1 : "")
    + "\n            Se possibile, potrà rifiutarsi di rispondere a qualsiasi domanda non desideri rispondere, oppure ritirarsi dalla partecipazione in qualsiasi momento.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":18},"end":{"line":78,"column":42}}}),{"name":"if","hash":{},"fn":container.program(81, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":12},"end":{"line":78,"column":204}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>In qualsiasi momento e senza dover fornire alcuna motivazione, può comunicarci la volontà di revocare il consenso prestato (GDPR art. 7(3)). In caso di revoca, i Suoi dati conservati sulla base del Suo consenso saranno cancellati o\n            resi anonimi, ove ciò sia legalmente consentito (GDPR art. 17). Se la cancellazione risultasse impossibile o possibile\n            solo con uno sforzo tecnico sproporzionato, i Suoi dati saranno resi anonimi mediante la cancellazione delle informazioni\n            identificative personali. Tuttavia, l'anonimizzazione dei Suoi dati non può escludere del tutto la possibilità di una successiva\n            riconduzione delle informazioni alla Sua persona tramite altre fonti. Infine, una volta che i dati sono stati resi anonimi, la loro cancellazione\n            non sarà più possibile poiché non saremo più in grado di identificare quali dati siano i Suoi. </p></div>\n    <div class=\"pageBreak\"><h2>3. Procedura</h2>\n        <p>Dopo aver prestato il consenso, sarà guidato/a attraverso i seguenti passaggi:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":66},"end":{"line":88,"column":88}}}),"[Procedura]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":56},"end":{"line":88,"column":104}}}))
    + "</p>\n        <p>La procedura completa di questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":53},"end":{"line":89,"column":64}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":43},"end":{"line":89,"column":85}}}))
    + " durerà circa "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Durata]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":99},"end":{"line":89,"column":130}}}))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Rischi e Benefici</h2>\n        <p>Non sono associati rischi a questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":56},"end":{"line":91,"column":67}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":46},"end":{"line":91,"column":88}}}))
    + ". Eventuali disagi o inconvenienti saranno minimi ed è\n            improbabile che si verifichino. Se dovesse sentirsi a disagio, potrà interrompere la Sua partecipazione.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":18},"end":{"line":93,"column":45}}}),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.program(85, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":12},"end":{"line":97,"column":19}}})) != null ? stack1 : "")
    + "            Con questa ricerca, faremo progredire le conoscenze in questo campo di ricerca.</p></div>\n    <div class=\"pageBreak\"><h2>5. Protezione dei Dati e Riservatezza</h2>\n        <p>Il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea (UE) disciplina la raccolta di tali dati.\n            La base giuridica per il trattamento dei dati personali è il consenso del partecipante ai sensi dell'art. 6(1)(a) GDPR. Il GDPR garantisce una serie di diritti agli interessati, tra cui il diritto di accesso,\n            rettifica e cancellazione dei dati personali. </p>\n        <ul>\n            <li>Ha il diritto di accedere ai Suoi dati personali in qualsiasi momento (GDPR art. 15).</li>\n            <li>Ha il diritto di correggere dati personali inesatti in qualsiasi momento (GDPR art. 16).</li>\n            <li>Ha il diritto di ottenere la cancellazione dei Suoi dati personali (GDPR art. 17).</li>\n            <li>Ha il diritto di limitare il trattamento dei Suoi dati personali (GDPR art. 18).</li>\n            <li>Ha il diritto di ricevere una copia dei Suoi dati personali e di trasferirli a un'altra organizzazione (GDPR art. 20).</li>\n            <li>Ha il diritto di opporsi al trattamento dei Suoi dati personali (GDPR art. 21).</li>\n        </ul>\n        <p>Se desidera esercitare uno qualsiasi dei Suoi diritti, La preghiamo di contattare i ricercatori. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":112,"column":11},"end":{"line":112,"column":146}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":18},"end":{"line":113,"column":45}}}),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":173}}})) != null ? stack1 : "")
    + "\n            I ricercatori non La identificheranno con il Suo nome reale in alcun resoconto relativo ai risultati ottenuti da questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":142},"end":{"line":114,"column":153}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":132},"end":{"line":114,"column":174}}}))
    + ", e\n            la Sua riservatezza come partecipante a questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":69},"end":{"line":115,"column":80}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":59},"end":{"line":115,"column":101}}}))
    + " rimarrà garantita.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":18},"end":{"line":116,"column":42}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":12},"end":{"line":116,"column":155}}})) != null ? stack1 : "")
    + "\n            I dati raccolti in questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":48},"end":{"line":117,"column":59}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":38},"end":{"line":117,"column":80}}}))
    + " saranno trattati in conformità al GDPR. </p>\n        <p>Registreremo\n            "
    + alias3((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":119,"column":12},"end":{"line":119,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":18},"end":{"line":120,"column":45}}}),{"name":"if","hash":{},"fn":container.program(93, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":12},"end":{"line":120,"column":92}}})) != null ? stack1 : "")
    + "\n             durante il/la "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":37},"end":{"line":121,"column":48}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":27},"end":{"line":121,"column":69}}}))
    + ".\n\n\n"
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
    + "        </p>\n        <p>Come per qualsiasi pubblicazione o attività online, il rischio di una violazione della riservatezza è sempre possibile. In conformità al GDPR, i ricercatori informeranno il partecipante qualora venga rilevata una violazione dei dati riservati. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identificazione dei Ricercatori</h2>\n        <p>Se ha domande o dubbi riguardo alla ricerca, non esiti a contattare: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(126, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":170,"column":8},"end":{"line":174,"column":15}}})) != null ? stack1 : "")
    + "        <p><b>Responsabile Scientifico:</b> "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),"[Nome del Responsabile]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":44},"end":{"line":175,"column":91}}}))
    + " ("
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":101},"end":{"line":175,"column":138}}}),{"name":"with","hash":{},"fn":container.program(129, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":93},"end":{"line":175,"column":199}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0),"[Email del Responsabile]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":199},"end":{"line":175,"column":248}}}))
    + ")</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Consenso Informato e Accettazione</h2>Il presente modulo di consenso sarà conservato in modo sicuro e\n        in conformità al GDPR per il tempo strettamente necessario.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>Ho compreso la spiegazione fornitami.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(137, data, 0, blockParams, depths),"inverse":container.program(139, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Pertanto, acconsento volontariamente a partecipare a questo "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":86},"end":{"line":194,"column":97}}}),"[Tipo di Studio]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":76},"end":{"line":194,"column":118}}}))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Acconsento volontariamente alla registrazione e al successivo trattamento dei miei dati in conformità al GDPR. Sono stato/a informato/a delle conseguenze della revoca del mio consenso.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(141, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Nome del Partecipante in Stampatello</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Firma del Partecipante</td>\n                <td>Luogo, Data</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});
})();