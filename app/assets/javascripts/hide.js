function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide-this').click(hideWhenClicked);
