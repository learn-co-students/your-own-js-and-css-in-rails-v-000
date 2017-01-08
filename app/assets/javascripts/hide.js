$(document).ready(function(event) {
  hideWhenClicked();
})

function hideWhenClicked() {
  $('#hide_this').click(function(event) {
    $('#hide_this').hide("slow");
    event.preventDefault();
  })
}
