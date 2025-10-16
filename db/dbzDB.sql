-- Crear la base de datos con conjunto de caracteres UTF-8
CREATE DATABASE IF NOT EXISTS dbzDB CHARACTER SET utf8 COLLATE utf8_spanish2_ci;

-- Usar la base de datos recién creada
USE dbzDB;

-- Eliminar la tabla personajes si ya existe
DROP TABLE IF EXISTS personajes;

-- Crear la tabla personajes con conjunto de caracteres UTF-8
CREATE TABLE personajes (
  id INT PRIMARY KEY,                     -- ID único del personaje
  name VARCHAR(255) NOT NULL,             -- Nombre del personaje
  ki VARCHAR(255),                        -- Nivel de fuerza (KI)
  max_ki VARCHAR(255),                    -- Máximo KI
  race VARCHAR(255),                      -- Raza del personaje
  gender VARCHAR(50),                     -- Género del personaje
  description TEXT,                       -- Descripción del personaje
  image VARCHAR(500),                     -- URL de la imagen del personaje
  affiliation VARCHAR(255),               -- Afiliación del personaje
  deleted_at DATETIME DEFAULT NULL        -- Campo para manejo de eliminación lógica
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- Eliminar la tabla usuarios si ya existe
DROP TABLE IF EXISTS usuarios;

-- Crear la tabla usuarios con conjunto de caracteres UTF-8
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,      -- ID único del usuario
  username VARCHAR(255) NOT NULL UNIQUE,  -- Nombre de usuario único
  password VARCHAR(255) NOT NULL,         -- Contraseña hasheada
  nombre VARCHAR(255) NOT NULL,           -- Nombre real del usuario
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de creación del registro
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- Insertar un usuario de prueba (opcional)
-- La contraseña debe estar hasheada con PHP (password_hash)
INSERT INTO usuarios (username, password, nombre)
VALUES ('testuser', '$2b$12$8RI5Y9B49U.qCRI8wJLe5ewhI2nKYbPmevPeI9blhjIPEWZdge0WC', 'Usuario de prueba');
-- La contraseña en este caso es "password" para este ejemplo.
