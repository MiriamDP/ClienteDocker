"use strict";

// Referencias DOM
const btnGuardar = document.getElementById("guardar");
const btnBorrar = document.getElementById("borrar");
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const imagen = document.getElementById("imagen");
const resultado = document.getElementById("resultado");

mostrarUsuariosIndexedDB(); 

// Limpiar resultado
function limpiarResultado() { resultado.innerHTML = ""; }

// Convierte File → Base64
function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const lector = new FileReader();
        lector.onload = () => resolve(lector.result);
        lector.onerror = () => reject(new Error("No se pudo leer el archivo"));
        lector.readAsDataURL(file);
    });
}

// Eventos
btnGuardar.addEventListener("click", async () => {
    const archivo = imagen.files[0];
    if (!archivo) { alert("Selecciona una imagen antes de guardar."); return; }

    try {
        const imagenBase64 = await fileToDataURL(archivo);
        const user = {
            nombre: nombre.value,
            usuario: usuario.value,
            password: password.value,
            imagen: imagenBase64
        };

        await guardarUsuarioIndexedDB(user);
        mostrarUsuariosIndexedDB();
    } catch (e) { console.error("Error al guardar la imagen:", e); }
});

btnBorrar.addEventListener("click", async () => {
    const clave = usuario.value;
    if (!clave) { alert("Introduce el usuario a borrar."); return; }
    await borrarUsuarioIndexedDB(clave);
});
