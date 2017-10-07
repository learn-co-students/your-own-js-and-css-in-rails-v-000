'use strict'
function hideWhenClicked(e) {
  const $target = $(e.target)
  $target.hide()
}
$('#hide_this').click(hideWhenClicked)
