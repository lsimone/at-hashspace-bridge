{Template {
    $classpath:'test.atlasWidgets.tooltip.Tooltip',
    $wlibs : {
      'hsp' : 'bridge.aria.widget.BridgeWidgetLib'
    },
    $hasScript:true
}}

    {macro main()}
         <h2>Tooltip</h2>
         <br />

        {@hsp:Template {
          id: "hspid",
          type:"div",
          hsp: {
              src: getHsp(),
              args:[{data: data}]
          }
        } /}

    {/macro}

{/Template}
