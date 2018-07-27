function hideWhenClicked(element) {
  var $target = $(element.target)
  $target.hide()
}

$('#hide_this').click(hideWhenClicked)