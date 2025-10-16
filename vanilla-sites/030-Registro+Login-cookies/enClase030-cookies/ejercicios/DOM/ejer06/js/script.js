"use strict";

const btnActivarEscucha = document.getElementById("btnActivarEscucha");
const btnDesactivarEscucha = document.getElementById("btnDesactivarEscucha");
const zona = document.getElementById("zona");
const resultado = document.getElementById("resultado");

function cambiarFondo() {
    zona.style.backgroundColor = "lightblue";
    resultado.textContent = "Has pasado el ratón por encima del párrafo.";
}

btnActivarEscucha.addEventListener("click", () => {
    zona.addEventListener("mouseover", cambiarFondo);
    resultado.innerHTML = "<p>Evento activado. Pasa el ratón por el párrafo.</p>";

});

btnDesactivarEscucha.addEventListener("click", () => {
    zona.removeEventListener("mouseover", cambiarFondo);
    zona.style.backgroundColor = ""; // Quitamos el color
    resultado.innerHTML = "<p>Evento desactivado. Ya no se aplicará el color.</p>";

});
