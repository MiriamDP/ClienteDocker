"use strict";

// 1. Capturamos los elementos del DOM
const botonClase = document.getElementById("btnClase");
const botonEtiqueta = document.getElementById("btnEtiqueta");

// 2. Asignamos funciones a los botones
botonClase.onclick = resaltarParrafos;
botonEtiqueta.onclick = resaltarTitulos;

// 3. Función para resaltar los párrafos usando getElementsByClassName()
function resaltarParrafos() {
    const parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = "#ffffcc";
        parrafos[i].style.border = "1px solid #ccc";
        parrafos[i].style.padding = "5px";
    }
}

// 4. Función para resaltar los títulos usando getElementsByTagName()
function resaltarTitulos() {
    const titulos = document.getElementsByTagName("h3");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "darkred";
        titulos[i].style.textDecoration = "underline";
    }
}
