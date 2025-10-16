"use strict";

const usuario = getCookie("usuario");

const enlacesPrivados = document.querySelectorAll(".privado");
const enlacesPublicos = document.querySelectorAll(".publico");
const elementoUsuario = document.getElementById("usuario");
const cerrarSesion = document.getElementById("cerrarSesion");

if (usuario) {
    // Mostrar enlaces privados y públicos
    enlacesPrivados.forEach(el => el.style.display = "inline-block");
    enlacesPublicos.forEach(el => el.style.display = "none");
    elementoUsuario.innerHTML = `<a href="#">👤 ${usuario}</a>`;
} else {
    // Mostrar solo enlaces públicos
    enlacesPrivados.forEach(el => el.style.display = "none");
    enlacesPublicos.forEach(el => el.style.display = "inline-block");
}
