"use strict";

let db;

function abrirBaseDatos() { //las funciones que se llaman con await implementan promesas
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("UsuariosDB", 1); //1 indica la version, guarda el manejador de la base de datos, 1 podria ser una variable

        request.onupgradeneeded = (event) => { //compara la version interna con la de request, sino existe la bd la version es 0
            db = event.target.result; //db es un puntero a la base de datos
            if (!db.objectStoreNames.contains("usuarios")) {
                const store = db.createObjectStore("usuarios", { keyPath: "usuario" }); //crea dentro del objeto crear la tabla usuarios
                store.createIndex("nombre", "nombre", { unique: false }); //el primer nombre debe estar relacionado con el objeto que estamos guardando
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
