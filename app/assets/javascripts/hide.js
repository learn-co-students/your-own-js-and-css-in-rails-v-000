function hideWhenClicked(event) {
    let x = document.getElementById("hide_this");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}