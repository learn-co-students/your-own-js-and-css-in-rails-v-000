// In /app/assets/javascripts/ create the file hide.js
// Create the function hideWhenClicked that hides the element that was clicked.
// Make sure to bind to #hide_this
// Add hide.js to your JS manifest.
// Next add the following CSS:

function hideWhenClicked(){
  $('#hide_this').click(function(){
    $(this).hide();
  });
}