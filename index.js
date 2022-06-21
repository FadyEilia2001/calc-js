
//DOM elements 
const numberBtn = document.querySelectorAll(".number");
const mainDisplay = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("plus");
const equalBtn = document.querySelector(".equal-sign");
const operands = document.querySelectorAll(".operator");


//variables to hold numbers, and operator
let displayNumbers = "";
let previousNumber = 0;
let currentNumber = 0;
let mathOperator = "";


//event listener for number buttons
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers += button.textContent;
    renderDisplay();
  });
});


//event listerer for operators 
operands.forEach((operator) => {
  operator.addEventListener("click", () => {
    mathOperator = operator.textContent;
    previousNumber = parseFloat(displayNumbers);
    displayNumbers = "";
    renderDisplay();
    
  });
});


//event listener for equal button
equalBtn.addEventListener("click", () => {
  currentNumber = parseFloat(displayNumbers);
  getResult()
  
});

//event listener for clear button
clearBtn.addEventListener("click", clearDisplay)


//render display based on the display number variable
function renderDisplay() {
  mainDisplay.textContent = displayNumbers;
}


//clear button function
function clearDisplay() {
  displayNumbers = "";
  currentNumber = 0;
  previousNumber = 0;
  renderDisplay();
}

//run math operation based on the operator selected

function getResult(){
  if (mathOperator === "+") {
    displayNumbers = currentNumber + previousNumber;
  } else if (mathOperator === "-") {
    displayNumbers = previousNumber - currentNumber;
  } else if (mathOperator === "/") {
    displayNumbers = previousNumber / currentNumber;
  } else if (mathOperator === "x") {
    displayNumbers = previousNumber * currentNumber;
  }
  renderDisplay();
}