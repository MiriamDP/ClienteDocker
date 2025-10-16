"use strict"; // Modo estricto recomendado

// Capturamos los botones y el div de resultado
const btnSelector = document.getElementById("btnSelector");
const btnSelectorAll = document.getElementById("btnSelectorAll");
const resultado = document.getElementById("resultado");

// Ejemplo con querySelector()
btnSelector.addEventListener("click", () => {
    // Selecciona el PRIMER elemento que cumpla con el selector CSS
    const primerParrafo = document.querySelector(".parrafo");

    // Mostramos el texto en el resultado
    resultado.innerHTML = `<p>querySelector() encontró: <b>${primerParrafo.textContent}</b></p>`;
});

// Ejemplo con querySelectorAll()
btnSelectorAll.addEventListener("click", () => {
    // Selecciona TODOS los elementos que cumplan el selector CSS
    const todosParrafos = document.querySelectorAll(".parrafo");

    // Recorremos la NodeList con forEach
    let salida = "<p>querySelectorAll() encontró:</p><ul>";
    todosParrafos.forEach((p) => {
        salida += `<li><b>${p.textContent}</b></li>`;
    });
    salida += "</ul>";

    resultado.innerHTML = salida;
});
