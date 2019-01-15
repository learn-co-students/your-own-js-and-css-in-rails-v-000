function hideWhenClicked(e) {
  e.target.style.visibility = 'hidden'
}
document.getElementById('hide_this').addEventListener('click', hideWhenClicked, false)
