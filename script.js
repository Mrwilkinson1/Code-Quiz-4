// Questions and answers

const sportsInfo = [
    {
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
var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')

let startButton = document.getElementById("startQuiz");
let startSection = document.getElementById("startPage");
// ADD ACTION TO BUTTON
const startEvent= (e) => {
console.log('click event response', e);
// make quiz visable
quiz.style.display = "inline";
startSection,style.display = "none";

}
console.log(startButton, startButton.addEventListener('click',startEvent))

let sportsQuiz = 0
let score = 0

for (let i = 0; i < sportsInfo.length; i++) {
    const ques = sportsInfo[i]

a_option.innerHTML = ques.a
b_option.innerHTML = ques.b
c_option.innerHTML = ques.c
d_option.innerHTML = ques.d
}