
$(document).ready(function(){

$(function(){
  $('.jobs').find('img').each(function(){
    $(this).animate({
      opacity : 1
    },1000);
  });
}());


  //Evento para movimiento del menu automaticamente
  $('.nav_options').find('a').on('click',function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    if ( $(window).scrollTop() == 0 ) {
      top = top - 135;

    } else {
      top = top - 65;
    }
    $('html, body').animate({
      scrollTop:top
    },2000);
  });

//ANIMACION PARA BARRA DE NAVEGACION
  $(window).scroll(function(){
    var nav_actual = $('a[class="current"]');
    var altura = $(this).scrollTop();

    // console.log(nav_actual);

    if( altura > 75){

      $("#quien_soy").addClass('nav-fixed');

      if ( altura > 68 && altura < 587 ) {
        nav_actual.removeClass('current');
        $('[href="#who_content"]').addClass('current');
      } else if ( altura > 587 && altura < 1284 ){
        nav_actual.removeClass('current');
        $('[href="#experiencias"]').addClass('current');
      } else if ( altura > 1284 && altura < 1870 ){
        nav_actual.removeClass('current');
        $('[href="#conocimientos"]').addClass('current');
        $('.know_pic').each().addClass('.know_pic');
      } else if ( altura > 1870 ) {
        nav_actual.removeClass('current');
        $('[href="#contacto"]').addClass('current');
      }

    } else {
      $('#quien_soy').removeClass('nav-fixed');
    }
  });

  //Evento para botones leer mas...
  $('.boton').on('click',function(e){
    e.preventDefault();
    var elem = $(this).parent().find('div');
    var alto = $(this).parent().find('div').height();
    if(alto == 400){
      $(this).html('Ocultar');
      elem.animate({height : '600px'},1000);
    } else {
      $(this).html('Leer más..');
      elem.animate({height : '400px'},1000);
    }
  });


  $('.know_pic').on('mouseover click',function(){
    $(this).next().addClass('show_experience');
  });

  $('.info_experience').on(
    'mouseout click',
    function(){
    $(this).removeClass('show_experience');
  });

  $('.nav_socials').find('img').on('mouseover',function(){
    var social = $(this).attr('id');
    $(this).attr('src','images/social/'+social+'.png');
  });

  $('.nav_socials').find('img').on('mouseout',function(){
    var social = $(this).attr('id');
    $(this).attr('src','images/social/'+social+'_hover.png');
  });

});

$('#enviar_correo').submit(function(e){
  e.preventDefault();
  var data = $(this).serialize();
  $.ajax({
    type:'POST',
    url:'correo.php',
    data:data,
    timeout:10000,
    beforeSend:function(){
      $('.form_message').html('<img src="images/loading.png" alt="loading">Enviando correo...');
    },
    success:function(data){
      $('#enviar_correo')[0].reset();
      $('.form_message').html(data);
    },
    fail:function(){
      $('.form_message').html('Error al enviar el correo, intente de nuevo.');
    }
  });
});

//FUNCION PARA MOSTRAR EL MENU
$('.menu').on('click',function(){
  var nav = $(this).next();
  var altura = nav.height();
  if (altura == 0) {
    nav.addClass('show_menu');
  } else {
    nav.removeClass('show_menu');
  }
});
