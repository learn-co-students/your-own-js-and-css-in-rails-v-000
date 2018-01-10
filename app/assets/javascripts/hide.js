function hideWhenClicked(event) {
  alert("I'm gonna hide now");
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
