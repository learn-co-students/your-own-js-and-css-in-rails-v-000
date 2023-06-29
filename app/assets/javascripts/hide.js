// In /app/assets/javascripts/ create the file hide.js
// Create the function hideWhenClicked that hides the element that was clicked.
// Make sure to bind to #hide_this
// Add hide.js to your JS manifest.

function hideWhenClicked() {
  $("#hide_this").hide();
  // document.getElementById("hide_this").style.display = "none";
}

// $("#hide_this").click(hideWhenClicked);

document.getElementById("hide_this").addEventListener("click", hideWhenClicked);
