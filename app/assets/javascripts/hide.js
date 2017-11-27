function hideWhenClicked() { 
  $("a").bind("click", function () {
    $("#hide_this").hide();  
    });
}

$(document).ready(function() {
  hideWhenClicked();
})