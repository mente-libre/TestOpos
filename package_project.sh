#!/bin/bash

# Este script comprime todos los archivos importantes del proyecto en un único fichero .tar.gz

echo "Empaquetando el proyecto en TestOpos.tar.gz..."

# Lista de archivos y carpetas a incluir
# Excluimos node_modules, .next, .genkit, y el propio script de empaquetado.
tar -czvf TestOpos.tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.genkit' \
  --exclude='TestOpos.tar.gz' \
  --exclude='package_project.sh' \
  .

echo "¡Hecho! Ahora puedes descargar el archivo TestOpos.tar.gz desde el explorador de archivos."
