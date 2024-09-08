let currentWord = '';
let currentItems = [];
let currentCategory = '';
let isAudioPlaying = false;  // Variable para controlar la reproducción de audio

// Inicializar el juego
function initGame() {
    // Seleccionar una categoría al azar
    const categoryNames = Object.keys(categories);
    currentCategory = categoryNames[Math.floor(Math.random() * categoryNames.length)];
    currentItems = categories[currentCategory];

    // Elegir una palabra al azar de esos elementos
    const randomIndex = Math.floor(Math.random() * currentItems.length);
    currentWord = currentItems[randomIndex].name;

    // Mostrar la palabra que se debe buscar
    showWordToFind(currentWord);

    // Reproducir el sonido de la categoría y luego la instrucción
    const categoryAudioFile = `audio/categoria_${currentCategory}.mp3`;
    const searchAudioFile = `audio/busca_${currentWord.toLowerCase()}.mp3`;
    playSound(categoryAudioFile, () => {
        playSound(searchAudioFile, () => {
            isAudioPlaying = false;  // El audio terminó de reproducirse
        });
    });

    // Cargar las opciones
    loadOptions();
}

// Mostrar la palabra a buscar en el cuadro
function showWordToFind(word) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Busca: ${word}`;
}

// Cargar las opciones de respuesta
function loadOptions() {
    const optionsSection = document.getElementById('options-section');
    const feedbackElement = document.getElementById('feedback');
    
    // Limpiar el feedback
    feedbackElement.textContent = '';
    
    // Limpiar opciones anteriores
    optionsSection.innerHTML = '';
    
    // Crear botones de opciones
    currentItems.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add(item.iconClass);
        button.onclick = () => {
            if (!isAudioPlaying) {  // Solo permitir clics si no hay audio reproduciéndose
                checkAnswer(item.name);
            }
        };
        optionsSection.appendChild(button);
    });
}

function checkAnswer(selectedName) {
    const feedbackElement = document.getElementById('feedback');
    
    if (selectedName === currentWord) {
        feedbackElement.textContent = '¡Bien hecho! Has acertado!';
        isAudioPlaying = true;  // Indicar que el audio está reproduciéndose
        const randomCorrectIndex = Math.floor(Math.random() * 5);  // Elegir aleatoriamente una de las 5 frases
        playSound(`audio/correct_${randomCorrectIndex}.mp3`, initGame);  // Reproduce el audio de felicitación
    } else {
        feedbackElement.textContent = 'Uf, inténtalo de nuevo.';
        isAudioPlaying = true;  // Indicar que el audio está reproduciéndose
        const randomIncorrectIndex = Math.floor(Math.random() * 5);  // Elegir aleatoriamente una de las 5 frases
        playSound(`audio/incorrect_${randomIncorrectIndex}.mp3`, () => { isAudioPlaying = false; });  // Reproduce el audio de error
    }
}

function playSound(audioFile, callback) {
    const audio = new Audio(audioFile);
    audio.onended = callback;  // Ejecutar la callback cuando termine el audio
    audio.play();
}

// Obtener la ruta del archivo de audio correspondiente a la palabra
function getAudioFilePath(word) {
    // Convertir la palabra a minúsculas y reemplazar espacios y caracteres especiales
    const normalizedWord = word
        .toLowerCase()
        .normalize("NFD") // Normalizar caracteres Unicode (por ejemplo, acentos)
        .replace(/[\u0300-\u036f]/g, ""); // Eliminar diacríticos

    return `audio/${normalizedWord}.mp3`;
}

// Iniciar el juego al cargar la página
initGame();
