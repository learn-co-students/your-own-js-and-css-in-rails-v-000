$(document).ready(function() {
  hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').on('click', function() {
    $(this).hide();
  });
}

// function hideWhenClicked() {
//   $('#hide_this').click(function() {
//     $(this).hide();
//   });
// }