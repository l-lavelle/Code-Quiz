document.getElementById("startGame-Btn").addEventListener("click", playQuiz)
var i=0
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
// Timer still running if finsih quiz early
var timeEl=document.getElementById("timeLeft");
var timerInterval 
var secondsLeft= 90;
function setTime() {
     window.timerInterval = setInterval(function() {
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
        // console.log(score);
        setTimeout(()=>{correct.textContent="";nextQuestion();},2000)
    }
    else{
        var incorrect=document.getElementById("answerResult");
        incorrect.textContent="Incorrect";
        incorrect.style.color="red";
        secondsLeft=secondsLeft-10;
        setTimeout(()=>{incorrect.textContent="";nextQuestion();},2000)
    }
    
}

// Iterating through questions
function nextQuestion(){
    if (i===10){
        endGame();
    }else{
        i++;
        displayQuestions();
    }
}

// Saving score and initials
function endGame(){
    clearInterval(timerInterval);
    timeEl.textContent = "Time: 0";
    
    quizText.style.display="none";
    endText.style.display="flex";
    document.getElementById("userScore").textContent=score

    document.getElementById("saveScore").addEventListener("click", function saveInfo(event){
        localStorage.setItem("score", score);
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        localStorage.setItem("initials", initials);
        // trial()
        var userInput={
            "score":score,
            "initials":initials
        }
        
        // localStorage.setItem("trial", JSON.stringify(userInput));

        setTimeout(()=>{mainText.style.display="flex";
        quizText.style.display="none";
        endText.style.display="none"},2000);
    }) 
}

