function hideWhenClicked(event) {
    var $elem = $(event.target);
    $elem.hide();
  }
   $('#hide_this').click(hideWhenClicked);