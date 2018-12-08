function hideWhenClicked() {
  document.getElementById("hide_this").style.visibility = "hidden";  //can also use .style.display = "none"
}

//learn's solution:
//function hideWhenClicked(event) {
//var $target = $(event.target);
//$target.hide();
//}

//$('hide_this').click(hideWhenClicked);      ** can call the function here instead of putting hideWhenClicked() in link
