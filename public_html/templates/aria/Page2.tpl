{Template {
  $classpath: "templates.aria.Page2",
  $wlibs : {
    'aria' : 'aria.widgets.AriaLib'
  }
}}

{macro main()}
  <div class="attpl">
    {@aria:TextField {
      label : "@aria:TextField",
      labelPos : "left",
      helptext : "Enter your first name",
      width : 280,
      block : true,
      labelWidth : 120,
      bind : {
        "value" : {
          inside : data,
          to : 'value' }
      }
    }/}
    {section {
      id: "content2",
      type: "div",
      bindRefreshTo: [{to:"value", inside:data}],
      macro: {name: "displayContent", scope : this}
    }/}
  </div>
{/macro}

{macro displayContent()}
  ${data.value}
{/macro}
{/Template}