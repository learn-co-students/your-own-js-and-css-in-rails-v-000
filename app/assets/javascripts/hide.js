const hideWhenClicked = function(el) {

    el.addEventListener('click', function(event) {
        event.target.style.visibility = 'hidden';
    })
}

const el = document.getElementById('hide_this');
hideWhenClicked(el);

