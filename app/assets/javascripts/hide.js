function hideWhenClicked(){
    const element = document.getElementById("hide_this")

    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
