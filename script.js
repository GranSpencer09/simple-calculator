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
  delete() {
    this.currOp = this.currOp.toString().slice(0, -1);
  }
  // add numbers
  appendNumber(number) {
    // Prevent multiple decimal points
    if (number === "." && this.currOp.includes(".")) return;
    //console.log(this.currOp);

    this.currOp = this.currOp.toString() + number.toString();
  }
  // all of these could fit in one if else statement
  chooseOperation(operation) {
    if (this.currOp === "") return;
    if (this.prevOp !== "") {
      this.solve();
      console.log("running solve");
    }
    this.operation = operation;
    this.prevOp = this.currOp;
    this.currOp = "";
  }
  solve() {
    let computation;
    let curr = parseFloat(this.currOp);
    let prev = parseFloat(this.prevOp);
    if (prev === null || curr === null) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      default:
        return;
    }
    this.currOp = computation;
    this.operation = undefined;
    this.prevOp = "";
  }
  getDisplayNumber(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return "";
    return floatNumber.toLocaleString("en");
  }

  updateDisplay() {
    this.currOpText.innerText = this.getDisplayNumber(this.currOp);
    if (this.operation != null) {
      this.prevOpText.innerText = `${this.getDisplayNumber(this.prevOp)} ${
        this.operation
      }`;
    } else {
      this.prevOpText.innerText = "";
    }
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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    console.log(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.solve();
  calculator.updateDisplay();
});

acButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

delButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
