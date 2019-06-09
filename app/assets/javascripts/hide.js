function hideWhenClicked(event) {
  var $xyz = $(event.target)
  $xyz.hide()
}

$('#hide_this').click(hideWhenClicked)