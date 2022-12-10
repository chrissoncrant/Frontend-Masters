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

//Below is from the video assignment.
const fact = {
    statement: "Numbers are a primitive data type.",
    answer: true,
    explanation: "There are 7 primitive data types in JavaScript. Numbers are one of these types."
};

const statement = document.getElementById('statement');

statement.textContent = fact.statement;

const optionsButtons = document.querySelectorAll("#options button");

const explanation = document.querySelector("#explanation");


function disable(button) {
    button.setAttribute('disabled', '');
}

function enable(button) {
    button.removeAttribute('disabled');
}

function isCorrect(guess) {
    return guess === fact.answer.toString();
}

optionsButtons.forEach(button => button.addEventListener('click', (e) => {
    console.log(isCorrect(e.target.value))
}));