function hideWhenClicked(event) {
  const $x = $(event.target);
  $x.hide();
}
$('#hide_this').click(hideWhenClicked);
