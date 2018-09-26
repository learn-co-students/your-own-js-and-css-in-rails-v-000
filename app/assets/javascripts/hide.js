function hideWhenClicked() {
  const ele = document.getElementById("hide_this");
  ele.addEventListener("click", function() {
    ele.style.display = "none";
  });
}

hideWhenClicked();
