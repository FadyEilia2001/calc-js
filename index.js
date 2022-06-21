const numberBtn = document.querySelectorAll(".number");
const mainDisplay = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("plus");
const equalBtn = document.querySelector(".equal-sign");
const operands = document.querySelectorAll(".operator");

let displayNumbers = "";
let previousNumber = 0;
let currentNumber = 0;
let mathOperator = "";

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers += button.textContent;
    renderDisplay();
  });
});

operands.forEach((operator) => {
  operator.addEventListener("click", () => {
    mathOperator = operator.textContent;
    previousNumber = parseFloat(displayNumbers);
    displayNumbers = "";
    renderDisplay();
    console.log(`prev num ${previousNumber}`);
  });
});

equalBtn.addEventListener("click", () => {
  currentNumber = parseFloat(displayNumbers);

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
});

clearBtn.addEventListener("click", () => {
  displayNumbers = "";
  currentNumber = 0;
  previousNumber = 0;
  renderDisplay();
});

function renderDisplay() {
  mainDisplay.textContent = displayNumbers;
}

function clearDisplay() {
  displayNumbers = "";
  mainDisplay.textContent = "";
}
