

// function hideWhenClicked() {
// 	let item = $("#hide_this");
// 	item.hide();

// }


function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);