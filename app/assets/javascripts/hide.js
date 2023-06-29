$(document).ready(function hideWhenClicked(){
    $('#hide_this').click(function(){
      $(this).slideToggle('fast', 'linear');
    });
});