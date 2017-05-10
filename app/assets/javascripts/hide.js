function hideWhenClicked() {
  var a = document.getElementById('hide_this')
  function hide() {
    this.style.display = "none"
  }
  a.addEventListener('click', hide)
}

hideWhenClicked()
