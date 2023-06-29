
$('document').ready(function hideWhenClicked(){
  document.addEventListener("click", function(){
    document.getElementById("hide_this").style.visibility = "hidden";
  });
});