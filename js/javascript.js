
var nav_options = document.querySelector('.nav_options');

window.addEventListener('load',function(){

  nav_options.addEventListener('click',function(e){

    e.preventDefault();
    var current_element = document.querySelector('.current');
    var new_element = e.target;
    current_element.removeAttribute('class');
    new_element.setAttribute('class','current');

  },false);
  
},false);
