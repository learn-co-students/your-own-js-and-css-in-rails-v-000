

function hideWhenClicked() {
  $("#hide_this").bind("click", function (e) {
    alert("I've been clicked")
    $("#hide_this").hide()
  })
}

hideWhenClicked()
