//
// function hideWhenClicked(event) {
//   let target = $(event.target);
//   target.hide();
// }

$('#hide_this').click(hideWhenClicked);


function hideWhenClicked(){
  document.getElementById('hide_this').style.visibility = "hidden";
}
