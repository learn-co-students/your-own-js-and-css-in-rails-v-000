function hideWhenClicked(event) {
  // let hide = document.getElementById("hide_this");
  // if (hide.style.display === "none") {
  //     hide.style.display = "block";
  // } else {
  //     hide.style.display = "none";
  // }
  $(event.target).hide()
}

$('#hide_this').click(hideWhenClicked);
