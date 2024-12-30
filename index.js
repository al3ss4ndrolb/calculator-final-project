const displayNumbers => () {
  
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }

  return a / b;
};

let firstNumber = 0;
let secondNumber = 0;
let operator;

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);

    default:
      return alert("invalid operator");
  }
};
