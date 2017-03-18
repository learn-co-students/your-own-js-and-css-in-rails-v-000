function hideWhenClicked(e){
	$(this).hide();
}

$(document).ready(function(){
	$('#hide_this').on("click", hideWhenClicked)
})
