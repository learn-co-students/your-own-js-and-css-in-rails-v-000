function hideWhenClicked(){
  $('#hide_this').click(function(event){
    //debugger
    $(event.currentTarget).hide();
  });
}

hideWhenClicked();
