function hideWhenClicked() {
	$("#hide_this").on("click", function(event){
		console.log("click!");
		$(event.target).hide();
	});
}

$(document).ready(function(){
	hideWhenClicked();
});