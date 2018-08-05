function hideWhenClicked(event) {
  toHide = $(event.target);
  toHide.hide();
}

$('#hide_this').click(hideWhenClicked)



// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }
