function hideWhenClicked(e) {
    const ele = $(e.target)
    ele.hide();
}

$('#hide_this').click(hideWhenClicked)