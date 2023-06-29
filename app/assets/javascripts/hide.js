function hideWhenClicked(event) {
  var theTarget = event.target;
  theTarget.style.visibility = 'hidden';
}

$('#hide_this').click(hideWhenClicked);
