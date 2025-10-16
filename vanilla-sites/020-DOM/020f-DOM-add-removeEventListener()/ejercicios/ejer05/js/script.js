"use strict"; // Modo estricto activado

// Captura de elementos
const btnCrear = document.getElementById("btnCrear");
const btnEliminar = document.getElementById("btnEliminar");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

// Crear un nuevo <li> y añadirlo al final de la lista
btnCrear.addEventListener("click", () => {
    const nuevoElemento = document.createElement("li"); // Creamos un nuevo <li>
    nuevoElemento.textContent = "Nuevo elemento creado"; // Le damos contenido
    lista.appendChild(nuevoElemento); // Lo añadimos al final de la lista

    resultado.innerHTML = "<p>✅ Elemento creado y añadido a la lista.</p>";
});

// Eliminar el último <li> si hay más de 0
btnEliminar.addEventListener("click", () => {
    if (lista.children.length > 0) {
        const ultimo = lista.lastElementChild; // Seleccionamos el último <li>
        lista.removeChild(ultimo); // Lo eliminamos
        resultado.innerHTML = "<p>🗑️ Último elemento eliminado.</p>";
    } else {
        resultado.innerHTML = "<p>⚠️ No hay elementos que eliminar.</p>";
    }
});
