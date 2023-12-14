
const questionsArray = [
    {
        question: "What is HTML?",
        options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext and Text Markup Language"],
        correctAnswer: "A"
    },
    {
        question: "What is CSS?",
        options: ["Counter Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
        correctAnswer: "C"
    },
    {
        question: "What is JavaScript primarily used for?",
        options: ["Styling web pages", "Building databases", "Creating interactive websites", "Generating graphic designs"],
        correctAnswer: "C"
    },
    {
        question: "What is the purpose of a CSS framework?",
        options: ["To build web servers", "To standardize and streamline web development", "To create databases", "To design graphics"],
        correctAnswer: "B"
    },
    {
        question: "What is responsive web design?",
        options: ["Designing graphics for websites", "Making web pages compatible with various devices and screen sizes", "Building databases", "Creating interactive websites"],
        correctAnswer: "B"
    },
    {
        question: "What is a framework in web development?",
        options: ["A pre-built set of tools and conventions to speed up development", "A database management system", "A design software", "A programming language"],
        correctAnswer: "A"
    },
    {
        question: "What is the role of version control systems in web development?",
        options: ["To create graphics for websites", "To track changes to code and collaborate with other developers", "To build web servers", "To standardize HTML"],
        correctAnswer: "B"
    },
    {
        question: "What is the box model in CSS?",
        options: ["A container for graphics", "A layout model that describes the structure of elements", "A framework for web development", "A design principle for web pages"],
        correctAnswer: "B"
    },
    {
        question: "What is React?",
        options: ["JavaScript library for building user interfaces", "A programming Language", "Database Object Model", "HTML Library"],
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of a JavaScript library?",
        options: ["To create databases", "To build web servers", "To provide pre-built functions for common tasks", "To design graphics"],
        correctAnswer: "C"
    }
    // Add more questions here...
];

questionDiv.innerHTML = `<p class="question">${currentQuestion.question}</p>`;

function generateQuiz() {
    const numQuestions = document.getElementById('numQuestions').value;

    if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > 10) {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }


    // Shuffle the questions array
    const shuffledQuestions = shuffleArray(questionsArray);

    for (let i = 0; i < numQuestions; i++) {
        const currentQuestion = shuffledQuestions[i];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container'); // Add a class to the question container

        // Display question number
        const questionNumber = document.createElement('span');
        questionNumber.classList.add('question-number'); // Add a class to the question number
        questionNumber.textContent = `Q${i + 1}: `;
        questionDiv.appendChild(questionNumber);

        // Display question text
        const questionText = document.createElement('p');
        questionText.classList.add('question'); // Add a class to the question text
        questionText.textContent = currentQuestion.question;
        questionDiv.appendChild(questionText);

        // Display options
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options'); // Add a class to the options container

        currentQuestion.options.forEach((option, index) => {
            const label = String.fromCharCode(65 + index); // Convert index to A, B, C, D
            const radioInput = `<input type="radio" name="q${i + 1}" value="${label}">${option}`;
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = radioInput;
            optionsContainer.appendChild(optionLabel);
        });

        questionDiv.appendChild(optionsContainer);
        quizContainer.appendChild(questionDiv);
    }
}


// Helper function to shuffle an array
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}


function gradeQuiz() {
    
    const numQuestions = document.getElementById('numQuestions').value;
    let score = 0;

    for (let i = 1; i <= numQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        
        // Check if an option is selected for each question
        if (!selectedOption) {
            alert(`Please answer question ${i}.`);
            return;
        }

        // Assuming the correct answer is 'Option A' for all questions (replace with actual correct answers)
        const correctAnswer = 'A';

        if (selectedOption.value === correctAnswer) {
            score++;
        }
    }

    // Display the result
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<p>Your score: ${score} out of ${numQuestions}</p>`;
}

