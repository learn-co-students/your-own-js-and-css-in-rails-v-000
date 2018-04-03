function hideWhenClicked(element) {
  var $target = $(event.target); 
  $target.hide(); 
}

$('#hide_this').click(hideWhenClicked);