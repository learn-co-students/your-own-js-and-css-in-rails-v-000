function hideWhenClicked() {
  const toggledLink = document.getElementById("hide_this");

  if (toggledLink.style.display === "none") {
    toggledLink.style.display = "block";
  } else {
    toggledLink.style.display = "none";
  }
}
