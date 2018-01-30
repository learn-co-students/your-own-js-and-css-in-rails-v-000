document.getElementById("hide_this").addEventListener("click", hideWhenClicked);

function hideWhenClicked() {
	var link = document.getElementById('hide_this');
	link.style.display = 'none';
}