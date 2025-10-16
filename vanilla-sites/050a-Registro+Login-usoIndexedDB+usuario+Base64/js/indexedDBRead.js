"use strict";

async function mostrarUsuariosIndexedDB() {
    try {
        limpiarResultado();
        if (!db) await abrirBaseDatos();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction("usuarios", "readonly");
            const store = transaction.objectStore("usuarios");
            const requestLeer = store.getAll();

            requestLeer.onsuccess = () => {
                const usuarios = requestLeer.result;

                if (usuarios.length === 0) {
                    resultado.innerHTML = "<p>⚠️ No hay usuarios guardados.</p>";
                    resolve([]);
                    return;
                }

                resultado.innerHTML = "<h3>Usuarios guardados:</h3>";
                for (const user of usuarios) {
                    resultado.innerHTML += `
                    <div style="margin-bottom:10px;">
                        ${user.imagen ? `<img src="${user.imagen}" width="30" style="border-radius:8px;">` : "👤"} 
                        <b>${user.nombre}</b> (${user.usuario})<br>
                    </div>`;
                }

                resolve(usuarios);
            };

            requestLeer.onerror = (event) => {
                console.error("❌ Error al leer usuarios:", event.target.error);
                reject(event.target.error);
            };
        });

    } catch (e) {
        console.error("❌ Error en mostrarUsuariosIndexedDB:", e);
    }
}

/* Explicación 
1. transaction("usuarios", "readonly") → iniciamos una transacción de solo lectura.
2. objectStore("usuarios") → accedemos al store donde están los usuarios.
3. store.getAll() → devuelve todos los objetos guardados en el store.
4. onsuccess → ejecuta el código cuando IndexedDB termina de leer los datos.
5. request.result → contiene el array de usuarios.
6. Recorrimos usuarios y mostramos nombre, usuario e imagen exactamente como hacíamos en localStorage.
7. onsuccess y onerror → manejo de éxito y errores. */
