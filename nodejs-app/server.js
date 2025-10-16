const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json()); // Para parsear application/json
app.use(cors()); // Habilita CORS para todas las rutas

// Configuración de la base de datos
const dbConfig = {
  host: 'mysql-db',
  user: 'root',
  password: 'dejame',
  database: 'dbzDB'
};

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando...');
});

app.get('/leer', (req, res) => {
  const connection = mysql.createConnection(dbConfig);
  connection.query('SELECT * FROM personajes', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
  connection.end();
});

app.post('/grabar', (req, res) => {
  const { nombre, fuerza } = req.body;
  const connection = mysql.createConnection(dbConfig);
  const consulta = 'INSERT INTO personajes (nombre, fuerza) VALUES (?, ?)';
  connection.query(consulta, [nombre, fuerza], (error, results) => {
    if (error) throw error;
    res.json({ success: true, mensaje: "Personaje añadido correctamente" });
  });
  connection.end();
});

app.delete('/borrar/:id_personaje', (req, res) => {
  const { id_personaje } = req.params;
  const connection = mysql.createConnection(dbConfig);
  const consulta = 'DELETE FROM personajes WHERE id = ?';
  connection.query(consulta, [id_personaje], (error, results) => {
    if (error) throw error;
    res.json({ success: true, mensaje: "Personaje eliminado correctamente" });
  });
  connection.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});