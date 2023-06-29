$(document).ready(function() {
  hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').on("click", function(event){
    $(this).hide();
  });
}
