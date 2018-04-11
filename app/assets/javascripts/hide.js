function hideWhenClicked(e) {
  $(e.target).hide();
}

$("#hide_this").click(hideWhenClicked);
