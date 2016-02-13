$(document).ready(function() {
  hideWhenClicked();
});



function hideWhenClicked() {
  $('a#hide_this').on("click", function(event){
    $(this).hide();
    event.preventDefault();
  });
}
