var Aria = require("ariatemplates/Aria");
module.exports = Aria.classDefinition({
    $classpath : "test.atlasWidgets.tooltip.TooltipTest",
    $extends : require("test/atlasWidgets/TemplateTestCaseWrapper"),
    $constructor : function () {
        this.$TemplateTestCaseWrapper.constructor.call(this);
        this.data = {
            value : false
        }
        this.setTestEnv({
            template : "test.atlasWidgets.tooltip.Tooltip",
            data : this.data
        });

    },
    $destructor : function () {
        this.data = null;
        this.$TemplateTestCaseWrapper.$destructor.call(this);
    },

    $prototype : {
        runTemplateTest : function () {
//            return;
            this.waitFor({
                condition : function () {
                    // wait for the element to be inserted in the dom
                    return this.getWidgetDomElement("myId");
                },
                callback : {
                    fn : function () {
                        aria.utils.SynEvents.move({
                            to : this.getWidgetDomElement("myId")
                        }, Aria.$window.document.getElementById("justToFocusOut"), {
                            fn : this._afterMouseMove,
                            scope : this
                        });
                    },
                    scope : this
                }
            });

        },

        _afterMouseMove : function () {

            aria.core.Timer.addCallback({
                fn : function () {
                    var tooltip = Aria.$window.document.getElementById("testTooltipId");
                    this.assertEquals(tooltip.innerHTML, "TEST TOOLTIP", "The tooltip content is %1, not equal to the expected one: %2");
                    this.notifyTemplateTestEnd();
                },
                scope : this,
                delay : 300
            });

        }

    }
});
