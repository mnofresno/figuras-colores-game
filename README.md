# Juego sobre Formas, figuras, objetos y animales

Este es un juego educativo desarrollado en HTML, CSS y JavaScript que ayuda a los niños a aprender sobre diferentes categorías como objetos, animales, números y figuras geométricas. El juego proporciona una experiencia interactiva en la que los niños deben buscar el elemento correcto basado en las instrucciones de audio.

## Descripción

El juego utiliza la biblioteca `gTTS` (Google Text-to-Speech) en Python para generar archivos de audio para instrucciones y retroalimentación del usuario. El usuario debe escuchar el audio y seleccionar el ícono correcto en función de lo que se solicita. Cada ronda selecciona aleatoriamente una categoría y un elemento de esa categoría para que el jugador lo encuentre.

## Características

- **Categorías de aprendizaje**: Objetos, Animales, Números, Figuras Geométricas.
- **Interfaz de usuario interactiva**: Botones generados dinámicamente para seleccionar el elemento correcto.
- **Instrucciones y retroalimentación de audio**: Utiliza archivos de audio para guiar y proporcionar retroalimentación a los usuarios.
- **Mensajes de retroalimentación aleatoria**: Diferentes frases para felicitaciones o sugerencias de intentarlo nuevamente.
- **Fácil configuración y personalización**: Añade o elimina categorías y elementos fácilmente.

## Acceso al Juego en Línea

Puedes jugar al juego en línea sin necesidad de descargar o instalar nada visitando la siguiente URL:

🔗 [Jugar al Juego Educativo en línea](https://mnofresno.github.io/figuras-colores-game/)

## Instalación Local

### Prerrequisitos

- Python 3.x
- `gTTS` (Google Text-to-Speech): Puedes instalarlo con el siguiente comando:
  ```bash
  pip install gTTS
  ```

### Configuración del Proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/juego-educativo.git
   cd juego-educativo
   ```

2. Genera los archivos de audio:

   Ejecuta el script `generate_audio.py` para generar los archivos de audio necesarios en la carpeta `audio`. Asegúrate de que esta carpeta exista.

   ```bash
   python generate_audio.py
   ```

   Este script generará archivos de audio para:
   - Las palabras de cada categoría.
   - Instrucciones "Busca el...".
   - Felicitaciones por respuestas correctas.
   - Mensajes de retroalimentación por respuestas incorrectas.
   - Introducciones para cada categoría (e.g., "Vamos a aprender los animales").

### Ejecución del Juego Localmente

1. **Abrir el archivo HTML**: Puedes abrir el archivo `index.html` directamente en tu navegador. Sin embargo, algunos navegadores pueden restringir el acceso a archivos locales debido a las políticas de seguridad CORS.

2. **Ejecutar con un Servidor Local** (recomendado):
   Puedes usar un servidor HTTP local para ejecutar el juego sin problemas de CORS. Aquí tienes algunas opciones:

   - **Python (versión 3.x)**:
     ```bash
     python3 -m http.server 8000
     ```
     Luego, abre tu navegador y navega a `http://localhost:8000`.

   - **Node.js**:
     Instala `http-server` si no lo tienes:
     ```bash
     npm install -g http-server
     ```
     Luego ejecuta:
     ```bash
     http-server -p 8000
     ```

### Estructura del Proyecto

- `index.html`: Archivo principal de la interfaz de usuario del juego.
- `styles.css`: Archivo de estilos CSS para la interfaz del juego.
- `script.js`: Lógica del juego escrita en JavaScript.
- `items.js`: Definición de categorías y elementos del juego.
- `generate_audio.py`: Script en Python para generar los archivos de audio necesarios.
- `audio/`: Carpeta que contiene los archivos de audio generados.

### Contribución

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el juego, añade categorías, palabras o incluso nuevos tipos de retroalimentación, no dudes en hacer un fork del proyecto y enviar un pull request.

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

### Créditos

Este juego utiliza la biblioteca [gTTS (Google Text-to-Speech)](https://pypi.org/project/gTTS/) para generar archivos de audio.

### Contacto

Si tienes alguna pregunta o sugerencia, puedes contactarme en [mnofresno@gmail.com](mailto:mnofresno@gmail.com).