"use strict"; // Activamos modo estricto

// Capturas iniciales
const btnLeer = document.getElementById("btnLeer");
const btnModificar = document.getElementById("btnModificar");
const caja = document.getElementById("caja");
const parrafo = caja.querySelector(".parrafo");
const resultado = document.getElementById("resultado");

// ▶️ Leer contenido usando las tres propiedades
btnLeer.addEventListener("click", () => {
    const texto1 = parrafo.textContent;
    const texto2 = parrafo.innerText;
    const texto3 = parrafo.innerHTML;

    resultado.innerHTML = `
    <p><b>textContent:</b> ${texto1}</p>
    <p><b>innerText:</b> ${texto2}</p>
    <p><b>innerHTML:</b> ${texto3}</p>
  `;
});

// ▶️ Modificar el contenido usando innerHTML
btnModificar.addEventListener("click", () => {
    parrafo.innerHTML = `Texto <mark>modificado</mark> usando <code>innerHTML</code>.`;
    resultado.innerHTML = `<p>Contenido modificado correctamente.</p>`;
});
