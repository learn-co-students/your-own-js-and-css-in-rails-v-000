$("#hide_this").click(hideWhenClicked)

function hideWhenClicked(e){
  const target = $(e.target)
   target.hide();
}
