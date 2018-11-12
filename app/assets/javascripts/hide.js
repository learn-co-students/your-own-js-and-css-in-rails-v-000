function hideWhenClicked() {
    $(event.target).hide();
}

$('#hide_this').click(hideWhenClicked);