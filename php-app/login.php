<?php
// Configuración de cabeceras para CORS
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
$usuario = $datos['username'] ?? '';
$password = $datos['password'] ?? '';

// Validar que se envían datos completos
if (empty($usuario) || empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Usuario y contraseña son requeridos']);
    exit;
}

// Consulta para buscar al usuario
$consulta = $conexion->prepare("SELECT id, username, password FROM usuarios WHERE username = ?");
$consulta->bind_param("s", $usuario);
$consulta->execute();
$resultado = $consulta->get_result();

if ($resultado->num_rows === 0) {
    http_response_code(404);
    echo json_encode(['error' => 'Usuario no encontrado']);
    $consulta->close();
    $conexion->close();
    exit;
}

$usuarioData = $resultado->fetch_assoc();

// Verificar la contraseña
if (!password_verify($password, $usuarioData['password'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Contraseña incorrecta']);
    $consulta->close();
    $conexion->close();
    exit;
}

// Generar un token (puede ser cualquier cadena única, aquí usamos base64)
$token = base64_encode(random_bytes(32));

// Enviar respuesta exitosa con el token
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Inicio de sesión exitoso',
    'token' => $token,
    'username' => $usuarioData['username']
]);

$consulta->close();
$conexion->close();
?>
