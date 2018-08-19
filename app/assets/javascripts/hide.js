// My Version:
//function hidesWhenClicked() {
//   let el =
//   document.getElementById('hide_this')
//
//   el.innerHTML = ""
// }

function hidesWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hidesWhenClicked);
