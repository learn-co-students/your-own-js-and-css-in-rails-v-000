// Hides link succesfully on browser but won't pass spec
$(document).ready(
  hideWhenClicked = () => {
  $('#hide_this').click(() => {
    $('#hide_this').hide()
  })
})

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }

// $('#hide_this').click(hideWhenClicked);