(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_en'] = template({"1":function(container,depth0,helpers,partials,data) {
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
    return "the responsible investigator";
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

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequalTrim")||(depth0 && lookupProperty(depth0,"unequalTrim"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequalTrim","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":61}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":96}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " under "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":13,"column":70},"end":{"line":13,"column":88}}}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                This study is funded and financed by the research project "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":17,"column":74},"end":{"line":17,"column":85}}}) : helper)))
    + ".\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>We will record personal demographics ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Personal Data]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":24,"column":81},"end":{"line":24,"column":123}}}))
    + ").</li>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<li>We will take photos during the session.</li>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<li>We will record videos during the session.</li>";
},"19":function(container,depth0,helpers,partials,data) {
    return "<li>We will record audio during the session.</li>";
},"21":function(container,depth0,helpers,partials,data) {
    return "<li>We will track your body motion during the session.</li>";
},"23":function(container,depth0,helpers,partials,data) {
    return "<li>We will track your eye and head motion during the session.</li>";
},"25":function(container,depth0,helpers,partials,data) {
    return "<li>We will take physiological measurements of your body.</li>";
},"27":function(container,depth0,helpers,partials,data) {
    return "<li>We will record the screen on your device that are necessary for the study.</li>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<li>We will record interaction data (e.g., clicks, timings) during the session.</li>";
},"31":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>You will receive "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":33,"column":70},"end":{"line":33,"column":111}}}))
    + " for your study course as compensation.</li>\n            ";
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

  return "<li>You will receive "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":79},"end":{"line":34,"column":120}}}))
    + " for your study course as compensation or "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Monetary Compensation]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":34,"column":162},"end":{"line":34,"column":220}}}))
    + " as monetary compensation.</li>\n            ";
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

  return "<li>You will receive "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Monetary Compensation]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":35,"column":73},"end":{"line":35,"column":131}}}))
    + " as compensation.</li>\n            ";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":36,"column":22},"end":{"line":36,"column":49}}}),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":37,"column":77}}})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return "<li>You will receive no compensation.</li>\n            ";
},"42":function(container,depth0,helpers,partials,data) {
    return "<li><span class=\"missingField\">[Compensation]</span></li>";
},"44":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>All data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":39,"column":82},"end":{"line":39,"column":93}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":39,"column":72},"end":{"line":39,"column":110}}}))
    + " will be published <b>not anonymized</b>.</li>\n            ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":40,"column":22},"end":{"line":40,"column":48}}}),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":41,"column":151}}})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>All data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":40,"column":93},"end":{"line":40,"column":104}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":40,"column":83},"end":{"line":40,"column":121}}}))
    + " will be published anonymized; thus, they will neither include your name nor cannot be associated with your identity.</li>\n            ";
},"49":function(container,depth0,helpers,partials,data) {
    return "<li>The data collected cannot be viewed or used for further research by anyone outside the researchers involved in this work. </li>";
},"51":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                our ethics committee office: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":46,"column":45},"end":{"line":46,"column":64}}}) : helper)))
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
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":49,"column":43},"end":{"line":49,"column":57}}}) : helper)))
    + ") or "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":49,"column":62},"end":{"line":49,"column":80}}}) : helper)))
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
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":51,"column":43},"end":{"line":51,"column":57}}}) : helper)))
    + ").\n";
},"58":function(container,depth0,helpers,partials,data) {
    return "surveyed";
},"60":function(container,depth0,helpers,partials,data) {
    return "tested";
},"62":function(container,depth0,helpers,partials,data) {
    return "interviewed";
},"64":function(container,depth0,helpers,partials,data) {
    return "You will receive no compensation.\n            ";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":71,"column":22},"end":{"line":71,"column":51}}}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":74,"column":68}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":70},"end":{"line":71,"column":111}}}))
    + " required for your study course at the "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":71,"column":150},"end":{"line":71,"column":189}}}))
    + ". You may withdraw and discontinue participation at any time without justification for withdrawing. You will still receive your compensation.\n            ";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":72,"column":22},"end":{"line":72,"column":56}}}),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.program(72, data, 0),"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":74,"column":68}}})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Monetary Compensation]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":75},"end":{"line":72,"column":133}}}))
    + " as compensation for your participation or "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"pointsCompensation") : depth0),"[Points]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":176},"end":{"line":72,"column":217}}}))
    + " required for your study course at the "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":72,"column":256},"end":{"line":72,"column":295}}}))
    + ".\n            ";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":73,"column":22},"end":{"line":73,"column":50}}}),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(75, data, 0),"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":74,"column":68}}})) != null ? stack1 : "");
},"73":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0),"[Monetary Compensation]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":73,"column":69},"end":{"line":73,"column":127}}}))
    + " as compensation for your participation. \n            ";
},"75":function(container,depth0,helpers,partials,data) {
    return "<span class=\"missingField\">[Compensation]</span>";
},"77":function(container,depth0,helpers,partials,data) {
    return "You may withdraw and discontinue participation at any time.\n            ";
},"79":function(container,depth0,helpers,partials,data) {
    return "You may withdraw and discontinue participation at any time without penalty or losing the compensation. ";
},"81":function(container,depth0,helpers,partials,data) {
    return "I have the right not to answer questions, and if I feel uncomfortable in any way during the interview session, I have the right to withdraw from the interview. ";
},"83":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (You will not directly benefit through participation in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":94,"column":87},"end":{"line":94,"column":98}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":94,"column":77},"end":{"line":94,"column":115}}}))
    + ". We hope that the settings obtained from your participation may help to bring forward the research in this field.)\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "                Your benefit in participating is your compensation described above.\n";
},"87":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "We will record personal data ("
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"personalData") : depth0),"[Personal Data]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":112,"column":68},"end":{"line":112,"column":110}}}))
    + ") during participation. ";
},"89":function(container,depth0,helpers,partials,data) {
    return "The contact details of the study participants can be used to track potential infection chains. ";
},"91":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "All the data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":116,"column":87},"end":{"line":116,"column":98}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":116,"column":77},"end":{"line":116,"column":115}}}))
    + " will be encrypted. ";
},"93":function(container,depth0,helpers,partials,data) {
    return " and record browser meta data";
},"95":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                All data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":125,"column":55},"end":{"line":125,"column":66}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":125,"column":45},"end":{"line":125,"column":83}}}))
    + " will be published <b>not anonymized</b>. Subsequent uses of records and data will be subject to standard data use policies.\n";
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

  return "                All data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":127,"column":55},"end":{"line":127,"column":66}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":127,"column":45},"end":{"line":127,"column":83}}}))
    + " will be published anonymized. Subsequent uses of records and datawill be subject to standard data use policies that protect the participating individuals' anonymity. We will remove or code any personal information that could identify you before publishing the data to ensure that no one can identify you from the information we share. We will use current scientific standards and known methods for anonymization. When your data are anonymized, they are altered in a manner that they can no longer be traced back to your person or only with disproportionate technical effort. Despite these measures, we cannot guarantee the anonymity of your personal data.\n";
},"100":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                All data you provide in this "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"loc":{"start":{"line":129,"column":55},"end":{"line":129,"column":66}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":129,"column":45},"end":{"line":129,"column":83}}}))
    + " will not be published and kept confidential.\n            ";
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

  return "                        The interview transcript will be primarily analyzed by "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":79},"end":{"line":134,"column":116}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":116},"end":{"line":134,"column":204}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":204},"end":{"line":134,"column":301}}})) != null ? stack1 : "")
    + ".\n                        Access to the raw interview transcript will be limited to the authors of this research, academic colleagues, and researchers with whom he might collaborate as part of the research process.\n                        Any summary interview content, or direct quotations from the interview, that are made available through academic publications or other outlets will be anonymized so that you cannot be identified, and care will be taken to ensure that other settings in the interview that could identify you is not revealed. I have the right not to answer questions, and if I feel uncomfortable in any way during the interview session, I have the right to withdraw from the interview.\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":144},"end":{"line":134,"column":172}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":173},"end":{"line":134,"column":197}}}) : helper)));
},"105":function(container,depth0,helpers,partials,data) {
    return " and";
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":231},"end":{"line":134,"column":270}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":134,"column":271},"end":{"line":134,"column":294}}}) : helper)));
},"109":function(container,depth0,helpers,partials,data) {
    return "                This site uses cookies and other tracking technologies to conduct the research, to improve the user experience, the ability to interact with the system and to provide additional content from third parties. Despite careful control of content, the researchers assume no liability for damages, which directly or indirectly result from the use of this online application.\n";
},"111":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Your non-anonymized data will be stored for "
    + container.escapeExpression((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"storageTime") : depth0),"[Storage Time]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":147,"column":60},"end":{"line":147,"column":100}}}))
    + " from the time your consent is given, unless you withdraw your consent before this period has elapsed. Your non-anonymized data will be stored in a secure location and will be accessible only to the researchers involved in this work.\n";
},"113":function(container,depth0,helpers,partials,data) {
    return "                Your non-anonymized data will be stored indefinitely, unless you withdraw your consent.\n";
},"115":function(container,depth0,helpers,partials,data) {
    return "                Non-anonymized data collected can be shared publicly unless you have not signed the separate permission form allowing us to so (see below).\n";
},"117":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":155,"column":22},"end":{"line":155,"column":48}}}),{"name":"if","hash":{},"fn":container.program(118, data, 0),"inverse":container.program(120, data, 0),"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":159,"column":12}}})) != null ? stack1 : "");
},"118":function(container,depth0,helpers,partials,data) {
    return "                Anonymized data collected can be shared publicly.\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                The data collected cannot be viewed or used for further research by everyone outside the researchers involved in this work.\n            ";
},"122":function(container,depth0,helpers,partials,data) {
    return "                The data collected will be deleted after the end of the research, or if you contact the researcher to delete them.\n";
},"124":function(container,depth0,helpers,partials,data) {
    return "                Data collected that have not been made public will be deleted after the end of the research.\n";
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
    + alias1((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"email") : depth0),"[Email]",{"name":"missing","hash":{},"data":data,"loc":{"start":{"line":172,"column":57},"end":{"line":172,"column":84}}}))
    + ") <br />\n            ";
},"129":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":140},"end":{"line":175,"column":155}}}),{"name":"if","hash":{},"fn":container.program(130, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":134},"end":{"line":175,"column":174}}})) != null ? stack1 : "");
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

  return "                <p><b>Department Head:</b> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":43},"end":{"line":178,"column":61}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":69},"end":{"line":178,"column":106}}}),{"name":"with","hash":{},"fn":container.program(134, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":61},"end":{"line":178,"column":168}}})) != null ? stack1 : "")
    + "</p>\n";
},"134":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||container.hooks.helperMissing).call(alias1,blockParams[0][0],{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":124},"end":{"line":178,"column":139}}}),{"name":"if","hash":{},"fn":container.program(135, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":178,"column":118},"end":{"line":178,"column":159}}})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data,blockParams) {
    return " ("
    + container.escapeExpression(container.lambda(blockParams[1][0], depth0))
    + ")";
},"137":function(container,depth0,helpers,partials,data) {
    return "                   I was able to save a copy of this form. I reached out to the listed researchers and have had all my questions answered to my satisfaction.\n";
},"139":function(container,depth0,helpers,partials,data) {
    return "                    I have been given a copy of this form. I have had all my questions answered to my satisfaction. \n";
},"141":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                    <td>I agree that my data records and measurements during the study can be published in context of this research in non-anonymized from.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":16},"end":{"line":213,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(144, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":16},"end":{"line":219,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(146, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":16},"end":{"line":225,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">I understand that data will be anonymized cannot be associated with my name. From the consent of publication, I do not derive any rights (such as any renumeration or co-authorship). This declaration of consent is revocable at any time in line with the GDPR. In the case of revocation, the published recordings, insofar as they are subject to the disposition of the researchers, will be removed. Further recordings are no longer used or published after revocation of publication.</td></tr>\n";
},"142":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that photos during this study can be made and published.</td>\n                    </tr>\n";
},"144":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that videos during this study can be recorded and published.</td>\n                    </tr>\n";
},"146":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\" aria-hidden=\"true\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that audio files during this study can be recorded and published.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":112}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"pageBreak\"><h1>Informed Consent of Participation</h1>\n        <p>\n            You are invited to participate in the "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":60},"end":{"line":7,"column":71}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":50},"end":{"line":7,"column":88}}}))
    + " <b>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"[Title]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":92},"end":{"line":7,"column":119}}}))
    + "</b>, initiated and conducted by\n            "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"joinResearchers")||(depth0 && lookupProperty(depth0,"joinResearchers"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"joinResearchers","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":58}}}),"[Researchers]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":76}}}))
    + ".\n            The research is supervised by\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":38}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":96}}})) != null ? stack1 : "")
    + "\n            at "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"institution") : depth0),"[Institution]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":54}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"notBlank")||(depth0 && lookupProperty(depth0,"notBlank"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"notBlank","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":61},"end":{"line":11,"column":86}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":54},"end":{"line":15,"column":20}}})) != null ? stack1 : "")
    + ".\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":16,"column":12},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "            Please note:\n        </p>\n        <ul>\n            <li>Your participation is voluntary.</li>\n            <li>The "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":30},"end":{"line":23,"column":41}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":58}}}))
    + " will last approximately "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Duration]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":83},"end":{"line":23,"column":116}}}))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":137}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":90}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":99}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":109}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":132}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":129}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":47}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.program(33, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":84}}})) != null ? stack1 : "")
    + "            <li>We may publish results from this and other sessions.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":18},"end":{"line":39,"column":37}}}),{"name":"if","hash":{},"fn":container.program(44, data, 0, blockParams, depths),"inverse":container.program(46, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":158}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>If you have any questions about the whole informed consent process of this research or your rights as a\n            human research subject, please contact\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.program(53, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":45,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + "\n            You should carefully read the settings below. You may take as much time as you need to read the consent\n            form. If you do not fully agree with something, or if your questions have not all been answered to your\n            satisfaction, then you should not give your consent. </p>\n    </div>\n    <div class=\"pageBreak\"><h2>1. Purpose and Goal of this Research</h2>\n        <p>"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"purpose") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":21},"end":{"line":60,"column":43}}}),"[Purpose]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":11},"end":{"line":60,"column":57}}}))
    + " "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"ensurePeriod")||(depth0 && lookupProperty(depth0,"ensurePeriod"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"goal") : depth0),{"name":"ensurePeriod","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":68},"end":{"line":60,"column":87}}}),"[Goal]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":60,"column":58},"end":{"line":60,"column":98}}}))
    + " Your participation will help us achieve this goal. The results of this research may be\n            presented at scientific or professional meetings or published in scientific proceedings and\n            journals.</p></div>\n    <div class=\"pageBreak\"><h2>2. Participation and Compensation</h2>\n        <p>Your participation in this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":48},"end":{"line":64,"column":59}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":38},"end":{"line":64,"column":76}}}))
    + " is voluntary. You will be one of approximately "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"participants") : depth0),"[Participants]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":64,"column":124},"end":{"line":64,"column":165}}}))
    + " people being\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":45}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":62}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":43}}}),{"name":"if","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":58}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":44}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":12},"end":{"line":67,"column":61}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":18},"end":{"line":68,"column":42}}}),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":68,"column":12},"end":{"line":68,"column":62}}})) != null ? stack1 : "")
    + "\n             for this research.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":18},"end":{"line":70,"column":45}}}),{"name":"if","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.program(66, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":70,"column":12},"end":{"line":74,"column":75}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":18},"end":{"line":75,"column":45}}}),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":75,"column":12},"end":{"line":76,"column":130}}})) != null ? stack1 : "")
    + "\n            If possible, you may refuse to answer any questions you do not want to answer or withdraw from participation at any time.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":18},"end":{"line":78,"column":42}}}),{"name":"if","hash":{},"fn":container.program(81, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":12},"end":{"line":78,"column":211}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>At any time and without giving any reason, you can notify us that you want to withdraw the consent given (GDPR Art. 7(3)). In case of withdrawal, your data stored based on your consent will be deleted or\n            anonymized where this is legally permissible (GDPR Art. 17). If deletion is impossible or only possible\n            with unreasonable technical effort, your data will be anonymized by deleting the personal identification\n            information. However, anonymization of your data cannot entirely exclude the possibility of subsequent\n            tracing of information to you via other sources. Finally, once the data is anonymized, the deletion of\n            the data is not possible anymore as we will not be able to identify which data is yours. </p></div>\n    <div class=\"pageBreak\"><h2>3. Procedure</h2>\n        <p>After giving consent, you will be guided through the following steps:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":66},"end":{"line":88,"column":88}}}),"[Procedure]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":88,"column":56},"end":{"line":88,"column":104}}}))
    + "</p>\n        <p>The complete procedure of this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":52},"end":{"line":89,"column":63}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":42},"end":{"line":89,"column":80}}}))
    + " will last approximately "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),"[Duration]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":89,"column":105},"end":{"line":89,"column":138}}}))
    + ".</p></div>\n    <div class=\"pageBreak\"><h2>4. Risks and Benefits</h2>\n        <p>There are no risks associated with this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":61},"end":{"line":91,"column":72}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":91,"column":51},"end":{"line":91,"column":89}}}))
    + ". Discomforts or inconveniences will be minor and are\n            unlikely to happen. If you feel uncomfortable, you may discontinue your participation.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":18},"end":{"line":93,"column":45}}}),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.program(85, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":93,"column":12},"end":{"line":97,"column":19}}})) != null ? stack1 : "")
    + "            With this research, we will advance knowledge in this research field.</p></div>\n    <div class=\"pageBreak\"><h2>5. Data Protection and Confidentiality</h2>\n        <p>The General Data Protection Regulation (GDPR) of the European Union (EU) governs that data collection\n            The legal basis for processing personal data is the participant's consent pursuant to Art. 6(1)(a) GDPR. The GDPR guarantees a set of rights to the data subjects, including the right to access,\n            rectification, and erasure of personal data. </p>\n        <ul>\n            <li>You have the right to access your personal data at any time (GDPR Art. 15).</li>\n            <li>You have the right to correct inaccurate personal data at any time (GDPR Art. 16).</li>\n            <li>You have the right to have your personal data deleted (GDPR Art. 17).</li>\n            <li>You have the right to limit the processing of your personal data (GDPR Art. 18).</li>\n            <li>You have the right to receive a copy of your personal data and transfer it to another organization (GDPR Art. 20).</li>\n            <li>You have the right to object to the processing of your personal data (GDPR Art. 21).</li>\n        </ul>\n        <p>If you wish to exercise any of your rights, please contact the researchers. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":112,"column":11},"end":{"line":112,"column":141}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":18},"end":{"line":113,"column":45}}}),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":149}}})) != null ? stack1 : "")
    + "\n            Researchers will not identify you by your real name in any reports using settings obtained from this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":123},"end":{"line":114,"column":134}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":114,"column":113},"end":{"line":114,"column":151}}}))
    + ", and\n            your confidentiality as a participant in this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":68},"end":{"line":115,"column":79}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":115,"column":58},"end":{"line":115,"column":96}}}))
    + " will remain secure.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":18},"end":{"line":116,"column":42}}}),{"name":"if","hash":{},"fn":container.program(91, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":116,"column":12},"end":{"line":116,"column":142}}})) != null ? stack1 : "")
    + "\n            Data collected in this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":45},"end":{"line":117,"column":56}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":117,"column":35},"end":{"line":117,"column":73}}}))
    + " will be treated in compliance with the GDPR. </p>\n        <p>We will record\n            "
    + alias3((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":119,"column":12},"end":{"line":119,"column":35}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":18},"end":{"line":120,"column":45}}}),{"name":"if","hash":{},"fn":container.program(93, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":120,"column":12},"end":{"line":120,"column":83}}})) != null ? stack1 : "")
    + "\n             during the "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":34},"end":{"line":121,"column":45}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":121,"column":24},"end":{"line":121,"column":62}}}))
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
    + "        </p>\n        <p>As with any publication or online-related activity, the risk of a breach of confidentiality is always possible. According to the GDPR, the researchers will inform the participant if a breach of confidential data is detected. </p></div>\n    <div class=\"pageBreak\"><h2>6. Identification of Investigators</h2>\n        <p>If you have any questions or concerns about the research, please feel free to contact: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(126, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":170,"column":8},"end":{"line":174,"column":15}}})) != null ? stack1 : "")
    + "        <p><b>Principal Investigator:</b> "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),"[PI Name]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":42},"end":{"line":175,"column":75}}}))
    + " ("
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"addressLine")||(depth0 && lookupProperty(depth0,"addressLine"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"street") : depth0),(depth0 != null ? lookupProperty(depth0,"zip") : depth0),(depth0 != null ? lookupProperty(depth0,"city") : depth0),(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"addressLine","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":85},"end":{"line":175,"column":122}}}),{"name":"with","hash":{},"fn":container.program(129, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":77},"end":{"line":175,"column":183}}})) != null ? stack1 : "")
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0),"[PI Email]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":175,"column":183},"end":{"line":175,"column":218}}}))
    + ")</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(132, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h2>7. Informed Consent and Agreement</h2>This consent form will be retained securely and\n        in compliance with the GDPR for no longer than necessary.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                 <td>I understand the explanation provided to me.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":22},"end":{"line":189,"column":49}}}),{"name":"if","hash":{},"fn":container.program(137, data, 0, blockParams, depths),"inverse":container.program(139, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":189,"column":16},"end":{"line":193,"column":23}}})) != null ? stack1 : "")
    + "                Therefore, I voluntarily agree to participate in this "
    + alias3((lookupProperty(helpers,"missing")||(depth0 && lookupProperty(depth0,"missing"))||alias2).call(alias1,(lookupProperty(helpers,"typeLabel")||(depth0 && lookupProperty(depth0,"typeLabel"))||alias2).call(alias1,{"name":"typeLabel","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":80},"end":{"line":194,"column":91}}}),"[Study Type]",{"name":"missing","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":70},"end":{"line":194,"column":108}}}))
    + ".\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\" aria-hidden=\"true\">&#9744;</td>\n                <td>I voluntarily consent to my data being recorded and subsequently processed in line with the GDPR. I have been informed about the consequences of withdrawing my consent.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":18},"end":{"line":202,"column":37}}}),{"name":"if","hash":{},"fn":container.program(141, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":12},"end":{"line":227,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Printed Name of Subject</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Signature of Subject</td>\n                <td>Location, Date</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});
})();