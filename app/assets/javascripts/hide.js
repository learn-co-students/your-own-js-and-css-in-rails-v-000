function hideWhenClicked() {
  $("#hide_this").click(function(event){
    $("a").hide();
    event.preventDefault();
  });
}

$(document).ready(function(){
  hideWhenClicked();
})
