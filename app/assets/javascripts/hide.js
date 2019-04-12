function hideWhenClicked(event) {
  $target = $(event.target)
  $target.hide()
}
$("#hide_this").click(hideWhenClicked)
