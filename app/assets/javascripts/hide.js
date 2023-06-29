function hideWhenClicked() {
  const link = document.getElementById("hide_this");
  link.addEventListener("click", function(){
    link.style.visibility = "hidden";
  });
}

hideWhenClicked();
