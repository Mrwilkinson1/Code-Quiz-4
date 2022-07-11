// Questions and answers

const sportsInfo = [{
        question: "With which team did Michael Jordan win 6 titles?",
        a: "Atlanta Hawks",
        b: "New York Knicks", 
        c: "Golden State Warriors", 
        d: "Chicago Bulls",
        correct: "d",
},  
{    question: "How many carrer homeruns did Hank Aaron have?",
        a: "755",
        b: "801", 
        c: "678", 
        d: "404",
        correct: "a",
},
{    question: "What number did Tom Brady wear in 2003-04?",
        a: "7",
        b: "12",
        c: "84",
        d: "24",
        correct: "b",
},
{    question: "What is Tiger's full name?",
        a: "Bill Tiger Woods",
        b: "Elroy Cat Woods",
        c: "Tony Tiger Woods",
        d: "Eldrik Tont Woods",
        correct: "d",
},
];

// varibles
var quiz=document.getElementById('quiz')
var answerE1s =document.querySelectorAll('.answer')
var questionE1 =document.getElementById('question')
var a_text =document.getElementById('a_text')
var b_text =document.getElementById('b_text')
var c_text =document.getElementById('c_text')
var d_text =document.getElementById('d_text')
var submitBtn =document.getElementById('submit')

let sportsQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

}
const sportQuizInfo = quizData[sportQuiz] 

    question.innerText =currentQuizData.question
            a_text.innerText = currentQuizData.a
            b_text.innerText = currentQuizData.b
            c_text.innerText =currentQuizData.c
            d_text.innerText =currentQuizData.d


function deselectAnswers(){
    answerEls.forEach(answerEls=>answerEls.checked=false)
}
function getSelected(){
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked)
        answer = answerEl.id
    })
    return answer
}