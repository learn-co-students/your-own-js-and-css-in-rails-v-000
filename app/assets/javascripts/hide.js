function hideWhenClicked(event)
{
    var $target = $(event.target);
    console.log(event.target);
    $target.hide();

}
$('#hide_this').click(hideWhenClicked);
//document.getElementById('hide_this').addEventListener('click', hideWhenClicked);