"use strict";

// Mostrar y ocultar elementos
const mostrarBtn = document.getElementById("mostrarBtn");
const ocultarBtn = document.getElementById("ocultarBtn");
const mensaje = document.getElementById("mensaje");

console.log("Estoy en mensaje...");
// Al pulsar "Mostrar mensaje"
mostrarBtn.addEventListener("click", () => {
    console.log("Muestro mensaje...");
    mensaje.style.display = "block"; // Muestra el div (estaba en display: none)
});

// Al pulsar "Ocultar mensaje"
ocultarBtn.addEventListener("click", () => {
    console.log("Oculto mensaje...");
    mensaje.style.display = "none"; // Oculta el div
});