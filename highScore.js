window.addEventListener("storage", newItem);
window.dispatchEvent( new Event('storage') );


function newItem(){
var storeduser = JSON.parse(localStorage.getItem("trial"))
console.log(storeduser);
array=[];
if (storeduser !== null) {
        array +=storeduser.score;
      }
console.log(array)
var li = document.createElement("li");
li.textContent = storeduser.initials +"   "+ storeduser.score;
li.style.textAlign="center";
li.style.fontSize="1.3em"
document.getElementById("scoreBoard").append(li);}
// array=[]
// if (storeduser !== null) {
//     array += ;
//   }
//   var d = document.createElement("li");
//   d.textContent = array;
//   document.body.appendChild(d);
//   for (var i = 0; i < array.length; i++) {
//     var array = array[i];

//     var li = document.createElement("li");
//     li.textContent = array;
//     li.setAttribute("data-index", i);

    
//     document.body.appendChild(li);
//   }


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




// function highscores(){
// var initials = localStorage.getItem("initials");
// var score = localStorage.getItem("score");
// scores=[score]
// }
// storeduser.forEach(function(score) {
//     // create li tag for each high score
//     var liTag = document.createElement("li");
//     liTag.textContent = storeduser.initials+storeduser.score;

//     // display on page
//     var olEl = document.getElementById("scoreBoard");
//     olEl.appendChild(liTag);
//   });

