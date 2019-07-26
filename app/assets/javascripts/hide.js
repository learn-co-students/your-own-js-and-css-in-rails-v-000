function hideWhenClicked() {
    var x = document.getElementById("hide_this");
    console.log(x)
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var hideThis = document.getElementById("hide_this");

hideThis.addEventListener('click', hideWhenClicked); 