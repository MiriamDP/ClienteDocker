<?php
// Configuración de cabeceras para solicitudes desde cualquier origen (CORS)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
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

// Aceptamos solo solicitudes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Decodifica los datos del cuerpo de la solicitud
$datos = json_decode(file_get_contents("php://input"), true);

// Transformar `ki` a número
$datos['ki'] = intval(preg_replace('/\D/', '', $datos['ki'] ?? '0'));

// Completar campos opcionales
$datos['affiliation'] = $datos['affiliation'] ?? 'None';
$datos['maxKi'] = $datos['maxKi'] ?? 'Unknown';
$datos['deletedAt'] = $datos['deletedAt'] ?? null;


// Prepara la consulta SQL
$consulta = $conexion->prepare("
    INSERT INTO personajes (id, name, ki, max_ki, race, gender, description, image, affiliation, deleted_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name), ki = VALUES(ki), max_ki = VALUES(max_ki), race = VALUES(race),
      gender = VALUES(gender), description = VALUES(description), image = VALUES(image),
      affiliation = VALUES(affiliation), deleted_at = VALUES(deleted_at)
");

$consulta->bind_param(
    "isisssssss",
    $datos['id'],
    $datos['name'],
    $datos['ki'],
    $datos['maxKi'],
    $datos['race'],
    $datos['gender'],
    $datos['description'],
    $datos['image'],
    $datos['affiliation'],
    $datos['deletedAt']
);

if ($consulta->execute()) {
    http_response_code(201); // POST /api/personajes HTTP/1.1 200 OK
    echo json_encode(['success' => true, 'message' => 'Personaje grabado en la BBDD correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al grabar el personaje en la BBDD', 'details' => $consulta->error]);
}

$consulta->close();
$conexion->close();
