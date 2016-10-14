function hideWhenClicked() {
  $('#hide_this').click(function () {
    $(this).fadeOut();
  })
}

$(document).ready(function () {
  hideWhenClicked();
});
