function hideWhenClicked() {
  $("#hide_this").on("click", function() {
    $("a").hide();
  });
}


$(document).ready(function() {
  hideWhenClicked();
});
