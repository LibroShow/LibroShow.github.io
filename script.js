document.addEventListener('DOMContentLoaded', () => {

    // 🚩 BASE DE DATOS DE PREGUNTAS (17 preguntas en total, consolidadas) 🚩
    const questions = [
       {
            question: "¿Cuántos departamentos (sin incluir las Regiones Autónomas) tiene Nicaragua?",
            options: [
                { text: "15 departamentos", isCorrect: true },
                { text: "17 departamentos", isCorrect: false },
                { text: "10 departamentos", isCorrect: false },
                { text: "14 departamentos", isCorrect: false }
            ],
            feedbackCorrect: "¡Acertaste! ¡Sos un/a crack! Son 15 departamentos y 2 Regiones Autónomas.",
            feedbackIncorrect: "¡Uyyy, te patinaste! 🥴 La respuesta correcta es 15 departamentos. ¡Pilas, pues!"
        },
        {
            question: "¿Cuál de estos departamentos NO forma parte de la región del Pacífico?",
            options: [
                { text: "Chinandega", isCorrect: false },
                { text: "Rivas", isCorrect: false },
                { text: "Madriz", isCorrect: true },
                { text: "Carazo", isCorrect: false }
            ],
            feedbackCorrect: "¡Correcto! Madriz es del Norte. ¡Tuani, tuani!",
            feedbackIncorrect: "¡Ni 'cerquita', ni 'lejitos'! 😅 Madriz está en la región Norte. ¡Echale ganas!"
        },
        {
            question: "¿Cuál es la capital del departamento de Matagalpa?",
            options: [
                { text: "Jinotega", isCorrect: false },
                { text: "Boaco", isCorrect: false },
                { text: "Matagalpa", isCorrect: true },
                { text: "Estelí", isCorrect: false }
            ],
            feedbackCorrect: "¡Cheque! La capital lleva el mismo nombre. ¡Eso es tener la mente fresca!",
            feedbackIncorrect: "¡Nanay! 🤨 La capital es Matagalpa. ¡Te me estás durmiendo, chele!"
        },
        {
            question: "¿Cuál de los siguientes es un municipio del departamento de Masaya?",
            options: [
                { text: "Ticuantepe", isCorrect: false },
                { text: "Nindirí", isCorrect: true },
                { text: "Diriá", isCorrect: false },
                { text: "La Concepción", isCorrect: false }
            ],
            feedbackCorrect: "¡Perfecto! Nindirí es un municipio masayense. ¡Sabes de lo que hablas, broder!",
            feedbackIncorrect: "¡No te hagás el 'maje'! La respuesta era Nindirí. ¡Ponete vivo!"
        },
        {
            question: "¿Cómo se abrevia la Región Autónoma de la Costa Caribe Norte?",
            options: [
                { text: "RACC", isCorrect: false },
                { text: "RACCN", isCorrect: true },
                { text: "RAAN", isCorrect: false },
                { text: "RAAP", isCorrect: false }
            ],
            feedbackCorrect: "¡Así se habla! La RACCN. ¡No te 'hacés güevón' con los nombres!",
            feedbackIncorrect: "¡Te 'fuiste de trompa'! 🤦‍♂️ Es RACCN. ¡A repasar la geografía nica!"
        },
        {
            question: "¿Qué departamento alberga a la Isla de Ometepe?",
            options: [
                { text: "Granada", isCorrect: false },
                { text: "Rivas", isCorrect: true },
                { text: "Chontales", isCorrect: false },
                { text: "Río San Juan", isCorrect: false }
            ],
            feedbackCorrect: "¡Excelente! Ometepe está en Rivas. ¡Te 'portaste' bien con esa!",
            feedbackIncorrect: "¡Fallaste como 'escopeta de feria'! 💣 La isla está en Rivas. ¡Aprende a ubicarte!"
        },
        {
            question: "¿Qué cabecera departamental es conocida como la 'Cuna de la Revolución'?",
            options: [
                { text: "Matagalpa", isCorrect: false },
                { text: "León", isCorrect: true },
                { text: "Estelí", isCorrect: false },
                { text: "Masaya", isCorrect: false }
            ],
            feedbackCorrect: "¡Bingo! León, la ciudad universitaria. ¡Esa no te la 'pelaste'!",
            feedbackIncorrect: "¡No 'sos del palo'! La Cuna de la Revolución es León. ¡Estudiá más, chavalo!"
        },
        {
            question: "¿Cuál de estos departamentos se ubica más al norte de Nicaragua?",
            options: [
                { text: "Estelí", isCorrect: false },
                { text: "Madriz", isCorrect: false },
                { text: "Nueva Segovia", isCorrect: true },
                { text: "Jinotega", isCorrect: false }
            ],
            feedbackCorrect: "¡Dale pues! Correcto, Nueva Segovia (frontera). ¡Me 'llegás' con esa respuesta!",
            feedbackIncorrect: "¡Te 'hiciste agua'! 💧 El más al norte es Nueva Segovia. ¡Ponete a leer el mapa!"
        },
        {
            question: "¿Qué departamento es famoso por su café y sus nebliselvas, siendo llamado 'Capital del Café'?",
            options: [
                { text: "Nueva Segovia", isCorrect: false },
                { text: "Matagalpa", isCorrect: false },
                { text: "Jinotega", isCorrect: true },
                { text: "Boaco", isCorrect: false }
            ],
            feedbackCorrect: "¡Es correcto! ¡Jinotega! ¡Tenés buen 'ojo' para la geografía!",
            feedbackIncorrect: "¡Te 'diste color'! La Capital del Café es Jinotega. ¡Estás bien 'palo'!"
        },
        {
            question: "¿Qué departamento limita al sur con Costa Rica y al este con el Mar Caribe?",
            options: [
                { text: "Rivas", isCorrect: false },
                { text: "Chontales", isCorrect: false },
                { text: "Río San Juan", isCorrect: true },
                { text: "Zelaya Central", isCorrect: false }
            ],
            feedbackCorrect: "¡Lo tenés! Río San Juan. ¡Sabés dónde 'pisa' Nicaragua!",
            feedbackIncorrect: "¡Casi! Pero no 'pegaste una'. Era Río San Juan. ¡No te 'ahogués en un vaso de agua'!"
        },
        {
            question: "¿Cuál de estos departamentos fue creado más recientemente (por ley de 2018)?",
            options: [
                { text: "Granada", isCorrect: false },
                { text: "Masaya", isCorrect: false },
                { text: "Carazo", isCorrect: false },
                { text: "No se han creado nuevos desde hace décadas", isCorrect: true }
            ],
            feedbackCorrect: "¡Trampa detectada! Es correcto, no se han creado nuevos departamentos recientemente. ¡No te 'dejaste engañar'!",
            feedbackIncorrect: "¡Te 'vieron la cara'! 🤪 No se han creado nuevos departamentos. ¡Esa era una 'cascarita'!"
        },
        {
            question: "¿Cuál es el departamento más pequeño en extensión territorial?",
            options: [
                { text: "Carazo", isCorrect: false },
                { text: "Masaya", isCorrect: true },
                { text: "Managua", isCorrect: false },
                { text: "Granada", isCorrect: false }
            ],
            feedbackCorrect: "¡Genial! Masaya. ¡Tenés el dato exacto! ¡Qué 'tuani'!",
            feedbackIncorrect: "¡Te equivocaste! El más pequeño es Masaya. ¡Te lo 'comió el ratón'!"
        },
        {
            question: "¿En qué región se encuentra el departamento de Chontales?",
            options: [
                { text: "Norte (Central)", isCorrect: false },
                { text: "Pacífico Sur", isCorrect: false },
                { text: "Central (o Centro)", isCorrect: true },
                { text: "Atlántico Norte", isCorrect: false }
            ],
            feedbackCorrect: "¡Correcto! Chontales está en la región Central. ¡Te 'sacaste un 10'!",
            feedbackIncorrect: "¡Qué barbaridad! 😮 Chontales es de la región Central. ¡No 'entendés nada'!"
        },
        {
            question: "¿Qué región de Nicaragua incluye a Bluefields y Corn Island?",
            options: [
                { text: "Río San Juan", isCorrect: false },
                { text: "Región Autónoma de la Costa Caribe Sur (RACCS)", isCorrect: true },
                { text: "Chontales", isCorrect: false },
                { text: "Región Autónoma de la Costa Caribe Norte (RACCN)", isCorrect: false }
            ],
            feedbackCorrect: "¡Excelente! La RACCS. ¡Ahí 'está el tiro'!",
            feedbackIncorrect: "¡No 'sabés ni dónde estás parado'! Es la RACCS. ¡Estás 'en la luna'!"
        },
        {
            question: "¿Cuántas Regiones Autónomas tiene Nicaragua?",
            options: [
                { text: "Una", isCorrect: false },
                { text: "Tres", isCorrect: false },
                { text: "Dos", isCorrect: true },
                { text: "Cuatro", isCorrect: false }
            ],
            feedbackCorrect: "¡Así es, son dos! RACCN y RACCS. ¡Sos bien 'puesto'!",
            feedbackIncorrect: "¡Estás 'en panga'! 🛶 Son dos Regiones Autónomas. ¡Cuidado te 'lleva la corriente'!"
        },
        {
            question: "¿Cuál es la cabecera departamental de Boaco?",
            options: [
                { text: "Juigalpa", isCorrect: false },
                { text: "Boaco", isCorrect: true },
                { text: "Camoapa", isCorrect: false },
                { text: "San Pedro de Lóvago", isCorrect: false }
            ],
            feedbackCorrect: "¡Chunche! Boaco lleva el mismo nombre. ¡No 'te fuiste de bruces'!",
            feedbackIncorrect: "¡Te 'volaste la cerca'! 🏃‍♂️ La cabecera es Boaco. ¡Regresate al inicio!"
        },
        {
            question: "¿Cuál de estos departamentos no tiene salida al Mar Pacífico?",
            options: [
                { text: "Chinandega", isCorrect: false },
                { text: "Rivas", isCorrect: false },
                { text: "Granada", isCorrect: true },
                { text: "León", isCorrect: false }
            ],
            feedbackCorrect: "¡Correcto! Granada solo tiene costa en el Lago Cocibolca. ¡Qué 'vivo'!",
            feedbackIncorrect: "¡Te 'clavaste' la respuesta incorrecta! 📍 Granada no tiene mar, solo lago. ¡Te 'quemaste'!"
        }
    ];


    // --- 2. VARIABLES DE ESTADO DEL QUIZ ---
    let currentQuestionIndex = 0;
    let score = 0;
    let questionsShuffled = []; 

    // --- 3. REFERENCIAS A ELEMENTOS DEL HTML ---
    const quizContainer = document.getElementById('quiz-container');
    
    // Pantallas
    const startScreen = document.getElementById('start-screen');
    const quizArea = document.getElementById('quiz-area');
    const resultsContainer = document.getElementById('results-container');

    // Botones
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    // Elementos del Quiz
    const questionCounterText = document.getElementById('question-counter');
    const scoreText = document.getElementById('score');
    const questionText = document.getElementById('question-text');
    const optionsGrid = document.getElementById('options-grid');
    const feedbackArea = document.getElementById('feedback-area');

    // Elementos de Resultados
    const finalScoreText = document.getElementById('final-score-text');
    const finalMessage = document.getElementById('final-message');

    // ------------------------------------------
    // --- 4. FUNCIONES PRINCIPALES MEJORADAS ---
    // ------------------------------------------

    /**
     * Inicia o reinicia el quiz
     */
    function startQuiz() {
        // Reiniciar variables
        currentQuestionIndex = 0;
        score = 0;

        // Mezcla las preguntas (Fisher-Yates simplificado)
        questionsShuffled = questions.sort(() => Math.random() - 0.5);
        
        // Actualizar UI para el inicio del quiz
        scoreText.textContent = `Puntaje: 0`;
        startScreen.style.display = 'none';
        resultsContainer.style.display = 'none';
        quizArea.style.display = 'block';
        nextBtn.style.display = 'none';
        
        loadQuestion();
    }

    /**
     * Carga la pregunta actual en la UI
     */
    function loadQuestion() {
        // Limpiar estado anterior
        optionsGrid.innerHTML = '';
        feedbackArea.style.display = 'none';
        feedbackArea.className = '';
        nextBtn.style.display = 'none';
        quizContainer.classList.remove('shake');

        const currentQuestion = questionsShuffled[currentQuestionIndex];
        const totalQuestions = questions.length; // Usa la longitud total

        // Actualizar textos
        questionText.textContent = currentQuestion.question;
        questionCounterText.textContent = `Pregunta ${currentQuestionIndex + 1} / ${totalQuestions}`;

        // Crear botones de opciones (y mezclarlos para que la respuesta correcta no esté siempre en el mismo sitio)
        const optionsShuffled = currentQuestion.options.sort(() => Math.random() - 0.5);
        
        optionsShuffled.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-btn');
            button.dataset.correct = option.isCorrect; 
            button.addEventListener('click', selectAnswer);
            optionsGrid.appendChild(button);
        });
    }

    /**
     * Se ejecuta cuando el usuario hace clic en una opción
     */
    function selectAnswer(e) {
        // Evitar doble clic: deshabilitar temporalmente si ya se ha seleccionado una respuesta
        if (nextBtn.style.display === 'block') return; 
        
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        // Deshabilitar todos los botones y revelar la correcta
        Array.from(optionsGrid.children).forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });

        const currentQuestion = questionsShuffled[currentQuestionIndex];
        
        if (isCorrect) {
            score++;
            scoreText.textContent = `Puntaje: ${score}`;
            selectedBtn.classList.add('correct'); // Resaltar el botón seleccionado como correcto
            feedbackArea.innerHTML = `<strong>¡Correcto!</strong> ${currentQuestion.feedbackCorrect}`;
            feedbackArea.classList.add('correct-feedback');
        } else {
            selectedBtn.classList.add('incorrect');
            feedbackArea.innerHTML = `<strong>¡Incorrecto!</strong> ${currentQuestion.feedbackIncorrect}`;
            feedbackArea.classList.add('incorrect-feedback');
            quizContainer.classList.add('shake');
        }
        
        feedbackArea.style.display = 'block';
        nextBtn.style.display = 'block';
    }

    /**
     * Muestra la pantalla de resultados finales
     */
    function showResults() {
        quizArea.style.display = 'none';
        resultsContainer.style.display = 'block';

        const totalQuestions = questions.length;
        finalScoreText.textContent = `Tu puntaje final es ${score} de ${totalQuestions}.`;

        // Lógica de mensaje final basada en porcentaje (más flexible)
        let message = '';
        const percentage = (score / totalQuestions) * 100;

        if (percentage === 100) {
            message = '¡Felicidades! 🇳🇮 ¡Sos un experto en Nicaragua! ¡Puntaje perfecto!';
        } else if (percentage >= 70) {
            message = '¡Excelente trabajo! Sabés mucho de tu tierra.';
        } else if (percentage >= 40) {
            message = '¡Nada mal! Seguí aprendiendo, ¡vas bien!';
        } else {
            message = '¡Hay que repasar! Pero lo importante es aprender.';
        }
        finalMessage.textContent = message;
    }

    // ------------------------------------------
    // --- 5. ASIGNACIÓN DE EVENTOS (LISTENERS) ---
    // ------------------------------------------
    
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);

    // Maneja el paso a la siguiente pregunta o a los resultados
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });
});