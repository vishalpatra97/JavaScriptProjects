const quizData = [
    {
        question: "Exposure to which light may accelerate aging?",
        a: 'Blue Light',
        b: 'Red Light',
        c: 'Yellow Light',
        d: 'None Of The Above',
        correct: 'a',
    },{
        question: "Which Space agency has discovered the First Nearby Super-Earth ?",
        a: 'NASA',
        b: 'ISRO',
        c: 'ESA',
        d: 'CNSA',
        correct: 'a',
    },{
        question: "How much percentage of freshwater is available on earth ?",
        a: '30%',
        b: '3%',
        c: '0.3%',
        d: '0.17%',
        correct: 'b',
    },{
        question: "Virtual currency Bitcoin is based on -",
        a: 'Internet of Things',
        b: 'AI',
        c: 'Block Chain Technology',
        d: 'None Of The Above',
        correct: 'c',
    },{
        question: "flutter is based on -",
        a: 'Javascript',
        b: 'Python',
        c: 'Dart',
        d: 'None Of The Above',
        correct: 'c',
    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit'); 


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

// To not to get automatically selected next question
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Score section
submitBtn.addEventListener("click", () => {
    // Check to see the Answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
        
        quiz.innerHTML = `<h2 style = "padding: 15px">You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
}
});