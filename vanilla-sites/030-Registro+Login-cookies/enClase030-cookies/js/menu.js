"use strict";

const usuario = getCookie("usuario");

const enlacePublico = document.querySelectorAll(".enlacePublico");
const enlacePrivado = document.querySelectorAll(".enlacePrivado");

const usuarioSesion = document.getElementById("usuarioSesion");
const cerrarSesion = document.getElementById("cerrarSesion");

if (usuario) {
  console.log(`Usuario en sesión: ${usuario}`);
  enlacePublico.forEach((elemento) => (elemento.style.display = "none"));
  enlacePrivado.forEach((elemento) => (elemento.style.display = "block"));
  usuarioSesion.innerHTML = `<a href="#">👤 ${usuario}</a>`;
} else {
  enlacePublico.forEach((elemento) => (elemento.style.display = "block"));
  enlacePrivado.forEach((elemento) => (elemento.style.display = "none"));
}

cerrarSesion.addEventListener("click", () => {
  deleteCookie("usuario");
  window.location.reload();
});

