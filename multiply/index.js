const num1 = Math.ceil(Math.random()*100);

const num2 = Math.ceil(Math.random()*100);

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} Multiply by ${num2}?`

let score = JSON.parse(localStorage.getItem("score"))

if(!score){

    score = 0;

}

scoreEl.innerText = `score: ${score}`

const curAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    userAns = +inputEl.value;

    if(curAns === userAns){
        score++;
        updatelocalStorage()
    }
    else{
        score--;
        updatelocalStorage()
    }
});

function updatelocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
