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
let quiz = document.getElementById('quiz')
let questionText = document.getElementById('question')
let a_option = document.getElementById('a_option')
let b_option = document.getElementById('b_option')
let c_option = document.getElementById('c_option')
let d_option = document.getElementById('d_option')
let submitBtn = document.getElementById('submitButton')
// let updatepoints = document.getElementById('totalPoints');

let startButton = document.getElementById("startQuiz");
let startSection = document.getElementById("startPage");
let counter = 0;
let points = 0;

questionText.innerHTML = sportsInfo[counter].question
a_option.innerHTML = sportsInfo[counter].a
b_option.innerHTML = sportsInfo[counter].b
c_option.innerHTML = sportsInfo[counter].c
d_option.innerHTML = sportsInfo[counter].d
// updatePoints.innerHTML = points;

// ADD ACTION TO BUTTON
const startEvent = (e) => {
    
    console.log("startevent", e)
    // make quiz visable
    quiz.style.display = "inline";
    // quiz.style.visibility = "visible"
    startSection.style.display = "none";
    setTimer()
}

const setTimer = () => {
    
}

// ADD ACTION TO SUMBIT BUTTON

document.getElementById('submitButton').onclick = function() {
    var radios = document.getElementsByName('answer');
    
        for (var radio of radios) {
    
            if (radio.checked) {
                let selectedAnswer = radio.id;
        
            if (selectedAnswer === sportsInfo[counter].correct){
                points+=10
            }
                // MOVE TO NEXT ITEM IN ARRAY
                counter++
                // SET NEW VALUES FROM ARRAY TO ANSWER
    questionText.innerHTML = sportsInfo[counter].question
        a_option.innerHTML = sportsInfo[counter].a
        b_option.innerHTML = sportsInfo[counter].b
        c_option.innerHTML = sportsInfo[counter].c
        d_option.innerHTML = sportsInfo[counter].d
    
    
                // a_option.innerText = sportsInfo[counter].a
        }
    }


}

// EVENT LISTENER
// submitBtn.addEventListener("click", quizAnswer)
startButton.addEventListener("click", startEvent)


