function hideWhenClicked() {
  $("#hide_this").click(function(event){
     this.style.visibility = 'hidden';
   });
}


$(document).ready(function(){
   hideWhenClicked();
 });