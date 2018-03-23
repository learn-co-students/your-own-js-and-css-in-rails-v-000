function hideWhenClicked(event){
  return (this.style.visibility = "visible" ? this.style.visibility='hidden' :this.style.visibility='visible')
}

document.getElementById('hide_this').addEventListener('click', hideWhenClicked, {once: false})