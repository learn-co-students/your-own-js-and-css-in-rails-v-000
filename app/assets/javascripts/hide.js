function hideWhenClicked(event){
  $(event).on('click', function(){
    $(event).hide();
  })
}

hideWhenClicked('#hide_this');
