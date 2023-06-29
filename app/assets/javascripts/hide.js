function hideWhenClicked(){
  $('#hide_this').on("click", function(event){
    $('#hide_this').toggle();
    event.preventDefault();
  });
}

$(document).ready(function(){
  hideWhenClicked();
});