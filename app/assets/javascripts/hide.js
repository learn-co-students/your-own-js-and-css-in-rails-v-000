function hideWhenClicked() {
  var link = document.getElementById("hide_this");
  if (link.style.display === "none") {
      link.style.display = "block";
  } else {
      link.style.display = "none";
  }
}
