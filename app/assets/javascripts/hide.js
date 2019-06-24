function hideWhenClick (event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClick);
