$(document).ready(function () {
  const link = document.getElementById('hide_this');
  link.addEventListener('click', hideWhenClicked)
});

function hideWhenClicked() {
  const link = document.getElementById('hide_this');
  link.style.display = "none";
}
