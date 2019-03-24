init();
function init(){
  document.querySelector("#hide_this").onclick = hideMe 
}

function hideMe(e){
   e.target.style.display = "none"
}