class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }
  // what we need the calculator to do
  // first, clear the prev and curr text
  clear() {
    this.currOp = "";
    this.prevOp = "";
    this.operation = undefined;
  }
  // delete numbers
  delete() {}
  // add numbers
  appendNumber(number) {
    // this.currOp = number;
    this.currOp = this.currOp.toString() + number.toString();
  }
  // all of these could fit in one if else statement
  chooseOperation(operation) {}
  // add
  // subtract
  // divide
  // multiply
  // equal or solve
  solve() {}

  updateDisplay() {
    this.currOpText.innerText = this.currOp;
  }
}

const numberButtons = document.querySelectorAll("#number");
const operationsButtons = document.querySelectorAll("#operation");
const equalsButton = document.getElementById("equal");
const acButton = document.getElementById("ac");
const delButton = document.getElementById("del");
const prevOpText = document.getElementById("prev-op");
const currOpText = document.getElementById("curr-op");

const calculator = new Calculator(prevOpText, currOpText);
console.log(numberButtons.length);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
