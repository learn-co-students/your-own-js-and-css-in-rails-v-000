$(document).ready(function(){

  
  const el = document.getElementById('hide_this')
  el.addEventListener('click', hideWhenClicked);
  
  function hideWhenClicked() {
    $(el).hide();
  }
  
});

