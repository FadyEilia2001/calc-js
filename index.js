const numberBtn = document.querySelectorAll(".number")
const display = document.getElementById('display')
const clearBtn = document.getElementById('clear')
const plusBtn = document.getElementById('plus')

let numOne = parseInt(displayContent)
console.log(numOne)
let numTwo = 0

let displayContent = "";






numberBtn.forEach((button) => {
    
    button.addEventListener('click', ()=>{
        displayContent += button.textContent
        renderDisplay()
    })
})

clearBtn.addEventListener('click', cleardisplay)








function renderDisplay () {
    display.textContent = displayContent
}

function cleardisplay () {
    displayContent = ""
    renderDisplay()
}

