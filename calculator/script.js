let display = document.getElementById('display');
let currentInput = '';

function append(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '';
  }
}
