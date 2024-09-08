const questions = [
    {
        question: 'Busca el tambor',
        options: [
            { iconClass: 'triangle-icon', name: 'Triángulo' },
            { iconClass: 'drum-icon', name: 'Tambor' },
            { iconClass: 'square-icon', name: 'Cuadrado' }
        ],
        correct: 1
    },
    {
        question: 'Busca el triángulo',
        options: [
            { iconClass: 'circle-icon', name: 'Círculo' },
            { iconClass: 'square-icon', name: 'Cuadrado' },
            { iconClass: 'triangle-icon', name: 'Triángulo' }
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsSection = document.getElementById('options-section');
    const feedbackElement = document.getElementById('feedback');
    
    // Limpiar el feedback
    feedbackElement.textContent = '';
    
    // Cargar la pregunta actual
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Limpiar opciones anteriores
    optionsSection.innerHTML = '';
    
    // Crear botones de opciones
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add(option.iconClass);
        button.onclick = () => checkAnswer(index);
        optionsSection.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');
    
    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = '¡Bien hecho! Has acertado!';
        playSound('correct');
    } else {
        feedbackElement.textContent = 'Uf, inténtalo de nuevo.';
        playSound('incorrect');
    }
}

function playSound(type) {
    let soundUrl = type === 'correct' ? 'correct.mp3' : 'incorrect.mp3';
    const audio = new Audio(soundUrl);
    audio.play();
}

// Cargar la primera pregunta
loadQuestion();
