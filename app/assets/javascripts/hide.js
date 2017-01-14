$(document).ready(function(){
	hideWhenClicked();
})




function hideWhenClicked() {
	$('#hide_this').click(function(e){
		debugger
		$('#hide_this').hide();
		e.preventDefault();
	})
}

