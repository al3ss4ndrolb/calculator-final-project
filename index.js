const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".calculator-container button");

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      // Ensure this clears the calculator
      clearCalculator();
    } else if (value === "=") {
      evaluate();
    } else if (isOperator(value)) {
      setOperator(value);
    } else if (!isNaN(value)) {
      // Append only valid numbers
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

  // Check for invalid results (like division by zero)
  if (result === "Error") {
    display.textContent = "Error";
    firstNumber = "";
    operator = null;
    shouldResetDisplay = true;
    return;
  }

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
    display.textContent = number; // Replace the display content
    shouldResetDisplay = false; // Reset this flag after updating the display
  } else {
    display.textContent += number; // Append the number to the display
  }
};

const isOperator = (value) => ["+", "-", "*", "/"].includes(value);
