function hideWhenClicked(event) {
   debugger;
   const $target = $(event.target);
   $target.hide();
 }

 $('#hide_this').click(hideWhenClicked);
