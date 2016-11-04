function hideWhenClicked() {
  $("#hide_this").click(function(event) {
    $(this).hide();
  })
}

$(document).ready(function(){
  hideWhenClicked();
})