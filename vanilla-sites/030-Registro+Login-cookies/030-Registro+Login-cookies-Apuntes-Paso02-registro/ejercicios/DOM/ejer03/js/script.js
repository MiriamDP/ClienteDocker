"use strict";

const btnSelector = document.getElementById("btnSelector");
const btnSelectorAll = document.getElementById("btnSelectorAll");
const resultado = document.getElementById("resultado");

btnSelector.addEventListener("click", () => {
    const primerParrafo = document.querySelector(".parrafo");
    console.log(primerParrafo); // devuelve un elemento

    resultado.innerHTML = `<p>querySelector() encontró: <b>${primerParrafo.textContent}</b></p>`;
});

btnSelectorAll.addEventListener("click", () => {
    const todosParrafos = document.querySelectorAll(".parrafo");
    console.log(todosParrafos); // devuelve un NodeList


    let salida = "<p>querySelectorAll() encontró:</p><ul>";
    todosParrafos.forEach((p) => {
        salida += `<li><b>${p.textContent}</b></li>`;
    });
    salida += "</ul>";

    resultado.innerHTML = salida;
});

/*
Observa la forma que tienen ambos métodos de referenciar los identificadores de las clases.
    const parrafos = document.getElementsByClassName("texto");
Devuelve una colección (HTMLCollection) de todos los elementos que tienen la clase "texto"
No permite el uso de foreach, pero sí de bucles for normales.
    const todosParrafos = document.querySelectorAll(".parrafo");
Devuelve un array (NodeList) de todos los elementos que tienen la clase "parrafo" 
Permite el uso de foreach.
*/