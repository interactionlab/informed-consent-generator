(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_es'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":53}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "el investigador responsable";
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

  return ", bajo la dirección de "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":86},"end":{"line":13,"column":104}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Este estudio está financiado por el proyecto de investigación "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":78},"end":{"line":17,"column":89}}}) : helper)))
    + ".\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Registraremos sus datos demográficos personales ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":24,"column":92},"end":{"line":24,"column":108}}}) : helper)))
    + ").</li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<li>Tomaremos fotografías durante la sesión.</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>Grabaremos vídeos durante la sesión.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>Grabaremos audio durante la sesión.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>Registraremos los movimientos de su cuerpo durante la sesión.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>Registraremos los movimientos de sus ojos y de su cabeza durante la sesión.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>Tomaremos mediciones fisiológicas de su cuerpo.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>Grabaremos la pantalla de su dispositivo en la medida en que sea necesario para el estudio.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>Registraremos datos de interacción (por ejemplo, clics, tiempos) durante la sesión.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>Recibirá 1 punto de créditos por hora para su asignatura como compensación.</li>\n            ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":56}}}),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":62}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Recibirá 1 punto de créditos por hora para su asignatura como compensación, o bien "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":34,"column":145},"end":{"line":34,"column":169}}}) : helper)))
    + " como compensación económica.</li>\n            ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":50}}}),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":36,"column":62}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Recibirá "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":35,"column":65},"end":{"line":35,"column":89}}}) : helper)))
    + " como compensación.</li>\n            ";
},"37":function(container,depth0,helpers,partials,data) {
    return "<li>No recibirá ninguna compensación.</li>";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":38,"column":89},"end":{"line":38,"column":102}}}) : helper)))
    + " se publicarán <b>sin anonimizar</b>.</li>\n            ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":48}}}),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":40,"column":193}}})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":100},"end":{"line":39,"column":113}}}) : helper)))
    + " se publicarán de forma anonimizada; por lo tanto, no incluirán su nombre ni podrán asociarse con su identidad.</li>\n            ";
},"44":function(container,depth0,helpers,partials,data) {
    return "<li>Los datos recopilados no podrán ser consultados ni utilizados para investigaciones posteriores por nadie ajeno a los investigadores que participan en este trabajo. </li>";
},"46":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                nuestro comité de ética: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":45,"column":41},"end":{"line":45,"column":60}}}) : helper)))
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
    + " (correo electrónico: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":48,"column":55},"end":{"line":48,"column":69}}}) : helper)))
    + ") o "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":48,"column":73},"end":{"line":48,"column":91}}}) : helper)))
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
    + " (correo electrónico: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":50,"column":55},"end":{"line":50,"column":69}}}) : helper)))
    + ").\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "encuestadas";
},"55":function(container,depth0,helpers,partials,data) {
    return "evaluadas";
},"57":function(container,depth0,helpers,partials,data) {
    return "entrevistadas";
},"59":function(container,depth0,helpers,partials,data) {
    return "No recibirá compensación alguna.\n            ";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":70,"column":22},"end":{"line":70,"column":51}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":72,"column":126}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Recibirá un punto de créditos por hora requerido para su asignatura en "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":70,"column":124},"end":{"line":70,"column":139}}}) : helper)))
    + ". Puede retirarse e interrumpir su participación en cualquier momento sin necesidad de justificación. Seguirá recibiendo sus puntos de créditos.\n            ";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":56}}}),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":72,"column":126}}})) != null ? stack1 : "");
},"65":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Recibirá "
    + alias4(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":71,"column":67},"end":{"line":71,"column":91}}}) : helper)))
    + " como compensación por su participación, o bien un punto de créditos por hora requerido para su asignatura en "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":71,"column":201},"end":{"line":71,"column":216}}}) : helper)))
    + ".\n            ";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":50}}}),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":72,"column":126}}})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Recibirá "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":72,"column":61},"end":{"line":72,"column":85}}}) : helper)))
    + " como compensación por su participación. ";
},"70":function(container,depth0,helpers,partials,data) {
    return "Puede retirarse e interrumpir su participación en cualquier momento.\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    return "Puede retirarse e interrumpir su participación en cualquier momento sin penalización ni pérdida de la compensación. ";
},"74":function(container,depth0,helpers,partials,data) {
    return "Tengo derecho a no responder preguntas y, si en algún momento me siento incómodo durante la sesión de entrevista, tengo derecho a retirarme de la entrevista. ";
},"76":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (No obtendrá un beneficio directo por su participación en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":92,"column":79},"end":{"line":92,"column":92}}}) : helper)))
    + ". Esperamos que los resultados obtenidos de su participación contribuyan a hacer avanzar la investigación en este campo.)\n";
},"78":function(container,depth0,helpers,partials,data) {
    return "                Su beneficio al participar es la compensación descrita anteriormente.\n";
},"80":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Registraremos datos personales ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":110,"column":70},"end":{"line":110,"column":86}}}) : helper)))
    + ") durante su participación. ";
},"82":function(container,depth0,helpers,partials,data) {
    return "Los datos de contacto de los participantes del estudio podrán utilizarse para rastrear posibles cadenas de contagio. ";
},"84":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":114,"column":90},"end":{"line":114,"column":103}}}) : helper)))
    + " se almacenarán cifrados. ";
},"86":function(container,depth0,helpers,partials,data) {
    return " y registraremos metadatos del navegador";
},"88":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":123,"column":62},"end":{"line":123,"column":75}}}) : helper)))
    + " se publicarán <b>sin anonimizar</b>. Los usos posteriores de los registros y datos estarán sujetos a las políticas estándar de uso de datos.\n";
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

  return "                Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":125,"column":62},"end":{"line":125,"column":75}}}) : helper)))
    + " se publicarán de forma anonimizada. Los usos posteriores de los registros y datos estarán sujetos a las políticas estándar de uso de datos que protegen el anonimato de las personas participantes. Eliminaremos o codificaremos cualquier información personal que pudiera identificarle antes de publicar los datos, con el fin de garantizar que nadie pueda identificarle a partir de la información que compartimos. Utilizaremos los estándares científicos actuales y los métodos conocidos de anonimización. Cuando sus datos se anonimizan, se modifican de tal manera que ya no pueden rastrearse hasta su persona, o solo con un esfuerzo técnico desproporcionado. A pesar de estas medidas, no podemos garantizar el anonimato de sus datos personales.\n";
},"93":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Todos los datos que usted proporcione en este "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":127,"column":62},"end":{"line":127,"column":75}}}) : helper)))
    + " no se publicarán y se mantendrán de forma confidencial.\n            ";
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

  return "                        La transcripción de la entrevista será analizada principalmente por "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":92},"end":{"line":132,"column":129}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":129},"end":{"line":132,"column":215}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":215},"end":{"line":132,"column":310}}})) != null ? stack1 : "")
    + ".\n                        El acceso a la transcripción íntegra de la entrevista estará limitado a los autores de esta investigación, a colegas académicos y a investigadores con los que puedan colaborar como parte del proceso de investigación.\n                        Cualquier resumen del contenido de la entrevista, o cita directa de la misma, que se publique en publicaciones académicas u otros medios, será anonimizado de manera que usted no pueda ser identificado, y se tendrá cuidado de que no se revele ninguna otra información de la entrevista que pudiera identificarle. Tengo derecho a no responder preguntas y, si en algún momento me siento incómodo durante la sesión de entrevista, tengo derecho a retirarme de la entrevista.\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":157},"end":{"line":132,"column":183}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":184},"end":{"line":132,"column":208}}}) : helper)));
},"98":function(container,depth0,helpers,partials,data) {
    return " y";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":242},"end":{"line":132,"column":279}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":132,"column":280},"end":{"line":132,"column":303}}}) : helper)));
},"102":function(container,depth0,helpers,partials,data) {
    return "                Este sitio utiliza cookies y otras tecnologías de seguimiento para llevar a cabo la investigación, mejorar la experiencia del usuario, facilitar la interacción con el sistema y proporcionar contenido adicional de terceros. A pesar del control cuidadoso del contenido, los investigadores no asumen ninguna responsabilidad por los daños que se deriven directa o indirectamente del uso de esta aplicación en línea.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Sus datos sin anonimizar se almacenarán durante "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"storageTime") || (depth0 != null ? lookupProperty(depth0,"storageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storageTime","hash":{},"data":data,"loc":{"start":{"line":145,"column":64},"end":{"line":145,"column":79}}}) : helper)))
    + " a partir del momento en que otorgue su consentimiento, salvo que lo retire antes de que transcurra dicho plazo. Sus datos sin anonimizar se almacenarán en un lugar seguro y solo tendrán acceso a ellos los investigadores que participan en este trabajo.\n";
},"106":function(container,depth0,helpers,partials,data) {
    return "                Sus datos sin anonimizar se almacenarán de forma indefinida, salvo que retire su consentimiento.\n";
},"108":function(container,depth0,helpers,partials,data) {
    return "                Los datos sin anonimizar recopilados podrán compartirse públicamente, a menos que no haya firmado el formulario de autorización independiente que nos permita hacerlo (véase más abajo).\n";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":153,"column":22},"end":{"line":153,"column":48}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0),"inverse":container.program(113, data, 0),"data":data,"loc":{"start":{"line":153,"column":12},"end":{"line":157,"column":12}}})) != null ? stack1 : "");
},"111":function(container,depth0,helpers,partials,data) {
    return "                Los datos anonimizados recopilados podrán compartirse públicamente.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Los datos recopilados no podrán ser consultados ni utilizados para investigaciones posteriores por nadie ajeno a los investigadores que participan en este trabajo.\n            ";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Los datos recopilados se eliminarán al finalizar la investigación, o si usted se pone en contacto con el investigador para solicitar su eliminación.\n";
},"117":function(container,depth0,helpers,partials,data) {
    return "                Los datos recopilados que no se hayan hecho públicos se eliminarán al finalizar la investigación.\n";
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

  return "            <p><b>Investigador Principal:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":174,"column":46},"end":{"line":174,"column":59}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":174,"column":61},"end":{"line":174,"column":71}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":174,"column":73},"end":{"line":174,"column":80}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":174,"column":81},"end":{"line":174,"column":89}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"if","hash":{},"fn":container.program(123, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":89},"end":{"line":174,"column":124}}})) != null ? stack1 : "")
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":174,"column":126},"end":{"line":174,"column":140}}}) : helper)))
    + ")</p>\n";
},"123":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":174,"column":106},"end":{"line":174,"column":117}}}) : helper)));
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

  return "                <p><b>Jefe del Departamento:</b> "
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
    return "                   He podido guardar una copia de este formulario. Me he puesto en contacto con los investigadores indicados y todas mis preguntas han sido respondidas a mi entera satisfacción.\n";
},"130":function(container,depth0,helpers,partials,data) {
    return "                    Se me ha entregado una copia de este formulario. Todas mis preguntas han sido respondidas a mi entera satisfacción.\n";
},"132":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>Acepto que mis registros de datos y las mediciones realizadas durante el estudio puedan publicarse en el contexto de esta investigación sin anonimizar.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(133, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">Entiendo que los datos anonimizados no podrán asociarse con mi nombre. Del consentimiento para la publicación no se deriva ningún derecho a mi favor (como remuneración o coautoría). Esta declaración de consentimiento es revocable en cualquier momento de conformidad con el RGPD. En caso de revocación, las grabaciones publicadas, en la medida en que estén a disposición de los investigadores, serán eliminadas. Las grabaciones adicionales dejarán de utilizarse o publicarse tras la revocación de la publicación.</td></tr>\n";
},"133":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acepto adicionalmente que se puedan tomar y publicar fotografías durante este estudio.</td>\n                    </tr>\n";
},"135":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acepto adicionalmente que se puedan grabar y publicar vídeos durante este estudio.</td>\n                    </tr>\n";
},"137":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">Acepto adicionalmente que se puedan grabar y publicar archivos de audio durante este estudio.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \"><img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"pageBreak\"><h1>Consentimiento Informado de Participación</h1>\n        <p>\n            Se le invita a participar en el "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":57}}}) : helper)))
    + " <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":61},"end":{"line":7,"column":70}}}) : helper)))
    + "</b>, iniciado y dirigido por\n            "
    + alias4((lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":50}}}))
    + ".\n            La investigación está supervisada por\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":95}}})) != null ? stack1 : "")
    + "\n            en "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":30}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"loc":{"start":{"line":11,"column":37},"end":{"line":11,"column":62}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Tenga en cuenta lo siguiente:\n        </p>\n        <ul>\n            <li>Su participación es voluntaria.</li>\n            <li>El "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":23,"column":19},"end":{"line":23,"column":32}}}) : helper)))
    + " tendrá una duración aproximada de "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":23,"column":67},"end":{"line":23,"column":79}}}) : helper)))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":122}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":89}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":85}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":83}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":110}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":129}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":103}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":149}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":137}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":36,"column":69}}})) != null ? stack1 : "")
    + "            <li>Es posible que publiquemos los resultados de esta y de otras sesiones.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":37}}}),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.program(41, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":200}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>Si tiene alguna pregunta sobre el proceso de consentimiento informado de esta investigación o sobre sus derechos como\n            sujeto de investigación, póngase en contacto con\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.program(48, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":52,"column":19}}})) != null ? stack1 : "")
    + "\n            Debe leer detenidamente las condiciones que figuran a continuación. Puede tomarse todo el tiempo que necesite para leer el formulario de\n            consentimiento. Si no está completamente de acuerdo con algún punto, o si no se han respondido todas sus preguntas a su entera\n            satisfacción, no debería otorgar su consentimiento. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Finalidad y Objetivo de esta Investigación</h2>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"purpose") || (depth0 != null ? lookupProperty(depth0,"purpose") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"purpose","hash":{},"data":data,"loc":{"start":{"line":59,"column":11},"end":{"line":59,"column":22}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"goal") || (depth0 != null ? lookupProperty(depth0,"goal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data,"loc":{"start":{"line":59,"column":23},"end":{"line":59,"column":31}}}) : helper)))
    + " Su participación nos ayudará a alcanzar este objetivo. Los resultados de esta investigación podrán\n            presentarse en reuniones científicas o profesionales, o publicarse en actas y revistas\n            científicas.</p></div>\n    <div class=\"pageBreak\"><h2>2. Participación y Compensación</h2>\n        <p>Su participación en este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":63,"column":36},"end":{"line":63,"column":49}}}) : helper)))
    + " es voluntaria. Usted será una de aproximadamente "
    + alias4(((helper = (helper = lookupProperty(helpers,"participants") || (depth0 != null ? lookupProperty(depth0,"participants") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participants","hash":{},"data":data,"loc":{"start":{"line":63,"column":99},"end":{"line":63,"column":115}}}) : helper)))
    + " personas\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":64,"column":18},"end":{"line":64,"column":45}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":65}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":43}}}),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":61}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":44}}}),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":64}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":42}}}),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":64}}})) != null ? stack1 : "")
    + "\n             para esta investigación.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":69,"column":18},"end":{"line":69,"column":45}}}),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.program(61, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":72,"column":133}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":18},"end":{"line":73,"column":45}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.program(72, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":143}}})) != null ? stack1 : "")
    + "\n            En la medida de lo posible, puede negarse a responder cualquier pregunta que no desee responder, o retirarse de la participación en cualquier momento.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":76,"column":18},"end":{"line":76,"column":42}}}),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":12},"end":{"line":76,"column":209}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>En cualquier momento, y sin necesidad de dar ninguna razón, puede comunicarnos que desea retirar el consentimiento otorgado (RGPD art. 7(3)). En caso de retirada, sus datos almacenados en virtud de su consentimiento serán eliminados o\n            anonimizados cuando ello sea legalmente posible (RGPD art. 17). Si la eliminación resulta imposible o solo es posible\n            con un esfuerzo técnico desproporcionado, sus datos serán anonimizados mediante la eliminación de la información de\n            identificación personal. No obstante, la anonimización de sus datos no puede excluir por completo la posibilidad de que, posteriormente,\n            la información pueda rastrearse hasta usted a través de otras fuentes. Por último, una vez anonimizados los datos, su\n            eliminación ya no será posible, puesto que no podremos identificar cuáles son sus datos. </p></div>\n    <div class=\"pageBreak\"><h2>3. Procedimiento</h2>\n        <p>Una vez otorgado el consentimiento, se le guiará a través de los siguientes pasos:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":86,"column":56},"end":{"line":86,"column":80}}}))
    + "</p>\n        <p>El procedimiento completo de este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":87,"column":45},"end":{"line":87,"column":58}}}) : helper)))
    + " tendrá una duración aproximada de "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":87,"column":93},"end":{"line":87,"column":105}}}) : helper)))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Riesgos y Beneficios</h2>\n        <p>No existen riesgos asociados a este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":89,"column":47},"end":{"line":89,"column":60}}}) : helper)))
    + ". Las molestias o inconvenientes serán menores y es\n            poco probable que se produzcan. Si se siente incómodo, puede interrumpir su participación.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":91,"column":18},"end":{"line":91,"column":45}}}),{"name":"if","hash":{},"fn":container.program(76, data, 0, blockParams, depths),"inverse":container.program(78, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":91,"column":12},"end":{"line":95,"column":19}}})) != null ? stack1 : "")
    + "            Con esta investigación, haremos avanzar el conocimiento en este campo de investigación.</p></div>\n    <div class=\"pageBreak\"><h2>5. Protección de Datos y Confidencialidad</h2>\n        <p>El Reglamento General de Protección de Datos (RGPD) de la Unión Europea (UE) regula esta recopilación de datos.\n            La base jurídica para el tratamiento de los datos personales es el consentimiento del participante, conforme al art. 6(1)(a) del RGPD. El RGPD garantiza a los interesados una serie de derechos, entre ellos el derecho de acceso,\n            rectificación y supresión de los datos personales. </p>\n        <ul>\n            <li>Tiene derecho a acceder a sus datos personales en cualquier momento (RGPD art. 15).</li>\n            <li>Tiene derecho a corregir datos personales inexactos en cualquier momento (RGPD art. 16).</li>\n            <li>Tiene derecho a que se supriman sus datos personales (RGPD art. 17).</li>\n            <li>Tiene derecho a limitar el tratamiento de sus datos personales (RGPD art. 18).</li>\n            <li>Tiene derecho a recibir una copia de sus datos personales y a transferirlos a otra organización (RGPD art. 20).</li>\n            <li>Tiene derecho a oponerse al tratamiento de sus datos personales (RGPD art. 21).</li>\n        </ul>\n        <p>Si desea ejercer cualquiera de sus derechos, póngase en contacto con los investigadores. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":11},"end":{"line":110,"column":121}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":111,"column":18},"end":{"line":111,"column":45}}}),{"name":"if","hash":{},"fn":container.program(82, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":111,"column":171}}})) != null ? stack1 : "")
    + "\n            Los investigadores no le identificarán por su nombre real en ningún informe elaborado a partir de los resultados obtenidos de este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":112,"column":143},"end":{"line":112,"column":156}}}) : helper)))
    + ", y\n            su confidencialidad como participante en este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":113,"column":58},"end":{"line":113,"column":71}}}) : helper)))
    + " quedará garantizada.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":114,"column":18},"end":{"line":114,"column":42}}}),{"name":"if","hash":{},"fn":container.program(84, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":114,"column":136}}})) != null ? stack1 : "")
    + "\n            Los datos recopilados en este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":115,"column":42},"end":{"line":115,"column":55}}}) : helper)))
    + " se tratarán de conformidad con el RGPD. </p>\n        <p>Registraremos\n            "
    + alias4((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"loc":{"start":{"line":117,"column":12},"end":{"line":117,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":118,"column":18},"end":{"line":118,"column":45}}}),{"name":"if","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":12},"end":{"line":118,"column":94}}})) != null ? stack1 : "")
    + "\n             durante el "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":119,"column":24},"end":{"line":119,"column":37}}}) : helper)))
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
    + "        </p>\n        <p>Como ocurre con cualquier publicación o actividad relacionada con internet, siempre existe el riesgo de una violación de la confidencialidad. De conformidad con el RGPD, los investigadores informarán al participante si se detecta una violación de la confidencialidad de los datos. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identificación de los Investigadores</h2>\n        <p>Si tiene alguna pregunta o inquietud sobre la investigación, no dude en ponerse en contacto con: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(119, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":168,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":8},"end":{"line":175,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(125, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Consentimiento Informado y Conformidad</h2>Este formulario de consentimiento se conservará de forma segura y\n        de conformidad con el RGPD durante el tiempo estrictamente necesario.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>He comprendido la explicación que se me ha proporcionado.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(128, data, 0, blockParams, depths),"inverse":container.program(130, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Por lo tanto, accedo voluntariamente a participar en este "
    + alias4(((helper = (helper = lookupProperty(helpers,"typeLabel") || (depth0 != null ? lookupProperty(depth0,"typeLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":194,"column":74},"end":{"line":194,"column":87}}}) : helper)))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>Consiento voluntariamente que mis datos sean registrados y posteriormente tratados de conformidad con el RGPD. He sido informado de las consecuencias de retirar mi consentimiento.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Nombre del Participante (en letra de imprenta)</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Firma del Participante</td>\n                <td>Lugar, Fecha</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();