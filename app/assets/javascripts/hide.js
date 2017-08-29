function hideWhenClicked(e){
  var element = $(e.target);
  element.hide();
}

$('#hide_this').click(hideWhenClicked);
