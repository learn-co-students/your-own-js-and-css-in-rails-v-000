function hideWhenClicked(e) {
  $(this).hide();
  e.preventDefault(); 
}

$('#hide_this').click(hideWhenClicked)