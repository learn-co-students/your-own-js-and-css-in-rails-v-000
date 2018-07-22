document.getElementById("hide_this").addEventListener('click', hideWhenClicked);

function hideWhenClicked(event) {
  event.target.classList.add("hidden");
}
