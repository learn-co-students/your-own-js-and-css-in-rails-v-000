function hideWhenClicked(event) {
  $(event.target).hide();
}

$('#hide_this').on("click", hideWhenClicked);
