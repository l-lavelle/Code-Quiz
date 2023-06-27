// var storeduser = JSON.parse(localStorage.getItem("userInput"))




window.addEventListener("storage", newItem);
window.dispatchEvent( new Event('storage') );
function newItem(){
    console.log(40)
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");


    // add to array and then insert variabel
    var li= document.createElement("li");
    li.textContent=initials + score;
    document.body.appendChild(li);
    localStorage.removeItem("score");
    localStorage.removeItem("initials");
}

