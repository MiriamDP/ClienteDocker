"use strict";

const btnCrear = document.getElementById("btnCrear");
const btnEliminar = document.getElementById("btnEliminar");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

btnCrear.addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Nuevo elemento ${lista.children.length + 1};`;
    lista.appendChild(nuevoElemento);

    resultado.textContent = `Elemento: ${lista.children.length} añadido correctamente.`;
});

btnEliminar.addEventListener("click", () => {
    if (lista.children.length > 0) {
        const ultimo = lista.lastElementChild;
        lista.removeChild(ultimo);

        resultado.textContent = `Elemento: ${lista.children.length + 1} eliminado correctamente.`;
    } else {
        resultado.textContent = "No hay elementos para eliminar.";
    }
});