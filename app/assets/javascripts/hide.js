
$(document).ready(function(){
    const hide = $('#hide_this')[0];
    hide.addEventListener('click', hideWhenClicked.bind(hide));
})

function hideWhenClicked(el) {
    this.style.display = "none";
}