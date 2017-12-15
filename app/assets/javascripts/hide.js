function hideWhenClicked() {
  var hide_this = document.getElementById('hide_this');
  var body = document.getElementsByTagName('body')[0];
  body.removeChild(hide_this);
}