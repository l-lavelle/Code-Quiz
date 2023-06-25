document.getElementById("startGame-Btn").addEventListener("click", playQuiz)

function playQuiz(){
    hideStartBtn();
    setTime();
    displayQuestions();
    answerQuestions();
    
}

var mainText = document.getElementById("home-page")
var quizText = document.getElementById("quiz-page")
function hideStartBtn(){
    mainText.style.display="none"
    quizText.style.display="flex"
}

// Timer countdown
var timeEl=document.getElementById("timeLeft");
var secondsLeft= 80;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
          }
        }, 1000);
      }


var i=0
function displayQuestions(){
        document.getElementById("quiz-questions").textContent=questions[i].q;
        document.getElementById("a1").textContent=questions[i].a1
        document.getElementById("a2").textContent=questions[i].a2
        document.getElementById("a3").textContent=questions[i].a3
        document.getElementById("a4").textContent=questions[i].a4
    }

score=0
function answerQuestions(){
    document.getElementById("answers").addEventListener("click",checkAnswer) 
}

// seperate in check answer and then next question
function checkAnswer(event){
    // console.log(event.target);
    var userAnswer= event.target.childNodes[0].data;
    console.log( userAnswer);
    // console.log( userAnswer.NodeValue);
    // console.log( userAnswer.NodeType);
    // console.log( userAnswer.NodeName);
  
    // console.log("User Answer:", userAnswer.value);
    // console.log("Correct Answer:", questions[i].correct);
    if (userAnswer.trim() === questions[i].correct.trim()){

        console.log(userAnswer);
        console.log(questions[i])
        document.getElementById("answerResult").textContent="Correct";
        score=score+10;
        console.log(score)
    }
    else{
        console.log(typeof questions[i].correct);
        document.getElementById("answerResult").textContent="Incorrect";
        secondsLeft=secondsLeft-10;
    }
    // i++;
    // displayQuestions();
    nextQuestion();
}
function nextQuestion(){
    i++;
    displayQuestions();
  
}