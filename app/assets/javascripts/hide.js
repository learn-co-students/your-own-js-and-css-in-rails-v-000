function hideWhenClicked(event) {
    const target = $(event.target)
    target.hide()
  }
  // event.target references the clicked element
  
  $('#hide_this').click(hideWhenClicked);


  // code doesn't work below
// function hideWhenClicked(e){
//     e.target.style.visibility = 'hidden';
// }

// var a = $('#hide-this');

// a.addEventListener('click', hideWhenClicked, false);