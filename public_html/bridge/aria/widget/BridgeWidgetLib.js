Aria.classDefinition({
    $classpath : "bridge.aria.widget.BridgeWidgetLib",
    $extends : "aria.widgetLibs.WidgetLib",
    $singleton : true,
    $constructor : function() {
        //Bridge hackish sync
        var json = noder.require("hsp/json");
        aria.utils.Json.constructor.prototype.setValue2 = aria.utils.Json.constructor.prototype.setValue;
        aria.utils.Json.constructor.prototype.setValue = function (a,b,c,d,e) {
            var initialValue = a[b];
            json.$set2(a,b,c);
            a[b] = initialValue;
            return aria.utils.Json.setValue2(a,b,c,d,e);
        }
        json.$set2 = json.$set;
        json.$set = function (a,b,c) {
            var initialValue = a[b];
            aria.utils.Json.setValue2(a,b,c);
            a[b] = initialValue;
            return json.$set2(a,b,c);
        }
        json.set = json.$set;
    },
    $prototype : {
        /**
         * Map of all the widgets in the library. Keys in the map are widget names as they can be used in templates.
         * Values are the corresponding classpaths.
         * @type Object
         */
        widgets : {
            "Bridge" : "bridge.aria.widget.Bridge"
        }
    }
});