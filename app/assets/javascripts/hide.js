var hideThis = function() {
 
  $('#hide_this').click(function(e) {
    
    $('#hide_this').hide()
    e.preventDefault()
    
  })

}




$(document).ready(function(){

 hideThis()
});
