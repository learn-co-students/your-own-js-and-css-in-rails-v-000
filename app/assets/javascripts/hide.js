$(document).ready(function(){
  hideWhenClicked('#hide_this');
});

function hideWhenClicked(element) {
  $(element).click(function() {
    $(element).hide();
  });
}
