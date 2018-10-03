//$(document).ready(function(){
  // function hideWhenClicked(){
  //   var $target = $(event.target.nodeName);
  //   console.log($target);
  //   $target.hide();
  // }

function hideWhenClicked(){
  $("a").hide();
}

$('#hide_this').click(hideWhenClicked);
