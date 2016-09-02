
$(document).ready(function() {
   hideWhenClicked();
})


function hideWhenClicked(){
  $('#hide_this').click(function(){
    $(this).hide();
  })
}