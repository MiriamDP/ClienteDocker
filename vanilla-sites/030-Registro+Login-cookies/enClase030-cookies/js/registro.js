"use strict";

const formRegistro = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");

formRegistro.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();;
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
        mensaje.textContent = "Por favor, rellena todos los campos.";
        return;
    }

    if (!setCookie(usuario, password)) {
        mensaje.textContent = "❌ El usuario ya existe. Por favor, elige otro.";
        return;
    } 
    mensaje.textContent = `✅ Usuario ${usuario} registrado correctamente.`;
}); 

// Ejemplo del contenido de la variable event
/* document.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Coordenadas del clic: X=${x}, Y=${y}`);
}); */
