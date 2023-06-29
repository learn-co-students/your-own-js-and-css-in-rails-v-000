


// function hideWhenClicked(){
//   document.getElementById('hide_this').style.visibility = "hidden";
// }
//

function hideWhenClicked(event) {
	event.target.style.visibility = 'hidden';
}

$('#hide_this').click(hideWhenClicked);
