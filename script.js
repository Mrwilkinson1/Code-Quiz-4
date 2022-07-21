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
var answerText = document.querySelectorAll('.answer')
var questionText = document.getElementById()
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
quiz.style.visibility = "visible";
startSection,style.display = "none";

}

// ADD ACTION TO SUMBIT
const quizAnswer = (e) => {
    console.log('quizAnswers',e)
}


// EVENT LISTENER
startButton, startButton.addEventListener('click',startEvent)
submitBtn.addEventListener("click", quizAnswer),

let sportsQuiz = 0
let score = 0


// for (let i = 0; i < sportsInfo.length; i++) {
//    const ques = sportsInfo[i]

// a_option.innerHTML = ques.a
// b_option.innerHTML = ques.b
// c_option.innerHTML = ques.c
// d_option.innerHTML = ques.d
// }

let counter = 0;
while (counter <= sportsInfo,length){
    questionText.innerHTML = 
    a_option.innerHTML = sportsInfo[counter].a
    b_option.innerHTML = sportsInfo[counter].b
    c_option.innerHTML = sportsInfo[counter].c
    d_option.innerHTML = sportsInfo[counter].d
        //conditionals 
    if()

        counter++
      if (counter === sportsInfo.length) {
           break
        }

}







