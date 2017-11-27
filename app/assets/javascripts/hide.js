$('document').ready(function(){
  hideWhenClicked();
});

function hideWhenClicked(){
  $('#hide_this').on("click",function(event){
    $('#hide_this').hide();
    event.preventDefault();
  });
}