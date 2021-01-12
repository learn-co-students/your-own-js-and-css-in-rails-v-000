$('#hide_this').click(hideWhenClicked)


function hideWhenClicked(event){
  console.log(event)
  $(event.target).hide();
}
