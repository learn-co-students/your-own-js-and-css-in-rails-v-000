function hideWhenClicked(event) {
  const $hidden = $(event.target)
  $hidden.hide()
  debugger
}

$('#hide_this').click(hideWhenClicked)
