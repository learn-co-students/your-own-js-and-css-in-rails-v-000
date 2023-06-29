document.getElementById('hide_this')
  .addEventListener('click', hideWhenClicked)

function hideWhenClicked(feature) {
  document.getElementById('hide_this').style.display = 'none';
}
