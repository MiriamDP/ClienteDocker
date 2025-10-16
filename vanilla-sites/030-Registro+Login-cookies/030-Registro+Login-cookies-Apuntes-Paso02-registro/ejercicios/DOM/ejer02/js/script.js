"use strict";

const btnClase = document.getElementById("btnClase");
const btnEtiqueta = document.getElementById("btnEtiqueta");
const btnClaseTitulo = document.getElementById("btnClaseTitulo");

function resaltarParrafos() {
    const parrafos = document.getElementsByClassName("texto");
    console.log(parrafos); // devuelve una colección (HTMLCollection)

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = "#ffffcc";
        parrafos[i].style.border = "1px solid #ccc";
        parrafos[i].style.padding = "5px";
    }
}

btnClase.onclick = resaltarParrafos;

function resaltarTitulos() {
    const titulos = document.getElementsByTagName("h3");
    console.log(titulos); // devuelve una colección (HTMLCollection)

    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "darkred";
        titulos[i].style.textDecoration = "underline";
    }
}

btnEtiqueta.onclick = resaltarTitulos;

function resaltarClaseTitulos() {
    const titulos = document.getElementsByClassName("titulo");
    console.log(titulos); // devuelve una colección (HTMLCollection)

    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "darkred";
        titulos[i].style.textDecoration = "underline";
    }

/*     
    titulos.forEach((t) => {
        console.log(t);
    }); 
    ERROR: Uncaught TypeError: titulos.forEach is not a function
    Esto se debe a que getElementsByClassName devuelve una colección (HTMLCollection), no un array.
    No permite el uso de foreach, pero sí de bucles for normales.
*/
}

btnClaseTitulo.onclick = resaltarClaseTitulos;