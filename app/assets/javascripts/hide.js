function hideWhenClicked(){
  $('#hide_this').on('click', function(e){
    e.preventDefault();
    $('#hide_this').hide();
  });
}

$(document).ready(function(){
   hideWhenClicked();
 });