
//this works as well - but wasn't passing tests
// function hideWhenClicked(){
//  let  item = document.getElementById('hide_this');
//  console.log(item);
//  item.innerHTML = "";
//  // item.remove();
//

function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}


$('#hide_this').click(hideWhenClicked);
