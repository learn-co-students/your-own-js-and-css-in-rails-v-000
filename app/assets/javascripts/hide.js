function hideWhenClicked(e){
  var $target = $(event.target);
    $target.hide();
}

$("#hide_this").on('click', hideWhenClicked);
