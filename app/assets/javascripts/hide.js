function hideWhenClicked () {
    var x = document.getElementById('hide_this');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}

// function myFunction() {
//     var x = document.getElementById('myDIV');
//     if (x.style.visibility === 'hidden') {
//       x.style.visibility = 'visible';
//     } else {
//       x.style.visibility = 'hidden';
//     }
//   }