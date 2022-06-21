const numberBtn = document.querySelectorAll(".number")
const mainDisplay = document.getElementById('display')
const secondaryDisplay = document.getElementById('display-two')
const clearBtn = document.getElementById('clear')
const plusBtn = document.getElementById('plus')
const equalBtn = document.querySelector('.equal-sign')
const operands = document.querySelectorAll('.operator')
let currentNumber = []
let displayNumbers = ""
let initialNumber = 0
let total = 0



numberBtn.forEach((button)=>{
    button.addEventListener("click", ()=>{
        displayNumbers += button.textContent
        renderDisplay()
    })
})

plusBtn.addEventListener('click', ()=>{
    initialNumber = parseFloat(displayNumbers)
    displayNumbers = "" //result
    renderDisplay()
    currentNumber.push(initialNumber)
    console.log(currentNumber)
})




function renderDisplay(){
    mainDisplay.textContent = displayNumbers
}

function clearDisplay(){
    displayNumbers = ""
    mainDisplay.textContent = ""
}

//working on this
function addNumbers(){
    currentNumber.reduce((num, nextNum)=>{
        return num + nextNum
    })
}