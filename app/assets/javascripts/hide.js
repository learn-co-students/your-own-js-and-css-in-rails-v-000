function hideWhenClicked() {
  // $('#hide_this').hide();
  var $target = $(event.target);

  $target.hide();
}

$('#hide_this').click(hideWhenClicked)
