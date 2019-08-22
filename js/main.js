var api ='AIzaSyDedCAYPFZHOPiV3nibvOMTrrJaL-LIcVQ';


      function initMap() {
      var latLng = {
        lat: 20.7029261,
        lng:-103.3916057
      };

         var map = new google.maps.Map(document.getElementById('mapa'), {
          'center': latLng,
          'zoom': 14,
          'mapTypeId': google.maps.MapTypeId.ROADMAP
        });

        var contenido = '<h2>GDLWEBCAMP</h2>'+
        '<p>Del 10 al 12 de Agosto</p>'+
        '<p>Visitanos!</p>';

    var informacion = new google.maps.InfoWindow({
   content: contenido
    });

        var marker = new google.maps.Marker({
          position:latLng,
          map: map,
          title: 'GDLWEBCAMP'
        });

        marker.addListener('click', function(){
informacion.open(map, marker);
});
      }

(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function(){

//campos datos usuario
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
// campos pases dias ---
var pase_dia = document.getElementById('pase_dia');
var pase_dosdias = document.getElementById('pase_dosdias');
var pase_completo = document.getElementById('pase_completo');
//botones y dvis//
var calcular =document.getElementById ('calcular');
var errorDiv =document.getElementById ('error');
var botonRegistro =document.getElementById ('btnRegistro');
var lista_productos =document.getElementById ('lista-productos');
var suma = document.getElementById('suma-total');

if(document.getElementById('calcular')) {



calcular.addEventListener ('click',calcularMontos);
pase_dia.addEventListener('blur', mostrarDias);
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);


nombre.addEventListener('blur', validarCampos);
apellido.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarMail);



function validarCampos() {
  if(this.value == '') {
    errorDiv.style.display = 'block';
    errorDiv.innerHTML = "campo obligatorio";
    this.style.border = '1px solid red';
    errorDiv.style.border = '1px solid red';
}
else {
  errorDiv.style.display = 'none';
  this.style.border = '1px solid #cccccc';
}
}

function validarMail(){
  if(this.value.indexOf("@")>-1) {
    errorDiv.style.display = 'none';
    this.style.border = '1px solid #cccccc';
  }
  else {
    errorDiv.style.display = 'block';
    errorDiv.innerHTML = "ingrese correo electronico";
    this.style.border = '1px solid red';
    errorDiv.style.border = '1px solid red';
  }
}

function calcularMontos(event){
  event.preventDefault();
  if(regalo.value === ''){
    alert("Debes elegir un regalo");
    regalo.focus();
  }

  else{
  var boletosDia = parseInt (pase_dia.value, 10) || 0,
      boleto2dias = parseInt (pase_dosdias.value, 10) || 0,
      boletoCompleto = parseInt (pase_completo.value, 10) || 0,
      cantCamisas = parseInt(camisa_evento.value, 10) || 0,
      cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

    var totalPagar = (boletosDia * 99) + (boleto2dias * 169) + (boletoCompleto * 229) + ((cantCamisas *29)*.90) + (cantEtiquetas *9);

    var listadoProductos = [];
if(boletosDia>=1){
  listadoProductos.push(boletosDia + 'Pase por dia');
}
if(boleto2dias >= 1) {
  listadoProductos.push(boleto2dias + 'Pase por 2 dias');
}

if(boletoCompleto >= 1) {
  listadoProductos.push(boletoCompleto + 'Pases Completos');
}
if(cantCamisas >= 1) {
  listadoProductos.push(cantCamisas + 'Camisas');
}
if(cantEtiquetas >=1 ) {
  listadoProductos.push(cantEtiquetas + 'Etiquetas');
}

lista_productos.style.display ="block";

lista_productos.innerHTML ='';

for (var i = 0; i< listadoProductos.length; i++){
  lista_productos.innerHTML +=listadoProductos[i] + '</br>';
}
suma.innerHTML = "$" + totalPagar.toFixed(2);

  }

}

function mostrarDias(){

  var boletosDia = parseInt (pase_dia.value, 10) || 0,
      boleto2dias = parseInt (pase_dosdias.value, 10) || 0,
      boletoCompleto = parseInt (pase_completo.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia >0) {
        diasElegidos.push('viernes');
      }
      if(boleto2dias >0) {
        diasElegidos.push('viernes', 'sabado');
      }
      if(boletoCompleto >0) {
        diasElegidos.push('viernes', 'sabado', 'domingo');
      }
      for(var i=0; i<diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }


}

}///
  });//DOM CONTENT LOADED
} )();


$(function() {


//menu fijo
var windowHeigth =$(window).height();
var barraAltura =$('.barra').innerHeight();

console.log(barraAltura);
$(window).scroll(function(){
  var scroll =$(window).scrollTop();

  //console.log(scroll);
  if(scroll >windowHeigth) {
    $('.barra').addClass('fixed');
    $('body').css({'margin-top':barraAltura+'px'});
  }
  else {
    $('.barra').removeClass('fixed');
    $('body').css({'margin-top':'0px'});
  }
});

//menu Responsive

$('.menu-movil').on('click', function(){
  $('.navegacion-principal').slideToggle();
});




//programa de conferencias
$('.programa-evento .info-curso:first').show();
$('.menu-programa a:first').addClass('activo');


$('.menu-programa  a').on('click', function() {
$('.menu-programa  a:first').removeClass('activo');
$(this).addClass('activo');
$('.ocultar').hide();
var enlace = $(this).attr('href');
$(enlace).fadeIn(1000);
return false;
});




//cuenta regresiva

$('.cuenta-regresiva').countdown('2018/08/10 09:00:00', function(event){
  $('#dias').html(event.strftime('%D'));
  $('#horas').html(event.strftime('%H'));
  $('#minutos').html(event.strftime('%M'));
  $('#segundos').html(event.strftime('%S'));
});
});
