function hideWhenClicked(event) {
  var element = $(event.target)
  element.hide()
}
$('#hide_this').click(hideWhenClicked)