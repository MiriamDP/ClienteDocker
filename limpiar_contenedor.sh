#!/bin/bash

# Verificar si se proporcionó un nombre de proyecto
if [ -z "$1" ]; then
  echo "Uso: $0 <nombre_del_proyecto_docker_compose>"
  exit 1
fi

COMPOSE_PROJECT_NAME=$1

echo "🚀 Limpiando recursos asociados con el proyecto '$COMPOSE_PROJECT_NAME'..."

# Preguntar si eliminar también volúmenes e imágenes
read -rp "¿Deseas eliminar también los volúmenes? (s/n): " eliminar_volumenes
read -rp "¿Deseas eliminar también las imágenes? (s/n): " eliminar_imagenes

# Construir flags dinámicamente
FLAGS="-v --remove-orphans"
[ "$eliminar_imagenes" == "s" ] || [ "$eliminar_imagenes" == "S" ] && FLAGS="$FLAGS --rmi all"
[ "$eliminar_volumenes" != "s" ] && [ "$eliminar_volumenes" != "S" ] && FLAGS="--remove-orphans"

# Ejecutar docker compose down con los flags elegidos
echo "🛑 Deteniendo y eliminando recursos del proyecto..."
docker compose -p "$COMPOSE_PROJECT_NAME" down $FLAGS || true

echo "✅ Operación completada para el proyecto '$COMPOSE_PROJECT_NAME'."

