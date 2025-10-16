"use strict"; // Siempre activado

// Capturas
const actual = document.getElementById("elementoActual");
const verPadre = document.getElementById("verPadre");
const verHijos = document.getElementById("verHijos");
const verAnterior = document.getElementById("verAnterior");
const verSiguiente = document.getElementById("verSiguiente");
const verAnteriorElemento = document.getElementById("verAnteriorElemento");
const verSiguienteElemento = document.getElementById("verSiguienteElemento");
const resultado = document.getElementById("resultado");

// ▶️ Mostrar el nodo padre
verPadre.addEventListener("click", () => {
  const padre = actual.parentNode;
  resultado.innerHTML = `<p>📂 Nodo padre: <code>${padre.nodeName}</code> con ID: "${padre.id}"</p>`;
});

// ▶️ Mostrar todos los hijos del padre
verHijos.addEventListener("click", () => {
  const hijos = actual.parentNode.childNodes;
  let lista = "<p>👶 Hijos del padre (incluye nodos de texto):</p><ul>";
  hijos.forEach((hijo) => {
    lista += `<li><code>${hijo.nodeName}</code> (tipo: ${hijo.nodeType})</li>`;
  });
  lista += "</ul>";
  resultado.innerHTML = lista;
});

// ▶️ Mostrar hermano anterior
verAnterior.addEventListener("click", () => {
  const anterior = actual.previousSibling;
  if (anterior && anterior.nodeType === 1) {
    resultado.innerHTML = `<p>⬅️ Hermano anterior: <code>${anterior.textContent}</code></p>`;
  } else {
    resultado.innerHTML = `<p>⚠️ No hay hermano anterior o es un nodo de texto.</p>`;
  }
});

// ▶️ Mostrar hermano siguiente
verSiguiente.addEventListener("click", () => {
  const siguiente = actual.nextSibling;
  if (siguiente && siguiente.nodeType === 1) {
    resultado.innerHTML = `<p>➡️ Hermano siguiente: <code>${siguiente.textContent}</code></p>`;
  } else {
    resultado.innerHTML = `<p>⚠️ No hay hermano siguiente o es un nodo de texto.</p>`;
  }
});

// ▶️ Mostrar hermano anterior (elemento)
verAnteriorElemento.addEventListener("click", () => {
  const anteriorElemento = actual.previousElementSibling;
  if (anteriorElemento) {
    resultado.innerHTML = `<p>⬅️ Hermano anterior: <code>${anteriorElemento.textContent}</code></p>`;
  } else {
    resultado.innerHTML = `<p>⚠️ No hay hermano anterior o es un nodo de texto.</p>`;
  }
});

// ▶️ Mostrar hermano siguiente (elemento)
verSiguienteElemento.addEventListener("click", () => {
  const siguienteElemento = actual.nextElementSibling;
  if (siguienteElemento) {
    resultado.innerHTML = `<p>➡️ Hermano siguiente: <code>${siguienteElemento.textContent}</code></p>`;
  } else {
    resultado.innerHTML = `<p>⚠️ No hay hermano siguiente o es un nodo de texto.</p>`;
  }
});
