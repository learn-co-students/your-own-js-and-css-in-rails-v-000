function hideWhenClicked(event) {
  var $gonnaHide = $(event.target);
  $gonnaHide.hide();
}
$('#hide_this').click(hideWhenClicked);
