"use strict";
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