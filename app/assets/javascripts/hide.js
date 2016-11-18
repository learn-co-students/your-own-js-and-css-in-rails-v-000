function hideWhenClicked() {
  $('#hide_this').on('click', function(event) {
    $('#hide_this').hide();
  });
}

$(document).ready(function() {
  hideWhenClicked();
});
