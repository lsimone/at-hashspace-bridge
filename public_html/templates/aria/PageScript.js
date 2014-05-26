
var Aria = require("ariatemplates/Aria");
module.exports = Aria.tplScriptDefinition({
    $classpath : "templates.aria.PageScript",

    $prototype : {
        getHsp : function () {
            return require("templates/hsp/page.hsp").page;
        }
    }
});