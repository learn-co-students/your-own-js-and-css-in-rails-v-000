function hideWhenClicked(event) {
	// $variable usually denotes the variables contains a Jquery object
	var $target = $(event.target);
	$target.hide();
}

$("#hide_this").click(hideWhenClicked);
