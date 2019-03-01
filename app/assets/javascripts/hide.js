function hideWhenClicked(e) {
  var $target = $(e.target)
  $target.hide()
}

$('#hide_this').click(hideWhenClicked);
