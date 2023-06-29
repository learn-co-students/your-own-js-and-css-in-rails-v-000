$(document).ready(function() {
	// add class with jquery
	// $('a').addClass('error');
	// $('body').addClass('cool-background');
	$('a').click(hideWhenClicked);
})


function hideWhenClicked() {
	$("#hide_this").hide();
}
