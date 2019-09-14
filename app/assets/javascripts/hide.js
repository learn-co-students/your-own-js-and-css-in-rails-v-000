
//function hideWhenClicked(event) {
  //  $(event.target).hide();
  //}

  //$("hide_this").click(hideWhenClicked);

function hideWhenClicked(event) {
    var $target = $(event.target);
    $target.hide();
  }
  
  $('#hide_this').click(hideWhenClicked);