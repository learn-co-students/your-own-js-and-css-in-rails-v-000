function hideWhenClicked(e) {
  $(e.target).hide();
}

$(document).ready(function() {
  $('#hide_this').click(hideWhenClicked);
});
