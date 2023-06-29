// function hideWhenClicked(){
//         document.getElementById("hide_this").style.visibility = "hidden";
//     }


  //
  // function hideWhenClicked(event) {
  //     var $target = $(event.target)
  //     $target.hide();
  //
  //     }
  //
  //     $('#hide_this').click(hideWhenClicked);

      function hideWhenClicked(event) {
          event.target.style.visibility = "hidden";
      }
        document.getElementById("hide_this").addEventListener("click", hideWhenClicked);
