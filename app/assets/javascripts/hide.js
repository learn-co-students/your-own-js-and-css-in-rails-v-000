function hideWhenClicked(event) {
  return event.target.innerHTML = '';
}

document.getElementById('hide_this').addEventListener('click', hideWhenClicked);
