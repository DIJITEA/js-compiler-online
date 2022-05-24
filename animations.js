let codeRunButtons = document.querySelectorAll('.code__run-button')
codeRunButtons.forEach(element => {
    element.addEventListener("mouseenter", ()=>{codeRunButtonsActive(element)}, false);
    element.addEventListener("mouseout", ()=>{codeRunButtonsActive(element)}, false);
});

function codeRunButtonsActive (element){
    element.classList.toggle('code__run-button--active')
    element.querySelector('h2').classList.toggle('code__run-button-header--active')
}

