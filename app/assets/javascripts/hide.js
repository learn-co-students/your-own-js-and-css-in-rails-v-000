$(document).ready(function() {
  hideWhenClicked(); 
}); 

function hideWhenClicked(element) {
  $("#hide_this").click(function() {
    $('#hide_this').hide(); 
  });  
}
