(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_it'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":53}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "il responsabile della ricerca";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":61}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":113}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", sotto la direzione di "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":87},"end":{"line":13,"column":105}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Questo studio è finanziato dal progetto di ricerca "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":67},"end":{"line":17,"column":78}}}) : helper)))
    + ".\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Registreremo dati demografici personali ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":24,"column":84},"end":{"line":24,"column":100}}}) : helper)))
    + ").</li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<li>Scatteremo fotografie durante la sessione.</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo video durante la sessione.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo audio durante la sessione.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Tracceremo i movimenti del Suo corpo durante la sessione.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Tracceremo i movimenti dei Suoi occhi e della Sua testa durante la sessione.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Effettueremo misurazioni fisiologiche del Suo corpo.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo lo schermo del Suo dispositivo, nella misura necessaria per lo studio.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Registreremo dati di interazione (ad es. clic, tempistiche) durante la sessione.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Riceverà 1 punto di credito all'ora per il Suo corso di studi come compenso.</li>\n            ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":57}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Riceverà 1 punto di credito all'ora per il Suo corso di studi come compenso, oppure "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":34,"column":146},"end":{"line":34,"column":170}}}) : helper)))
    + " come compenso economico.</li>\n            ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":36,"column":57}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Riceverà "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":35,"column":65},"end":{"line":35,"column":89}}}) : helper)))
    + " come compenso.</li>\n            ";
},"37":function(container,depth0,helpers,partials,data) {
    return "<li>Non riceverà alcun compenso.</li>";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":38,"column":81},"end":{"line":38,"column":94}}}) : helper)))
    + " saranno pubblicati <b>non in forma anonima</b>.</li>\n            ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":48}}}),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":40,"column":178}}})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":92},"end":{"line":39,"column":105}}}) : helper)))
    + " saranno pubblicati in forma anonima; pertanto non includeranno il Suo nome né potranno essere ricondotti alla Sua identità.</li>\n            ";
},"44":function(container,depth0,helpers,partials,data) {
    return "<li>I dati raccolti non potranno essere consultati o utilizzati per ulteriori ricerche da nessuno al di fuori dei ricercatori coinvolti in questo lavoro.</li>";
},"46":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                il nostro comitato etico: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":45,"column":42},"end":{"line":45,"column":61}}}) : helper)))
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

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":33}}}) : helper)))
    + " (e-mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":48,"column":43},"end":{"line":48,"column":57}}}) : helper)))
    + ") oppure "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":48,"column":66},"end":{"line":48,"column":84}}}) : helper)))
    + ".\n";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":50,"column":33}}}) : helper)))
    + " (e-mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":50,"column":43},"end":{"line":50,"column":57}}}) : helper)))
    + ").\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "intervistate tramite sondaggio";
},"55":function(container,depth0,helpers,partials,data) {
    return "sottoposte a test";
},"57":function(container,depth0,helpers,partials,data) {
    return "intervistate";
},"59":function(container,depth0,helpers,partials,data) {
    return "Non riceverà alcun compenso.\n            ";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":70,"column":22},"end":{"line":70,"column":51}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":72,"column":127}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà un punto di credito all'ora richiesto per il Suo corso di studi presso "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":70,"column":133},"end":{"line":70,"column":148}}}) : helper)))
    + ". Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento senza doverne giustificare il motivo. Riceverà comunque i Suoi punti di credito.\n            ";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":56}}}),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":72,"column":127}}})) != null ? stack1 : "");
},"65":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà "
    + alias4(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":71,"column":67},"end":{"line":71,"column":91}}}) : helper)))
    + " come compenso per la Sua partecipazione, oppure un punto di credito all'ora richiesto per il Suo corso di studi presso "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":71,"column":211},"end":{"line":71,"column":226}}}) : helper)))
    + ".\n            ";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":50}}}),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":72,"column":127}}})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Riceverà "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":72,"column":61},"end":{"line":72,"column":85}}}) : helper)))
    + " come compenso per la Sua partecipazione. ";
},"70":function(container,depth0,helpers,partials,data) {
    return "Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento.\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    return "Potrà ritirarsi e interrompere la partecipazione in qualsiasi momento senza alcuna penalità e senza perdere il compenso. ";
},"74":function(container,depth0,helpers,partials,data) {
    return "Ho il diritto di non rispondere alle domande e, se dovessi sentirmi a disagio in qualsiasi momento durante l'intervista, ho il diritto di interromperla. ";
},"76":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (Non trarrà un beneficio diretto dalla partecipazione a questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":92,"column":79},"end":{"line":92,"column":92}}}) : helper)))
    + ". Ci auguriamo che i risultati ottenuti dalla Sua partecipazione possano contribuire a far progredire la ricerca in questo campo.)\n";
},"78":function(container,depth0,helpers,partials,data) {
    return "                Il Suo beneficio nella partecipazione è il compenso sopra descritto.\n";
},"80":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Registreremo dati personali ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":110,"column":67},"end":{"line":110,"column":83}}}) : helper)))
    + ") durante la partecipazione. ";
},"82":function(container,depth0,helpers,partials,data) {
    return "I dati di contatto dei partecipanti allo studio potranno essere utilizzati per tracciare eventuali catene di contagio. ";
},"84":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":114,"column":82},"end":{"line":114,"column":95}}}) : helper)))
    + " saranno crittografati. ";
},"86":function(container,depth0,helpers,partials,data) {
    return " e registreremo i metadati del browser";
},"88":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":123,"column":54},"end":{"line":123,"column":67}}}) : helper)))
    + " saranno pubblicati <b>non in forma anonima</b>. Gli usi successivi dei dati e delle registrazioni saranno soggetti alle normali politiche di utilizzo dei dati.\n";
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":124,"column":22},"end":{"line":124,"column":48}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0),"inverse":container.program(93, data, 0),"data":data,"loc":{"start":{"line":124,"column":12},"end":{"line":128,"column":12}}})) != null ? stack1 : "");
},"91":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":125,"column":54},"end":{"line":125,"column":67}}}) : helper)))
    + " saranno pubblicati in forma anonima. Gli usi successivi dei dati e delle registrazioni saranno soggetti alle normali politiche di utilizzo dei dati che tutelano l'anonimato degli individui partecipanti. Rimuoveremo o codificheremo qualsiasi informazione personale che potrebbe identificarLa prima di pubblicare i dati, in modo da garantire che nessuno possa identificarLa dalle informazioni condivise. Utilizzeremo gli standard scientifici attuali e i metodi noti per l'anonimizzazione. Quando i Suoi dati sono resi anonimi, vengono modificati in modo tale da non poter più essere ricondotti alla Sua persona, se non con uno sforzo tecnico sproporzionato. Nonostante queste misure, non possiamo garantire l'anonimato dei Suoi dati personali.\n";
},"93":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Tutti i dati da Lei forniti in questo "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":127,"column":54},"end":{"line":127,"column":67}}}) : helper)))
    + " non saranno pubblicati e resteranno riservati.\n            ";
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

  return "                        La trascrizione dell'intervista sarà analizzata principalmente da "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":90},"end":{"line":132,"column":127}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":127},"end":{"line":132,"column":213}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":213},"end":{"line":132,"column":308}}})) != null ? stack1 : "")
    + ".\n                        L'accesso alla trascrizione grezza dell'intervista sarà limitato agli autori di questa ricerca, a colleghi accademici e ai ricercatori con cui potrebbe collaborare nell'ambito del processo di ricerca.\n                        Qualsiasi sintesi dei contenuti dell'intervista, o citazione diretta tratta dall'intervista, resa disponibile tramite pubblicazioni accademiche o altri canali, sarà resa anonima in modo che Lei non possa essere identificato/a, e si presterà attenzione affinché altre informazioni presenti nell'intervista che potrebbero identificarLa non vengano rivelate. Ho il diritto di non rispondere alle domande e, se dovessi sentirmi a disagio in qualsiasi momento durante l'intervista, ho il diritto di interromperla.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":155},"end":{"line":132,"column":181}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":182},"end":{"line":132,"column":206}}}) : helper)));
},"98":function(container,depth0,helpers,partials,data) {
    return " e";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":240},"end":{"line":132,"column":277}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":278},"end":{"line":132,"column":301}}}) : helper)));
},"102":function(container,depth0,helpers,partials,data) {
    return "                Questo sito utilizza cookie e altre tecnologie di tracciamento per condurre la ricerca, migliorare l'esperienza utente, la capacità di interazione con il sistema e fornire contenuti aggiuntivi da parte di terzi. Nonostante un attento controllo dei contenuti, i ricercatori non si assumono alcuna responsabilità per i danni, diretti o indiretti, derivanti dall'uso di questa applicazione online.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                I Suoi dati non anonimi saranno conservati per "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"storageTime") || (depth0 != null ? lookupProperty(depth0,"storageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storageTime","hash":{},"data":data,"loc":{"start":{"line":145,"column":63},"end":{"line":145,"column":78}}}) : helper)))
    + " a partire dal momento in cui presta il consenso, salvo che Lei non revochi il consenso prima della scadenza di tale periodo. I Suoi dati non anonimi saranno conservati in un luogo sicuro e saranno accessibili solo ai ricercatori coinvolti in questo lavoro.\n";
},"106":function(container,depth0,helpers,partials,data) {
    return "                I Suoi dati non anonimi saranno conservati a tempo indeterminato, salvo che Lei non revochi il consenso.\n";
},"108":function(container,depth0,helpers,partials,data) {
    return "                I dati non anonimi raccolti potranno essere condivisi pubblicamente, a meno che Lei non abbia firmato il modulo di autorizzazione separato che ce lo consente (vedi sotto).\n";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":153,"column":22},"end":{"line":153,"column":48}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0),"inverse":container.program(113, data, 0),"data":data,"loc":{"start":{"line":153,"column":12},"end":{"line":157,"column":12}}})) != null ? stack1 : "");
},"111":function(container,depth0,helpers,partials,data) {
    return "                I dati anonimi raccolti potranno essere condivisi pubblicamente.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti non potranno essere consultati o utilizzati per ulteriori ricerche da chiunque al di fuori dei ricercatori coinvolti in questo lavoro.\n            ";
},"115":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti saranno cancellati al termine della ricerca, oppure se Lei contatta il ricercatore per richiederne la cancellazione.\n";
},"117":function(container,depth0,helpers,partials,data) {
    return "                I dati raccolti che non sono stati resi pubblici saranno cancellati al termine della ricerca.\n";
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

  return "            <p><b>Responsabile Scientifico:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":174,"column":48},"end":{"line":174,"column":61}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":174,"column":63},"end":{"line":174,"column":73}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":174,"column":75},"end":{"line":174,"column":82}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":174,"column":83},"end":{"line":174,"column":91}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"if","hash":{},"fn":container.program(123, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":91},"end":{"line":174,"column":126}}})) != null ? stack1 : "")
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":174,"column":128},"end":{"line":174,"column":142}}}) : helper)))
    + ")</p>\n";
},"123":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":174,"column":108},"end":{"line":174,"column":119}}}) : helper)));
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

  return "                <p><b>Direttore del Dipartimento:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":178,"column":54},"end":{"line":178,"column":72}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":178,"column":74},"end":{"line":178,"column":84}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":178,"column":86},"end":{"line":178,"column":93}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":178,"column":94},"end":{"line":178,"column":102}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":178,"column":104},"end":{"line":178,"column":115}}}) : helper)))
    + ")</p>\n";
},"128":function(container,depth0,helpers,partials,data) {
    return "                   Ho potuto salvare una copia di questo modulo. Ho contattato i ricercatori indicati e ho ricevuto risposta a tutte le mie domande in modo soddisfacente.\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                    Ho ricevuto una copia di questo modulo. Ho ricevuto risposta a tutte le mie domande in modo soddisfacente.\n";
},"132":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>Acconsento a che i miei dati e le misurazioni raccolte durante lo studio possano essere pubblicati nell'ambito di questa ricerca in forma non anonima.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(133, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Comprendo che i dati resi anonimi non potranno essere ricondotti al mio nome. Dal consenso alla pubblicazione non derivo alcun diritto (quali remunerazione o co-autorship). La presente dichiarazione di consenso è revocabile in qualsiasi momento in conformità al GDPR. In caso di revoca, le registrazioni pubblicate, nella misura in cui siano nella disponibilità dei ricercatori, saranno rimosse. Le ulteriori registrazioni non saranno più utilizzate né pubblicate dopo la revoca del consenso alla pubblicazione.</td></tr>\n";
},"133":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che le fotografie scattate durante questo studio possano essere realizzate e pubblicate.</td>\n                    </tr>\n";
},"135":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che i video registrati durante questo studio possano essere realizzati e pubblicati.</td>\n                    </tr>\n";
},"137":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acconsento inoltre a che i file audio registrati durante questo studio possano essere realizzati e pubblicati.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \"><img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"pageBreak\"><h1>Consenso Informato alla Partecipazione</h1>\n        <p>\n            Lei è invitato/a a partecipare al seguente "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":55},"end":{"line":7,"column":68}}}) : helper)))
    + " <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":72},"end":{"line":7,"column":81}}}) : helper)))
    + "</b>, avviato e condotto da\n            "
    + alias4((lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":50}}}))
    + ".\n            La ricerca è supervisionata da\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":97}}})) != null ? stack1 : "")
    + "\n            presso "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":34}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":11,"column":41},"end":{"line":11,"column":66}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            La preghiamo di notare quanto segue:\n        </p>\n        <ul>\n            <li>La Sua partecipazione è volontaria.</li>\n            <li>Il/La "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":35}}}) : helper)))
    + " durerà circa "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":23,"column":49},"end":{"line":23,"column":61}}}) : helper)))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":114}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":91}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":87}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":106}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":130}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":108}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":141}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":134}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":36,"column":64}}})) != null ? stack1 : "")
    + "            <li>Potremmo pubblicare i risultati di questa e di altre sessioni.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":37}}}),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.program(41, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":185}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Se ha domande sull'intero processo di consenso informato relativo a questa ricerca o sui Suoi diritti come\n            soggetto di ricerca, La preghiamo di contattare\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.program(48, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":52,"column":19}}})) != null ? stack1 : "")
    + "\n            Deve leggere attentamente le informazioni riportate di seguito. Può prendersi tutto il tempo necessario per leggere il modulo\n            di consenso. Se non è pienamente d'accordo con qualche punto, o se le Sue domande non hanno ricevuto risposta in modo\n            soddisfacente, non dovrebbe prestare il Suo consenso. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Finalità e Obiettivo della Ricerca</h2>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"purpose") || (depth0 != null ? lookupProperty(depth0,"purpose") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"purpose","hash":{},"data":data,"loc":{"start":{"line":59,"column":11},"end":{"line":59,"column":22}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"goal") || (depth0 != null ? lookupProperty(depth0,"goal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data,"loc":{"start":{"line":59,"column":23},"end":{"line":59,"column":31}}}) : helper)))
    + " La Sua partecipazione ci aiuterà a raggiungere questo obiettivo. I risultati di questa ricerca potranno essere\n            presentati in convegni scientifici o professionali o pubblicati in atti e riviste\n            scientifiche.</p></div>\n    <div class=\"pageBreak\"><h2>2. Partecipazione e Compenso</h2>\n        <p>La Sua partecipazione a questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":63,"column":42},"end":{"line":63,"column":55}}}) : helper)))
    + " è volontaria. Sarà una delle circa "
    + alias4(((helper = (helper = lookupProperty(helpers,"participants") || (depth0 != null ? lookupProperty(depth0,"participants") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participants","hash":{},"data":data,"loc":{"start":{"line":63,"column":91},"end":{"line":63,"column":107}}}) : helper)))
    + " persone\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":64,"column":18},"end":{"line":64,"column":45}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":84}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":43}}}),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":69}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":44}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":83}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":42}}}),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":63}}})) != null ? stack1 : "")
    + "\n             per questa ricerca.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":69,"column":18},"end":{"line":69,"column":45}}}),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.program(61, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":72,"column":134}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":18},"end":{"line":73,"column":45}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.program(72, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":148}}})) != null ? stack1 : "")
    + "\n            Se possibile, potrà rifiutarsi di rispondere a qualsiasi domanda non desideri rispondere, oppure ritirarsi dalla partecipazione in qualsiasi momento.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":76,"column":18},"end":{"line":76,"column":42}}}),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":12},"end":{"line":76,"column":204}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>In qualsiasi momento e senza dover fornire alcuna motivazione, può comunicarci la volontà di revocare il consenso prestato (GDPR art. 7(3)). In caso di revoca, i Suoi dati conservati sulla base del Suo consenso saranno cancellati o\n            resi anonimi, ove ciò sia legalmente consentito (GDPR art. 17). Se la cancellazione risultasse impossibile o possibile\n            solo con uno sforzo tecnico sproporzionato, i Suoi dati saranno resi anonimi mediante la cancellazione delle informazioni\n            identificative personali. Tuttavia, l'anonimizzazione dei Suoi dati non può escludere del tutto la possibilità di una successiva\n            riconduzione delle informazioni alla Sua persona tramite altre fonti. Infine, una volta che i dati sono stati resi anonimi, la loro cancellazione\n            non sarà più possibile poiché non saremo più in grado di identificare quali dati siano i Suoi. </p></div>\n    <div class=\"pageBreak\"><h2>3. Procedura</h2>\n        <p>Dopo aver prestato il consenso, sarà guidato/a attraverso i seguenti passaggi:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":86,"column":56},"end":{"line":86,"column":80}}}))
    + "</p>\n        <p>La procedura completa di questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":87,"column":43},"end":{"line":87,"column":56}}}) : helper)))
    + " durerà circa "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":87,"column":70},"end":{"line":87,"column":82}}}) : helper)))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Rischi e Benefici</h2>\n        <p>Non sono associati rischi a questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":89,"column":46},"end":{"line":89,"column":59}}}) : helper)))
    + ". Eventuali disagi o inconvenienti saranno minimi ed è\n            improbabile che si verifichino. Se dovesse sentirsi a disagio, potrà interrompere la Sua partecipazione.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":91,"column":18},"end":{"line":91,"column":45}}}),{"name":"if","hash":{},"fn":container.program(76, data, 0, blockParams, depths),"inverse":container.program(78, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":91,"column":12},"end":{"line":95,"column":19}}})) != null ? stack1 : "")
    + "            Con questa ricerca, faremo progredire le conoscenze in questo campo di ricerca.</p></div>\n    <div class=\"pageBreak\"><h2>5. Protezione dei Dati e Riservatezza</h2>\n        <p>Il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea (UE) disciplina la raccolta di tali dati.\n            La base giuridica per il trattamento dei dati personali è il consenso del partecipante ai sensi dell'art. 6(1)(a) GDPR. Il GDPR garantisce una serie di diritti agli interessati, tra cui il diritto di accesso,\n            rettifica e cancellazione dei dati personali. </p>\n        <ul>\n            <li>Ha il diritto di accedere ai Suoi dati personali in qualsiasi momento (GDPR art. 15).</li>\n            <li>Ha il diritto di correggere dati personali inesatti in qualsiasi momento (GDPR art. 16).</li>\n            <li>Ha il diritto di ottenere la cancellazione dei Suoi dati personali (GDPR art. 17).</li>\n            <li>Ha il diritto di limitare il trattamento dei Suoi dati personali (GDPR art. 18).</li>\n            <li>Ha il diritto di ricevere una copia dei Suoi dati personali e di trasferirli a un'altra organizzazione (GDPR art. 20).</li>\n            <li>Ha il diritto di opporsi al trattamento dei Suoi dati personali (GDPR art. 21).</li>\n        </ul>\n        <p>Se desidera esercitare uno qualsiasi dei Suoi diritti, La preghiamo di contattare i ricercatori. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":11},"end":{"line":110,"column":119}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":111,"column":18},"end":{"line":111,"column":45}}}),{"name":"if","hash":{},"fn":container.program(82, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":111,"column":173}}})) != null ? stack1 : "")
    + "\n            I ricercatori non La identificheranno con il Suo nome reale in alcun resoconto relativo ai risultati ottenuti da questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":112,"column":132},"end":{"line":112,"column":145}}}) : helper)))
    + ", e\n            la Sua riservatezza come partecipante a questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":113,"column":59},"end":{"line":113,"column":72}}}) : helper)))
    + " rimarrà garantita.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":114,"column":18},"end":{"line":114,"column":42}}}),{"name":"if","hash":{},"fn":container.program(84, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":114,"column":126}}})) != null ? stack1 : "")
    + "\n            I dati raccolti in questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":115,"column":38},"end":{"line":115,"column":51}}}) : helper)))
    + " saranno trattati in conformità al GDPR. </p>\n        <p>Registreremo\n            "
    + alias4((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"loc":{"start":{"line":117,"column":12},"end":{"line":117,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":118,"column":18},"end":{"line":118,"column":45}}}),{"name":"if","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":12},"end":{"line":118,"column":92}}})) != null ? stack1 : "")
    + "\n             durante il/la "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":119,"column":27},"end":{"line":119,"column":40}}}) : helper)))
    + ".\n\n\n"
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
    + "        </p>\n        <p>Come per qualsiasi pubblicazione o attività online, il rischio di una violazione della riservatezza è sempre possibile. In conformità al GDPR, i ricercatori informeranno il partecipante qualora venga rilevata una violazione dei dati riservati. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identificazione dei Ricercatori</h2>\n        <p>Se ha domande o dubbi riguardo alla ricerca, non esiti a contattare: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(119, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":168,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":8},"end":{"line":175,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(125, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Consenso Informato e Accettazione</h2>Il presente modulo di consenso sarà conservato in modo sicuro e\n        in conformità al GDPR per il tempo strettamente necessario.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>Ho compreso la spiegazione fornitami.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(128, data, 0, blockParams, depths),"inverse":container.program(130, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Pertanto, acconsento volontariamente a partecipare a questo "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":194,"column":76},"end":{"line":194,"column":89}}}) : helper)))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Acconsento volontariamente alla registrazione e al successivo trattamento dei miei dati in conformità al GDPR. Sono stato/a informato/a delle conseguenze della revoca del mio consenso.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Nome del Partecipante in Stampatello</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Firma del Partecipante</td>\n                <td>Luogo, Data</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();