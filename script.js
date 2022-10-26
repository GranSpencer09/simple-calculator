class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
  }
  // what we need the calculator to do
  // first, clear the prev and curr text
  // add
  // subtract
  // divide
  // multiply
  // equal or solve
}

const numberButtons = document.getElementById("number");
const operationsButtons = document.getElementById("operation");
const equalsButton = document.getElementById("equal");
const acButton = document.getElementById("ac");
const delButton = document.getElementById("del");
const prevOpText = document.getElementById("prev-op");
const currOpText = document.getElementById("curr-op");
