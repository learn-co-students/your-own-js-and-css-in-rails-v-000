function init() {
	const hideThis = document.getElementById('hide_this')
	console.log('initializing')
	console.log(hideThis)
	hideThis.addEventListener('click', hideWhenClicked)
}

function hideWhenClicked() {
	console.log('I want to hide this element');
	this.style.display = 'none';
}

init()