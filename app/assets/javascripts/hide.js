$(document).ready(function(){
  hideWhenClicked();
});

function hideWhenClicked() {
  // debugger
  $('#hide_this').click(function() {
    $('#hide_this').hide();
  });
}