<?php
// Configuración de cabeceras para solicitudes desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
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

// Aceptamos solo solicitudes GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}













// Prepara la consulta SQL
$consulta = $conexion->prepare("SELECT * FROM personajes");

if (!$consulta->execute()) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al ejecutar la consulta']);
    $consulta->close();
    $conexion->close();
    exit;
}

$resultado = $consulta->get_result();
$datos = $resultado->fetch_all(MYSQLI_ASSOC); // Obtiene todas las filas como un array asociativo











if ($consulta->execute()) {
    http_response_code(200); // GET /api/personajes HTTP/1.1 200 OK
    echo json_encode(['success' => true, 'data' => $datos, 'message' => 'Personajes cargados de la BBDD correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al cargar los personajes de la BBDD', 'details' => $consulta->error]);
}

$consulta->close();
$conexion->close();
?>
