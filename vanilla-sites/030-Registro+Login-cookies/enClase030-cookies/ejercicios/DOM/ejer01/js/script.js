"use strict";

const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

function mostrar() {
    resultado.innerHTML = "¡Has pulsado el botón correctamente!";
}

boton.onclick = mostrar;
