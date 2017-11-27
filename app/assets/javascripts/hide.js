function hideWhenClicked(){
  $('#hide_this').hide();
}

$(document).ready(function(){
  $('#hide_this').click(function(){
    hideWhenClicked();
  });
});
