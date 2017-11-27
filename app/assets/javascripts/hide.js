$(document).ready(function(){
  hideWhenClicked();
});

function hideWhenClicked() {
  $("#hide_this").click(function() {
    $("a#hide_this").hide();
  })
}