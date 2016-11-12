function hideWhenClicked() {
  $('#hide_this').click(function() {
    debugger;
    $(this).hide();
  });
}

$(document).ready(function() {
  hideWhenClicked;
})
