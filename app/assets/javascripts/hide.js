
  document.addEventListener('click', hideWhenClicked);

  function hideWhenClicked(event) {
  	var e = event.target
      var f = document.getElementById(e.id);
      f.style.display = "none"

  }
  
