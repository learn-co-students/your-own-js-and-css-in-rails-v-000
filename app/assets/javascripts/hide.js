function hideWhenClicked(event) {
  let $x = $(event.target);
  $x.hide();
}
$('#hide_this').click(hideWhenClicked);
