function hideWhenClicked(event) {
  //document.getElementById("hide_this").style.display = "none";
  $target = $(event.target)
  $target.hide()
}
$("#hide_this").click(hideWhenClicked);
