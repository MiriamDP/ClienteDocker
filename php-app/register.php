<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$datos = json_decode(file_get_contents("php://input"), true);
$nombre = $datos['nombre'] ?? '';
$username = $datos['username'] ?? '';
$password = $datos['password'] ?? '';

if (empty($nombre) || empty($username) || empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos los campos son obligatorios']);
    exit;
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$consulta = $conexion->prepare("INSERT INTO usuarios (nombre, username, password) VALUES (?, ?, ?)");
$consulta->bind_param("sss", $nombre, $username, $passwordHash);

if ($consulta->execute()) {
    http_response_code(201);
    echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al registrar el usuario', 'details' => $consulta->error]);
}

$consulta->close();
$conexion->close();
?>
