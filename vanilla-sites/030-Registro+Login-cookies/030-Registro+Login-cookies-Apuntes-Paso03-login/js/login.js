// archivo: js/login.js
"use strict";

const formulario = document.getElementById("formLogin");
const mensaje = document.getElementById("mensaje");

function credencialCorrecta(usuario, password) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [clave, valor] = cookie.split("=");
        if (clave === usuario && valor === password) {
            return true;
        }
    }
    return false;
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validar campos
    if (!usuario || !password) {
        mensaje.textContent = "Por favor, rellena todos los campos.";
        return;
    }
    
    // Validar credenciales
    if (credencialCorrecta(usuario, password)) {
        document.cookie = `usuario=${usuario}; path=/`; // Guardo el usuario que ha hecho login

        mensaje.textContent = `✅ Bienvenido, ${usuario}. Redirigiendo...`;
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
    }
});

