
// Mine works just for that link
function hideWhenClicked() {
  $("#hide_this").hide();
}

// soln.
function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
