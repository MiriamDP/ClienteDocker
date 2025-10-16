// archivo: js/auth.js
"use strict";

function setCookie(clave, valor) {
    if (!getCookie(clave)) {
        document.cookie = `${clave}=${valor}; path=/; secure; samesite=Strict`;
        return true;
    }
    return false;
};

// Leer una cookie concreta por su nombre
function getCookie(clave) {
    const cookies = document.cookie.split("; ");
    for (const c of cookies) {
        const [usuario, password] = c.split("=");
        if (usuario === clave) return password;
    }
    return false;
}

// Borrar una cookie caducándola
function deleteCookie(nombre) {
    document.cookie = `${nombre}=; max-age=0; path=/`;
}
