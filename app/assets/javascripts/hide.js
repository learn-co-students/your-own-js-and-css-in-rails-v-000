function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$("#hide_this").on('click', hideWhenClicked )