// archivo: js/menu.js
"use strict";

const usuario = getCookie("usuario"); // Miro si un usuario ha hecho login

const enlacesPrivados = document.querySelectorAll(".enlacePrivado"); // Me ayudan a mostrar y ocultar los enlaces privados (👤 Usuario, Cerrar sesión)
const enlacesPublicos = document.querySelectorAll(".enlacePublico"); // Me ayudan a mostrar y ocultar los enlaces (Registro, Login)
const usuarioSesion = document.getElementById("usuarioSesion");
const cerrarSesion = document.getElementById("cerrarSesion");

// Este código se ejecutará nada más cargar la página
if (usuario) {   
    // Muestro los enlaces privados (👤 Usuario, Cerrar sesión) y oculto los públicos (Registro, Login)
    enlacesPrivados.forEach(enlace => enlace.style.display = "inline-block");
    enlacesPublicos.forEach(enlace => enlace.style.display = "none");
    usuarioSesion.innerHTML = `<a href="#">👤 ${usuario}</a>`;
} else {                                     
    // Muestro los enlaces públicos públicos (Registro, Login) y oculto los privados (👤 Usuario, Cerrar sesión)
    enlacesPrivados.forEach(enlace => enlace.style.display = "none");
    enlacesPublicos.forEach(enlace => enlace.style.display = "inline-block");
}

// Evento para cerrar sesión. ? evita error si no existe el botón (no estamos logueados)
cerrarSesion?.addEventListener("click", () => {
    deleteCookie("loggedIn");
    deleteCookie("usuario");
    location.reload();
});
