function hideWhenClicked(event) {
  let target = $(event.target);
  target.hide();
}
$("#hide_this").click(hideWhenClicked);