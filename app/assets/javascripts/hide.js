function hideWhenClicked(secret){
    var $target = $(secret.target);
    $target.hide();
}

$('#hide_this').click(hideWhenClicked);