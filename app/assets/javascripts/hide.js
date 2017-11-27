$( document ).ready(function() {
    hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').click(function(e) {
    $(e.target).hide();
  }
)};
