// function hideWhenClicked() {
//  const x = document.getElementByClassName("error");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }	
// }


// $('#hide_this').click(hideWhenClicked(event){
// 	event.preventDefault();
// 	$(this).hide();
// });

function hideWhenClicked(event) {
  const $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);