var elm = document.getElementById('hide_this'); // var for capybara
elm.addEventListener('click', hideWhenClicked);

function hideWhenClicked () {
  var elm = document.getElementById('hide_this'); // var for capybara

  if (elm.style.display === "none") {
    elm.display.style = "block";
  } else {
    elm.style.display = "none";
  }
}
