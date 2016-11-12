function hideWhenClicked() {
  $('#hide_this').on("click", function() {
    debugger;
    $(this).hide();
  });
}

$(document).ready(function() {
  hideWhenClicked();
})
