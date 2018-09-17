
function hideWhenClicked(event) {
  debugger
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
