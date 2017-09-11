function hideWhenClicked(event) {
	var $el = $(event.target);
	$el.hide()
}

$('#hide_this').click(hideWhenClicked);