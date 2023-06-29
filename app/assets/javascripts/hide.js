$(function() {
  hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').on("click", function() {
    $(this).hide();
  });
}

// The solution uses the event object (event) received by the event handling
// function (hideWhenClicked()) as part of the solution.
// See: https://learn.jquery.com/events/event-basics/#inside-the-event-handler-function

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }
//
// $('#hide_this').click(hideWhenClicked);
