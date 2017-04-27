function hideWhenClicked(event) {
  const $value = $(event.target)
    $value.hide();

}
$("#hide_this").click(hideWhenClicked);
