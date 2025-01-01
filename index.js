const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button-container button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "Clear") {
      display.textContent = "0"; // Reset the display
    } else if (value === "=") {
      try {
        // Evaluate the expression in the display
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = "Error"; // Handle invalid expressions
      }
    } else {
      // If display is "0", replace it; otherwise, append the value
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});

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
