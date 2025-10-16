"use strict";

// 1. Capturamos los elementos del DOM
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// 2. Asignamos una función al evento "click"
boton.onclick = mostrar;

// 3. Definimos la función que se ejecuta al pulsar el botón
function mostrar() {
    resultado.innerHTML = "¡Has pulsado el botón correctamente!";
}
