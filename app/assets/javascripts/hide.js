function hideWhenClicked() {
  $('#hide_this').on('click', function() {
    $(this).hide()
  })
}

$(document).ready(function(e) {
  hideWhenClicked();
})