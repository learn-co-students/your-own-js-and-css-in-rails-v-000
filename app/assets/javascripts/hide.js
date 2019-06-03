function hideWhenClicked(el) {
  el.addEventListener(click, function{
    this.style.display = "none";
  })
}