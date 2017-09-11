function hideWhenClicked() {
  var el = document.getElementById('hide_this')
  function hide() {
    el.style.display = 'none'
  }
  el.addEventListener('click', hide)
}
hideWhenClicked()
