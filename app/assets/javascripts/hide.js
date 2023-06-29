// $(document).ready( function() {
//   $('#hide_this').click( function() {
//     $('#hide_this').hide()
//   })
// })

function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
