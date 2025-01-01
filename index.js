const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button-container button");

let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldResetDisplay = false; // Used to reset display after an operator

// Functions for basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error" : a / b);

// Main operate function
const operate = (operator, firstNumber, secondNumber) => {
  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error";
  }
};

// Update display with button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "Clear") {
      clearCalculator();
    } else if (value === "=") {
      evaluate();
    } else if (isOperator(value)) {
      setOperator(value);
    } else {
      appendNumber(value);
    }
  });
});

// Helper functions
const clearCalculator = () => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = null;
  shouldResetDisplay = false;
};

const evaluate = () => {
  if (!operator || !firstNumber || shouldResetDisplay) return;
  secondNumber = display.textContent;
  const result = operate(operator, firstNumber, secondNumber);
  display.textContent = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = null;
  shouldResetDisplay = true;
};

const setOperator = (op) => {
  if (operator && !shouldResetDisplay) {
    evaluate();
  }
  operator = op;
  firstNumber = display.textContent;
  shouldResetDisplay = true;
};

const appendNumber = (number) => {
  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = number;
    shouldResetDisplay = false;
  } else {
    display.textContent += number;
  }
};
