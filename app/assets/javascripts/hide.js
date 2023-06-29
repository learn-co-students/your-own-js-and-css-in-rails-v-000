$(document).ready(function(){
  $("#hide_this").click(hideWhenClicked)
})

function hideWhenClicked(e){
  e.toElement.style.display = "none";
  // console.log($(this))
  // console.log(e.toElement)
  // $(this).toEventhide()
}
