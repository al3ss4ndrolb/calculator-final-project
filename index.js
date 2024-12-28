const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let firstNumber = Number;
let secondNumber = Number;
let operator;

const operate = (operator, firstNumber, secondNumber) =>
  add || subtract || multiply || divide;
