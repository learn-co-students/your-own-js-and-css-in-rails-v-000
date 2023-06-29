$(document).ready(function() {
  hideWhenClicked();
});


function hideWhenClicked () {
  $('#hide_this').click(function(event) {
    $('#hide_this').hide();
    event.preventDefault();
  });
}