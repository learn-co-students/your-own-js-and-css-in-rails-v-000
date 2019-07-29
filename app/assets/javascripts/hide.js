function hideWhenClicked(){
  document.getElementById('hide_this').onclick = function(){
    document.getElementById('hide_this').innerHTML = ''
  }
}
hideWhenClicked()
