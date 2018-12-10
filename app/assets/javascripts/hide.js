function hideWhenClicked(event) {
  const $target = $(event.target)
  $target.hide()
}

$('#hide_this').click(hideWhenClicked)
