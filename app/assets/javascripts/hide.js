function hideWhenClicked(e) {
  const $link = $(e.target);
  $link.hide();
};

$('#hide_this').click(hideWhenClicked);
