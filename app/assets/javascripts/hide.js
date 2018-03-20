function hideWhenClicked(link) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);