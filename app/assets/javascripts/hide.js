function hideWhenClicked(event) {
  let currentTarget = event.currentTarget;
  $(currentTarget).hide();
};

$('#hide_this').click(hideWhenClicked);
