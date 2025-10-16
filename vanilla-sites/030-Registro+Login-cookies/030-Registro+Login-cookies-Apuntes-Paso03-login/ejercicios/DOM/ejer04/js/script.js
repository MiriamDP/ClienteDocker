"use strict";

const btnLeer = document.getElementById("btnLeer");
const btnModificar = document.getElementById("btnModificar");
const caja = document.getElementById("caja");
const parrafo = caja.querySelector(".parrafo");
const resultado = document.getElementById("resultado");

// Formas de leer el contenido de un elemento
btnLeer.addEventListener("click", () => {
    const texto1 = parrafo.textContent; // obtenermos el contenido de las etiquetas, SOLO, y no se aplica el formato HTML
    const texto2 = parrafo.innerText; // obtenermos el contenido que no esté oculto y no se aplica el formato HTML
    const texto3 = parrafo.innerHTML; // obtenermos el contenido que no esté oculto y se respeta el formato

    resultado.innerHTML = `
    <p><b>textContent:</b> ${texto1}</p>
    <p><b>innerText:</b> ${texto2}</p>
    <p><b>innerHTML:</b> ${texto3}</p>`;
});

// Formas de modificar el contenido de un elemento
btnModificar.addEventListener("click", () => {
    parrafo.innerHTML = `Texto <mark>modificado</mark> usando <code>innerHTML</code>`;
    resultado.innerHTML = `<p>Contenido modificado correctamente.</p>`;
/*     resultado.innerText = `Texto <mark>modificado</mark> usando <code>innerHTML</code>`; */ // no puede modificar el contenido
    resultado.textContent = `Contenido modificado correctamente.`;
});