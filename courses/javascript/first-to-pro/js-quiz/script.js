const questions = [
    {
        question: "How many are there?",
        options: [1, 2, 3, 4],
        correct: 1
    }
];

const questionDiv = document.querySelector(".question");

const optionsDiv = document.querySelector(".options");

questionDiv.textContent = questions[0].question;

questions[0].options.forEach(opt => {
    const button = document.createElement('button');
    button.textContent = opt;
    optionsDiv.appendChild(button);
})