$('document').ready(
	function() {
		hideWhenClicked();
	}
)


function hideWhenClicked(){
	$("#hide-this").click(function(){
		$("#hide-this").hide();
	});
}