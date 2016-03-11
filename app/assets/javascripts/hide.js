function hideWhenClicked() {
  $('#hide_this').on('click', function (event) {
    $(this).hide()
    event.preventDefault();
  });
}

$(document).ready(function () {
  hideWhenClicked();
})
