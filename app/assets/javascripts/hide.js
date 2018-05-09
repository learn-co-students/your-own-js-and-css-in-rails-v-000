/*function init() {
  hideWhenClicked();
}

function hideWhenClicked() {
  document.getElementById("hide_this").addEventListener("click", function() {
    this.innerHTML = `<!--${this.innerHTML}-->`;
  })
}
*/

function hideWhenClicked() {
  el = document.getElementById("hide_this");
  el.innerHTML = "";
}