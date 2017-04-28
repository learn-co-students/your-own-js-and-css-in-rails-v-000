function hideWhenClicked() {
  $("#hide_this").click(function(){
    $(this).css("display", "none")
  });
}

$(document).ready(function() {
  hideWhenClicked();
});
