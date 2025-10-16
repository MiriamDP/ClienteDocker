// archivo: js/registro.js
"use strict";


    const formulario = document.getElementById("formRegistro");
    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!usuario || !password) {
            mensaje.textContent = "Por favor, rellena todos los campos.";
            return;
        }

        // Guardar cookie: usuario=contraseña
        document.cookie = `${usuario}=${password}; path=/`;
        console.log(document.cookie);

        // Mostrar mensaje de confirmación
        mensaje.textContent = `✅ Usuario "${usuario}" registrado correctamente.`;

        // Opcional: redireccionar a login después de 2 segundos
        /*
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
        */
    });

