function hideWhenClicked(feature) {
  const $target = $(feature.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
