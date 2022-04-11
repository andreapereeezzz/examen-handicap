

var botonReset = document.querySelector(".botonReset");
// reseteo el formulario
botonReset.addEventListener("click", function() {
  formulario.reset();
});

// porngo las funciones que tiene que hacer el botón de enviar

var botonEnvio = document.querySelector(".botonEnvio");

botonEnvio.addEventListener("click", function() {
  // variable para recoger la nota total
  var nota = 0;

  var nombre = formulario.nombre.value;
  var apellidos = formulario.apellidos.value;
  var jugador = formulario.jugador.value;
  var club = formulario.club.value;
  var licencia = formulario.licencia.value;

  if ((nombre == "") || (apellidos == "") || (jugador == "") || (club == "") || (licencia == "")) {

    alert("Hay un error en los datos personales, por favor compruébelo.");
    return false;
  }

  var dni = formulario.dni.value;
  var longitudDni = dni.length;

  if (longitudDni < 9) {
    alert("DNI incorrecto. Debe tener al menos 9 caracteres.");
    return false;
  }


  // valido las preguntas
  var pregunta1 = formulario.pregunta1.value;

  if (pregunta1 == "...") {
    alert("Te falta contestar la pregunta 1.");
    formulario.pregunta1.focus();
    return false;
  }
  if (pregunta1 == "Verdadero") {
    nota++;
  }

  var arrayPregunta2 = formulario.pregunta2;
  var respuestaEncontrada = false;
  var longitudArray = arrayPregunta2.length;
  var i = 0;
  var pregunta2;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta2[i].checked) {
      respuestaEncontrada = true;
      pregunta2 = arrayPregunta2[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 2.");
    arrayPregunta2[0].focus();
    return false;
  }
  if (pregunta2 == "si") {
    nota++;
  }

  var pregunta3 = formulario.pregunta3.value;

  if (pregunta3 == "") {
    alert("Te falta contestar la pregunta 3.");
    formulario.pregunta3.focus();
    return false;
  }
  // lo convierto a minúsculas
  pregunta3 = pregunta3.toLowerCase();

  //actualizo la nota
  if ((pregunta3 = "bunker") || (pregunta3 = "búnker")) {
    nota++;
  }

  var arrayPregunta4 = formulario.pregunta4;
  respuestaEncontrada = false;
  longitudArray = arrayPregunta4.length;
  i = 0;
  var pregunta4;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta4[i].checked) {
      respuestaEncontrada = true;
      pregunta4 = arrayPregunta4[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 4.");
    arrayPregunta4[0].focus();
    return false;
  }
  if (pregunta4 == "si") {
    nota++;
  }


  var pregunta5 = formulario.pregunta5.value;

  if (pregunta5 == "...") {
    alert("Te falta contestar la pregunta 5.");
    formulario.pregunta5.focus();
    return false;
  }
  if (pregunta5 == "Verdadero") {
    nota++;
  }

  var arrayPregunta6 = formulario.pregunta6;
  respuestaEncontrada = false;
  longitudArray = arrayPregunta4.length;
  i = 0;
  var pregunta6;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta6[i].checked) {
      respuestaEncontrada = true;
      pregunta6 = arrayPregunta6[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 6.");
    arrayPregunta6[0].focus();
    return false;
  }
  if (pregunta6 == "si") {
    nota++;
  }

  var arrayPregunta7 = formulario.pregunta7;
  respuestaEncontrada = false;
  longitudArray = arrayPregunta7.length;
  i = 0;
  var pregunta7;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta7[i].checked) {
      respuestaEncontrada = true;
      pregunta7 = arrayPregunta7[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 7.");
    arrayPregunta7[0].focus();
    return false;
  }
  if (pregunta7 == "si") {
    nota++;
  }

  var arrayPregunta8 = formulario.pregunta8;
  respuestaEncontrada = false;
  longitudArray = arrayPregunta8.length;
  i = 0;
  var pregunta8;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta8[i].checked) {
      respuestaEncontrada = true;
      pregunta8 = arrayPregunta8[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 8.");
    arrayPregunta8[0].focus();
    return false;
  }
  if (pregunta8 == "si") {
    nota++;
  }

  var arrayPregunta9 = formulario.pregunta9;
  respuestaEncontrada = false;
  longitudArray = arrayPregunta9.length;
  i = 0;
  var pregunta9;

  while ((respuestaEncontrada == false) && (i < longitudArray)) {
    if (arrayPregunta9[i].checked) {
      respuestaEncontrada = true;
      pregunta9 = arrayPregunta9[i].value;
    }
    i++;
  }
  if (respuestaEncontrada == false) {
    alert("Te falta contestar la pregunta 9.");
    arrayPregunta9[0].focus();
    return false;
  }
  if (pregunta9 == "si") {
    nota++;
  }

  var pregunta10 = formulario.pregunta10.value;

  if (pregunta10 == "") {
    alert("Te falta contestar la pregunta 10.");
    formulario.pregunta10.focus();
    return false;
  } else {
    nota++;
  }

var mensajeH2=document.querySelector("h2");
var fondo=document.querySelector(".preguntas");
var fondoSolu=document.querySelector(".solucion");
var aprobado = new Audio("sonido/acierto.mp3");
var suspenso = new Audio("sonido/error.mp3");

if(nota>=7){
aprobado.play();
mensajeH2.textContent="Enhorabuena, has sacado un " +nota+ " eres APTO. Ya puedes salir al campo";
fondoSolu.style.backgroundColor=" #55850c";
}else{
suspenso.play();
mensajeH2.textContent="Lo siento, has sacado un " +nota+ ", solo se permiten 3 fallos. Sigue estudiando";
fondo.style.backgroundColor="#F1948A";
fondoSolu.style.backgroundColor="#F1948A";
}

botonEnvio.disabled=true;
});
