function hideWhenClicked() {
  $(document).click(function() {
    $("#hide_this").hide();
  });
}

$(document).ready(function() {
  hideWhenClicked();
});
