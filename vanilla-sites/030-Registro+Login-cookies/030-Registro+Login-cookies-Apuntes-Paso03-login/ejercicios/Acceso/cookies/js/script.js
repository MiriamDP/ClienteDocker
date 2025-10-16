"use strict";

// Manejo básico de cookies
const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardarCookieMaxAge = document.getElementById("guardarCookieMaxAge");
const guardarCookieExpires = document.getElementById("guardarCookieExpires");
const guardarCookieNoCaduca = document.getElementById("guardarCookieNoCaduca");
const leerCookies = document.getElementById("leerCookies");
const leerCookie = document.getElementById("leerCookie");
const borrarCookie = document.getElementById("borrarCookie");
const resultado = document.getElementById("resultado");

guardarCookieMaxAge.addEventListener("click", () => {
    // Sintaxis básica: clave=valor
    guardaCookieMaxAge(clave.value, valor.value);
    resultado.innerHTML = leeCookies();
});

guardarCookieExpires.addEventListener("click", () => {
    // Sintaxis básica: clave=valor
    guardaCookieExpires(clave.value, valor.value);
    resultado.innerHTML = leeCookies();
});

guardarCookieNoCaduca.addEventListener("click", () => {
    // Sintaxis básica: clave=valor
    guardaCookieNoCaduca(clave.value, valor.value);
    resultado.innerHTML = leeCookies();
});

leerCookies.addEventListener("click", () => {
    resultado.innerHTML = leeCookies();
});

leerCookie.addEventListener("click", () => {
    resultado.innerHTML = leeCookie(clave.value);
});

borrarCookie.addEventListener("click", () => {
    borraCookie(clave.value);
    resultado.innerHTML = leeCookies();
});