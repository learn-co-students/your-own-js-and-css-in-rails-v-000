const element = $('#hide_this')

function hideWhenClicked() {
  element.hide()
}

$(document).ready(function() {
  element.on('click', hideWhenClicked)
})
