function hideWhenClicked(event){
 console.log(event);
 var $target = $(event.target);
 $target.hide();
}

$('#hide_this').click(hideWhenClicked);
