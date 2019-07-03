$(document).ready(function(){
    var element = document.getElementById("hide_this");
    element.addEventListener("click", function(e){
        event.preventDefault();
        hideWhenClicked(this);
    });
})


function hideWhenClicked(target) {
    target.style.display = "none";
}