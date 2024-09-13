from gtts import gTTS
import os
import random

# Lista de palabras que necesitas convertir a audio
words = [
    'Tambor', 'Auto', 'Avión', 'Tijeras', 'Robot', 'Lámpara', 'Mate', 'Martillo', 'Guante',
    'Gato', 'Perro', 'León', 'Elefante', 'Tigre', 'Mono', 'Pájaro', 'Rana', 'Pez',
    'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve',
    'Círculo', 'Cuadrado', 'Triángulo', 'Rectángulo', 'Pentágono', 'Hexágono', 'Estrella', 'Rombo', 'Óvalo'
]

# Frases adicionales para felicitaciones y error
feedback_words = {
    'correct': [
        '¡Bien hecho! Has acertado!',
        '¡Excelente! Sigue así.',
        '¡Correcto! Muy buen trabajo.',
        '¡Perfecto! Lo hiciste genial.',
        '¡Bravo! Has elegido bien.'
    ],
    'incorrect': [
        'Uf, inténtalo de nuevo.',
        'No es correcto, prueba otra vez.',
        '¡Casi! Sigue intentándolo.',
        'No acertaste, intenta otra vez.',
        'Esa no es la opción, prueba de nuevo.'
    ]
}

# Frases para las categorías y sus conectores
categories = {
    'objetos': 'los',
    'animales': 'los',
    'números': 'los',
    'figuras': 'las'
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
for key, phrases in feedback_words.items():
    for i, text in enumerate(phrases):
        audio_file_path = os.path.join(audio_dir, f"{key}_{i}.mp3")
        generate_audio(f"{key}_{i}", text, audio_file_path)

# Generar audios para las categorías con el conector correcto
for category, connector in categories.items():
    text = f"Vamos a aprender {connector} {category}"
    audio_file_path = os.path.join(audio_dir, f"categoria_{category}.mp3")
    generate_audio(f"categoria_{category}", text, audio_file_path)

# Generar audios para la instrucción "BUSCA EL:"
for word in words:
    text = f"Busca el {word}"
    audio_file_path = os.path.join(audio_dir, f"busca_{word.lower()}.mp3")
    generate_audio(f"busca_{word.lower()}", text, audio_file_path)
