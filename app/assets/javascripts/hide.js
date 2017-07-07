

function hideWhenClicked(){
  $(this).remove();
}

$(document).ready(function(){
  $('#hide_this').click(hideWhenClicked);
});
