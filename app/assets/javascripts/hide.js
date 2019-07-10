function hideWhenClicked() {
    document.getElementById("hide_this").innerHTML = "";    
}

function bindHideThis() {
    var el = document.getElementById("hide_this");
    el.addEventListener("click", hideWhenClicked());
}


   