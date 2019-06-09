function hideWhenClicked() {
  el = document.getElementById("hide_this");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}