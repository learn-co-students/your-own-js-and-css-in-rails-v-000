function hideWhenClicked() {
  $('#hide_this').on('click', function(e) {
    $(this).hide();
  });
}

$('document').ready(hideWhenClicked);
