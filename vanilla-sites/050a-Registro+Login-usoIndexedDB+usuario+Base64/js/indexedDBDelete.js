"use strict";

async function borrarUsuarioIndexedDB(usuarioClave) {
    try {

        if (!db) await abrirBaseDatos();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction("usuarios", "readwrite");
            const store = transaction.objectStore("usuarios");
            const requestBorrar = store.delete(usuarioClave);

            requestBorrar.onsuccess = () => {
                console.log(`✅ Usuario '${usuarioClave}' borrado correctamente.`);
                mostrarUsuariosIndexedDB(); // actualizamos la vista
                resolve(true);
            };

            requestBorrar.onerror = (event) => {
                console.error("❌ Error al borrar usuario:", event.target.error);
                reject(event.target.error);
            };
        });

    } catch (e) {
        console.error("❌ Error en borrarUsuarioIndexedDB:", e);
    }
}

/* Explicación paso a paso para los alumnos
1. transaction("usuarios", "readwrite") → transacción de lectura/escritura.
2. store.delete(usuarioClave) → elimina el usuario cuya clave primaria (usuario) coincide con usuarioClave.
3. onsuccess → confirmamos el borrado y actualizamos la lista de usuarios llamando a mostrarUsuariosIndexedDB().
4. onerror → capturamos cualquier error durante el borrado.
5. Con esto, los tres botones principales (Guardar, Leer, Borrar) ya tienen su equivalente funcional en IndexedDB. */