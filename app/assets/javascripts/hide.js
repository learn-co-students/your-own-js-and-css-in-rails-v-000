function hideWhenClicked(event) {
  event.target.style.visibility = 'hidden';
}

$('#hide_this').click(hideWhenClicked);