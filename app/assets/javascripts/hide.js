function hideWhenClicked(event) {
  var target = $(event.target);
  target.hide();
}

$('#hide_this').click(hideWhenClicked);
// Above is what the lab means when it says
// Make sure to bind `hideWhenClicked` to `#hidethis`
