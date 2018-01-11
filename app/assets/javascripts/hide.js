$(document).ready(function() {
  hideWhenClicked();
})

function hideWhenClicked() {
  const link = document.getElementById('hide_this');
  link.addEventListener('click', function() { this.remove(); });
}
