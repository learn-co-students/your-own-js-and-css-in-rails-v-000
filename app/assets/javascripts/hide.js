const to_hide = document.getElementById('hide_this')

to_hide.addEventListener('click', function hideWhenClicked(element) {
  document.getElementById('hide_this').style.display = 'none';
});

// Alternative
// function hideWhenClicked(event) {
//   $(event.target).hide();
// }
//
// $('#hide_this').click(hideWhenClicked)
