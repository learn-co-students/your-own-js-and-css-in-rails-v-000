function hideWhenClicked(){
  $('#hide_this').on("click", function(event){
    $('#hide_this').toggle("slow");
  });
}

$(document).ready(function(){
  hideWhenClicked();
});