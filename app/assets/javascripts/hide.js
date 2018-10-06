function hideWhenClicked(hide) {
  $(hide.target).hide();
}

$("#hide_this").click(hideWhenClicked);
