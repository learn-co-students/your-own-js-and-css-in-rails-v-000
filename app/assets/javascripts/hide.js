'use strict'
function hideWhenClicked() {
	$('a#hide_this').on('click', function(event) {
		$('a#hide_this').hide();
		event.preventDefault();
	});
}

$(document).ready(function() {
	hideWhenClicked();
});