// click event from id hide_this
$('#hide_this').click(hideWhenClicked);

function hideWhenClicked(event) {
  // jquery's hide method
  $(event.target).hide();
}

/* Alternate
// https://www.w3schools.com/jquery/eff_hide.asp
// $("a").click(function() {
//     $("#hide_this").hide();
});
*/
