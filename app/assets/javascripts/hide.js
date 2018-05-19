function hideWhenClicked(event) {
  // make sure to bind to #hide_this
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked)
