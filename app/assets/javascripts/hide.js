function hideWhenClicked(event) {
  event.target.style.visibility = "hidden"
}

document.getElementById("hide_this").addEventListener('click', hideWhenClicked, false)
