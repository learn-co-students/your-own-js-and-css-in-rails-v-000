
$('#hide_this').on('click',hideWhenClicked);

function hideWhenClicked(event) {
  const src = $(event.target)

  // src.text('')
  src.hide();
}
