
function hideWhenClicked() {
  // body...
  $('#hide_this').click(function() {
    $(this).hide();
  })
}

$(document).ready(function(){
  hideWhenClicked();
})