$(document).ready(function() {
  $('#hide_this').click(hideWhenClicked)
})

function hideWhenClicked(element) {
  element.toElement.style.display = "none";
}
