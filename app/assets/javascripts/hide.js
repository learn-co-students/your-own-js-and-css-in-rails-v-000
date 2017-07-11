// $("#hide_this").click(function() {
//   $(this).hide()
// })

function hideWhenClick(event) {
  var $target = $(event.target)
  $target.hide()
}

$("#hide_this").click(hideWhenClick)
