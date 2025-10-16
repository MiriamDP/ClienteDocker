// archivo: js/registro.js
"use strict";

const formulario = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validar campos
    if (!usuario || !password) {
        mensaje.textContent = "Por favor, rellena todos los campos.";
        return;
    }

    // Guardar cookie: usuario=password
    setCookie(usuario, password) ? mensaje.textContent = `✅ Usuario ${usuario} registrado correctamente. Redirigiendo a login...` : mensaje.textContent = "❌ El usuario ya existe. Por favor, elige otro.";

    // Opcional: redireccionar a login después de 2 segundos
    /*
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
    */
});

