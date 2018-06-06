function hideThis() {
  element.style.display= "none";
};

const element = document.getElementById("hide_this");
element.addEventListener("click", hideThis);
