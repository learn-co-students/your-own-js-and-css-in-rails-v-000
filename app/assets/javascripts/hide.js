$(document).ready(function(){
	document.addEventListener('click', hideWhenClicked)
})
function hideWhenClicked(){
	$('#hide_this').css('visibility', 'hidden')
}