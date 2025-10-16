"use strict";

let db;

function abrirBaseDatos() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("UsuariosDB", 1);

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains("usuarios")) {
                const store = db.createObjectStore("usuarios", { keyPath: "usuario" });
                store.createIndex("nombre", "nombre", { unique: false });
            }
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            console.log("✅ Base de datos abierta correctamente.");
            resolve(db);
        };

        request.onerror = (event) => {
            console.error("❌ Error al abrir la base de datos:", event.target.error);
            reject(event.target.error);
        };
    });
}

/* Explicación para tus alumnos
1. indexedDB.open("UsuariosDB", 1) → abre la base de datos UsuariosDB versión 1, o la crea si no existe.
2. onupgradeneeded → se ejecuta solo la primera vez o cuando subimos la versión de la DB.
  - Aquí creamos un object store llamado usuarios.
  - keyPath: "usuario" → la clave primaria será el campo usuario de cada objeto.
  - Creamos un índice sobre nombre para poder buscarlo si queremos.
3. onsuccess → la DB está lista para usarla.
4. onerror → control básico de errores. */
