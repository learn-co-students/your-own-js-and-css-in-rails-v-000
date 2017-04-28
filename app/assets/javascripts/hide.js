$(document).ready(function(){

  console.log('I am ready')

  // var el = $("#hide_this")[0]
  // // debugger
  hideWhenClicked.bind(this)

})


function hideWhenClicked(){
  console.log(this)
  this.hide()
}
