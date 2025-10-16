"use strict";
console.log("Estoy en cookies...");

function guardaCookieMaxAge(clave, valor) {
    console.log(`Guardando cookie (max-age): ${clave}=${valor}...`);
    document.cookie = `${clave}=${valor}; max-age=5; path=/; secure; samesite=Strict`;
};

function guardaCookieExpires(clave, valor) {
    console.log(`Guardando cookie (expires): ${clave}=${valor}...`);
    const fechaCaducidad = new Date(Date.now() + 5000); // 5 segundos
    document.cookie = `${clave}=${valor}; expires=${fechaCaducidad.toUTCString()} path=/; secure; samesite=Strict`;
};

function guardaCookieNoCaduca(clave, valor) {
    console.log(`Guardando cookie: ${clave}=${valor}...`);
    document.cookie = `${clave}=${valor}; path=/; secure; samesite=Strict`;
};

// Leer todas las cookies y mostrar si no está caducada 
function leeCookies() {
    console.log("Leyendo cookies...");
    resultado.innerHTML = ""; 
    const cookies = document.cookie.split("; ");
    let mensaje = "📦 Todas las cookies actuales:<br />";
    if (!document.cookie) {
        return mensaje + "⚠️ No hay cookies guardadas.";
    } else {
        for (const c of cookies) {
            const [clave, valor] = c.split("=");
            if (clave) {
                mensaje += `🍪 <b>${clave}</b> = ${valor}<br>`;
            }
        }
    }
    return mensaje;
};

// Borrar la cookie 'usuario'
function borraCookie(clave) {
    console.log(`Borrando cookie: ${clave}...`);
    document.cookie = `${clave}=; max-age=0; path=/`;
};











/* function guardaCookie(clave, valor) {
    // Sintaxis básica: clave=valor
    console.log("Guardo cookie hora local...");
    const fechaCaducidad = new Date(Date.now() + 5000); // 5 segundos
    document.cookie = `${clave}=${valor}; 
                   expires=${fechaCaducidad.toUTCString()}; 
                   path=/; 
                   secure; 
                   samesite=Strict`;    
    console.log("Expira en hora local:", fechaCaducidad.toString());
    resultado.innerHTML = "✅ Cookie guardada: <code>usuario=pepe</code>";
}; */
