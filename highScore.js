// var storeduser = JSON.parse(localStorage.getItem("userInput"))




// window.addEventListener("storage", newItem);
// window.dispatchEvent( new Event('storage') );
// function newItem(){
//     console.log(40)
//     var initials = localStorage.getItem("initials");
//     var score = localStorage.getItem("score");


//     // add to array and then insert variabel
//     var li= document.createElement("li");
//     li.textContent=initials + score;
//     document.body.appendChild(li);
//     localStorage.removeItem("score");
//     localStorage.removeItem("initials");
// }

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");
window.addEventListener("storage", newItem);
window.dispatchEvent( new Event('storage') );
function newItem(){
    var trial=[]
    if (initials !== null) {
        trial = initials;
    }

    for (var i=0;i<trial.length;i++){
        var initial=initials[i];
        var li = document.createElement("li");
        li.textContent = initial;
        document.body.appendChild(li);
    }
}








// // function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }
