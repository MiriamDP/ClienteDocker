"use strict";

const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

btnLogin.addEventListener('click', function () {

    const usuario = document.getElementById("usuario").value.trim();;
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
        mensaje.textContent = "Por favor, rellena todos los campos.";
        return;
    }

    if (!validaLogin(usuario, password)) {
        mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
        return;
    } 
    mensaje.textContent = `✅ Bienvenido, ${usuario}. Redirigiendo...`;
});
