const textareaEl = document.getElementById("textarea");

const totalcountEl = document.getElementById("total-counter");

const remainingcountEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{

    updateCounter();

})

function updateCounter() {
    totalcountEl.innerText = textareaEl.value.length;
    
    remainingcountEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}