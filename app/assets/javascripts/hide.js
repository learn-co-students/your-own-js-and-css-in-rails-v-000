$(document).ready(function() {
  hideWhenClicked();
})


function hideWhenClicked() {
  // hides the element that was clicked
  $('#hide_this').click(function(e) {
    $('#hide_this').hide();
    e.preventDefault();
  });
}
