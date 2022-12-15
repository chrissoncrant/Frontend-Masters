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

//This variable needs to be globally scoped; it is a state variable. State variable are generally going to be globally scoped. 
// let capitalizeToggle = 1;

// optionsButtons.forEach(button => button.addEventListener('click', (e) => {
//     if (e.target === optionsButtons[0]) {
//         if (capitalizeToggle) {
//             e.target.textContent = e.target.textContent[0].toUpperCase() + e.target.textContent.slice(1);
//             capitalizeToggle--;
//         } else {
//             e.target.textContent = e.target.textContent[0].toLowerCase() + e.target.textContent.slice(1);
//             capitalizeToggle++;
//         }
//     }
//     console.log(isCorrect(e.target.value));
// }));


for (let option of optionsButtons) {
    option.addEventListener('click', () => {
        explanation.textContent = fact.explanation;
        
        for (let i = 0; i < optionsButtons.length; i++) {
            disable(optionsButtons[i]);
        }
        
        let guess = option.value;
        
        if (isCorrect(guess)) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
    })
}


const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', () => {
    h1.textContent = 'hovering';
})

h1.addEventListener('mouseout', () => {
    h1.textContent = 'Quiz.js';
})
