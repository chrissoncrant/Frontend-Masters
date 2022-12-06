const questions = [
    {
        question: `"1" + "1" === "2"`,
        options: [true, false],
        correct: "true",
        explanation: "This is wrong because..."
    },
    {
        question: `What kind of operator is this: "="?`,
        options: ['ternary', 'logical', 'assignment', 'arithmetic'],
        correct: 'assignment'
    },
];

const score = {
    correct: 0,
    incorrect: 0
};

const questionDiv = document.querySelector(".question");

const optionsDiv = document.querySelector(".options");

let questionNumber = 0;

function loadQuestion(questionNumber) {
    const currentQuestion = questions[questionNumber];

    questionDiv.textContent = currentQuestion.question;

    const answers = currentQuestion.options;

    buttonClickCount = 0;
    
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => {
            if (button.textContent === currentQuestion.correct) {
                button.style.backgroundColor = 'var(--correct)';
                buttonClickCount === 0 && showNextQuestionButton();
                buttonClickCount++;
            } else {
                button.style.backgroundColor = 'var(--incorrect)';
            }
        })
        optionsDiv.appendChild(button);
    })
}

function showNextQuestionButton() {
    const nextBtn = document.createElement('button');
    nextBtn.textContent = "Next >"
    nextBtn.classList.add('next');
    optionsDiv.appendChild(nextBtn);

    let options = optionsDiv.children;
    
    nextBtn.addEventListener('click', () => {

        while (options.length > 0) {
            let child = options[0];
            optionsDiv.removeChild(child);
        }

        questionNumber++;
        
        loadQuestion(questionNumber);
    })
}

loadQuestion(0);