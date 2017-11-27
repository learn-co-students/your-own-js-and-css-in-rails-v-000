function hideWhenClicked(){
  $('#hide_this').click(function(){
    debugger;
    $('#hide_this').hide();
  });
}

$(document).ready(function(){
  hideWhenClicked();
});