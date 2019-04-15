$(document).ready(function() {
  hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').on('click', function(e) {
    $(this).hide();
    e.preventDefault();
  })
};
