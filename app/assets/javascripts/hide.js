
$(document).ready(function(){
  hideWhenClicked();
})

function hideWhenClicked() {
  // hides the element that was clicked
  $("#hide_this").on("click", function () {
    $(this).hide();
  });
}
