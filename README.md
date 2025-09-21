# TestOpos con Firebase Studio

Este es un proyecto de Next.js para practicar tests de oposiciones, construido con Firebase Studio.

## Cómo Descargar y Subir tu Proyecto a GitHub

Este entorno no permite usar `git push` directamente. La forma más sencilla y segura de llevar tu código a GitHub es descargarlo y subirlo manualmente.

### Paso 1: Empaqueta tu Proyecto

He creado un script para que no tengas que descargar los archivos uno por uno.

1.  Abre una terminal en este entorno.
2.  Dale permisos de ejecución al script con este comando:
    ```bash
    chmod +x package_project.sh
    ```
3.  Ejecuta el script para crear el paquete:
    ```bash
    ./package_project.sh
    ```

    Esto creará un archivo llamado `TestOpos.tar.gz` en la raíz de tu proyecto.

### Paso 2: Descarga el Archivo

1.  En el explorador de archivos de la izquierda, busca el fichero `TestOpos.tar.gz`.
2.  Haz clic derecho sobre él y selecciona **"Download"** (Descargar).
3.  Guarda el archivo en tu ordenador.
4.  Descomprímelo. Ahora tienes todo tu proyecto en una carpeta local.

### Paso 3: Sube tu Código a GitHub

1.  Ve a [github.com](https://github.com) y crea un nuevo repositorio (puedes llamarlo `TestOpos`).
2.  En la página de tu nuevo repositorio, sigue las instrucciones para "push an existing repository from the command line" (subir un repositorio existente desde la línea de comandos). Serán comandos como estos (ejecútalos desde la carpeta de tu proyecto en **tu ordenador**, no aquí):

    ```bash
    git init
    git add .
    git commit -m "Mi primer commit desde mi ordenador"
    git branch -M main
    git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    git push -u origin main
    ```

¡Y listo! Tu código estará seguro en GitHub. Este método es mucho más fiable.
