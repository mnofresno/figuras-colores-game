#!/bin/bash

# Ruta al archivo HTML del juego
FILE_PATH=$(pwd)/index.html

# Verifica si el archivo existe
if [[ -f "$FILE_PATH" ]]; then
  # Abre Google Chrome con el archivo HTML en local
  google-chrome "$FILE_PATH"
else
  echo "El archivo index.html no se encuentra en el directorio actual."
fi
