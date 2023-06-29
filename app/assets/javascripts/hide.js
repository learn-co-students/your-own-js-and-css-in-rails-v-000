function hideWhenClicked(){
  $('#hide_this').click(function(test){
    $(this).hide()
  })
}

$(document).ready(hideWhenClicked)