let currentWord = '';
let currentItems = [];

// Inicializar el juego
function initGame() {
    // Seleccionar una categoría al azar
    const categoryNames = Object.keys(categories);
    const randomCategoryName = categoryNames[Math.floor(Math.random() * categoryNames.length)];
    currentItems = categories[randomCategoryName];

    // Elegir una palabra al azar de esos elementos
    const randomIndex = Math.floor(Math.random() * currentItems.length);
    currentWord = currentItems[randomIndex].name;

    // Mostrar la palabra que se debe buscar
    showWordToFind(currentWord);

    // Reproducir el sonido de la palabra a buscar
    playSound(currentItems[randomIndex].audio);

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
        button.onclick = () => checkAnswer(item.name);
        optionsSection.appendChild(button);
    });
}

function checkAnswer(selectedName) {
    const feedbackElement = document.getElementById('feedback');
    
    if (selectedName === currentWord) {
        feedbackElement.textContent = '¡Bien hecho! Has acertado!';
        playSound('correct.mp3');
        // Cargar nueva palabra al azar
        initGame();
    } else {
        feedbackElement.textContent = 'Uf, inténtalo de nuevo.';
        playSound('incorrect.mp3');
    }
}

function playSound(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Iniciar el juego al cargar la página
initGame();
