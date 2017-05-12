$("#hide_this").bind("click", function(){
    hideWhenClicked($(this));
});

function hideWhenClicked(el) {
    $(el).hide();
}