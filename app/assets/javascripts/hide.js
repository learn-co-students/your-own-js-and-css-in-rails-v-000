var link = document.getElementById('hide_this') 

link.addEventListener('click', hideWhenClicked)

function hideWhenClicked(event) {
  var elm = event.target
  elm.style.display = 'none'
}

// document.getElementById('hide_this').addEventListener('click', hideWhenClicked);

//  function hideWhenClicked() {
// 	document.getElementById("hide_this").style.display = "none";
// }