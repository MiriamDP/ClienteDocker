"use strinct";

function validaLogin(clave, valor) {
    console.log(`Validando login: ${clave}=${valor}...`);
    if (getCookie(clave) === valor) {
        document.cookie = `usuario=${clave}; path=/; secure; samesite=Strict`;
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1500);
        return true;
    } 
    return false;
}

function setCookie(clave, valor) {
    console.log(`Creando cookie: ${clave}=${valor}...`);
    if (!getCookie(clave)) {
        document.cookie = `${clave}=${valor}; path=/; secure; samesite=Strict`;
        return true;
    } 
    return false;
}

function getCookie(clave) {
    console.log(`Leyendo cookie: ${clave}...`);
    if (document.cookie) {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [claveCookie, valorCookie] = cookie.split("=");
            if (clave === claveCookie) return valorCookie;   
        }
    } 
    return false;
};

// Borrar la cookie 'usuario'
function deleteCookie(clave) {
    console.log(`Borrando cookie: ${clave}...`);
    document.cookie = `${clave}=; max-age=0; path=/`;
};
