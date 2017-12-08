function hideWhenClicked(event) {
    $(event.target).hide()
    //equals event.target.style.display = 'none'
}

$('#hide_this').click(hideWhenClicked);
