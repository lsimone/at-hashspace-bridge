Aria.classDefinition({
    $classpath: "templates.aria.MainCtrl",
    $extends: "aria.templates.ModuleCtrl",
    $implements: ["templates.aria.IMainCtrl"],


    $prototype: {
        $publicInterfaceName: "templates.aria.IMainCtrl",

        init: function (args, cb) {
            this._data.value = "test";
            this._data.dateValue = null;

            this.$callback(cb);
        }
    }
});
