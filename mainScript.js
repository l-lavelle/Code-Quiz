document.getElementById("startGame-Btn").addEventListener("click", playQuiz)

function playQuiz(){
    hideStartBtn();
    setTime();
    displayQuestions();
    answerQuestions();  
}

// Starting quiz, changing displays
var mainText = document.getElementById("home-page")
var quizText = document.getElementById("quiz-page")
var endText = document.getElementById("quiz-complete")
function hideStartBtn(){
    mainText.style.display="none"
    quizText.style.display="flex"
}

// Timer countdown
var timeEl=document.getElementById("timeLeft");
var secondsLeft= 5;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time: 0";
           endGame();
          }
    }, 1000);
      }

// Initial Question
var i=0
function displayQuestions(){
        document.getElementById("quiz-questions").textContent=questions[i].q;
        document.getElementById("a1").textContent=questions[i].a1
        document.getElementById("a2").textContent=questions[i].a2
        document.getElementById("a3").textContent=questions[i].a3
        document.getElementById("a4").textContent=questions[i].a4
    }

// Checking User Answer
score=0
function answerQuestions(){
    document.getElementById("answers").addEventListener("click",checkAnswer) 
}
function checkAnswer(event){
    var userAnswer= event.target.childNodes[0].data;
    if (userAnswer.trim() === questions[i].correct.trim()){
        var correct=document.getElementById("answerResult");
        correct.textContent="Correct!";
        correct.style.color="green";
        score=score+10;
        console.log(score);
    }
    else{
        console.log(typeof questions[i].correct);
        var incorrect=document.getElementById("answerResult");
        incorrect.textContent="Incorrect";
        incorrect.style.color="red";
        secondsLeft=secondsLeft-10;
    }
    nextQuestion();
}

// Iterating through questions
function nextQuestion(){
    if (i===2){
        endGame();
    }else{
        localStorage.setItem("score", score);
        i++;
        displayQuestions();

    }
}

// Saving score and initials
function endGame(){
    quizText.style.display="none";
    endText.style.display="flex";
    document.getElementById("userScore").textContent=score

    document.getElementById("saveScore").addEventListener("click", function saveInfo(event){
        event.preventDefault();
        var intials = document.querySelector("#intials").value;
        localStorage.setItem("initials", intials)
        console.log(score)
    })
    
}