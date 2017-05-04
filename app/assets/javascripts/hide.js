function hideWhenClicked(element) {
  $(element.target).hide()
}

$('#hide_this').click(hideWhenClicked)
