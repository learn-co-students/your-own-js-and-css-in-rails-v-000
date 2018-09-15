function hideWhenClicked() {
  console.log("hiding!");
  document.getElementById("hide_this").style.display = "none";
}

// instead of adding hideWhenClicked() call in html, can do the following here
//$('#hide_this').click(hideWhenClicked);
