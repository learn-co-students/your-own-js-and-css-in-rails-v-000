function hideWhenClicked(event){
  debugger
var locationVariable = $(event.target);
  locationVariable.hide();
}

$('#hide_this').click(hideWhenClicked);