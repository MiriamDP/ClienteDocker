"use strict";

async function guardarUsuarioIndexedDB(user) {
    try {

        if (!db) await abrirBaseDatos();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction("usuarios", "readwrite");
            const store = transaction.objectStore("usuarios");
            const requestEscribir = store.put(user); // Inserta o actualiza

            requestEscribir.onsuccess = () => {
                console.log(`✅ Usuario '${user.usuario}' guardado correctamente.`);
                mostrarUsuariosIndexedDB(); // actualizamos la vista
                resolve(true);
            };

            requestEscribir.onerror = (event) => {
                console.error("❌ Error al guardar usuario:", event.target.error);
                reject(event.target.error);
            };
        });

    } catch (e) {
        console.error("❌ Error en guardarUsuarioIndexedDB:", e);
    }
}

/* Explicación paso a paso 
1. transaction("usuarios", "readwrite") → iniciamos una transacción con permisos de lectura/escritura sobre el object store usuarios.
2. objectStore("usuarios") → obtenemos el store donde se guardarán los usuarios.
3. store.put(user) → guarda el objeto user.
  - Si la clave usuario ya existe, lo sobrescribe.
  - Si no existe, lo crea.
4. onsuccess → el usuario se ha guardado correctamente.
5. onerror → captura errores al guardar.
6. Usamos async/await y Promise para que sea fácil de integrar con tu evento btnGuardar.addEventListener. */

