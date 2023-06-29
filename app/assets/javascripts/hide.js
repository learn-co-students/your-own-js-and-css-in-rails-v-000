$(document).ready(function() {
    $("#hide_this").click(this, hideWhenClicked)
  })
  
function hideWhenClicked() {
    $(this).hide();
}