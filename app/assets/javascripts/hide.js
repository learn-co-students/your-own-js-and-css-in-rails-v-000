function hideWhenClicked(event) {
  let link = $(event.target)
  link.hide()
}

$("#hide_this").click(hideWhenClicked)
