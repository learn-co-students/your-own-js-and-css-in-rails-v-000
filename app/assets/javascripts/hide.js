function hideWhenClicked ()
  var hideMe = $( "#hide_this" );
  debugger
  return hideMe.addEventListener("click", function() {
      hideMe.hide().bind(hideMe)
  })
}
