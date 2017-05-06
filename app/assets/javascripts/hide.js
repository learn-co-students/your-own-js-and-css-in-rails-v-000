function hideWhenClicked(click) {
    var element = $(click.target)
    element.hide()
}

$("#hide_this").click(hideWhenClicked);