$(document).ready(function(){
 	hideWhenClicked();
 })


function hideWhenClicked() {
  $('#hide_this').click(function(e){
    $('#hide_this').hide();
    e.preventDefault();

  })

}
