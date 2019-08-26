window.onload = initElement;

function initElement() {
  var x = document.getElementById('hide_this')

  x.onclick = hideWhenClicked;
}

function hideWhenClicked(event) {
  event.preventDefault()
  event.currentTarget.style.display = "none"
}
