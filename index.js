const numberBtn = document.querySelectorAll(".number");
const mainDisplay = document.getElementById("display");
const secondaryDisplay = document.getElementById("display-two");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("plus");
const equalBtn = document.querySelector(".equal-sign");
const operands = document.querySelectorAll(".operator");
let currentNumber = [];
let displayNumbers = "";
let initialNumber = 0;
let secondaryNumber = 0;
let total = 0;

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    displayNumbers += button.textContent;
    renderDisplay();
  });
});

plusBtn.addEventListener("click", () => {
  initialNumber = parseFloat(displayNumbers);
  displayNumbers = ""; //result
  renderDisplay();
  currentNumber.push(initialNumber);
  console.log(currentNumber);
});

equalBtn.addEventListener("click", () => {
  console.log("button clicked");
  secondaryNumber = parseFloat(displayNumbers);
  currentNumber.push(secondaryNumber);
  displayNumbers = "";
  renderDisplay();
  const result = currentNumber.reduce((num, nextNum) => {
    return num + nextNum;
  });
  displayNumbers = result;
  renderDisplay();
});

equalBtn.addEventListener("click", {});

function renderDisplay() {
  mainDisplay.textContent = displayNumbers;
}

function clearDisplay() {
  displayNumbers = "";
  mainDisplay.textContent = "";
}

clearBtn.addEventListener("click", () => {
  displayNumbers = "";
  result = 0;
  initialNumber = 0;
  secondaryNumber = 0;
  currentNumber = [];
  renderDisplay();
});

//working on this
// function addNumbers() {
//   currentNumber.reduce((num, nextNum) => {
//     return num + nextNum;
//   });
// }
