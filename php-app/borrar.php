<?php
// Configuración de cabeceras para solicitudes desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Manejo del método OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuración de la conexión a la base de datos
define("HOSTNAME", "mysql-db");
define("USERNAME", "root");
define("PASSWORD", "dejame");
define("DATABASE", "dbzDB");

$conexion = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);

if (!$conexion) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar a la base de datos']);
    exit;
}

// Aceptamos solo solicitudes DELETE
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtiene el ID del personaje desde los parámetros de la URL
if (empty($_GET['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID del personaje no proporcionado']);
    exit;
}

$id = intval($_GET['id']); // Convertir el ID a un número entero



// Prepara la consulta SQL
$consulta = $conexion->prepare("DELETE FROM personajes WHERE id = ?");
$consulta->bind_param("i", $id);






















if ($consulta->execute()) {
    http_response_code(200); // DELETE /api/personajes HTTP/1.1 200 OK 
    echo json_encode(['success' => true, 'message' => 'Personaje borrado de la BBDD correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al borrar el personaje de la BBDD', 'details' => $consulta->error]);
}

$consulta->close();
$conexion->close();
?>
