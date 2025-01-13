const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const questions = [
    "Are you a girl?",
    "Are you cute?",
    "Do you like me?",
    "Think again...",
    "Do you really don't love me?",
    "I was knowing you also like me 😁"
];

let currentQuestionIndex = 0;

function setQuestion(index) {
    question.innerHTML = questions[index];
}

function moveNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Reset any unintended style changes
    noBtn.style.width = '150px';
    noBtn.style.height = '40px';
    noBtn.style.fontSize = '1.2em';
}

yesBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length - 1) {
        setQuestion(currentQuestionIndex);
    } else {
        setQuestion(currentQuestionIndex);
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }
});

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

noBtn.addEventListener('click', () => {
    if (currentQuestionIndex === 2) {
        setQuestion(3);
    } else if (currentQuestionIndex === 3) {
        setQuestion(4);
    }
});