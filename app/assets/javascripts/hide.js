function hideWhenClicked (event) {
  var target = $(event.target);
  if (target.is("#hide_this") ) {
    target.hide();
  }
}

$('#hide_this').click(hideWhenClicked);
