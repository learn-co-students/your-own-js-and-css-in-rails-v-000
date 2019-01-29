// document.querySelector('#hide_this').innerHTML = '';

var hide_this = document.querySelector('#hide_this');

// var hide = (e) => { 
//     hide_this.innerHTML = '';
// }

function hideWhenClicked() {
	document.getElementById("hide_this").style.display = "none";
} 

hide_this.addEventListener('click', hide);