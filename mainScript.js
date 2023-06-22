document.getElementById("startGame-Btn").addEventListener("click", playQuiz)

function playQuiz(){
    hideStartBtn();
    setTime();
}


function hideStartBtn(){
    var mainText = document.getElementById("home-page")
    mainText.style.visibility="hidden"
}

// Timer countdown
var timeEl=document.getElementById("timeLeft");
var secondsLeft= 90;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
          }
        }, 1000);
      }