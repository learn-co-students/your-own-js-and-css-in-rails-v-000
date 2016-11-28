function hideWhenClicked(event) {
  // bind to #hide_this
  // $('#hide_this').hide();
  // ^^ this works but the way below can hide more than just #hide_this
  $(event.target).hide();
}

$('#hide_this').click(hideWhenClicked);