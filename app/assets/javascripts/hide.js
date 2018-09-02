
function hideWhenClicked(e) {
  // let $target = $(event.target);
  e.target.style.visibility = "hidden";
 }

 $('#hide_this').click(hideWhenClicked);

