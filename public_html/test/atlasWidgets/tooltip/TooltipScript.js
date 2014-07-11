var Aria = require("ariatemplates/Aria");
module.exports = Aria.tplScriptDefinition({
    $classpath : 'test.atlasWidgets.tooltip.TooltipScript',
    $prototype : {
        getHsp : function () {
            return require("test/atlasWidgets/tooltip/Tooltip.hsp").page;
        }
    }
});
