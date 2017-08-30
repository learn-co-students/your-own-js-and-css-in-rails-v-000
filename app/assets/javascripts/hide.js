function hideWhenClicked(event) {
  var $t = $(event.target);
  $t.hide()
}

$('#hide_this').click(hideWhenClicked);
