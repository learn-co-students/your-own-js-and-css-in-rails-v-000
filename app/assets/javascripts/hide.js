function hideWhenClick() {
  $("#hide_this").on("click", function(event) {
    $(this).hide();
    event.preventDefault();
  })
}

$(document).ready(function() {
  hideWhenClick()
})