from gtts import gTTS
import os

# Lista de palabras que necesitas convertir a audio
words = [
    'Tambor', 'Auto', 'Avión', 'Tijeras', 'Robot', 'Lámpara', 'Mate', 'Martillo', 'Guante',
    'Gato', 'Perro', 'León', 'Elefante', 'Tigre', 'Mono', 'Pájaro', 'Rana', 'Pez',
    'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve',
    'Círculo', 'Cuadrado', 'Triángulo', 'Rectángulo', 'Pentágono', 'Hexágono', 'Estrella', 'Rombo', 'Óvalo'
]

# Palabras adicionales para felicitaciones y error
feedback_words = {
    'correct': '¡Bien hecho! Has acertado!',
    'incorrect': 'Uf, inténtalo de nuevo.'
}

# Directorio de destino para guardar los audios
audio_dir = 'audio'

# Crear el directorio de audio si no existe
if not os.path.exists(audio_dir):
    os.makedirs(audio_dir)

# Función para generar audios si no existen
def generate_audio(word, text, file_path):
    if not os.path.exists(file_path):
        tts = gTTS(text=text, lang='es')  # Elige el idioma, 'es' para español
        tts.save(file_path)
        print(f"Audio generado para: {word} -> {file_path}")
    else:
        print(f"Audio ya existente para: {word}, omitiendo...")

# Generar audios para las palabras del juego
for word in words:
    audio_file_path = os.path.join(audio_dir, f"{word.lower()}.mp3")
    generate_audio(word, word, audio_file_path)

# Generar audios para las felicitaciones y el error
for key, text in feedback_words.items():
    audio_file_path = os.path.join(audio_dir, f"{key}.mp3")
    generate_audio(key, text, audio_file_path)
