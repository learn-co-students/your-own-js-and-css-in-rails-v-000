$(document).ready(function hideWhenClicked() {
  $("#hide_this").click(function(event) {
    $("#hide_this").toggle();
    event.preventDefault();
  })
})
