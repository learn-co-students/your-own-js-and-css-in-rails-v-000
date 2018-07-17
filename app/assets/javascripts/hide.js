// $('#hide_this').bind("click", function hideWhenClicked(e){
//   e.preventDefault()
//   $(`#hide_this`).remove()
// })

$('#hide_this').click(
  function hideWhenClicked(event) {
    var $target = $(event.target)
    $target.hide()
  }
)
