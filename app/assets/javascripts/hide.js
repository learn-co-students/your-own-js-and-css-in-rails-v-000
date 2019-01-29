// function hideWhenClicked(event) {
//   let $target = $(event.target);
//   $target.hide();
// }
//
// $('#hide_this').click(hideWhenClicked);

const hideWhenClicked = $('#hide_this').click(function() {
  $('#hide_this').hide();
})
