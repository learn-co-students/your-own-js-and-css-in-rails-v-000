'use strict'

function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
// $('#hide_this').on('click', hideWhenClicked)
