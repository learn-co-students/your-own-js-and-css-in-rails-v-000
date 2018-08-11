function hideWhenClicked(element) {
  const target = $(element.target);
  target.hide();
}

$("#hide_this").click(hideWhenClicked);
