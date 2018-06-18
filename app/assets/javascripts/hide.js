//function hideWhenClicked() {
//  $('#hide_this').hide();
//};

function hideWhenClicked(event) {
  $target = $(event.target);
  $target.hide();
};

function showWhenClicked(event) {
  $('#hide_this').show();
};

$('#hide_this').click(hideWhenClicked);
$('#show_this').click(showWhenClicked);
