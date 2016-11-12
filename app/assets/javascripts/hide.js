function hideWhenClicked(e){
  targetElement = e.target;
  $(targetElement).hide();
}

$("#hide_this").click(hideWhenClicked);
